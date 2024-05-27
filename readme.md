# Create Empty Gutenberg Block NPX Script

A simple NPX script to scaffold a new Gutenberg block inside an existing WordPress plugin.

This npx script created an empty Gutenberg block inside your existing plugin, ready to be edited and included with the existing plugins you have on your project. 
If this is the first block you have, you'll need to enqueue it inside the plugin's root PHP file with something like this:

```
function wpdocs_create_blocks_mysite_block_init() {
	
	register_block_type( __DIR__ . '/build/block-name' );

}
add_action( 'init', 'wpdocs_create_blocks_mysite_block_init' );
```


## Table of Contents

- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Usage

1. **Navigate to Your Plugin Directory**
Go to the src directory of your existing WordPress plugin where you want to add the new block:

```
cd path/to/your/plugin/src
```

2. 	**Run the Scaffold Command**
Use the npx command followed by the package name and the desired block name. Ensure the block name is dash-separated, all lowercase, and does not contain any prohibited characters. The script will handle the formatting for you.

```
npx @schmitzoide/create-empty-block "block-name"
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

