"use strict";(self.webpackChunkreact_new=self.webpackChunkreact_new||[]).push([[720],{3720:function(t,e,s){s.r(e),s.d(e,{default:function(){return Q}});var r=s(7853),n=s(4531),a=s(8932),i=s(2587),o=s(2791),u="Profile_root__rJnrk",l="MyPosts_title__ET8M0",d="MyPosts_area__zY9od",c="Post_item__aSPi7",p="Post_item__picture__dCVEp",f="Post_item__content__KMQZi",h=s(184),m=function(t){return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("div",{className:p,children:(0,h.jsx)("img",{src:"https://get.wallhere.com/photo/1500x900-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635343.jpg",alt:""})}),(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("p",{children:t.message}),(0,h.jsxs)("span",{children:["likes: ",t.likesCount]})]})]})},x=s(6139),j=s(704),v=s(323),_=s(9086),g=(0,v.D)(10),y=(0,j.Z)({form:"addNewPostForm"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(x.Z,{component:_.gx,validate:[v.l,g],name:"newPostText",placeholder:"type here..."})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),P=o.memo((function(t){var e=t.posts.map((function(t){return(0,h.jsx)(m,{message:t.message,likesCount:t.likesCount})}));return(0,h.jsxs)("div",{children:[(0,h.jsx)("h5",{className:l,children:"My Posts"}),(0,h.jsx)("div",{className:d,children:(0,h.jsx)(y,{onSubmit:function(e){t.addPost(e.newPostText)},new:!0})}),e]})})),S=s(6070),U=s(364),w=(0,U.$j)((function(t){return{posts:t.profilePage.postsData,newPostText:t.profilePage.newPostText}}),{addPost:S.q2})(P),I=s(3738),b="ProfileInfo_profile__wallpaper__QtbNe",k=s(2190);var N=s(2327);function z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var s=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=s){var r,n,a=[],i=!0,o=!1;try{for(s=s.call(t);!(i=(r=s.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){o=!0,n=u}finally{try{i||null==s.return||s.return()}finally{if(o)throw n}}return a}}(t,e)||(0,N.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var C="ProfileStatus_profileStatus__y8AMW",Z=function(t){var e=z((0,o.useState)(!1),2),s=e[0],r=e[1],n=z((0,o.useState)(t.status),2),a=n[0],i=n[1];(0,o.useEffect)((function(){i(t.status)}),[t.status]);return(0,h.jsxs)("div",{className:C,children:[(0,h.jsxs)("div",{children:["this user ID: ",t.profile.userId]}),(0,h.jsxs)("div",{children:[!s&&(0,h.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[a||"no status..."," "]}),s&&(0,h.jsx)("input",{value:a,autoFocus:!0,onBlur:function(){r(!1),t.updateUserStatus(a)},onChange:function(t){i(t.currentTarget.value)}})]})]})},T=["profile","status","authorizedUserId","updateUserStatus"],D=function(t){var e=t.profile,s=t.status,r=t.authorizedUserId,n=t.updateUserStatus;(0,I.Z)(t,T);return e?(0,h.jsxs)("div",{children:[(0,h.jsx)(Z,{authorizedUserId:r,profile:e,status:s,updateUserStatus:n}),(0,h.jsx)("div",{className:b,children:(0,h.jsx)("img",{src:e.photos.large,alt:"alt"})})]}):(0,h.jsx)(k.Z,{})},M=function(t){return(0,h.jsxs)("div",{className:u,children:[(0,h.jsx)(D,{authorizedUserId:t.authorizedUserId,profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),(0,h.jsx)(w,{})]})},A=s(1045),E=s(97),q=s(1548),F=function(t){(0,a.Z)(s,t);var e=(0,i.Z)(s);function s(){return(0,r.Z)(this,s),e.apply(this,arguments)}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getUserStatus(t)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return(0,h.jsx)(M,{authorizedUserId:this.props.authorizedUserId,status:this.props.status,updateUserStatus:this.props.updateUserStatus,profile:this.props.profile})}}]),s}(o.Component),Q=(0,E.qC)((0,U.$j)((function(t){return{authorizedUserId:t.auth.userId,profile:t.profilePage.profile,status:t.profilePage.profileStatus}}),{getProfile:S.Ai,getUserStatus:S.Tq,updateUserStatus:S.OL}),q.D,A.EN)(F)}}]);
//# sourceMappingURL=720.dd1afe5b.chunk.js.map