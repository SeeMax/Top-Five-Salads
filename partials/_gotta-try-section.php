<section id="gottatry" class="half-width-section sub-salad-section half-width-right gotta-try-section">
  <div class="content">
    <h2>Gotta Try</h2>
    <?php $saladArgs = array(
    'post_type' => 'gottatrys',
    'posts_per_page' => -1,
    'order' => 'ASC',
    'orderby' => 'menu_order',
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
          <div class="by-and-submitted-area">
            <span>
              By
              <span class="mapOpen salad-map-link">
                <?php the_field('try_restaurant');?>
              </span>
            </span>

            <span class="try-submitter">
              <?php the_field('try_submitter');?>
            </span>
          </div>
          <div class="salad-description">
            <?php the_field('try_salad_description');?>
          </div>
        </div>
      </div>
    <?php endwhile; ?>
    <?php wp_reset_query(); ?>
  <?php endif; ?>
  </div>
</section>
