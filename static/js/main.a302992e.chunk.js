(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(7),i=t.n(o),l=(t(13),t(1)),c=t(2),m=t(4),s=t(3),h=t(5),u=function(e){var a=e.id,t=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 "},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),r.a.createElement("div",{className:"tc"}," ",r.a.createElement("h3",null,t),r.a.createElement("p",null,n)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement(u,{key:t,id:a[t].id,name:a[t].name,email:a[t].email})})))},b=[{id:1,name:"Eskiew",username:"Eskiew",email:"eskiew@gmail.com"},{id:2,name:"Eden",username:"eden-123",email:"eden@yahoo.com"},{id:3,name:"Tood",username:"Tood",email:"tood@gmail.com"},{id:4,name:"Bettisho",username:"Bettisho",email:"betty@aol.com"},{id:5,name:"Benyiam",username:"Benyiam",email:"beniyamhailu@gmail.com"},{id:6,name:"Melat",username:"melat",email:"melat@yahoo.com"},{id:7,name:"Abebe",username:"abebe",email:"abebe@yahoo.com"},{id:8,name:"Babisho",username:"baby",email:"baby@gmail.com"},{id:9,name:"Abel",username:"abel",email:"abel@yahoo.com"},{id:10,name:"Kalkidan",username:"kalkidan",email:"kalkidan@aol.com"},{id:11,name:"Daniel",email:"Daniel@gmail.com"},{id:12,name:"Teddy",email:"Daniel@gmail.com"}],f=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue tc",type:"search",placeholder:"search by name",onChange:a}))},g=(t(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)}),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={hasError:!1},t}return Object(h.a)(a,e),Object(c.a)(a,[{key:"componentDidCatched",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops! This is not good"):this.props.children}}]),a}(n.Component),p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Buddies"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(E,null,r.a.createElement(d,{robots:a}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(15);i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a302992e.chunk.js.map