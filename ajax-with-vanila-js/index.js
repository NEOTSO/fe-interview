window.onload = function () {
    function ajaxGet(url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    cb(xhr);
                } else {
                    console.log("error");
                }
            }
        };
        xhr.send(null);
    }
    
    ajaxGet('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', function (res) {
        console.log(res)
    })
}