$(document).ready(function() {
  var ids = ['123', '30'];
  $('#submit').click(function(e) {
    var id = $('#id').val();
    if (id.length != 10 || id.indexOf('5735512') != 0)
      return alert('ไม่พบบัตรเชิญของรหัสนักศึกษา ' + id + ' กรุณาตรวจสอบใหม่อีกครั้ง!');
    var url = 'assets/img/card/C' + (
      id.substr(7, 1) == '0'
      ? id.substr(8)
      : id.substr(7)) + '.jpg';
    $.ajax({
      url: url,
      type: 'HEAD',
      error: function() {
        alert('ไม่พบบัตรเชิญของรหัสนักศึกษา ' + id + ' กรุณาตรวจสอบใหม่อีกครั้ง!');
      },
      success: function() {
        $.fancybox({'width': '100%', 'height': '100%', 'autoScale': true, 'type': 'image', 'href': url});
      }
    });
  });
});
