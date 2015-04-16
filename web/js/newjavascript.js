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
    xhr.open("GET", "https://graph.facebook.com/search?q=joe&type=user|post&access_token=CAACEdEose0cBAD7hKZBQPbgFZAx1OrNrwu4xPgrlflqHHoc2l7JZBpgTFZCzZBIHIj9ZCR8PIFWqZAr1pEVtxcFaEBrYOKdZC4EtgNZBfEZAwsiln3cVm1Y2mJ8fojYdZBaGzNg4VcDFGCVNbeM7PPLXZBhto7KSOyHx2hLWZAOKHBUhWRYeZCiyTAZBFYtRvS96h14ZC1Q92aauXcF68FatZAL8pDgIK", true);
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
