import React from 'react';
import { Link } from 'react-router';
import I18n from 'Extension/I18n.jsx';

// Decorators
import { flux } from 'Decorator';

// Avatar
import avatar1 from 'Source/images/avatar-1.png';

var textIcon = {
	verticalAlign: 'middle'	
};
var descStyle = {
	marginTop: '5px',
	marginBottom: 0
};
var titleStyle = {
	marginBottom: '40px'
};

@flux
class Mentors extends React.Component {
	constructor(props, context) {
		super(props, context);
//		console.log(context);
		this.state = {
			'language': this.context.flux._state.Localization.currentLocale
		}
	}

	render() {
		var mentorState;

		if (this.state.language == 'zh-TW') {
			mentorState = (
				<section>
					<div className={'ui basic aligned very padded segment'}>
						<div className={'ui two column middle aligned stackable grid organizer'}>
							<div className={'six wide column'}>
								<img src={avatar1} className={'ui large centered image'} />
							</div>
							<div className={'ten wide column'}>
								<div className={'ui basic left aligned segment'}>
									<h3 className="section-tip"><i className="material-icons">people</i></h3>
									<h1 className="main-title section-title">
										評審、導師、講者與社群工作者
									</h1>
									<p>
										OpenStack 應用軟體黑客松團隊由台灣軟硬體雲端企業、政府、社群、學術界與 OpenStack 基金會所組成，活動提供獨一無二的機會與以下專家互動：國際OpenStack、Big data、IoT、雲端計算、分散式、分析、企業、網路等等
									</p>
									<div className={'ui two column top aligned stackable grid'}>
										<div className={'column'}>
											<div className="ui list">
												<span className="item">
													<i className="comment icon"></i>
													<div className="content">
														<div className="header">Tom Fifield</div>
														<div className="description">OpenStack 基金會經理，OpenStack 核心開發者</div>
													</div>
												</span>
												<span className="item">
													<i className="comment icon"></i>
													<div className="content">
														<div className="header">David F Flanders</div>
														<div className="description">OpenStack 基金會顧問</div>
													</div>
												</span>
												<span className="item">
													<i className="comment icon"></i>
													<div className="content">
														<div className="header">Michael Jenkins</div>
														<div className="description">國際資料中心建置專家</div>
													</div>
												</span>
												<span className="item">
													<i className="comment icon"></i>
													<div className="content">
														<div className="header">Rico Lin</div>
														<div className="description">迎棧科技 首席 OpenStack 技術專家，OpenStack 核心開發者</div>
													</div>
												</span>
												<span className="item">
													<i className="comment icon"></i>
													<div className="content">
														<div className="header">Joanna Huang</div>
														<div className="description">Aptira 首席開發者第一個OpenStack基金會在世界上共同舉辦的黑客松，同時有基金會、政府、社群、學術、企業等專家一同籌辦，OpenStack 基金會已規劃將台灣經驗推廣給世界各地社群，透過這場黑客松讓台灣開發者有更多在國際上被發現與推廣的機會</div>
													</div>
												</span>
											</div>
										</div>
										<div className={'column'}>
											<div className="ui list">
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">Hackathon Taiwan (黑客松台灣)</div>
														<div className="description">Chuck Yang, Leon Lin, Fred Chien, Vicki Chou, Wesley Tsai, Chris, Authur, Ti</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">AvengerGear (戰裝科技)</div>
														<div className="description">Alex Lau</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">SwiftStack</div>
														<div className="description">Charles Hsu, Hugo Kuo</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">inwinSTACK (迎棧科技)</div>
														<div className="description">Sam Chen, Lyan, Lane, Cameron, Jelly, ChienChih, Yu-Jung Cheng, Getter, Bevis Chen, Jessica Wu, Joseph Wang</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">ITRI</div>
														<div className="description">Allen, Anita, Robert Hsu, Peter Lai, Jason Wu, MingFen Lin, George Chen</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">數位無限</div>
														<div className="description">Josh Chai (執行長)</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">台灣大學</div>
														<div className="description">Wei-Chung Hsu, Shih-Hao Hung, Chi-Sheng Shih</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">清華大學</div>
														<div className="description">Jerry Chou</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">交通大學</div>
														<div className="description">Vincent Tseng, Charles Tsao</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">台中科技大學</div>
														<div className="description">Kuan-Chou Lai, Danny Ho</div>
													</div>
												</span>
												<span className="item">
													<i className="cube icon"></i>
													<div className="content">
														<div className="header">Other Experts</div>
														<div className="description">Jim Huang, Kuan-Cli Lee, Jhen-Wei Huang, Felix Lee</div>
													</div>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else {
			mentorState = (
				<section>
					<div className={'ui basic aligned very padded segment'}>
						<div className={'ui two column middle aligned stackable grid organizer flex'}>
							<div className={'column order-2'}>
								<img src={avatar1} className={'ui large centered image'} />
							</div>
							<div className={'column order-1'}>
								<div className={'ui basic left aligned segment'}>
									<h3 className="section-tip"><i className="material-icons">people</i></h3>
									<h1 className="main-title section-title">
										Mentors
									</h1>
									<p>
										The OpenStack Application Development Hackathon will have mentors from industry, government, and academia. This event will provide a unique opportunity to learn from the leading experts in the fields of big data, IoT, cloud computing, distributed processing, analytics, social networking, wireless technology, and much more.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		}

		return mentorState;
	}
}

export default Mentors;
