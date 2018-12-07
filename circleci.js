(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{54:function(s,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;r(e(2));var l,t=function(s){if(s&&s.__esModule)return s;var a={};if(null!=s)for(var e in s)if(Object.prototype.hasOwnProperty.call(s,e)){var l=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(s,e):{};l.get||l.set?Object.defineProperty(a,e,l):a[e]=s[e]}return a.default=s,a}(e(0));r(e(1)),r(e(59));function r(s){return s&&s.__esModule?s:{default:s}}function n(s,a,e,t){l||(l="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=s&&s.defaultProps,n=arguments.length-3;if(a||0===n||(a={children:void 0}),a&&r)for(var o in r)void 0===a[o]&&(a[o]=r[o]);else a||(a=r||{});if(1===n)a.children=t;else if(n>1){for(var i=new Array(n),d=0;d<n;d++)i[d]=arguments[d+3];a.children=i}return{$$typeof:l,type:s,key:void 0===e?null:""+e,ref:null,props:a,_owner:null}}function o(s,a,e){return a in s?Object.defineProperty(s,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[a]=e,s}const i=s=>{var a,e;return e=a=class extends t.default.Component{constructor(...s){super(...s),o(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&s().then(s=>{this.setState({Comp:s.default})})}render(){const{Comp:s}=this.state;return s?t.default.createElement(s,this.props,this.props.children||null):null}},o(a,"defaultProps",{shouldLoad:!0}),e};i(()=>e.e(15).then(e.bind(null,60))),i(()=>e.e(15).then(e.bind(null,61)));var d=n("section",{},void 0,n("h1",{},void 0,"CircleCI"),n("p",{},void 0,"The following config declares the ",n("code",{},void 0,"release")," job and uses it in the ",n("code",{},void 0,"build_and_release")," workflow. The ",n("code",{},void 0,"release")," job will only run on commits to master."),n("pre",{},void 0,n("code",{className:"language-yaml"},void 0,n("span",{className:"hljs-attr"},void 0,"version:")," ",n("span",{className:"hljs-number"},void 0,"2"),n("br",{}),n("br",{}),n("span",{className:"hljs-attr"},void 0,"defaults:")," ",n("span",{className:"hljs-meta"},void 0,"&defaults"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  working_directory:")," ",n("span",{className:"hljs-string"},void 0,"~/auto-release-test"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  docker:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"    - image:")," ",n("span",{className:"hljs-string"},void 0,"circleci/node:latest-browsers"),n("br",{}),n("br",{}),n("span",{className:"hljs-attr"},void 0,"jobs:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  install:")," ",n("span",{className:"hljs-comment"},void 0,"# your install job"),n("br",{}),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  release:"),n("br",{}),"    ",n("span",{className:"hljs-string"},void 0,"<<:")," ",n("span",{className:"hljs-meta"},void 0,"*defaults"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"    steps:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"      - attach_workspace:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          at:")," ",n("span",{className:"hljs-string"},void 0,"~/auto-release-test"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"      - run:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          name:")," ",n("span",{className:"hljs-string"},void 0,"Release"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          command:")," ",n("span",{className:"hljs-string"},void 0,"npm")," ",n("span",{className:"hljs-string"},void 0,"run")," ",n("span",{className:"hljs-string"},void 0,"release"),n("br",{}),n("br",{}),n("span",{className:"hljs-attr"},void 0,"workflows:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  version:")," ",n("span",{className:"hljs-number"},void 0,"2"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"  build_and_release:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"    jobs:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"      - install:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          filters:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"            tags:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"              only:")," ",n("span",{className:"hljs-string"},void 0,"/.*/"),n("br",{}),n("br",{}),n("span",{className:"hljs-attr"},void 0,"      - release:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          requires:"),n("br",{}),n("span",{className:"hljs-bullet"},void 0,"            -")," ",n("span",{className:"hljs-string"},void 0,"install"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"          filters:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"            branches:"),n("br",{}),n("span",{className:"hljs-attr"},void 0,"              only:"),n("br",{}),n("span",{className:"hljs-bullet"},void 0,"                -")," ",n("span",{className:"hljs-string"},void 0,"master"),n("br",{}))));var c=s=>n("div",{className:s.className},void 0,d);a.default=c,s.exports=a.default}}]);
//# sourceMappingURL=circleci.js.map