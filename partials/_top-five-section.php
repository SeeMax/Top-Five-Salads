<section id="topfive" class="top-five-section top5Trigger">
  <div class="content">
    <?php $posts = get_field('top_five_salads', 'options');?>
      <?php if( $posts ): ?>
        <?php $count = 0;?>
        <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>
          <?php $count++;?>
          <?php setup_postdata($post); ?>
          <div class="single-salad singleSalad singleSalad1 saladTrigger">
            <?php if (get_field('salad_image')):?>
              <div class="salad-image background-image-section c-width-33"
                  <?php
                    $image = get_field('salad_image');
                    $size = 'large';
                    $thumb = $image['sizes'][ $size ];
                    if (!empty($image))
                  :?>
                  style='background-image: url("<?php echo $thumb; ?>");'
                <?php endif;?>
              >
              <div class="salad-order">
                <div class="salad-order-number">
                  <?php echo $count;?>
                </div>
              </div>
              </div>
            <?php endif; ?>
            <div class="salad-info c-width-66">
              <h3><?php the_title();?></h3>
              <div class="salad-credit">
                By
                <a href="restaurant_link" target="_blank" class="">
                  <?php the_field('restaurant');?>
                </a>
              </div>
              <div class="salad-words c-width-48">
                <div class="salad-description"><?php the_field('salad_description');?></div>
                <hr />
                <div class="salad-ingredients">
                  <h5>Ingredients</h5>
                  <ul>

                    <?php if( have_rows('salad_ingredients') ):
                      while ( have_rows('salad_ingredients') ) : the_row();?>
                        <li><?php the_sub_field('single_ingredient');?></li>
                      <?php endwhile;
                    endif;?>
                  </ul>
                </div>
              </div>
              <div class="rank-bars c-width-48">
                <div class="single-salad-rank singleRank">
                  <h5>Texture</h5>
                  <div class="rank-bar rankBar texture-bar textureBar" data-length="<?php the_field('salad_texture');?>">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 10" preserveAspectRatio="none">
                      <rect x="0" y="0" width="0" height="10"/>
                    </svg>
                  </div>
                  <div class="rank-bar-labels textureLabels">
                    <span>All The Same</span>
                    <span>All The Textures</span>
                  </div>
                </div>

                <div class="single-salad-rank singleRank">
                  <h5>Dressing</h5>
                  <div class="rank-bar rankBar dressing-bar dressingBar" data-length="<?php the_field('salad_dressing');?>">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 10" preserveAspectRatio="none">
                      <rect x="0" y="0" width="0" height="10"/>
                    </svg>
                  </div>
                  <div class="rank-bar-labels dressingLabels">
                    <span>Kinda Bland</span>
                    <span>Delicious</span>
                  </div>
                </div>

                <div class="single-salad-rank singleRank">
                  <h5>Greens Ratio</h5>
                  <div class="rank-bar rankBar greens-bar greensBar" data-length="<?php the_field('salad_greens');?>">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 10" preserveAspectRatio="none">
                      <rect x="0" y="0" width="0" height="10"/>
                    </svg>
                  </div>
                  <div class="rank-bar-labels greensLabels">
                    <span>All Greens</span>
                    <span>Perfect Mix</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <?php endforeach; ?>
        <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
    <?php endif; ?>
  </div>
</section>
