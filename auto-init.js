(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{49:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=i(o(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(1)),i(o(63));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=a;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const d=e=>{let{to:t}=e,o=c(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto-release/","pages/auto-init.html")+t),n.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(n),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};p(()=>o.e(24).then(o.bind(null,64))),p(()=>o.e(24).then(o.bind(null,65)));var h=s("h1",{},void 0,"Initialization"),f=s("code",{},void 0,"auto-release"),b=s("code",{},void 0,"auto init"),v=s("p",{},void 0,"Interactive setup for most configurable options."),m=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"$ auto init --",s("span",{className:"hljs-built_in"},void 0,"help"),s("br",{}),s("br",{}),"Examples",s("br",{}),s("br",{}),"  $ auto init",s("br",{}))),g=s("code",{},void 0,"auto create-labels"),y=s("p",{},void 0,"Create your projects labels on github."),w=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"$ auto create-labels --",s("span",{className:"hljs-built_in"},void 0,"help"),s("br",{}),s("br",{}),"Global Options",s("br",{}),s("br",{}),"  -h, --",s("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",s("span",{className:"hljs-built_in"},void 0,"help")," output ",s("span",{className:"hljs-keyword"},void 0,"for")," the ",s("span",{className:"hljs-built_in"},void 0,"command"),s("br",{}),"  -v, --verbose         Show some more logs",s("br",{}),"  -w, --very-verbose    Show a lot more logs",s("br",{}),"  --repo string         The repo to ",s("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",s("span",{className:"hljs-keyword"},void 0,"in")," the package.json",s("br",{}),"  --owner string        Version number to publish as. Defaults to reading from the package.json",s("br",{}),"  --githubApi string    Github API to use",s("br",{}),s("br",{}),"Examples",s("br",{}),s("br",{}),"  $ auto create-labels",s("br",{}))),j=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ For this to work you must have a ",s("code",{},void 0,"GH_TOKEN")," set, ex: ",s("code",{},void 0,"GH_TOKEN=YOUR_TOKEN auto create-labels"))));var O=e=>s("div",{className:e.className},void 0,s("section",{},void 0,h,s("p",{},void 0,f," provides some tools to quickly set up your project. If you do not want to use the interactive experience all these options can be configured via the ",s(d,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html"},void 0,".autorc")," and most can be configure via CLI options."),s("h2",{id:"auto-init"},void 0,b," ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-init","aria-hidden":"true"})),v,m,s("h2",{id:"auto-create-labels"},void 0,g," ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-create-labels","aria-hidden":"true"})),y,w,j));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=auto-init.js.map