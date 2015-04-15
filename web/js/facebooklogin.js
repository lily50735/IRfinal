/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function logoutFacebook() {
  FB.init({ 
    appId:'597054073763322', 
    cookie:true, 
    status:true, 
    xfbml:true
  });
  FB.logout(function() {
    // Reload the same page after logout
    window.location.reload();
  });
}


  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else {
      document.getElementById('status').innerHTML ='';
    }
  }


  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  
  window.fbAsyncInit = function() {
  FB.init({
    appId      : '597054073763322',
    cookie     : true,  // enable cookies to allow the server to access 
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  function testAPI() {
    console.log('Welcome!  Fetching your information…. ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Welcome to Facebook, ' + response.name + '!';
    });
  }