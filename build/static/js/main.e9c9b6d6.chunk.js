(this.webpackJsonphomework6=this.webpackJsonphomework6||[]).push([[0],{37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(14),l=a.n(s),o=a(7),c=a(4),r=a(9),d=a(8),h=a(6),p=a(24),u=a.n(p),m=a(22),b=a.n(m),j=a(53),v=a(2),O={title:{paddingLeft:"20px",paddingRight:"50px",position:"relative"},delete:{marginLeft:"0px",marginRight:"20px"}},f=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleChangeComplete",value:function(){this.props;this.props.ChangeCompleteItem(this.props.id)}},{key:"handleDelete",value:function(){this.props.DeleteItem(this.props.id)}},{key:"render",value:function(){var e;return Object(v.jsxs)("div",{className:"comment",children:[Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(b.a,{className:"author",style:O.delete,onClick:this.handleChangeComplete.bind(this),children:this.props.complete?"\u5df2\u5b8c\u6210":"\u672a\u5b8c\u6210"}),Object(v.jsxs)("span",{className:"author",style:O.title,children:[Object(v.jsx)("font",{color:"redblue",children:Object(v.jsx)("b",{children:this.props.text})}),Object(v.jsx)("span",{className:this.props.complete?"line":""})]}),Object(v.jsx)(u.a,(e={className:"ui blue button",style:O.delete,color:"secondary"},Object(h.a)(e,"style",{fontSize:21}),Object(h.a)(e,"onClick",this.handleDelete.bind(this)),Object(h.a)(e,"children","\u522a\u9664"),e))]}),Object(v.jsx)(j.a,{variant:"inset"})]})}}]),a}(i.a.Component),x=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"SubmitDelete",value:function(e){this.props.DeleteItemTop(e)}},{key:"ChangeDone",value:function(e){this.props.ChangeCompleteTop(e)}},{key:"render",value:function(){var e=this;console.log(this.props.data);var t=this.props.choosevalue,a=this.props.data.map((function(a,n){var i=a.id,s=a.text,l=a.complete,o=a.deleteFlag;return"1"==t&&!0!==o||"2"==t&&!1===l&&!0!==o||"3"==t&&!0===l&&!0!==o?Object(v.jsx)(f,{id:i,text:s,complete:l,ChangeCompleteItem:e.ChangeDone.bind(e),DeleteItem:e.SubmitDelete.bind(e)},n):void 0}));return Object(v.jsxs)("div",{children:[" ",a," "]})}}]),a}(i.a.Component),g={title:{width:200,display:"inline-block",marginRight:10,verticalAlign:"top"}},y=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.refs.text.value;if(t.trim()){var a=Math.floor(1e4*Math.random());this.props.AddTodoItem({id:a,text:t,complete:!1,deleteFlag:!1})}else alert("Input can't be null")}},{key:"render",value:function(){return Object(v.jsxs)("form",{className:"ui reply form",onSubmit:this.handleSubmit.bind(this),children:[Object(v.jsx)("div",{className:"field",style:g.title,children:Object(v.jsx)("input",{type:"text",placeholder:"Add a new todo....",ref:"text"})}),Object(v.jsx)("button",{type:"submit",className:"ui blue button",children:"Add"})]})}}]),a}(i.a.Component),C=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={choosevalue:1,data:e.props.data},e}return Object(c.a)(a,[{key:"ChooseValue",value:function(e){this.setState({choosevalue:e})}},{key:"OnAddTodoItem",value:function(e){var t=this.state.data.concat(e);this.setState({data:t})}},{key:"AllChangeComplete",value:function(e){var t=this.state.data.map((function(t,a){return t.id==e&&(t.complete=!t.complete),t}));this.setState({data:t})}},{key:"AllOnDeleteItem",value:function(e){console.log(e);var t=this.state.data.map((function(t){return console.log(t),t.id==e&&(t.deleteFlag=!0),t}));this.setState({data:t})}},{key:"render",value:function(){this.state.data;return Object(v.jsxs)("div",{className:"ui comments",children:[Object(v.jsx)("h1",{children:Object(v.jsx)("font",{face:"Arial",color:"redblue",children:"CGU Todolist"})}),Object(v.jsx)("div",{className:"ui divider"}),Object(v.jsx)(y,{AddTodoItem:this.OnAddTodoItem.bind(this)}),Object(v.jsx)(x,{data:this.state.data,choosevalue:this.state.choosevalue,ChangeCompleteTop:this.AllChangeComplete.bind(this),DeleteItemTop:this.AllOnDeleteItem.bind(this)})]})}}]),a}(i.a.Component);l.a.render(Object(v.jsx)(C,{data:[{id:0,text:"\u6e2c\u8a66A!!!",complete:!0,deleteFlag:!1},{id:1,text:"\u6e2c\u8a66B!!!",complete:!1,deleteFlag:!1},{id:2,text:"\u6e2c\u8a66C!!!",complete:!0,deleteFlag:!1}]}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e9c9b6d6.chunk.js.map