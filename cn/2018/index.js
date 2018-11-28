(function(global, document) {
  /**
   * @嘉宾简介(需要修改简介文案直接在下面修改即可)
   * name：名字
   * icon: 头像
   * job：职务
   * brief：简介
   *
   * 暴露出数据为了兼容移动端
   */
  var lecturers = [
    {
      name: '张超',
      icon: 'zc.jpg',
      job: '又拍云',
      brief:
        '又拍云系统开发工程师，负责又拍云 CDN 平台反向代理层组件的开发和维护。Nginx/OpenResty 等开源软件爱好者。<br>本次分享会着重于介绍又拍云 CDN 平台在不断的更新迭代中总结出的关于 OpenResty/Nginx 服务优化的经验，包括构建容器化的生产环境性能分析环境、集成 SSL 硬件加速至 OpenResty及其陷阱等案例。'
    },
    {
      name: '顾小平',
      icon: 'gxp.jpg',
      job: '腾讯',
      brief:
        '顾小平，腾讯游戏营销技术后台负责人，从事Ad-Tech&Mar-Tech技术，专注于通过数据，算法，以及技术的力量来改变营销的效率和效果的提升。本次分享为大家带来OpenResty在腾讯内部的2个应用案例，一个是社区和内容营销中内部API网关luffy，重点讲述利用火焰图指导性能优化；另一个是OpenResty在腾讯游戏广告营销投放系统中的应用，通过构建RTB实时竞价网关，实时竞价引擎，轻松支持10万+QPS，支持数亿/年广告投放放费用。'
    },
    {
      name: '洪晓龙',
      icon: 'hxl.jpg',
      job: '阿里巴巴',
      brief:
        '阿里巴巴技术专家，负责阿里云CDN节点核心系统基础组件研发，Tengine开源社区maintainer。团队在过去多年服务客户过程中，在NGINX/Tengine研发历程中遇到各种新场景新问题，为定位和解决问题，系统性地提出了多种解决方案，沉淀出多种监控技巧和监控工具，帮助我们快速定位海量用户问题和系统故障。我们期望通过技术进行极致优化，为所有的互联网用户提供极致的体验。'
    },
    {
      name: '章亦春',
      class: 'god-lecturer',
      icon: 'chun.jpg',
      job: 'OpenResty Inc',
      brief:
        'OpenResty 开源项目创始人，OpenResty Inc. 公司创始人兼 CEO，NGINX 和 LuaJIT 等众多开源项目贡献者'
    },
    {
      name: '戴冠兰',
      icon: 'dgl.jpg',
      job: 'Kong Inc',
      brief:
        'OpenResty 贡献者。现就职于Kong， 担任工程经理与技术负责人，带领 Kong Cloud 、人工智能以及机器学习团队，负责产品研发与落地。他之前曾在Cloudflare 担任Tech Lead, 参与过达到万亿级别每月请求规模能力的 WAF 与 CDN 的研发。本次他将结合多年实战经验，与大家分享基于 OpenResty 大规模 SaaS 服务的架构设计、优化与运维技巧。'
    },
    {
      name: '吴中骅',
      icon: 'wzy.jpg',
      job: '同程艺龙',
      brief:
        '目前在同程艺龙机票事业群担任资深架构师，在公司内部推动了多项 OpenResty 应用，包括 API gateway 多功能负载，其包括了反代，限流，缓存，防爬，灰度等诸多功能、使用 OpenResty 开发了基于ws协议的实时推送平台、基于OpenResty开发了waf软防火墙等项目。本次主要分享API gateway在同程艺龙的实战经历，讲述OpenResty如何在每天10几亿请求量里完成ab灰度测试，如何利用OpenResty来和爬虫对抗，让业务轻松接入风控系统。'
    },
    {
      name: '蔡书',
      icon: 'cs.jpg',
      brief:
        '越来越多的项目基于 spring cloud 或者 kubernetes 做微服务，这里我们分享一些用 Kong 做服务网关的经历。在这里，你可以了解到，如何用 Kong 替代 zuul 做服务网关，以及如何在 kubernetes 上做更广泛的服务治理。'
    },
    {
      name: '罗泽轩',
      icon: 'lzx.jpg',
      job: 'OpenResty Inc',
      brief:
        '多个开源项目的活跃贡献者，OpenResty Inc. 工程师。以编写正确且高效的 OpenResty 应用为目的，谈谈 OpenResty/LuaJIT 中的一些内部实现，包括一些鲜为人知/值得注意的地方。'
    },
    {
      name: '王发康',
      icon: 'wfk.jpg',
      job: '阿里巴巴',
      brief:
        '阿里巴巴技术专家、负责阿里集团WEB统一接入层的开发及维护。秉着软硬件结合的性能优化思想，阿里七层流量入口核心系统Tengine/Nginx 是如何使用硬件加速卸载一些 CPU 密集型运算（比如 HTTPS 和 GZIP）从而取得性能提升、成本优化。'
    },
    {
      name: 'Thibault Charbonnier',
      icon: 'thi.png',
      job: 'Kong Inc',
      brief:
        'Principal Engineer at Kong Inc. and OpenResty contributor. In this talk, we will dive into the new "mlcache" library, which aims at providing a powerful abstraction for layered caching in OpenResty. We will explore several practical use-cases for it that will help you achieve high-performance goals for your applications.'
    },
    {
      name: '王克毅',
      icon: 'wky.jpg',
      brief:
        '介绍 Urn 语言 (一种用 Lua 实现的 Lisp 方言)，以及其在实际工作中与 OpenResty 搭配使用的经验。Lisp 是一种历史悠久，使用灵活的编程语言，适当使用可以有很高的开发效率，结合 OpenResty 的优良性能，会使开发过程更加行云流水。'
    },
    {
      name: '周俊',
      icon: 'zj.jpg',
      brief:
        '安全从业人员，本次议题主要是把在日常工作中处理的攻击防护事件总结整理，和大家分享交流'
    },
    {
      name: '袁开',
      icon: 'ck.jpg',
      job: '华数传媒',
      brief:
        '就职于华数传媒网络有限公司，新媒体事业部总架构师。介绍使用 OpenResty 建造企业网关整合企业服务，打通登录认证的方法，并介绍该设计的底层设计思路。介绍生产力工具 emmylua 及使用其文档格式建立 HTTP RPC 服务。'
    }
  ];
  var schedule = [
    {
      time: '8:30',
      name: '签到'
    },
    {
      time: '9:00',
      name: '张超',
      doing: '又拍云 OpenResty/Nginx 服务优化实践',
      ppt_url: 'ppt/又拍云服务优化实践--张超.pdf',
      pdf: '幻灯片'
    },
    {
      time: '9:50',
      name: '顾小平',
      doing: 'OpenResty在腾讯游戏广告投放系统中的应用',
      ppt_url: 'ppt/OpenResty在腾讯游戏营销技术中的应用--顾小平.pdf',
      pdf: '幻灯片'
    },
    {
      time: '10:40',
      name: '章亦春',
      doing: 'OpenResty 开源世界新发展',
      ppt_url: 'http://t.cn/E25hVBy',
      pdf: '幻灯片'
    },
    {
      time: '13:00',
      name: '洪晓龙',
      doing: '深度玩转 NGINX 监控',
      ppt_url: 'ppt/深度玩转NGINX监控--洪晓龙.pdf',
      pdf: '幻灯片'
    },
    {
      time: '13:45',
      name: '戴冠兰',
      doing: '大规模OpenResty SaaS服务构建实践与技巧',
      ppt_url: 'ppt/大规模OpenResty SaaS服务的搭建与运维技巧--戴冠兰.pdf',
      pdf: '幻灯片'
    },
    {
      time: '14:30',
      name: '吴中骅',
      doing: 'OpenResty 在同程艺龙的应用',
      ppt_url: 'ppt/OpenResty 在同程艺龙的应用--吴中骅.pdf',
      pdf: '幻灯片'
    },
    {
      time: '15:15',
      name: '蔡书',
      doing: 'Kong 做微服务网关的实践',
      ppt_url: 'ppt/Kong做微服务网关的实践--蔡书.pdf',
      pdf: '幻灯片'
    },
    // 11.18
    {
      time: '9:00',
      name: 'Thibault Charbonnier',
      doing: 'Layered caching in OpenResty',
      ppt_url: 'ppt/layered_caching_in_openresty--Thibault.pdf',
      pdf: '幻灯片'
    },
    {
      time: '9:50',
      name: '罗泽轩',
      doing: '如何编写正确且高效的OpenResty应用',
      ppt_url: 'ppt/如何编写正确且高效的OpenResty应用--罗泽轩.pdf',
      pdf: '幻灯片'
    },
    {
      time: '10:40',
      name: '章亦春',
      doing: '开源 OpenResty 的商业技术支持与 OpenResty Trace 平台',
      ppt_url: 'http://t.cn/E2SfrsX',
      pdf: '幻灯片'
    },
    {
      time: '13:00',
      name: '王发康',
      doing: '阿里七层流量入口Tengine硬件加速探索之路',
      ppt_url: 'ppt/阿里七层流量入口Tengine硬件加速探索之路--王发康.pdf',
      pdf: '幻灯片'
    },
    {
      time: '13:45',
      name: '王克毅',
      doing: '把 Lisp 代码塞进 OpenResty',
      ppt_url: 'ppt/把 Lisp 代码塞进 OpenResty--王克毅.pdf',
      pdf: '幻灯片'
    },
    {
      time: '14:30',
      name: '袁开',
      doing: 'OpenResty 企业网关应用',
      ppt_url: 'ppt/OpenResty 企业网关应用--袁开.pdf',
      pdf: '幻灯片'
    },
    {
      time: '15:15',
      name: '周俊',
      doing: 'OpenResty 实践 CC 攻击防护',
      ppt_url: 'ppt/OpenResty 实践 CC 攻击防护--周俊.pdf',
      pdf: '幻灯片'
    }
  ];

  global.__LECTURER_ABOUT__ = lecturers;
  global.__SCHEDULE__ = schedule;

  function byId(id) {
    return document.getElementById(id);
  }

  function toArray(collection) {
    return [].slice.apply(collection);
  }

  var lecturerList = byId('lecturer-list');
  var momentList = byId('moment-list');
  var imageMark = byId('image-mask');
	var expandedImage = byId('expand-image');
  var switcher = byId('switcher');
  var about = byId('about');
  var lecturerTmpl = byId('lecturer-tmpl').innerHTML;
  var aboutTmpl = byId('about-tmpl').innerHTML;

  // 记录前一个被点击的头像
  var preClickedAvatar = null;
  var preClickedIndex = -1;
  var isInitEvent = false;
  // 890 - (140 - 100)
  var screen = 850;
  var whereIsChun = 3;
  var whereIsOther = 9;
  var whereIsPerson = [whereIsChun, whereIsOther];

  function generateScheduleHTML(schedule) {
    var scheduleHTML = '';
    var scheduleTmpl1 = byId('schedule-tmpl-1').innerHTML;
    var scheduleTmpl2 = byId('schedule-tmpl-2').innerHTML;

    schedule.forEach(function(value, index) {
      if (index % 2 == 0) {
        scheduleHTML += '<li>';
        scheduleHTML += scheduleTmpl1.replace(/{(\w+)}/g, function($1, $2) {
          return value[$2] ? value[$2] : '';
        });
      } else {
        scheduleHTML += scheduleTmpl2.replace(/{(\w+)}/g, function($1, $2) {
          return value[$2] ? value[$2] : '';
        });
        scheduleHTML += '</li>';
      }
    });

    return scheduleHTML;
  }

  function renderSchedule() {
    var schedule17 = schedule.slice(0, 8);
    var schedule18 = schedule.slice(8);
    byId('schedule-list-17').innerHTML = generateScheduleHTML(schedule17);
    byId('schedule-list-18').innerHTML = generateScheduleHTML(schedule18);
  }

  function renderLecturerList(lecturers) {
    var lecturerHTML = lecturers
      .map(function(lecturer, index) {
        lecturer.index = index + 1;
        return lecturerTmpl.replace(/{(\w+)}/g, function($1, $2) {
          return lecturer[$2] ? lecturer[$2] : '';
        });
      })
      .join(' ');
    lecturerList.innerHTML = lecturerHTML;
  }

  function isPC() {
    return window.matchMedia('(min-width: 421px)').matches;
  }

  // 初始化页面触发click事件, 显示章亦春图片
  function initPage() {
    var event = new Event('click');
    renderLecturerList(lecturers);
    initEvents();

    event.AUTO_INDEX = whereIsChun;
    lecturerList.dispatchEvent(event);
    renderSchedule();
  }

  function initEvents() {
    switcher.addEventListener(
      'click',
      function(e) {
        var target = e.target;
        var offset = target.dataset['offset'];
        var event = new Event('click');

        if (offset === undefined) {
          return;
        }

        toArray(switcher.children).forEach(function(dot) {
          dot.classList.remove('active');
        });
        target.classList.add('active');
        lecturerList.style.transform = `translate3d(-${screen *
          offset}px, 0px, 0px)`;

        event.AUTO_INDEX = whereIsPerson[offset];
        lecturerList.dispatchEvent(event);
      },
      false
    );

    // 使用事件委托，减少事件绑定
    lecturerList.addEventListener(
      'click',
      function(e) {
        var target = e.target;
        var index = parseInt(target.getAttribute('data-index'));
        var autoIndex = e.AUTO_INDEX;

        if (autoIndex) {
          target = target.children[autoIndex];
          index = autoIndex + 1;
        }

        if (isNaN(index)) {
          return;
        }

        if (preClickedAvatar && preClickedIndex != index) {
          // preClickedAvatar.classList.add('gray');
          preClickedAvatar.classList.remove('largen');
        }

        // target.classList.remove('gray');
        target.classList.add('largen');

        about.innerHTML = aboutTmpl.replace(/{(\w+)}/g, function($1, $2) {
          return lecturers[index - 1][$2] || '';
        });

        preClickedAvatar = target;
        preClickedIndex = index;
      },
      false
    );
  }

  initPage();

  // 如果是移动端的话就不要监听click了
  if (isPC()) {
    momentList.addEventListener(
      'click',
      function(e) {
        imageMark.style.display = 'block';
        imageMark.classList.add('active');
        expandedImage.setAttribute('src', e.target.getAttribute('src'));
      },
      false
    );

    imageMark.addEventListener(
      'click',
      function(e) {
        imageMark.classList.remove('active');
        imageMark.style.display = 'none';
      },
      false
    );
  }

  // window.addEventListener('resize', function() {
  // });
})(this, document);
