$( document ).ready(function() {

    if($('.callback-success').css("display") === "block") {
        $('.feedback-wrapper').hide();
    }

    $(function() {
        $('.set-life span').on('click', function() {
            var tab = $(this).index();
            $('#sber-life .modal-body .nav-pills div:eq(' + tab + ')').tab('show');
        });
    });
    $(function() {
        $('.set-home span').on('click', function() {
            var tab = $(this).index();
            $('#sber-home .modal-body .nav-pills div:eq(' + tab + ')').tab('show');
        });
    });

    var swiperSteps = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth > 640 && swiperSteps == undefined) {
            swiperSteps = new Swiper('.swiper-steps', {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.nav-next',
                    prevEl: '.nav-prev',
                },
                pagination: {
                    el: '.swiper-steps-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<div class="' + className + '">' + (index + 1) + '</div>';
                    },
                    bulletClass: 'work-step',
                },
                    //simulateTouch: false,
            });

            swiperSteps.on('slideChange', function () {
                if(swiperSteps.activeIndex === 0){
                    $('.screen-work-bottom .arrow-up').addClass('arrow-up-left');
                }
                else {$('.screen-work-bottom .arrow-up').removeClass('arrow-up-left')};

                if(swiperSteps.activeIndex === 1) {
                    $('.screen-work-bottom .arrow-up').addClass('arrow-up-center');
                }
                else {$('.screen-work-bottom .arrow-up').removeClass('arrow-up-center')};

                if(swiperSteps.activeIndex === 2){
                    $('.screen-work-bottom .arrow-up').addClass('arrow-up-right');
                }
                else {$('.screen-work-bottom .arrow-up').removeClass('arrow-up-right')};
            });

        } else if (screenWidth < 641 && swiperSteps != undefined) {
            swiperSteps.destroy();
            swiperSteps = undefined;
            jQuery('.swiper-wrapper').removeAttr('style');
            jQuery('.swiper-slide').removeAttr('style');
        }
    }
    initSwiper();
    $(window).on('resize', function(){
        initSwiper();
    });

    swiperApp = new Swiper('.swiper-app', {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.app-nav-next',
            prevEl: '.app-nav-prev',
        },
        pagination: {
            el: '.swiper-app-pagination',
            clickable: true,
            bulletClass: 'app-bullet',
            bulletActiveClass: 'app-bullet-active'
        },
    });

    var inputs = $('input[type="text"]');
    var button = $('button[type="submit"]');

    (function() {
        inputs.keyup(function() {
            checkform();
        });
    })();

    function checkform()
    {
        var empty = false;
        inputs.each(function() {
            if ($(this).val() === '') {
                empty = true;
            }
        });
        if (empty) {
            button.attr('disabled', 'disabled');
        } else {
            button.removeAttr('disabled');
        }
    }

    $('.app-option').hover(function(e) {
        e.preventDefault();
        var num_slide = $(this).data('slide-next');

        $('#option'+num_slide).css('display', 'inline-block');
        $('.option-img').not('#option'+num_slide).css('display', 'none');
    });

    $('body').on('click', '.app-option', function(event) {
        event.preventDefault();
        $(this).addClass('option-special');
        $('.app-option').not(this).removeClass('option-special');
   });

    var phoneMask = IMask(
        document.getElementById('phoneNumber'), {
            mask: '+{7} 000 000-00-00'
        });

});