(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[3],{89:function(e,t,n){e.exports={BuildControl:"style_BuildControl__1JmW4",Label:"style_Label__3uD94",Less:"style_Less__1qrdN",More:"style_More__LG3V7"}},90:function(e,t,n){e.exports={BuildControls:"style_BuildControls__2PF0P",OrderButton:"style_OrderButton__3rxy7",enable:"style_enable__1gxuM"}},91:function(e,t,n){e.exports={Modal:"style_Modal__1nL-m"}},96:function(e,t,n){"use strict";n.r(t);var r=n(11),a=n(0),l=n.n(a),s=n(27),u=n(2),o=n(3),c=n(89),i=n.n(c),d=Object(o.b)(null,(function(e){return{ortsNemeh:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ortsNer:e}}(t))},ortsHasah:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ortsNer:e}}(t))}}}))((function(e){return l.a.createElement("div",{className:i.a.BuildControl},l.a.createElement("div",{className:i.a.Label},e.orts),l.a.createElement("button",{disabled:e.disabled[e.type],onClick:function(){return e.ortsHasah(e.type)},className:i.a.Less},"\u0425\u0430\u0441\u0430\u0445"),l.a.createElement("button",{onClick:function(){return e.ortsNemeh(e.type)},className:i.a.More},"\u041d\u044d\u043c\u044d\u0445"))})),m=n(90),b=n.n(m),g=Object(o.b)((function(e){return{burgeriinOrts:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,purchasing:e.burgerReducer.purchasing,ingredientNames:e.burgerReducer.ingredientNames}}),null)((function(e){var t=Object(u.a)({},e.burgeriinOrts);for(var n in t)t[n]=t[n]<=0;return l.a.createElement("div",{className:b.a.BuildControls},l.a.createElement("p",null,"\u0411\u0443\u0440\u0433\u0435\u0440\u0438\u0439\u043d \u04af\u043d\u044d : ",l.a.createElement("strong",null,e.price)),Object.keys(e.ingredientNames).map((function(n){return l.a.createElement(d,{key:n,disabled:t,type:n,orts:e.ingredientNames[n]})})),l.a.createElement("button",{onClick:e.showConfirmModal,disabled:!e.purchasing,className:b.a.OrderButton},"\u0417\u0410\u0425\u0418\u0410\u041b\u0410\u0425"))})),E=n(91),p=n.n(E),f=n(37),_=function(e){return l.a.createElement("div",null,l.a.createElement(f.a,{show:e.show,darahad:e.closeConfirmModal}),l.a.createElement("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:p.a.Modal},e.children))},h=n(14),y=Object(o.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientNames:e.burgerReducer.ingredientNames,price:e.burgerReducer.totalPrice}}))((function(e){return console.log("sum",e),l.a.createElement("div",null,l.a.createElement("h3",null,"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"),l.a.createElement("p",null,"\u0422\u0430\u043d\u044b \u0441\u043e\u043d\u0433\u043e\u0441\u043e\u043d \u043e\u0440\u0446\u0443\u0443\u0434: "),l.a.createElement("ul",null,Object.keys(e.ingredients).map((function(t){return l.a.createElement("li",{key:t},e.ingredientNames[t]," : ",e.ingredients[t])}))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u0417\u0430\u0445\u0438\u0430\u043b\u0433\u044b\u043d \u0434\u04af\u043d: ",e.price,"\u20ae ")),l.a.createElement("p",null,"\u0426\u0430\u0430\u0448\u0430\u0430 \u04af\u0440\u0433\u044d\u043b\u0436\u043b\u04af\u04af\u043b\u044d\u0445 \u04af\u04af?"),l.a.createElement(h.a,{daragdsan:e.onCancel,btnType:"Danger",text:"\u0422\u0410\u0422\u0413\u0410\u041b\u0417\u0410\u0425"}),l.a.createElement(h.a,{daragdsan:e.onContinue,btnType:"Success",text:"\u04ae\u0420\u0413\u042d\u041b\u0416\u041b\u04ae\u04ae\u041b\u042d\u0425"}))}));n(25),n(22),t.default=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),u=n[0],o=n[1],c=function(){o(!1)};return l.a.createElement("div",null,l.a.createElement(_,{closeConfirmModal:c,show:u},l.a.createElement(y,{onCancel:c,onContinue:function(){e.history.push("/ship")}})),l.a.createElement(s.a,null),l.a.createElement(g,{showConfirmModal:function(){o(!0)}}))}}}]);
//# sourceMappingURL=3.3370447d.chunk.js.map