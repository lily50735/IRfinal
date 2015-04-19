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
        xhr2 = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xhr1 = new ActiveXObject("Microsoft.XMLHTTP");
        xhr2 = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr1.onreadystatechange = call;
    xhr2.onreadystatechange = call;

    var fbtoken = "CAACEdEose0cBAMZAXisr7ZCFMi6F76VJes3jmpYEyd2STm2rPg8HbGRVDnmfBTwaervv5UfL3OJNQEFQdTywpn3muA3IU29NKk0xeoEdlH0Ht8EJULssZBFuMjLa2EI8ZBdS76z2ZATafI2ZAK7lCQJZAAHvwLWd3ARYepOWZAoQZA13eZC7MI06IQjVOzLvdTkWVhDJL1A5DX5Q76U6fFTijt";
    var gptoken = "ya29.WgHYBeVtt-0WfzndUfzkEXJKEI8FYLw9XyKNUTbWF7NMWEB3n3DPxDXLF58SSrNAZk0A-6p1_LdmVQ";

    xhr1.open("GET", "https://graph.facebook.com/v2.3/search?q=" + query + "&type=user&access_token=" + fbtoken, true);
    xhr2.open("GET", "https://www.googleapis.com/plus/v1/people?query=" + query + "&access_token=" + gptoken, true);

    xhr1.send();
    xhr2.send();
}

function call() {
    var max = 50;
    
    if (xhr1.readyState === 4) {
        if (xhr1.status === 200) {
            var JSONresp = JSON.parse(xhr1.responseText);
            data = JSONresp["data"];
            var name = [data.length];
            var id = [data.length];

            var myNode = document.getElementById("result1");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            
            for (var i = 0; i < max; i++) {
                nameface = data[i].name;
                idface = data[i].id;

                source = "image/fb.png";
                mf_amount = 35;
                urlfb = "https://www.facebook.com/app_scoped_user_id/" + idface + "/";
                urlimgfb = "https://graph.facebook.com/" + idface + "/picture";


                var resultDiv = document.createElement("div");
                resultDiv.setAttribute("class", "result inline");

                var panelDiv = document.createElement("div");
                panelDiv.setAttribute("class", "panel panel-default");

                var panel_headingDiv = document.createElement("div");
                panel_headingDiv.setAttribute("class", "panel-headingfb");

                var nameSpan = document.createElement("span");
                nameSpan.setAttribute("class", "title");
                var nameText = document.createTextNode(nameface);
                nameSpan.appendChild(nameText);

                panel_headingDiv.appendChild(nameSpan);

                var panel_collapseDiv = document.createElement("div");
                panel_collapseDiv.setAttribute("class", "panel-collapse");

                var link = document.createElement("a");
                link.setAttribute("href", urlfb);

                var usrimg = document.createElement("img");
                usrimg.setAttribute("class", "inline img-rounded");
                usrimg.setAttribute("src", urlimgfb);

                link.appendChild(usrimg);

                var sourceDiv = document.createElement("div");
                sourceDiv.setAttribute("id", "source");
                sourceDiv.setAttribute("class", "inline");
                var sourceImg = document.createElement("img");
                sourceImg.setAttribute("src", source);

                sourceDiv.appendChild(sourceImg);
                panel_collapseDiv.appendChild(sourceDiv);
                panel_collapseDiv.appendChild(link);

                var panel_footerDiv = document.createElement("div");
                panel_footerDiv.setAttribute("class", "panel-footer");

                var infoSpan = document.createElement("span");
                infoSpan.setAttribute("class", "text-info");
                var infoText = document.createTextNode("Mutual Friend: "+ mf_amount);
                infoSpan.appendChild(infoText);
                panel_footerDiv.appendChild(infoSpan);

                panelDiv.appendChild(panel_headingDiv);
                panelDiv.appendChild(panel_collapseDiv);
                panelDiv.appendChild(panel_footerDiv);

                document.getElementById("result1").appendChild(panelDiv);
            }
        }
    }
    if (xhr2.readyState === 4) {

        // status of 200 signifies sucessful HTTP call
        if (xhr2.status === 200) {

            var JSONresp = JSON.parse(xhr2.responseText);
            items = JSONresp["items"];
            var namegoogle = [items.length];
            var urlgoogle = [items.length];
            var urlimggoogle = [items.length];

            source = "image/gp.png";
            mf_amount = 35;
            urlgoogle = items[i].url;
            
            urlimggoogle = items[i].image.url;
            console.log(urlimggoogle);


            var resultDiv = document.createElement("div");
            resultDiv.setAttribute("class", "result inline");

            var panelDiv = document.createElement("div");
            panelDiv.setAttribute("class", "panel panel-default");

            var panel_headingDiv = document.createElement("div");
            panel_headingDiv.setAttribute("class", "panel-headinggp");

            var nameSpan = document.createElement("span");
            nameSpan.setAttribute("class", "title");
            var nameText = document.createTextNode(namegoogle);
            nameSpan.appendChild(nameText);

            panel_headingDiv.appendChild(nameSpan);

            var panel_collapseDiv = document.createElement("div");
            panel_collapseDiv.setAttribute("class", "panel-collapse");

            var link = document.createElement("a");
            link.setAttribute("href", urlgoogle);

            var usrimg = document.createElement("img");
            usrimg.setAttribute("class", "inline img-rounded");
            usrimg.setAttribute("src", urlimggoogle);

            link.appendChild(usrimg);

            var sourceDiv = document.createElement("div");
            sourceDiv.setAttribute("id", "source");
            sourceDiv.setAttribute("class", "inline");
            var sourceImg = document.createElement("img");
            sourceImg.setAttribute("src", source);

            sourceDiv.appendChild(sourceImg);
            panel_collapseDiv.appendChild(sourceDiv);
            panel_collapseDiv.appendChild(link);

            var panel_footerDiv = document.createElement("div");
            panel_footerDiv.setAttribute("class", "panel-footer");

            var infoSpan = document.createElement("span");
            infoSpan.setAttribute("class", "text-info");
            var infoText = document.createTextNode("Mutual Friend: "+ mf_amount);
            infoSpan.appendChild(infoText);
            panel_footerDiv.appendChild(infoSpan);

            panelDiv.appendChild(panel_headingDiv);
            panelDiv.appendChild(panel_collapseDiv);
            panelDiv.appendChild(panel_footerDiv);

            document.getElementById("result").appendChild(panelDiv);
        }
    }
}
