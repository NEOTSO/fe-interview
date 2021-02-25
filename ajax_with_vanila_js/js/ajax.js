function ajaxGet(url, cb) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                cb(request.response);
            } else {
                console.log("error");
            }
        }
    };
    request.send(null);
}

function ajaxPost(url, data, cb) {
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if ([200, 201].indexOf(request.status) > -1) {
                cb(request.response)
            } else {
                console.log('error')
            }
        }
    }
    request.send(data);
}
