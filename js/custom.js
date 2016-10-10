
window.onload = showTab;
function showTab() {
    //$('a[href="#tab1"]').tab('show');
}












$(document).ready(function(){
    /*
    $('.hoverfx').hover(
        function(){
            $(this).find('.caption').fadeIn(250);
        },
        function(){
            $(this).find('.caption').fadeOut(250);
        }
    );
    */




    (function ($, F) {
        F.transitions.resizeIn = function() {
            var previous = F.previous,
                current  = F.current,
                startPos = previous.wrap.stop(true).position(),
                endPos   = $.extend({opacity : 1}, current.pos);

            startPos.width  = previous.wrap.width();
            startPos.height = previous.wrap.height();

            previous.wrap.stop(true).trigger('onReset').remove();

            delete endPos.position;

            current.inner.hide();

            current.wrap.css(startPos).animate(endPos, {
                duration : current.nextSpeed,
                easing   : current.nextEasing,
                step     : F.transitions.step,
                complete : function() {
                    F._afterZoomIn();

                    current.inner.fadeIn("fast");
                }
            });
        };

    }(jQuery, jQuery.fancybox));






    $(".fancybox")
    .fancybox({
        //padding : 5,
        //openEffect: 'elastic',
        //closeEffect: 'elastic',
        openSpeed: 350,
        closeSpeed: 350,
        nextSpeed: 350,
        prevSpeed: 350,

        nextMethod: 'resizeIn',
        prevMethod : false,
        margin      : [20, 60, 20, 60] // Increase left/right margin

    });


});


/*
$('a[href="#tools"]').on('click', function (e) {
    alert('Loaded!');
    $(".fancybox").fancybox({
    afterLoad   : function() {
        this.inner.prepend( '<h1>1. My custom title</h1>' );
        this.content = '<h1>2. My custom title</h1>' + this.content.html();
    }
    });

});
*/




$('a[href="#tab1"]').on('shown.bs.tab', function (e) {
    //alert('Loaded!');
    //e.preventDefault();
    //$(this).tab('show')
    //$(e.target).masonry( 'reload' );
});
