(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports={backgroundType:"plain",plainBackgroundMode:"daylight",devIntro:"Hi, I am Dvir Segal",devDesc:"Tech Lead | Senior Software Developer | Blogger ",gradientColors:"#EE7752, #E73C7E, #23A6D5, #23D5AB",backgroundImageUrl:"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png",icons:[{image:"fa-medium",url:"https://medium.com/@dvirsegal/"},{image:"fa-github",url:"https://github.com/dejavoo/"},{image:"fa-twitter",url:"https://twitter.com/dvir_segal/"},{image:"fa-dev",url:"https://dev.to/dejavo/"},{image:"fa-stack-overflow",url:"https://stackoverflow.com/users/3125120/dejavo/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/dvirsegal/"}]}},,,,,,,,,function(e,n,a){e.exports=a(17)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(3),c=a.n(r),i=(a(15),a(4)),d=a(5),l=a(8),s=a(6),g=a(9),u=a(7),k=a.n(u),p=(a(16),a(1)),h=function(e){function n(e){var a;return Object(i.a)(this,n),(a=Object(l.a)(this,Object(s.a)(n).call(this,e))).componentWillMount=function(){if(a.checkIfPlainTypeEnabled())return!0;a.checkIfGradientTypeEnabled()?a.setState({appClass:"gradient",bgStyle:a.prepareGradientStyleSheets()}):a.checkIfImageTypeEnabled()&&a.setState({appClass:"full-bg-image",bgStyle:a.prepareBackgroundImageStyle()})},a.checkIfNightModeEnabled=function(){return"plain"===a.state.backgroundType&&"nightlight"===a.state.appClass},a.checkIfDayModeEnabled=function(){return"plain"===a.state.backgroundType&&"daylight"===a.state.appClass},a.checkIfGradientTypeEnabled=function(){return"gradient"===a.state.backgroundType},a.checkIfPlainTypeEnabled=function(){return"plain"===a.state.backgroundType},a.checkIfImageTypeEnabled=function(){return"image"===a.state.backgroundType},a.prepareGradientStyleSheets=function(){return p.gradientColors?{background:"linear-gradient(-45deg, "+p.gradientColors+")",backgroundSize:"400% 400%"}:{background:"linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",backgroundSize:"400% 400%"}},a.prepareBackgroundImageStyle=function(){return p.backgroundImageUrl?{background:'url("'+p.backgroundImageUrl+'") no-repeat center center fixed',backgroundSize:"cover"}:{background:'url("/images/sample-background.jpg") no-repeat center center fixed',backgroundSize:"cover"}},a.getDefaultModeBasedOnBackgroundType=function(){return a.checkIfNightModeEnabled()?a.state.lightBackgroundModes[0]:a.checkIfDayModeEnabled()?a.state.darkBackgroundModes[0]:void 0},a.changeThemeMode=function(e){a.checkIfNightModeEnabled()?a.setState({appClass:"daylight",backgroundIndex:0,backgroundMode:a.state.darkBackgroundModes[0]}):a.checkIfDayModeEnabled()&&a.setState({appClass:"nightlight",backgroundIndex:0,backgroundMode:a.state.lightBackgroundModes[0]})},a.changeBackgroundBasedonMode=function(){a.checkIfNightModeEnabled()&&a.state.backgroundIndex<a.state.lightBackgroundModes.length-1?a.setState({backgroundIndex:a.state.backgroundIndex+1,backgroundMode:a.state.lightBackgroundModes[a.state.backgroundIndex+1]}):a.checkIfDayModeEnabled()&&a.state.backgroundIndex<a.state.darkBackgroundModes.length-1?a.setState({backgroundIndex:a.state.backgroundIndex+1,backgroundMode:a.state.darkBackgroundModes[a.state.backgroundIndex+1]}):a.setState({backgroundIndex:0,backgroundMode:a.getDefaultModeBasedOnBackgroundType()})},a.state={darkBackgroundModes:["day","terminal","torquoise","alizarin","amythyst","carrot","peterriver"],lightBackgroundModes:["night","lightred","lightpurple","lightgreen","lightblue","lightyellow"],backgroundType:p.backgroundType||"plain",appClass:p.plainBackgroundMode||"daylight",devIntro:p.devIntro||"Lorem Ipsum",devDesc:p.devDesc||"Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",backgroundMode:"default",backgroundIndex:0,bgStyle:{},icons:p.icons||[]},a}return Object(g.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this.state,n=e.appClass,a=e.bgStyle,t=e.backgroundMode,r=e.devIntro,c=e.devDesc,i=e.icons;return o.a.createElement("div",{className:n,style:a},o.a.createElement("div",{className:"change-mode",onClick:this.changeThemeMode}),o.a.createElement("div",{className:t,onClick:this.changeBackgroundBasedonMode},o.a.createElement("main",{className:"App-main"},o.a.createElement("h1",{className:"intro"},r),o.a.createElement("div",{className:"tagline"},o.a.createElement(k.a,null,c)),o.a.createElement("div",{className:"icons-social"},i.map(function(e){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},o.a.createElement("i",{className:"fab ".concat(e.image)}))})))))}}]),n}(t.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/My-Landing-Page",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/My-Landing-Page","/service-worker.js");f?(function(e,n){fetch(e).then(function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(n,e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.86e52aa7.chunk.js.map