(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"7fa3":function(t,e,s){"use strict";s("cb85")},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex align-items-center",attrs:{id:"reg"}},[s("b-container",{staticClass:"d-flex justify-center flex-column loginbg text-white p-3"},[s("div",{staticClass:"d-flex justify-content-center flex-column align-items-center"},[s("br"),s("h1",[t._v("後台登入")])]),s("br"),s("b-row",[s("b-col",{attrs:{cols:"12"}},[s("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[s("b-form-group",{attrs:{id:"input-group-1",label:"帳號","label-for":"input-1",state:t.accountState,description:"帳號長度為 8 ~ 20 個字","invalid-feedback":"帳號格式不符"}},[s("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"請輸入帳號...",state:t.accountState},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),s("b-form-group",{attrs:{id:"input-group-2",label:"密碼","label-for":"input-2",state:t.passwordState,description:"密碼長度為 8 ~ 20 個字","invalid-feedback":"密碼格式不符"}},[s("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"請輸入密碼...",state:t.passwordState},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"text-center"},[s("b-btn",{staticClass:"mx-1",attrs:{variant:"info",type:"submit"}},[t._v("登入")]),s("b-btn",{staticClass:"mx-1",attrs:{variant:"dark",type:"reset"}},[t._v("重置")])],1)],1)],1)],1)],1)],1)},n=[],o={name:"Reg",data:function(){return{account:"",password:""}},computed:{accountState:function(){return 0===this.account.length?null:this.account.length>=8&&this.account.length<=20},passwordState:function(){return 0===this.password.length?null:this.password.length>=8&&this.password.length<=20}},methods:{onSubmit:function(){var t=this;this.accountState&&this.passwordState&&this.axios.post("/users/login",this.$data).then((function(e){e.data.success?(t.$store.commit("login",e.data.result),t.$swal({icon:"success",title:"登入成功"}).then((function(){t.$router.push("/upload")}))):t.$swal({icon:"error",title:"發生錯誤",text:e.data.message})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"發生錯誤",text:e.response.data.message})}))},onReset:function(){this.account="",this.password=""}}},i=o,r=(s("7fa3"),s("2877")),c=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=c.exports},cb85:function(t,e,s){}}]);
//# sourceMappingURL=login.b3b8d4f0.js.map