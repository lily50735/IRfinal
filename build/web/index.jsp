<%-- 
    Document   : index
    Created on : Apr 11, 2015, 3:57:45 PM
    Author     : chuyuwang
    --%>

    <%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <script src="https://apis.google.com/js/client:platform.js" async defer></script>
        <script src="js/facebooklogin.js"></script>
        <script src="js/googlepluslogin.js"></script>
        <title>HOME</title>
    </head>
    <body>

        <div id="fbbutton">  
            <fb:login-button autologoutlink="true" perms="user_likes" size="large" onlogin="checkLoginState();"></fb:login-button>
        </div>

        <div id="gpbutton">
            <span id="signinButton">
              <button
              class="g-signin"
              data-cookiepolicy="single_host_origin"
              data-clientid="379488416256-jcbci0i4v87rfe1cgaetbfmrk8e726c7.apps.googleusercontent.com"
              data-scope="https://www.googleapis.com/auth/plus.login"
              data-callback="loginCallback"
              data-approvalprompt="force">
          </button>
      </span>
      <div id="logoutbutton">
        <input type="image"  src="image/signout.jpg" width= "60px" onclick="logout()" />
    </div>
</div>

<div id="status">
</div>

<div id="profile"></div>

<div id="img">
   <img src="image/fb&gp.jpg" alt="fb_gp">
</div>

<div id="div">
    <form>
        <div id="input">
            <input type="text"  placeholder="search..." >
        </div>

        <div id="search">
            <input type="image" src="image/search.png" alt="submit">
        </div>
    </form>
</div>

</body>
</html>
