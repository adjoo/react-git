"use strict";(self.webpackChunkreact_new=self.webpackChunkreact_new||[]).push([[391],{1391:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});a(2791);var n=a(2807),i="Dialogs_dialogs__OHjUy",t="Dialogs_dialogsItems__jmm9s",o="Dialogs_dialogItem__D0t7-",l="Dialogs_dialogActiveItem__qRomZ",g="Dialogs_dialogMessagesWrapper__-+EW8",d="Dialogs_dialogMessage__fVReC",r=a(184),c=function(e){return(0,r.jsx)("div",{className:d,children:e.message})},m=a(1523),u=function(e){return(0,r.jsx)(m.OL,{to:e.path,className:o,activeClassName:l,children:e.name})},_=a(6139),f=a(704),h=a(323),j=a(9086),x=(0,h.D)(50),p=(0,f.Z)({form:"sendMessageForm"})((function(e){return(0,r.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,r.jsx)(_.Z,{component:j.gx,name:"newMessageBody",validate:[h.l,x],placeholder:"type here..."}),(0,r.jsx)("button",{children:"Send"})]})})),D=function(e){var s=e.dialogs.map((function(e){return(0,r.jsx)(u,{name:e.name,path:"dialogs/".concat(e.id)})})),a=e.messages.map((function(e){return(0,r.jsx)(c,{message:e.message})}));return(0,r.jsxs)("div",{className:i,children:[(0,r.jsx)("div",{className:t,children:s}),(0,r.jsx)("div",{className:g,children:a}),(0,r.jsx)(p,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},v=a(364),M=a(97),w=a(1548),b=(0,M.qC)((0,v.$j)((function(e){return{dialogs:e.dialogsPage.dialogsData,messages:e.dialogsPage.messagesData,newMessageText:e.dialogsPage.newMessageText}}),{sendMessage:n.b}),w.D)(D)}}]);
//# sourceMappingURL=391.00646ee4.chunk.js.map