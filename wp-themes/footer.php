<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WebaxPRO
 */

?>

<footer class="footer">
	<div class="container-fluid">
		<div class="row align-content-center">
			<div class="col-12  col-md-12 col-lg-12 col-xl-6 col-xxl-6 footer__list">
				<ul class="footer__nav">
					<li class="footer__items"><a href="#" class="footor__link">User Agreement</a></li>
					<li class="footer__items"><a href="#" class="footor__link">Privacy Policy</a></li>
				</ul>
			</div>
			<div class="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 footer__email">
				<a class="btn header__btn--main" href="email:dengi-finance.contacts@gmail.com">dengi-finance.contacts@gmail.com</a>

			</div>
		</div>
	</div>
</footer>
<?php wp_footer(); ?>
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" ></script>
<script> 
//type="module">
//type="module">
//import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

const timsSlider = new Swiper('.team-section__row', {
	slidesPerView: 1,
  spaceBetween: 20,
	pagination: {
				el: ".swiper-pag_timas",
				clickable: true,
 
			},
 // Respo

  // Responsive breakpoints
  breakpoints: {
    // whe window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    629: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 20
    },
		1340: {
			slidesPerView: 4,
			spaceBetween: 20
		},
    1400: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }


})
const swiper = new Swiper('.comments', {
 // Default parameters
 slidesPerView: 1,
  spaceBetween: 20,
	pagination: {
				el: ".swiper-pag_comm",
				clickable: true,
 
			},
 // Responsive breakpoints
 breakpoints: {
	 // whe window width is >= 320px
	 320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    629: {
			slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1000: {
			slidesPerView: 2,
      spaceBetween: 20
    },
    1140: {
			slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
			slidesPerView: 3,
      spaceBetween: 20
    }
  },
	
})
</script>



</body>
</html>
