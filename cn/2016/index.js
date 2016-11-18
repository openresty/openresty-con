/**
 * 感想：
 * (1). 过度依赖jquery等库($, on，很多原生的API不认识，DOM操作封装)
 * (2). 使用模板、reset.css, 正则表达式
 * (3). 上下左右居中 
 * (4). 浏览器兼容、设备兼容(响应式)
 * (5). 性能上优化 (http://web.jobbole.com/82551/)
 * (6). 两个数据源对应一个模板
 **/

(function(global, document) {

	var PDF_PATH = 'download/ebook/2015_con/';
	var lecturerAbout = [];
	var schedule = [];

	/**
	 * @讲师简介(需要修改简介文案直接在下面修改即可)
	 * name：名字
	 * job：职务
	 * brief：简介
	 *
	 * 暴露出数据为了兼容移动端
	 */
	global.__LECTURER_ABOUT__ = lecturerAbout = [{
		class: 'zhaoyu',
		name: '吴兆玉',
		job: '今日头条高级工程师',
		brief: '连续创业者，涉及比特币、在线教育、商务社交等领域。专注后端\
		高可用架构设计和开发，对基于OpenResty的web开发有较多实践经验'
	}, {
		class: 'zhangshun',
		name: '张顺',
		job: 'AISpeech开发总监',
		brief: '专注于将人机语音交互技术应用到生活中，设计了语音云和AIOS等语音交互基础架构。OpenResty贡献者'
	}, {
		class: 'xiangwei',
		name: '王向维',
		job: '京东商城三级列表页架构师',
		brief: '工作期间，完成了京东三级列表页由Node.js版本到OpenResty的变迁，\
		并针对三级列表页前端即服务器端做了大量的优化工作。'
	}, {
		class: 'wenming',
		name: '温铭',
		job: 'OpenResty 软件基金会 主席',
		brief: ''
	}, {
		class: 'chun',
		name: '章亦春',
		job: 'OpenResty 开源项目创建者',
		brief: '喜欢不务正业，Nginx 与 Systemtap 贡献者。以写程序为主，喜欢摆弄各种 UNIX风格的工具，\
		以及不同的编程语，例如 C/C++、Lua、Perl、Python、Haskell 等等'
	}, {
		class: 'thefosk',
		name: 'Marco Palladino',
		job: 'CTO @Mashape',
		brief: ''
	}, {
		class: 'zhoujing',
		name: '周晶',
		job: '微博平台研发部高级架构师',
		brief: '前新浪移动系统架构组负责人，新浪移动期间负责有移动后端平台架构，致力于OpenResty在公司的落地，\
		目前主要关注各种高性能服务化相关架构，生命在于折腾，爱技术、爱分享'
	}, {
		class: 'yejing',
		name: '叶靖',
		job: '又拍云系统开发工程师',
		brief: '对 Python/Lua/Go 等语言有较深入的研究，在 ngx_lua 和OpenResty模块开发方面有较多经验，\
	专注于高并发高可用服务架构设计。平时热衷于参与开源社区分享开源经验'

	}, {
		class: 'wangchunyu',
		name: '王春雨',
		job: '腾讯研发管理部 产品总监',
		brief: '12年研发管理实战经验，专注于敏捷研发工程实践，腾讯开源联盟（TOSA）组织者。'
	}];

	/**
	 * @日程表
	 * time：时间点
	 * name: 名字
	 * doing：干嘛
	 */
	// global.__SCHEDULE__ = schedule = [{
	// 	time: "8:30",
	// 	doing: '<span class="red">签到</span>'
	// }, {
	// 	time: "9:00",
	// 	doing: "开场"
	// }, {
	// 	time: "9:15",
	// 	name: "张聪",
	// 	doing: "Using ngx_lua In UPYUN 2",
	// 	pdf: 'zhangcong.pdf'
	// }, {
	// 	time: "10:10",
	// 	name: "张帅",
	// 	doing: "Be MicroService Hero",
	// 	pdf: 'zhangshuai.pdf'
	// }, {
	// 	time: "11:05",
	// 	name: "",
	// 	doing: '<span class="blue">闪电演讲(速致)</span>',
	// 	pdf: "suzhi.pdf"
	// }, {
	// 	time: "11:20",
	// 	doing: '<span class="green">颁奖</span>'
	// }, {
	// 	time: "11:25",
	// 	name: "Aapo Talvensaari",
	// 	doing: "Developing OpenResty Framework",
	// 	pdf: 'aapo.pdf'
	// }, {
	// 	time: "12:20",
	// 	doing: '<span class="red">午餐</span>'
	// }, {
	// 	time: "13:30",
	// 	name: "章亦春",
	// 	doing: "浅谈OpenResty未来发展",
	// 	pdf: "zhangyichun.pdf"
	// }, {
	// 	time: "14:30",
	// 	name: "孙传文",
	// 	doing: "Nginx+Lua模块在阿里的使用",
	// 	pdf: "sunchuanwen.pdf"
	// }, {
	// 	time: "15:25",
	// 	doing: '<span class="blue">闪电演讲</span>'
	// }, {
	// 	time: "15:45",
	// 	doing: '<span class="blue">茶歇</span>'
	// }, {
	// 	time: "16:05",
	// 	name: "朱德江",
	// 	doing: "基于OpenResty的百万级长连接推送",
	// 	pdf: "zhudejiang.pdf"
	// }, {
	// 	time: "17:00",
	// 	name: "张开涛",
	// 	doing: "Nginx+Lua在京东商品详情页的大规模应用",
	// 	pdf: "zhangkaitao.pdf"
	// }];

	global.__SCHEDULE__ = schedule = [{
		time: "8:30",
		doing: '<span class="red">签到</span>'
	}, {
		time: "9:00",
		doing: "开场"
	}, {
		name: '吴兆玉',
		doing: 'Orange:一个基于OpenResty的API Gateway'
	}, {
		name: '张顺',
		doing: 'OpenResty与语音交互'
	}, {
		name: '叶靖',
		doing: 'OpenResty在云处理服务集群中的应用'
	}, {
		name: '周晶',
		doing: '新浪移动 OpenResty 应用开发实践'
	}, {
		name: '王春雨',
		doing: '腾讯开源发展历程、案例和展望'

	}, {
		name: '温铭',
		doing: 'OpenResty 软件基金会的过去、现在和未来'
	},{
		name: 'Marco Palladino',
		title: 'Microservices & API Gateways with Kong and OpenResty',
		doing: 'Microservices & API Gateways with Kong and OpenResty'
	}]

	var byClass = function(className) {
		return document.getElementsByClassName(className);
	};

	var byId = function(id) {
		return document.getElementById(id);
	};

	function renderSchedule() {
		var scheduleTmpl1 = byId('schedule-tmpl-1').innerHTML;
		var scheduleTmpl2 = byId('schedule-tmpl-2').innerHTML;
		var scheduleHtml = '';
		schedule.forEach(function(value, index) {
			if (index % 2 == 0) {
				scheduleHtml += '<li>';
				scheduleHtml += scheduleTmpl1.replace(/{(\w+)}/g, function($1, $2) {
					if ($2 == 'pdf' && value[$2]) {
						return '<a class="blue" download=' + value[$2] + ' href=' + PDF_PATH + value[$2] + '>演讲稿</a>'
					}
					return value[$2] ? value[$2] : '';
				});
			} else {
				scheduleHtml += scheduleTmpl2.replace(/{(\w+)}/g, function($1, $2) {
					if ($2 == 'pdf' && value[$2]) {
						return '<a class="blue" download=' + value[$2] + ' href=' + PDF_PATH + value[$2] + '>演讲稿</a>'
					}
					return value[$2] ? value[$2] : '';
				});
				scheduleHtml += '</li>';
			}
		});
		byId('schedule-list').innerHTML = scheduleHtml;
	}

	// 初始化页面触发click事件, 显示章亦春图片
	var initPage = function() {
		var aboutHtml = byId('about-tmpl').innerHTML;
		var event = new Event('click');

		event.INIT_PAGE = true;
		lecturerList.dispatchEvent(event);

		lecturerList.addEventListener('mouseover', function(e) {
			var target = e.target;
			if (target.classList.contains('gray')) {
				target.classList.remove('gray');
				target.addEventListener('mouseout', function addGray(e) {
					if (!this.classList.contains('largen')) {
						this.classList.add('gray');
						target.removeEventListener('mouseout', addGray);
					}
				}, false);
				// 停止事件冒泡
				e.stopPropagation();
			}
		}, false);

		// document.addEventListener("DOMContentLoaded", function(event) {
		// 需要重构
		renderSchedule()
			// });

	};

	var about = byId('about');
	var lecturerList = byClass('lecturer-list')[0];
	// 记录前一个被点击的头像
	var preClickedAvatar = null;
	var preClickedIndex = -1;

	// 使用事件委托，减少事件绑定
	lecturerList.addEventListener('click', function(e) {
		var target = e.target;
		var index = parseInt(target.getAttribute('data-index'));
		var aboutHtml = byId('about-tmpl').innerHTML;

		// 检测是否头像为140像素, 即是放大的图片
		if (target.classList.contains('avatar-140')) {
			return false;
		}

		// 初始化显示头像为章亦春
		if (e.INIT_PAGE) {
			target = target.children[4];
			index = 5;
			preClickedIndex = index;
		}

		if (index === 0) {
			return false;
		}

		// 使用简单的HTML模板
		aboutHtml = aboutHtml.replace(/{(\w+)}/g, function($1, $2) {
			return lecturerAbout[index - 1][$2];
		});

		if (preClickedAvatar && preClickedIndex != index) {
			// preClickedAvatar.firstElementChild.style.display = 'none';
			preClickedAvatar.classList.add('gray');
			preClickedAvatar.classList.remove('largen');
		}

		target.classList.remove('gray');
		target.classList.add('largen');
		// target.firstElementChild.style.display = 'inline-block';

		about.innerHTML = aboutHtml;
		preClickedAvatar = target;
		preClickedIndex = index;

	}, false);

	initPage();

	window.addEventListener('resize', function() {
		if (window.matchMedia('(min-width: 421px)').matches) {
			initPage();
		}
	})
})(this, document)