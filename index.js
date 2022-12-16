$(document).ready(function () {
  // Check the user's IP address and set a cookie if the modal has not been shown to them before
  $.getJSON("http://jsonip.com?callback=?", function (data) {
    var ipAddress = data.ip;

    // Check if the cookie has been set
    if (!Cookies.get(ipAddress)) {
      // Show the modal
      $("#examplemodal").modal("show");
      
      // Set the cookie
      Cookies.set(ipAddress, true, { expires: 1 });
    }
  });
});







