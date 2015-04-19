/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var xhr;
function show()
{
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xhr=new XMLHttpRequest();
    }
    else{// code for IE6, IE5
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = callback;
//    console.log("heere");
//    input=document.getElementById("input");
    var body= document.getElementsByTagName('BODY')[0];
    var query = document.getElementById("query").value;
    var d = document.createElement("div");
    xhr.open("GET", "https://graph.facebook.com/search?q="+ query +"&type=place&fields=id,name,picture&access_token=CAACEdEose0cBALwazDtNRu65wT3KsrmoUHN3mFU9MJK7c263ZBotjuTNra8xTH82gXrN1QmfbfLEOM4837z7tZBZBT3vZCJB1WQsLQ6Uda2VPFSu81FBZC2Y8LnmQZBqbfiiPdH91MnFwC43oeq8RYXcpHFeJlm8np3Uc3Y1AODB8URZBio1PuIjQd1VDXdJEzZCRBkjUe0OePntvNm3iGbq", true);
    
    // xhr.open("GET", "https://graph.facebook.com/search?q="+ query +"joe&type=user&type=page&type=place&type=event&type=group&type=placetopic&access_token=CAACEdEose0cBAPzXP7259eqrPOR0Y5k2yluEjLjOI05hM1pzucqy4WmrwizhnUX5ZAJTZBkVvVSyFQkCL0NRKh1Pn7IsAYywBMKrPbZBCmNHqxIfrj9h2muljJPSzoMjZAsyd4GkveMtCXsa91yzcxc043WErGcRRR2kOznxB5zESqNFNSP0VTvpsZBbh4aXEaN1vPgDHhd40xeUVMisu", true);
//    xhr.open("GET", "https://graph.facebook.com/me?access_token=CAACEdEose0cBAGNYmIKzi5rd2GFn5oNRREa8wIDXgStaPADXJZCiVoEw5hBSoAPPkLWQzNLhKZAY9qygpZCL44T2N90gGDmpR2Gq4z8sTzkOneQzxq4LXK7MxnezPbPj5RyJYxUxQGl3XZBVi3tGGYyFg6ShXMf5FWKTm4441fxxUzwfNfQpfoqksj8LYJrdbkTiZBy71ajtsZAmRFwhCw", true);

    xhr.send();
}
function callback(){
    //console.log(xhr.readyState);
    if (xhr.readyState === 4) {
//            alert(xhr.status);
        // status of 200 signifies sucessful HTTP call
        if (xhr.status === 200) {
            //clearoption();
//            alert(xhr.responseText);
            var JSONresp = JSON.parse(xhr.responseText);
//            id =  JSONresp["name"]; 

            data =  JSONresp["data"];
            var name = [data.length]; 
            var id = [data.length];
            var x = [data.data]

            var myNode = document.getElementById("result");

            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            for (var i = 0, max = data.length ; i < max; i++) {
                name = data[i].name;
                id = data[i].id;          

                var d = document.createElement("div");
                d.setAttribute("class","result inline");

                var a = document.createElement("a");
                a.setAttribute("href", x.url);

                var img = document.createElement("img");
                img.setAttribute("src", "https://graph.facebook.com/"+id+"/picture");

                var src = document.createElement("img");
                src.setAttribute("src", "image/bg.png");
                src.setAttribute("width", "20px");

                var p = document.createElement("p");
                var t = document.createTextNode(name); 
                a.appendChild(img);
                p.appendChild(t);
                d.appendChild(p);
                d.appendChild(a);
                d.appendChild(src);
                document.getElementById("result").appendChild(d);
            }
            

            //type=JSONresp["name"].toString();
//            code=  JSONresp["code"].toString();
            //document.getElementById("profile").innerHTML = name;
            }
        }
    }
