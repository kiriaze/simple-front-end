SFE
===========

A html boilerplate utilizing .kit and simple's front end framework. Under 1.4mb.

### Installation:

#### Standalone
1. Clone.
2. Drop into Codekit.
3. Make dope shit.

#### Features
1. Bowered assets
	1. jQuery
	2. jQuery.lazyload
	3. fastclick
	4. prettify
	5. matchHeight
	6. RetinaJS
	7. SassyAnimate.scss
	8. MediaElements.js
	9. SimpleMedia
	10. SimpleAnchors
	11. SimpleForms
	12. MFP
2. Included Plugins
	1. jQuery
		1. Validate
		2. UI
		3. Easing
	2. Modernizr
3. 1000+ Icons
	1. Entypo/Social
	2. FontAwesome
	3. Foundation
	4. IonIons

Simple's current philosophy parallels the smaccs, oocss, an bem philosophy - but better.
Meet Soma.
```
S imple
O bject Oriented
M odular
A rchitecture
```

* No underscores, camelcasing, or double hyphens - umm did people forget proper naming conventions specific to each language?
	* Although I would prefer using camelcasing over many hypens
* Scss only, less sucks donkey dick.
* Minimal ID's, primarily for main elements, e.g. header,nav, main, footer, and for js manipulation.
* Placeholders galore. ( % incase you didn't know )
* Prefix free, of source files. ( let your compiler handle that jazz )
* Tabs people, make code readable. ( In other words, 4 spaces instead of 2 )
* No super nesting, 3 levels deep - max.
* Space out your shit. Example:
```
	// css
	.some-element {
		width: 80%;
		margin: 0 auto;
	}

    // js
	if ( $( '.some-element' ).length ) {
		console.log('foo');
	}

	// php
	if ( isset( $someElement ) ) {
    	print_r($someElement);
	}
```
* Keep syntax consistent - dont mix and match buddy.
```
<?php
	// Traditional
	if ( isset( $foo ) ) {
		$someElement = 'bar';
	} else {
		$someElement = '';
	}

    // alternative syntax
	if ( isset( $foo ) ) :
		$someElement = 'bar';
	else :
		$someElement = '';
	endif;

    // shorthand ternary operators
	$someElement = $foo ? 'bar' : '';
?>
```
* Scss example

```
%button {
  min-width: 100px;
  padding: 1em;
  border-radius: 1em;
}
%twitter-background {
  color: #fff;
  background: #55acee;
}
%facebook-background {
  color: #fff;
  background: #3b5998;
}

.btn {
  &--twitter {
    @extend %button;
    @extend %twitter-background;
  }
  &--facebook {
    @extend %button;
    @extend %facebook-background;
  }
}

<a href="#" class="btn--twitter">Twitter</a>
<a href="#" class="btn--facebook">Facebook</a>
```


### Todos:
1. ~~Bower implementation~~
2. Patternlab implementation
3. ~~Clean up components - include via bower option?~~
4. Better SVG handling.
5. Add simpleAnchors, simpleMedia, simpleForms to bower.
6. SFE as a bower component ( Coming Soon! )
