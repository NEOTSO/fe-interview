window.onload = function () {
    ajaxGet("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty", function (res) {
        var data = JSON.parse(res)
        console.log(data.title);
    });

    const button = document.getElementsByTagName('button')[0]
    button.addEventListener('click', function() {
        var data = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        ajaxPost('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data), function (res) {
            var data = JSON.parse(res)
            console.log(data)
            console.log(data.id)
        })
    }, false)
}