$(document).ready(function () {
    var productImage = $('.img');
    var productOverlay = $('#myModal');

    productImage.click(function () {
        var productImageSource = $(this).attr('src');
        var minImageStringPart = '_min';

        if(productImageSource.includes(minImageStringPart)) {
            productImageSource = productImageSource.replace(minImageStringPart, '');
        }

        $("#image").attr('src', productImageSource);
        productOverlay.fadeIn(400);
        $('body').css('overflow', 'hidden');

        $('.modal').click(function () {
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
