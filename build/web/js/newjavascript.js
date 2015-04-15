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
    xhr.open("GET", "https://graph.facebook.com/search?q=lily&type=user&access_token=CAAIfBHv6dfoBAFA1k6aoiK0jP5J37Gt8AmWcqMsNe0fcmcliTJSBMwSx4ZAAjnabOIs2YgYDAGfZCydLRJwgp1abvi3zM1JGZAaOU0hvdQnGgGPyzSvwMXXEAQmdNzuEjZCSlD9UZAywmtqc7k6SgNQJFOLS88zjpFoBIAIlW8bXVDyLI1BUE4RzbBuvX8DKE9cyZCUl2Uz6VmZBTAJdwOc", true);
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
            
            for (var i = 0, max = data.length ; i < max; i++) {
                name = data[i].name;
                id = data[i].id;
                
            }
            
            //type=JSONresp["name"].toString();
//            code=  JSONresp["code"].toString();
            //document.getElementById("profile").innerHTML = name;
            }
        }
    }
