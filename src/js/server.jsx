import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import Fluky from 'fluky';
import Entry from './Entry.jsx';
import App from './App.jsx';

// Flux architecture
import Actions from './actions';
import Stores from './stores';
import Extensions from './extensions';

var options = {};
var routes = null;

var initRoutes = function() {
	if (routes)
		return routes;

	routes = {
		path: '/',
		component: App,
		childRoutes: []
	};

	for (var index in server.routes) {
		var route = server.routes[index];
		if (route.path == '/') {
			routes.indexRoute = {
				component: route.handler
			};
			continue;
		}

		routes.childRoutes.push({
			path: route.path,
			component: route.handler
		});
	}

	return routes;
}

function createElement(Component, props) {
	return <Component {...props}/>
}

function generateNewContent(fluky, component, callback) {

	// Pure re-rendering and do not trigger any FLUX mechanism
	fluky.disabledEventHandler = true;
	var html = ReactDOMServer.renderToStaticMarkup(component);

	// Retern final pagee
	callback(null, {
		content: html,
		state: fluky.state
	});
}

var initEntry = function(error, redirectLocation, renderProps, state, userdata, callback) {

	// Initializing FLUX framework
	var fluky = Fluky.createInstance();

	fluky.options = {
		userdata: userdata,
		statics: options
	};

	// Initializing state
	if (state)
		fluky.setInitialState(state);

	// Loading parts of frameworks
	fluky.load(Actions, Stores, Extensions);

	var component = (
		<Entry flux={fluky}>
			<RoutingContext {...renderProps} createElement={createElement} />
		</Entry>
	);

	function *done() {

		// just fire once
		fluky.off('idle', done);

		generateNewContent(fluky, component, callback);
	}

	function *rendered() {

		fluky.off('action.Lantern.rendered', rendered);
		fluky.serverRendering = true;

		generateNewContent(fluky, component, callback);
	}

	// Wait until everything's done
	//fluky.on('idle', done);
	fluky.on('action.Lantern.rendered', rendered);

	// Start to initialize page
	var html = ReactDOMServer.renderToStaticMarkup(component);

	setImmediate(function() {
		var componentRef = fluky.getState('Lantern').componentRef;
		if (!componentRef) {
		// There is no need to prefetch
//		if (!fluky._refs) {
//			fluky.off('idle', done);

			// Generate immediately
			callback(null, {
				content: html,
				state: fluky.state
			});
		}
	});
};

// Server rendering
var render = function(reqPath, state, userdata) {

	return function(callback) {

		// Initlaizing react router
		match({ routes: initRoutes(), 'location': reqPath }, (error, redirectLocation, renderProps) => {
			if (error)
				return;

			// Initializing page
			initEntry(error, redirectLocation, renderProps, state, userdata, callback);
		});
	};
};

var server = module.exports = {
	routes: require('./routes.js'),
	render: render,
	init: function(opts) {

		if (!opts)
			return;

		options = opts;
	}
};
