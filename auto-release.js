(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=n(r(2)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}(r(0));n(r(1)),n(r(59));function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t,r,o){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&s)for(var i in s)void 0===t[i]&&(t[i]=s[i]);else t||(t=s||{});if(1===n)t.children=o;else if(n>1){for(var l=new Array(n),u=0;u<n;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:a,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const h=e=>{let{to:t}=e,r=c(e,["to"]);return t.includes("http")?s.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/","pages/auto-release.html")+t),s.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const a=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const s=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(s),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const d=e=>{var t,r;return r=t=class extends s.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?s.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),r};d(()=>r.e(15).then(r.bind(null,60))),d(()=>r.e(15).then(r.bind(null,61)));var p=i("h1",{},void 0,i("code",{},void 0,"auto release")),b=i("p",{},void 0,"Auto-generate a github release."),f=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",i("br",{}),"    ",i("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",i("span",{className:"hljs-string"},void 0,'"auto release"'),i("br",{}),"  }",i("br",{}),"}",i("br",{}))),v=i("p",{},void 0,"Make sure the branch/tag you're releasing is on github before running ",i("code",{},void 0,"auto release"),". You will need to push the tags to github first:"),g=i("pre",{},void 0,i("code",{className:"language-json"},void 0,"{",i("br",{}),"  ",i("span",{className:"hljs-attr"},void 0,'"scripts"'),": {",i("br",{}),"    ",i("span",{className:"hljs-attr"},void 0,'"postpublish"'),": ",i("span",{className:"hljs-string"},void 0,'"git push --follow-tags --set-upstream origin $branch && auto release"'),i("br",{}),"  }",i("br",{}),"}",i("br",{}))),m=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto release -h",i("br",{}),i("br",{}),"usage: auto release [-h] [-s SLACK] [--use-version USE_VERSION]",i("br",{}),"                         [--jira JIRA] [--no-version-prefix] [-d] [-v] [-vv]",i("br",{}),"                         [--githubApi GITHUBAPI]",i("br",{}),i("br",{}),i("br",{}),"Optional arguments:",i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Show this ",i("span",{className:"hljs-built_in"},void 0,"help")," message and ",i("span",{className:"hljs-built_in"},void 0,"exit"),".",i("br",{}),"  -s SLACK, --slack SLACK",i("br",{}),"                        Post a message to slack about the release. Make sure",i("br",{}),"                        the SLACK_TOKEN environment variable is ",i("span",{className:"hljs-built_in"},void 0,"set"),".",i("br",{}),"  --use-version USE_VERSION",i("br",{}),"                        Version number to publish as. Defaults to reading",i("br",{}),"                        from the package.json.",i("br",{}),"  --jira JIRA           Jira base URL",i("br",{}),"  --no-version-prefix   Use the version as the tag without the `v` prefix",i("br",{}),"  -d, --dry-run         Dont actually commit status. Just ",i("span",{className:"hljs-built_in"},void 0,"print")," the request",i("br",{}),"                        body",i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -vv, --very-verbose   Show a lot more logs",i("br",{}),"  --githubApi GITHUBAPI",i("br",{}),"                        Github API to use",i("br",{}))),y=i("code",{},void 0,".autorc");var j=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,b,f,v,g,i("h2",{id:"options"},void 0,"Options ",i(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),m,i("h2",{id:"slack-url"},void 0,"Slack URL ",i(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#slack-url","aria-hidden":"true"})),i("p",{},void 0,"When posting to slack you must provide your slack services hook url at the CLI or in your ",y," config. To see configuration ",i(h,{currentPage:e.currentPage,to:"/pages/autorc.html#slack-url"},void 0,"go here"),".")));t.default=j,e.exports=t.default}}]);
//# sourceMappingURL=auto-release.js.map