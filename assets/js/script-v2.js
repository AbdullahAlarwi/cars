jQuery(document).ready(function() {

    // loader
    setTimeout(function() {

        $('.loader').fadeOut();
    }, 100);


    // scroll-Top


    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.scrolltotop').fadeIn();
        } else {
            $('.scrolltotop').fadeOut();
        }


    });

    $('.scrolltotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        return false;
    });


    //welcomeback
    setTimeout(function() {
        $(".welcomeback-area").addClass('backin');
    }, 2000);

    $(".welcomeback a").click(function() {
        $(".welcomeback-area").removeClass('backin');
    });



    $('#main-menu').smartmenus();



    $(window).scroll(function() { // scroll event
        var windowTop = $(window).scrollTop(); // returns number

        function mediaSize() {
            /* desktop funciton */
            if (window.matchMedia('(max-width: 767px)').matches) {
                // fixedtop
                var headerTopHeight = $(".default-header").outerHeight();

                var totalHeight = headerTopHeight;


                var utd = $(window).scrollTop();

                if (utd > totalHeight) {
                    $(".details-header").addClass("fixedtop");
                    $(".default-header").addClass("headerhide");
                } else {
                    $(".details-header").removeClass("fixedtop");
                    $(".default-header").removeClass("headerhide");
                }

            }
        };
        mediaSize();
        window.addEventListener('resize', mediaSize, false);


    });


    $('.check input[type="checkbox"]').click(function() {
        if ($(this).is(":checked")) {
            $(this).parent().addClass('check-bg');
        } else if ($(this).is(":not(:checked)")) {
            $(this).parent().removeClass('check-bg');
        }
    });

    // all seleted
    $('#allmake').click(function() {
        $(':checkbox.make').prop('checked', $(this).prop('checked'));
    });

    $('#allmodel').click(function() {
        $(':checkbox.model').prop('checked', $(this).prop('checked'));
    });


    $('.exit').click(function() {
        $(this).parent().hide();
    });


    $('.condition li a').click(function() {
        $('.condition li a').removeClass("active");
        $(this).addClass("active");
        return false;
    });

    //exteror-coler
    $('.exteror-coler li').click(function() {
        $(this).toggleClass("selected");
    });

    $('.interior-coler li').click(function() {
        $(this).toggleClass("selected");
    });

    //body-type
    $('.body-type li').click(function() {
        $(this).toggleClass("selected");
        return false;
    });

    //transmission
    $('.transmission li a').click(function() {
        $(this).toggleClass("selected");
        return false;
    });

    //cylinder
    $('.cylinder li a').click(function() {
        $(this).toggleClass("selected");
        return false;
    });


    $('.Clear-filter').click(function() {
        $(this).parent().parent().hide();
    });


    $('.loves').click(function() {
        $(this).toggleClass('take');
    });


    // $('.filter-btn').click(function() {
    //     $('.search-category').addClass('shows');
    // });

    $('.closefilter').click(function() {
        $('.search-category').removeClass('shows');
    });

    $(".filter-btn").click(function(event) {
        $(".search-category").addClass("shows");
        event.stopPropagation();
    });

    $('.search-results').click(function(event) {
        if (!$(event.target).hasClass('search-category')) {
            $(".search-category").removeClass("shows");
        }
    });

    $('.search-header').click(function(event) {
        if (!$(event.target).hasClass('search-category')) {
            $(".search-category").removeClass("shows");
        }
    });

    // last-accordion scroll 
    $(".last-accordion").click(function(event) {
        // Select the body of the page and scroll down by 650 pixels worth
        $(".search-category").animate({ scrollTop: "+=250px" }, 1000);
    });

    $(".make").click(function() {
        $(this).parent().parent().parent().addClass('show-get');
    });
    $(".x-clx").click(function() {
        $(this).parent().parent().parent().parent().removeClass('show-get');
    });

    $('a.offer2').click(function() {
        $('.buyonline-modal').addClass('show');
        return false;
    });

    $('.closes').click(function() {
        $('.buyonline-modal').removeClass('show');
        return false;
    });


    // owl-carousel
    $('.usersay-area .owl-carousel').owlCarousel({
        'items': 2,
        'autoplay': false,
        'lazyLoad': true,
        'center': true,
        'loop': true,
        'dots': true,
        'nav': true,
        'margin': 50,
        'pagination': true,
        'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }

    });




    // owl-carousel
    $('.testdrives-area .owl-carousel').owlCarousel({
        'items': 3,
        'autoplay': true,
        'lazyLoad': true,
        'loop': true,
        'dots': true,
        'nav': true,
        'margin': 30,
        'pagination': true,
        'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                autoplay: true
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 4
            },
            1920: {
                items: 5
            }
        }

    });

    // owl-carousel
    $('.populer-markers .owl-carousel').owlCarousel({
        'items': 5,
        'autoplay': true,
        'lazyLoad': true,
        'loop': true,
        'dots': false,
        'nav': false,
        'margin': 30,
        'pagination': true,
        'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }

    });

    // owl-carousel
    $('.recommended-slider .owl-carousel').owlCarousel({
        'items': 4,
        'autoplay': true,
        'lazyLoad': true,
        'loop': false,
        'dots': false,
        'nav': false,
        'margin': 30,
        'pagination': true,
        'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1440: {
                items: 4
            },
            1920: {
                items: 5
            }
        }

    });




    $('.vehicle-condition li a').click(function() {
        $('.vehicle-condition li a').removeClass("active");
        $(this).addClass("active");
    });

    $('.finance-box li').click(function() {
        $('.finance-box li').removeClass("active");
        $(this).addClass("active");
    });
    $('.accessories-box').click(function() {
        $('.accessories-box').removeClass("active");
        $(this).addClass("active");
    });

    $('.barX').click(function() {
        $('.ppp2').hide();
    });


    //magnific
    $(function() {
        $('.magnific').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });


    // mutisetps
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function() {

        current_fs = $(this).parent().parent();
        next_fs = $(this).parent().parent().next();

        //Add Class Active
        $(".ppp li").eq($("fieldset").index(next_fs)).addClass("active");
        $(".ppp2 li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 200
        });
    });

    $(".previous").click(function() {

        current_fs = $(this).parent().parent();
        previous_fs = $(this).parent().parent().prev();

        //Remove class active
        $(".ppp li").eq($("fieldset").index(current_fs)).removeClass("active");
        $(".ppp2 li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 200
        });
    });



    //image preview


    //slick slider
    $(function() {

        $('.details-slider .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            arrows: true,
            nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            fade: true,
            asNavFor: '.slider-nav'
        });

        $('.details-slider .slider-nav').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            lazyLoad: 'ondemand',
            asNavFor: '.slider-for',
            dots: true,
            nextArrow: '<span class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
            prevArrow: '<span class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
            centerMode: false,
            focusOnSelect: true,
            responsive: [{
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 6
                    }
                }, {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 6
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3
                    }
                }
            ]
        });
    });





    //price slider

    (function($) {
        $(function() {
            $("#slider-range-min").slider({
                range: "min",
                value: 10,
                min: 1,
                max: 500,
                slide: function(event, ui) {
                    $("#amount").val(ui.value + " k miles or less");
                }
            });
            $("#amount").val($("#slider-range-min").slider("value") + "k miles or less");
        });

    })(jQuery);


    (function($) {
        $(function() {
            $("#slider-prices").slider({
                range: "min",
                value: 10,
                min: 100,
                max: 50000,
                slide: function(event, ui) {
                    $("#prices").val("$ " + ui.value);
                }
            });
            $("#prices").val($("#slider-prices").slider("value") + " $");
        });

    })(jQuery);






    (function($) {

        $("#min_price1,#max_price1").on('change', function() {
            var min_price_range = parseInt($("#min_price1").val());
            var max_price_range = parseInt($("#max_price1").val());

            if (min_price_range > max_price_range) {
                $('#max_price1').val(min_price_range);
            }

            $("#slider-range1").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $("#min_price1,#max_price1").on("paste keyup", function() {
            var min_price_range = parseInt($("#min_price1").val());
            var max_price_range = parseInt($("#max_price1").val());

            if (min_price_range == max_price_range) {

                max_price_range = min_price_range + 100;

                $("#min_price1").val(min_price_range);
                $("#max_price1").val(max_price_range);
            }

            $("#slider-range1").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $(function() {
            $("#slider-range1").slider({
                range: true,
                orientation: "horizontal",
                min: 500,
                max: 600000,
                values: [500, 600000],
                step: 100,

                slide: function(event, ui) {
                    if (ui.values[0] == ui.values[1]) {
                        return false;
                    }

                    $("#min_price1").val(ui.values[0]);
                    $("#max_price1").val(ui.values[1]);
                }
            });

            $("#min_price1").val($("#slider-range1").slider("values", 0));
            $("#max_price1").val($("#slider-range1").slider("values", 1));

        });

        $("#slider-range1").click(function() {
            var min_price = $('#min_price1').val();
            var max_price = $('#max_price1').val();

        });

    })(jQuery);



    (function($) {
        $("#min_price2,#max_price2").on('change', function() {
            var min_price_range = parseInt($("#min_price2").val());
            var max_price_range = parseInt($("#max_price2").val());

            if (min_price_range > max_price_range) {
                $('#max_price2').val(min_price_range);
            }

            $("#slider-range2").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $("#min_price2,#max_price2").on("paste keyup", function() {
            var min_price_range = parseInt($("#min_price2").val());
            var max_price_range = parseInt($("#max_price2").val());

            if (min_price_range == max_price_range) {

                max_price_range = min_price_range + 100;

                $("#min_price2").val(min_price_range);
                $("#max_price2").val(max_price_range);
            }

            $("#slider-range2").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $(function() {
            $("#slider-range2").slider({
                range: true,
                orientation: "horizontal",
                min: 1920,
                max: 2022,
                values: [1920, 2022],
                step: 1,

                slide: function(event, ui) {
                    if (ui.values[0] == ui.values[1]) {
                        return false;
                    }

                    $("#min_price2").val(ui.values[0]);
                    $("#max_price2").val(ui.values[1]);
                }
            });

            $("#min_price2").val($("#slider-range2").slider("values", 0));
            $("#max_price2").val($("#slider-range2").slider("values", 1));

        });

        $("#slider-range2").click(function() {
            var min_price = $('#min_price2').val();
            var max_price = $('#max_price2').val();

        });

    })(jQuery);



    (function($) {
        $("#min_price3,#max_price3").on('change', function() {
            var min_price_range = parseInt($("#min_price3").val());
            var max_price_range = parseInt($("#max_price3").val());

            if (min_price_range > max_price_range) {
                $('#max_price3').val(min_price_range);
            }

            $("#slider-range3").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $("#min_price3,#max_price3").on("paste keyup", function() {
            var min_price_range = parseInt($("#min_price3").val());
            var max_price_range = parseInt($("#max_price3").val());

            if (min_price_range == max_price_range) {

                max_price_range = min_price_range + 100;

                $("#min_price3").val(min_price_range);
                $("#max_price3").val(max_price_range);
            }

            $("#slider-range3").slider({
                values: [min_price_range, max_price_range]
            });

        });


        $(function() {
            $("#slider-range3").slider({
                range: true,
                orientation: "horizontal",
                min: 0,
                max: 200,
                values: [0, 200],
                step: 1,

                slide: function(event, ui) {
                    if (ui.values[0] == ui.values[1]) {
                        return false;
                    }

                    $("#min_price3").val(ui.values[0]);
                    $("#max_price3").val(ui.values[1]);
                }
            });

            $("#min_price3").val($("#slider-range3").slider("values", 0));
            $("#max_price3").val($("#slider-range3").slider("values", 1));

        });

        $("#slider-range3").click(function() {
            var min_price = $('#min_price3').val();
            var max_price = $('#max_price3').val();

        });

    })(jQuery);




});