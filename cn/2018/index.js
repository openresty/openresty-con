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
      job: '华数传媒'
    },
    {
      name: '蔡书',
      icon: 'cs.jpg',
      job: 'Polaristech'
    },
    {
      name: '戴冠兰',
      icon: 'dgl.jpg',
      job: 'Kong Inc'
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
      job: 'Kong Inc'
    },
    {
      name: '罗泽轩',
      icon: 'lzx.jpg',
      job: 'OpenResty Inc'
    },
    {
      name: '王发康',
      icon: 'wky.jpg',
      job: '阿里巴巴'
    },
    {
      name: '王利超',
      icon: 'wyc.jpg',
      job: '掌阅科技'
    },
    {
      name: '吴中骅',
      icon: 'wzy.jpg',
      job: '同程艺龙'
    },
    {
      name: '张超',
      icon: 'zc.jpg',
      job: '又拍云'
    },
    {
      name: '周俊',
      icon: 'zj.jpg'
    },
    {
      name: '王克毅',
      icon: 'anonymous.jpg',
      job: '火币'
    },
    {
      name: '洪晓龙',
      icon: 'anonymous.jpg',
      job: '阿里巴巴'
    },
    {
      name: '顾小平',
      icon: 'anonymous.jpg',
      job: '腾讯'
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

  window.addEventListener('resize', function() {
    if (isPC()) {
      initPage();
    }
  });
})(this, document);
