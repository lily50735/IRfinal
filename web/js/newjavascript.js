/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xhr1, xhr2;

function show() {
    var body = document.getElementsByTagName('BODY')[0];
    var query = document.getElementById("query").value;

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xhr1 = new XMLHttpRequest();
        // xhr2 = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xhr1 = new ActiveXObject("Microsoft.XMLHTTP");
        // xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr1.onreadystatechange = callfacebook;
    // xhr2.onreadystatechange = callgoogleplus;

    var fbtoken = "CAACEdEose0cBAFlsISihjUscFuXZA1wQlXqKiuAl0eAnlOQXCJ9inb0Ig5hMoGBNOUOTCtaiq6wbeMPmEgaGw6qQCMqu9LwM5zOGdIZBtqO8bDQgdPkylCZCNZBWoFqHiG9IIJaQ38EpxB5yCu5chUfB75CFUPOGlXqZClC5A4sqkMmIa1bBNqOIwPJ7lPj9RKxnEGQaXp2z30LtcBRNy";
    // var gptoken = "ya29.WQGldPsiiWX6VQxAYupINHN36Uqn5zQ1YhurUEl3ER-Zs1xVHXW6wq7TjkhyvlylOxqnRZX5Y6uQ0w";

    xhr1.open("GET", "https://graph.facebook.com/search?q=" + query + "&type=place&fields=id,name,picture&access_token=" + fbtoken, true);
    // xhr2.open("GET", "https://www.googleapis.com/plus/v1/people?query=" + query + "&access_token=" + gptoken, true);

    xhr1.send();
    // xhr2.send();
}

function callfacebook() {
        //console.log(xhr1.readyState);
        if (xhr1.readyState === 4) {
            //            alert(xhr1.status);
            // status of 200 signifies sucessful HTTP call
            if (xhr1.status === 200) {
                //clearoption();
                //            alert(xhr1.responseText);
                var JSONresp = JSON.parse(xhr1.responseText);
                //            id =  JSONresp["name"]; 

                data = JSONresp["data"];
                var name = [data.length];
                var id = [data.length];
                var x = [data.data]

                var myNode = document.getElementById("result");

                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
                var max = 50;
                for (var i = 0; i < max; i++) {
                    name = data[i].name;
                    id = data[i].id;

                    var div = document.createElement("div");
                    div.setAttribute("class", "result inline");

                    //show image
                    var a = document.createElement("a");
                    a.setAttribute("href", x.url);
                    var img = document.createElement("img");
                    img.setAttribute("class", "inline");
                    img.setAttribute("src", "https://graph.facebook.com/" + id + "/picture");
                    a.appendChild(img);

                    //For showing source
                    var divs = document.createElement("div");
                    divs.setAttribute("id", "source");
                    divs.setAttribute("class", "inline");

                    var srcboth = document.createElement("img");
                    srcboth.setAttribute("src", "image/bg.png");

                    var srcfb = document.createElement("img");
                    srcfb.setAttribute("src", "image/fb.png");

                    var srcgp = document.createElement("img");
                    srcgp.setAttribute("src", "image/gp.png");

                    divs.appendChild(srcfb);
                    div.appendChild(divs);


                    //Show name
                    var p = document.createElement("p");
                    var text = document.createTextNode(name);
                    p.appendChild(text);

                    div.appendChild(p);
                    div.appendChild(a);
                    div.appendChild(divs);
                    document.getElementById("result").appendChild(div);
                }


                //type=JSONresp["name"].toString();
                //            code=  JSONresp["code"].toString();
                //document.getElementById("profile").innerHTML = name;
            }
        }
    } // end of function

function callgoogleplus() {
        //console.log(xhr1.readyState);
        if (xhr2.readyState === 4) {
            //            alert(xhr2.status);
            // status of 200 signifies sucessful HTTP call
            if (xhr2.status === 200) {
                //clearoption();
                //            alert(xhr2.responseText);
                var JSONresp = JSON.parse(xhr2.responseText);
                //            id =  JSONresp["name"]; 

                items = JSONresp["items"];
                


                var name = [items.length];
                var id = [items.length];

                var myNode = document.getElementById("result");

                while (myNode.firstChild) {
                    myNode.removeChild(myNode.firstChild);
                }
                var max = 50;
                for (var i = 0; i < max; i++) {
                    name = items[i].displayname;
                    id = items[i].id;

                    var div = document.createElement("div");
                    div.setAttribute("class", "result inline");

                    //show image
                    var a = document.createElement("a");
                    var img = document.createElement("img");
                    img.setAttribute("class", "inline");
                    img.setAttribute("src", "https://graph.facebook.com/" + id + "/picture");
                    a.appendChild(img);

                    //For showing source
                    var divs = document.createElement("div");
                    divs.setAttribute("id", "source");
                    divs.setAttribute("class", "inline");

                    var srcboth = document.createElement("img");
                    srcboth.setAttribute("src", "image/bg.png");

                    var srcfb = document.createElement("img");
                    srcfb.setAttribute("src", "image/fb.png");

                    var srcgp = document.createElement("img");
                    srcgp.setAttribute("src", "image/gp.png");

                    divs.appendChild(srcgp);
                    div.appendChild(divs);


                    //Show name
                    var p = document.createElement("p");
                    var text = document.createTextNode(name);
                    p.appendChild(text);

                    div.appendChild(p);
                    div.appendChild(a);
                    div.appendChild(divs);
                    document.getElementById("result").appendChild(div);
                }


                //type=JSONresp["name"].toString();
                //            code=  JSONresp["code"].toString();
                //document.getElementById("profile").innerHTML = name;
            }
        }
    } // end of function