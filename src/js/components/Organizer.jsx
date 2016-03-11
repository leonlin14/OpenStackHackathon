import React from 'react';
import { Link } from 'react-router';
import I18n from 'Extension/I18n.jsx';

// Decorators
import { flux } from 'Decorator';

// Components
import organizer from 'Source/images/organizer.jpg';

var textIcon = {
	verticalAlign: 'middle'	
};
var descStyle = {
	marginTop: '5px',
	marginBottom: 0
};

@flux
class Organizer extends React.Component {
	constructor(props, context) {
		super(props, context);
//		console.log(context);
		this.state = {
			'language': this.context.flux._state.Localization.currentLocale
		}
	}

	render() {
		var organizerState;

		if (this.state.language == 'zh-TW') {
			organizerState = (
				<section>
					<div className={'ui basic center aligned very padded segment'}>
						<div className={'ui two column middle aligned stackable grid'}>
							<div className={'mobile only column'}>
								<img src={organizer} className={'ui centered image'} />
							</div>
							<div className={'column'}>
								<div className={'ui basic left aligned segment'}>
									<h3 className="section-tip"><i className="material-icons" style={textIcon}>assignment_ind</i> 我們的夥伴</h3>
									<p style={descStyle}>
										<strong>主辦單位：</strong><br />OpenStack 基金會、黑客松台灣
									</p>
									<p style={descStyle}>
										<strong>合作社群：</strong><br />TWOSUG、MakerCup、IoT Taiwan
									</p>
									<p style={descStyle}>
										<strong>協辦單位：</strong><br />inwinSTACK、卡市達創業加油站、LetSchool
									</p>
									<p style={descStyle}>
										<strong>贊助單位：</strong><br />台灣土地開發、CCAT、ITRI、DOIT、IDB、inwinSTACK、QCT
									</p>
									<p style={descStyle}>
										<strong>合作學術單位：</strong><br />清華大學、交通大學、台灣大學
									</p>
								</div>
							</div>
							<div className={'tablet only computer only column'}>
								<img src={organizer} className={'ui large centered image'} />
							</div>
						</div>
					</div>
				</section>
			);
		} else {
			organizerState = (
				<section>
					<div className={'ui basic center aligned very padded segment'}>
						<div className={'ui two column middle aligned stackable grid'}>
							<div className={'mobile only column'}>
								<img src={organizer} className={'ui centered image'} />
							</div>
							<div className={'column'}>
								<div className={'ui basic left aligned segment'}>
									<h3 className="section-tip"><i className="material-icons" style={textIcon}>assignment_ind</i> Organizer</h3>
									<h1 className="main-title section-title">
										OpenStack Foundation Co-hosts and Co-organizer:
									</h1>
									<p style={descStyle}>
										OpenStack, Hackathon Taiwan, inwinSTACK, Taiwan Land Development Corporation, Custardcream, Aptira, Wiwynn, ZyZEL.
									</p>
								</div>
							</div>
							<div className={'tablet only computer only column'}>
								<img src={organizer} className={'ui large centered image'} />
							</div>
						</div>
					</div>
				</section>
			);
		}

		return organizerState;
	}
}

export default Organizer;
