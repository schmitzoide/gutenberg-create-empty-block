<?php
/**
 * Use this file if you wish to render the block using PHP (dynamically).
 *
 * Inside this PHP file you have access to the following variables:
 * $attributes: The array of attributes for the block.
 * $content: The markup of the block as stored in the database, if any.
 * $block: The instance of the WP_Block class that represents the rendered block (metadata of the block).
 *
 * NOTE: Remove this file and its reference from block.json if you don't wish to use it render the block dynamically.
 *
 * @see https://developer.wordpress.org/block-editor/getting-started/fundamentals/static-dynamic-rendering/#how-to-define-dynamic-rendering-for-a-block
 */
echo '<p>Block Template from render.php side.</p>';
