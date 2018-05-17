$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();
    var apiKey = 'b1d06f71e0d2f85661337cfefe5c2578';
    var city = $('input#city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid='+apiKey;
    $.get(url, function(res) {
      var html = '';
      html += '<p class="lead">'+res.name+'</p>';
      html += '<p>'+res.weather[0].description+'</p>';
      html += '<p>'+res.main.temp+' F&deg;</p>';
      html += '<p>Wind Speed: '+res.wind.speed+'</p>';
      $('.weather').html(html);
    }, 'jsonp');
    return false;
  });
});