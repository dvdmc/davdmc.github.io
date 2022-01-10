const timelineContainersLeft = document.querySelectorAll('.container--left > .container__content');

var win = $(window);
if (win.width() < 585) {
    timelineContainersLeft.forEach(container => {
        container.setAttribute("data-aos","fade-left");
    });
} else {
    timelineContainersLeft.forEach(container => {
        container.setAttribute("data-aos","fade-right");
    });
}

$(window).on('resize', function() {
    var win = $(this);
    if (win.width() < 585) { // TODO: Change to window.outerWidth
        timelineContainersLeft.forEach(container => {
            container.setAttribute("data-aos","fade-left");
        });
    } else {
        timelineContainersLeft.forEach(container => {
            container.setAttribute("data-aos","fade-right");
        });
    }
});
