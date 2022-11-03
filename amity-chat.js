let iframeUrl = "";
const style = document.createElement("style");
style.type ="text/css"
style.innerHTML = `
/*!
*  Font Awesome 4.6.3 by @davegandy - http://fontawesome.io - @fontawesome
*  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
*/
@font-face {
 font-family: "FontAwesome";
 src: url("fonts/fontawesome-webfont.eot?v=4.6.3");
 src: url("fonts/fontawesome-webfont.eot?#iefix&v=4.6.3")
     format("embedded-opentype"),
   url("fonts/fontawesome-webfont.woff2?v=4.6.3") format("woff2"),
   url("fonts/fontawesome-webfont.woff?v=4.6.3") format("woff"),
   url("fonts/fontawesome-webfont.ttf?v=4.6.3") format("truetype"),
   url("fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular")
     format("svg");
 font-weight: normal;
 font-style: normal;
}
.fa {
 display: inline-block;
 font: normal normal normal 14px/1 FontAwesome;
 font-size: inherit;
 text-rendering: auto;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
}
.fa-lg {
 font-size: 1.33333333em;
 line-height: 0.75em;
 vertical-align: -15%;
}
.fa-2x {
 font-size: 2em;
}
.fa-3x {
 font-size: 3em;
}
.fa-4x {
 font-size: 4em;
}
.fa-5x {
 font-size: 5em;
}
.fa-fw {
 width: 1.28571429em;
 text-align: center;
}
.fa-ul {
 padding-left: 0;
 margin-left: 2.14285714em;
 list-style-type: none;
}
.fa-ul > li {
 position: relative;
}
.fa-li {
 position: absolute;
 left: -2.14285714em;
 width: 2.14285714em;
 top: 0.14285714em;
 text-align: center;
}
.fa-li.fa-lg {
 left: -1.85714286em;
}
.fa-border {
 padding: 0.2em 0.25em 0.15em;
 border: solid 0.08em #eee;
 border-radius: 0.1em;
}
.fa-pull-left {
 float: left;
}
.fa-pull-right {
 float: right;
}
.fa.fa-pull-left {
 margin-right: 0.3em;
}
.fa.fa-pull-right {
 margin-left: 0.3em;
}
.pull-right {
 float: right;
}
.pull-left {
 float: left;
}
.fa.pull-left {
 margin-right: 0.3em;
}
.fa.pull-right {
 margin-left: 0.3em;
}
.fa-spin {
 -webkit-animation: fa-spin 2s infinite linear;
 animation: fa-spin 2s infinite linear;
}
.fa-pulse {
 -webkit-animation: fa-spin 1s infinite steps(8);
 animation: fa-spin 1s infinite steps(8);
}
@-webkit-keyframes fa-spin {
 0% {
   -webkit-transform: rotate(0deg);
   transform: rotate(0deg);
 }
 100% {
   -webkit-transform: rotate(359deg);
   transform: rotate(359deg);
 }
}
@keyframes fa-spin {
 0% {
   -webkit-transform: rotate(0deg);
   transform: rotate(0deg);
 }
 100% {
   -webkit-transform: rotate(359deg);
   transform: rotate(359deg);
 }
}
.fa-rotate-90 {
 -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
 -webkit-transform: rotate(90deg);
 -ms-transform: rotate(90deg);
 transform: rotate(90deg);
}
.fa-rotate-180 {
 -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
 -webkit-transform: rotate(180deg);
 -ms-transform: rotate(180deg);
 transform: rotate(180deg);
}
.fa-rotate-270 {
 -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
 -webkit-transform: rotate(270deg);
 -ms-transform: rotate(270deg);
 transform: rotate(270deg);
}
.fa-flip-horizontal {
 -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
 -webkit-transform: scale(-1, 1);
 -ms-transform: scale(-1, 1);
 transform: scale(-1, 1);
}
.fa-flip-vertical {
 -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
 -webkit-transform: scale(1, -1);
 -ms-transform: scale(1, -1);
 transform: scale(1, -1);
}
:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical {
 filter: none;
}
.fa-stack {
 position: relative;
 display: inline-block;
 width: 2em;
 height: 2em;
 line-height: 2em;
 vertical-align: middle;
}
.fa-stack-1x,
.fa-stack-2x {
 position: absolute;
 left: 0;
 width: 100%;
 text-align: center;
}
.fa-stack-1x {
 line-height: inherit;
}
.fa-stack-2x {
 font-size: 2em;
}
.fa-inverse {
 color: #fff;
}
.fa-glass:before {
 content: "\f000";
}
.fa-music:before {
 content: "\f001";
}
.fa-search:before {
 content: "\f002";
}
.fa-envelope-o:before {
 content: "\f003";
}
.fa-heart:before {
 content: "\f004";
}
.fa-star:before {
 content: "\f005";
}
.fa-star-o:before {
 content: "\f006";
}
.fa-user:before {
 content: "\f007";
}
.fa-film:before {
 content: "\f008";
}
.fa-th-large:before {
 content: "\f009";
}
.fa-th:before {
 content: "\f00a";
}
.fa-th-list:before {
 content: "\f00b";
}
.fa-check:before {
 content: "\f00c";
}
.fa-remove:before,
.fa-close:before,
.fa-times:before {
 content: "\f00d";
}
.fa-search-plus:before {
 content: "\f00e";
}
.fa-search-minus:before {
 content: "\f010";
}
.fa-power-off:before {
 content: "\f011";
}
.fa-signal:before {
 content: "\f012";
}
.fa-gear:before,
.fa-cog:before {
 content: "\f013";
}
.fa-trash-o:before {
 content: "\f014";
}
.fa-home:before {
 content: "\f015";
}
.fa-file-o:before {
 content: "\f016";
}
.fa-clock-o:before {
 content: "\f017";
}
.fa-road:before {
 content: "\f018";
}
.fa-download:before {
 content: "\f019";
}
.fa-arrow-circle-o-down:before {
 content: "\f01a";
}
.fa-arrow-circle-o-up:before {
 content: "\f01b";
}
.fa-inbox:before {
 content: "\f01c";
}
.fa-play-circle-o:before {
 content: "\f01d";
}
.fa-rotate-right:before,
.fa-repeat:before {
 content: "\f01e";
}
.fa-refresh:before {
 content: "\f021";
}
.fa-list-alt:before {
 content: "\f022";
}
.fa-lock:before {
 content: "\f023";
}
.fa-flag:before {
 content: "\f024";
}
.fa-headphones:before {
 content: "\f025";
}
.fa-volume-off:before {
 content: "\f026";
}
.fa-volume-down:before {
 content: "\f027";
}
.fa-volume-up:before {
 content: "\f028";
}
.fa-qrcode:before {
 content: "\f029";
}
.fa-barcode:before {
 content: "\f02a";
}
.fa-tag:before {
 content: "\f02b";
}
.fa-tags:before {
 content: "\f02c";
}
.fa-book:before {
 content: "\f02d";
}
.fa-bookmark:before {
 content: "\f02e";
}
.fa-print:before {
 content: "\f02f";
}
.fa-camera:before {
 content: "\f030";
}
.fa-font:before {
 content: "\f031";
}
.fa-bold:before {
 content: "\f032";
}
.fa-italic:before {
 content: "\f033";
}
.fa-text-height:before {
 content: "\f034";
}
.fa-text-width:before {
 content: "\f035";
}
.fa-align-left:before {
 content: "\f036";
}
.fa-align-center:before {
 content: "\f037";
}
.fa-align-right:before {
 content: "\f038";
}
.fa-align-justify:before {
 content: "\f039";
}
.fa-list:before {
 content: "\f03a";
}
.fa-dedent:before,
.fa-outdent:before {
 content: "\f03b";
}
.fa-indent:before {
 content: "\f03c";
}
.fa-video-camera:before {
 content: "\f03d";
}
.fa-photo:before,
.fa-image:before,
.fa-picture-o:before {
 content: "\f03e";
}
.fa-pencil:before {
 content: "\f040";
}
.fa-map-marker:before {
 content: "\f041";
}
.fa-adjust:before {
 content: "\f042";
}
.fa-tint:before {
 content: "\f043";
}
.fa-edit:before,
.fa-pencil-square-o:before {
 content: "\f044";
}
.fa-share-square-o:before {
 content: "\f045";
}
.fa-check-square-o:before {
 content: "\f046";
}
.fa-arrows:before {
 content: "\f047";
}
.fa-step-backward:before {
 content: "\f048";
}
.fa-fast-backward:before {
 content: "\f049";
}
.fa-backward:before {
 content: "\f04a";
}
.fa-play:before {
 content: "\f04b";
}
.fa-pause:before {
 content: "\f04c";
}
.fa-stop:before {
 content: "\f04d";
}
.fa-forward:before {
 content: "\f04e";
}
.fa-fast-forward:before {
 content: "\f050";
}
.fa-step-forward:before {
 content: "\f051";
}
.fa-eject:before {
 content: "\f052";
}
.fa-chevron-left:before {
 content: "\f053";
}
.fa-chevron-right:before {
 content: "\f054";
}
.fa-plus-circle:before {
 content: "\f055";
}
.fa-minus-circle:before {
 content: "\f056";
}
.fa-times-circle:before {
 content: "\f057";
}
.fa-check-circle:before {
 content: "\f058";
}
.fa-question-circle:before {
 content: "\f059";
}
.fa-info-circle:before {
 content: "\f05a";
}
.fa-crosshairs:before {
 content: "\f05b";
}
.fa-times-circle-o:before {
 content: "\f05c";
}
.fa-check-circle-o:before {
 content: "\f05d";
}
.fa-ban:before {
 content: "\f05e";
}
.fa-arrow-left:before {
 content: "\f060";
}
.fa-arrow-right:before {
 content: "\f061";
}
.fa-arrow-up:before {
 content: "\f062";
}
.fa-arrow-down:before {
 content: "\f063";
}
.fa-mail-forward:before,
.fa-share:before {
 content: "\f064";
}
.fa-expand:before {
 content: "\f065";
}
.fa-compress:before {
 content: "\f066";
}
.fa-plus:before {
 content: "\f067";
}
.fa-minus:before {
 content: "\f068";
}
.fa-asterisk:before {
 content: "\f069";
}
.fa-exclamation-circle:before {
 content: "\f06a";
}
.fa-gift:before {
 content: "\f06b";
}
.fa-leaf:before {
 content: "\f06c";
}
.fa-fire:before {
 content: "\f06d";
}
.fa-eye:before {
 content: "\f06e";
}
.fa-eye-slash:before {
 content: "\f070";
}
.fa-warning:before,
.fa-exclamation-triangle:before {
 content: "\f071";
}
.fa-plane:before {
 content: "\f072";
}
.fa-calendar:before {
 content: "\f073";
}
.fa-random:before {
 content: "\f074";
}
.fa-comment:before {
 content: "\f075";
}
.fa-magnet:before {
 content: "\f076";
}
.fa-chevron-up:before {
 content: "\f077";
}
.fa-chevron-down:before {
 content: "\f078";
}
.fa-retweet:before {
 content: "\f079";
}
.fa-shopping-cart:before {
 content: "\f07a";
}
.fa-folder:before {
 content: "\f07b";
}
.fa-folder-open:before {
 content: "\f07c";
}
.fa-arrows-v:before {
 content: "\f07d";
}
.fa-arrows-h:before {
 content: "\f07e";
}
.fa-bar-chart-o:before,
.fa-bar-chart:before {
 content: "\f080";
}
.fa-twitter-square:before {
 content: "\f081";
}
.fa-facebook-square:before {
 content: "\f082";
}
.fa-camera-retro:before {
 content: "\f083";
}
.fa-key:before {
 content: "\f084";
}
.fa-gears:before,
.fa-cogs:before {
 content: "\f085";
}
.fa-comments:before {
 content: "\f086";
}
.fa-thumbs-o-up:before {
 content: "\f087";
}
.fa-thumbs-o-down:before {
 content: "\f088";
}
.fa-star-half:before {
 content: "\f089";
}
.fa-heart-o:before {
 content: "\f08a";
}
.fa-sign-out:before {
 content: "\f08b";
}
.fa-linkedin-square:before {
 content: "\f08c";
}
.fa-thumb-tack:before {
 content: "\f08d";
}
.fa-external-link:before {
 content: "\f08e";
}
.fa-sign-in:before {
 content: "\f090";
}
.fa-trophy:before {
 content: "\f091";
}
.fa-github-square:before {
 content: "\f092";
}
.fa-upload:before {
 content: "\f093";
}
.fa-lemon-o:before {
 content: "\f094";
}
.fa-phone:before {
 content: "\f095";
}
.fa-square-o:before {
 content: "\f096";
}
.fa-bookmark-o:before {
 content: "\f097";
}
.fa-phone-square:before {
 content: "\f098";
}
.fa-twitter:before {
 content: "\f099";
}
.fa-facebook-f:before,
.fa-facebook:before {
 content: "\f09a";
}
.fa-github:before {
 content: "\f09b";
}
.fa-unlock:before {
 content: "\f09c";
}
.fa-credit-card:before {
 content: "\f09d";
}
.fa-feed:before,
.fa-rss:before {
 content: "\f09e";
}
.fa-hdd-o:before {
 content: "\f0a0";
}
.fa-bullhorn:before {
 content: "\f0a1";
}
.fa-bell:before {
 content: "\f0f3";
}
.fa-certificate:before {
 content: "\f0a3";
}
.fa-hand-o-right:before {
 content: "\f0a4";
}
.fa-hand-o-left:before {
 content: "\f0a5";
}
.fa-hand-o-up:before {
 content: "\f0a6";
}
.fa-hand-o-down:before {
 content: "\f0a7";
}
.fa-arrow-circle-left:before {
 content: "\f0a8";
}
.fa-arrow-circle-right:before {
 content: "\f0a9";
}
.fa-arrow-circle-up:before {
 content: "\f0aa";
}
.fa-arrow-circle-down:before {
 content: "\f0ab";
}
.fa-globe:before {
 content: "\f0ac";
}
.fa-wrench:before {
 content: "\f0ad";
}
.fa-tasks:before {
 content: "\f0ae";
}
.fa-filter:before {
 content: "\f0b0";
}
.fa-briefcase:before {
 content: "\f0b1";
}
.fa-arrows-alt:before {
 content: "\f0b2";
}
.fa-group:before,
.fa-users:before {
 content: "\f0c0";
}
.fa-chain:before,
.fa-link:before {
 content: "\f0c1";
}
.fa-cloud:before {
 content: "\f0c2";
}
.fa-flask:before {
 content: "\f0c3";
}
.fa-cut:before,
.fa-scissors:before {
 content: "\f0c4";
}
.fa-copy:before,
.fa-files-o:before {
 content: "\f0c5";
}
.fa-paperclip:before {
 content: "\f0c6";
}
.fa-save:before,
.fa-floppy-o:before {
 content: "\f0c7";
}
.fa-square:before {
 content: "\f0c8";
}
.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
 content: "\f0c9";
}
.fa-list-ul:before {
 content: "\f0ca";
}
.fa-list-ol:before {
 content: "\f0cb";
}
.fa-strikethrough:before {
 content: "\f0cc";
}
.fa-underline:before {
 content: "\f0cd";
}
.fa-table:before {
 content: "\f0ce";
}
.fa-magic:before {
 content: "\f0d0";
}
.fa-truck:before {
 content: "\f0d1";
}
.fa-pinterest:before {
 content: "\f0d2";
}
.fa-pinterest-square:before {
 content: "\f0d3";
}
.fa-google-plus-square:before {
 content: "\f0d4";
}
.fa-google-plus:before {
 content: "\f0d5";
}
.fa-money:before {
 content: "\f0d6";
}
.fa-caret-down:before {
 content: "\f0d7";
}
.fa-caret-up:before {
 content: "\f0d8";
}
.fa-caret-left:before {
 content: "\f0d9";
}
.fa-caret-right:before {
 content: "\f0da";
}
.fa-columns:before {
 content: "\f0db";
}
.fa-unsorted:before,
.fa-sort:before {
 content: "\f0dc";
}
.fa-sort-down:before,
.fa-sort-desc:before {
 content: "\f0dd";
}
.fa-sort-up:before,
.fa-sort-asc:before {
 content: "\f0de";
}
.fa-envelope:before {
 content: "\f0e0";
}
.fa-linkedin:before {
 content: "\f0e1";
}
.fa-rotate-left:before,
.fa-undo:before {
 content: "\f0e2";
}
.fa-legal:before,
.fa-gavel:before {
 content: "\f0e3";
}
.fa-dashboard:before,
.fa-tachometer:before {
 content: "\f0e4";
}
.fa-comment-o:before {
 content: "\f0e5";
}
.fa-comments-o:before {
 content: "\f0e6";
}
.fa-flash:before,
.fa-bolt:before {
 content: "\f0e7";
}
.fa-sitemap:before {
 content: "\f0e8";
}
.fa-umbrella:before {
 content: "\f0e9";
}
.fa-paste:before,
.fa-clipboard:before {
 content: "\f0ea";
}
.fa-lightbulb-o:before {
 content: "\f0eb";
}
.fa-exchange:before {
 content: "\f0ec";
}
.fa-cloud-download:before {
 content: "\f0ed";
}
.fa-cloud-upload:before {
 content: "\f0ee";
}
.fa-user-md:before {
 content: "\f0f0";
}
.fa-stethoscope:before {
 content: "\f0f1";
}
.fa-suitcase:before {
 content: "\f0f2";
}
.fa-bell-o:before {
 content: "\f0a2";
}
.fa-coffee:before {
 content: "\f0f4";
}
.fa-cutlery:before {
 content: "\f0f5";
}
.fa-file-text-o:before {
 content: "\f0f6";
}
.fa-building-o:before {
 content: "\f0f7";
}
.fa-hospital-o:before {
 content: "\f0f8";
}
.fa-ambulance:before {
 content: "\f0f9";
}
.fa-medkit:before {
 content: "\f0fa";
}
.fa-fighter-jet:before {
 content: "\f0fb";
}
.fa-beer:before {
 content: "\f0fc";
}
.fa-h-square:before {
 content: "\f0fd";
}
.fa-plus-square:before {
 content: "\f0fe";
}
.fa-angle-double-left:before {
 content: "\f100";
}
.fa-angle-double-right:before {
 content: "\f101";
}
.fa-angle-double-up:before {
 content: "\f102";
}
.fa-angle-double-down:before {
 content: "\f103";
}
.fa-angle-left:before {
 content: "\f104";
}
.fa-angle-right:before {
 content: "\f105";
}
.fa-angle-up:before {
 content: "\f106";
}
.fa-angle-down:before {
 content: "\f107";
}
.fa-desktop:before {
 content: "\f108";
}
.fa-laptop:before {
 content: "\f109";
}
.fa-tablet:before {
 content: "\f10a";
}
.fa-mobile-phone:before,
.fa-mobile:before {
 content: "\f10b";
}
.fa-circle-o:before {
 content: "\f10c";
}
.fa-quote-left:before {
 content: "\f10d";
}
.fa-quote-right:before {
 content: "\f10e";
}
.fa-spinner:before {
 content: "\f110";
}
.fa-circle:before {
 content: "\f111";
}
.fa-mail-reply:before,
.fa-reply:before {
 content: "\f112";
}
.fa-github-alt:before {
 content: "\f113";
}
.fa-folder-o:before {
 content: "\f114";
}
.fa-folder-open-o:before {
 content: "\f115";
}
.fa-smile-o:before {
 content: "\f118";
}
.fa-frown-o:before {
 content: "\f119";
}
.fa-meh-o:before {
 content: "\f11a";
}
.fa-gamepad:before {
 content: "\f11b";
}
.fa-keyboard-o:before {
 content: "\f11c";
}
.fa-flag-o:before {
 content: "\f11d";
}
.fa-flag-checkered:before {
 content: "\f11e";
}
.fa-terminal:before {
 content: "\f120";
}
.fa-code:before {
 content: "\f121";
}
.fa-mail-reply-all:before,
.fa-reply-all:before {
 content: "\f122";
}
.fa-star-half-empty:before,
.fa-star-half-full:before,
.fa-star-half-o:before {
 content: "\f123";
}
.fa-location-arrow:before {
 content: "\f124";
}
.fa-crop:before {
 content: "\f125";
}
.fa-code-fork:before {
 content: "\f126";
}
.fa-unlink:before,
.fa-chain-broken:before {
 content: "\f127";
}
.fa-question:before {
 content: "\f128";
}
.fa-info:before {
 content: "\f129";
}
.fa-exclamation:before {
 content: "\f12a";
}
.fa-superscript:before {
 content: "\f12b";
}
.fa-subscript:before {
 content: "\f12c";
}
.fa-eraser:before {
 content: "\f12d";
}
.fa-puzzle-piece:before {
 content: "\f12e";
}
.fa-microphone:before {
 content: "\f130";
}
.fa-microphone-slash:before {
 content: "\f131";
}
.fa-shield:before {
 content: "\f132";
}
.fa-calendar-o:before {
 content: "\f133";
}
.fa-fire-extinguisher:before {
 content: "\f134";
}
.fa-rocket:before {
 content: "\f135";
}
.fa-maxcdn:before {
 content: "\f136";
}
.fa-chevron-circle-left:before {
 content: "\f137";
}
.fa-chevron-circle-right:before {
 content: "\f138";
}
.fa-chevron-circle-up:before {
 content: "\f139";
}
.fa-chevron-circle-down:before {
 content: "\f13a";
}
.fa-html5:before {
 content: "\f13b";
}
.fa-css3:before {
 content: "\f13c";
}
.fa-anchor:before {
 content: "\f13d";
}
.fa-unlock-alt:before {
 content: "\f13e";
}
.fa-bullseye:before {
 content: "\f140";
}
.fa-ellipsis-h:before {
 content: "\f141";
}
.fa-ellipsis-v:before {
 content: "\f142";
}
.fa-rss-square:before {
 content: "\f143";
}
.fa-play-circle:before {
 content: "\f144";
}
.fa-ticket:before {
 content: "\f145";
}
.fa-minus-square:before {
 content: "\f146";
}
.fa-minus-square-o:before {
 content: "\f147";
}
.fa-level-up:before {
 content: "\f148";
}
.fa-level-down:before {
 content: "\f149";
}
.fa-check-square:before {
 content: "\f14a";
}
.fa-pencil-square:before {
 content: "\f14b";
}
.fa-external-link-square:before {
 content: "\f14c";
}
.fa-share-square:before {
 content: "\f14d";
}
.fa-compass:before {
 content: "\f14e";
}
.fa-toggle-down:before,
.fa-caret-square-o-down:before {
 content: "\f150";
}
.fa-toggle-up:before,
.fa-caret-square-o-up:before {
 content: "\f151";
}
.fa-toggle-right:before,
.fa-caret-square-o-right:before {
 content: "\f152";
}
.fa-euro:before,
.fa-eur:before {
 content: "\f153";
}
.fa-gbp:before {
 content: "\f154";
}
.fa-dollar:before,
.fa-usd:before {
 content: "\f155";
}
.fa-rupee:before,
.fa-inr:before {
 content: "\f156";
}
.fa-cny:before,
.fa-rmb:before,
.fa-yen:before,
.fa-jpy:before {
 content: "\f157";
}
.fa-ruble:before,
.fa-rouble:before,
.fa-rub:before {
 content: "\f158";
}
.fa-won:before,
.fa-krw:before {
 content: "\f159";
}
.fa-bitcoin:before,
.fa-btc:before {
 content: "\f15a";
}
.fa-file:before {
 content: "\f15b";
}
.fa-file-text:before {
 content: "\f15c";
}
.fa-sort-alpha-asc:before {
 content: "\f15d";
}
.fa-sort-alpha-desc:before {
 content: "\f15e";
}
.fa-sort-amount-asc:before {
 content: "\f160";
}
.fa-sort-amount-desc:before {
 content: "\f161";
}
.fa-sort-numeric-asc:before {
 content: "\f162";
}
.fa-sort-numeric-desc:before {
 content: "\f163";
}
.fa-thumbs-up:before {
 content: "\f164";
}
.fa-thumbs-down:before {
 content: "\f165";
}
.fa-youtube-square:before {
 content: "\f166";
}
.fa-youtube:before {
 content: "\f167";
}
.fa-xing:before {
 content: "\f168";
}
.fa-xing-square:before {
 content: "\f169";
}
.fa-youtube-play:before {
 content: "\f16a";
}
.fa-dropbox:before {
 content: "\f16b";
}
.fa-stack-overflow:before {
 content: "\f16c";
}
.fa-instagram:before {
 content: "\f16d";
}
.fa-flickr:before {
 content: "\f16e";
}
.fa-adn:before {
 content: "\f170";
}
.fa-bitbucket:before {
 content: "\f171";
}
.fa-bitbucket-square:before {
 content: "\f172";
}
.fa-tumblr:before {
 content: "\f173";
}
.fa-tumblr-square:before {
 content: "\f174";
}
.fa-long-arrow-down:before {
 content: "\f175";
}
.fa-long-arrow-up:before {
 content: "\f176";
}
.fa-long-arrow-left:before {
 content: "\f177";
}
.fa-long-arrow-right:before {
 content: "\f178";
}
.fa-apple:before {
 content: "\f179";
}
.fa-windows:before {
 content: "\f17a";
}
.fa-android:before {
 content: "\f17b";
}
.fa-linux:before {
 content: "\f17c";
}
.fa-dribbble:before {
 content: "\f17d";
}
.fa-skype:before {
 content: "\f17e";
}
.fa-foursquare:before {
 content: "\f180";
}
.fa-trello:before {
 content: "\f181";
}
.fa-female:before {
 content: "\f182";
}
.fa-male:before {
 content: "\f183";
}
.fa-gittip:before,
.fa-gratipay:before {
 content: "\f184";
}
.fa-sun-o:before {
 content: "\f185";
}
.fa-moon-o:before {
 content: "\f186";
}
.fa-archive:before {
 content: "\f187";
}
.fa-bug:before {
 content: "\f188";
}
.fa-vk:before {
 content: "\f189";
}
.fa-weibo:before {
 content: "\f18a";
}
.fa-renren:before {
 content: "\f18b";
}
.fa-pagelines:before {
 content: "\f18c";
}
.fa-stack-exchange:before {
 content: "\f18d";
}
.fa-arrow-circle-o-right:before {
 content: "\f18e";
}
.fa-arrow-circle-o-left:before {
 content: "\f190";
}
.fa-toggle-left:before,
.fa-caret-square-o-left:before {
 content: "\f191";
}
.fa-dot-circle-o:before {
 content: "\f192";
}
.fa-wheelchair:before {
 content: "\f193";
}
.fa-vimeo-square:before {
 content: "\f194";
}
.fa-turkish-lira:before,
.fa-try:before {
 content: "\f195";
}
.fa-plus-square-o:before {
 content: "\f196";
}
.fa-space-shuttle:before {
 content: "\f197";
}
.fa-slack:before {
 content: "\f198";
}
.fa-envelope-square:before {
 content: "\f199";
}
.fa-wordpress:before {
 content: "\f19a";
}
.fa-openid:before {
 content: "\f19b";
}
.fa-institution:before,
.fa-bank:before,
.fa-university:before {
 content: "\f19c";
}
.fa-mortar-board:before,
.fa-graduation-cap:before {
 content: "\f19d";
}
.fa-yahoo:before {
 content: "\f19e";
}
.fa-google:before {
 content: "\f1a0";
}
.fa-reddit:before {
 content: "\f1a1";
}
.fa-reddit-square:before {
 content: "\f1a2";
}
.fa-stumbleupon-circle:before {
 content: "\f1a3";
}
.fa-stumbleupon:before {
 content: "\f1a4";
}
.fa-delicious:before {
 content: "\f1a5";
}
.fa-digg:before {
 content: "\f1a6";
}
.fa-pied-piper-pp:before {
 content: "\f1a7";
}
.fa-pied-piper-alt:before {
 content: "\f1a8";
}
.fa-drupal:before {
 content: "\f1a9";
}
.fa-joomla:before {
 content: "\f1aa";
}
.fa-language:before {
 content: "\f1ab";
}
.fa-fax:before {
 content: "\f1ac";
}
.fa-building:before {
 content: "\f1ad";
}
.fa-child:before {
 content: "\f1ae";
}
.fa-paw:before {
 content: "\f1b0";
}
.fa-spoon:before {
 content: "\f1b1";
}
.fa-cube:before {
 content: "\f1b2";
}
.fa-cubes:before {
 content: "\f1b3";
}
.fa-behance:before {
 content: "\f1b4";
}
.fa-behance-square:before {
 content: "\f1b5";
}
.fa-steam:before {
 content: "\f1b6";
}
.fa-steam-square:before {
 content: "\f1b7";
}
.fa-recycle:before {
 content: "\f1b8";
}
.fa-automobile:before,
.fa-car:before {
 content: "\f1b9";
}
.fa-cab:before,
.fa-taxi:before {
 content: "\f1ba";
}
.fa-tree:before {
 content: "\f1bb";
}
.fa-spotify:before {
 content: "\f1bc";
}
.fa-deviantart:before {
 content: "\f1bd";
}
.fa-soundcloud:before {
 content: "\f1be";
}
.fa-database:before {
 content: "\f1c0";
}
.fa-file-pdf-o:before {
 content: "\f1c1";
}
.fa-file-word-o:before {
 content: "\f1c2";
}
.fa-file-excel-o:before {
 content: "\f1c3";
}
.fa-file-powerpoint-o:before {
 content: "\f1c4";
}
.fa-file-photo-o:before,
.fa-file-picture-o:before,
.fa-file-image-o:before {
 content: "\f1c5";
}
.fa-file-zip-o:before,
.fa-file-archive-o:before {
 content: "\f1c6";
}
.fa-file-sound-o:before,
.fa-file-audio-o:before {
 content: "\f1c7";
}
.fa-file-movie-o:before,
.fa-file-video-o:before {
 content: "\f1c8";
}
.fa-file-code-o:before {
 content: "\f1c9";
}
.fa-vine:before {
 content: "\f1ca";
}
.fa-codepen:before {
 content: "\f1cb";
}
.fa-jsfiddle:before {
 content: "\f1cc";
}
.fa-life-bouy:before,
.fa-life-buoy:before,
.fa-life-saver:before,
.fa-support:before,
.fa-life-ring:before {
 content: "\f1cd";
}
.fa-circle-o-notch:before {
 content: "\f1ce";
}
.fa-ra:before,
.fa-resistance:before,
.fa-rebel:before {
 content: "\f1d0";
}
.fa-ge:before,
.fa-empire:before {
 content: "\f1d1";
}
.fa-git-square:before {
 content: "\f1d2";
}
.fa-git:before {
 content: "\f1d3";
}
.fa-y-combinator-square:before,
.fa-yc-square:before,
.fa-hacker-news:before {
 content: "\f1d4";
}
.fa-tencent-weibo:before {
 content: "\f1d5";
}
.fa-qq:before {
 content: "\f1d6";
}
.fa-wechat:before,
.fa-weixin:before {
 content: "\f1d7";
}
.fa-send:before,
.fa-paper-plane:before {
 content: "\f1d8";
}
.fa-send-o:before,
.fa-paper-plane-o:before {
 content: "\f1d9";
}
.fa-history:before {
 content: "\f1da";
}
.fa-circle-thin:before {
 content: "\f1db";
}
.fa-header:before {
 content: "\f1dc";
}
.fa-paragraph:before {
 content: "\f1dd";
}
.fa-sliders:before {
 content: "\f1de";
}
.fa-share-alt:before {
 content: "\f1e0";
}
.fa-share-alt-square:before {
 content: "\f1e1";
}
.fa-bomb:before {
 content: "\f1e2";
}
.fa-soccer-ball-o:before,
.fa-futbol-o:before {
 content: "\f1e3";
}
.fa-tty:before {
 content: "\f1e4";
}
.fa-binoculars:before {
 content: "\f1e5";
}
.fa-plug:before {
 content: "\f1e6";
}
.fa-slideshare:before {
 content: "\f1e7";
}
.fa-twitch:before {
 content: "\f1e8";
}
.fa-yelp:before {
 content: "\f1e9";
}
.fa-newspaper-o:before {
 content: "\f1ea";
}
.fa-wifi:before {
 content: "\f1eb";
}
.fa-calculator:before {
 content: "\f1ec";
}
.fa-paypal:before {
 content: "\f1ed";
}
.fa-google-wallet:before {
 content: "\f1ee";
}
.fa-cc-visa:before {
 content: "\f1f0";
}
.fa-cc-mastercard:before {
 content: "\f1f1";
}
.fa-cc-discover:before {
 content: "\f1f2";
}
.fa-cc-amex:before {
 content: "\f1f3";
}
.fa-cc-paypal:before {
 content: "\f1f4";
}
.fa-cc-stripe:before {
 content: "\f1f5";
}
.fa-bell-slash:before {
 content: "\f1f6";
}
.fa-bell-slash-o:before {
 content: "\f1f7";
}
.fa-trash:before {
 content: "\f1f8";
}
.fa-copyright:before {
 content: "\f1f9";
}
.fa-at:before {
 content: "\f1fa";
}
.fa-eyedropper:before {
 content: "\f1fb";
}
.fa-paint-brush:before {
 content: "\f1fc";
}
.fa-birthday-cake:before {
 content: "\f1fd";
}
.fa-area-chart:before {
 content: "\f1fe";
}
.fa-pie-chart:before {
 content: "\f200";
}
.fa-line-chart:before {
 content: "\f201";
}
.fa-lastfm:before {
 content: "\f202";
}
.fa-lastfm-square:before {
 content: "\f203";
}
.fa-toggle-off:before {
 content: "\f204";
}
.fa-toggle-on:before {
 content: "\f205";
}
.fa-bicycle:before {
 content: "\f206";
}
.fa-bus:before {
 content: "\f207";
}
.fa-ioxhost:before {
 content: "\f208";
}
.fa-angellist:before {
 content: "\f209";
}
.fa-cc:before {
 content: "\f20a";
}
.fa-shekel:before,
.fa-sheqel:before,
.fa-ils:before {
 content: "\f20b";
}
.fa-meanpath:before {
 content: "\f20c";
}
.fa-buysellads:before {
 content: "\f20d";
}
.fa-connectdevelop:before {
 content: "\f20e";
}
.fa-dashcube:before {
 content: "\f210";
}
.fa-forumbee:before {
 content: "\f211";
}
.fa-leanpub:before {
 content: "\f212";
}
.fa-sellsy:before {
 content: "\f213";
}
.fa-shirtsinbulk:before {
 content: "\f214";
}
.fa-simplybuilt:before {
 content: "\f215";
}
.fa-skyatlas:before {
 content: "\f216";
}
.fa-cart-plus:before {
 content: "\f217";
}
.fa-cart-arrow-down:before {
 content: "\f218";
}
.fa-diamond:before {
 content: "\f219";
}
.fa-ship:before {
 content: "\f21a";
}
.fa-user-secret:before {
 content: "\f21b";
}
.fa-motorcycle:before {
 content: "\f21c";
}
.fa-street-view:before {
 content: "\f21d";
}
.fa-heartbeat:before {
 content: "\f21e";
}
.fa-venus:before {
 content: "\f221";
}
.fa-mars:before {
 content: "\f222";
}
.fa-mercury:before {
 content: "\f223";
}
.fa-intersex:before,
.fa-transgender:before {
 content: "\f224";
}
.fa-transgender-alt:before {
 content: "\f225";
}
.fa-venus-double:before {
 content: "\f226";
}
.fa-mars-double:before {
 content: "\f227";
}
.fa-venus-mars:before {
 content: "\f228";
}
.fa-mars-stroke:before {
 content: "\f229";
}
.fa-mars-stroke-v:before {
 content: "\f22a";
}
.fa-mars-stroke-h:before {
 content: "\f22b";
}
.fa-neuter:before {
 content: "\f22c";
}
.fa-genderless:before {
 content: "\f22d";
}
.fa-facebook-official:before {
 content: "\f230";
}
.fa-pinterest-p:before {
 content: "\f231";
}
.fa-whatsapp:before {
 content: "\f232";
}
.fa-server:before {
 content: "\f233";
}
.fa-user-plus:before {
 content: "\f234";
}
.fa-user-times:before {
 content: "\f235";
}
.fa-hotel:before,
.fa-bed:before {
 content: "\f236";
}
.fa-viacoin:before {
 content: "\f237";
}
.fa-train:before {
 content: "\f238";
}
.fa-subway:before {
 content: "\f239";
}
.fa-medium:before {
 content: "\f23a";
}
.fa-yc:before,
.fa-y-combinator:before {
 content: "\f23b";
}
.fa-optin-monster:before {
 content: "\f23c";
}
.fa-opencart:before {
 content: "\f23d";
}
.fa-expeditedssl:before {
 content: "\f23e";
}
.fa-battery-4:before,
.fa-battery-full:before {
 content: "\f240";
}
.fa-battery-3:before,
.fa-battery-three-quarters:before {
 content: "\f241";
}
.fa-battery-2:before,
.fa-battery-half:before {
 content: "\f242";
}
.fa-battery-1:before,
.fa-battery-quarter:before {
 content: "\f243";
}
.fa-battery-0:before,
.fa-battery-empty:before {
 content: "\f244";
}
.fa-mouse-pointer:before {
 content: "\f245";
}
.fa-i-cursor:before {
 content: "\f246";
}
.fa-object-group:before {
 content: "\f247";
}
.fa-object-ungroup:before {
 content: "\f248";
}
.fa-sticky-note:before {
 content: "\f249";
}
.fa-sticky-note-o:before {
 content: "\f24a";
}
.fa-cc-jcb:before {
 content: "\f24b";
}
.fa-cc-diners-club:before {
 content: "\f24c";
}
.fa-clone:before {
 content: "\f24d";
}
.fa-balance-scale:before {
 content: "\f24e";
}
.fa-hourglass-o:before {
 content: "\f250";
}
.fa-hourglass-1:before,
.fa-hourglass-start:before {
 content: "\f251";
}
.fa-hourglass-2:before,
.fa-hourglass-half:before {
 content: "\f252";
}
.fa-hourglass-3:before,
.fa-hourglass-end:before {
 content: "\f253";
}
.fa-hourglass:before {
 content: "\f254";
}
.fa-hand-grab-o:before,
.fa-hand-rock-o:before {
 content: "\f255";
}
.fa-hand-stop-o:before,
.fa-hand-paper-o:before {
 content: "\f256";
}
.fa-hand-scissors-o:before {
 content: "\f257";
}
.fa-hand-lizard-o:before {
 content: "\f258";
}
.fa-hand-spock-o:before {
 content: "\f259";
}
.fa-hand-pointer-o:before {
 content: "\f25a";
}
.fa-hand-peace-o:before {
 content: "\f25b";
}
.fa-trademark:before {
 content: "\f25c";
}
.fa-registered:before {
 content: "\f25d";
}
.fa-creative-commons:before {
 content: "\f25e";
}
.fa-gg:before {
 content: "\f260";
}
.fa-gg-circle:before {
 content: "\f261";
}
.fa-tripadvisor:before {
 content: "\f262";
}
.fa-odnoklassniki:before {
 content: "\f263";
}
.fa-odnoklassniki-square:before {
 content: "\f264";
}
.fa-get-pocket:before {
 content: "\f265";
}
.fa-wikipedia-w:before {
 content: "\f266";
}
.fa-safari:before {
 content: "\f267";
}
.fa-chrome:before {
 content: "\f268";
}
.fa-firefox:before {
 content: "\f269";
}
.fa-opera:before {
 content: "\f26a";
}
.fa-internet-explorer:before {
 content: "\f26b";
}
.fa-tv:before,
.fa-television:before {
 content: "\f26c";
}
.fa-contao:before {
 content: "\f26d";
}
.fa-500px:before {
 content: "\f26e";
}
.fa-amazon:before {
 content: "\f270";
}
.fa-calendar-plus-o:before {
 content: "\f271";
}
.fa-calendar-minus-o:before {
 content: "\f272";
}
.fa-calendar-times-o:before {
 content: "\f273";
}
.fa-calendar-check-o:before {
 content: "\f274";
}
.fa-industry:before {
 content: "\f275";
}
.fa-map-pin:before {
 content: "\f276";
}
.fa-map-signs:before {
 content: "\f277";
}
.fa-map-o:before {
 content: "\f278";
}
.fa-map:before {
 content: "\f279";
}
.fa-commenting:before {
 content: "\f27a";
}
.fa-commenting-o:before {
 content: "\f27b";
}
.fa-houzz:before {
 content: "\f27c";
}
.fa-vimeo:before {
 content: "\f27d";
}
.fa-black-tie:before {
 content: "\f27e";
}
.fa-fonticons:before {
 content: "\f280";
}
.fa-reddit-alien:before {
 content: "\f281";
}
.fa-edge:before {
 content: "\f282";
}
.fa-credit-card-alt:before {
 content: "\f283";
}
.fa-codiepie:before {
 content: "\f284";
}
.fa-modx:before {
 content: "\f285";
}
.fa-fort-awesome:before {
 content: "\f286";
}
.fa-usb:before {
 content: "\f287";
}
.fa-product-hunt:before {
 content: "\f288";
}
.fa-mixcloud:before {
 content: "\f289";
}
.fa-scribd:before {
 content: "\f28a";
}
.fa-pause-circle:before {
 content: "\f28b";
}
.fa-pause-circle-o:before {
 content: "\f28c";
}
.fa-stop-circle:before {
 content: "\f28d";
}
.fa-stop-circle-o:before {
 content: "\f28e";
}
.fa-shopping-bag:before {
 content: "\f290";
}
.fa-shopping-basket:before {
 content: "\f291";
}
.fa-hashtag:before {
 content: "\f292";
}
.fa-bluetooth:before {
 content: "\f293";
}
.fa-bluetooth-b:before {
 content: "\f294";
}
.fa-percent:before {
 content: "\f295";
}
.fa-gitlab:before {
 content: "\f296";
}
.fa-wpbeginner:before {
 content: "\f297";
}
.fa-wpforms:before {
 content: "\f298";
}
.fa-envira:before {
 content: "\f299";
}
.fa-universal-access:before {
 content: "\f29a";
}
.fa-wheelchair-alt:before {
 content: "\f29b";
}
.fa-question-circle-o:before {
 content: "\f29c";
}
.fa-blind:before {
 content: "\f29d";
}
.fa-audio-description:before {
 content: "\f29e";
}
.fa-volume-control-phone:before {
 content: "\f2a0";
}
.fa-braille:before {
 content: "\f2a1";
}
.fa-assistive-listening-systems:before {
 content: "\f2a2";
}
.fa-asl-interpreting:before,
.fa-american-sign-language-interpreting:before {
 content: "\f2a3";
}
.fa-deafness:before,
.fa-hard-of-hearing:before,
.fa-deaf:before {
 content: "\f2a4";
}
.fa-glide:before {
 content: "\f2a5";
}
.fa-glide-g:before {
 content: "\f2a6";
}
.fa-signing:before,
.fa-sign-language:before {
 content: "\f2a7";
}
.fa-low-vision:before {
 content: "\f2a8";
}
.fa-viadeo:before {
 content: "\f2a9";
}
.fa-viadeo-square:before {
 content: "\f2aa";
}
.fa-snapchat:before {
 content: "\f2ab";
}
.fa-snapchat-ghost:before {
 content: "\f2ac";
}
.fa-snapchat-square:before {
 content: "\f2ad";
}
.fa-pied-piper:before {
 content: "\f2ae";
}
.fa-first-order:before {
 content: "\f2b0";
}
.fa-yoast:before {
 content: "\f2b1";
}
.fa-themeisle:before {
 content: "\f2b2";
}
.fa-google-plus-circle:before,
.fa-google-plus-official:before {
 content: "\f2b3";
}
.fa-fa:before,
.fa-font-awesome:before {
 content: "\f2b4";
}
.sr-only {
 position: absolute;
 width: 1px;
 height: 1px;
 padding: 0;
 margin: -1px;
 overflow: hidden;
 clip: rect(0, 0, 0, 0);
 border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
 position: static;
 width: auto;
 height: auto;
 margin: 0;
 overflow: visible;
 clip: auto;   }`;
 style.innerHTML+=`#amity-chatframe{-webkit-transform:translateZ(0);position:fixed;right:18pt;z-index:10000000;width:370px;min-height:250px!important;max-height:1000px!important;height:80%;bottom:20px;border-radius:15px;box-shadow:rgba(0,0,0,.15) 0 3pt 12pt;display:none;max-width:88vw;overflow:hidden;background:#fff}#amity-chattitle{height:50px;width:100%;border-top-left-radius:15px;border-top-right-radius:15px}#amity-chattitle>h4{text-align:center;line-height:50px;color:#fff;font-weight:700;font-size:16px;margin-top:0;margin-bottom:0}#amity-chatframe-iframe{width:100%;position:absolute;bottom:0;overflow:hidden;height:calc(100% - 50px);border-bottom-left-radius:15px;border-bottom-right-radius:15px}#amity-chatbtn{outline-color:transparent;position:fixed;bottom:18pt;right:18pt;z-index:9999999;border-radius:45pt;border:none;visibility:hidden;padding:0}.new-message-badge{position:absolute;top:0;right:0;padding:6px;border-radius:15px;color:#fff;background:#b94a48}#amity-chatclose-icon{display:none}#amity-chat-icon{}#amity-preform{position:fixed;display:none;right:18pt;z-index:9999999;padding:10px;border:none;max-width:90%}.amity-preform-dialog{border:none;padding:20px;width:30vw;box-shadow:0 1px 2px rgba(0,0,0,.3),0 1px 1px rgba(0,0,0,.2)!important;background-color:#fff!important;border-radius:7pt;margin-bottom:10pt;max-width:90%}.amity-prefill-label{font-size:20px;width:8%;text-align:right;margin-right:6px}.amity-prefill-field{outline:none!important;font-size:14px;border:1px dashed #ccc;width:72%;background:0 0;padding:5px 8px;border-radius:5px;margin-bottom:10pt}.amity-prefill-submit{margin-left:10px;width:34px;height:34px;border-radius:25px;background:0 0;border:1px dashed #bbb;padding-top:5px;font-size:16px!important}#amity-preform.tray h4{text-align:center;margin-top:-20px;margin-bottom:20px;margin-left:-20px;margin-right:-20px;padding:7px 0;background:grey;color:#fff;font-weight:700;border-top-left-radius:10px;border-top-right-radius:10px;font-size:15px}#amity-preform.tray{bottom:-30px;right:10px!important}#amity-preform.bubble h4{display:none}#amity-preform.tray>.amity-preform-dialog{padding-bottom:25px!important}#amity-preform.tray .amity-prefill-field{width:94%}#amity-preform.tray .amity-prefill-label>i{display:none}#amity-preform.bubble .amity-prefill-label>b{display:none}.amity-prefill-submit-container{width:100%;text-align:right}#amity-preform.bubble .amity-preform-close-btn{display:none}#amity-preform.tray .amity-preform-close-btn{color:#fff;position:absolute;cursor:pointer;top:17px;right:18px;background:0 0;border:none;border-radius:20px;font-size:18px}#amity-chatclose-topright{display:none}.shake{animation:shake .5s;animation-iteration-count:infinite}@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px,0px) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0deg)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0deg)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0deg)}100%{transform:translate(1px,-2px) rotate(-1deg)}}@media only screen and (max-width:768px){#close-btn-topright{display:block!important}#amity-chatframe{width:100vw!important;max-width:100vw;left:0;height:100%;top:0;bottom:95px;border-radius:0;max-height:100%!important}#amity-chattitle{border-radius:0}#amity-chattitle{border-radius:0}#amity-chatbtn.opened{z-index:0!important}#amity-chatbtn.opened.hide{box-shadow:none!important;background-color:transparent}#amity-chatclose-topright.opened{display:block;position:absolute;top:13px;right:13px}}#amity-preform-input-name-wrapper:focus-within{border-color:#00beae!important}`

window.addEventListener("load", function () {
  if (SDKManager.initSetting()) {
    SDKManager.initHtml();
    ChatManager.onChatReady();
  }
});
const SDKManager = (function () {
  function SDKManager() {}
  SDKManager.appendIframe = function () {
    // Select the node that will be observed for mutations
    var targetNode = document.getElementById("amity-chatframe");
    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };
    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for (
        var _i = 0, mutationsList_1 = mutationsList;
        _i < mutationsList_1.length;
        _i++
      ) {
        var mutation = mutationsList_1[_i];
        if (mutation.type === "childList") {
          SDKManager.initIframeApp();
          observer.disconnect();
        }
      }
    };
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
   /*  const iframeElement = document.createElement("iframe");
    iframeElement.id = 'amity-chatframe-iframe'
    iframeElement.frameBorder = '0'
    iframeElement.scrolling = 'no'
    iframeElement.marginHeight = '0'
    iframeElement.marginwidth = '0'
    iframeElement.src = iframeUrl
    iframeElement.allowfullscreen = "true"
    iframeElement.allow = "geolocation*;microphone;camera;midi;encrypted-media;"

    document.getElementById("amity-chatframe")[0].appendChild(iframeElement);
 */
    $("#amity-chatframe").append(
      "<iframe id='amity-chatframe-iframe'frameborder='0'scrolling='no'marginheight='0'marginwidth='0'src="+iframeUrl+' allowfullscreen="true" allow="geolocation*;microphone;camera;midi;encrypted-media;"></iframe>'
    );
    var myIframe = document.getElementById("amity-chatframe-iframe");
    myIframe &&
      myIframe.addEventListener("load", function () {
        ChatManager.openChat();
      });
    ChatManager.notAppendIframeYet = false;
  };
  SDKManager.initSetting = function () {
    SDKManager.setting = window.amitySettings;
    SDKManager.setting.PARENT_ORIGIN = window.location.origin;
    console.log("Starting amity extension...");
    if (!window.jQuery) {
      console.error("Amity extension requires jQuery library");
      return;
    } else if (!SDKManager.setting) {
      console.error(
        "Cannot find configuration variable. Please set your configuration on Setting object."
      );
    }
    const APIKEY = this.setting.APIKEY;
    SDKManager.setting.TOKEN = SDKManager.setting.TOKEN || "";
    SDKManager.setting.UI_TYPE = SDKManager.setting.UI_TYPE || "tray";
    SDKManager.setting.COLOR = SDKManager.setting.COLOR || "#FF9C23";
    SDKManager.setting.PREFILL_COLOR =
      SDKManager.setting.PREFILL_COLOR || "grey";
    SDKManager.setting.ICON =
      SDKManager.setting.ICON ||
      "https://upload.amity.ai/amity/images/amity-chaticon-2.svg";
    SDKManager.setting.TOP_RIGHT_BUTTON =
      SDKManager.setting.TOP_RIGHT_BUTTON || false;
    SDKManager.setting.HIDE_ATTACHMENT_ICON =
      SDKManager.setting.HIDE_ATTACHMENT_ICON || false;
    SDKManager.setting.CUSTOM_FONT_URL = SDKManager.setting.CUSTOM_FONT_URL
      ? SDKManager.setting.CUSTOM_FONT_URL
      : "";
    SDKManager.setting.FONT_NAME = SDKManager.setting.FONT_NAME || "";
    SDKManager.setting.INPUT_MODE = SDKManager.setting.INPUT_MODE || "any";
    SDKManager.setting.BANNER_HEAD_TEXT =
      SDKManager.setting.BANNER_HEAD_TEXT || "";
    SDKManager.setting.BANNER_DESCRIPTION_TEXT =
      SDKManager.setting.BANNER_DESCRIPTION_TEXT || "";
    //set user answer bg color
    SDKManager.setting.USER_ANSWER_BG = SDKManager.setting.USER_ANSWER_BG || "";
    //set user answer font color
    SDKManager.setting.USER_ANSWER_FONT_COLOR =
      SDKManager.setting.USER_ANSWER_FONT_COLOR || "";
    //set hover chat button
    SDKManager.setting.IS_HOVER = SDKManager.setting.IS_HOVER || false;
    //set hover item ui
    SDKManager.setting.HOVER_ITEM =
      SDKManager.setting.HOVER_ITEM ||
      '<div id="hoverItem" style="position: fixed;bottom: 18pt; right: 18pt;\n                                                                    width:fit-content; justify-content: center; padding: 20px; \n                                                                    display: none; background: #e67e22; border-radius: 10px; \n                                                                    align-items: center">\n                                            <button style="margin-right: 12px;background: #2d3436;border: none;padding: 10px;border-radius: 5px;color: white;">Chat With Us</button>\n\t\t\t\t\t\t\t\t\t\t</div>';
    SDKManager.setting.RICH_MENU_ID =
      SDKManager.setting.RICH_MENU_ID || undefined;
    SDKManager.setting.LOGO = SDKManager.setting.LOGO || undefined;
    SDKManager.setting.HIGHLIGHT_BUTTON =
      SDKManager.setting.HIGHLIGHT_BUTTON || undefined;
    SDKManager.setting.CSSLINK = SDKManager.setting.CSSLINK || "";
    SDKManager.setting.CAROUSEL_BIG_SIZE = SDKManager.setting.CAROUSEL_BIG_SIZE
      ? SDKManager.setting.CAROUSEL_BIG_SIZE
      : null;
    console.log("HIGH : ", SDKManager.setting.HIGHLIGHT_BUTTON);
    SDKManager.setting.AVATAR_SIZE = SDKManager.setting.AVATAR_SIZE || "30";
    if (!SDKManager.setting.CAROUSEL_BUTTON_HIDE_FLOW) {
      SDKManager.setting.CAROUSEL_BUTTON_HIDE_FLOW = false;
    }
    if (!SDKManager.setting.CAROUSEL_SIZE) {
      SDKManager.setting.CAROUSEL_SIZE = 95;
    }
    if (!SDKManager.setting.CLEAR_TICKET_ON_LEAVE) {
      SDKManager.setting.CLEAR_TICKET_ON_LEAVE = false;
    }
    if (SDKManager.setting.DISABLE_SPIN_ANIMATION === undefined)
      SDKManager.setting.DISABLE_SPIN_ANIMATION = false;
    if (!APIKEY && !SDKManager.setting.USERID) {
      console.error("APIKEY is not set");
      return false;
    } else return true;
  };
  SDKManager.initHtml = function () {
    var titleBGcolor = SDKManager.setting.COLOR || "#FF9C23";
    //get show top right button status
    // const showTopRightButton = SDKManager.setting.TOP_RIGHT_BUTTON ? 'block' : 'none';
    var showTopRightButton = "block";
    // console.log('Top right button',showTopRightButton);
    var chatbtncolor = titleBGcolor;
    var chatTitleStyle = SDKManager.setting.CHAT_TITLE_STYLE;
    var width = SDKManager.setting.SIZE
      ? Number(SDKManager.setting.SIZE[0])
      : 45;
    var height = SDKManager.setting.SIZE
      ? Number(SDKManager.setting.SIZE[1])
      : 45;
    var prefillCloseTop = SDKManager.setting.PREFILL_CLOSE_TOP
      ? Number(SDKManager.setting.PREFILL_CLOSE_TOP)
      : 5;
    var prefillCloseRight = SDKManager.setting.PREFILL_CLOSE_RIGHT
      ? Number(SDKManager.setting.PREFILL_CLOSE_RIGHT)
      : -15;
    console.log("scripts are ", $("script"));
    // Create IE + others compatible event handler
    var eventMethod = !!window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    // Listen to message from child window
    eventer(
      messageEvent,
      function (e) {
        receiveMessageFromIframe(e.data);
      },
      false
    );
    if (SDKManager.setting.CHAT_URL) iframeUrl = SDKManager.setting.CHAT_URL;
    if (SDKManager.setting.APIKEY) {
      iframeUrl += "?apiKey=" + SDKManager.setting.APIKEY;
    }
    if (SDKManager.setting.USERID) {
      iframeUrl += "&userId=" + SDKManager.setting.USERID;
    }
    if (SDKManager.setting.DISPLAYNAME) {
      iframeUrl += "&displayName=" + SDKManager.setting.DISPLAYNAME;
    }
    if (SDKManager.setting.EMAIL) {
      iframeUrl += "&email=" + SDKManager.setting.EMAIL;
    }
    if (SDKManager.setting.PHONENO) {
      iframeUrl += "&phoneno=" + SDKManager.setting.PHONENO;
    }

    document.getElementsByTagName("head")[0].appendChild(style);
    $("body").append(
      "\n            <div id='amity-chatframe'>\n                <div id = 'amity-chattitle' style = \"" +
        (chatTitleStyle
          ? chatTitleStyle
          : "background: " + titleBGcolor + ";position: relative;") +
        '">\n                    \n                    <!--add close button on top right-->\n                    <svg \n                        id="close-btn-topright"\n                        onclick="window.amity.closeChat()"\n                        width="15px" height="15px" viewBox="0 0 14 14" style = "\n                        top: 18px;\n                        position: absolute;\n                        right: 15px;\n                        cursor: pointer;\n                        display: ' +
        showTopRightButton +
        '"\n                        >\n                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                            <g transform="translate(-419.000000, -413.000000)">\n                                <g transform="translate(164.000000, 396.000000)"><g>\n                                <g transform="translate(250.000000, 12.000000)"><g>\n                                <g><rect opacity="0.200000003" x="0" y="0" width="24" height="24"></rect><g transform="translate(4.000000, 4.000000)" fill="#ffffff">\n                                <rect transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) " x="7" y="-1" width="2" height="18" rx="1"></rect>\n                                <rect transform="translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) " x="7" y="-1" width="2" height="18" rx="1"></rect>\n                                </g></g></g></g></g></g></g></g></svg>\n                </div>\n            </div>'
    );
    var isOriginalIcon =
      SDKManager.setting.ICON ==
      "https://upload.amity.ai/amity/images/amity-chaticon-2.svg";
    $("body").append(
      '\n        <button id=\'amity-chatbtn\' onclick="window.amity.toggleChat()" style = "\n            width:' +
        (width + "pt") +
        "; height:" +
        (height + "pt") +
        "; \n            background-color: " +
        chatbtncolor +
        ";\n            box-shadow: " +
        (chatbtncolor === "transparent"
          ? "none"
          : "0 1px 4px rgba(0,0,0,0.3),0 2px 32px rgba(0,0,0,0.2)") +
        ';\n            z-index: 1001;\n        ">\n            <div id="amity-chatclose-icon" tabindex="0" role="button">\n            <svg width="15px" height="15px" viewBox="0 0 14 14" style = "\n                top: 22px;\n                position: absolute;\n                left: 22px;\n            ">\n                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                    <g transform="translate(-419.000000, -413.000000)">\n\t                    <g transform="translate(164.000000, 396.000000)"><g>\n\t                    <g transform="translate(250.000000, 12.000000)"><g>\n\t                    <g><rect opacity="0.200000003" x="0" y="0" width="24" height="24"></rect><g transform="translate(4.000000, 4.000000)" fill="#ffffff">\n\t                    <rect transform="translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) " x="7" y="-1" width="2" height="18" rx="1"></rect>\n\t                    <rect transform="translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) " x="7" y="-1" width="2" height="18" rx="1"></rect>\n\t                    </g></g></g></g></g></g></g></g></svg>\n\t        </div>\n            <img id="amity-chat-icon" src = \'' +
        SDKManager.setting.ICON +
        "' style = \"\n                    border-radius: " +
        (isOriginalIcon ? "45pt" : "0pt") +
        ";\n                    padding: " +
        (isOriginalIcon ? "10px" : "0pt") +
        ";\n                    max-width: " +
        (width - 10 + "pt") +
        ";\n                    max-height: " +
        (height + "pt") +
        ';\n             "/>\n        </button>\n        <div id = "amity-preform" class = "' +
        SDKManager.setting.UI_TYPE +
        '" style = "\n            bottom:' +
        (height + 10 + "pt") +
        ';\n            z-index: 1000; \n        ">\n        </div>\n        '
    );
    if (SDKManager.setting.IS_HOVER) {
      // let bg = SDKManager.setting.COLOR || '#FF9C23';
      $("#amity-chatbtn").hover(
        function () {
          if (!ChatManager.chatOpened) {
            $("#amity-chatbtn").append(SDKManager.setting.HOVER_ITEM);
            $("#hoverItem").css("display", "flex");
            $("#hoverItem").show();
            $("#amity-chatbtn").css("box-shadow", "");
            $("#amity-chatbtn").css(
              "background-color",
              "rgba(255, 255, 255, 0)"
            );
          }
        },
        function () {
          $("#hoverItem").remove();
          // $("#amity-chat-icon").show();
          $("#amity-chatbtn").css(
            "box-shadow",
            "rgba(0, 0, 0, 0.3) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 2px 32px"
          );
          $("#amity-chatbtn").css(
            "background-color",
            SDKManager.setting.COLOR || "#FF9C23"
          );
        }
      );
    }
    if (
      SDKManager.setting.PREFILL_NAME ||
      SDKManager.setting.PREFILL_EMAIL ||
      SDKManager.setting.PREFILL_PHONE
    ) {
      var isFirst = true;
      $("#amity-preform").append(
        '\n                <div id = \'amity-preform-input\' class = "amity-preform-dialog" style = "padding-bottom:5pt;" >\n                </div>\n            '
      );
      if (SDKManager.setting.PREFORM_INPUT_STYLE) {
        $("#amity-preform-input").attr(
          "style",
          SDKManager.setting.PREFORM_INPUT_STYLE
        );
      }
      $("#amity-preform-input").append(
        '\n                    <div \n                    style="position: relative; z-index: 10">\n                        <h4 id="header-h4"\n                        style = "background:' +
          (SDKManager.setting.PREFILL_COLOR || "grey") +
          ';\n                         padding-right: 30px; padding-left:30px;\n                         word-break: break-word">' +
          SDKManager.setting.WELCOME_MESSAGE +
          '</h4>\n                        <button \n                        id="close-prefill-button"\n                        style="top: ' +
          (prefillCloseTop + "px") +
          "; right: " +
          (prefillCloseRight + "px") +
          ';" \n                        class="amity-preform-close-btn"  \n                        onclick="window.amity.toggleChat()">\n                            <i class="fa fa-times"></i>\n                        </button>\n                    </div>\n            '
      );
      if (SDKManager.setting.HEADER_H4_STYLE) {
        $("#header-h4").attr("style", SDKManager.setting.HEADER_H4_STYLE);
      }
      if (SDKManager.setting.CLOSE_PREFILL_BUTTON_STYLE) {
        $("#close-prefill-button").attr(
          "style",
          SDKManager.setting.CLOSE_PREFILL_BUTTON_STYLE
        );
      }
      if (SDKManager.setting.PREFILL_NAME) {
        $("#amity-preform-input").append(
          "\n                    " +
            (isFirst ? "" : "<br/>") +
            '\n                    <label class = "amity-prefill-label">\n                        <i class="fa fa-tag" style="width:100% !important"/>\n                        <b id="prefill-name-label">Name</b>\n                    </label>\n                    <div id="amity-preform-input-name-wrapper">\n                                        <input placeholder="' +
            (SDKManager.setting.PREFILL_NAME_PLACEHOLDER || "Enter your name") +
            '" id="amity-preform-input-name" class = "amity-prefill-field" />\n                    </div>    \n                '
        );
        if (
          SDKManager.setting.PREFILL_NAME_OPTIONAL &&
          SDKManager.setting.PREFILL_NAME
        ) {
          if (
            !SDKManager.setting.PREFILL_PHONE &&
            !SDKManager.setting.PREFILL_EMAIL
          ) {
            $("#amity-preform-input-name-wrapper").append(
              '<button id="prefill-name-submit" onclick="PrefillManager.submitPrefillInformation()" ><i class="fa fa-chevron-right"/></button>'
            );
          }
          if (SDKManager.setting.PREFILL_NAME_SUBMIT_STYLE) {
            $("#prefill-name-submit").attr(
              "style",
              SDKManager.setting.PREFILL_NAME_SUBMIT_STYLE
            );
          }
        }
        if (SDKManager.setting.PREFILL_NAME_WRAPPER_STYLE) {
          $("#amity-preform-input-name-wrapper").attr(
            "style",
            SDKManager.setting.PREFILL_NAME_WRAPPER_STYLE
          );
        }
        if (SDKManager.setting.PREFILL_NAME_LABEL_STYLE) {
          $("#prefill-name-label").attr(
            "style",
            SDKManager.setting.PREFILL_NAME_LABEL_STYLE
          );
        }
        if (SDKManager.setting.PREFORM_INPUT_NAME_STYLE) {
          $("#amity-preform-input-name").attr(
            "style",
            SDKManager.setting.PREFORM_INPUT_NAME_STYLE
          );
        }
        isFirst = false;
      }
      if (SDKManager.setting.PREFILL_EMAIL) {
        $("#amity-preform-input").append(
          "\n                    " +
            (isFirst ? "" : "<br/>") +
            '\n                    <label class = "amity-prefill-label">\n                        <i class="fa fa-envelope" />\n                        <b>Email</b>\n                    </label>\n                    <input placeholder="' +
            (SDKManager.setting.PREFILL_EMAIL_PLACEHOLDER ||
              "Enter your email") +
            '" \n                            id="amity-preform-input-email" class="amity-prefill-field" type="email" required/>\n                '
        );
        isFirst = false;
      }
      if (SDKManager.setting.PREFILL_PHONE) {
        $("#amity-preform-input").append(
          "\n                    " +
            (isFirst ? "" : "<br/>") +
            '\n                    <label class = "amity-prefill-label">\n                        <i class="fa fa-phone" />\n                        <b>Phone</b>\n                    </label>\n                    <input placeholder="' +
            (SDKManager.setting.PREFILL_PHONE_PLACEHOLDER ||
              "Enter your phone") +
            '" \n                            id="amity-preform-input-phone" class="amity-prefill-field"/>\n                '
        );
      }
      $("#amity-preform-input").append(
        '\n                <div class="amity-prefill-submit-container" id="prefill-submit-container">\n                <button onclick="PrefillManager.submitPrefillInformation(' +
          !!SDKManager.setting.PREFILL_SKIPABLE +
          ')" \n                    class="amity-prefill-submit"\n                    id="prefill-submit">\n                    <i class="fa fa-chevron-right"  id="prefill-submit-icon"/>\n                    </button>\n                </div>\n                '
      );
      if (SDKManager.setting.PREFILL_SUBMIT_CONTAINER_STYLE) {
        $("#prefill-submit-container").attr(
          "style",
          SDKManager.setting.PREFILL_SUBMIT_CONTAINER_STYLE
        );
      }
      if (SDKManager.setting.PREFILL_SUBMIT_STYLE) {
        $("#prefill-submit").attr(
          "style",
          SDKManager.setting.PREFILL_SUBMIT_STYLE
        );
      }
      if (SDKManager.setting.PREFILL_SUBMIT_ICON_STYLE) {
        $("#prefill-submit-icon").attr(
          "style",
          SDKManager.setting.PREFILL_SUBMIT_ICON_STYLE
        );
      }
      if (SDKManager.setting.PREFILL_SUBMIT_TEXT) {
        $("#prefill-submit").append(SDKManager.setting.PREFILL_SUBMIT_TEXT);
      }
    }
    if (SDKManager.setting.amity_chatbtn_add_class_name) {
      $("#amity-chatbtn").addClass(
        SDKManager.setting.amity_chatbtn_add_class_name
      );
    }
    if (SDKManager.setting.amity_chatbtn_prepend) {
      $("#amity-chatbtn").prepend(SDKManager.setting.amity_chatbtn_prepend);
    }
    if (SDKManager.setting.PREVENT_TOGGLE) {
      // Click on Chat Frame
      $("#amity-chatframe").click(function (event) {
        event.stopPropagation();
      });
      // Click on Chat Button
      $("#amity-chat-icon").click(function (event) {
        ChatManager.toggleChat();
        event.stopPropagation();
      });
    }
  };
  SDKManager.initIframeApp = function () {
    console.log("initing iframe setting");
    if (SDKManager.setting.OPEN_ON_LOAD) ChatManager.toggleChat();
  };
  return SDKManager;
})();
var PrefillManager = (function () {
  function PrefillManager() {}
  PrefillManager.validatePrefillEmail = function () {
    var dom = $("#amity-preform-input-email");
    var validateAlertDom = $(".validate-email-alert");
    dom.css("border-color", "#ccc");
    dom.css("margin-bottom", "");
    validateAlertDom.remove();
    var email = dom.val();
    var passed =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    if (!passed) {
      dom.css("border-color", "red");
      dom.css("margin-bottom", "0");
      $(
        "<span " +
          'class="validate-email-alert" ' +
          'style="color: red;font-size: small;">' +
          "Please enter a valid email address." +
          "</span>"
      ).insertAfter(dom);
    }
    return passed ? email : null;
  };
  PrefillManager.validatePrefillPhone = function () {
    var dom = $("#amity-preform-input-phone");
    dom.css("border-color", "#ccc");
    var phone = dom.val();
    var passed = this.PHONE_REGEX.test(phone);
    if (!passed) dom.css("border-color", "red");
    return passed ? this.formatPhoneNumber(phone) : null;
  };
  PrefillManager.validatePrefillName = function (skip) {
    var dom = $("#amity-preform-input-name");
    var name = dom.val() || null;
    if ($("#amity-preform-input-name-wrapper")) {
      dom = $("#amity-preform-input-name-wrapper");
    }
    dom.css("border-color", "#ccc");
    var passed = !!name || (SDKManager.setting.PREFILL_NAME_OPTIONAL && skip);
    dom.blur();
    $("#prefill-name-submit").blur();
    if (!passed) dom.css("border-color", "red");
    return passed ? name : null;
  };
  PrefillManager.submitPrefillInformation = function (skip) {
    if (skip === void 0) {
      skip = false;
    }
    var json = {};
    var name =
      PrefillManager.validatePrefillName(skip) || CookieManager.getUserName();
    var email =
      PrefillManager.validatePrefillEmail() || CookieManager.getUserEmail();
    var phone =
      PrefillManager.validatePrefillPhone() || CookieManager.getUserPhone();
    if (SDKManager.setting.PREFILL_NAME)
      if (name && !skip) {
        json.name = name;
        CookieManager.createCookie("amity_user_name", name, 1000);
      } else if (!SDKManager.setting.PREFILL_NAME_OPTIONAL || !skip) {
        return;
      }
    if (SDKManager.setting.PREFILL_EMAIL)
      if (email && !skip) {
        json.email = email;
        CookieManager.createCookie("amity_user_email", email, 1000);
      } else return;
    if (SDKManager.setting.PREFILL_PHONE)
      if (phone && !skip) {
        json.phone = phone;
        CookieManager.createCookie("amity_user_phone", phone, 1000);
      } else return;
    json.language = SDKManager.setting.LANGUAGE;
    // Send update info request to ChatApp.tsx and wait for message updateInfoComplete
    if (ChatManager.notAppendIframeYet) {
      SDKManager.appendIframe();
    }
    $("#amity-preform-input>button>i").attr("class", "fa fa-spinner fa-spin");
  };
  // Verify whether the detected email belongs to a domain name defined in the entity configuration
  PrefillManager.formatPhoneNumber = function (phone) {
    phone = phone.replace(/[.\s\-()]/gi, "");
    return phone;
  };
  PrefillManager.PHONE_REGEX =
    /(\+?(\d{1,3}))?[- (]*(\d{2,3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?/gi;
  return PrefillManager;
})();

function receiveMessageFromIframe(json) {
  console.log("message received from app: ", json);
  // Update info has been completed, open the chat
  if (json.topic == "updateInfoComplete") {
    if (json.payload.info) {
      if (json.payload.info.name) {
        CookieManager.createCookie(
          "amity_user_name",
          json.payload.info.name,
          1000
        );
      }
      if (json.payload.info.phone) {
        CookieManager.createCookie(
          "amity_user_phone",
          json.payload.info.phone,
          1000
        );
      }
      if (json.payload.info.email) {
        CookieManager.createCookie(
          "amity_user_email",
          json.payload.info.email,
          1000
        );
      }
      if (json.payload.info.external_id) {
        CookieManager.createCookie(
          "amity_user_external_id",
          json.payload.info.external_id,
          1000
        );
      }
    }
    if (
      json.payload.toggleOpenChat === undefined ||
      json.payload.toggleOpenChat == true
    ) {
      ChatManager.doOpenChat();
    }
  } else if (json.topic == "initComplete") {
    ChatManager.onChatReady();
  } else if (json.topic == "setUserId") {
    CookieManager.createCookie(
      "uid_" + SDKManager.setting.APP_ID,
      json.payload,
      1000
    );
  } else if (json.topic === "agent") {
    if (SDKManager.setting.ON_MESSAGE_IN) {
      SDKManager.setting.ON_MESSAGE_IN();
    } else {
      if ($("#amity-chatframe").is(":visible") === false) {
        $("#amity-chatbtn").append("<div class='new-message-badge'>new</div>");
        $("#amity-chat-icon").addClass("shake");
        setTimeout(function () {
          $("#amity-chat-icon").removeClass("shake");
        }, 1000);
      }
    }
  } else if (typeof json === "string") {
    var str = json;
    if (str.includes("__NX_")) {
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(JSON.stringify(str));
      }
    }
  }
}
var CookieManager = (function () {
  function CookieManager() {}
  CookieManager.getUserName = function () {
    return CookieManager.readCookie("amity_user_name");
  };
  CookieManager.getUserPhone = function () {
    return CookieManager.readCookie("amity_user_phone");
  };
  CookieManager.getUserEmail = function () {
    return CookieManager.readCookie("amity_user_email");
  };
  CookieManager.getUserId = function (appId) {
    var applicationId = appId
      ? appId
      : SDKManager.setting && SDKManager.setting.APP_ID;
    return CookieManager.readCookie("uid_" + applicationId);
  };
  CookieManager.getExternalId = function () {
    return CookieManager.readCookie("amity_user_external_id");
  };
  CookieManager.renewCookie = function (name, days) {
    var value = this.readCookie(name) || "";
    this.createCookie(name, value, days);
  };
  CookieManager.createCookie = function (name, value, days) {
    var expires;
    if (days) {
      var date = new Date();
      date.setDate(date.getDate() + days);
      expires = "; expires=" + date.toUTCString();
    } else {
      expires = "";
    }
    document.cookie =
      encodeURIComponent(name) +
      "=" +
      encodeURIComponent(value) +
      expires +
      "; path=/";
  };
  CookieManager.readCookie = function (name) {
    var ret = null;
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        ret = decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return ret;
  };
  CookieManager.eraseCookie = function (name) {
    this.createCookie(name, "", -1);
  };
  return CookieManager;
})();
var ChatManager = (function () {
  function ChatManager() {}
  ChatManager.prefillFormDone = function () {
    return (
      (CookieManager.getUserName() || !SDKManager.setting.PREFILL_NAME) &&
      (CookieManager.getUserPhone() || !SDKManager.setting.PREFILL_PHONE) &&
      (CookieManager.getUserEmail() || !SDKManager.setting.PREFILL_EMAIL)
    );
  };
  ChatManager.requirePrefillForm = function () {
    return (
      SDKManager.setting.PREFILL_NAME ||
      SDKManager.setting.PREFILL_PHONE ||
      SDKManager.setting.PREFILL_EMAIL
    );
  };
  ChatManager.openPrefillForm = function () {
    if (ChatManager.chatOpened) ChatManager.closeChat();
    if (ChatManager.prefillFormOpened) return;
    ChatManager.prefillFormOpened = true;
    $("#amity-preform")
      .fadeIn("fast")
      .animate(
        {
          bottom:
            (SDKManager.setting.SIZE
              ? Number(SDKManager.setting.SIZE[1])
              : 50) +
            10 +
            "pt",
        },
        { duration: "fast", queue: false },
        function () {
          // Animation complete.
        }
      );
  };
  ChatManager.closePrefillForm = function () {
    if (!ChatManager.prefillFormOpened) return;
    ChatManager.prefillFormOpened = false;
    $("#amity-preform")
      .fadeOut("fast")
      .animate(
        {
          bottom: "55pt",
        },
        { duration: "fast", queue: false },
        function () {
          // Animation complete.
        }
      );
  };
  ChatManager.onChatReady = function () {
    $("#amity-chatbtn").css("visibility", "visible");
    if (SDKManager.setting.ONCHATREADY) {
      SDKManager.setting.ONCHATREADY();
    }
  };
  ChatManager.openChat = function () {
    if (SDKManager.setting.IS_HOVER) {
      $("#hoverItem").remove();
      // $("#amity-chatbtn").hide();
      $("#amity-chatbtn").css(
        "box-shadow",
        "rgba(0, 0, 0, 0.3) 0px 1px 4px, rgba(0, 0, 0, 0.2) 0px 2px 32px"
      );
      $("#amity-chatbtn").css(
        "background-color",
        SDKManager.setting.COLOR || "#FF9C23"
      );
    }
    if (ChatManager.requirePrefillForm() && !ChatManager.prefillFormDone())
      ChatManager.openPrefillForm();
    else {
      ChatManager.doOpenChat();
    }
  };
  ChatManager.doOpenChat = function () {
    $("#amity-chatbtn .new-message-badge").remove();
    if (ChatManager.prefillFormOpened) ChatManager.closePrefillForm();
    if (ChatManager.chatOpened && ChatManager.notAppendIframeYet) return;
    ChatManager.chatOpened = true;

    $("#amity-chatframe")
      .fadeIn("fast")
      .animate(
        {
          bottom: "114px",
          //bottom: "20px",
        },
        { duration: "fast", queue: false },
        function () {
          // Animation complete.
        }
      );
    var bg = SDKManager.setting.COLOR || "#FF9C23";
    if (!SDKManager.setting.TOP_RIGHT_BUTTON) {
      if (SDKManager.setting.DISABLE_SPIN_ANIMATION) {
        setTimeout(function () {
          $("#amity-chatbtn").css({
            width: "45pt",
            height: "45pt",
            "background-color": bg,
          });
        }, 150);
      } else if (!SDKManager.setting.DISABLE_SPIN_ANIMATION) {
        $("#amity-chatbtn")
          .addClass("opened")
          .animate(
            { rotation: 360 },
            {
              duration: 100,
              step: function (now, fx) {
                if (!SDKManager.setting.IS_HOVER) {
                  $(this).css({ transform: "rotate(" + now + "deg)" });
                }
              },
            }
          );
        $("#amity-chatbtn").css({
          width: "45pt",
          height: "45pt",
          "background-color": bg,
        });
      }
      $("#amity-chat-icon").fadeOut("fast");
      $("#amity-chatclose-icon").fadeIn("fast");
    }
  };
  ChatManager.closeChat = function () {
    if (!ChatManager.chatOpened) return;
    ChatManager.chatOpened = false;
    $("#amity-chatframe")
      .fadeOut("fast")
      .animate(
        {
          bottom: "75px",
        },
        { duration: "fast", queue: false },
        function () {
          // Animation complete.
        }
      );
    $("#amity-chatbtn")
      .removeClass("opened")
      .animate(
        { rotation: 0 },
        {
          duration: 100,
          step: function (now, fx) {
            if (!SDKManager.setting.IS_HOVER) {
              $(this).css({ transform: "rotate(" + now + "deg)" });
            }
          },
        }
      );
    var bg = SDKManager.setting.COLOR || "#FF9C23";
    var wd = SDKManager.setting.SIZE
      ? SDKManager.setting.SIZE[0] + "pt"
      : "45pt";
    var ht = SDKManager.setting.SIZE
      ? SDKManager.setting.SIZE[1] + "pt"
      : "45pt";
    $("#amity-chatbtn").css({
      width: wd,
      height: ht,
      "background-color": bg,
    });
    $("#amity-chatclose-icon").fadeOut("fast");
    $("#amity-chat-icon").fadeIn("fast");
    $("#amity-chatbtn").css({ display: "block" });
  };
  ChatManager.toggleChat = function () {
    if (ChatManager.chatOpened) ChatManager.closeChat();
    else if (!ChatManager.prefillFormDone() && ChatManager.requirePrefillForm())
      ChatManager.togglePrefillForm();
    else {
      if (ChatManager.notAppendIframeYet) {
        SDKManager.appendIframe();
      }
      ChatManager.doOpenChat();
    }
  };
  ChatManager.togglePrefillForm = function () {
    if (ChatManager.prefillFormOpened) ChatManager.closePrefillForm();
    else ChatManager.openPrefillForm();
  };
  ChatManager.chatOpened = false;
  ChatManager.prefillFormOpened = false;
  ChatManager.notAppendIframeYet = true;
  return ChatManager;
})();
window.amity = {
  openChat: ChatManager.openChat,
  closeChat: ChatManager.closeChat,
  toggleChat: ChatManager.toggleChat,
  getUserId: CookieManager.getUserId,
  getUserName: CookieManager.getUserName,
  getExternalUserId: CookieManager.getExternalId,
};