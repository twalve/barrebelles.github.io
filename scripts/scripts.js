// Open external links in new Windows
$("[rel=external]").attr("target", "_external");

// Open Portfolio images in a light box
$("[rel=portfolio]").featherlightGallery({
    closeOnClick: 'background',
    galleryFadeIn: 300,
    galleryFadeOut: 300,
    nextIcon: '›',
    openSpeed: 300,
    previousIcon: '‹',
    targetAttr: 'href'
});

// Make the copyright date dynamic
$("footer time").html(function() {
    var date = new Date();
    return date.getFullYear();
});
