<?php /* Template Name: Home */ get_header(); ?>
<main class="home-page">
	<?php while (have_posts()) : the_post(); ?>
		<section class="hero-section">
			<div class="salad-parts saladParts">
				<?php get_template_part('partials/_salad-parts');?>
			</div>
			<div class="content">
				<h1 class="mainTitle">Top 5 Salads</h1>
			</div>
		</section>
		<?php get_template_part('partials/_top-five-section');?>
		<section class="got-a-salad-prompt submitTrigger">
		  <div class="content">
				Is there a salad that should make this list?&nbsp;&nbsp;<span class="subNavToggle submitToggle menuToggle">Submit A Salad</span>
			</div>
		</section>
		<?php get_template_part('partials/_no-slouch-section');?>
		<?php get_template_part('partials/_gotta-try-section');?>
		<?php get_template_part('partials/_submit-menu');?>
		<?php get_template_part('partials/_about-menu');?>
		<?php get_template_part('partials/_main-menu');?>

	<?php endwhile; ?>
</main>
<?php get_footer(); ?>
