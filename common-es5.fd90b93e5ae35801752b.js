function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+8uX":function(e,n){e.exports=function(e){var n={className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},a={begin:"\\s",contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]},t=e.inherit(a,{begin:"\\(",end:"\\)"}),r=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),s=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),i={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[n]},{begin:/'/,end:/'/,contains:[n]},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",relevance:10,contains:[a,s,r,t,{begin:"\\[",end:"\\]",contains:[{className:"meta",begin:"<![a-z]",end:">",contains:[a,t,s,r]}]}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},n,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{name:"style"},contains:[i],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",keywords:{name:"script"},contains:[i],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},i]}]}}},H05P:function(e,n){e.exports=function(e){var n={keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"},a={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},t={begin:"\\(",end:/\)/,keywords:n,contains:["self",e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.NUMBER_MODE]},r={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,t]},s={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},o={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,i],subLanguage:"xml"}},l={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,i],subLanguage:"css"}},c={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};return i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,l,c,s,e.REGEXP_MODE],{aliases:["ts"],keywords:n,contains:[{className:"meta",begin:/^\s*['"]use strict['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,l,c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e.IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.IDENT_RE},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[\{;]/,excludeEnd:!0,keywords:n,contains:["self",e.inherit(e.TITLE_MODE,{begin:"[A-Za-z$_][0-9A-Za-z$_]*"}),r],illegal:/%/,relevance:0},{beginKeywords:"constructor",end:/[\{;]/,excludeEnd:!0,contains:["self",r]},{begin:/module\./,keywords:{built_in:"module"},relevance:0},{beginKeywords:"module",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"},{begin:/\$[(.]/},{begin:"\\."+e.IDENT_RE,relevance:0},a,t]}}},wIh0:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a("jrat"),r=a("EM62"),s=function(){var e=function(){function e(n,a,t,r,s){_classCallCheck(this,e),this.vcr=n,this.template=a,this.elementsLoaderService=t,this.cfr=r,this.cdr=s}return _createClass(e,[{key:"ngOnInit",value:function(){var e,n=this,a=this.template,t=a._declarationTContainer?a._declarationTContainer.tagName:a._def.element.template.nodes[0].element.name,r=this.elementsLoaderService.getElementConfig(t)||{},s=this.elementsLoaderService.options,i=r.loadingComponent||s.loadingComponent;if(this.loadingTemplateRef)this.vcr.createEmbeddedView(this.loadingTemplateRef);else if(i){var o=this.cfr.resolveComponentFactory(i);this.vcr.createComponent(o)}this.elementsLoaderService.loadElement(this.url,t,this.isModule,null===(e=r)||void 0===e?void 0:e.hooks).then((function(){n.vcr.clear(),n.vcr.createEmbeddedView(n.template),n.cdr.markForCheck()})).catch((function(){n.vcr.clear();var e=r.errorComponent||s.errorComponent;if(n.errorTemplateRef)n.vcr.createEmbeddedView(n.errorTemplateRef),n.cdr.markForCheck();else if(e){var a=n.cfr.resolveComponentFactory(e);n.vcr.createComponent(a),n.cdr.markForCheck()}else console.error("@angular-extensions/elements - Loading of element <".concat(t,'> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element'))}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(r.Nb(r.O),r.Nb(r.L),r.Nb(t.a),r.Nb(r.j),r.Nb(r.h))},e.\u0275dir=r.Ib({type:e,selectors:[["","axLazyElement",""]],inputs:{url:["axLazyElement","url"],loadingTemplateRef:["axLazyElementLoadingTemplate","loadingTemplateRef"],errorTemplateRef:["axLazyElementErrorTemplate","errorTemplateRef"],isModule:["axLazyElementModule","isModule"]}}),e}()}}]);