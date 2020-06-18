(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(a["b"]);var r=n("0284"),i=n.n(r),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",variant:"dark"}},[n("div",{staticClass:"header"},[n("b-container",{staticClass:"header-container"},[n("h1",[e._v("Together we can end police violence in America")]),n("p",{staticClass:"subtitle"},[e._v("Contact your representatives and demand evidence-based change for police reform")]),n("b-form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.handleFindRepresentatives(t)}}},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{"label-for":"input-1"}},[n("div",{staticClass:"zipcode-input-container"},[n("b-form-input",{ref:"zipcode",staticClass:"zipcode-input",class:{"zipcode-input-error":e.zipcodeHasError},attrs:{id:"input-1",type:"number",required:"",placeholder:"Enter zipcode",variant:"dark",autocomplete:"postal-code"},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),e.loading?n("b-spinner",{staticClass:"zipcode-spinner",attrs:{label:"Loading..."}}):e._e()],1),e.zipcodeHasError?n("div",{staticClass:"zipcode-error"},[e._v("This zipcode does not exist. Try reentering your zipcode.")]):e._e(),n("b-button",{staticClass:"button-main",attrs:{variant:"light",size:"lg",type:"submit"}},[e._v("Find Your Representatives")])],1)],1)],1)],1)],1)],1)],1),e._.isEmpty(this.representatives)?e._e():n("b-container",{staticClass:"section rep-section"},[n("h2",{staticClass:"section-header",attrs:{id:"reps-header"}},[e._v("Representatives")]),e._l(e.representatives,(function(t){return n("div",{key:t.name},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"rep-container",attrs:{cols:"12",sm:"10",md:"8",lg:"6",tabindex:"false"},on:{click:function(n){return e.clickedContact(t)}}},[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("h4",{staticClass:"rep-name"},[e._v(e._s(t.name))]),n("h5",[e._v(e._s(t.officeName))]),n("h6",[e._v(e._s(t.emails?t.emails[0]:null))])]),n("b-col",{attrs:{cols:"0",sm:"1"}}),n("b-col",{attrs:{cols:"12",sm:"5"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"contact-button",attrs:{variant:"light"},on:{click:function(n){return e.clickedContact(t)}}},[e._v("Contact")])],1)],1)],1)],1)],1)}))],2),n("div",{staticClass:"section",class:{"top-border":!e._.isEmpty(this.representatives)}},[n("h2",{staticClass:"section-header",attrs:{id:"attributions-header"}},[e._v("Data & Attributions")]),e._m(0),n("b-button",{staticClass:"button-main",attrs:{href:"https://www.joincampaignzero.org/",variant:"light",size:"lg"},on:{click:e.C0ButtonClicked}},[e._v("Support Campaign Zero")])],1),e._m(1),n("b-modal",{attrs:{id:"contact-modal",scrollable:"",size:"lg",centered:""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v(" Contact "+e._s(e.selectedRepresentative.name)+" ")]},proxy:!0},{key:"modal-footer",fn:function(){return[e.selectedRepresentative.emails?n("b-button",{staticClass:"modal-button",attrs:{href:"mailto:"+e.selectedRepresentative.emails[0]+"?subject="+e.emailSubject+"&body="+e.emailBody,type:"submit"},on:{click:e.fireEmailGAEvent}},[n("b-icon",{attrs:{icon:"envelope"}}),e._v(" Email ")],1):e._e(),e.selectedRepresentative.phones?n("b-button",{staticClass:"modal-button",attrs:{href:"tel:+"+e.selectedRepresentative.phones},on:{click:e.firePhoneGAEvent}},[n("b-icon",{attrs:{icon:"phone"}}),e._v(" Call ")],1):e._e(),n("b-popover",{ref:"copy-paste-popover",attrs:{target:"copy-email-text-button",variant:"success",triggers:"click blur",placement:"top"}},[e._v(" Email text has been copied to your clipboard. ")]),n("b-button",{staticClass:"modal-button",attrs:{id:"copy-email-text-button"},on:{click:e.copyToClipboard}},[n("content-copy-icon")],1),e.repTweetURL?n("b-button",{staticClass:"modal-button",attrs:{href:e.repTweetURL,target:"_blank"}},[n("v-icon",{attrs:{name:"brands/twitter",scale:"1.2"}})],1):e._e()]},proxy:!0}])},[n("div",{attrs:{id:"email-body"}},[e._v(" To whom it may concern, "),n("br"),e._v(" "),n("br"),e._v(" I am a concerned representative in your district writing today to voice my support and encouragement for the continued improvement of policing in our jurisdiction. Over 1000 people are killed by police violence each year in America and we can effectively reduce this violence by implementing research-based policy solutions. "),n("br"),e._v(" "),n("br"),e._v(" These policies include: "),n("br"),e._v(" - Increasing the use of Body Worn Cameras (BWCs) "),n("br"),e._v(" - Increasing (or introducing) de-escalation training for police officers "),n("br"),e._v(" - Ending broken windows & for profit policing "),n("br"),e._v(" - Limiting the use of force used by police officers "),n("br"),e._v(" "),n("br"),e._v(" Campaign Zero maintains an agenda of recommended policy based on research found here: ("),n("a",{attrs:{href:"https://tinyurl.com/C0-Agenda"}},[e._v("https://tinyurl.com/C0-Agenda")]),e._v(") "),n("br"),e._v(" "),n("br"),e._v(" As a taxpayer, I whole-heartedly support strengthening or introducing these policies in our jurisdiction. It’s clear that in the near future these sorts of training, as well as the use of BWCs will be the standard for all jurisdictions in our country. I hope our jurisdiction can lead out in determining best practices and policies for the safety of all in our community. "),n("br"),e._v(" "),n("br"),e._v(" Thank you in advance for your time and have a good day! ")])]),n("b-modal",{attrs:{id:"thank-you-modal","content-class":"modal-content",size:"lg","hide-footer":""},scopedSlots:e._u([{key:"modal-header",fn:function(t){return[n("div",[e._v("Thank you for joining this movement.")]),n("close-icon")]}}])},[n("div",{attrs:{id:"thank-you-body"}},[n("p",[e._v("Together, with sustained pressure, we can make real change in policing.")]),n("p",[e._v("Please spread the word using the buttons below. It will maximize the impact of this messaging campaign.")]),n("b-row",{staticClass:"social-icons-row",attrs:{"align-h":"center"}},[n("v-icon",{staticStyle:{color:"rgb(43, 43, 43)"},attrs:{name:"brands/facebook-square",scale:"2.5"}}),n("v-icon",{staticStyle:{color:"rgb(43, 43, 43)"},attrs:{name:"brands/twitter",scale:"2.5"}})],1)],1)])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v(" Representative contact information sourced from the "),n("a",{attrs:{href:"https://developers.google.com/civic-information"}},[e._v("Google Civic Information API.")]),n("br"),e._v("Header image sourced from "),n("a",{attrs:{href:"https://unsplash.com/@koshuuu"}},[e._v("Koshu Kunii via Unsplash.")]),n("br"),e._v("Email details sourced from "),n("a",{attrs:{href:"https://www.joincampaignzero.org"}},[e._v("Campaign Zero.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-border section"},[n("p",{staticClass:"footer-text"},[e._v("Black Lives Matter.")]),n("p",{staticClass:"footer-text"},[e._v("Made in Washington, D.C. by "),n("a",{attrs:{href:"https://jprathipati.com"}},[e._v("Jayanth Prathipati")]),e._v(", "),n("a",{attrs:{href:"https://www.dominic-napoleon.com"}},[e._v("Dominic Napoleon")]),e._v(", and "),n("a",{attrs:{href:"https://github.com/smitto"}},[e._v(" Nathan Smith")])])])}],l=(n("96cf"),n("1da1")),u=(n("99af"),n("4de4"),n("b0c0"),n("b85c")),d=n("bc3a"),p=n.n(d),f=(n("caad"),n("45fc"),n("2532"),function(e,t){return t.some((function(t){return e.includes(t)}))}),m=function(e,t){if(e.channels){var n,o=Object(u["a"])(e.channels);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(h(t,a.type))return a.id}}catch(r){o.e(r)}finally{o.f()}}},h=function(e,t){return e.toLowerCase()==t.toLowerCase()},v=function(e,t,n){return e=encodeURI(e),t=String(t),n=encodeURI(n),"https://twitter.com/intent/tweet?text=".concat(e,"&hashtags=").concat(t,"&url=").concat(n)},b="https://vlne6trih8.execute-api.us-east-1.amazonaws.com",g=b+"/representatives",y=["Trump","Pence"],_=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,o,a,r,i,s,c,l,d,m,h,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n="".concat(g,"?address=").concat(t),e.next=5,p.a.get(n);case 5:o=e.sent.data,a=o.officials,r=o.offices,i=Object(u["a"])(r);try{for(i.s();!(s=i.n()).done;){c=s.value,l=Object(u["a"])(c.officialIndices);try{for(l.s();!(d=l.n()).done;)m=d.value,a[m].officeName=c.name}catch(b){l.e(b)}finally{l.f()}}}catch(b){i.e(b)}finally{i.f()}return a=a.filter((function(e){return!f(e.name,y)})),h=a.filter((function(e){return e.emails})),v=a.filter((function(e){return!e.emails})),e.abrupt("return",h.concat(v));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n("a344"),C=n("f13c"),k=n.n(C),A={name:"App",mounted:function(){this.$refs.zipcode.$el.focus()},computed:{repTweetURL:function(){var e=m(this.selectedRepresentative,"twitter");if(!e)return null;var t="@".concat(e," lorem ipsum");return v(t,"BlackLivesMatter","https://www.messageofprotest.com")}},methods:{handleFindRepresentatives:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.zipcode.$el.blur(),this.$ga.event("contact","click","clicked find representatives"),e.prev=2,this.loading=!0,e.next=6,_(this.zipcode);case 6:this.representatives=e.sent,this.zipcodeHasError=!1,this.$nextTick((function(){k.a.scrollTo("#reps-header")})),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),this.representatives={},this.zipcodeHasError=!0;case 15:this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),clickedContact:function(e){this.selectedRepresentative=e},copyToClipboard:function(){var e=this;setTimeout((function(){return e.$refs["copy-paste-popover"].$emit("close")}),5e3),this.$ga.event("copy","click","user copied message text");var t=document.createRange();t.selectNode(document.getElementById("email-body")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges()},fireEmailGAEvent:function(){this.$ga.event("email","click","user emailed representative")},firePhoneGAEvent:function(){this.$ga.event("phone","click","user phoned representative")},C0ButtonClicked:function(){this.$ga.event("C0","click","user clicked Campaign Zero link")},makeToast:function(){this.$bvToast.toast("Email text copied to clipboard.",{variant:"success","no-close-button":!0,solid:!0})}},data:function(){return{zipcode:"",zipcodeHasError:!1,representatives:{},selectedRepresentative:{name:"Placeholder",emails:[],phones:[]},emailSubject:w.subject,emailBody:w.content,copyBody:decodeURIComponent(w.content),loading:!1}}},j=A,x=(n("5c0b"),n("2877")),z=Object(x["a"])(j,s,c,!1,null,null,null),R=z.exports,E=n("b1e0"),T=n("2ef0"),I=n.n(T),O=(n("8a46"),n("1e91"),n("0874")),D=n("7eb5"),S=n("3c43");o["default"].component("close-icon",D["a"]),o["default"].component("content-copy-icon",S["a"]),o["default"].component("v-icon",O["a"]),o["default"].use(k.a,{offset:-20}),o["default"].use(a["a"]),o["default"].use(E["a"]),o["default"].config.productionTip=!1,o["default"].use(i.a,{id:"UA-169344376-1"}),o["default"].set(o["default"].prototype,"_",I.a),new o["default"]({render:function(e){return e(R)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"9c0c":function(e,t,n){},a344:function(e){e.exports=JSON.parse('{"subject":"Citizen voicing support to end police brutality","content":"To%20whom%20it%20may%20concern%2C%20%0D%0A%0D%0AI%20am%20a%20concerned%20representative%20in%20your%20district%20writing%20today%20to%20voice%20my%20support%20and%20encouragement%20for%20the%20continued%20improvement%20of%20policing%20in%20our%20jurisdiction.%20Over%201000%20people%20are%20killed%20by%20police%20violence%20each%20year%20in%20America%20and%20we%20can%20effectively%20reduce%20this%20violence%20by%20implementing%20research-based%20policy%20solutions.%20%0D%0A%0D%0AThese%20policies%20include%3A%20%0D%0A-%20Increasing%20the%20use%20of%20Body%20Worn%20Cameras%20(BWCs)%20%0D%0A-%20Increasing%20(or%20introducing)%20de-escalation%20training%20for%20police%20officers%20%0D%0A-%20Ending%20broken%20windows%20%26%20for%20profit%20policing%20%0D%0A-%20Limiting%20the%20use%20of%20force%20used%20by%20police%20officers%20%0D%0A%0D%0ACampaign%20Zero%20maintains%20an%20agenda%20of%20recommended%20policy%20based%20on%20research%20found%20here%3A%20(https%3A%2F%2Ftinyurl.com%2FC0-Agenda)%20%0D%0A%0D%0AAs%20a%20taxpayer%2C%20I%20whole-heartedly%20support%20strengthening%20or%20introducing%20these%20policies%20in%20our%20jurisdiction.%20It%E2%80%99s%20clear%20that%20in%20the%20near%20future%20these%20sorts%20of%20training%2C%20as%20well%20as%20the%20use%20of%20BWCs%20will%20be%20the%20standard%20for%20all%20jurisdictions%20in%20our%20country.%20I%20hope%20our%20jurisdiction%20can%20lead%20out%20in%20determining%20best%20practices%20and%20policies%20for%20the%20safety%20of%20all%20in%20our%20community.%20%0D%0A%0D%0AThank%20you%20in%20advance%20for%20your%20time%20and%20have%20a%20good%20day!"}')}});
//# sourceMappingURL=app.041e804b.js.map