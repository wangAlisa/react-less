define("jsx/modules/aside.jsx",function(e,t,a){"use strict";var r=React.createClass({displayName:"Aside",getDefaultProps:function(){return{data:[]}},createList:function(){return this.props.data.map(function(e,t){return React.createElement("li",{key:t},React.createElement("a",{href:"#"+e.id},e.title))})},render:function(){return React.createElement("aside",{className:"aside"},React.createElement("ul",null,this.createList()))}});a.exports=r});