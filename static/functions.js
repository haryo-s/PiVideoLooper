$(function () {
  $('a#launch_video').bind('click', function () {
    $.getJSON('/launch_video',
      function (data) {
        //do nothing
      });
    return false;
  });
});

$(function () {
  $('a#kill_video').bind('click', function () {
    $.getJSON('/kill_video',
      function (data) {
        //do nothing
      });
    return false;
  });
});

$(function () {
  $('a#restart_video').bind('click', function () {
    $.getJSON('/restart_video',
      function (data) {
        //do nothing
      });
    return false;
  });
});

$(function () {
  $('a#reboot').bind('click', function () {
    $.getJSON('/reboot',
      function (data) {
        //do nothing
      });
    return false;
  });
});

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}