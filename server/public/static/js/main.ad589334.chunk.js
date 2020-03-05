(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,a){e.exports=a(91)},60:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),c=a.n(r),l=a(5),i=a(7),o=a(9),u=a(8),m=a(10),h=(a(59),a(60),a(22)),d=a(26),p=a(6),f=a(28),g=a(20),v=a(27),b=a.n(v),E=function e(){var t=this;Object(l.a)(this,e),this.signup=function(e){var a=e.email,n=e.password,s=e.username;return t.service.post("/signup",{email:a,password:n,username:s}).then((function(e){return e.data}))},this.login=function(e){var a=e.username,n=e.password;return t.service.post("/login",{username:a,password:n}).then((function(e){return e.data}))},this.logout=function(){return t.service.post("/logout").then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.service=b.a.create({baseURL:"".concat("https://datisfy.herokuapp.com/api","/auth"),withCredentials:!0})},j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(d.a)({},n,s))},a.postUser=function(){a.services.signup(a.state).then((function(e){a.setState({username:"",password:"",email:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:"",email:""},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,null,s.a.createElement("h1",null,"Registro de usuarios"),s.a.createElement(p.a,{onSubmit:this.handleSubmit},s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Label,null,"Email"),s.a.createElement(p.a.Control,{type:"email",name:"email",value:this.state.email,onChange:this.handleChange})),s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Label,null,"Contrase\xf1a"),s.a.createElement(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Label,null,"Usuario"),s.a.createElement(p.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement(f.a,{variant:"dark",type:"submit"},"Registrarse")))}}]),t}(n.Component),O=function(e){return s.a.createElement("div",null,s.a.createElement("figure",null,s.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/41Jf0GcKyqL._AC_SX425_.jpg",alt:"sample img"})),s.a.createElement("h1",null,"Soy el perfil de p*ta madre, Hola :",e.loggedInUser.username))},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(d.a)({},n,s))},a.postUser=function(){a.services.login(a.state).then((function(e){a.setState({username:"",password:""}),a.props.setTheUser(e),a.props.history.push("/")})).catch((function(e){return console.log({err:e})}))},a.handleSubmit=function(e){e.preventDefault(),a.postUser()},a.state={username:"",password:""},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,null,s.a.createElement("h1",null,"Inicio de sesi\xf3n"),s.a.createElement(p.a,{onSubmit:this.handleSubmit},s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Label,null,"Email"),s.a.createElement(p.a.Control,{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})),s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Label,null,"Contrase\xf1a"),s.a.createElement(p.a.Control,{type:"password",name:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement(f.a,{variant:"dark",type:"submit"},"Iniciar sesi\xf3n")))}}]),t}(n.Component),k=a(31),I=a(53),C=a(24),y=function e(){var t=this;Object(l.a)(this,e),this.track=function(e){return t.service.post("/searchTracks",e).then((function(e){return e.data}))},this.artist=function(e){return t.service.post("/searchArtists",e).then((function(e){return e.data}))},this.audioFeatures=function(e){return t.service.post("/audioFeatures",e).then((function(e){return console.log("............................................",e.data)}))},this.service=b.a.create({baseURL:"".concat("https://datisfy.herokuapp.com/api","/spotify"),withCredentials:!0})},U=(a(81),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({input:t},(function(){return a.filterItems(a.state.input)}))},a.state={input:"",selectedTerm:a.props.selectedTerm,selectionItems:[]},a.filterItems=a.props.filterItems,a.services=new y,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.selectedTerm!==e.selectedTerm&&this.setState({selectedTerm:this.props.selectedTerm})}},{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(p.a.Group,null,s.a.createElement(p.a.Control,{type:"text",name:"input",placeholder:"Search for ".concat(this.state.selectedTerm),value:this.state.input,onChange:this.handleChange,className:"search-txt",autoComplete:"off"}),s.a.createElement("i",{className:"fas fa-search"})))}}]),t}(n.Component)),w=(a(82),function(e){return s.a.createElement("div",{className:"browserBtn",onClick:function(){return e.click(e.name)}},e.name)}),T=(a(83),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).millisToMinutesAndSeconds=function(e){return Math.floor(e/6e4)+":"+((e%6e4/1e3).toFixed(0)<10?"0":"")+(e%6e4/1e3).toFixed(0)},a.toggleIsSelected=function(){a.setState({isSelected:!a.state.isSelected}),!a.state.isSelected&&a.setSelected(a.props)},a.toggleHover=function(){return a.setState({hover:!a.state.hover})},a.state={selectedObj:[],isSelected:!1,hover:!1},a.setSelected=a.props.setSelected,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"track"===this.props.type?s.a.createElement("div",{className:"spotcard d-flex",onClick:this.toggleIsSelected,onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,style:{backgroundColor:this.state.isSelected||this.state.hover?"#535353":"inherit"}},s.a.createElement("img",{src:this.props.album.images[0].url}),s.a.createElement("div",{className:"spotcard-body"},s.a.createElement("h1",null,this.props.name),s.a.createElement("p",null,this.props.type," - ",this.props.artists[0].name," - ",this.millisToMinutesAndSeconds(this.props.duration_ms)))):s.a.createElement("div",{className:"spotcard d-flex",onClick:this.toggleIsSelected,onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover,style:{backgroundColor:this.state.isSelected||this.state.hover?"#535353":"inherit"}},s.a.createElement("img",{className:"artistImg",src:this.props.images[0]?this.props.images[0].url:"https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg"}),s.a.createElement("div",{className:"spotcard-body"},s.a.createElement("h1",null,this.props.name),s.a.createElement("p",null,this.props.type," \xa0 \xa0 ",this.props.genres[0])))}}]),t}(n.Component)),L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={selected:[],selectionItems:a.props.selectionItems},a.setSelected=a.props.setSelected,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.selectionItems!==e.selectionItems&&this.setState({selectionItems:this.props.selectionItems})}},{key:"render",value:function(){var e=this;return this.state.selectionItems.map((function(t){return s.a.createElement(T,Object.assign({},t,{setSelected:e.setSelected}))}))}}]),t}(n.Component),N=a(13),x=(a(84),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).click=function(e){a.setState({selectedTerm:e})},a.reset=function(){a.setSelected({},!0),a.setState({hide:!1,selectedTerm:"",selectionItems:[]})},a.filterItems=function(e){switch(console.log("Estoy enganchado y este es el input",e),a.state.selectedTerm){case"track":a.services.track({searchInput:e}).then((function(e){console.log(e.tracks.items),a.setState({selectionItems:e.tracks.items})}));break;case"artist":a.services.artist({searchInput:e}).then((function(e){console.log(e.artists.items),a.setState({selectionItems:e.artists.items})}));break;default:console.log("default switch case")}},a.state={selectionItems:[],selectedTerm:"",hide:!1},a.services=new y,a.setSelected=a.props.setSelected,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("article",null,s.a.createElement("div",{className:"d-flex flex-column"},s.a.createElement(U,{selectedTerm:this.state.selectedTerm,selectionItems:this.state.selectionItems,filterItems:this.filterItems}),this.state.hide?s.a.createElement(s.a.Fragment,null,s.a.createElement(L,{selectionItems:this.state.selectionItems,setSelected:this.setSelected}),s.a.createElement(N.b,{className:"backBtn",to:"/charts",onClick:this.reset},"Go Back")):s.a.createElement("div",{className:"container"},s.a.createElement("div",{onClick:function(){return e.setState({hide:!0})}},s.a.createElement(w,{name:"track",click:this.click})),s.a.createElement("div",{onClick:function(){return e.setState({hide:!0})}},s.a.createElement(w,{name:"artist",click:this.click})))),s.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.3/css/all.css",integrity:"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/",crossOrigin:"anonymous"}))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={selectedObjs:a.props.selectedObjs,audioFeatures:[],arrID:[]},a.services=new y,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.props.selectedObjs!==e.selectedObjs&&this.setState({selectedObjs:this.props.selectedObjs});var n=Object(k.a)(this.state.selectedObjs),s=[];n.forEach((function(e){return s.push(e.id)})),t.selectedObjs.length!==s.length&&this.setState({arrID:s},(function(){return a.services.audioFeatures(a.state.arrID)}))}},{key:"render",value:function(){return s.a.createElement(g.a,null,"Soy el Charter y ahora solo funciono para radar tracks")}}]),t}(n.Component),F=(a(88),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).setSearch=function(e){a.setState({selectedSearch:e})},a.setSelected=function(e,t){if(t)a.setState({selectedObjs:[]});else{var n=Object(k.a)(a.state.selectedObjs);n.push(e),a.setState({selectedObjs:n})}},a.state={inputSearch:"",selectedObjs:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(g.a,{className:"statIndex"},s.a.createElement(I.a,null,s.a.createElement(C.a,null,s.a.createElement(x,{setSearch:this.setSearch,setSelected:this.setSelected})),s.a.createElement(C.a,null,s.a.createElement(D,{selectedObjs:this.state.selectedObjs}))))}}]),t}(n.Component)),H=a(19),M=a(15),G=(a(89),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=function(){a.services.logout().then((function(e){a.props.setTheUser(!1)})).catch((function(e){return console.log(e)}))},a.state={},a.services=new E,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("--Navbar 28",this.props);var e=this.props.loggedInUser?s.a.createElement(s.a.Fragment,null,"Hola, ",this.props.loggedInUser.username):s.a.createElement(s.a.Fragment,null,"Hola, invitad@");return this.props.loggedInUser?s.a.createElement(H.a,{className:"spotNav",expand:"lg",variant:"dark"},s.a.createElement(H.a.Brand,{href:"/"},"dev Nav!"),s.a.createElement(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(H.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(M.a,{className:"ml-auto"},s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/"},"Inicio")),s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/profile"},"Perfil")),s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/charts"},"charts")),s.a.createElement(M.a.Link,{onClick:this.logout},"Cerrar sesi\xf3n"),s.a.createElement(M.a.Link,{as:"small"},e)))):s.a.createElement(H.a,{className:"spotNav",expand:"lg",variant:"dark"},s.a.createElement(H.a.Brand,{href:"#home"},"dev Nav!"),s.a.createElement(H.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(H.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(M.a,{className:"ml-auto"},s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/"},"Inicio")),s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/signup"},"Registro")),s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/login"},"Inicio sesi\xf3n")),s.a.createElement(M.a.Link,{as:"div"}," ",s.a.createElement(N.b,{to:"/charts"},"charts")),s.a.createElement(M.a.Link,{as:"small"},e))))}}]),t}(n.Component)),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).componentDidUpdate=function(t,a){return console.log("El estado de App se ha actualizado:",e.state)},e.componentDidMount=function(){return e.fetchUser()},e.setTheUser=function(t){return e.setState({loggedInUser:t})},e.fetchUser=function(){e.services.loggedin().then((function(t){return e.setState({loggedInUser:t})})).catch((function(){return e.setState({loggedInUser:!1})}))},e.state={loggedInUser:!1},e.services=new E,e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(G,{setTheUser:this.setTheUser,loggedInUser:this.state.loggedInUser}),s.a.createElement(h.d,null,s.a.createElement(h.b,{exact:!0,path:"/",render:function(){return s.a.createElement("h1",null,"did u just uWu me???")}}),s.a.createElement(h.b,{path:"/signup",render:function(t){return s.a.createElement(j,Object.assign({setTheUser:e.setTheUser},t))}}),s.a.createElement(h.b,{path:"/login",render:function(t){return s.a.createElement(S,Object.assign({setTheUser:e.setTheUser},t))}}),s.a.createElement(h.b,{path:"/profile",render:function(){return e.state.loggedInUser?s.a.createElement(O,{loggedInUser:e.state.loggedInUser}):s.a.createElement(h.a,{to:"/"})}}),s.a.createElement(h.b,{path:"/charts",render:function(){return s.a.createElement(F,null)}})))}}]),t}(n.Component);a(90);c.a.render(s.a.createElement(N.a,null,s.a.createElement(B,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.ad589334.chunk.js.map