(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),i=a.n(r),s=(a(17),a(1)),o=a(2),u=a(4),l=a(3),d=a(5),m=a(6);var h=function(e){return c.a.createElement("div",{className:"container"},e.children)};var f=function(e){return c.a.createElement("h2",null,"Timer: ",e.timer)};var v=function(e){return c.a.createElement("div",{className:"row stats-block"},c.a.createElement("h2",null,"Wins: ",e.wins),c.a.createElement("h2",null,"Losses: ",e.losses),e.play?c.a.createElement(f,{timer:e.timer}):c.a.createElement("button",{onClick:e.init},"Play"))},p=a(10),g=a(7),b=function(){function e(){var t=this;Object(s.a)(this,e),this.createPair=function(){var e=g.length;return g.forEach(function(a){var n;e++,t.cardSet.push(a),(n=Object(p.a)({},a)).id=e,t.cardSet.push(n)}),t.shuffle(t.cardSet)},this.cardSet=[]}return Object(o.a)(e,[{key:"shuffle",value:function(e){e.sort(function(){return Math.random()-.5})}}]),e}();var w=function(e){var t,a;return t=e.active||e.matched?"./img/card-".concat(e.pairId,".png"):"./img/back.png",a=e.matched?"matched":"",c.a.createElement("div",{className:"col-md-3 col-sm-6"},c.a.createElement("div",{className:"single-card d-flex justify-content-center ".concat(a),onClick:function(){return e.guess(e.id)}},c.a.createElement("img",{src:t,alt:""})))},S=[],y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).gameInit=function(){e.reset(S),e.deck.shuffle(S),e.setState({cardSet:S,play:!0}),e.startTimer()},e.state={cardSet:S,sec:60,play:!1,guess:[],wins:0,losses:0},e.startTimer=function(){var t=60,a=e.state.losses;e.timer=setInterval(function(){e.state.sec<=0?(a++,clearInterval(e.timer),e.setState({play:!1,losses:a})):e.setState({sec:t--})},1e3)},e.reset=function(){var t=Object(m.a)(e.state.cardSet);t.map(function(t){return e.state.play?t.active=!1:(t.active=!1,t.matched=!1)}),e.setState({guess:[],cardSet:t})},e.guessHandler=function(t){if(e.state.play){var a=S.find(function(e){return e.id===t});a.active||(a.active=!0,e.setState({guess:[].concat(Object(m.a)(e.state.guess),[a]),cardSet:S},function(){e.compare(e.state.guess)}))}},e.compare=function(t){var a=Object(m.a)(e.state.cardSet);2===t.length&&(t[0].pairId===t[1].pairId&&(t[0].matched=!0,t[1].matched=!0,e.setState({cardSet:a}),e.checkWin()),setTimeout(function(){e.reset(a)},1e3))},e.checkWin=function(){var t=e.state.wins;S.every(function(e){return!0===e.matched})&&(t++,clearInterval(e.timer),e.setState({wins:t,play:!1,sec:60}))},e.deck=new b,S=e.deck.cardSet,e.deck.createPair(),e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(v,{timer:this.state.sec,wins:this.state.wins,losses:this.state.losses,play:this.state.play,init:this.gameInit}),c.a.createElement("div",{className:"row"},this.state.cardSet.map(function(t){return c.a.createElement(w,{guess:e.guessHandler,id:t.id,pairId:t.pairId,key:t.id,active:t.active,matched:t.matched})})))}}]),t}(n.Component),k=(a(18),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(y,null)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{id:1,pairId:1,active:!1,matched:!1},{id:2,pairId:2,active:!1,matched:!1},{id:3,pairId:3,active:!1,matched:!1},{id:4,pairId:4,active:!1,matched:!1},{id:5,pairId:5,active:!1,matched:!1},{id:6,pairId:6,active:!1,matched:!1}]}},[[11,1,2]]]);
//# sourceMappingURL=main.3308d51b.chunk.js.map