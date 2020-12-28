var slider = tns({
    container: '.slider',
    items: 1,
    slideBy: 1,
    speed: 300,
    autoPlay: true,
    autoplayTimeout: 2000,
    mouseDrag: true,
    arrowKeys: true,
    freezable: false,
    swipeAngle: false,
    controls: false,
    navPosition: 'bottom',
    loop: true,
    lazyLoad: true,
    gutter: 0,
    responsive: {
        640: {
            edgePadding: 0,
            gutter: 0,
            items: 1
        },
        700: {
            gutter: 0
        },
        900: {
            items: 1,
            gutter: 0
        }
        }
});



