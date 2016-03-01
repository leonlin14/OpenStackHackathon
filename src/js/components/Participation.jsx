import React from 'react';
import { Link } from 'react-router';
import I18n from 'Extension/I18n.jsx';

// Decorators
import { flux } from 'Decorator';

var titleStyle = {
	marginBottom: '40px'	
};

@flux
class Participation extends React.Component {
	constructor(props, context) {
		super(props, context);
//		console.log(context);
		this.state = {
			'language': this.context.flux._state.Localization.currentLocale
		}
	}

	render() {
		var participationState;

		if (this.state.language == 'zh-TW') {
			participationState = (
				<section>
					<div className={'ui basic center aligned segment'}>
						<h1 className="main-title section-title" style={titleStyle}><i className="material-icons">hdr_strong</i><br />活動方式</h1>
						<div className="ui stackable three column grid">
							<div className="three wide column"></div>
							<div className="ten wide column">
								<div className="ui piled stacked segment">
									<p>本次活動是由 OpenStack 基金會與黑客松台灣（Hackathon Taiwan）共同主辦，同時也是黑客松台灣第 16 次主場活動。我們期望藉由這次的黑客松，除了讓大家玩技術、玩想法外，能讓所有人都能試著想像未來城市和生活的樣貌。</p>
									<p>即便你是個開發者，你也可能沒聽過 OpenStack，是吧？OpenStack 與現今的網際網路、雲端應用、大數據等習習相關。你從雲端主機商上買過一個儲存空間或 VM 嗎？你知道其實這底層的技術和管理機制，大多數就是用 OpenStack 所打造出來。的確，OpenStack 離一般開發者手上的應用有些遙遠，但不可否認，大多數應用開發者都是將專案建構於這個技術之上，縱使有些陌生，大家也都受惠於 OpenStack。</p>
									<p>本次活動一定要懂 OpenStack 才能來玩嗎？別擔心！並非一定要玩 OpenStack 的底層才能參加這次的黑客松，本次黑客松活動有贊助商贊助許多機器和 VM，只要你能利用這些 VM 做出各種類型應用，也是可以來參加的！如同過去黑客松台灣主場活動一樣，除了不限定主題外，活動裡也會有多場工作坊，若對 OpenStack 、IoT 或 BigData 有興趣的人，歡迎參加！</p>
									<p>活動完全開放 — 個人、團隊、商業團隊，各團隊建議4到6人，程式支援部份提供以下程式語言相關資源：python, ruby, java, php, go, javascript, .net/c#, 可先參閱<a href="//developer.openstack.org/firstapp-libcloud/">撰寫第一支 OpenStack 應用程式教學</a>，內容以了解如何入手撰寫雲端軟體。</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		} else {
			participationState = (
				<section>
					<div className={'ui basic center aligned segment'}>
						<h1 className="main-title section-title" style={titleStyle}><i className="material-icons">hdr_strong</i><br />Participation</h1>
						<div className="ui stackable three column grid">
							<div className="three wide column"></div>
							<div className="ten wide column">
								<div className="ui piled stacked segment">
									<p>The event is open to everyone — public, private sectors and ad-hoc teams. The recommended team size should be between 4 to 6 participants with a basic software development knowledge that may include: Programming knowledge in at least one of: python, ruby, java, php, go, javascript, .net/c#, Review of the first app tutorial <a href="//developer.openstack.org/firstapp-libcloud/">http://developer.openstack.org/firstapp-libcloud/</a> and General knowledge on building cloud apps.</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			);
		}

		return participationState;
	}
}

export default Participation;
