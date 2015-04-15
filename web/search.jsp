<%-- 
    Document   : search
    Created on : Apr 5, 2015, 7:03:27 PM
    Author     : WangChuyu
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/search.css">
        <title>Result</title>
        <script type="text/javascript">
            function showValue(newValue)
            {
                document.getElementById("range").innerHTML=newValue;
            }
        </script>
    </head>
    <body>
        <div id="user">
            <img src="image/people.png" alt="user"> Facebook:<img src="image/people.png" alt="user"> Google+:
        </div>
        
        <div id="div">
         <form>
            <div id="input">
                <input type="text" size="40">
            </div>
             
            <div id="search">
            <input type="image" src="image/search.png" alt="submit">
            </div>
         </form>
         </div>
       
             <br/><br/>
           
             <div id="slider">
                 <form>
                 Facebook <input type="range" min="0" max="100" value="50" onchange="showValue(this.value)">
                 <span id="range">50</span>(%) 
                 Google+
                 
                 <input type="text" size="3">
                 <input type="submit" value="submit">
                 </form>
             </div>
             
             <div id="content">
                 
                 
　　　　　　　　　　 <tr>
                    <input type="submit" value="ALL">
                 </tr>
                 <br/>
                 <tr>
                    <input type="submit" value="Facebook">
                 </tr>
                 <br/>
                 <tr>
                    <input type="submit" value="Google+">
                 </tr>
               
             </div>
             
             <div id="result">
                 <table></table>
             </div>
       
    </body>
</html>
