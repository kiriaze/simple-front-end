Animate.scss
============

A sassified animation library based on Animate.css.

Import into project 
* @import 'animate/animate';

Animation are imported with default variables set in _animate.scss.

Comment / Uncomment the animations you'd like to use.

Placeholders have been set for animtions, e.g. %fadeIn, with properties defined within _properties.scss.

Set your own values in your _base.scss or wherever your variables are defined to override the default properties:

* $duration: .35s;
* $delay: .2s;
* $delay: 0s;
* $function: ease;
* $fill: both;
* $visibility: visible;


##License
Animate.scss is licensed under the GPL v2 license. (http://opensource.org/licenses/GPL-2.0)
