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
      name: '袁开',
      icon: 'ck.jpg',
      job: '华数传媒',
      brief: '就职于华数传媒网络有限公司，新媒体事业部总架构师。介绍使用 OpenResty 建造企业网关整合企业服务，打通登录认证的方法，并介绍该设计的底层设计思路。介绍生产力工具 emmylua 及使用其文档格式建立 HTTP RPC 服务。'
    },
    {
      name: '蔡书',
      icon: 'cs.jpg',
      job: 'Polaristech',
      brief:
        '越来越多的项目基于 spring cloud 或者 kubernetes 做微服务，这里我们分享一些用 Kong 做服务网关的经历。在这里，你可以了解到，如何用 Kong 替代 zuul 做服务网关，以及如何在 kubernetes 上做更广泛的服务治理。',
    },
    {
      name: '戴冠兰',
      icon: 'dgl.jpg',
      job: 'Kong Inc',
      brief:
        '作者目前在 Kong 担任Engineering Manager，带领 Kong 的云技术团队负责从零到一研发基于 OpenResty 的 SaaS 服务。本演讲将结合作者的经验与实践，探讨搭建大规模OpenResty SaaS服务的搭建与运维技巧：包括针对OpenResty 系统调优，OpenResty 产品级Metrics系统的架构设计，以及自建数据中心和公有云Infrastructure as code 的生产实践。',
    },
    {
      name: '章亦春',
      class: 'god-lecturer',
      icon: 'chun.png',
      job: 'OpenResty Inc',
      brief:
        'OpenResty 开源项目创始人，OpenResty Inc. 公司创始人兼 CEO，NGINX 和 LuaJIT 等众多开源项目贡献者'
    },
    {
      name: 'Thibault Charbonnier',
      icon: 'thi.png',
      job: 'Kong Inc',
      brief:
        'Lead Engineer of Kong (Open Source API Gateway) and OpenResty Contributor. In this talk, we will dive into the new "mlcache" library, which aims at providing a powerful abstraction for layered caching in OpenResty. We will explore several practical use-cases for it that will help you achieve high-performance goals for your applications.',
    },
    {
      name: '罗泽轩',
      icon: 'lzx.jpg',
      job: 'OpenResty Inc',
      brief: '多个开源项目的活跃贡献者，OpenResty Inc. 工程师。以编写正确且高效的 OpenResty 应用为目的，谈谈 OpenResty/LuaJIT 中的一些内部实现，包括一些鲜为人知/值得注意的地方。'
    },
    {
      name: '王发康',
      icon: 'wfk.jpg',
      job: '阿里巴巴',
      brief: '该主题主要介绍阿里巴巴在 Tengine/Nginx 上如何使用硬件加速卸载一些 CPU 密集型运算，比如 HTTPS 和 GZIP。',
    },
    {
      name: '王利超',
      icon: 'wlc.jpg',
      job: '掌阅科技'
    },
    {
      name: '吴中骅',
      icon: 'wzy.jpg',
      job: '同程艺龙',
      brief: '主要介绍了OpenResty 在同程旅游的以下应用： 1、多功能反向代理层，缓存，限流，地理位置，泳道灰度测试等 2、无须 reload 的7层负载，取名 apigateway，增删Location，添加rewrite，动态上下upstream都无需 reload 节点 3、基于ws的实时推送平台，用 OpenResty 开发了单播，多播，广播等功能，整个ws平台集群支持横向扩展，不依赖Redis等Pub/Sub'
    },
    {
      name: '张超',
      icon: 'zc.jpg',
      job: '又拍云',
      brief: '本次分享着重于介绍又拍云 CDN 平台在不断的更新迭代中总结出的关于 OpenResty/Nginx 服务优化的经验，包括如何使用 Intel QAT 卡对 SSL 进行硬件加速、如何针对大文件下载的场景进行的分片性能优化以及如何基于容器环境构建线上实时性能分析环境的经验。',
    },
    {
      name: '顾小平',
      icon: 'gxp.jpg',
      job: '腾讯',
      brief: 'OpenResty 在腾讯游戏广告投放系统中，每年支撑数亿营销费用投放；在腾讯游戏社区类内容产品中，支持每天数亿次API访问请求。本次分享内容包括：*怎样利用 OpenResty 快速搭建实时竞价广告投放引擎；      *怎样利用 OpenResty 轻松处理10万+QPS广告交易平台的实时竞价请求；      *如何用火焰图指导性能优化；',
    },
    {
      name: '周俊',
      icon: 'zj.jpg'
    },
    {
      name: '王克毅',
      icon: 'wky.jpg',
      job: '火币',
      brief: '介绍 Urn 语言 (一种用 Lua 实现的 Lisp 方言)，以及其在实际工作中与 OpenResty 搭配使用的经验。Lisp 是一种历史悠久，使用灵活的编程语言，适当使用可以有很高的开发效率，结合 OpenResty 的优良性能，会使开发过程更加行云流水。'
    },
    {
      name: '洪晓龙',
      icon: 'hxl.jpg',
      job: '阿里巴巴',
      brief: '主要介绍阿里云 tengine 团队在过去多年服务客户的过程中，在NGINX/tengine 开发历程中遇到各种新场景新问题，为了定位和解决问题，系统性地提出多种解决方案，创新性地沉淀出多种监控技巧和监控工具，帮助我们快速定位海量用户问题和系统问题。',
    }
  ];
  var schedule = [
    {
      name: '张超',
      doing: '又拍云 OpenResty/Nginx 服务优化实践'
    },
    {
      name: '顾小平',
      doing: 'OpenResty在腾讯游戏广告投放系统中的应用'
    },
    {
      name: '章亦春',
      doing: 'OpenResty 商业支持与 OpenResty Trace 平台'
    },
    {
      name: '洪晓龙',
      doing: 'How we deep monitoring NGINX'
    },
    {
      name: '戴冠兰',
      doing: '大规模OpenResty SaaS服务构建实践与技巧'
    },
    {
      name: '吴中骅',
      doing: 'OpenResty在同程旅游的应用'
    },
    {
      name: '袁开',
      doing: 'OpenResty 企业网关应用'
    },
    {
      name: '蔡书',
      doing: 'Kong 做微服务网关的实践'
    },
    // 11.18
    {
      name: 'Thibault Charbonnier',
      doing: 'Layered caching in OpenResty'
    },
    {
      name: '罗泽轩',
      doing: '如何编写正确且高效的OpenResty应用'
    },
    {
      name: '章亦春',
      doing: 'OpenResty 开源新发展'
    },
    {
      name: '王发康',
      doing: '阿里七层流量入口Tengine硬件加速探索之路'
    },
    {
      name: '王克毅',
      doing: '把 Lisp 代码塞进 OpenResty'
    },
    {
      name: '周俊',
      doing: 'OpenResty 实践 CC 攻击防护'
    },
    {
      name: '王利超',
      doing: '基于 OpenResty 和 zookeeper 实现分布式高可用动态路由转发方案'
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
  var whereIsOther = 10;
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

  // window.addEventListener('resize', function() {
  //   if (isPC()) {
  //     initPage();
  //   }
  // });
})(this, document);
