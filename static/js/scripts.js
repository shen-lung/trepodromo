// $(document).ready(function () {
//     $('body').append(
//       '<div class="product-image-overlay"><span class="product-image-overlay-close product-image-close">x</span><img src="" /></div>'
//     );
//     var productImage = $('img');
//     var productOverlay = $('.product-image-overlay');
//     var productOverlayImage = $('.product-image-overlay img');
//
//     productImage.click(function () {
//         var productImageSource = $(this).attr('src');
//
//         productOverlayImage.attr('src', productImageSource);
//         productOverlay.fadeIn(400);
//         $('body').css('overflow', 'hidden');
//
//         $('.product-image-overlay-close').click(function () {
//             productOverlay.fadeOut(100);
//             $('body').css('overflow', 'auto');
//         });
//         $('.product-image-overlay').click(function () {
//             productOverlay.fadeOut(100);
//             $('body').css('overflow', 'auto');
//         });
//     });
//     $(document).keyup(function(e) {
//         if (e.keyCode == 27) {
//           productOverlay.fadeOut(100);
//           $('body').css('overflow', 'auto');
//         }
//     });
// });
