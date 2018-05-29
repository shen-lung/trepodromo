$(document).ready(function () {
    var productImage = $('img');
    var productOverlay = $('#myModal');

    productImage.click(function () {
        var productImageSource = $(this).attr('src'),
            minImageStringPart = '_min',
            mobileImageStringPart = 'mobile';
    
        if(productImageSource.includes(minImageStringPart)) {
            productImageSource = productImageSource.replace(minImageStringPart, '');

            if(productImageSource.includes(mobileImageStringPart)) {
                productImageSource = productImageSource.replace(mobileImageStringPart, 'desktop');
            }
        }

        $('#image').attr('src', productImageSource);
        productOverlay.fadeIn(400);
        $('body').css('overflow', 'hidden');

        $('.modal').on('hidden.bs.modal', function (e) {
            productOverlay.fadeOut(100);
            $('body').css('overflow', 'auto');
        })
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          productOverlay.fadeOut(100);
          $('body').css('overflow', 'auto');
        }
    });
});
