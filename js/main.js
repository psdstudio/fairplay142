$(document).ready(function(){
	$(".mainSlider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow:'<div class="sliderBtn prevBtn">이전</div>',
		nextArrow:'<div class="sliderBtn nextBtn">다음</div>'
      });
	$(".mainCon03Slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
		prevArrow:'<div class="sliderBtn prevBtn">이전</div>',
		nextArrow:'<div class="sliderBtn nextBtn">다음</div>'
      });
}) 
