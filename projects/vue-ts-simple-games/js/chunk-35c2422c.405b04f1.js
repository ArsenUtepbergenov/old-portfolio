(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c2422c"],{"0063":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(t,e,s){this.width=0,this.height=0,this.context=t,this.width=e,this.height=s}draw(){this.context.fillStyle="#ffffff",this.context.fillRect(0,0,this.width,this.height)}}},"0b30":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{static div(t,e){return(t-t%e)/e}static randomIntByInterval(t,e){return Math.floor(t+Math.random()*(e+1-t))}static getDistance(t,e,s,i){return Math.sqrt(Math.pow(e-t,2)+Math.pow(i-s,2))}static createMatrix(t,e){const s=[];while(e--)s.push(new Array(t).fill(0));return s}static getMouseCoordinates(t){const e=t.target&&t.target.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top;return{x:s,y:i}}static loadImage(t){return new Promise((e,s)=>{const i=new Image;i.onload=()=>{e(i)},i.onerror=s,i.src=t})}static drawImageOnCanvas(t,e,s,i,r){this.loadImage("./tank.png").then(n=>{t.drawImage(n,e,s,i,r)}).catch(t=>{console.error("Error: in the method drawImageOnCanvas loading went wrong",t)})}static checkCollisionRectOfCircle(t,e){return t.x<e.x+e.getRadius&&t.x+t.getWidth>e.x-e.getRadius&&t.y<e.y+e.getRadius&&t.y+t.getHeight>e.y-e.getRadius}static checkCollisionRectOfRect(t,e){return t.x<e.x+e.getWidth&&t.x+t.getWidth>e.x&&t.y<e.y+e.getHeight&&t.y+t.getHeight>e.y}static applyMixins(t,e){e.forEach(e=>{Object.getOwnPropertyNames(e.prototype).forEach(s=>{t.prototype[s]=e.prototype[s]})})}}},"16c2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("p",{class:["message__p",t.styleState]},[t._v(t._s(t.message))])])},r=[],n=s("9ab4"),a=s("60a3");let c=class extends a["c"]{get styleState(){let t="message--primary";return this.state&&("error"===this.state&&(t="message--error"),"over"===this.state&&(t="message--over")),t}};Object(n["a"])([Object(a["b"])()],c.prototype,"message",void 0),Object(n["a"])([Object(a["b"])()],c.prototype,"state",void 0),c=Object(n["a"])([a["a"]],c);var o=c,h=o,l=s("2877"),u=Object(l["a"])(h,i,r,!1,null,null,null);e["a"]=u.exports},"50aa":function(t,e,s){"use strict";var i,r,n,a,c,o,h,l,u,d,g;s.d(e,"h",(function(){return i})),s.d(e,"j",(function(){return r})),s.d(e,"g",(function(){return n})),s.d(e,"b",(function(){return a})),s.d(e,"d",(function(){return c})),s.d(e,"a",(function(){return o})),s.d(e,"c",(function(){return h})),s.d(e,"f",(function(){return l})),s.d(e,"e",(function(){return u})),s.d(e,"i",(function(){return d})),s.d(e,"k",(function(){return g})),function(t){t[t["LEFT"]=37]="LEFT",t[t["RIGHT"]=39]="RIGHT",t[t["UP"]=38]="UP",t[t["DOWN"]=40]="DOWN"}(i||(i={})),function(t){t[t["START"]=0]="START",t[t["PLAY"]=1]="PLAY",t[t["OVER"]=2]="OVER"}(r||(r={})),function(t){t[t["RESTART"]=82]="RESTART",t[t["Q"]=81]="Q",t[t["W"]=87]="W",t[t["SPACE"]=32]="SPACE"}(n||(n={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=400]="HEIGHT"}(a||(a={})),function(t){t[t["WIDTH"]=640]="WIDTH",t[t["HEIGHT"]=640]="HEIGHT",t[t["SCALE_COEFFICIENT"]=20]="SCALE_COEFFICIENT"}(c||(c={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=720]="HEIGHT"}(o||(o={})),function(t){t[t["WIDTH"]=800]="WIDTH",t[t["HEIGHT"]=600]="HEIGHT"}(h||(h={})),function(t){t[t["WIDTH"]=450]="WIDTH",t[t["HEIGHT"]=450]="HEIGHT"}(l||(l={})),function(t){t[t["WIDTH"]=320]="WIDTH",t[t["HEIGHT"]=540]="HEIGHT",t[t["SCALE_COEFFICIENT"]=20]="SCALE_COEFFICIENT"}(u||(u={})),function(t){t[t["FIRST"]=0]="FIRST",t[t["SECOND"]=1]="SECOND",t[t["AI"]=2]="AI"}(d||(d={})),function(t){t[t["SLOW"]=8]="SLOW",t[t["MIDDLE"]=14]="MIDDLE",t[t["FAST"]=20]="FAST"}(g||(g={}))},"7cc2":function(t,e,s){"use strict";var i=s("9ab4"),r=s("60a3"),n=s("50aa");class a{constructor(t,e,s){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.canvas.width=e,this.canvas.height=s,this.canvas.setAttribute("tabindex","1"),this.canvas.focus()}addEventListener(t,e){this.canvas.addEventListener(t,e)}removeEventListener(t,e){this.canvas.removeEventListener(t,e)}get context(){return this.ctx}}let c=class extends r["c"]{constructor(){super(...arguments),this.canvas=null,this.width=0,this.height=0,this.globalState=n["j"].START,this.isInitCanvas=!1,this.message="",this.styleOfMessage=""}_initCanvas(t,e){return!!this.$refs.game&&(this.width=t,this.height=e,this.canvas=new a(this.$refs.game,t,e),this.context=this.canvas.context,this.isInitCanvas=!0,!0)}clearContext(){this.isInitCanvas&&(this.context.save(),this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.width,this.height),this.context.restore())}get isOver(){return this.globalState===n["j"].OVER}get getMessage(){return this.message}get getStyleOfMessage(){return this.styleOfMessage}get isMessage(){return this.isOver&&""!==this.message}_resetMessage(){this.message="",this.styleOfMessage=""}_setMessage(t,e){this.message=t,this.styleOfMessage=e}};c=Object(i["a"])([r["a"]],c);e["a"]=c},"87fe":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var i=s("b049");class r{constructor(t="default name",e=3){this.name="",this.lives=0,this.score=new i["a"],this.name=t,this.lives=e}addLive(t){this.lives+=t}subtractLive(t){t<0&&(t=Math.abs(t)),this.lives-t<0||(this.lives-=t)}addScore(t){this.score.increase(t)}subtractScore(t){this.score.decrease(t)}scoreToZero(){this.score.reset()}get getLives(){return this.lives}get getName(){return this.name}get getScore(){return this.score.getScore}get getPreviousScore(){return this.score.getPreviousScore}get getBest(){return this.score.getBest}}},"97e3":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tictactoe"},[s("div",{staticClass:"modes"},[s("button",{staticClass:"btn-outline btn-outline--play-with-ai",attrs:{type:"button"},on:{click:function(e){return t.setOpponent("AI")}}},[t._v("Play with AI")]),s("button",{staticClass:"btn-outline btn-outline--game-for-two",attrs:{type:"button"},on:{click:function(e){return t.setOpponent("Two")}}},[t._v("Game for two")])]),s("Scores",{attrs:{scores:t.getScores}}),s("div",{staticClass:"tictactoe__game"},[s("canvas",{ref:"game"}),t.isMessage?s("Message",{attrs:{message:t.getMessage,state:t.getStyleOfMessage}}):t._e(),s("button",{staticClass:"btn-outline btn-outline--restart",attrs:{type:"button"},on:{click:function(e){return t.restart()}}},[t._v("Restart")])],1)],1)},r=[],n=s("9ab4"),a=s("65d9"),c=s.n(a),o=s("60a3"),h=s("0b30"),l=s("50aa"),u=s("0063"),d=s("87fe"),g=s("16c2"),f=s("b6ab"),v=s("7cc2");let y=class extends(Object(a["mixins"])(v["a"])){constructor(){super(),this.currentPlayer=l["i"].FIRST,this.players=[l["i"].FIRST,l["i"].SECOND,l["i"].AI],this.winFirstPlayer=0,this.winSecondPlayer=0,this.grid=[[],[],[]],this.sizeGrid=0,this.currentOpponent="",this.scores=[],this.firstPlayer=new d["a"],this.secondPlayer=new d["a"],this.aiPlayer=new d["a"],this.cell={size:0}}run(){this._initInstance()}restart(){if(this._reset(),"Two"===this.currentOpponent)this._playWithHuman();else{if("AI"!==this.currentOpponent)return;this._playWithAI()}}setOpponent(t){this.currentOpponent=t}mounted(){this.run()}get getScores(){return this.scores=[{message:"First player",value:this.getFirstPlayerScore},{message:"Second player",value:this.getSecondPlayerScore},{message:"AI",value:this.getAiScore}],this.scores}get getFirstPlayerScore(){return this.firstPlayer.getScore}get getSecondPlayerScore(){return this.secondPlayer.getScore}get getAiScore(){return this.aiPlayer.getScore}_rerun(t){this.restart()}_playWithAI(){}_playWithHuman(){const t=t=>this._move(t);this.canvas.addEventListener("click",t),this.globalState=l["j"].PLAY;const e=setInterval(()=>{if(this.globalState===l["j"].OVER)return this.canvas.removeEventListener("click",t),void clearInterval(e)},100)}_reset(){this.globalState=l["j"].OVER,this._resetMessage(),this.board.draw(),this._resetGrid(),this._drawGrid()}_initInstance(){return(!1!==this.isInitCanvas||!1!==this._initCanvas(l["f"].WIDTH,l["f"].HEIGHT))&&(this.sizeGrid=3,this._generateCurrentPlayer(),this.board=new u["a"](this.context,this.width,this.height),this.board.draw(),this._initGrid(),this._drawGrid(),!0)}_generateCurrentPlayer(){const t=h["a"].randomIntByInterval(0,1);this.currentPlayer=this.players[t],this.currentPlayer===l["i"].FIRST&&(this.winFirstPlayer=this.sizeGrid,this.winSecondPlayer=-this.sizeGrid),this.currentPlayer===l["i"].SECOND&&(this.winSecondPlayer=this.sizeGrid,this.winFirstPlayer=-this.sizeGrid)}_resetGrid(){for(let t=0;t<this.sizeGrid;t++)this.grid[t].fill(0)}_initGrid(){for(let t=0;t<this.sizeGrid;t++)this.grid[t]=new Array(this.sizeGrid).fill(0)}_drawGrid(){const t=this.context.lineWidth=5;this.cell={size:Math.round((Math.min(this.width,this.height)-2*this.sizeGrid*t)/this.sizeGrid+2*t)};for(let e=0;e<this.sizeGrid;e++)for(let t=0;t<this.sizeGrid;t++)this.context.beginPath(),this.context.strokeStyle="#006E6D",this.context.strokeRect(this.cell.size*e,this.cell.size*t,this.cell.size,this.cell.size),this.context.closePath()}_checkState(){let t=0,e=0,s=0,i=0;const r=this.winFirstPlayer,n=this.winSecondPlayer;let a=0;for(let c=0;c<this.sizeGrid;c++)for(let t=0;t<this.sizeGrid;t++)0!==this.grid[c][t]&&a++;a===this.sizeGrid*this.sizeGrid&&this._gameOver("draw");for(let c=0;c<this.sizeGrid;c++){for(let s=0;s<this.sizeGrid;s++)t+=this.grid[c][s],e+=this.grid[s][c],t!==r&&e!==r||this._gameOver("first"),t!==n&&e!==n||this._gameOver("second");t=0,e=0}for(let c=0;c<this.sizeGrid;c++)s+=this.grid[c][c],s===r&&this._gameOver("first"),s===n&&this._gameOver("second");for(let c=0;c<this.sizeGrid;c++)i+=this.grid[c][this.sizeGrid-1-c],i===r&&this._gameOver("first"),i===n&&this._gameOver("second")}_gameOver(t){switch(this.globalState=l["j"].OVER,t){case"first":this.firstPlayer.addScore(1),this._setMessage("The first player won","over");break;case"second":this.secondPlayer.addScore(1),this._setMessage("The second player won","over");break;case"draw":this._setMessage("The game is draw","over");break;default:this._setMessage("Unrecorded situation","error")}}_drawCross(t,e){this.context.beginPath(),this.context.strokeStyle="#6B5B95";const s=this.cell.size/3;this.context.moveTo(t-s,e-s),this.context.lineTo(t+s,e+s),this.context.moveTo(t+s,e-s),this.context.lineTo(t-s,e+s),this.context.stroke(),this.context.closePath()}_drawCircle(t,e){this.context.beginPath(),this.context.strokeStyle="#FF6F61";const s=this.cell.size/3;this.context.arc(t,e,s,0,2*Math.PI),this.context.stroke(),this.context.closePath()}_setCurrentPlayer(t){this.currentPlayer=t}_move(t){const e=t.target.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top,r=h["a"].div(s,this.cell.size),n=h["a"].div(i,this.cell.size);if(0!==this.grid[n][r])return;const a=r*this.cell.size+this.cell.size/2,c=n*this.cell.size+this.cell.size/2;this.currentPlayer===l["i"].FIRST?(this._drawCircle(a,c),this._setCurrentPlayer(l["i"].SECOND),this.grid[n][r]=1):(this._drawCross(a,c),this._setCurrentPlayer(l["i"].FIRST),this.grid[n][r]=-1),this._checkState()}};Object(n["a"])([Object(o["d"])("currentOpponent")],y.prototype,"_rerun",null),y=Object(n["a"])([c()({components:{Message:g["a"],Scores:f["a"]}})],y);var S=y,p=S,_=s("2877"),b=Object(_["a"])(p,i,r,!1,null,null,null);e["default"]=b.exports},b049:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));class i{constructor(){this.previousScore=0,this.score=0,this.best=0}increase(t){t=Math.abs(t),this.score+=t,this._updatePreviousScore(),this._updateBest()}decrease(t){t<0&&(t=Math.abs(t)),this.score-t<0||(this.score-=t,this._updatePreviousScore())}reset(){this.score=0}get getScore(){return this.score}get getPreviousScore(){return this.previousScore}get getBest(){return this.best}_updatePreviousScore(){this.previousScore=this.score}_updateBest(){this.score>this.best&&(this.best=this.score)}}},b6ab:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scores"},t._l(t.scores,(function(e,i){return s("p",{key:i,staticClass:"scores__p",class:t.colors[i]},[t._v("\n    "+t._s(e.message)+" - "+t._s(e.value)+"\n  ")])})),0)},r=[],n=s("9ab4"),a=s("60a3");let c=class extends a["c"]{constructor(){super(...arguments),this.colors=["scores--color-scarlet","scores--color-turquoise","scores--color-light-blue"]}};Object(n["a"])([Object(a["b"])({default:[]})],c.prototype,"scores",void 0),c=Object(n["a"])([a["a"]],c);var o=c,h=o,l=s("2877"),u=Object(l["a"])(h,i,r,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-35c2422c.405b04f1.js.map