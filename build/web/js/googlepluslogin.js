/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 
function logout()
{
    gapi.auth.signOut();
    location.reload();
}


function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            var email = '';
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
                    }
                }
            }
 
            var str = "Welcome to Google+:" + resp['displayName'] + "<br>";
            document.getElementById("profile").innerHTML = str;
            document.getElementById("glogout").setAttribute("class","inline button");
            document.getElementById("glogin").setAttribute("class","hide button");
        });
 
    }
 
}
function onLoadCallback()
{
    gapi.client.setApiKey('AIzaSyDP-bcqMd3WmS94A7oH8B35ZjTuOWFtfYM');
    gapi.client.load('plus', 'v1',function(){});
}
 
 
      (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();

