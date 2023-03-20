<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WebaxPRO
 */

?>

<!DOCTYPE html>
<html 	<?php language_attributes(); ?>>

<head>

	<meta charset="	<?php bloginfo( 'charset' ); ?>">

	<!-- <base href="/"> -->

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="icon" href="<?php echo get_template_directory_uri()?>/assets/images/favicon.png">
	<meta property="og:image" content="<?php echo get_template_directory_uri()?>/assets/images/dist/preview.jpg">
	<link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header class="header">	
	<div class="container-fluid header__row">

				<div class="header__logo">	
				<a href="/"  title="Site Logo">
				<img src="<?php echo get_template_directory_uri()?>/assets/images/dist/Logo.png" alt="Site Logo">
			</a>
				</div>
			
				<div class="header__nav--burger">
				<div class="burger">
					<span class="burger_line">&nbsp;</span>
				</div>
				</div>
				<nav class="header__nav">
					<span class="header__nav--title">Menu</span> 
			<ul class="header__menu">
				<li class="header__menu-item"><a href="#" class="header__menu-link  active">Forex Brokers</a></li>
				<li class="header__menu-item"><a href="#" class="header__menu-link">Binary Options</a></li>
				<li class="header__menu-item"><a href="#" class="header__menu-link">Crypto Projects</a></li>
				<li class="header__menu-item"><a href="#" class="header__menu-link">HYIP’S</a></li>
			</ul>
			<div class="header__coloms">
	
				<a href="#" class="btn header__btn--main">Investor Academy</a>
			</div>
		</nav>
		
	</div>
</header>