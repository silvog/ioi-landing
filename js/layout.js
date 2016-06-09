function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
}

$(document).ready(function () {
    /*$('.modal').each(function(){
     var src = $(this).find('iframe').attr('src');

     $(this).on('click', function(){

     $(this).find('iframe').attr('src', '');
     $(this).find('iframe').attr('src', src);

     });
     });*/

    /*$("#videoModalPreslikave").on('hidden.bs.modal', function (e) {
     $("#videoModalPreslikave iframe").attr("src", $("#videoModalPreslikave iframe").attr("src"));
     });*/

    $("#videoModalPreslikave").on('hidden.bs.modal', function (e) {
        $("#videoModalPreslikave video").attr("src", $("#videoModalPreslikave video").attr("src"));
    });

    $("#videoModalRazsiritve").on('hidden.bs.modal', function (e) {
        $("#videoModalRazsiritve video").attr("src", $("#videoModalRazsiritve video").attr("src"));
    });
});