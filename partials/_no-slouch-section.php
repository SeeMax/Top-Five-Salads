<section class="half-width-section sub-salad-section no-slouch-section">
  <div class="content">
    <h2>No Slouch</h2>
    <?php $ids = get_field('top_five_salads', 'options', false, false);?>
    <?php $saladArgs = array(
    'post_type' => 'salads',
    'posts_per_page' => -1,
    'order' => 'ASC',
    'orderby' => 'menu_order',
    'post__not_in'			=> $ids,
    'post_status'		=> 'any'
    ); $the_query = new WP_Query($saladArgs);?>
    <?php if ($the_query->have_posts()) : ?>
    <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
      <div class="single-salad">
        <?php if (get_field('salad_image')):?>
          <div class="salad-image background-image-section"
              <?php
                $image = get_field('salad_image');
                $size = 'large';
                $thumb = $image['sizes'][ $size ];
                if (!empty($image))
              :?>
              style='background-image: url("<?php echo $thumb; ?>");'
            <?php endif;?>
          >
          </div>
        <?php endif; ?>
        <div class="salad-info">
          <h4><?php the_title();?></h4>
          <p>
            By <a href="restaurant_link" target="_blank" class="">
              <?php the_field('restaurant');?>
            </a>
            <span class="submitter">
              Submitted By Needs ACF Submitter<?php the_field('submitter');?>
            </span>
          </p>
          <div class="salad-description">
            <?php the_field('salad_description');?>
          </div>
        </div>
      </div>
    <?php endwhile; ?>
    <?php wp_reset_query(); ?>
    <?php endif; ?>
  </div>
</section>
