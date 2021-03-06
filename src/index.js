import '../static/styles/styles.scss';
import ctrl from './controllers/currencyCtrl.js';
ctrl.render();
import Isotope from "isotope-layout";
import 'owl.carousel';
import '../node_modules/jquery-parallax.js/parallax.min.js';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/chart.js/dist/Chart.min.js'
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/animate.css';

//кеширование страницы
(function() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register('service-worker.js')
	}
})();
//конвертер валют
$(document).ready(function(){
	
$('#custom_conv').on('change', function () {
	
	let custom_input = $('input:checked').val();
	let custom_res = $('#custom_conv').val() * custom_input;
	let my_res = 400 * $('#USD').val();

	$('.curr_radio').on('click', 'input', function() {
		
		$('#custom_conv').val(custom_res / $('input:checked').val());
		$('#my_conv').val(my_res / $('input:checked').val());
		});
	});
});	
//плагин карусель
$(document).ready(function(){
 	$('.owl-carousel').owlCarousel({
	  	nav:true,
	  	loop:true,
	  	items:1,
	  	animateOut: 'fadeOut',
	  	navText : ["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],
	  	// autoplay: 3000,
	  	autoplayHoverPause: true,

	});
});
//плагин паралакс
$(document).ready(function(){
	$('#section_3').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-2.jpg',
		bleed: 400,
	}),
	$('#section_5').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-4.jpg',
		bleed: 400,
	}),
	$('#section_7').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-6.jpg',
		bleed: 400,
	}),
		$('#section_9').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-7.jpg',
		bleed: 500,
	})
});	
//плагин изотоп
$(document).ready(function(){

 	let grid = new Isotope('.grid', {
                itemSelector: '.item',
                layoutMode: 'fitRows',
    });
 	$('.filters-button-group').on( 'click', 'button', function() {
        if ( !$(this).hasClass('is-checked') ) {
			$(this).parents('.wrapper').find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');

			let selector = $(this).attr('data-filter');
			grid.arrange({ filter: selector });
        }
    });
});
//построение диаграмы
var programCanvas = document.getElementById("programChart");

Chart.defaults.global.defaultFontFamily = 'Roboto Slab';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'black';

var programPeople = {
  label: 'На каком языке пишут украинские программисты',
  data: [1429, 1143, 975, 902, 675, 343, 235, 205],
  backgroundColor: [
    'rgba(0, 99, 132, 1)',
    'rgba(30, 99, 132, 1)',
    'rgba(60, 99, 132, 1)',
    'rgba(90, 99, 132, 1)',
    'rgba(120, 99, 132, 1)',
    'rgba(150, 99, 132, 1)',
    'rgba(180, 99, 132, 1)',
    'rgba(210, 99, 132, 1)',
    'rgba(240, 99, 132, 1)'
  ],
};
var barChart = new Chart(programCanvas, {
  type: 'bar',
  data: {
    labels: ["Java", "JavaScript", "C#", "PHP", "Python", "C++", "Swift", "Ruby"],
    datasets: [programPeople]
  },

});
//фиксирование хедера при прокрутке
$(document).ready(function(){
 
	var nav = $('.header');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			nav.addClass("f-nav");
		} else {
			nav.removeClass("f-nav");
		}
	});
 
});
//появление бокового меню
$(document).ready(function(){
	$('.nav_mini').on('click', function(){
		$('.sidebar').toggleClass('activ');
	})
});
$(document).ready(function(){
	$('#section_1 img.animated').hover(function(){
		$(this).removeClass('zoomIn');
		$(this).addClass('tada');
	},
	function(){	
		$(this).removeClass('tada');
	});
	$('#section_1 h1.animated').hover(function(){
		$(this).addClass('flip');
	},
	function(){	
		$(this).removeClass('flip');
	});
	$('#section_1 p.animated').hover(function(){
		$(this).addClass('rubberBand');
	},
	function(){	
		$(this).removeClass('rubberBand');
	});	
});
//отображение кнопки scrollTop и ее функции
$(document).ready(function(){
	let speed = 500,
	$scrollTop = $('<a href="#" class="scrollTop"><i class="fa fa-chevron-up"></i></a>').appendTo('body');
	        
	$scrollTop.click(function(e){
	    e.preventDefault();
	    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: 0}, speed );
	});

	function show_scrollTop(){
	    ($(window).scrollTop() > 300) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
	}
	$(window).scroll( function(){ 
		show_scrollTop();
	});
	show_scrollTop();
});
//плавный scroll
$(document).ready(function(){
	$(".nav, .sidebar").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;

		$('body, html').animate({scrollTop: top}, 1500);
	});
});
//подсветка и отображение контактов
$(document).ready(function(){
	$('.contacts').on('click', 'a', function(){
		if ( !$(this).hasClass('footer_activ') ) {
			$(this).parents('.wrapper').find('.footer_activ').removeClass('footer_activ');
			$(this).addClass('footer_activ');
		}	
	})
});
//одноразовый вызов попапа при скроле в самый низ	
$(document).ready(function(){
	let marker = true;
	
	$(window).on('scroll', function() {

		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			if (marker) {
			marker = false;
			
				$('.overlay, .popup').fadeIn(1000, function(){
					$('.overlay, .popup animate').css({'opacity': 1, 'visibility': 'visible'});

					setTimeout(function(){
						$('.overlay, .popup').fadeOut(1000, function(){
							$('.overlay, .popup').css({'opacity': 0, 'visibility': 'hidden'});
						});
					}, 2000);
				});
			}
		}
	});
});	