(function(e){function t(t){for(var i,r,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var i=n("2b0e"),o=n("5f5b");n("ab8b"),n("2dd8");i["default"].use(o["b"]);var a=n("0284"),r=n.n(a),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",variant:"dark"}},[n("div",{staticClass:"header"},[n("b-container",{staticClass:"header-container"},[n("h1",[e._v("Every voice can help oppose police violence in America")]),n("p",{staticClass:"subtitle"},[e._v("Contact your representatives and demand evidence-based change for police reform")]),n("b-form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.handleFindRepresentatives(t)}}},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{"label-for":"input-1"}},[n("div",{staticClass:"zipcode-input-container"},[n("b-form-input",{ref:"zipcode",staticClass:"zipcode-input",class:{"zipcode-input-error":e.zipcodeHasError},attrs:{id:"input-1",type:"number",required:"",placeholder:"Enter zipcode",variant:"dark",autocomplete:"postal-code"},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),e.loading?n("b-spinner",{staticClass:"zipcode-spinner",attrs:{label:"Loading..."}}):e._e()],1),e.zipcodeHasError?n("div",{staticClass:"zipcode-error"},[e._v("This zipcode does not exist. Try reentering your zipcode.")]):e._e(),n("b-button",{staticClass:"button-main",attrs:{variant:"light",size:"lg",type:"submit"}},[e._v("Find Your Representatives")])],1)],1)],1)],1)],1)],1)],1),e._.isEmpty(this.representatives)?e._e():n("b-container",{staticClass:"section rep-section"},[n("h2",{staticClass:"section-header",attrs:{id:"reps-header"}},[e._v("Representatives")]),e._l(e.representatives,(function(t){return n("div",{key:t.name},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"rep-container",attrs:{cols:"12",sm:"10",md:"8",lg:"6",tabindex:"false"},on:{click:function(n){return e.clickedContact(t)}}},[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("h4",{staticClass:"rep-name"},[e._v(e._s(t.name))]),n("h5",[e._v(e._s(t.officeName))]),n("h6",[e._v(e._s(t.emails?t.emails[0]:null))])]),n("b-col",{attrs:{cols:"0",sm:"1"}}),n("b-col",{attrs:{cols:"12",sm:"5"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"contact-button",attrs:{variant:"light"},on:{click:function(n){return e.clickedContact(t)}}},[e._v("Contact")])],1)],1)],1)],1)],1)}))],2),n("div",{staticClass:"section",class:{"top-border":!e._.isEmpty(this.representatives)}},[n("h2",{staticClass:"section-header",attrs:{id:"attributions-header"}},[e._v("Data & Attributions")]),e._m(0),n("b-button",{staticClass:"button-main",attrs:{href:"https://www.joincampaignzero.org/",target:"_blank",variant:"light",size:"lg"},on:{click:e.C0ButtonClicked}},[e._v("Support Campaign Zero")])],1),n("div",{staticClass:"top-border section"},[n("p",{staticClass:"footer-text"},[e._v("Black Lives Matter.")]),e._m(1),n("p",{staticClass:"footer-text"},[n("a",{attrs:{href:"https://github.com/messageofprotest/messageofprotest",target:"_blank"}},[n("v-icon",{attrs:{name:"brands/github",scale:"1.5"}})],1)])]),n("b-modal",{attrs:{id:"contact-modal",scrollable:"",size:"lg",centered:""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[e._v(" Contact "+e._s(e.selectedRepresentative.name)+" ")]},proxy:!0},{key:"default",fn:function(){return[n("div",{attrs:{id:"email-tip"}},[n("span",{staticClass:"icon"},[n("v-icon",{attrs:{name:"regular/lightbulb",scale:"1.2"}})],1),e._v(" Tip: Customize this template email to increase visibility from your representative ")]),n("div",{attrs:{id:"email-body"}},[e._v(" To whom it may concern, "),n("br"),e._v(" "),n("br"),e._v(" I am a concerned representative in your district writing today to voice my support and encouragement for the continued improvement of policing in our jurisdiction. I was shocked to see the brutal murder of George Floyd, and want to prevent such tragedies from occurring in the future. Over 1000 people are killed by police violence each year in America, and we can effectively reduce this violence by implementing research-based policy solutions. "),n("br"),e._v(" "),n("br"),e._v(" These policies include: "),n("br"),e._v(" - Increasing (or introducing) de-escalation training for police officers "),n("br"),e._v(" Currently, police officers only spend 8 hours on conflict de-escalation training, and this has been shown to reduce use of force. After introducing de-escalation training, the Dallas Police Department saw an 18% drop in use of force. "),n("br"),e._v(" "),n("br"),e._v(" - Increasing the use of Body Worn Cameras (BWCs) "),n("br"),e._v(" Introducing BWC’s also helps reduce force and helps increase accountability. Nearly every case where a police officer was charged with a crime for killing a civilian in 2015 relied on video evidence showing the officer's actions. "),n("br"),e._v(" "),n("br"),e._v(" - Reduce the size of the police force "),n("br"),e._v(" Reducing the size of the police department and reinvesting that budget can help increase budgets for additional support systems for communities such as social workers, emergency medical technicians, conflict resolution specialists, restorative justice teams, and other community-based professionals. "),n("br"),e._v(" "),n("br"),e._v(" - Limiting the use of force used by police officers "),n("br"),e._v(" Adding policies around the restricting the use of force by police officers has been shown to significantly reduce killings in those departments. Introducing these policies has been shown to reduce killings by up to 72%. "),n("br"),e._v(" "),n("br"),e._v(" As a taxpayer, I whole-heartedly support strengthening or introducing these policies in our jurisdiction. It’s clear that in the near future these sorts of training, as well as the use of BWCs, will be the standard for all jurisdictions in our country. I hope our jurisdiction can lead in determining best practices and policies for the safety of all in our community. "),n("br"),e._v(" "),n("br"),e._v(" Thank you for your time and consideration! "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" Sources: "),n("br"),e._v(" - "),n("a",{attrs:{href:"http://fivethirtyeight.com/features/a-chicago-cop-is-the-latest-to-be-charged-using-video-evidence/"}},[e._v("http://fivethirtyeight.com/features/a-chicago-cop-is-the-latest-to-be-charged-using-video-evidence/")]),e._v(" "),n("br"),e._v(" - "),n("a",{attrs:{href:"https://www.joincampaignzero.org "}},[e._v("Campaign Zero ")]),e._v(" "),n("br"),e._v(" - "),n("a",{attrs:{href:"http://govred.com/blog/deescalation-training-state-requirements/"}},[e._v("http://govred.com/blog/deescalation-training-state-requirements/")])])]},proxy:!0},{key:"modal-footer",fn:function(){return[n("div",{staticClass:"button-list"},[e.selectedRepresentative.emails?n("b-button",{staticClass:"modal-button",attrs:{href:"mailto:"+e.selectedRepresentative.emails[0]+"?subject="+e.emailSubject+"&body="+e.emailBody,type:"submit"},on:{click:e.fireEmailGAEvent}},[n("b-icon",{attrs:{icon:"envelope"}}),e._v(" Email ")],1):e._e(),e.selectedRepresentative.phones?n("b-button",{staticClass:"modal-button",attrs:{href:"tel:+1"+e.selectedRepresentative.phones},on:{click:e.firePhoneGAEvent}},[n("b-icon",{attrs:{icon:"phone"}}),e._v(" Call ")],1):e._e(),n("b-popover",{ref:"copy-paste-popover",attrs:{target:"copy-email-text-button",triggers:"click blur",placement:"top"}},[e._v(" Email content copied! ")]),n("b-button",{staticClass:"modal-button",attrs:{id:"copy-email-text-button"},on:{click:e.copyToClipboard}},[n("content-copy-icon")],1),e.repTweetURL?n("b-button",{staticClass:"modal-button",attrs:{href:e.repTweetURL,target:"_blank"},on:{click:e.tweetClicked}},[n("v-icon",{attrs:{name:"brands/twitter",scale:"1.2"}})],1):e._e()],1)]},proxy:!0}])}),n("b-modal",{attrs:{id:"thank-you-modal","content-class":"modal-content",size:"lg","hide-footer":""},scopedSlots:e._u([{key:"modal-header",fn:function(t){return[n("div",[e._v("Thank you for joining this movement.")]),n("close-icon")]}}])},[n("div",{attrs:{id:"thank-you-body"}},[n("p",[e._v("Together, with sustained pressure, we can make real change in policing.")]),n("p",[e._v("Please spread the word using the links below. It will maximize the impact of this messaging campaign.")]),n("b-row",{staticClass:"social-icons-row",attrs:{"align-h":"center"}},[n("v-icon",{staticStyle:{color:"rgb(43, 43, 43)"},attrs:{name:"brands/facebook-square",scale:"2.5"}}),n("v-icon",{staticStyle:{color:"rgb(43, 43, 43)"},attrs:{name:"brands/twitter",scale:"2.5"}})],1)],1)])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v(" Representative contact information sourced from the "),n("a",{attrs:{href:"https://developers.google.com/civic-information",target:"_blank"}},[e._v("Google Civic Information API.")]),n("br"),e._v("Header image sourced from "),n("a",{attrs:{href:"https://unsplash.com/@koshuuu",target:"_blank"}},[e._v("Koshu Kunii via Unsplash.")]),n("br"),e._v("Email details sourced from "),n("a",{attrs:{href:"https://www.joincampaignzero.org",target:"_blank"}},[e._v("Campaign Zero.")]),e._v(" "),n("br"),e._v(" For feedback or questions, contact "),n("a",{attrs:{href:"mailto:messageofprotest@gmail.com?subject=feedback"}},[e._v("this email. ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"footer-text"},[e._v("Made in Washington, D.C. by "),n("a",{attrs:{href:"https://jprathipati.com",target:"_blank"}},[e._v("Jayanth Prathipati")]),e._v(", "),n("a",{attrs:{href:"https://www.dominic-napoleon.com",target:"_blank"}},[e._v("Dominic Napoleon")]),e._v(", and "),n("a",{attrs:{href:"https://github.com/smitto",target:"_blank"}},[e._v("Nathan Smith")])])}],l=(n("96cf"),n("1da1")),u=(n("99af"),n("4de4"),n("b0c0"),n("b85c")),d=n("bc3a"),p=n.n(d),f=(n("caad"),n("45fc"),n("2532"),function(e,t){return t.some((function(t){return e.includes(t)}))}),h=function(e,t){if(e.channels){var n,i=Object(u["a"])(e.channels);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(m(t,o.type))return o.id}}catch(a){i.e(a)}finally{i.f()}}},m=function(e,t){return e.toLowerCase()==t.toLowerCase()},v=function(e,t){return e=encodeURI(e),t=String(t),"https://twitter.com/intent/tweet?text=".concat(e,"&hashtags=").concat(t)},b=window.webpackHotUpdate,g="UA-169344376-1",y="https://vlne6trih8.execute-api.us-east-1.amazonaws.com",_=y+"/representatives",w=["Trump","Pence"],k=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,i,o,a,r,s,c,l,d,h,m,v;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n="".concat(_,"?address=").concat(t),e.next=5,p.a.get(n);case 5:i=e.sent.data,o=i.officials,a=i.offices,r=Object(u["a"])(a);try{for(r.s();!(s=r.n()).done;){c=s.value,l=Object(u["a"])(c.officialIndices);try{for(l.s();!(d=l.n()).done;)h=d.value,o[h].officeName=c.name}catch(b){l.e(b)}finally{l.f()}}}catch(b){r.e(b)}finally{r.f()}return o=o.filter((function(e){return!f(e.name,w)})),m=o.filter((function(e){return e.emails})),v=o.filter((function(e){return!e.emails})),e.abrupt("return",m.concat(v));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=n("a344"),A=n("f13c"),j=n.n(A),D={name:"App",created:function(){this.handleGoogleAnalyticsStartup()},mounted:function(){this.$refs.zipcode.$el.focus()},computed:{repTweetURL:function(){var e=h(this.selectedRepresentative,"twitter");if(!e)return null;var t="@".concat(e," Please consider implementing policies outlined by: joincampaignzero.org (via: messageofprotest.com)");return v(t,"BlackLivesMatter")}},methods:{autosubmitZip:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:5==String(this.zipcode).length&&this.handleFindRepresentatives();case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleFindRepresentatives:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.zipcode.$el.blur(),this.$ga.event("contact","click","clicked find representatives"),e.prev=2,this.loading=!0,e.next=6,k(this.zipcode);case 6:this.representatives=e.sent,this.zipcodeHasError=!1,this.$nextTick((function(){j.a.scrollTo("#reps-header")})),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),this.representatives={},this.zipcodeHasError=!0;case 15:this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),clickedContact:function(e){this.$ga.event("select","click","selected a representative from the list"),this.selectedRepresentative=e},copyToClipboard:function(){var e=this;setTimeout((function(){return e.$refs["copy-paste-popover"].$emit("close")}),5e3),this.$ga.event("copy","click","user copied message text");var t=document.createRange();t.selectNode(document.getElementById("email-body")),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges()},handleGoogleAnalyticsStartup:function(){var e=this,t=this.$route.query.enable_google_analytics,n="".concat(window.location.origin,"/#/?enable_google_analytics");"true"===t?(this.$bvToast.toast("To disable, go to ".concat(n,"=false"),{title:"Google Analystics Enabled"}),setTimeout((function(){return e.$ga.enable()}),1e3),console.log("set the disabler to false"),this.$cookies.set("enable_google_analytics","true")):"false"===t&&(setTimeout((function(){return e.$ga.disable()}),1e3),console.log("set the disabler to true"),this.$cookies.set("enable_google_analytics","false")),"false"==this.$cookies.get("enable_google_analytics")&&this.$bvToast.toast("To re-enable, go to ".concat(n,"=true"),{title:"Google Analystics Disabled"})},fireEmailGAEvent:function(){this.$ga.event("email","click","user emailed representative")},firePhoneGAEvent:function(){this.$ga.event("phone","click","user phoned representative")},C0ButtonClicked:function(){this.$ga.event("C0","click","user clicked Campaign Zero link")},tweetClicked:function(){this.$ga.event("tweet","click","user tweeted representative")}},data:function(){return{zipcode:"",zipcodeHasError:!1,representatives:{},selectedRepresentative:{name:"Placeholder",emails:[],phones:[]},emailSubject:C.subject,emailBody:C.content,copyBody:decodeURIComponent(C.content),loading:!1}}},z=D,x=(n("5c0b"),n("2877")),R=Object(x["a"])(z,s,c,!1,null,null,null),T=R.exports,$=n("b1e0"),E=n("2ef0"),I=n.n(E),S=(n("8a46"),n("1e91"),n("9d5c"),n("3550"),n("0874")),O=n("7eb5"),F=n("3c43"),P=n("2b27"),B=n.n(P),G=n("8c4f");i["default"].component("close-icon",O["a"]),i["default"].component("content-copy-icon",F["a"]),i["default"].component("v-icon",S["a"]),i["default"].use(j.a,{offset:-20}),i["default"].use(o["a"]),i["default"].use($["a"]),i["default"].use(B.a),i["default"].use(G["a"]),i["default"].config.productionTip=!1;var L={id:g},N="false"===i["default"].$cookies.get("enable_google_analytics");(N||b)&&(L.disabled=!0),i["default"].use(r.a,L),i["default"].set(i["default"].prototype,"_",I.a),new i["default"]({render:function(e){return e(T)},router:new G["a"]}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),o=n.n(i);o.a},"9c0c":function(e,t,n){},a344:function(e){e.exports=JSON.parse('{"subject":"Citizen voicing support to end police brutality","content":"To%20whom%20it%20may%20concern%2C%0D%0A%0D%0AI%20am%20a%20concerned%20representative%20in%20your%20district%20writing%20today%20to%20voice%20my%20support%20and%20encouragement%20for%20the%20continued%20improvement%20of%20policing%20in%20our%20jurisdiction.%20I%20was%20shocked%20to%20see%20the%20brutal%20murder%20of%20George%20Floyd%2C%20and%20want%20to%20prevent%20such%20tragedies%20from%20occurring%20in%20the%20future.%20Over%201000%20people%20are%20killed%20by%20police%20violence%20each%20year%20in%20America%2C%20and%20we%20can%20effectively%20reduce%20this%20violence%20by%20implementing%20research-based%20policy%20solutions.%0D%0A%0D%0AThese%20policies%20include%3A%0D%0A%0D%0A-%20Increasing%20(or%20introducing)%20de-escalation%20training%20for%20police%20officers%0D%0ACurrently%2C%20police%20officers%20only%20spend%208%20hours%20on%20conflict%20de-escalation%20training%2C%20and%20this%20has%20been%20shown%20to%20reduce%20use%20of%20force.%20After%20introducing%20de-escalation%20training%2C%20the%20Dallas%20Police%20Department%20saw%20an%2018%25%20drop%20in%20use%20of%20force.%0D%0A%0D%0A-%20Increasing%20the%20use%20of%20Body%20Worn%20Cameras%20(BWCs)%0D%0AIntroducing%20BWC%E2%80%99s%20also%20helps%20reduce%20force%20and%20helps%20increase%20accountability.%20Nearly%20every%20case%20where%20a%20police%20officer%20was%20charged%20with%20a%20crime%20for%20killing%20a%20civilian%20in%202015%20relied%20on%20video%20evidence%20showing%20the%20officer\'s%20actions.%20%0D%0A%0D%0A-%20Reduce%20the%20size%20of%20the%20police%20force%20%0D%0AReducing%20the%20size%20of%20the%20police%20department%20and%20reinvesting%20that%20budget%20can%20help%20increase%20budgets%20for%20additional%20support%20systems%20for%20communities%20such%20as%20social%20workers%2C%20emergency%20medical%20technicians%2C%20conflict%20resolution%20specialists%2C%20restorative%20justice%20teams%2C%20and%20other%20community-based%20professionals.%0D%0A%0D%0A-%20Limiting%20the%20use%20of%20force%20used%20by%20police%20officers%0D%0AAdding%20policies%20around%20the%20restricting%20the%20use%20of%20force%20by%20police%20officers%20has%20been%20shown%20to%20significantly%20reduce%20killings%20in%20those%20departments.%20Introducing%20these%20policies%20has%20been%20shown%20to%20reduce%20killings%20by%20up%20to%2072%25.%0D%0A%0D%0AAs%20a%20taxpayer%2C%20I%20whole-heartedly%20support%20strengthening%20or%20introducing%20these%20policies%20in%20our%20jurisdiction.%20It%E2%80%99s%20clear%20that%20in%20the%20near%20future%20these%20sorts%20of%20training%2C%20as%20well%20as%20the%20use%20of%20BWCs%2C%20will%20be%20the%20standard%20for%20all%20jurisdictions%20in%20our%20country.%20I%20hope%20our%20jurisdiction%20can%20lead%20in%20determining%20best%20practices%20and%20policies%20for%20the%20safety%20of%20all%20in%20our%20community.%0D%0A%0D%0AThank%20you%20for%20your%20time%20and%20consideration!%0D%0A%0D%0ASources%3A%20%0D%0Ahttp%3A%2F%2Ffivethirtyeight.com%2Ffeatures%2Fa-chicago-cop-is-the-latest-to-be-charged-using-video-evidence%2F%0D%0Ahttps%3A%2F%2Fwww.joincampaignzero.org%20%0D%0Ahttp%3A%2F%2Fgovred.com%2Fblog%2Fdeescalation-training-state-requirements%2F%20%0D%0A%0D%0A%0D%0A%20%0D%0A%0D%0A%0D%0A"}')}});
//# sourceMappingURL=app.8f445ba3.js.map