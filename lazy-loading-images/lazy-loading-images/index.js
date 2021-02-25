window.onload = function () {
    const { innerHeight } = window;
    const imgArr = document.querySelectorAll(".lazy-load");
    const lazyload = () => {
        [].forEach.call(imgArr, function (item, index) {
            if (item.dataset.src) {
                const { top, bottom } = item.getBoundingClientRect();
                if (bottom > 0 && top < innerHeight) {
                    const img = new Image();
                    img.onload = () => {
                        item.src = img.src;
                    };
                    img.src = item.dataset.src;
                    item.removeAttribute("data-src");
                }
            }
        });
    };
    lazyload();
    document.addEventListener("scroll", lazyload);
};
