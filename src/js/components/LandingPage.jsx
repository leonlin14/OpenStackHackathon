import React from 'react';
import Header from './Header.jsx';
import I18n from 'Extension/I18n.jsx';

// Decorators
import { flux, page } from 'Decorator';

// Components
import Organizer from './Organizer.jsx';
import Participation from './Participation.jsx';
import Mentors from './Mentors.jsx';

// Section image
import appIcon from 'Source/images/app-icon.png';
import techIcon from 'Source/images/tech-icon.png';

// Avatar
import avatar1 from 'Source/images/avatar-1.png';
import avatar2 from 'Source/images/avatar-2.png';
import avatar3 from 'Source/images/avatar-3.png';

// Images
import speaker from 'Source/images/speaker.png';
import fbPic from 'Source/images/fbPic.jpg';

var sectionStyle = {
};
var mainCardStyle = {
	marginTop: '-20px'
};
var mainCardIcon = {
	fontSize: '3em'
};
var textIcon = {
	verticalAlign: 'middle'	
};
var removeBottomPadding = {
	paddingBottom: 0	
};

@page((handle) => {
	return {
		ogMeta: {
			'og:title': '全球首次大型 OpenStack 黑客松活動就在台灣！',
			'og:image': handle.flux.getState('Service').externalUrl + fbPic
		}
	};
})
@flux
class LandingPage extends React.Component {

	constructor(props, context) {
		super(props, context);
//		console.log(context);
		this.state = {
			'language': this.context.flux._state.Localization.currentLocale
		}
	}

	render() {
		console.log(this.state)

		return (
			<div className='main-page'>
				<Header ref='header' />

				<div className={'ui basic center aligned segment landing-page-header'}>
					<h1 className={'ui inverted header main-title'}>
						Open Stack <i className="material-icons">clear</i> <I18n sign='landing_page.main.title'>Hackathon Taiwan</I18n>
					</h1>
					<h2 className={'ui inverted header'}>
						<I18n sign='landing_page.title'>OpenStack Application Hackathon<br />2016 Taipei, Taiwan</I18n>
					</h2>
					<br />
					<a href="http://hackathon.kktix.cc/events/2016-mar-openstack-hackathon" className="ui inverted huge button"><I18n sign='landing_page.entry_button'>Register</I18n></a>
					<h2 className={'ui inverted header'}>
						2016.03.18 ~ 03.20
					</h2>
				</div>

				<section style={mainCardStyle}>
					<div className={'ui basic very padded segment'}>
						<div className={'ui four column divided stackable grid'}>

							<div className={'top aligned column'}>
								<div className={'ui basic left aligned segment'} style={removeBottomPadding}>
									<h2 className={'ui left aligned icon header'}>
										<div><I18n sign='landing_page.card_promote.title'>Promote</I18n></div>
										<div className={'sub header'}><I18n sign='landing_page.card_promote.text'>We would like to promote the adoption of OpenStack and foster development efforts targeted for this platform.</I18n></div>
									</h2>
									<i className="material-icons" style={mainCardIcon}>trending_up</i>
								</div>
							</div>

							<div className={'top aligned column'}>
								<div className={'ui basic left aligned segment'}>
									<h2 className={'ui left aligned icon header'} style={removeBottomPadding}>
										<div><I18n sign='landing_page.card_educate.title'>Educate</I18n></div>
										<div className={'sub header'}><I18n sign='landing_page.card_educate.text'>Provide a challenging environment that accelerates the learning and creativity required to build an OpenStack application.</I18n></div>
									</h2>
									<i className="material-icons" style={mainCardIcon}>school</i>
								</div>
							</div>

							<div className={'top aligned column'}>
								<div className={'ui basic left aligned segment'}>
									<h2 className={'ui left aligned icon header'} style={removeBottomPadding}>
										<div><I18n sign='landing_page.card_innovate.title'>Innovate</I18n></div>
										<div className={'sub header'}><I18n sign='landing_page.card_innovate.text'>Provide a community of support that encourages innovative applications that take advantage of the efficiencies of cloud computing.</I18n></div>
									</h2>
									<i className="material-icons" style={mainCardIcon}>fingerprint</i>
								</div>
							</div>

							<div className={'top aligned column'}>
								<div className={'ui basic left aligned segment'}>
									<h2 className={'ui left aligned icon header'}>
										<div><I18n sign='landing_page.card_cooperate.title'>Cooperate</I18n></div>
										<div className={'sub header'}><I18n sign='landing_page.card_cooperate.text'>Generate a spirit of camaraderie through teamwork.</I18n></div>
									</h2>
									<i className="material-icons" style={mainCardIcon}>person_add</i>
								</div>
							</div>
							
						</div>
					</div>
				</section>

				<Organizer />

				<section>
					<div className={'ui basic aligned very segment'}>
						<div className={'ui two column middle aligned stackable grid'}>
							<div className={'column section-line'}></div>
							<div className={'column'}></div>
						</div>
					</div>
				</section>

				<Participation />

				<Mentors />

				<div className={'ui basic inverted center aligned segment'}>
					<span>Copyright &copy; 2015 Open Stack, Hackathon Taiwan Project. All Rights Reserved.</span>
				</div>
			</div>
		);
	}
}

export default LandingPage;
