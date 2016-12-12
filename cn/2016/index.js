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
		brief: '喜欢不务正业，Nginx 与 SystemTap 贡献者。以写程序为主，喜欢摆弄各种 UNIX 风格的工具，\
		以及不同的编程语言，例如 C/C++、Lua、Perl 等等'
	}, {
		class: 'thefosk',
		name: 'Marco Palladino',
		job: 'CTO @Mashape',
		brief: 'One of the core maintainer of Unirest and Kong, the most popular open-source API gateway for Microservices.  Creator of the largest API marketplace in the world.\
Co-founded Mashape, the company behind Kong and the API marketplace.'
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

	global.__SCHEDULE__ = schedule = [{
		time: "8:30",
		doing: '<span class="red">签到</span>'
	}, {
		time: "9:00",
		doing: "开场"
	}, {
		time: '9:10',
		name: '温铭',
		doing: 'OpenResty 软件基金会的过去、现在和未来',
		ppt_url: 'http://resty.b0.upaiyun.com/OpenResty%E8%BD%AF%E4%BB%B6%E5%9F%BA%E9%87%91%E4%BC%9A%20%E7%9A%84%E8%BF%87%E5%8E%BB%E3%80%81%E7%8E%B0%E5%9C%A8%E5%92%8C%E6%9C%AA%E6%9D%A5.pdf',
		pdf: 'Slide1',
		ppt_url_1: 'http://resty.b0.upaiyun.com/%E9%AB%98%E6%80%A7%E8%83%BD%E6%9C%8D%E5%8A%A1%E7%AB%AF%E7%9A%84%E5%87%A0%E4%B8%AA%E6%83%8A%E4%BA%BA%E7%9C%9F%E7%9B%B8.pdf',
		pdf_1: 'Slide2'
	}, {
		time: '9:40',
		name: '章亦春',
		doing: 'OpenResty 2016 新发展',
		ppt_url: 'http://openresty.org/slides/New-development-of-OpenResty-in-2016.pdf',
		pdf: 'Slide',
		video_url: 'http://openresty.org/videos/openresty-con-2016.mp4',
		video: 'Video'
	}, {
		time: '11:00',
		doing: '闪电演讲'
	}, {
		time: '11:15',
		name: 'Marco Palladino',
		title: 'Microservices & API Gateways with Kong and OpenResty',
		doing: 'Microservices & API Gateways with Kong and OpenResty',
		ppt_url: 'http://resty.b0.upaiyun.com/KONG_OPENRESTY.pdf',
		pdf: 'Slide'
	}, {
		time: '13:00',
		name: '王春雨',
		doing: '腾讯开源探索之路'
	}, {
		time: '13:45',
		name: '吴兆玉',
		doing: 'Orange:一个基于OpenResty的API Gateway',
		ppt_url: 'http://resty.b0.upaiyun.com/orange.pdf',
		pdf: 'Slide'
	}, {
		time: '14:30',
		name: '周晶',
		doing: '新浪移动 OpenResty 应用开发实践'
	}, {
		time: '15:15',
		doing: '<span class="blue">茶歇</span>'
	}, {
		time: '15:30',
		name: '张顺',
		doing: 'OpenResty与语音交互',
		ppt_url: 'http://resty.b0.upaiyun.com/openresty-con2016-aaashun.pdf',
		pdf: 'Slide'
	}, {
		time: '16:15',
		name: '叶靖',
		doing: 'OpenResty在云处理服务集群中的应用',
		ppt_url: 'http://yejingx.b0.upaiyun.com/OpenResty%E5%9C%A8%E4%BA%91%E5%A4%84%E7%90%86%E6%9C%8D%E5%8A%A1%E9%9B%86%E7%BE%A4%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8.pdf',
		pdf: 'Slide'
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
					// if ($2 == 'pdf' && value[$2]) {
					// 	return '<a class="blue" download=' + value[$2] + ' href=' + PDF_PATH + value[$2] + '>演讲稿</a>'
					// }
					return value[$2] ? value[$2] : '';
				});
			} else {
				scheduleHtml += scheduleTmpl2.replace(/{(\w+)}/g, function($1, $2) {
					// if ($2 == 'pdf' && value[$2]) {
					// 	return '<a class="blue" download=' + value[$2] + ' href=' + PDF_PATH + value[$2] + '>演讲稿</a>'
					// }
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