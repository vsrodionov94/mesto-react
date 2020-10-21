(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=(a(17),a(10)),i=a(1),s=a(6),u=a.n(s);var m=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var d=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. Mesto Russia"))},_=o.a.createContext();var f=function(e){var t=e.card,a=e.onCardClick,r=e.onDeleteClick,c=e.onCardLike,l=Object(n.useContext)(_),i=t.owner._id===l._id,s="photo__delete-button ".concat(i?"photo__delete-button_state_visible":"photo__delete-button_state_hidden"),u=t.likes.some((function(e){return e._id===l._id})),m="photo__like-button ".concat(u?"photo__like-button_active":"");return o.a.createElement("li",{className:"photo__item"},o.a.createElement("button",{className:s,type:"button",onClick:function(){return r(t)}}),o.a.createElement("div",{className:"photo__image",style:{backgroundImage:"url(".concat(t.link,")")},onClick:function(){a(t)}}),o.a.createElement("div",{className:"photo__caption"},o.a.createElement("h2",{className:"photo__text"}," ",t.name),o.a.createElement("div",null,o.a.createElement("button",{className:m,type:"button",onClick:function(){c(t)}}),o.a.createElement("p",{className:"photo__like-counter"}," ",t.likes.length))))};var h=function(e){var t=e.onEditProfile,a=e.onAddPlace,r=e.onEditAvatar,c=e.onCardClick,l=e.cards,i=e.onCardDelete,s=e.onCardLike,u=Object(n.useContext)(_);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar"},o.a.createElement("div",{className:"profile__avatar-image",style:{backgroundImage:"url(".concat(u.avatar,")")}}),o.a.createElement("button",{className:"profile__avatar-edit-button",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){r(!0)}})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__name"},o.a.createElement("h1",{className:"profile__name-text"}," ",u.name," "),o.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",onClick:function(){t(!0)}})),o.a.createElement("p",{className:"profile__profession"}," ",u.about," ")),o.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:function(){a(!0)}})),o.a.createElement("section",{className:"photo"},o.a.createElement("ul",{className:"photo__cards"},l.map((function(e){return o.a.createElement(f,{key:e._id,card:e,onCardClick:c,onDeleteClick:i,onCardLike:s})})))))};var p=function(e){var t=e.isOpen,a=e.title,n=e.name,r=e.children,c=e.onClose,l=e.onSubmit,i="modal modal_assign_".concat(n," ").concat(t?"modal_opened":"");return o.a.createElement("section",{className:i},o.a.createElement("form",{className:"modal__form",name:n,noValidate:!0,onSubmit:l},o.a.createElement("h3",{className:"modal__title"},a),r,o.a.createElement("button",{type:"submit",className:"modal__submit-button"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement("button",{className:"modal__esc-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c})))};var b=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateUser,c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),f=d[0],h=d[1],b=o.a.useContext(_);return o.a.useEffect((function(){u(b.name),h(b.about)}),[b]),o.a.createElement(p,{name:"form-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:s,about:f})}},o.a.createElement("input",{type:"text",className:"modal__field modal__field_assign_name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",name:"name",id:"field-name",required:!0,minLength:"2",maxLength:"40",value:s,onChange:function(e){return u(e.target.value)}}),o.a.createElement("p",{className:"modal__field-error",id:"field-name-error"}),o.a.createElement("input",{type:"text",className:"modal__field modal__field_assign_profession",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e",name:"about",id:"field-profession",required:!0,minLength:"2",maxLength:"200",value:f,onChange:function(e){return h(e.target.value)}}),o.a.createElement("p",{className:"modal__field-error",id:"field-profession-error"}))};var v=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateAvatar,c=Object(n.useRef)();return o.a.createElement(p,{name:"form-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",onClose:a,isOpen:t,onSubmit:function(e){e.preventDefault(),r({avatar:c.current.value})}},o.a.createElement("input",{ref:c,type:"url",className:"modal__field modal__field_assign_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"avatar",id:"field-link",required:!0}),o.a.createElement("p",{className:"modal__field-error",id:"field-link-error"}))};var E=function(e){var t=e.isOpen,a=e.onClose,r=e.onAddPlace,c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),_=d[0],f=d[1];return o.a.createElement(p,{name:"form-add ",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),r({name:s,link:_})}},o.a.createElement("input",{type:"text",className:"modal__field modal__field_assign_title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",id:"field-title",required:!0,minLength:"1",maxLength:"30",value:s,onChange:function(e){return u(e.target.value)}}),o.a.createElement("p",{className:"modal__field-error",id:"field-title-error"}),o.a.createElement("input",{type:"url",className:"modal__field modal__field_assign_link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"field-link",required:!0,value:_,onChange:function(e){return f(e.target.value)}}),o.a.createElement("p",{className:"modal__field-error",id:"field-link-error"}))};var g=function(e){var t=e.isOpen,a=e.card,n=e.onClose;return o.a.createElement("section",{className:"modal modal_assign_album ".concat(t?"modal_opened":"")},o.a.createElement("div",{className:"modal__large-photo"},o.a.createElement("img",{className:"modal__image",src:a.link,alt:a.name}),o.a.createElement("button",{className:"modal__esc-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n}),o.a.createElement("p",{className:"modal__caption"}," ",a.name," ")))},C=a(7),k=a(8),O=a(11),N=a(9),j=new(function(e){Object(O.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e))._url=e.url,n._headers=e.headers,n}return Object(k.a)(a,[{key:"_handleResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserData",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then(this._handleResponseData)}},{key:"setUserData",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponseData)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"GET"}).then(this._handleResponseData)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponseData)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._handleResponseData)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._handleResponseData)}}]),a}(o.a.Component))({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"87805956-615a-41b3-9626-fd0494106fb1","Content-type":"application/json"}});var y=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),s=Object(i.a)(c,2),u=s[0],f=s[1],C=Object(n.useState)(!1),k=Object(i.a)(C,2),O=k[0],N=k[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),D=S[0],x=S[1],L=Object(n.useState)(!1),U=Object(i.a)(L,2),A=U[0],P=U[1],w=Object(n.useState)(!1),R=Object(i.a)(w,2),T=R[0],q=R[1],I=Object(n.useState)({}),J=Object(i.a)(I,2),B=J[0],G=J[1],H=Object(n.useState)([]),M=Object(i.a)(H,2),W=M[0],z=M[1];Object(n.useEffect)((function(){j.getInitialCards().then((function(e){z(e)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){j.getUserData().then((function(e){r(e)})).catch((function(e){console.log(e)}))}),[]);var V=function(){f(!1),N(!1),x(!1),P(!1),q(!1),G({})};return o.a.createElement(_.Provider,{value:a},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(h,{onEditProfile:f,onAddPlace:N,onEditAvatar:x,onCardClick:function(e){P(!0),G(e)},cards:W,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));j.changeLikeCardStatus(e._id,!t).then((function(t){var a=W.map((function(a){return a._id===e._id?t:a}));z(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){j.removeCard(e._id).then((function(){var t=W.filter((function(t){return t._id!==e._id}));z(t)})).catch((function(e){console.log(e)}))}}),o.a.createElement(b,{isOpen:u,onClose:V,onUpdateUser:function(e){j.setUserData(e).then((function(e){r(e),V()})).catch((function(e){console.log(e)}))}}),o.a.createElement(E,{isOpen:O,onClose:V,onAddPlace:function(e){j.addCard(e).then((function(e){z([e].concat(Object(l.a)(W))),V()})).catch((function(e){console.log(e)}))}}),o.a.createElement(v,{isOpen:D,onClose:V,onUpdateAvatar:function(e){j.setUserAvatar(e).then((function(e){r(e),V()})).catch((function(e){console.log(e)}))}}),o.a.createElement(p,{name:"confirm-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:T,onClose:V}),o.a.createElement(g,{isOpen:A,card:B,onClose:V}),o.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.8fe537d5.chunk.js.map