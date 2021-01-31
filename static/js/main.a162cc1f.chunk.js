(this.webpackJsonpchess_app=this.webpackJsonpchess_app||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var r=t(1),i=t(2),p=t.n(i),l=t(9),s=t.n(l),y=(t(15),t(4)),n=t(5),o=t(7),c=t(6),b=(t(16),t(0)),v=t(3);t(17);var d=function(e){return Object(r.jsx)("div",{className:"square",onDragOver:function(a){return t=a,e.index,void t.preventDefault();var t},onDrop:function(a){return function(a,t){var r=a.dataTransfer.getData("id");e.movePieceHandler(parseInt(r),parseInt(e.index))}(a)},style:{backgroundColor:function(a){var t=e.piece,r=t.wVal,i=t.bVal,p={r:50,g:50,b:50,a:1};return"rgba("+(p=r>0||i>0?{r:r>0?200:50,g:50,b:i>0?200:50,a:2*(r+i)/20}:a%2===0&&Math.floor(a/8)%2===0||a%2===1&&Math.floor(a/8)%2===1?{r:202,g:212,b:219,a:1}:{r:171,g:180,b:186,a:1}).r+", "+p.g+", "+p.b+", "+p.a+")"}(e.index)},children:Object(r.jsx)("div",{className:"piece-container",onDragStart:function(a){return t=a,r=e.index,console.log("S:"+r),void t.dataTransfer.setData("id",r);var t,r},draggable:!0,children:Object(r.jsx)("img",{className:"piece-img",hidden:""===e.piece.img,src:e.piece.img})})})};var h=function(){for(var e=Array(64).fill({type:"e",player:"",wVal:0,bVal:0,img:""}),a=8;a<16;a++)e[a]={type:"pi",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"},e[a+40]={type:"pi",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg"};for(var t=16;t<48;t++)e[t]={type:"e",player:"",wVal:0,bVal:0,img:""};return e[0]={type:"ri",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"},e[7]={type:"ri",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"},e[56]={type:"ri",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"},e[63]={type:"ri",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg"},e[1]={type:"n",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"},e[6]={type:"n",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"},e[57]={type:"n",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"},e[62]={type:"n",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg"},e[2]={type:"b",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"},e[5]={type:"b",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"},e[58]={type:"b",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"},e[61]={type:"b",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg"},e[3]={type:"q",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"},e[4]={type:"ki",player:"b",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"},e[59]={type:"q",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg"},e[60]={type:"ki",player:"w",wVal:0,bVal:0,img:"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"},e},u=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(y.a)(this,t),(e=a.call(this)).state={grid:h()},e.refreshBoard=e.refreshBoard.bind(Object(v.a)(e)),e.movePieceHandler=e.movePieceHandler.bind(Object(v.a)(e)),e}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.refreshBoard()}},{key:"movePieceHandler",value:function(e,a){this.getMoves(parseInt(e)).includes(a)&&this.setState((function(t){var r=JSON.parse(JSON.stringify(t.grid));return"pi"!==r[e].type||3!==Math.floor(a/8)&&4!==Math.floor(a/8)?"pi"===r[e].type&&1!==Math.floor(a/8)&&6!==Math.floor(a/8)?(r[a]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},r[e]),{},{type:"p"}))),r[e]={type:"e",player:"",wVal:0,bVal:0}):2!==Math.floor(a/8)&&5!==Math.floor(a/8)||"e"!==r[a].type||""===r[a].player?"ki"===r[e].type?2===a&&"ri"===r[0].type?(r[2]=Object(b.a)(Object(b.a)({},r[e]),{},{type:"k"}),r[3]=Object(b.a)(Object(b.a)({},r[0]),{},{type:"r"}),r[0]={type:"e",player:"",wVal:0,bVal:0},r[e]={type:"e",player:"",wVal:0,bVal:0}):6===a&&"ri"===r[7].type?(r[6]=Object(b.a)(Object(b.a)({},r[e]),{},{type:"k"}),r[5]=Object(b.a)(Object(b.a)({},r[7]),{},{type:"r"}),r[7]={type:"e",player:"",wVal:0,bVal:0},r[e]={type:"e",player:"",wVal:0,bVal:0}):62===a&&"ri"===r[63].type?(r[62]=Object(b.a)(Object(b.a)({},r[e]),{},{type:"k"}),r[61]=Object(b.a)(Object(b.a)({},r[63]),{},{type:"r"}),r[63]={type:"e",player:"",wVal:0,bVal:0},r[e]={type:"e",player:"",wVal:0,bVal:0}):58===a&&"ri"===r[56].type?(r[58]=Object(b.a)(Object(b.a)({},r[e]),{},{type:"k"}),r[59]=Object(b.a)(Object(b.a)({},r[56]),{},{type:"r"}),r[56]={type:"e",player:"",wVal:0,bVal:0},r[e]={type:"e",player:"",wVal:0,bVal:0}):(r[a]=Object(b.a)(Object(b.a)({},r[e]),{},{type:"k"}),r[e]={type:"e",player:"",wVal:0,bVal:0}):(r[a]=JSON.parse(JSON.stringify(r[e])),r[e]={type:"e",player:"",wVal:0,bVal:0}):("w"===r[a].player?r[a-8]={type:"e",player:"",wVal:0,bVal:0}:"b"===r[a].player&&(r[a+8]={type:"e",player:"",wVal:0,bVal:0}),r[a]=JSON.parse(JSON.stringify(r[e])),r[e]={type:"e",player:"",wVal:0,bVal:0}):(r[a]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},r[e]),{},{type:"pe0"}))),"w"===r[e].player?r[e-8]={type:"ep",player:"w",wVal:0,bVal:0}:"b"===r[e].player&&(r[e+8]={type:"ep",player:"b",wVal:0,bVal:0}),r[e]={type:"e",player:"",wVal:0,bVal:0}),{grid:r}})),this.refreshBoard()}},{key:"renderSquare",value:function(e){return Object(r.jsx)(d,{index:e,piece:this.state.grid[e],movePieceHandler:this.movePieceHandler},e)}},{key:"getPaths",value:function(e){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=[],r=[],i="w"===e.player?1:-1,p=1,l=3,s=3,y=5,n=9,o=1;if("n"===e.type)r=t=[[{x:-1,y:2,v:l*i}],[{x:1,y:2,v:l*i}],[{x:-1,y:-2,v:l*i}],[{x:1,y:-2,v:l*i}],[{x:-2,y:1,v:l*i}],[{x:2,y:1,v:l*i}],[{x:-2,y:-1,v:l*i}],[{x:2,y:-1,v:l*i}]];else if("ri"===e.type||"r"===e.type){for(var c=[[],[],[],[]],b=1;b<=7;b++)c[0].push({x:0,y:-b,v:y*i}),c[1].push({x:b,y:0,v:y*i}),c[2].push({x:0,y:b,v:y*i}),c[3].push({x:-b,y:0,v:y*i});r=t=c}else if("b"===e.type){for(var v=[[],[],[],[]],d=1;d<=7;d++)v[0].push({x:-d,y:-d,v:s*i}),v[1].push({x:d,y:-d,v:s*i}),v[2].push({x:d,y:d,v:s*i}),v[3].push({x:-d,y:d,v:s*i});r=t=v}else if("q"===e.type){for(var h=[[],[],[],[],[],[],[],[]],u=1;u<=7;u++)h[0].push({x:0,y:-u,v:n*i}),h[1].push({x:u,y:0,v:n*i}),h[2].push({x:0,y:u,v:n*i}),h[3].push({x:-u,y:0,v:n*i}),h[4].push({x:-u,y:-u,v:n*i}),h[5].push({x:u,y:-u,v:n*i}),h[6].push({x:u,y:u,v:n*i}),h[7].push({x:-u,y:u,v:n*i});r=t=h}else if("ki"===e.type||"k"===e.type)t=[[{x:0,y:-1,v:o*i}],[{x:1,y:-1,v:o*i}],[{x:1,y:0,v:o*i}],[{x:1,y:1,v:o*i}],[{x:0,y:1,v:o*i}],[{x:-1,y:1,v:o*i}],[{x:-1,y:0,v:o*i}],[{x:-1,y:-1,v:o*i}]],r="ki"===e.type?[[{x:0,y:-1,v:o*i}],[{x:1,y:-1,v:o*i}],[{x:1,y:0,v:o*i},{x:2,y:0,v:o*i}],[{x:1,y:1,v:o*i}],[{x:0,y:1,v:o*i}],[{x:-1,y:1,v:o*i}],[{x:-1,y:0,v:o*i},{x:-2,y:0,v:o*i}],[{x:-1,y:-1,v:o*i}]]:t;else if("pi"===e.type||"pe"===e.type||"pe0"===e.type||"p"===e.type){var g=i>0?-1:1;t=[[{x:-1,y:g,v:p*i}],[{x:1,y:g,v:p*i}]],"pi"===e.type?r=[[{x:0,y:g,v:p*i},{x:0,y:2*g,v:p*i}],[{x:-1,y:g,v:p*i}],[{x:1,y:g,v:p*i}]]:"pe"!==e.type&&"p"!==e.type||(r=[[{x:0,y:g,v:p*i}],[{x:-1,y:g,v:p*i}],[{x:1,y:g,v:p*i}]])}return a?t:r}},{key:"getLegalMoves",value:function(e,a,t){for(var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=e.filter((function(e){return a%8+e.x>=0&&a%8+e.x<=7&&Math.floor(a/8)+e.y>=0&&Math.floor(a/8)+e.y<=7})),p=i,l=0;l<i.length;l++){var s=parseInt(a)+parseInt(i[l].x)+8*parseInt(i[l].y);if(t[s].player===t[a].player){p=i.slice(0,l);break}if(!(r||"pi"!==t[a].type&&"pe"!==t[a].type&&"p"!==t[a].type)){0===i[l].x&&t[s].player!==t[a].player&&""!==t[s].player||0!==i[l].x&&""===t[s].player?p=i.slice(0,l):0!==i[l].x&&t[s].player!==t[a].player&&""!==t[s].player&&(p=i.slice(0,l+1));break}if(""!==t[s].player&&t[s].player!==t[a].player){p=i.slice(0,l+1);break}}return p}},{key:"getMoves",value:function(e){var a=this,t=JSON.parse(JSON.stringify(this.state.grid)),r=this.getPaths(t[e],!1);return r=(r=r.map((function(r){return a.getLegalMoves(r,e,t,!1)})).flat()).map((function(a){return e+a.x+8*a.y}))}},{key:"analyze",value:function(e,a,t){var r=this,i=this.getPaths(a,!0);return(i=i.map((function(a){return r.getLegalMoves(a,e,t)})).flat()).forEach((function(a){a.v>0?t[e+a.x+8*a.y].wVal=t[e+a.x+8*a.y].wVal+a.v:t[e+a.x+8*a.y].bVal=t[e+a.x+8*a.y].bVal-a.v})),t}},{key:"refreshBoard",value:function(){var e=this;this.setState((function(a){for(var t=JSON.parse(JSON.stringify(a.grid)),r=0;r<8;r++)for(var i=0;i<8;i++)t[r+8*i].wVal=0,t[r+8*i].bVal=0;for(var p=0;p<8;p++)for(var l=0;l<8;l++)"pe0"===t[8*p+l].type?t[8*p+l]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},t[8*p+l]),{},{type:"pe"}))):"pe"===t[8*p+l].type&&(t[8*p+l]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},t[8*p+l]),{},{type:"p"})))),"ep"===t[8*p+l].type&&""!==t[8*p+l].player?t[8*p+l]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},t[8*p+l]),{},{type:"e"}))):"e"===t[8*p+l].type&&""!==t[8*p+l].player&&(t[8*p+l]=JSON.parse(JSON.stringify(Object(b.a)(Object(b.a)({},t[8*p+l]),{},{player:""})))),t=e.analyze(8*p+l,t[8*p+l],t);return{grid:t}}))}},{key:"render",value:function(){console.log("render");for(var e=[],a=0;a<8;a++){for(var t=[],i=0;i<8;i++)t.push(this.renderSquare(8*a+i));e.push(Object(r.jsx)("div",{className:"board-row",children:t},a))}return Object(r.jsx)("div",{className:"board",children:e})}}]),t}(p.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;return Object(y.a)(this,t),(e=a.call(this)).state={},e}return Object(n.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"app-body",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"title",children:"Chess Visualizer"}),Object(r.jsx)("h3",{className:"subtitle",children:"Piece Path Visualizer"})]})}),Object(r.jsx)("div",{className:"board-container",children:Object(r.jsx)(u,{})})]})}}]),t}(p.a.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(a){var t=a.getCLS,r=a.getFID,i=a.getFCP,p=a.getLCP,l=a.getTTFB;t(e),r(e),i(e),p(e),l(e)}))};s.a.render(Object(r.jsx)(p.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.a162cc1f.chunk.js.map