(this["webpackJsonpplay-react"]=this["webpackJsonpplay-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(24),a(17)),u=a(2),s=a(3),i=a(5),m=a(4),h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("nav",{className:"App-header navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar text-center text-light bg-dark"},r.a.createElement("strong",null,"Employee Directory"))))}}]),a}(r.a.Component),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.employees.filter((function(e){return"female"!==e.gender}));return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Full name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"City"),r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Gender"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.login.username},r.a.createElement("td",null,e.name.first," ",e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.location.city),r.a.createElement("td",null,e.location.country),r.a.createElement("td",null,e.gender))})))))}}]),a}(r.a.Component);var p=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search",id:"search"}),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},E=(a(7),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"}))}}]),a}(r.a.Component)),b=a(18),f=a.n(b),v=function(){return f.a.get("https://randomuser.me/api/?results=20")},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",results:[]},e.searchEmployees=function(t){v(t).then((function(t){return e.setState({results:t.data.results},console.log(t.data.results))})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(o.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployees(e.state.search)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees("")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{style:{textAlign:"center"}}),r.a.createElement(p,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,results:this.state.results}),r.a.createElement(E,{employees:this.state.results}),r.a.createElement(d,{employees:this.state.results}))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c90027a5.chunk.js.map