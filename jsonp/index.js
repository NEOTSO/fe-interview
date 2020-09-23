(function (global) {
    let id = 0;
    const head = document.getElementsByTagName("head")[0];
    const jsonp = ({ url, data, callback }) => {
        ++id;
        const scriptNode = document.createElement("script");
        const cbName = `cb${id}`;
        global[cbName] = callback;
        data.callback = cbName;
        const dataArr = [];
        for (const key in data) {
            dataArr.push(`${key}=${data[key]}`);
        }
        scriptNode.onerror = (e) => {
            head.removeChild(scriptNode)
            delete global[cbName];
        };
        scriptNode.src = `${url}?${dataArr.join("&")}`;
        head.appendChild(scriptNode);
    };
    global.jsonp = jsonp;
})(this);

jsonp({
    url: "http://127.0.0.1:8080/",
    data: {
        name: "Alice",
    },
    callback: (res) => {
        console.log(res);
    },
});
