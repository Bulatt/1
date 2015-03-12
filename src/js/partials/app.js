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
