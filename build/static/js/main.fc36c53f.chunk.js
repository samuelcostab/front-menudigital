(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{58:function(e,t,a){e.exports=a.p+"static/media/logoMiniburg.5e28a153.png"},67:function(e,t,a){e.exports=a(83)},72:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),l=(a(72),a(14)),s=a(11),c=a(22),u=a(21),m=(a(73),a(118)),d=a(56),v=a(15),p=a(113),h=a(122),b=a(125),g=a(110),E=a(115),f=a(55),O=a.n(f),P=a(121),M=(a(74),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleBtnSize=function(e){var t=e.target.id,a=n.state,r=a.qtdP,i=a.qtdM,o=a.qtdG;"btn-add-P"===t&&(r+=1),"btn-add-M"===t&&(i+=1),"btn-add-G"===t&&(o+=1),"btn-remove-P"===t&&r>0&&(r-=1),"btn-remove-M"===t&&i>0&&(i-=1),"btn-remove-G"===t&&o>0&&(o-=1),n.setState({qtdP:r,qtdM:i,qtdG:o},(function(){n.setState({subTotal:n.calculateSubTotal()},(function(){var e=n.state;n.props.getOrderItem(e)}))}))},n.renderQtdP=function(){if(n.state.qtdP>0)return r.a.createElement(g.a,null,n.state.qtdP)},n.renderQtdM=function(){if(0!==n.state.qtdM)return r.a.createElement(g.a,null,n.state.qtdM)},n.renderQtdG=function(){if(n.state.qtdG>0)return r.a.createElement(g.a,null,n.state.qtdG)},n.calculateSubTotal=function(){var e=n.state,t=e.valueP,a=e.valueM,r=e.valueG,i=e.qtdP,o=e.qtdM,l=e.qtdG;return i*parseFloat(t.substring(2,7))+o*parseFloat(a.substring(2,7))+l*parseFloat(r.substring(2,7))},n.renderSubTotalItem=function(){var e=n.calculateSubTotal();if(e>0)return r.a.createElement("div",{className:"subTotal "},r.a.createElement(g.a,null,r.a.createElement(P.a,{fontWeight:"fontWeightBold",m:1},"SubTotal")),r.a.createElement(g.a,null,"R$ ",e.toFixed(2)))};var i=n.props.item,o=i.item,s=i.ingredients,c=i.valorP,u=i.valorM,m=i.valorG;return n.state={nameItem:o,ingredients:s,valueP:c,valueM:u,valueG:m,qtdP:0,qtdM:0,qtdG:0,subTotal:0},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nameItem"},r.a.createElement(g.a,{variant:"h6"},this.state.nameItem),r.a.createElement(g.a,null,r.a.createElement(P.a,{fontStyle:"oblique"},this.state.ingredients))),r.a.createElement("div",{className:"inputs"},r.a.createElement("div",{className:"sectionSize"},r.a.createElement(g.a,null,"P"),r.a.createElement(g.a,null,this.state.valueP),r.a.createElement("div",{className:"btnsAddOrRemove"},r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-remove-P",onClick:this.handleBtnSize},"-"),r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-add-P",onClick:this.handleBtnSize},"+")),this.renderQtdP()),r.a.createElement("div",{className:"sectionSize"},r.a.createElement(g.a,null,"M"),r.a.createElement(g.a,null,this.state.valueM),r.a.createElement("div",{className:"btnsAddOrRemove"},r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-remove-M",onClick:this.handleBtnSize},"-"),r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-add-M",onClick:this.handleBtnSize},"+")),this.renderQtdM()),r.a.createElement("div",{className:"sectionSize"},r.a.createElement(g.a,null,"G"),r.a.createElement(g.a,null,this.state.valueG),r.a.createElement("div",{className:"btnsAddOrRemove"},r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-remove-G",onClick:this.handleBtnSize},"-"),r.a.createElement("button",{className:"btnAddOrRemove",id:"btn-add-G",onClick:this.handleBtnSize},"+")),this.renderQtdG())),this.renderSubTotalItem())}}]),a}(n.Component)),S=(a(78),[{item:"Misto",ingredients:"Presunto, Queijo, Verduras, Maionese Temperada, Ketchup",valorP:"R$2.50",valorM:"R$3.50",valorG:"R$4.50"},{item:"Hamburger",ingredients:"Carne, Verduras, Maionese Temperada, Ketchup ",valorP:"R$2.50",valorM:"R$3.50",valorG:"R$4.50"},{item:"Presburg",ingredients:"Presunto, Carne, Verduras, Maionese Temperada, Ketchup ",valorP:"R$3.00",valorM:"R$4.50",valorG:"R$5.00"},{item:"California",ingredients:"Carne, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",valorP:"R$3.50",valorM:"R$5.50",valorG:"R$6.50"},{item:"Egg-California",ingredients:"Ovo, Carne, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",valorP:"R$4.00",valorM:"R$6.00",valorG:"R$7.00"},{item:"Egg-Burg",ingredients:"Ovo, Carne, Verduras, Maionese Temperada, Ketchup ",valorP:"R$3.00",valorM:"R$4.50",valorG:"R$5.50"},{item:"X-EggBurg",ingredients:"Carne, Ovo, Verduras, Maionese Temperada, Ketchup ",valorP:"R$3.50",valorM:"R$5.50",valorG:"R$6.50"},{item:"X-Calabresa",ingredients:"Calabresa, Quejo, Presunto, Verduras, Maionese Temperada, Ketchup",valorP:"R$3.50",valorM:"R$5.50",valorG:"R$6.50"},{item:"A Moda!",ingredients:"Carne, Calabresa, Ovo, Queijo, Presunto, Verduras, Maionese Temperada, Ketchup ",valorP:"R$5.00",valorM:"R$7.50",valorG:"R$9.00"}]),R=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).getSizesString=function(e,t,a){var n=" ";return e>0&&(n+="P -- qtd:"+e+"  "),t>0&&(n+="M -- qtd:"+t+"  "),a>0&&(n+="G -- qtd:"+a+" "),n},n.getOrderItem=function(e){var t=n.state,a=t.itemsOrder,r=t.subTotals,i=e.nameItem,o=e.qtdP,l=e.qtdM,s=e.qtdG,c=e.subTotal,u=n.getSizesString(o,l,s),m="%0A*Item:* "+i+"%20%20*Tamanho:* "+u;0===a.length&&(a.push(m),r.push(c)),a.find((function(e){return e.match(i)}))?a.forEach((function(e,t){a[t].match(i)&&(0===o&&0===l&&0===s?(a[t]="",r[t]=0):(a[t]=m,r[t]=c))})):(a.push(m),r.push(c)),n.setState({itemsOrder:a,subTotals:r},(function(){var e=n.state;n.props.getValueSection(e)}))},n.renderItems=function(){return S.map((function(e,t){return r.a.createElement("div",null,r.a.createElement(M,{ref:function(e){return n.items[t]=e},item:e,key:"item"+t,getOrderItem:n.getOrderItem.bind(Object(v.a)(n))}),r.a.createElement(p.a,{style:{margin:10}}))}))};var i=n.props.nameSection;return n.items=[3],n.state={nameSection:i,itemsOrder:[],subTotals:[]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(b.a,{expandIcon:r.a.createElement(O.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},r.a.createElement(g.a,{className:"titleSection",variant:"h6"},this.state.nameSection)),r.a.createElement(E.a,null,r.a.createElement(d.a,null,this.renderItems())))}}]),a}(n.Component),C=a(116),T=a(123),$=a(119),G=(a(81),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getValueSection=function(e){var t=e.itemsOrder,a=e.subTotals,r=0;a.forEach((function(e){r+=e})),n.setState({itemsOrder:t,totalPrice:r},(function(){var e=n.state;n.props.getOrderByClient(e)}))},n.handleInput=function(e){"input-nome"===e.target.id&&n.setState({custumer:e.target.value},(function(){})),"input-endereco"===e.target.id&&n.setState({end:e.target.value},(function(){})),"input-complemento"===e.target.id&&n.setState({complement:e.target.value},(function(){var e=n.state;n.props.getOrderByClient(e)})),"input-observacao"===e.target.id&&n.setState({observation:e.target.value},(function(){var e=n.state;console.log(e),n.props.getOrderByClient(e)}))},n.items=[3],n.state={custumer:"",end:"",complement:"",observation:"",itemsOrder:[],totalPrice:0},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(T.a,null,r.a.createElement($.a,{style:q.inputText,id:"input-nome",label:"Nome Cliente",helperText:"Este campo \xe9 importante!",variant:"outlined",onChange:this.handleInput}))),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(T.a,null,r.a.createElement($.a,{style:q.inputText,id:"input-endereco",label:"Endere\xe7o",helperText:"Este campo \xe9 importante!",placeholder:"Rua xxxx, 10000, Localidade",variant:"outlined",onChange:this.handleInput})),r.a.createElement(T.a,null,r.a.createElement($.a,{style:q.inputText,id:"input-complemento",label:"Complemento",helperText:"Este campo \xe9 importante!",placeholder:"Ponto de refer\xeancia",variant:"outlined",onChange:this.handleInput}))),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(R,{nameSection:"Hamburgers",getValueSection:this.getValueSection.bind(this)})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement("br",null),r.a.createElement("textarea",{className:"inputObservacao",id:"input-observacao",onChange:this.handleInput,placeholder:"Observa\xe7\xf5es sobre os itens do pedido",class:!0,cols:"30",rows:"6"})))}}]),a}(n.Component)),q={inputText:{margin:5}},x=a(117),y=a(58),j=a.n(y),A=(a(82),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getUrl=function(){var t="";return t=window.innerWidth>667?"https://web.whatsapp.com/send?phone=558881411861&text=":"https://api.whatsapp.com/send?phone=558881411861&text=",t+="*Cliente:* "+e.state.custumer+"%0A*Endere\xe7o:* "+e.state.end+"%0A*Complemento:* "+e.state.complement+"%0A"+e.state.itemsOrder+"%0A"+e.state.observation+"%0A%0A*Total:* R$ "+e.state.totalPrice.toFixed(2)},e.getOrderByClient=function(t){var a=t.custumer,n=t.end,r=t.complement,i=t.itemsOrder,o=t.totalPrice,l=t.observation;e.setState({custumer:a,end:n,complement:r,itemsOrder:i,totalPrice:o,observation:l},(function(){console.log()}))},e.renderSendWhatsApp=function(){var t=e.state,a=t.custumer,n=t.end,i=t.complement;t.itemsOrder;return""===a||""===n||""===i?r.a.createElement(x.a,{disabled:!0,href:"#",variant:"outlined",color:"primary"},"Enviar para WhatsApp"):r.a.createElement(x.a,{href:e.getUrl(),variant:"outlined",color:"primary"},"Enviar para WhatsApp")},e.state={custumer:"",end:"",complement:"",itemsOrder:"",observation:"",totalPrice:0,formVerify:!1},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{className:"container"},r.a.createElement(d.a,null,r.a.createElement("img",{className:"logo",src:j.a,alt:"Miniburg"}),r.a.createElement(G,{getOrderByClient:this.getOrderByClient.bind(this)}),r.a.createElement("br",null),this.renderSendWhatsApp())))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.fc36c53f.chunk.js.map