AOS.init();

// viewProductImg

function change_image(image) {

    var container = document.getElementById("main-image");

    container.src = image.src;

    $('#main-image').elevateZoom({
        zoomType: "inner",
        cursor: "zoom-in",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });

}

document.addEventListener("DOMContentLoaded", function(event) {

    $('#main-image').elevateZoom({
        zoomType: "inner",
        cursor: "zoom-in",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750
    });

});