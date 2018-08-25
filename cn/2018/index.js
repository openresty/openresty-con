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
      class: 'lec4',
      name: '章亦春',
      job: 'OpenResty 开源项目创建者',
      brief:
        'OpenResty 开源项目创始人，OpenResty Inc. 公司创始人兼 CEO，NGINX 和 LuaJIT 等众多开源项目贡献者'
    }
  ];

  global.__SCHEDULE__ = schedule = [];

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
  function initPage() {
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
  }

  function isPC() {
    return window.matchMedia('(min-width: 421px)').matches;
  }

  var about = byId('about');
  var lecturerList = byClass('lecturer-list')[0];
  var momentList = byId('moment-list');
  var imageMark = byId('image-mask');
  var expandedImage = byId('expand-image');

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
      // var whereIsChun = 3;
      var whereIsChun = 0;

      // 检测是否头像为140像素, 即是放大的图片
      if (target.classList.contains('avatar-140')) {
        return false;
      }

      // 初始化显示头像为章亦春
      if (e.INIT_PAGE) {
        target = target.children[whereIsChun];
        index = whereIsChun + 1;
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

  initPage();

  window.addEventListener('resize', function() {
    if (isPC()) {
      initPage();
    }
  });
})(this, document);
