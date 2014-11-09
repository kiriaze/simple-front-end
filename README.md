Simple Html
===========

A html boilerplate utilizing .kit and simple's front end framework.

### Todos:
1. Bower implementation
2. Patternlab implementation
3. Clean up components - include via bower option?
4. Better SVG handling.

Current Philosophy parallels smaccs, oocss, an bem philosophy - but better.
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