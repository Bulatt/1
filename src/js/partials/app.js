$(document).ready(function () {

var slideWidth=1266;
    $(function(){
    $('.slider-wrap').width($('.slider-wrap').children().size()*slideWidth);


        $('#next_slide').click(function(){
            nextSlide();
        });
        $('#prev_slide').click(function(){
            prevSlide();
        });
    });

    function nextSlide(){
        var currentSlide=parseInt($('.slider-wrap').data('current'));
        currentSlide++;
        if(currentSlide>=$('.slider-wrap').children().size())
        {
            $('.slider-wrap').css('left',-(currentSlide-2)*slideWidth);
            $('.slider-wrap').append($('.slider-wrap').children().first().clone());
            $('.slider-wrap').children().first().remove();
            currentSlide--;
        }
        $('.slider-wrap').animate({left: -currentSlide*slideWidth},500).data('current',currentSlide);
    }

    function prevSlide(){
        var currentSlide=parseInt($('.slider-wrap').data('current'));
        currentSlide--;
        if(currentSlide<0)
        {
            $('.slider-wrap').css('left',-(currentSlide+2)*slideWidth);
            $('.slider-wrap').prepend($('.slider-wrap').children().last().clone());
            $('.slider-wrap').children().last().remove();
            currentSlide++;
        }
        $('.slider-wrap').animate({left: -currentSlide*slideWidth},500).data('current',currentSlide);
    }



    var carWidth=240;
    var visibleSlide = 3;
    var blockMargin = 10;
    function makeSlider (a) {
        $el = a;
        $(function(){
        $el.find('.blocks').width($el.find('.blocks').children().size()*carWidth);


            $('.next_car').click(function(){
                nextCar();
            });
            $('.prev_car').click(function(){
                prevCar();
            });
        });


        function nextCar(){
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide++;
            if(currentSlide>=visibleSlide)
            {
                $el.find('.blocks').css('left',-(currentSlide-2)*carWidth+blockMargin);
                $el.find('.blocks').append(el.find$('.blocks').children().first().clone());
                $el.find('.blocks').children().first().remove();
                currentSlide--;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }

        function prevCar(){
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide--;
            if(currentSlide<0)
            {
                $el.find('.blocks').css('left',-(currentSlide+2)*carWidth-blockMargin);
                $el.find('.blocks').prepend($el.find('.blocks').children().last().clone());
                $el.find('.blocks').children().last().remove();
                currentSlide++;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }
    }
    makeSlider('#carousel1');
    makeSlider('#carousel2');
});
