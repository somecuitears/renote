(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(14),o=n.n(r),i=(n(21),n(3)),l=n(4),s=n(7),u=n(5),d=n(6),h=(n(23),n(31)),m=n(32),b=n(33),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={header:n.props.header},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h.a,{color:"light",light:!0,expand:"md"},c.a.createElement(m.a,{href:"/"},"Notes"),c.a.createElement(b.a,{onClick:this.toggle})))}}]),t}(a.Component),O=n(11),v=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e));var a=new Date;return n.state={header:n.props.header,date:a.getDate()+" "+a.getDay()+" "+a.getFullYear()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"note"},c.a.createElement("h5",null,this.state.header),c.a.createElement("h6",null,this.state.date))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={msgBody:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({msgBody:this.props.msgBody})}},{key:"render",value:function(){return c.a.createElement("div",null,"Message body: ",this.state.msgBody)}}]),t}(a.Component),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={msgBody:null},n.clicked=n.clicked.bind(Object(O.a)(Object(O.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"clicked",value:function(){this.setState({msgBody:"New Body Message"})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"notelist",onClick:this.clicked},c.a.createElement(v,{header:"Note Title 1"}),c.a.createElement(v,{header:"Note Title 2"})),c.a.createElement("div",null,c.a.createElement(f,{msgBody:this.state.msgBody})))}}]),t}(a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(j,{header:"Notes"}),c.a.createElement("div",null,c.a.createElement(p,null)))}}]),t}(a.Component);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.862735db.chunk.js.map