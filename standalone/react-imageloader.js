!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactImageLoader=t(require("react")):e.ReactImageLoader=t(e.react)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var s=r[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=r(1),p=o(u),c=p["default"].PropTypes,l=p["default"].DOM.span,d={PENDING:"pending",LOADING:"loading",LOADED:"loaded",FAILED:"failed"},f=function(e){function t(e){s(this,t);var r=n(this,Object.getPrototypeOf(t).call(this,e));return r.state={status:e.src?d.LOADING:d.PENDING},r}return a(t,e),i(t,[{key:"componentDidMount",value:function(){this.state.status===d.LOADING&&this.createLoader()}},{key:"componentWillReceiveProps",value:function(e){this.props.src!==e.src&&this.setState({status:e.src?d.LOADING:d.PENDING})}},{key:"componentDidUpdate",value:function(){this.state.status!==d.LOADING||this.img||this.createLoader()}},{key:"componentWillUnmount",value:function(){this.destroyLoader()}},{key:"getClassName",value:function(){var e="imageloader "+this.state.status;return this.props.className&&(e=e+" "+this.props.className),e}},{key:"createLoader",value:function(){this.destroyLoader(),this.img=new Image,this.img.onload=this.handleLoad.bind(this),this.img.onerror=this.handleError.bind(this),this.img.src=this.props.src}},{key:"destroyLoader",value:function(){this.img&&(this.img.onload=null,this.img.onerror=null,this.img=null)}},{key:"handleLoad",value:function(e){this.destroyLoader(),this.setState({status:d.LOADED}),this.props.onLoad&&this.props.onLoad(e)}},{key:"handleError",value:function(e){this.destroyLoader(),this.setState({status:d.FAILED}),this.props.onError&&this.props.onError(e)}},{key:"renderImg",value:function(){var e=this.props,t=e.src,r=e.imgProps,o={src:t};for(var s in r)r.hasOwnProperty(s)&&(o[s]=r[s]);return p["default"].createElement("img",o)}},{key:"render",value:function(){var e,t={className:this.getClassName()};this.props.style&&(t.style=this.props.style);var r=[t];switch(this.state.status){case d.LOADED:r.push(this.renderImg());break;case d.FAILED:this.props.children&&r.push(this.props.children);break;default:this.props.preloader&&r.push(this.props.preloader())}return(e=this.props).wrapper.apply(e,r)}}]),t}(p["default"].Component);f.propTypes={wrapper:c.func,className:c.string,style:c.object,preloader:c.func,src:c.string,onLoad:c.func,onError:c.func,imgProps:c.object},f.defaultProps={wrapper:l},t["default"]=f},function(t,r){t.exports=e}])});