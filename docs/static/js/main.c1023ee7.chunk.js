(this["webpackJsonpreact-new"]=this["webpackJsonpreact-new"]||[]).push([[0],{131:function(e,t,n){e.exports={item:"NewsItem_item__1XCNr"}},133:function(e,t,n){e.exports={root:"Profile_root__2T93R"}},134:function(e,t,n){e.exports={profile__wallpaper:"ProfileInfo_profile__wallpaper__3MFZ-"}},135:function(e,t,n){e.exports={profileStatus:"ProfileStatus_profileStatus__1jD4r"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__Jr8Gd",item:"Navbar_item__ph0pV",activeLink:"Navbar_activeLink__3JN_p"}},167:function(e,t,n){},193:function(e,t,n){},293:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(65),i=n.n(s),o=n(25),c=n(26),u=n(28),l=n(27),d=(n(167),n(3)),p=n(12),j=n(70),f=n.n(j),b=n(0),m=function(e){return Object(b.jsxs)("header",{className:f.a.header,children:[Object(b.jsx)("img",{src:"https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg",alt:""}),Object(b.jsx)("div",{className:f.a.loginBlock,children:e.isAuth?Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:f.a.userName,children:e.login}),Object(b.jsx)("button",{onClick:function(){e.logout()},children:"LogOut"})]}):Object(b.jsx)(p.b,{to:"/login",children:"'log In'"})})]})},h=n(13),g=n(10),O=n.n(g),x=n(16),v=n(130).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"6aa9dc35-6dc6-4f19-b0ef-aca7ffdb5bc7"}}),_={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return v.get("/users/?count=".concat(t,"&page=").concat(e)).then((function(e){return e.data}))},follow:function(e){return v.post("/follow/".concat(e))},unfollow:function(e){return v.delete("/follow/".concat(e))},getProfile:function(e){return w.getProfile(e)}},w={getProfile:function(e){return v.get("/profile/".concat(e))},getStatus:function(e){return e=e||"",v.get("/profile/status/".concat(e))},updateStatus:function(e){return e=e||"",v.put("/profile/status",{status:e})}},S=function(){return v.get("/auth/me")},P=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return v.post("/auth/login",{email:e,password:t,rememberMe:n})},I=function(){return v.delete("/auth/login")},C=n(39),y="ADD-POST",U="DELETE-POST",N="SET-USER-PROFILE",E="SET-STATUS",k={postsData:[{id:1,message:"Hi? this is my first post",likesCount:24},{id:2,message:"Its me second post",likesCount:11},{id:3,message:"This is last post",likesCount:2}],newPostText:"",profile:null,profileStatus:""},T=function(e){return{type:E,status:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(d.a)(Object(d.a)({},e),{},{postsData:[].concat(Object(C.a)(e.postsData),[{id:e.postsData.length,message:t.newPostText,likesCount:0}]),newPostText:""});case N:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case E:return Object(d.a)(Object(d.a)({},e),{},{profileStatus:t.status});case U:return Object(d.a)(Object(d.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});default:return e}},R=n(37),A="SET-USER-DATA",M="DELETE-USER-DATA",z={userId:null,email:null,login:null,isAuth:!1},F=function(e,t,n){return{type:A,data:{userId:e,email:t,login:n}}},L=function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,r,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:(n=e.sent).data.resultCode||(a=n.data.data,r=a.id,s=a.login,i=a.email,t(F(r,i,s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.data),{},{isAuth:!0});case M:return Object(d.a)(Object(d.a)({},e),{},{userId:null,email:null,login:null,isAuth:!1});default:return e}},H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)(m,Object(d.a)({},this.props))}}]),n}(r.a.Component),W=Object(h.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I().resultCode||t({type:M});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(H),G=n(15),q=n.n(G),J=function(e){return Object(b.jsxs)("nav",{className:q.a.nav,children:[Object(b.jsx)(p.b,{to:"/",className:q.a.item,activeClassName:q.a.activeLink,exact:!0,children:"Home"}),Object(b.jsx)(p.b,{to:"/profile",className:q.a.item,activeClassName:q.a.activeLink,children:"Profile"}),Object(b.jsx)(p.b,{to:"/dialogs",className:q.a.item,activeClassName:q.a.activeLink,children:"Message"}),Object(b.jsx)(p.b,{to:"/news",className:q.a.item,activeClassName:q.a.activeLink,children:"News"}),Object(b.jsx)(p.b,{to:"/music",className:q.a.item,activeClassName:q.a.activeLink,children:"Music"}),Object(b.jsx)(p.b,{to:"/settings",className:q.a.item,activeClassName:q.a.activeLink,children:"Settings"}),Object(b.jsx)(p.b,{to:"/users",className:q.a.item,activeClassName:q.a.activeLink,children:"My Friends"})]})},K=(n(193),n(131)),X=n.n(K),Z=function(e){return Object(b.jsxs)("div",{className:X.a.item,id:e.dataIndex,children:[Object(b.jsx)("strong",{children:e.dataHeader}),Object(b.jsx)("p",{children:e.dataText})]})},V=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(Z,{dataIndex:11,dataHeader:"news 1",dataText:"text of the news 1"}),Object(b.jsx)(Z,{dataIndex:13,dataHeader:"news 2",dataText:"text of the news 2"}),Object(b.jsx)(Z,{dataIndex:15,dataHeader:"news 3",dataText:"text of the news 3"})]})},Q=n(11),Y="SEND-MESSAGE",$={dialogsData:[{id:1,name:"Alex"},{id:2,name:"Artem"},{id:3,name:"Masha"},{id:4,name:"Ilya"},{id:5,name:"Urii"}],messagesData:[{id:1,message:"hi!!!"},{id:2,message:"Hi? whats up"},{id:3,message:"Ok? yours&"},{id:4,message:"nice"},{id:5,message:"bye"}],message:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;return t.type===Y?Object(d.a)(Object(d.a)({},e),{},{messagesData:[].concat(Object(C.a)(e.messagesData),[{id:e.messagesData.length,message:t.message}]),message:""}):e},te=n(30),ne=n.n(te),ae=function(e){return Object(b.jsx)("div",{className:ne.a.dialogMessage,children:e.message})},re=function(e){return Object(b.jsx)(p.b,{to:e.path,className:ne.a.dialogItem,activeClassName:ne.a.dialogActiveItem,children:e.name})},se=n(125),ie=n(126),oe=function(e){if(!e)return"field is required"},ce=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},ue=n(29),le=n(52),de=n.n(le),pe=["input","meta","children"],je=["input"],fe=["input"],be=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,s=(Object(ue.a)(e,pe),n&&a);return Object(b.jsx)("div",{className:de.a.formControl+" "+(s?de.a.error:""),children:r})},me=function(e){var t=e.input,n=Object(ue.a)(e,je);return Object(b.jsx)(be,Object(d.a)(Object(d.a)({},e),{},{children:Object(b.jsx)("textarea",Object(d.a)(Object(d.a)({},t),n))}))},he=function(e){var t=e.input,n=Object(ue.a)(e,fe);return Object(b.jsx)(be,Object(d.a)(Object(d.a)({},e),{},{children:Object(b.jsx)("input",Object(d.a)(Object(d.a)({},t),n))}))},ge=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5?arguments[5]:void 0;return Object(b.jsxs)("div",{children:[Object(b.jsx)(se.a,Object(d.a)({placeholder:e,name:t,component:a,validate:n},r)),s&&Object(b.jsx)("span",{children:s})]})},Oe=ce(50),xe=Object(ie.a)({form:"sendMessageForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)(se.a,{component:me,name:"newMessageBody",validate:[oe,Oe],placeholder:"type here..."}),Object(b.jsx)("button",{children:"Send"})]})})),ve=function(e){var t=e.dialogs.map((function(e){return Object(b.jsx)(re,{name:e.name,path:"dialogs/".concat(e.id)})})),n=e.messages.map((function(e){return Object(b.jsx)(ae,{message:e.message})}));return Object(b.jsxs)("div",{className:ne.a.dialogs,children:[Object(b.jsx)("div",{className:ne.a.dialogsItems,children:t}),Object(b.jsx)("div",{className:ne.a.dialogMessagesWrapper,children:n}),Object(b.jsx)(xe,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})},_e=n(9),we=function(e){var t=function(t){Object(u.a)(a,t);var n=Object(l.a)(a);function a(){return Object(o.a)(this,a),n.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(d.a)({},this.props)):Object(b.jsx)(Q.a,{to:"/login"})}}]),a}(r.a.Component);return Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{})(t)},Se=Object(_e.d)(Object(h.b)((function(e){return{dialogs:e.dialogsPage.dialogsData,messages:e.dialogsPage.messagesData,newMessageText:e.dialogsPage.newMessageText}}),{sendMessage:function(e){return{type:Y,message:e}}}),we)(ve),Pe=function(e,t,n,a){return e.map((function(e){return e[n]==t?Object(d.a)(Object(d.a)({},e),a):e}))},Ie="USERS-REDUCER/FOLLOW-SUCCESS",Ce="USERS-REDUCER/UNFOLLOW-SUCCESS",ye="USERS-REDUCER/SET-USERS",Ue="USERS-REDUCER/SET-CURRENT-PAGE",Ne="USERS-REDUCER/SET-TOTAL-USERS-COUNT",Ee="USERS-REDUCER/TOGGLES-FETCHING",ke="USERS-REDUCER/TOGGLES-FOLLOWING-PROGRESS",Te={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},De=function(e){return{type:Ie,userId:e}},Re=function(e){return{type:Ce,userId:e}},Ae=function(e){return{type:Ue,currentPage:e}},Me=function(e){return{type:Ee,isFetching:e}},ze=function(e,t){return{type:ke,isFetching:e,userId:t}},Fe=function(){var e=Object(x.a)(O.a.mark((function e(t,n,a,r){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ze(!0,n)),e.next=3,a(n);case 3:e.sent.data.resultCode||t(r(n)),t(ze(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(d.a)(Object(d.a)({},e),{},{users:Pe(e.users,t.userId,"id",{followed:!0})});case Ce:return Object(d.a)(Object(d.a)({},e),{},{users:Pe(e.users,t.userId,"id",{followed:!1})});case ye:return Object(d.a)(Object(d.a)({},e),{},{users:Object(C.a)(t.users)});case Ue:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case Ne:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.count});case Ee:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case ke:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(C.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!=t.userId}))]});default:return e}},Be=n(55),He=n.n(Be),We=function(e){for(var t=e.currentPage,n=e.totalItemsCount,a=e.pageSize,r=e.pageChanged,s=Math.ceil(n/a),i=[],o=1;o<s+1;o++)i.push(o);var c=10*(Math.ceil(t/10)-1)+1,u=c+10;i=i.filter((function(e){return e>=c&&e<u}));return Object(b.jsxs)("div",{className:He.a.pagination,children:[Object(b.jsx)("button",{className:He.a.paginatorButton,onClick:function(e){var n=t-10;n<1&&(n=1),r(n)},disabled:1==c?"disabled":null,children:"PREV"}),i.map((function(e){return Object(b.jsx)("span",{className:t===e&&He.a.active,onClick:function(){r(e)},children:e})})),Object(b.jsx)("button",{className:He.a.paginatorButton,onClick:function(e){var n=t+10;n>s&&(n=s),r(n)},disabled:u>=s?"disabled":null,children:"NEXT"})]})},Ge=n(44),qe=n.n(Ge),Je=n.p+"static/media/user.c1edb9da.png",Ke=["user","followingInProgress","follow","unfollow"],Xe=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,r=e.unfollow;Object(ue.a)(e,Ke);return Object(b.jsxs)("div",{className:qe.a.userItem,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(p.b,{to:"/profile/".concat(t.id),children:Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:Je,className:qe.a.userItem_avatar})})}),Object(b.jsxs)("div",{children:[t.followed&&Object(b.jsx)("button",{disabled:n.some((function(e){return e==t.id}))?"disabled":null,className:qe.a.userItem_followBtn,onClick:function(){r(t.id)},children:"Unfollow"}),!t.followed&&Object(b.jsx)("button",{disabled:n.some((function(e){return e==t.id}))?"disabled":null,className:qe.a.userItem_followBtn,onClick:function(){a(t.id)},children:"Follow"})]})]}),Object(b.jsxs)("div",{className:qe.a.userItem_main,children:[Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.status})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"user.location.city"}),Object(b.jsx)("div",{children:"user.location.country"})]})]},t.id)},Ze=["currentPage","totalUsersCount","pageSize","pageChanged","users"],Ve=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,r=e.pageChanged,s=e.users,i=Object(ue.a)(e,Ze),o=n/a;o=o>9?9:o;for(var c=[],u=1;u<o+1;u++)c.push(u);return Object(b.jsxs)("div",{children:[Object(b.jsx)(We,{currentPage:t,pageSize:a,pageChanged:r,totalItemsCount:n}),s.map((function(e){return Object(b.jsx)(Xe,{user:e,follow:i.follow,unfollow:i.unfollow,followingInProgress:i.followingInProgress})}))]})},Qe=n.p+"static/media/loader.ef84d734.svg",Ye=function(e){return Object(b.jsx)("img",{src:Qe,style:{display:"block",margin:"2rem auto",maxHeight:"6.1rem"},alt:"loader"})},$e=n(137),et=Object($e.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),tt=function(e){return e.usersPage.pageSize},nt=function(e){return e.usersPage.totalUsersCount},at=function(e){return e.usersPage.currentPage},rt=function(e){return e.usersPage.followingInProgress},st=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.props.isFetching?Object(b.jsx)(Ye,{}):Object(b.jsx)(Ve,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,followingInProgress:this.props.followingInProgress,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,pageChanged:this.onPageChanged})})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"componentDidUpdate",value:function(){}}]),n}(r.a.Component),it={setCurrentPage:Ae,requestUsers:function(e,t){return function(){var n=Object(x.a)(O.a.mark((function n(a){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(Me(!0)),n.next=3,_.getUsers(e,t);case 3:r=n.sent,a((i=r.items,{type:ye,users:i})),a(Ae(e)),a((s=r.totalCount,{type:Ne,count:s})),a(Me(!1));case 8:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=_.follow.bind(_),t.next=3,Fe(n,e,a,De);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=_.unfollow.bind(_),t.next=3,Fe(n,e,a,Re);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},ot=Object(_e.d)(Object(h.b)((function(e){return{users:et(e),pageSize:tt(e),totalUsersCount:nt(e),currentPage:at(e),followingInProgress:rt(e)}}),it),we)(st),ct=n(133),ut=n.n(ct),lt=n(93),dt=n.n(lt),pt=n(72),jt=n.n(pt),ft=function(e){return Object(b.jsxs)("div",{className:jt.a.item,children:[Object(b.jsx)("div",{className:jt.a.item__picture,children:Object(b.jsx)("img",{src:"https://get.wallhere.com/photo/1500x900-px-action-adventure-alien-aliens-Avatar-fantasy-fi-fighting-futuristic-sci-warrior-1635343.jpg",alt:""})}),Object(b.jsxs)("div",{className:jt.a.item__content,children:[Object(b.jsx)("p",{children:e.message}),Object(b.jsxs)("span",{children:["likes: ",e.likesCount]})]})]})},bt=ce(10),mt=Object(ie.a)({form:"addNewPostForm"})((function(e){return Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("div",{children:Object(b.jsx)(se.a,{component:me,validate:[oe,bt],name:"newPostText",placeholder:"type here..."})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Add post"})})]})})),ht=r.a.memo((function(e){var t=e.posts.map((function(e){return Object(b.jsx)(ft,{message:e.message,likesCount:e.likesCount})}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h5",{className:dt.a.title,children:"My Posts"}),Object(b.jsx)("div",{className:dt.a.area,children:Object(b.jsx)(mt,{onSubmit:function(t){e.addPost(t.newPostText)},new:!0})}),t]})})),gt=Object(h.b)((function(e){return{posts:e.profilePage.postsData,newPostText:e.profilePage.newPostText}}),{addPost:function(e){return{type:y,newPostText:e}}})(ht),Ot=n(134),xt=n.n(Ot),vt=n(94),_t=n(135),wt=n.n(_t),St=function(e){var t=Object(a.useState)(!1),n=Object(vt.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(e.status),o=Object(vt.a)(i,2),c=o[0],u=o[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return Object(b.jsxs)("div",{className:wt.a.profileStatus,children:[Object(b.jsxs)("div",{children:["this user ID: ",e.profile.userId]}),Object(b.jsxs)("div",{children:[!r&&Object(b.jsxs)("span",{onDoubleClick:function(){s(!0)},children:[c||"no status..."," "]}),r&&Object(b.jsx)("input",{value:c,autoFocus:!0,onBlur:function(){s(!1),e.updateUserStatus(c)},onChange:function(e){u(e.currentTarget.value)}})]})]})},Pt=["profile","status","authorizedUserId","updateUserStatus"],It=function(e){var t=e.profile,n=e.status,a=e.authorizedUserId,r=e.updateUserStatus;Object(ue.a)(e,Pt);return t?Object(b.jsxs)("div",{children:[Object(b.jsx)(St,{authorizedUserId:a,profile:t,status:n,updateUserStatus:r}),Object(b.jsx)("div",{className:xt.a.profile__wallpaper,children:Object(b.jsx)("img",{src:t.photos.large,alt:"alt"})})]}):Object(b.jsx)(Ye,{})},Ct=function(e){return Object(b.jsxs)("div",{className:ut.a.root,children:[Object(b.jsx)(It,{authorizedUserId:e.authorizedUserId,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(b.jsx)(gt,{})]})},yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(b.jsx)(Ct,{authorizedUserId:this.props.authorizedUserId,status:this.props.status,updateUserStatus:this.props.updateUserStatus,profile:this.props.profile})}}]),n}(r.a.Component),Ut=Object(_e.d)(Object(h.b)((function(e){return{authorizedUserId:e.auth.userId,profile:e.profilePage.profile,status:e.profilePage.profileStatus}}),{getProfile:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getProfile(e);case 2:a=t.sent,n((r=a.data,{type:N,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.getStatus(e);case 2:(a=t.sent).resultCode||n(T(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.updateStatus(e);case 2:t.sent.data.resultCode||n(T(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),we,Q.f)(yt),Nt=Object(ie.a)({form:"loginForm"})((function(e){var t=e.handleSubmit,n=e.error;return Object(b.jsxs)("form",{onSubmit:t,children:[ge("email","email",[oe],he),ge("Password","password",[oe],he,{type:"password"}),ge(null,"checkbox",[],he,{type:"checkbox"},"remember me"),n&&Object(b.jsx)("span",{className:de.a.formSummaryError,children:n}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"Login"})})]})})),Et=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(){var t=Object(x.a)(O.a.mark((function t(n){var a,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e.email,e.password,e.rememberMe);case 2:(a=t.sent).data.resultCode?(r=a.data.messages.length>0?a.data.messages[0]:"Common error",n(Object(R.a)("loginForm",{_error:r}))):n(L());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(b.jsx)(Q.a,{to:"/profile"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Login"}),Object(b.jsx)(Nt,{onSubmit:function(t){e.login(t)}})]})})),kt="INITIALIZE-SUCCESS",Tt={initialized:!1},Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;return t.type===kt?Object(d.a)(Object(d.a)({},e),{},{initialized:!0}):e},Rt={},At=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt;return e},Mt=n(136),zt=n(127),Ft=[Mt.a],Lt=Object(_e.c)({profilePage:D,dialogsPage:ee,sidebar:At,usersPage:Le,auth:B,form:zt.a,app:Dt}),Bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.d,Ht=Object(_e.e)(Lt,Bt(_e.a.apply(void 0,Ft))),Wt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app__wrapper",children:[Object(b.jsx)(W,{}),Object(b.jsx)(J,{}),Object(b.jsxs)("div",{className:"app__wrapper__content",children:[Object(b.jsx)(Q.b,{path:"/",component:J,exact:!0}),Object(b.jsx)(Q.b,{path:"/dialogs",component:Se}),Object(b.jsx)(Q.b,{path:"/profile/",exact:!0,component:Ut}),Object(b.jsx)(Q.b,{path:"/profile/:userId",component:Ut}),Object(b.jsx)(Q.b,{path:"/news",component:V}),Object(b.jsx)(Q.b,{path:"/users",component:ot}),Object(b.jsx)(Q.b,{path:"/login",component:Et})]})]}):Object(b.jsx)(Ye,{})}}]),n}(r.a.Component),Gt=Object(_e.d)(Q.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(L()),e.next=3,Promise.all([n]);case 3:t({type:kt});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Wt),qt=function(e){return Object(b.jsx)(p.a,{basename:"",children:Object(b.jsx)(h.a,{store:Ht,children:Object(b.jsx)(Gt,{})})})};i.a.render(Object(b.jsx)(qt,{}),document.getElementById("root"))},30:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__lpZad",dialogsItems:"Dialogs_dialogsItems__18xTT",dialogItem:"Dialogs_dialogItem__3HbUF",dialogActiveItem:"Dialogs_dialogActiveItem__za0op",dialogMessagesWrapper:"Dialogs_dialogMessagesWrapper__k5DFA",dialogMessage:"Dialogs_dialogMessage__2OwHQ",textdiareaWr:"Dialogs_textdiareaWr__iwo23"}},44:function(e,t,n){e.exports={userItem:"Users_userItem__2TiKk",userItem_avatar:"Users_userItem_avatar__3h4dm",userItem_followBtn:"Users_userItem_followBtn__3f7Ae",userItem_main:"Users_userItem_main__3TqKK"}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__rss_q",error:"FormsControls_error__pWqfo",formSummaryError:"FormsControls_formSummaryError__3f6Wo"}},55:function(e,t,n){e.exports={pagination:"Paginator_pagination__3FWH1",active:"Paginator_active__I7aym",paginatorButton:"Paginator_paginatorButton__2E4nZ"}},70:function(e,t,n){e.exports={header:"Header_header__pRwN0",loginBlock:"Header_loginBlock__1TN4y",userName:"Header_userName__2Ttfy"}},72:function(e,t,n){e.exports={item:"Post_item__3u0Sw",item__picture:"Post_item__picture__2OHnB",item__content:"Post_item__content__1cWdm"}},93:function(e,t,n){e.exports={title:"MyPosts_title__2hIJk",area:"MyPosts_area__3M2wP"}}},[[293,1,2]]]);
//# sourceMappingURL=main.c1023ee7.chunk.js.map