# jQuery Gallerybox

## Set up
### 1. Install via NPM
This is the easiest way to get Gallerybox.
```
npm install jquery-gallerybox
```

### 2. Include files in HTML
Add stylesheet with this line in your `&lt;header&gt;`-section:
```
&lt;link rel="stylesheet" href="path/to/gallerybox.css"&gt;
```
Add jQuery (if you haven't) and Gallerybox with these lines at the end of your document, just before the `&lt;/body&gt;`-tag:
```
&lt;script src="//code.jquery.com/jquery-1.11.3.min.js"&gt;&lt;/script&gt;
&lt;script src="path/to/jquery-gallerybox.js"&gt;&lt;/script&gt;
```

## Usage
### 1. Select images
For each image you want to add to the Gallerybox, just add a class. How about `gbox`?
```
&lt;img src="image1.jpg" class="gbox"&gt;
&lt;img src="image2.jpg" class="gbox"&gt;
...
```

### 2. Attach with plugin
Bind images with jQuery:
```
&lt;script&gt;
  $('.gbox').gallerybox();
&lt;/script&gt;
```

## Settings
You can use your own settings, just add them when you bind images with jQuery:
```
&lt;script&gt;
  $('.gbox').gallerybox({
    bgColor: 'blue',
    bgOpacity: 0.5,
    closeText: 'EXIT'
  });
&lt;/script&gt;
```

| Option    | Default | Description |
| --------- | ------- | ----------- |
| bgColor   | #000    | Set backgroundcolor for gallerybox. Use values like '#001f00', 'darkgrey' or 'rgb(21, 21, 14)'. |
| bgOpacity | 0.95    | Let you adjust the transparency of the backgroundcolor. Use values from 0 to 1. |
| closeText | CLOSE   | Use your own text in the top-right corner. |

## License
Released under the [MIT license](http://opensource.org/licenses/mit-license.php), see LICENSE.
