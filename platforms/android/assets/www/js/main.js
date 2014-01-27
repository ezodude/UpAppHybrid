function formattedDate() {
  return moment().format('MMMM Do YYYY, h:mm a');
}//js library to format dates

function displayDate() {
  $('.timedate').text(formattedDate());
  console.log($('.timedate').text());
}//replace timedate div with live time

function displayUserEmail() {
  if(sessionStorage.getItem('userEmail')) {
    $('.email').text(sessionStorage.getItem('userEmail'));
  }
  console.log($('.timedate').text());
}//display user email taken from startform

function setUpMain() {
  $('.loaded').css('visibility','hidden');
  $('.calendardisplay').css('visibility','hidden');
  $('.refresh').css('visibility','hidden');

  window.setTimeout(function() {
    $('.loading').css('display','none');

    $('.loaded').css('visibility','visible');
    $('.calendardisplay').css('visibility','visible');
    $('.refresh').css('visibility','visible');

    displayDate();
    window.setInterval(displayDate, 20000);
    displayUserEmail();
  }, 2000);

}

function processingStart(e) {
  e.preventDefault();
  console.log($(this).find('#emailaddress').val());
  var userEmail = $(this).find('#emailaddress').val();
  sessionStorage.setItem('userEmail', userEmail);
  window.location = 'main.html';
}//processing startform by storing user email and redirecting user to main.html

$(document).ready(function(){
  var locationParts = window.location.toString().split('/');
  var currentPage = locationParts[locationParts.length -1];
  if(currentPage === 'main.html'){
    setUpMain();
  }
  else {
    $('.startform').on('submit', processingStart);
  }
}); //document ready events call setUpMain
    //find if current page is main.html by splitting url by '/' and
    //finding it's length -1 to get the last part of url then go to setUpMain if it is
