window.onload = function(){
    document.querySelector('$ip').onclick = function(){
        ajax_get('server.php', function(data){
            document.querySelector('$my_ip').innerHTML = data;
        });
    }
}

function ajax_get(url, callback){
    var f = callback || function(data){}

    var request = new XMLHttpRequest();

    // request.readyState // 0 - new
    // request.readyState // 1 - open
    // request.readyState // 2 - send
    // request.readyState // 3 - частично пришел ответ
    // request.readyState // 4 - ответ пришел полностью

    request.onreadystatechange = function(){
        if(request.readyState == 4 && request.status == 200){
            f(request.responseText);
        }
    }

    request.open('GET', url);
    request.send();
}