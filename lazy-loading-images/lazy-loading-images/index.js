window.onload = function () {
    const { innerHeight } = window;
    const imgArr = document.querySelectorAll(".lazy-load");
    const lazyload = () => {
        [].forEach.call(imgArr, function (item, index) {
            if (item.dataset.src && !item.getAttribute("loading")) {
                const { top, bottom } = item.getBoundingClientRect();
                if (bottom > 0 && top < innerHeight) {
                    console.log(index + " loading...");
                    const img = new Image();
                    img.onload = () => {
                        item.src = item.dataset.src;
                        item.removeAttribute("data-src");
                        item.removeAttribute("loading");
                    };
                    img.src = item.dataset.src;
                    item.setAttribute("loading", true);
                }
            }
        });
    };
    lazyload();
    document.addEventListener("scroll", lazyload);
};
