(this.webpackJsonprobobodies=this.webpackJsonprobobodies||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),c=n.n(r),s=(n(12),n(1)),i=n(2),l=n(4),h=n(3),u=(n(13),function(e){e.robots;throw new Error("some thing went wrong")}),d=function(e){var t=e.searchChange;return o.a.createElement("div",null,o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})))},m=function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"600px",border:"5px solid black"}},e.children)},f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Oooops . that is not good"):this.props.children}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value}),console.log(e.state.searchfield)},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"}," RoboFriends"),o.a.createElement(d,{searchChange:this.onSearchChange}),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{robots:a})))):o.a.createElement("h1",null,"Loading")}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.68e8d5a1.chunk.js.map