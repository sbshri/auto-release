(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{55:function(e,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r,t=s(a(2)),n=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};r.get||r.set?Object.defineProperty(o,a,r):o[a]=e[a]}return o.default=e,o}(a(0));s(a(1)),s(a(63));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,o,a,t){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={children:void 0}),o&&n)for(var i in n)void 0===o[i]&&(o[i]=n[i]);else o||(o=n||{});if(1===s)o.children=t;else if(s>1){for(var l=new Array(s),u=0;u<s;u++)l[u]=arguments[u+3];o.children=l}return{$$typeof:r,type:e,key:void 0===a?null:""+a,ref:null,props:o,_owner:null}}function l(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function u(){return(u=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function c(e,o){if(null==e)return{};var a,r,t=function(e,o){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}const d=e=>{let{to:o}=e,a=c(e,["to"]);return o.includes("http")?n.default.createElement("a",u({},e,{href:o})):("#"===o[0]&&(o=t.default.join("/auto-release/","pages/auto-version.html")+o),n.default.createElement("a",u({},a,{href:o,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const r=new URL(t.default.join(window.location.origin,o));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,o),e.onClick();const n=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(n),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const h=e=>{var o,a;return a=o=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(o,"defaultProps",{shouldLoad:!0}),a};h(()=>a.e(24).then(a.bind(null,64))),h(()=>a.e(24).then(a.bind(null,65)));var p=i("h1",{},void 0,i("code",{},void 0,"auto version")),v=i("p",{},void 0,"Get the semantic version bump for the given changes. Requires all PRs to have labels for the change type. If a PR does not have a label associated with it, it will default to ",i("code",{},void 0,"patch"),"."),f=i("pre",{},void 0,i("code",{className:"language-bash"},void 0,">  auto version -h",i("br",{}),i("br",{}),"usage: auto.js version [-h] [--noReleaseLabels NORELEASELABELS]",i("br",{}),"                       [--onlyPublishWithReleaseLabel] [--major MAJOR]",i("br",{}),"                       [--minor MINOR] [--patch PATCH] [-v] [-vv]",i("br",{}),"                       [--githubApi GITHUBAPI]",i("br",{}),i("br",{}),i("br",{}),"Optional arguments:",i("br",{}),"  -h, --",i("span",{className:"hljs-built_in"},void 0,"help"),"            Show this ",i("span",{className:"hljs-built_in"},void 0,"help")," message and ",i("span",{className:"hljs-built_in"},void 0,"exit"),".",i("br",{}),"  --noReleaseLabels NORELEASELABELS",i("br",{}),"                        Labels that will not create a release. Defaults to",i("br",{}),"                        just ",i("span",{className:"hljs-string"},void 0,"'no-release'"),i("br",{}),"  --onlyPublishWithReleaseLabel",i("br",{}),"                        Only bump version ",i("span",{className:"hljs-keyword"},void 0,"if")," `release` label is on pull",i("br",{}),"                        request",i("br",{}),"  --major MAJOR         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a major version bump",i("br",{}),"  --minor MINOR         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a minor version bump",i("br",{}),"  --patch PATCH         The name of the tag ",i("span",{className:"hljs-keyword"},void 0,"for")," a patch version bump",i("br",{}),"  -v, --verbose         Show some more logs",i("br",{}),"  -vv, --very-verbose   Show a lot more logs",i("br",{}),"  --githubApi GITHUBAPI",i("br",{}),"                        Github API to use",i("br",{}))),b=i("p",{},void 0,"Useful in conjunction with ",i("code",{},void 0,"npm version")," to auto-version releases."),m=i("p",{},void 0,"To create a prerelease add the ",i("code",{},void 0,"prerelease")," label to your pull request."),g=i("p",{},void 0,"To not create a release for a pull request add the ",i("code",{},void 0,"no-release")," label. Any pull request with this tag will make ",i("code",{},void 0,"auto version")," return ",i("code",{},void 0,"''"),"."),y=i("article",{className:"message column is-warning"},void 0,i("div",{className:"message-body"},void 0,i("p",{},void 0,"⚠️ You must check the return value of ",i("code",{},void 0,"auto version")," in a bash script like in the example configuration for the ",i("code",{},void 0,"no-release")," label to function properly."))),w=i("code",{},void 0,"noReleaseLabels"),P=i("pre",{},void 0,i("code",{className:"language-sh"},void 0,"auto version --noReleaseLabels project-files --noReleaseLabels documentation",i("br",{}))),j=i("code",{},void 0,".autorc");var O=e=>i("div",{className:e.className},void 0,i("section",{},void 0,p,v,f,b,i("h2",{id:"prerelease"},void 0,"Prerelease ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#prerelease","aria-hidden":"true"})),m,i("h2",{id:"no-release"},void 0,"No Release ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#no-release","aria-hidden":"true"})),g,y,i("h3",{id:"multiple"},void 0,"Multiple ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#multiple","aria-hidden":"true"})),i("p",{},void 0,"You can configure multiple labels to skip releasing as well. To do this use the ",w," options. This can also be configured via the ",i(d,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#multiple-no-version"},void 0,".autorc"),"."),P,i("h2",{id:"configure-versioning-labels"},void 0,"Configure Versioning Labels ",i(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#configure-versioning-labels","aria-hidden":"true"})),i("p",{},void 0,"You can customize the versioning labels in the ",j,". To see configuration ",i(d,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html#versioning-labels"},void 0,"go here"),".")));o.default=O,e.exports=o.default}}]);
//# sourceMappingURL=auto-version.js.map