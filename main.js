'use strict';

var city;
$(function(){
  loadLocal();

 $('#send').click(sendRequest);
});

function sendRequest(event) {
  event.preventDefault();

  var key = '&APPID=81fee45d96151244d55ecaab7a7df079';
  var $city = $('#city').val();
  city.push($city);
  save();

 $.ajax({
   url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $city + "&units=imperial" + key ,
   success: function(data) {
     console.log(data.name);
     console.log(data);
    //  var $name = data.name;
    //  var $temp = data.main.temp;
     var $div = $('<div>').text('City :' + ' ' + data.name);
     var $temp = $('<div>').text('Temp :' + ' ' + data.main.temp + '℉');
     var $clouds = $('<div>').text('Sky :' + ' ' + data.weather[0].description);
     var $wind = $('<div>').text('Wind Speed :' + ' ' + data.wind.speed + ' mph');
    //  var $currentDay = $("<div>").text(data.list.day);

         $('#container').append($div).append($temp).append($clouds).append($wind);
        //  empty out container
   },
   error: function(error)
   {
     console.log(error);
   }
 });
}
function loadLocal() {
  if (localStorage.city === undefined){
    localStorage.city = "[]";
  }
  city = JSON.parse(localStorage.city);
  $('<div>').append(city);

  console.log(city);
}
function save() {
  localStorage.city = JSON.stringify(city)

}

// function sendForecast(event) {
//   event.preventDefault();
//
//   var key = '&APPID=81fee45d96151244d55ecaab7a7df079';
//   var $city = $('#city').val();
//   city.push($city);
//   save();
//  $.ajax({
//    url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $city + '&units=imperial&cnt=' + key ,
//    success: function(data) {
//      console.log(data.name);
//      console.log(data);
//     //  var $name = data.name;
//     //  var $temp = data.main.temp;
//     for (i =0; i < data.list.length; i++){
//       var $div = $('<div>').text('City :' + ' ' + data.city[i].name);
//       var $temp = $('<div>').text('Temp :' + ' ' + data.list[i].temp[i].day+ '℉');
//       var $clouds = $('<div>').text('Sky :' + ' ' + data.weather.description);
//       var $wind = $('<div>').text('Wind Speed :' + ' ' + data.list[i].speed + ' mph');
//       //  var $currentDay = $("<div>").text(data.list.day);
//       $('#cont').append($div).append($temp).append($clouds).append($wind);
//     }
//    //  empty out container
// },
// error: function(error)
// {
// console.log(error);
// }
// });
// }
