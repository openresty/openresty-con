/**
 * @author monkindey
 * @description 为了兼容移动端
 */

function renderLecturerAtMobile() {
  var aboutHtml = document.getElementById('about-m-tmpl').innerHTML;
  var lecturer = document.getElementById('about');

  lecturer.innerHTML = __LECTURER_ABOUT__
    .map(function(l) {
      return aboutHtml.replace(/{(\w+)}/g, function($1, $2) {
        return l[$2] || '';
      });
    })
    .join(' ');
}

function generateScheduleHTML(scheduleTmpl, schedule) {
  return schedule
    .map(function(s, i) {
      return (
        '<li>' +
        scheduleTmpl.replace(/{(\w+)}/g, function($1, $2) {
          return s[$2] ? s[$2] : '';
        }) +
        '</li>'
      );
    })
    .join(' ');
}

function renderScheduleAtMobile() {
  var scheduleTmpl = document.getElementById('schedule-tmpl-1').innerHTML;
  document.getElementById('schedule-list-17').innerHTML = generateScheduleHTML(
    scheduleTmpl,
    __SCHEDULE__.slice(0, 8)
  );

  document.getElementById('schedule-list-18').innerHTML = generateScheduleHTML(
    scheduleTmpl,
    __SCHEDULE__.slice(8)
  );
}

/**
 * 414 iphone6 plus
 * 320 iphone 5
 * 375 iphone 6
 * 360 galaxy $5
 */
function matchPageMedia() {
  if (window.matchMedia('(max-width: 420px)').matches) {
    renderLecturerAtMobile();
    renderScheduleAtMobile();
  }
}

matchPageMedia();

window.addEventListener('resize', function() {
  matchPageMedia();
});
