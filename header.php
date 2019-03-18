<!doctype html>
<html <?php language_attributes(); ?> class="no-js loader-class">
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php the_title(); ?></title>

	<link href="//www.google-analytics.com" rel="dns-prefetch">
  <link href="<?php echo get_template_directory_uri(); ?>/img/topfivefav.png" rel="shortcut icon">
   <!-- <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed"> -->

	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="<?php bloginfo('description'); ?>">

	<?php wp_head(); ?>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-136428669-1"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-136428669-1');
	</script>

</head>
<body <?php body_class(); ?> >
<div class="wrapper">
<div id="preloader">
	<img src="<?php echo get_template_directory_uri();?>/img/loader.svg" >
</div>
	<header class="header headerPin" role="banner">
		<div class="content">
			<nav class="menu-toggle menuToggle" role="navigation">
				<span class="hamTop"></span>
				<span class="hamMid"></span>
				<span class="hamBot"></span>
			</nav>
			<h3 class="scrolled-title scrolledTitle">Top 5 Salads</h3>
			<div class="subNavToggle submit-nav submitToggle menuToggle">
				Submit A Salad
			</div>
		</div>
	</header>
