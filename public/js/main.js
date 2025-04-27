jQuery(document).ready(function ($) {
  'use strict';

  // once doc is ready, insert the email.
  $('#email-addr').attr('href', 'mailto:eleni@choosito.com');
  $('#contact-email-addr')
    .attr('href', 'mailto:eleni@choosito.com')
    .text('eleni@choosito.com');
  $('#contact-alt-email-addr')
    .attr('href', 'mailto:elenimi@gmail.com')
    .text('elenimi@gmail.com');
  $('#contact-alt-2-email-addr')
    .attr('href', 'mailto:elenimi@seas.upenn.edu')
    .text('elenimi@seas.upenn.edu');
  $('#contact-alt-3-email-addr')
    .attr('href', 'mailto:elenimi@gse.upenn.edu')
    .text('elenimi@gse.upenn.edu');

  watch($('.pace-progress'), 'width', function () {
    if (this.style.width > 99 + '%') {
      Pace.stop();
    }
  });
  /* ---------------------------------------------------------------------- */
  /* ------------------ SHUFFLE JS / PUBLICATION  -------------------------- */
  /* ---------------------------------------------------------------------- */
  var $mygrid = $('#mygrid');
  $mygrid.shuffle({
    itemSelector: '.publication_item',
    speed: 500,
  });
  /* reshuffle when user clicks a filter item */
  $('#filter a').on('click', function (e) {
    e.preventDefault();
    // get group name from clicked item
    var groupName = $(this).attr('data-group');
    // reshuffle grid
    $mygrid.shuffle('shuffle', groupName);
  });

  $mygrid.shuffle('shuffle', 'all');
  //sorting fonction
  $('.desc').on('click', function () {
    var sort = 'date-publication',
      opts = {
        reverse: true,
        by: function ($el) {
          return $el.data('date-publication');
        },
      };

    // Filter elements
    $mygrid.shuffle('sort', opts);
  });
  $('.asc').on('click', function () {
    var sort = 'date-publication',
      opts = {
        reverse: false,
        by: function ($el) {
          return $el.data('date-publication');
        },
      };

    // Filter elements
    $mygrid.shuffle('sort', opts);
  });

  // We will not be using the research slider.
  /* ---------------------------------------------------------------------- */
  /* -------------------------- RESEARCH SLIDER --------------------------- */
  /* ---------------------------------------------------------------------- */
  // Variables
  // var currentSlide = 1,
  //     currentDate = $('.slide-wrapper .active').data("date"),
  //     slideName = $('div.slide'),
  //     totalSlides = slideName.length,
  //     slideCounter = $('.slide-counter'),
  //     sliderDate = $('.slide-date'),
  //     btnNext = $('a#btn-next'),
  //     btnPrev = $('a#btn-prev'),
  //     addSlide = $('a#add-slide');

  // slideCounter.text(currentSlide + ' / ' + totalSlides);
  // sliderDate.html('<span class="research-date-label"><i class="fa fa-calendar"></i>Research Date : </span>' + currentDate);
  // // Slide Transitions
  // function btnTransition(button, direction) {
  //     $(button).on('click', function() {

  //         if (button === btnNext && currentSlide >= totalSlides) {
  //             currentSlide = 1;
  //         } else if (button === btnPrev && currentSlide === 1) {
  //             currentSlide = totalSlides;
  //         } else {
  //             direction();
  //         };
  //         currentDate = $(slideName).eq(currentSlide - 1).data("date");
  //         slideName.filter('.active').animate({
  //             opacity: 0,
  //             left: -40
  //         }, 400, function() {
  //             $(this)
  //                 .removeClass('active')
  //                 .css('left', 0);
  //             $(slideName)
  //                 .eq(currentSlide - 1)
  //                 .css({
  //                     'opacity': 0,
  //                     'left': 40
  //                 })
  //                 .addClass('active')
  //                 .animate({
  //                     opacity: 1,
  //                     left: 0
  //                 }, 400);
  //         });

  //         slideCounter.text(currentSlide + ' / ' + totalSlides);
  //         sliderDate.html('<span class="research-date-label"><i class="fa fa-calendar"></i>Research Date : </span>' + currentDate);
  //     });
  // };
  // // Slide forward
  // btnTransition(btnNext, function() {
  //     currentSlide++;
  // });
  // // Slide Backwards
  // btnTransition(btnPrev, function() {
  //     currentSlide--;
  // });
  /* ---------------------------------------------------------------------- */
  /* --------------------------NEWS / RECENT ACTIVITY  -------------------- */
  /* ---------------------------------------------------------------------- */
  $('#marquee').marquee();
  /* ---------------------------------------------------------------------- */
  /* ------------------------------ MAGNIFIC POPUP ------------------------ */
  /* ---------------------------------------------------------------------- */
  $('.open_popup').magnificPopup({
    type: 'inline',
    midClick: true,
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
    },
  });
  /* ---------------------------------------------------------------------- */
  /* ------------------------------ SKILLS -------------------------------- */
  /* ---------------------------------------------------------------------- */
  $('.bar-percentage[data-percentage]').each(function () {
    var progress = $(this);
    var percentage = Math.ceil($(this).attr('data-percentage'));
    progress.text(percentage + '%');
    progress
      .siblings()
      .children()
      .css('width', percentage + '%');
  });
  /* ---------------------------------------------------------------------- */
  /* --------------------- SCROLL REINITIALISATION ------------------------ */
  /* ---------------------------------------------------------------------- */

  jQuery('.jspPane').bind('resize', function (e) {
    var pane = $('div.hs-content-wrapper > article');
    pane.jScrollPane({
      verticalGutter: 0,
      hideFocus: false,
      contentWidth: '0px',
    });
    var api = pane.data('jsp');
    api.reinitialise();
  });
  /* ---------------------------------------------------------------------- */
  /* --------------------- ABOUT SECTION TOGGLE CARD ---------------------- */
  /* ---------------------------------------------------------------------- */
  var menu_trigger = $('[data-card-front]');
  var back_trigger = $('[data-card-back]');

  menu_trigger.on('click', function () {
    $('.about-card').toggleClass('show-menu');
  });

  back_trigger.on('click', function () {
    $('.about-card').toggleClass('show-menu');
  });

  /* ---------------------------------------------------------------------- */
  /* ------------------------------- CONTACT ------------------------------ */
  /* ---------------------------------------------------------------------- */
  $('#submit_btn').on('click', function () {
    //get input field values
    var user_name = $('input[name=name]').val();
    var user_email = $('input[name=email]').val();
    var user_message = $('textarea[name=message]').val();

    var proceed = true;
    if (user_name == '') {
      $('input[name=name]').css('border-color', 'red');
      proceed = false;
    }
    if (user_email == '') {
      $('input[name=email]').css('border-color', 'red');
      proceed = false;
    }
    if (user_message == '') {
      $('textarea[name=message]').css('border-color', 'red');
      proceed = false;
    }
    if (proceed) {
      //data to be sent to server
      var post_data = {
        userName: user_name,
        userEmail: user_email,
        userMessage: user_message,
      };
      var output;
      //Ajax post data to server
      $.post(
        'php/contact.php',
        post_data,
        function (response) {
          //load json data from server and output message
          if (response.type == 'error') {
            output = '<div class="error">' + response.text + '</div>';
          } else {
            output = '<div class="success">' + response.text + '</div>';

            //reset values in all input fields
            $('#contact_form input').val('');
            $('#contact_form textarea').val('');
          }

          $('#result').hide().html(output).slideDown().delay(4000).slideUp();
        },
        'json',
      );
    }
  });

  //reset previously set border colors and hide all message on .keyup()
  $('#contact_form input, #contact_form textarea').on('keyup', function () {
    $('#contact_form input, #contact_form textarea').css('border-color', '');
    $('#result').slideUp();
  });
  /* ---------------------------------------------------------------------- */
  /* --------------------------- PLACEHOLDER ------------------------------ */
  /* ---------------------------------------------------------------------- */
  $('input, textarea').placeholder();
  /* ---------------------------------------------------------------------- */
  /* --------------------------- RESPONSIVE SIDEBAR ----------------------- */
  /* ---------------------------------------------------------------------- */
  var content = $('.hs-menu nav').contents();
  $('#my-panel').jScrollPane();
  $(window).bind('load resize', function () {
    if ($(window).width() <= 755) {
      $('#my-link').panelslider({
        side: 'left',
        clickClose: false,
        duration: 200,
      });
      content.appendTo('#my-panel');
    } else {
      $.panelslider.close();
      content.appendTo('.hs-menu nav');
    }
    jQuery('.jspPane').bind('resize', function (e) {
      var pane = $('div.hs-content-wrapper > article');
      pane.jScrollPane({
        verticalGutter: 0,
        hideFocus: false,
        contentWidth: '0px',
      });
      var api = pane.data('jsp');
      api.reinitialise();
    });
  });
  /* ---------------------------------------------------------------------- */
  /* ---------------------- NAVIGUATION ARROW KEYBOARD -------------------- */
  /* ---------------------------------------------------------------------- */
  $('body').on('keydown', function (e) {
    if (e.keyCode == 37) {
      // left
      $('.previous-page').click();
    } else if (e.keyCode == 39) {
      // right
      $('.next-page').click();
    }
  });

  /* ---------------------------------------------------------------------- */
  /* ---------------------- GOOGLE MAPS-------------------- */
  /* ---------------------------------------------------------------------- */
  $('.map-location').on('click', function () {
    //set your google maps parameters
    var latitude = 37.775,
      longitude = -122.4183333,
      map_zoom = 14;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 =
      navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var marker_url = is_internetExplorer11
      ? 'images/gmaps/cd-icon-location.png'
      : 'images/gmaps/cd-icon-location.svg';

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = '#2d313f',
      saturation_value = -20,
      brightness_value = 5;

    //we define here the style of the map
    var style = [
      {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        stylers: [
          {
            hue: '#00aaff',
          },
          {
            saturation: -100,
          },
          {
            gamma: 2.15,
          },
          {
            lightness: 12,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'on',
          },
          {
            lightness: 24,
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            lightness: 57,
          },
        ],
      },
    ];

    //set google map options
    var map_options = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style,
    };
    //inizialize the map
    var map = new google.maps.Map(
      document.getElementById('google-container'),
      map_options,
    );
    //add a custom marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      visible: true,
      icon: marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map
      var controlUIzoomIn = document.getElementById('cd-zoom-in');
      var controlUIzoomOut = document.getElementById('cd-zoom-out');
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, 'click', function () {
        map.setZoom(map.getZoom() + 1);
      });
      google.maps.event.addDomListener(controlUIzoomOut, 'click', function () {
        map.setZoom(map.getZoom() - 1);
      });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  });

  /* ---------------------------------------------------------------------- */
  /* ------------------------ GALLERY RELATED  ---------------------------- */
  /* ---------------------------------------------------------------------- */
  $('.grid-loaded').imagesLoaded(function () {
    $('.image-link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
        preload: [0, 2],
        navigateByImgClick: true,
      },
    });

    // filter items on button click
    $('.gallery-filter').on('click', 'a', function () {
      if (!$(this).parent().hasClass('closed')) {
        return;
      }
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue,
      });
    });

    // init Isotope
    var $grid = $('.masonry-wrap').isotope({
      itemSelector: '.gallery-item',
      percentPosition: true,
      transitionDuration: '0.7s',
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.gallery-item',
      },
    });
  });

  (function ($) {
    var cards = $('.gallery-card-drop'),
      toggler = cards.find('.toggle'),
      links = cards.find('ul>li>a'),
      li = links.parent('li'),
      count = links.length,
      width = links.outerWidth();
    links.parent('li').each(function (i) {
      $(this).css('z-index', count - i);
    });
    links.each(function () {
      $(this).css('box-shadow', 'none');
    });
    function setClosed() {
      li.each(function (index) {
        $(this)
          .css('top', index * 0)
          .css('width', width - index * 0)
          .css('margin-left', (index * 2) / 2);
      });
      li.addClass('closed');
      toggler.removeClass('active');
    }
    setClosed();
    toggler.on('mousedown', function () {
      var $this = $(this);
      if ($this.is('.active')) {
        setClosed();
        links.each(function () {
          $(this).css('box-shadow', 'none');
        });
      } else {
        $this.addClass('active');
        li.removeClass('closed');
        links.each(function () {
          $(this).css('box-shadow', '0px 1px 3px rgba(0, 0, 0, 0.1)');
        });
        li.each(function (index) {
          $(this)
            .css('top', 40 * (index + 1))
            .css('width', '100%')
            .css('margin-left', '0px');
        });
      }
    });
    links.on('click', function (e) {
      var $this = $(this),
        label = $this.data('label');
      li.removeClass('active');
      if ($this.parent('li').is('active'))
        $this.parent('li').removeClass('active');
      else $this.parent('li').addClass('active');
      toggler.children('span').text(label);
      links.each(function () {
        $(this).css('box-shadow', 'none');
      });
      setClosed();
      e.preventDefault;
    });
  })(jQuery);

  /* ---------------------------------------------------------------------- */
  /* ---------------------- FIX OLD SAFARI BUGS  -------------------------- */
  /* ---------------------------------------------------------------------- */
  if (
    navigator.userAgent.indexOf('Safari') != -1 &&
    navigator.userAgent.indexOf('Chrome') == -1
  ) {
    var oldsldrwidth = $('.research-section .slider-details').width();
    $('.research-section .slider-details').width(oldsldrwidth - 100);
    $(window).bind('load resize', function () {
      if ($(window).width() > 755) {
        var heightdoc = $(document).height();
        $('.hs-content-wrapper').height(heightdoc - 47);
        var heightwrp = $('.hs-content-wrapper').height();
        $('.hs-content').height(heightwrp - 22);
        var pane = $('div.hs-content-wrapper > article');
        pane.jScrollPane({
          verticalGutter: 0,
          hideFocus: false,
          contentWidth: '0px',
        });
        var api = pane.data('jsp');
        api.reinitialise();
      } else {
        $('.hs-content-wrapper').css('height', 'auto');
      }
    });
  }
});
