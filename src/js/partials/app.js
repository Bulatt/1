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

// Исправить функцию карусели
    function makeSlider () {
        var el;
        $el = $('#carousel1');
        var elBlock = $el.find('.blocks');
        $(function(){
        elBlock.width(elBlock.children().size()*carWidth);


            $('#carousel1 .next_car').click(function(){
                nextCar();
            });
             $('#carousel1 .prev_car').click(function(){
                prevCar();
            });
        });


        function nextCar(){
            var el;
            $el = $('#carousel1')
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide++;
            if(currentSlide>=visibleSlide)
            {
                elBlock.css('left',-(currentSlide-2)*carWidth);
                elBlock.append(elBlock.children().first().clone());
                elBlock.children().first().remove();
                currentSlide--;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }

        function prevCar(){
            var el;
            $el = $('#carousel1')
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide--;
            if(currentSlide<0)
            {
                elBlock.css('left',-(currentSlide+2)*carWidth);
                elBlock.prepend($el.find('.blocks').children().last().clone());
                elBlock.children().last().remove();
                currentSlide++;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }
    }

    function makeSlider2 () {
        var el;
        $el = $('#carousel2');
        var elBlock = $el.find('.blocks');
        $(function(){
        elBlock.width(elBlock.children().size()*carWidth);


            $('#carousel2 .next_car').click(function(){
                nextCar2();
            });
            $('#carousel2 .prev_car').click(function(){
                prevCar2();
            });
        });


        function nextCar2(){
            var el;
            $el = $('#carousel2');
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide++;
            if(currentSlide>=visibleSlide)
            {
                elBlock.css('left',-(currentSlide-2)*carWidth);
                elBlock.append(elBlock.children().first().clone());
                elBlock.children().first().remove();
                currentSlide--;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }

        function prevCar2(){
            var el;
            $el = $('#carousel2');
            var currentSlide=parseInt($el.find('.blocks').data('current'));
            currentSlide--;
            if(currentSlide<0)
            {
                elBlock.css('left',-(currentSlide+2)*carWidth);
                elBlock.prepend($el.find('.blocks').children().last().clone());
                elBlock.children().last().remove();
                currentSlide++;
            }
            $el.find('.blocks').animate({left: -currentSlide*carWidth},300).data('current',currentSlide);
        }
    }
      makeSlider();
     // makeSlider2('#carousel2');
      makeSlider2();
});
