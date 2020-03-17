(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(t,e,a){var n=a(76),i=a(69).document,r=n(i)&&n(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},109:function(t,e,a){var n=a(88),i=a(17);t.exports=function(t,e,a){if(n(e))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(t))}},110:function(t,e,a){var n=a(63)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(a){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},111:function(t,e,a){var n=a(33);n(n.P,"Array",{fill:a(112)}),a(73)("fill")},112:function(t,e,a){"use strict";var n=a(64),i=a(37),r=a(34);t.exports=function(t){for(var e=n(this),a=r(e.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,a),c=s>2?arguments[2]:void 0,u=void 0===c?a:i(c,a);u>o;)e[o++]=t;return e}},113:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))},114:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a(115),i=a.n(n);function r(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),i()(t,n.key,n)}}function s(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}},115:function(t,e,a){t.exports=a(116)},116:function(t,e,a){a(117);var n=a(66).Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},117:function(t,e,a){var n=a(79);n(n.S+n.F*!a(67),"Object",{defineProperty:a(72).f})},118:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},119:function(t,e,a){t.exports=!a(67)&&!a(90)((function(){return 7!=Object.defineProperty(a(100)("div"),"a",{get:function(){return 7}}).a}))},120:function(t,e,a){var n=a(76);t.exports=function(t,e){if(!n(t))return t;var a,i;if(e&&"function"==typeof(a=t.toString)&&!n(i=a.call(t)))return i;if("function"==typeof(a=t.valueOf)&&!n(i=a.call(t)))return i;if(!e&&"function"==typeof(a=t.toString)&&!n(i=a.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},142:function(t,e,a){},143:function(t,e,a){},243:function(t,e,a){"use strict";var n=a(142);a.n(n).a},244:function(t,e,a){"use strict";var n=a(143);a.n(n).a},353:function(t,e,a){"use strict";a.r(e);a(97),a(98),a(71),a(111);var n=a(113),i=a(114),r=[["",void 0],["",void 0],["",void 0],["",void 0],["Document Dataset","/jobs/document-dataset/"],["",void 0],["Have a Data Hub","/jobs/have-a-data-hub/"],["",void 0],["Find Datasets","/jobs/find-datasets/"],["Pull Dataset","/jobs/pull-dataset/"],["Version Dataset","/jobs/version-dataset/"],["Validate Dataset","/jobs/validate-dataset/"],["Pipeline\nTransformations","/jobs/pipeline-transformations/"],["Publish Dataset","/jobs/publish-dataset/"],["Do Analysis &\nMachine Learning","/jobs/do-analysis-and-machine-learning/"],["Scale Scope","/jobs/scale-scope/"],["Data Audit","/jobs/data-audit/"],["Do Initial\nData Exploration","/jobs/do-initial-data-exploration/"],["Quickly\nEdit Dataset","/jobs/quickly-edit-dataset/"],["Store Dataset","/jobs/store-dataset/"],["Data API","/jobs/data-api/"],["Create\nVisualizations","/jobs/create-visualizations/"],["Orchestrate\nData Platform","/jobs/orchestrate-data-platform/"],["Scale Size","/jobs/scale-size/"],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0],["",void 0]],s=function(){function t(e){Object(n.a)(this,t),this.shape=[8,3],this.domNode=e}return Object(i.a)(t,[{key:"configure",value:function(){var t=this,e=Honeycomb.extendHex({size:75,orientation:"flat",currentIndex:function(){var e=this.toPoint(),a=t.gridType.pointToHex([e.x,e.y]);return a.x+1+(a.y+1)*t.shape[0]},render:function(e){var a=this.toPoint(),n=a.x,i=a.y,s=this.toPoint(),o=this.center().add(s),c=(t.gridType.pointToHex([s.x,s.y]),this.corners()),u=this.currentIndex(),l={width:1,color:"#999"};""===r[u][0]&&(l={}),this.draw=e.polygon(c.map((function(t){var e=t.x,a=t.y;return"".concat(e,",").concat(a)}))).fill("none").stroke(l).translate(n,i);var f=r[u][0],d=f.includes("\n")?o.y-26:o.y-13;e.text(f).font({size:13,anchor:"middle",leading:1.4,fill:"#1A98FF"}).translate(o.x,d)},openAnchor:function(){var t=this.currentIndex();""!==r[t][0]&&window.open(r[t][1])},highlight:function(){var t=this.currentIndex();""!==r[t][0]&&this.draw.stop(!0,!0).fill({opacity:.2,color:"#6a8bad"}).animate(1e3).fill({opacity:0,color:"none"})}});this.gridType=Honeycomb.defineGrid(e)}},{key:"setup",value:function(){var t=this.shape;this.configure();var e=SVG(this.domNode);this.gridInstance=this.gridType.rectangle({width:t[0],height:t[1],onCreate:function(t){t.render(e)}})}},{key:"setupMouseOverEvent",value:function(){var t=this;this.domNode.addEventListener("mouseover",(function(e){var a=e.offsetX,n=e.offsetY,i=t.gridType.pointToHex([a,n]),r=t.gridInstance.get(i);r&&r.highlight()}))}},{key:"setupClickEvent",value:function(){var t=this;this.domNode.addEventListener("click",(function(e){var a=e.offsetX,n=e.offsetY,i=t.gridType.pointToHex([a,n]),r=t.gridInstance.get(i);r&&r.openAnchor()}))}}]),t}(),o={mounted:function(){var t=new s(this.$refs.diagram);t.setup(),t.setupMouseOverEvent(),t.setupClickEvent()}},c=(a(243),a(1)),u={components:{JobsDiagram:Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"diagram",staticClass:"jobs-diagram"})}),[],!1,null,"00d74f52",null).exports}},l=(a(244),Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"banner gray-section py-6 w-full"},[a("div",{staticClass:"container flex flex-row flex-wrap items-center mx-auto usedby text-center"},[a("h1",{staticClass:"w-full"},[t._v("Widely Adopted and Used")]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-32",attrs:{src:"/img/home/pandas.png"}})]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-24",attrs:{src:"/img/home/kaggle.png"}})]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-32",attrs:{src:"/img/home/openrefine.png"}})]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-32",attrs:{src:"/img/home/data-gov-uk.png"}})]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-20",attrs:{src:"/img/home/18f-logo.png"}})]),t._v(" "),a("div",{staticClass:"my-2 w-full xs:w-1/2 md:w-1/3 lg:w-1/6"},[a("img",{staticClass:"w-32",attrs:{src:"/img/home/data-gouv-fr.png"}})])])]),t._v(" "),a("div",{staticClass:"main-section"},[a("div",{staticClass:"inner-container"},[a("h1",{staticClass:"text-center",attrs:{id:"more"}},[t._v("For anyone who works with data"),a("br"),a("small",[t._v("Especially diverse data and/or across tools or teams")])]),t._v(" "),a("div",{staticClass:"features text-center flex flex-row flex-wrap"},[a("div",{staticClass:"w-full md:w-1/3 feature"},[a("div",{staticClass:"py-12 px-8"},[a("img",{attrs:{src:"/img/home/for-researchers.svg",height:"223.375"}}),t._v(" "),a("h2",[t._v("Researchers")]),t._v(" "),a("p",[t._v("Easily create reproducible research")])])]),t._v(" "),a("div",{staticClass:"w-full md:w-1/3 feature"},[a("div",{staticClass:"py-12 px-8"},[a("img",{attrs:{src:"/img/home/for-data-scientists.svg",height:"223.375"}}),t._v(" "),a("h2",[t._v("Data Scientists")]),t._v(" "),a("p",[t._v("Create pipelines without effort")])])]),t._v(" "),a("div",{staticClass:"w-full md:w-1/3 feature"},[a("div",{staticClass:"py-12 px-8"},[a("img",{attrs:{src:"/img/home/for-data-engineers.svg",height:"223.375"}}),t._v(" "),a("h2",[t._v("Data Engineers")]),t._v(" "),a("p",[t._v("Standardize data platforms")])])])])]),t._v(" "),a("h1",{staticClass:"text-center"},[t._v("Data Integration and Management")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"what-is-data-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-data-integration"}},[t._v("#")]),t._v(" What is data integration")]),t._v(" "),a("p",[t._v("Data integration (aka what ETL became) is the job of bringing diverse (and often dirty) data together, cleaning it up, knitting it together and pushing this into downstream applications, analytics or warehouses – and doing this reliably, repeatedly and automatedly. Data integration subsumes activities like scraping, cleaning, transformation etc.")]),t._v(" "),a("h3",{attrs:{id:"what-is-data-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-data-management"}},[t._v("#")]),t._v(" What is data management")]),t._v(" "),a("p",[t._v("With the data explosion it has become a job in itself to manage data assets – locate, track, curate, store and share them.")]),t._v(" "),a("h3",{attrs:{id:"these-overlap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#these-overlap"}},[t._v("#")]),t._v(" These overlap")]),t._v(" "),a("p",[t._v("For example, data integration work will require a way to reliably discover internal and external data assets.")]),t._v(" "),a("p",[t._v("Conversely, data management often requires some data cleaning (integration)")]),t._v(" "),a("h3",{attrs:{id:"and-they-share-a-common-set-of-“jobs-to-be-done”-“steps-on-the-data-journey”"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#and-they-share-a-common-set-of-“jobs-to-be-done”-“steps-on-the-data-journey”"}},[t._v("#")]),t._v(" And they share a common set of “jobs to be done” / “steps on the data journey”")]),t._v(" "),a("ul",[a("li",[t._v("Sourcing data")]),t._v(" "),a("li",[t._v("Transform data")]),t._v(" "),a("li",[t._v("Pushing and storing data")])])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"banner p-8 gray-section",attrs:{id:"video-section"}},[a("div",{staticClass:"inner-container"},[a("div",{staticClass:"sm:container mx-auto text-center"},[a("h1",[t._v("Why Frictionless Data?")]),t._v(" "),a("p",{staticClass:"text-lg"},[t._v("Rufus Pollock explains the problem Frictionless Data addresses through simple specifications and software.")]),t._v(" "),a("div",{staticClass:"video my-10"},[a("iframe",{staticClass:"w-full h-full",attrs:{src:"https://www.youtube.com/embed/lWHKVXxuci0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])])]),t._v(" "),a("div",{staticClass:"banner p-8"},[a("div",{staticClass:"inner-container"},[a("h1",{staticClass:"text-center"},[t._v("Some of Our Tooling")]),t._v(" "),a("div",{staticClass:"container mx-auto flex flex-row flex-wrap justify-around lg:justify-between"},[a("div",{staticClass:"w-full sm:w-2/5 lg:w-1/5 my-16 text-center"},[a("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/data-package-icon-2.svg"}}),t._v(" "),a("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("Data Package")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Simple container format to describe and package data.")]),t._v(" "),a("a",{staticClass:"links-github",attrs:{href:"/products/data-package/"}},[t._v("Read more »")])]),t._v(" "),a("div",{staticClass:"w-full sm:w-2/5 lg:w-1/5 my-16 text-center"},[a("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/goodtables-icon.svg"}}),t._v(" "),a("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("GoodTables")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Validate data on every change so you catch errors before your users.")]),t._v(" "),a("a",{staticClass:"links-github",attrs:{href:"/products/goodtables/"}},[t._v("Read more »")])]),t._v(" "),a("div",{staticClass:"w-full sm:w-2/5 lg:w-1/5 my-16 text-center"},[a("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/datahub-icon.svg"}}),t._v(" "),a("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("DataHub")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("Publish and find data on the next generation data platform.")]),t._v(" "),a("a",{staticClass:"links-github",attrs:{href:"/products/datahub/"}},[t._v("Read more »")])]),t._v(" "),a("div",{staticClass:"w-full sm:w-2/5 lg:w-1/5 my-16 text-center"},[a("img",{staticClass:"w-24 mx-auto",attrs:{src:"/img/home/dataflows-icon.svg"}}),t._v(" "),a("h2",{staticClass:"text-xl pt-4 font-medium"},[t._v("DataFlows")]),t._v(" "),a("p",{staticClass:"text-lg font-light pt-4"},[t._v("A light intuitive framework for building data processing flows.")]),t._v(" "),a("a",{staticClass:"links-github",attrs:{href:"/products/data-package-pipelines/"}},[t._v("Read more »")])])])])])])}),[],!1,null,null,null));e.default=l.exports},63:function(t,e,a){var n=a(23)("wks"),i=a(24),r=a(2).Symbol,s="function"==typeof r;(t.exports=function(t){return n[t]||(n[t]=s&&r[t]||(s?r:i)("Symbol."+t))}).store=n},64:function(t,e,a){var n=a(17);t.exports=function(t){return Object(n(t))}},65:function(t,e,a){"use strict";var n=a(5);t.exports=function(t,e){return!!t&&n((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},66:function(t,e){var a=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=a)},67:function(t,e,a){t.exports=!a(90)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},68:function(t,e,a){var n=a(22),i=a(36),r=a(64),s=a(34),o=a(86);t.exports=function(t,e){var a=1==t,c=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f,v=e||o;return function(e,o,p){for(var h,m,g=r(e),y=i(g),w=n(o,p,3),x=s(y.length),_=0,b=a?v(e,x):c?v(e,0):void 0;x>_;_++)if((d||_ in y)&&(m=w(h=y[_],_,g),t))if(a)b[_]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:b.push(h)}else if(l)return!1;return f?-1:u||l?l:b}}},69:function(t,e){var a=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},71:function(t,e,a){"use strict";var n=a(33),i=a(68)(1);n(n.P+n.F*!a(65)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},72:function(t,e,a){var n=a(80),i=a(119),r=a(120),s=Object.defineProperty;e.f=a(67)?Object.defineProperty:function(t,e,a){if(n(t),e=r(e,!0),n(a),i)try{return s(t,e,a)}catch(t){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(t[e]=a.value),t}},73:function(t,e,a){var n=a(63)("unscopables"),i=Array.prototype;null==i[n]&&a(19)(i,n,{}),t.exports=function(t){i[n][t]=!0}},75:function(t,e,a){var n=a(72),i=a(91);t.exports=a(67)?function(t,e,a){return n.f(t,e,i(1,a))}:function(t,e,a){return t[e]=a,t}},76:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},78:function(t,e,a){var n=a(18);t.exports=Array.isArray||function(t){return"Array"==n(t)}},79:function(t,e,a){var n=a(69),i=a(66),r=a(99),s=a(75),o=a(81),c=function(t,e,a){var u,l,f,d=t&c.F,v=t&c.G,p=t&c.S,h=t&c.P,m=t&c.B,g=t&c.W,y=v?i:i[e]||(i[e]={}),w=y.prototype,x=v?n:p?n[e]:(n[e]||{}).prototype;for(u in v&&(a=e),a)(l=!d&&x&&void 0!==x[u])&&o(y,u)||(f=l?x[u]:a[u],y[u]=v&&"function"!=typeof x[u]?a[u]:m&&l?r(f,n):g&&x[u]==f?function(t){var e=function(e,a,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,a)}return new t(e,a,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):h&&"function"==typeof f?r(Function.call,f):f,h&&((y.virtual||(y.virtual={}))[u]=f,t&c.R&&w&&!w[u]&&s(w,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},80:function(t,e,a){var n=a(76);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},81:function(t,e){var a={}.hasOwnProperty;t.exports=function(t,e){return a.call(t,e)}},86:function(t,e,a){var n=a(87);t.exports=function(t,e){return new(n(t))(e)}},87:function(t,e,a){var n=a(4),i=a(78),r=a(63)("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),n(e)&&null===(e=e[r])&&(e=void 0)),void 0===e?Array:e}},88:function(t,e,a){var n=a(4),i=a(18),r=a(63)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==i(t))}},90:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},91:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},97:function(t,e,a){"use strict";var n=a(33),i=a(35)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(73)("includes")},98:function(t,e,a){"use strict";var n=a(33),i=a(109);n(n.P+n.F*a(110)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},99:function(t,e,a){var n=a(118);t.exports=function(t,e,a){if(n(t),void 0===e)return t;switch(a){case 1:return function(a){return t.call(e,a)};case 2:return function(a,n){return t.call(e,a,n)};case 3:return function(a,n,i){return t.call(e,a,n,i)}}return function(){return t.apply(e,arguments)}}}}]);