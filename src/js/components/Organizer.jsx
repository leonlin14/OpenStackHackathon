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
									<strong>指導單位:</strong><br /> 行政院科技會報辦公室
									</p>
									<p style={descStyle}>
									<strong>主辦單位/執行單位:</strong><br /> 經濟部技術處、經濟部工業局、TWOSUG, 黑客松台灣, QCT, InwinStack, 台灣雲端運算產業協會, 財團法人資訊工業策進會
									<p style={descStyle}>
									<strong>雲端運算平台由:</strong><br /> <a href="http://qct.io>">QCT</a> and inwinSTACK
									</p>

									<p style={descStyle}>
									贊助單位: Aptira, Inventec
									</p>
									<p style={descStyle}>
										<strong>合作學術單位：</strong><br />清華大學、交通大學、台灣大學
									</p>

									<p style={descStyle}>
									黑客松台灣合作夥伴: 台灣土地開發股份有限公司, 卡市達創業加油站, LetSchool, MakerCup, IoT Taiwan
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
									 Our Team:
									</h1>
									<p style={descStyle}>
									<strong>Advised by:</strong><br /> BOST
									</p>
									<p style={descStyle}>
									<strong>Organized/Executed by:</strong><br /> DOiT、IDB、Taiwan OpenStack User Group, Hackathon Taiwan, QCT, InwinStack, CCAT, III
									<p style={descStyle}>
									<strong>Cloud powered by:</strong><br /> <a href="http://qct.io>">QCT</a> and inwinSTACK
									</p>

									<p style={descStyle}>
									Sponsored by: Aptira, Inventec
									</p>
									<p style={descStyle}>
										<strong>Cooperating Universities：</strong><br />National Tsing Hua University、National Chiao Tong University、National Taiwan University
									</p>

									<p style={descStyle}>
									Hackathon Taiwan Partners: Taiwan Land Development Corporation, Custard Cream, LetSchool, MakerCup, IoT Taiwan
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
