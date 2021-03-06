<section id="noslouch" class="half-width-section sub-salad-section no-slouch-section">
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
      <!-- Check if the Salad is dead -->
      <?php $rips = get_field('rip');?>
      <?php if( $rips ): ?>
        <?php foreach( $rips as $rip ): ?>
          <div class="single-salad <?php echo strtolower($rip);?>-class">
            <div class="rip-textline">
              <div>
                <h2>RIP</h2>
              </div>
          </div>
        <?php endforeach; ?>
      <?php else:?>
        <div class="single-salad">
      <?php endif; ?>
        <div class="salad-info c-width-100">
          <h4><?php the_title();?></h4>
          <p>

              By
              <span class="salad-map-link">
                <a class="c-block-fill" href="<?php the_field('restaurant_link');?>" target="_blank"></a>
                <?php the_field('restaurant');?>
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
