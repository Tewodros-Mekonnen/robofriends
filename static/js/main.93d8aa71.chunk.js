(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},14:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(7),o=n.n(i),l=(n(13),n(1)),m=n(2),c=n(4),s=n(3),h=n(5),u=function(e){var a=e.id,n=e.name,t=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 "},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),r.a.createElement("div",{className:"tc"}," ",r.a.createElement("h3",null,n),r.a.createElement("p",null,t)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(u,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},b=[{id:1,name:"Tomas Mekonnen",username:"Tomas",email:"tomas@gmail.com"},{id:2,name:"Eden Girma",username:"eden-123",email:"eden@yahoo.com"},{id:3,name:"Marta Biru",username:"Marta",email:"marta@gmail.com"},{id:4,name:"Alem Tekele",username:"alem",email:"alem@aol.com"},{id:5,name:"Benyiam Hailu",username:"Benyiam",email:"beniyamhailu@gmail.com"},{id:6,name:"Melat Gebreselassie",username:"melat",email:"melat@yahoo.com"},{id:7,name:"Abebe Balcha",username:"abebe",email:"abebe@yahoo.com"},{id:8,name:"Hilena Girma",username:"hilena",email:"hilena@gmail.com"},{id:9,name:"Abel Abebe",username:"abel",email:"abel@yahoo.com"},{id:10,name:"Kalkidan Tadesse",username:"kalkidan",email:"kalkidan@aol.com"},{id:11,name:"Daniel",email:"Daniel@gmail.com"},{id:12,name:"Teddy",email:"Daniel@gmail.com"}],f=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue tc",type:"search",placeholder:"search robots",onChange:a}))},g=(n(14),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"900px"}},e.children)}),p=function(e){function a(e){var n;return Object(l.a)(this,a),(n=Object(c.a)(this,Object(s.a)(a).call(this,e))).state={hasError:!1},n}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidCatched",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops! This is not good"):this.props.children}}]),a}(t.Component),E=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(p,null,r.a.createElement(d,{robots:a}))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.93d8aa71.chunk.js.map