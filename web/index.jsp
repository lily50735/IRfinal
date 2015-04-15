<%-- 
Document   : index
Created on : Apr 11, 2015, 3:57:45 PM
Author     : chuyuwang
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <script src="https://apis.google.com/js/client:platform.js" async defer></script>
        <script src="js/facebooklogin.js"></script>
        <script src="js/googlepluslogin.js"></script>
        <title>HOME</title>
    </head>
    <body>
        <div class="container">    
            <div id="buttons">  
                <div class="button">
                    <fb:login-button autologoutlink="true" perms="user_likes" size="large" onlogin="checkLoginState();" ></fb:login-button>
                </div>
                <div id="glogin" class="button">
                    <span id="signinButton" class="inline">
                        <button
                            class="g-signin"
                            data-cookiepolicy="single_host_origin"
                            data-clientid="379488416256-jcbci0i4v87rfe1cgaetbfmrk8e726c7.apps.googleusercontent.com"
                            data-scope="https://www.googleapis.com/auth/plus.login"
                            data-callback="loginCallback"
                            data-approvalprompt="force"
                            >
                        </button>
                    </span>
                </div>
                <div id="glogout" class="button hide" >
                    <input type="image" src="image/signout.png" height= "32px" onclick="logout()" />
                </div>
            </div><!--/#buttons-->

            <div id="status">
            </div><!--/#status-->

            <div id="profile"></div><!--/#profile-->

            <div id="logo">
                <img src="image/bg.png" width="160px" alt="fb_gp">
            </div><!--/#img-->

            <form>
                <input type="text"  placeholder=" Search..." >
                <input type="image" class="inline" src="image/search1.png" width="23px"alt="submit">
            </form>
        </div><!--/#container-->
    </body>
</html>
