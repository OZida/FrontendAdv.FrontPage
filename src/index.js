import './styles/styles.scss';
import ctrl from './controllers/currencyCtrl.js';
ctrl.render();
import Isotope from "isotope-layout";
import 'owl.carousel';
import '../node_modules/jquery-parallax.js/parallax.min.js';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


// console.log(Isotope);


$(document).ready(function(){
 	$('.owl-carousel').owlCarousel({
	  	nav:true,
	  	loop:true,
	  	items:1,
	  	animateOut: 'fadeOut',
	  	autoplay: 3000,
	    // autoplayHoverPause:true
	});
});
$(document).ready(function(){
	$('#section_2').parallax({
		speed: 0.5,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-2.jpg',
		bleed: 400,
	}),
	$('#section_4').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-4.jpg',
		bleed: 500,
	}),
	$('#section_6').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-6.jpg',
		bleed: 400,
	}),
		$('#section_8').parallax({
		speed: 0.3,
		imageSrc: 'http://livedemo00.template-help.com/drupal_55960/sites/default/files/parallax-7.jpg',
		bleed: 400,
	})
});	

$(document).ready(function(){

 	let grid = new Isotope('.grid', {
                itemSelector: '.item',
                layoutMode: 'fitRows',
                // filter: '*',
    });
 	// console.log(grid);
 	$('.filters-button-group').on( 'click', 'button', function() {
        if ( !$(this).hasClass('is-checked') ) {
			$(this).parents('.wrapper').find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');

			let selector = $(this).attr('data-filter');
			grid.arrange({ filter: selector });
        }
    });
});


