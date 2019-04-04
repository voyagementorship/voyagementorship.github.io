!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("santa-components"),require("lodash")):"function"==typeof define&&define.amd?define(["react","prop-types","santa-components","lodash"],t):"object"==typeof exports?exports["bolt-components"]=t(require("react"),require("prop-types"),require("santa-components"),require("lodash")):e["bolt-components"]=t(e.react,e["prop-types"],e["santa-components"],e.lodash)}(this,function(e,t,o,n){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t,o){"use strict";var n=o(5),r=o(6),i=o(7),s=o(8),a=o(9);e.exports={BoltPageGroup:i,FontsContainer:s,BoltSite:n,SiteRoot:r,PopupRoot:a}},function(e,t,o){"use strict";var n=o(3),r=o(0),i=o(1),s=o(2),a=s.utils.createSantaTypesDefinitions,u=s.santaTypesDefinitions,p={aspectCompsContainer:!0,POPUP_ROOT:!0,FONTS_CONTAINER:!0},c=a({navigateTo:i.func,parseNavInfo:i.func,shouldShowAllBoltSiteContainerChildren:i.bool,isWixSite:i.bool,getPrimaryRootId:i.func,getCustomClickOccurred:i.func},"BoltSite"),l=function(e){return e.stopPropagation(),e.preventDefault(),!1},f=function(e,t,o,n,r){return function(i){var s=n();o();var a=function e(t,o){return t&&t.tagName?t.tagName.toLowerCase()===o?t:e(t.parentNode,o):null}(i.target,"a");if(!a)return!0;var u=function(e){return{href:e.getAttribute("href"),target:e.getAttribute("target"),pageItemAdditionalData:e.getAttribute("data-page-item-context"),anchorData:e.getAttribute("data-anchor"),noUrlChangeAttr:e.getAttribute("data-no-physical-url"),isChangingUrl:!e.getAttribute("data-no-physical-url"),isKeepingRoots:!!e.getAttribute("data-keep-roots")}}(a),p=u.noUrlChangeAttr||u.href,c=t(p),f="_blank"===u.target||!c;return function(e,t,o,n){if(!e)return!1;var r=!o&&"_self"===t.target,i="_blank"!==t.target&&o&&o.pageId&&o.pageId!==n();return r||i}(s,u,c,r)?l(i):!(a&&!f)||(e(u),l(i))}},d=function(e){return e.isMeshLayoutMechanism?r.createElement("script",{id:"partiallyVisibleBeat",dangerouslySetInnerHTML:{__html:"\n                    if (wixBiSession && wixBiSession.sendBeat && !wixBiSession.sentPartiallyVisibleBeat) {\n                        wixBiSession.sentPartiallyVisibleBeat = true;\n                        wixBiSession.sendBeat(12, 'Partially visible');\n                    }\n                "}}):null};d.propTypes={isMeshLayoutMechanism:i.bool};var h=function(e){return e.shouldShowAllBoltSiteContainerChildren?e.children||null:r.Children.map(e.children,function(e){return p[n.get(e,"props.id")]?e:null})},y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e,t,o,n,i=this.props,s=i.navigateTo,a=i.parseNavInfo,u=i.resetCustomClickOccurred,p=i.getCustomClickOccurred,c=i.getPrimaryRootId;return r.createElement("div",{key:"BoltSite",className:(e=this.props,t=[],o=e.isWixSite,n=e.isVisualFocusEnabled,o?t.push("wixSiteProperties"):t.push("noop"),n&&t.push("visual-focus-on"),t.join(" ")),style:{position:"relative"},onClick:f(s,a,u,p,c)},r.createElement(h,this.props),r.createElement(d,{key:"partiallyVisibleBeat",isMeshLayoutMechanism:this.props.isMeshLayoutMechanism}))},t}(r.Component);y.displayName="BoltSite",y.santaTypeDefinitions=c,y.compType="BOLT_SITE",y.propTypes={children:i.node,navigateTo:c.navigateTo.isRequired,parseNavInfo:c.parseNavInfo.isRequired,isVisualFocusEnabled:u.isVisualFocusEnabled.isRequired,isWixSite:c.isWixSite.isRequired,shouldShowAllBoltSiteContainerChildren:c.shouldShowAllBoltSiteContainerChildren,isMeshLayoutMechanism:u.Layout.isMeshLayoutMechanism,resetCustomClickOccurred:u.resetCustomClickOccurred,getPrimaryRootId:c.getPrimaryRootId.isRequired,getCustomClickOccurred:c.getCustomClickOccurred},y.defaultProps={shouldShowAllBoltSiteContainerChildren:!0},e.exports=y},function(e,t,o){"use strict";var n=o(0),r=o(1),i=o(2).utils,s=i.createReactElement,a=(0,i.createSantaTypesDefinitions)({siteRootStyle:r.object,siteRootAriaHidden:r.bool},"SiteRoot"),u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e="SITE_ROOT";return s("div",{id:e,key:e,className:e,style:this.props.siteRootStyle,"aria-hidden":this.props.siteRootAriaHidden},this.props.children)},t}(n.Component);u.displayName="SiteRoot",u.santaTypesDefinitions=a,u.compType="SITE_ROOT",u.propTypes={children:r.node,siteRootStyle:a.siteRootStyle,siteRootAriaHidden:a.siteRootAriaHidden},e.exports=u},function(e,t,o){"use strict";var n=o(0),r=o(1),i=o(2).utils,s=i.createReactElement,a=(0,i.createSantaTypesDefinitions)({id:r.string,registerNextPageTransition:r.func,children:r.node},"BoltPageGroup"),u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(e){this.shouldPerformPageTransition=e.isDuringPageTransition},t.prototype.componentDidLayout=function(){this.shouldPerformPageTransition&&(this.props.registerNextPageTransition(!0),this.shouldPerformPageTransition=!1)},t.prototype.render=function(){return s("div",{id:this.props.id,style:{width:"100%"}},this.props.children)},t}(n.Component);u.displayName="BoltPageGroup",u.compType="wysiwyg.viewer.components.PageGroup",u.santaTypesDefinitions=a,u.propTypes={id:a.id,registerNextPageTransition:a.registerNextPageTransition,isDuringPageTransition:r.bool,children:a.children},e.exports=u},function(e,t,o){"use strict";var n=o(0),r=o(1),i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props.fontsLinks,t="FONTS_CONTAINER";return n.createElement("div",{id:t,key:t},e.map(function(e,t){return n.createElement("link",{key:t,href:e,rel:"stylesheet",type:"text/css"})}))},t}(n.Component);i.displayName="FontsContainer",i.compType="FONTS_CONTAINER",i.propTypes={fontsLinks:r.array},e.exports=i},function(e,t,o){"use strict";var n=o(0),r=o(1),i=o(2),s=i.utils.createReactElement,a=i.santaTypesDefinitions,u=o(3),p=function(e){function t(o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,o));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getPopupsWrapperStyles=function(e,t,o,n){return u.assign({margin:"0 auto",width:t?o:"auto"},!e&&{minWidth:o,minHeight:n})},t.prototype.render=function(){var e=s("div",{id:"POPUPS_WRAPPER",className:"POPUPS_WRAPPER",key:"POPUPS_WRAPPER",style:this.getPopupsWrapperStyles(this.props.isMesh,this.props.isMobileView,this.props.siteWidth,this.props.getScreenHeight())},this.props.children);return s("div",{id:this.props.id,className:this.props.isMobileView?"POPUPS_ROOT mobile":"POPUPS_ROOT",key:this.props.id,style:{overflow:null}},[e])},t}(n.Component);p.displayName="WixPopupRoot",p.compType="PopupRoot",p.propTypes={id:r.string.isRequired,children:r.node,currentPopupId:a.currentPopupId.isRequired,isMobileView:a.isMobileView.isRequired,isMesh:a.Layout.isMeshLayoutMechanism.isRequired,siteWidth:a.siteWidth.isRequired,getScreenHeight:a.getScreenHeight.isRequired},e.exports=p}])});
//# sourceMappingURL=bolt-components.js.map