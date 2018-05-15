$(document).ready(function () {
    // $('body').append(
    //   '<div class="product-image-overlay"><span class="product-image-overlay-close product-image-close">x</span><img src="" /></div>'
    // );
    var productImage = $('.img');
    var productOverlay = $('#myModal');
    // var productOverlayImage = $('.product-image-overlay img');

    productImage.click(function () {
        var productImageSource = $(this).attr('src');

        // productOverlayImage.attr('src', productImageSource);
        $("#image").attr('src', productImageSource);
        productOverlay.fadeIn(400);
        $('body').css('overflow', 'hidden');

        $('.close').click(function () {
            productOverlay.fadeOut(100);
            $('body').css('overflow', 'auto');
        });
        // $(productOverlay).click(function () {
        //     productOverlay.fadeOut(100);
        //     $('body').css('overflow', 'auto');
        // });
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          productOverlay.fadeOut(100);
          $('body').css('overflow', 'auto');
        }
    });
});

// $(document).ready(function() {
//
//     // Gets the video src from the data-src on each button
//     var $imageSrc;
//     $('.img').click(function() {
//         $imageSrc = $(this).attr('src');
//     });
//
//
//
//     // when the modal is opened autoplay it
//     $('#myModal').on('shown.bs.modal', function (e) {
//
//     // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
//
//     $("#image").attr('src', $imageSrc  );
//     })
//
//
//     // reset the modal image
//     $('#myModal').on('hide.bs.modal', function (e) {
//         // a poor man's stop video
//         $("#image").attr('src','');
// })






// document ready
// });
