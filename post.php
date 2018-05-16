<?php
@require('blog/wp-blog-header.php'); //llamamos al wp-blog-header para hacer la consulta
?>
//hacemos la consulta
<?php $my_query = new WP_Query('showposts=10&orderby=date&order=desc'); ?>
<?php while ($my_query->have_posts()) : $my_query->the_post(); ?>
    <div class="article">
        <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
    </div>
<?php endwhile; ?>
?>