(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),o=(a(28),a(15)),i=a(16),m=a(18),d=a(17),l=a(19),p=(a(29),a(50)),u=a(52),h=a(51),y=[{id:"Heater-1",letter:"Q",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{id:"Heater-2",letter:"W",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:"Heater-3",letter:"E",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:"Heater-4_1",letter:"A",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{id:"Heater-6",letter:"S",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"Dsc_Oh",letter:"D",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Kick_n_Hat",letter:"Z",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"RP4_KICK_1",letter:"X",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:"Cev_H2",letter:"C",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleKeydown=function(e){e.keyCode===a.props.letter.charCodeAt()&&(a.audio.play(),a.props.handleDisplay(a.props.id))},a.handleClick=function(){a.audio.play(),a.props.handleDisplay(a.props.id)},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick},r.a.createElement("h1",{style:{}},this.props.letter),r.a.createElement("audio",{id:this.props.letter,className:"clip",src:this.props.src,ref:function(t){return e.audio=t}}))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleDisplay=function(e){return a.setState({display:e})},a.state={display:"Click or Press a Key"},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"drum-machine",style:{marginBottom:"30px"}},r.a.createElement("h1",{style:{textAlign:"center"}},"DRUM MACHINE")," ",r.a.createElement("p",{style:{textAlign:"center"}},"by Vu Long"),r.a.createElement(p.a,{maxWidth:"sm",style:{padding:"20px",marginTop:"50px",borderRadius:"10px",background:"#ffcccc"}},r.a.createElement("div",{id:"display",style:{textAlign:"center",marginBottom:"20px",fontSize:"40px"}},this.state.display),r.a.createElement("div",{className:"drum-pads"},r.a.createElement(h.a,{container:!0,spacing:3},y.map((function(t){return r.a.createElement(h.a,{item:!0,xs:4,container:!0,justify:"center",alignItems:"center",style:{width:"auto"}},r.a.createElement(u.a,{variant:"contained",color:"primary"},r.a.createElement(f,{key:t.id,id:t.id,letter:t.letter,src:t.src,handleDisplay:e.handleDisplay})))}))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.055ea191.chunk.js.map