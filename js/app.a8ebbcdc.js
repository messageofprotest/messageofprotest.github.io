(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["b"]);var i=n("0284"),o=n.n(i),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",variant:"dark"}},[n("div",{staticClass:"header"},[n("b-container",{staticClass:"header-container"},[n("h1",[e._v("Together we can end police violence in America.")]),n("p",{staticClass:"subtitle"},[e._v("Contact your representatives and demand evidence-based change for police reform")]),n("b-form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.handleFindRepresentatives(t)}}},[n("b-container",[n("b-row",{staticClass:"justify-content-center"},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("b-form-group",{attrs:{"label-for":"input-1"}},[n("div",{staticClass:"zipcode-input-container"},[n("b-form-input",{ref:"zipcode",staticClass:"zipcode-input",class:{"zipcode-input-error":e.zipcodeHasError},attrs:{id:"input-1",type:"number",required:"",placeholder:"Enter zipcode",variant:"dark",autocomplete:"postal-code"},model:{value:e.zipcode,callback:function(t){e.zipcode=t},expression:"zipcode"}}),e.loading?n("b-spinner",{staticClass:"zipcode-spinner",attrs:{label:"Loading..."}}):e._e()],1),e.zipcodeHasError?n("div",{staticClass:"zipcode-error"},[e._v(" This zipcode does not exist. Try reentering your zipcode. ")]):e._e(),n("b-button",{staticClass:"button-main",attrs:{variant:"light",size:"lg",type:"submit"}},[e._v(" Find Your Representatives ")])],1)],1)],1)],1)],1)],1)],1),e._.isEmpty(this.representatives)?e._e():n("b-container",{staticClass:"section rep-section"},[n("h2",{staticClass:"section-header",attrs:{id:"reps-header"}},[e._v("Representatives")]),e._l(e.representatives,(function(t){return n("div",{key:t.name},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{staticClass:"rep-container",attrs:{cols:"12",sm:"10",md:"8",lg:"6"}},[n("b-row",{attrs:{"align-v":"center"}},[n("b-col",{attrs:{cols:"12",sm:"6"}},[n("h4",{staticClass:"rep-name"},[e._v(e._s(t.name))]),n("h5",[e._v(e._s(t.officeName))]),n("h6",[e._v(e._s(t.emails?t.emails[0]:null))])]),n("b-col",{attrs:{cols:"0",sm:"1"}}),n("b-col",{attrs:{cols:"12",sm:"5"}},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.contact-modal",modifiers:{"contact-modal":!0}}],staticClass:"contact-button",attrs:{variant:"light"},on:{click:function(n){return e.clickedContact(t)}}},[e._v(" Contact ")])],1)],1)],1)],1)],1)}))],2),n("div",{staticClass:"section",class:{"top-border":!e._.isEmpty(this.representatives)}},[n("h2",{staticClass:"section-header",attrs:{id:"attributions-header"}},[e._v("Data & Attributions")]),e._m(0),n("b-button",{staticClass:"button-main",attrs:{href:"https://www.joincampaignzero.org/",variant:"light",size:"lg"}},[e._v("Support Campaign Zero")])],1),e._m(1),n("b-modal",{attrs:{id:"contact-modal",title:"Contact "+e.selectedRepresentative.name,"hide-footer":""}},[n("div",{attrs:{id:"email-body"}},[e._v(e._s(e.copyBody))]),n("div",{staticClass:"m-footer"},[e.selectedRepresentative.emails?n("b-button",{staticClass:"modal-button",attrs:{href:"mailto:"+e.selectedRepresentative.emails[0]+"?subject="+e.emailSubject+"&body="+e.emailBody,type:"submit"}},[n("b-icon",{attrs:{icon:"envelope"}}),e._v(" Email")],1):e._e(),e.selectedRepresentative.phones?n("b-button",{staticClass:"modal-button",attrs:{href:"tel:+"+e.selectedRepresentative.phones}},[n("b-icon",{attrs:{icon:"phone"}}),e._v(" "+e._s(e.selectedRepresentative.phones[0]))],1):e._e(),n("b-button",{staticClass:"modal-button",on:{click:e.copyToClipboard}},[n("b-icon",{attrs:{icon:"paperclip"}})],1)],1)])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[e._v("Representative contact information sourced from the "),n("a",{attrs:{href:"https://developers.google.com/civic-information"}},[e._v("Google Civic Information API.")]),n("br"),e._v(" Header image sourced from "),n("a",{attrs:{href:"https://unsplash.com/@koshuuu"}},[e._v("Koshu Kunii via Unsplash.")]),n("br"),e._v(" Email details sourced from "),n("a",{attrs:{href:"https://www.joincampaignzero.org"}},[e._v("Campaign Zero.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-border section"},[n("p",{staticClass:"footer-text"},[e._v("Black Lives Matter.")]),n("p",{staticClass:"footer-text"},[e._v("Made in Washington, D.C. by @jayprat95, @slurpee123abc, and @smitto")])])}],l=(n("96cf"),n("1da1")),u=(n("99af"),n("4de4"),n("b0c0"),n("b85c")),d=n("bc3a"),p=n.n(d),f=(n("caad"),n("45fc"),n("2532"),function(e,t){return t.some((function(t){return e.includes(t)}))}),m="https://vlne6trih8.execute-api.us-east-1.amazonaws.com",h=m+"/representatives",v=["Trump","Pence"],b=function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,s,c,l,d,m,b,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return n="".concat(h,"?address=").concat(t),e.next=5,p.a.get(n);case 5:r=e.sent.data,a=r.officials,i=r.offices,o=Object(u["a"])(i);try{for(o.s();!(s=o.n()).done;){c=s.value,l=Object(u["a"])(c.officialIndices);try{for(l.s();!(d=l.n()).done;)m=d.value,a[m].officeName=c.name}catch(y){l.e(y)}finally{l.f()}}}catch(y){o.e(y)}finally{o.f()}return a=a.filter((function(e){return!f(e.name,v)})),b=a.filter((function(e){return e.emails})),g=a.filter((function(e){return!e.emails})),e.abrupt("return",b.concat(g));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n("a344"),y=n("f13c"),_=n.n(y),C={name:"App",mounted:function(){this.$refs.zipcode.$el.focus()},methods:{handleFindRepresentatives:function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$refs.zipcode.$el.blur(),this.$ga.event("contact","click","clicked find representatives"),e.prev=2,this.loading=!0,e.next=6,b(this.zipcode);case 6:this.representatives=e.sent,this.zipcodeHasError=!1,this.$nextTick((function(){_.a.scrollTo("#reps-header")})),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](2),this.representatives={},this.zipcodeHasError=!0;case 15:this.loading=!1;case 16:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}(),clickedContact:function(e){this.selectedRepresentative=e},copyToClipboard:function(){var e=document.createRange();e.selectNode(document.getElementById("email-body")),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges()}},data:function(){return{zipcode:"",zipcodeHasError:!1,representatives:{},selectedRepresentative:{name:"Placeholder",emails:[],phones:[]},emailSubject:g.subject,emailBody:g.content,copyBody:decodeURIComponent(g.content),loading:!1}}},w=C,A=(n("5c0b"),n("2877")),D=Object(A["a"])(w,s,c,!1,null,null,null),j=D.exports,z=n("b1e0"),R=n("2ef0"),E=n.n(R);r["default"].use(_.a,{offset:-20}),r["default"].use(a["a"]),r["default"].use(z["a"]),r["default"].config.productionTip=!1,r["default"].use(o.a,{id:"UA-169344376-1"}),r["default"].set(r["default"].prototype,"_",E.a),new r["default"]({render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){},a344:function(e){e.exports=JSON.parse('{"subject":"Citizen voicing support to end police brutality","content":"To%20whom%20it%20may%20concern%2C%20%0D%0A%0D%0AMy%20name%20is%20%7B%7BINSERT%20NAME%20HERE%7D%7D%20and%20I%20am%20a%20concerned%20representative%20in%20your%20district%20writing%20today%20to%20voice%20my%20support%20and%20encouragement%20for%20the%20continued%20improvement%20of%20policing%20in%20our%20jurisdiction.%20Over%201000%20people%20are%20killed%20by%20police%20violence%20each%20year%20in%20America%20and%20we%20can%20effectively%20reduce%20this%20violence%20by%20implementing%20research-based%20policy%20solutions.%20%0D%0A%0D%0AThese%20policies%20include%3A%20%0D%0A-%20Increasing%20the%20use%20of%20Body%20Worn%20Cameras%20(BWCs)%0D%0A-%20Increasing%20(or%20introducing)%20de-escalation%20training%20for%20police%20officers%20%0D%0A-%20Ending%20broken%20windows%20%26%20for%20profit%20policing%20%0D%0A-%20Limiting%20the%20use%20of%20force%20used%20by%20police%20officers%20%0D%0A%0D%0ACampaign%20Zero%20maintains%20an%20agenda%20of%20recommended%20policy%20based%20on%20research%20found%20here%3A%20(https%3A%2F%2Ftinyurl.com%2FC0-Agenda)%20%0D%0A%0D%0A%0D%0AAs%20a%20taxpayer%2C%20I%20whole-heartedly%20support%20strengthening%20or%20introducing%20these%20policies%20in%20our%20jurisdiction.%20It%E2%80%99s%20clear%20that%20in%20the%20near%20future%20these%20sorts%20of%20training%2C%20as%20well%20as%20the%20use%20of%20BWCs%20will%20be%20the%20standard%20for%20all%20jurisdictions%20in%20our%20country.%20I%20hope%20our%20jurisdiction%20can%20lead%20out%20in%20determining%20best%20practices%20and%20policies%20for%20the%20safety%20of%20all%20in%20our%20community.%20%0D%0A%0D%0A%7B%7BConsider%20adding%20any%20anecdotes%20or%20additional%20information%20here.%20It%20helps%20grab%20the%20attention%20of%20your%20representatives%7D%7D%0D%0A%0D%0AThank%20you%20in%20advance%20for%20your%20time%20and%20have%20a%20good%20day!%0D%0A%7B%7BINSERT%20NAME%20HERE%7D%7D%0D%0A"}')}});
//# sourceMappingURL=app.a8ebbcdc.js.map