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

  global.__LECTURER_ABOUT__ = lecturerAbout = [
    {
      class: 'lec1',
      name: '龚凌晖',
      job: 'Strikingly 首席架构师',
      brief:
        '2013 年加入硅谷初创企业 Strikingly, 是 Strikingly 招聘的第一个工程师, 目前在团队中负责后端架构, \
		自动化运维以及数据平台等团队的项目研发和团队管理。当前在技术领域主要关注 Web 应用的弹性伸缩、高可用以及安全性。\
		工作之外最大的爱好是科幻小说和电影'
    },
    {
      class: 'lec2',
      name: 'codedump',
      job: '游戏服务器后台开发者',
      brief:
        '长期从事互联网后端服务开发工作。曾经在网易等公司从事游戏服务器后台开发，在网络游戏开发工作期间\
	  接触到使用 C++ 编写服务核心引擎和使用 Lua 脚本编写游戏逻辑的技术组合后，对 Lua 产生了浓厚的兴趣，\
	  遂开始研究其实现原理，陆续公布于网络。个人博客：www.codedump.info 《Lua 设计与实现》作者'
    },
    {
      class: 'lec3',
      name: '章亦春',
      job: 'OpenResty 开源项目创建者',
      brief:
        'OpenResty 开源项目创始人，OpenResty Inc. 公司创始人兼 CEO，NGINX 和 LuaJIT 等众多开源项目贡献者'
    },
    {
      class: 'lec4',
      name: '孙大同',
      job: 'OpenResty 公司技术合伙人',
      brief:
        'OpenResty 公司技术合伙人，OpenResty 开源项目贡献者。曾在 LinkedIn，Cloudflare 等公司工作。\
		对 NGINX，Linux Kernel 等有深入的研究。痴迷于 Linux 下的高性能网络程序开发以及性能优化'
    },
    {
      class: 'lec5',
      name: '聂永',
      job: '新浪微博移动产品工程师',
      brief:
        '来自于微博产品部，负责有移动后端网络基础架构设施建设和维护等。专注后端，喜欢分享，喜欢折腾'
    },
    {
      class: 'lec6',
      name: '李凯',
      job: '快乐茄后台研发工程师',
      brief: '专注于高并发场景解决方案，擅长 Python/Java/Lua 语言开发，对 OpenResty 有较多的实践案例，热爱新技术，喜欢折腾'
    },
    {
      class: 'lec7',
      name: '周晶',
      job: '微博平台研发部高级架构师',
      brief: '前新浪移动系统架构组负责人，新浪移动期间负责有移动后端平台架构，致力于OpenResty在公司的落地，	目前主要关注各种高性能服务化相关架构，生命在于折腾，爱技术、爱分享'
    }
  ];

  global.__SCHEDULE__ = schedule = [
    {
      time: '8:45',
      doing: '<span class="red">签到</span>'
    },
    {
      time: '9:15',
      doing: '开场'
    },
    {
      time: '9:30',
      name: '龚凌晖',
      doing: 'OpenResty 在 Strikingly 集群架构的应用'
    },
    {
      time: '10:30',
      name: '章亦春',
      doing: 'OpenResty 的商业化和小语言'
    },
    {
      time: '13:30',
      name: '聂永',
      doing: '基于 OpenResty 构建一站式应用服务器实践'
    },
    {
      time: '14:30',
      name: '孙大同',
      doing: 'NGINX Stream 简介及 OpenResty 对其支持'
    },
    {
      time: '15:30',
      name: 'codedump',
      doing: 'Lua 5.1.4 GC 原理'
    },
    {
      time: '16:30',
      name: '李凯',
      doing: '基于 OpenResty 实现 IM 后台'
    },
    {
      time: '17:30',
      name: '周晶',
      doing: 'OpenResty 在微博服务化进程中的应用'
    }
  ];

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

    lecturerList.addEventListener(
      'mouseover',
      function(e) {
        var target = e.target;
        if (target.classList.contains('gray')) {
          target.classList.remove('gray');
          target.addEventListener(
            'mouseout',
            function addGray(e) {
              if (!this.classList.contains('largen')) {
                this.classList.add('gray');
                target.removeEventListener('mouseout', addGray);
              }
            },
            false
          );
          // 停止事件冒泡
          e.stopPropagation();
        }
      },
      false
    );

    // document.addEventListener("DOMContentLoaded", function(event) {
    // 需要重构
    renderSchedule();
    // });
  };

  var about = byId('about');
  var lecturerList = byClass('lecturer-list')[0];
  // 记录前一个被点击的头像
  var preClickedAvatar = null;
  var preClickedIndex = -1;

  // 使用事件委托，减少事件绑定
  lecturerList.addEventListener(
    'click',
    function(e) {
      var target = e.target;
      var index = parseInt(target.getAttribute('data-index'));
      var aboutHtml = byId('about-tmpl').innerHTML;

      // 检测是否头像为140像素, 即是放大的图片
      if (target.classList.contains('avatar-140')) {
        return false;
      }

      // 初始化显示头像为章亦春
      if (e.INIT_PAGE) {
        let whereIsChun = 3;
        target = target.children[whereIsChun];
        index = whereIsChun;
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
    },
    false
  );

  initPage();

  window.addEventListener('resize', function() {
    if (window.matchMedia('(min-width: 421px)').matches) {
      initPage();
    }
  });
})(this, document);
