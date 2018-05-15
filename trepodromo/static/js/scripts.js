$(document).ready(function () {
    var productImage = $('.img');
    var productOverlay = $('#myModal');

    productImage.click(function () {
        var productImageSource = $(this).attr('src');

        $("#image").attr('src', productImageSource);
        productOverlay.fadeIn(400);
        $('body').css('overflow', 'hidden');

        $('.close').click(function () {
            productOverlay.fadeOut(100);
            $('body').css('overflow', 'auto');
        });
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          productOverlay.fadeOut(100);
          $('body').css('overflow', 'auto');
        }
    });
});
