(function ($) {
  $.fn.gallerybox = function(options) {
    var settings = $.extend({
      backgroundColor: '#000',
      opacity: 0.95,
      closeText: 'CLOSE'
    }, options );

    var init = function() {
      // Create #gallerybox element
      $('<div id="gallerybox"></div>')
        .appendTo('body');

      // Create span element for closing GalleryBox
      $('<span>' + settings.closeText + '</span>')
        .delay('fast')
        .fadeIn()
        .appendTo('#gallerybox');

      // Create #gb-overlay element
      $('<div id="gb-overlay"></div>')
        .css({
          backgroundColor: settings.backgroundColor,
          opacity: 0
        })
        .appendTo('#gallerybox')
        .animate({'opacity' : settings.opacity}, 'slow');

      // Create #gb-big element
      $('<div id="gb-big"></div>')
        .hide()
        .appendTo('#gallerybox');

      // Create #gb-list element
      $('<div id="gb-list"></div>')
        .appendTo('#gallerybox');
    };

    var loadBigImage = function(img) {
      $('#gb-big')
        .fadeOut(function() {
          // Remove current image
          $('#gb-big img')
          .remove();

          // Create new image element
          $('<img>')
            .attr('src', $(img).attr('src'))
            .css({
              'max-height': ($(window).height() - 200) * 0.9, 
              'max-width': $(window).width() * 0.9
            })
            .load(function() {
              $('#gb-big')
                .css({
                  'top': ($(window).height() - $('#gb-big').height() - 200) / 2,
                  'left': ($(window).width() - $('#gb-big').width()) / 2
                })
                .fadeIn();
            })
            .appendTo('#gb-big');
        });
    };

    var loadListImages = function() {
      var images = $('img.gallerybox').map(function(){
        return this;
      }).get();
      $.each(images, function() {
        $('<img>')
          .attr('src', $(this).attr('src'))
          .hide()
          .load(function() {
            $(this)
              .delay('fast')
              .fadeIn();
          })
          .appendTo('#gb-list');
      });

      // Create scrollbuttons if needed
      $('<div class="left">&lt;</div><div class="right">&gt;</div>')
        .hide()
        .delay('slow')
        .fadeIn()
        .appendTo('#gb-list');
    };

    var scrollList = function(elem) {
      direction = $(elem).hasClass('left') ? -1 : 1;
      var pos = $('#gb-list').scrollLeft(),
        newPos = pos + direction * $(window).width() * 0.9,
        lastPos = $('#gb-list')[0].scrollWidth - $(window).width();
      newPos = direction === -1 ? (newPos < 0 ? 0 : newPos) : (newPos > lastPos ? lastPos : newPos);
      if (pos !== newPos) {
        $('#gb-list').animate({
          scrollLeft: newPos
        }, 1000);
      }
    };

    init();
    loadBigImage(this);
    loadListImages();

    // Show image from list
    $('#gb-list img').click(function() {
      console.log(this);
      loadBigImage(this);
    });

    // Scroll imagelist
    $('#gb-list div').click(function() {
      scrollList(this);
    });

    // Close gallerybox on click
    $('#gallerybox span').click(function() {
      $('#gallerybox').fadeOut('slow', function() {
        $(this).remove();
      });
    });
  };
}(jQuery));

$('img.gallerybox').click(function() {
  $(this).gallerybox();
});
