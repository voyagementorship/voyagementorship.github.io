define("galleriesCommon",["lodash","coreUtils","santa-components","skinExports"],function(t,e,o,i){return function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1353)}({0:function(e,o){e.exports=t},1:function(t,o){t.exports=e},133:function(t,e){t.exports=i},1353:function(t,e,o){var i,n;i=[o(1354),o(1355)],void 0===(n=function(t,e){"use strict";return{utils:{galleriesHelperFunctions:t},mixins:{galleryAutoPlayMixin:e}}}.apply(e,i))||(t.exports=n)},1354:function(t,e,o){var i,n;i=[o(133),o(0),o(1)],void 0===(n=function(t,e,o){"use strict";return{getSkinHeightDiff:function(e){var o=t[e];return o&&o.heightDiff||0},getSkinWidthDiff:function(e){var o=t[e];return o&&o.widthDiff||0},getGalleryHeight:function(t,e,i,n,r){var s=i,a=this.getSkinHeightDiff(n),p=o.matrixCalculations.getItemHeight(i,r,t,a);return Math.floor(e*p+(e-1)*s)+a},getDisplayerHeightDiff:function(t,o,i){var n=0,r=parseInt(o.imgHeightDiff&&o.imgHeightDiff.value,10)||0,s=parseInt(o.topPadding&&o.topPadding.value,10)||0;return r||s?n=r+s:t&&t.exports&&(n="mobileView"===i&&e.isNumber(t.exports.m_heightDiff)?t.exports.m_heightDiff:t.exports.heightDiff||0),n},getDisplayerWidthDiff:function(t,o){var i=0;return t&&t.exports&&(i="mobileView"===o&&e.isNumber(t.exports.m_widthDiff)?t.exports.m_widthDiff:t.exports.widthDiff||0),i},MIN_GALLERY_HEIGHT:70}}.apply(e,i))||(t.exports=n)},1355:function(t,e,o){var i,n;i=[o(2)],void 0===(n=function(t){"use strict";function e(t){return t.items.length>0}return{propTypes:{compProp:t.santaTypesDefinitions.Component.compProp.isRequired,compData:t.santaTypesDefinitions.Component.compData.isRequired,isZoomOpened:t.santaTypesDefinitions.isZoomOpened.isRequired,id:t.santaTypesDefinitions.Component.id.isRequired,isPlayingAllowed:t.santaTypesDefinitions.RenderFlags.isPlayingAllowed},getInitialState:function(){var t,o,i=(t=this.props.compData,o=this.props.compProp,e(t)&&o.autoplay);return{$showAutoPlayButton:this.shouldShowAutoPlay()?"showPlayButton":"hidePlayButton",shouldAutoPlay:i,$slideshow:i&&!this.props.isZoomOpened&&this.props.isPlayingAllowed?"autoplayOn":"autoplayOff"}},shouldShowAutoPlay:function(){return!this.props.compProp.isHidden&&(e(this.props.compData)&&this.props.compProp.showAutoplay)},toggleAutoPlay:function(){if(e(this.props.compData)){var t="autoplayOff";if("autoplayOff"===this.state.$slideshow){if(!this.props.isPlayingAllowed)return;t="autoplayOn"}this.setState({shouldAutoPlay:!this.state.shouldAutoPlay,$slideshow:t},function(){this.updateAutoplayState(),this.handleAction(t)})}},componentWillReceiveProps:function(t){var e=this.state.shouldAutoPlay&&!t.isZoomOpened&&t.isPlayingAllowed?"autoplayOn":"autoplayOff";e!==this.state.$slideshow&&this.setState({$slideshow:e},this.updateAutoplayState)},updateAutoplayState:function(){this.clearTimeoutNamed(this.props.id),"autoplayOn"===this.state.$slideshow&&this.setTimeoutNamed(this.props.id,this.autoplayCallback,this.getAutoplayInterval())},autoplayCallback:function(){this.props.isZoomOpened||("LTR"===this.props.compProp.autoPlayDirection?this.prev():this.next())},getAutoplayInterval:function(){var t=this.props.compProp.autoplayInterval;return Math.floor(1e3*t)}}}.apply(e,i))||(t.exports=n)},2:function(t,e){t.exports=o}})});
//# sourceMappingURL=galleriesCommon.min.js.map