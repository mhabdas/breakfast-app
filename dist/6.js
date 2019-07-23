(window.webpackJsonp=window.webpackJsonp||[]).push([[6,18,19],{201:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=u(r),a=u(t(202)),i=u(t(203)),l=u(t(204));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.lazy(function(){return t.e(17).then(t.t.bind(null,354,7))});n.default=function(){return o.default.createElement(a.default,null,o.default.createElement(c,null,o.default.createElement("img",{src:i.default,alt:"Icon depicting breakfast plate"}),o.default.createElement("h1",null,"Breakfast")),o.default.createElement(r.Suspense,{fallback:o.default.createElement("div",null)},o.default.createElement(l.default,null)))}},202:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o,a,i=(r=["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n"],o=["\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 2rem;\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))),l=t(16),u=(a=l)&&a.__esModule?a:{default:a},c=t(17);var s=u.default.header(i,c.colors.dark);n.default=s},203:function(e,n,t){e.exports=t.p+"img/c752d8b1b96dd4e6aa2c79fdfa2b4e3e.svg"},204:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(0),a=s(o),i=s(t(205)),l=s(t(84)),u=s(t(341)),c=s(t(79));function s(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var f=a.default.lazy(function(){return Promise.resolve().then(t.t.bind(null,44,7))}),p=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.state={signIn:!1,signUp:!1},r.toggleModal=function(e){r.setState(function(n){return t={},r=e,o=!n[e],r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o,t;var t,r,o})},d(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.Component),r(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.signUp,r=n.signIn;return a.default.createElement("div",null,a.default.createElement(o.Suspense,{fallback:a.default.createElement("div",null)},a.default.createElement(f,{large:!0,action:function(){return e.toggleModal("signIn")},title:"Sign in"}),a.default.createElement(f,{large:!0,action:function(){return e.toggleModal("signUp")},title:"Sign up"}),a.default.createElement(c.default,{visible:r,closeModal:function(){return e.toggleModal("signIn")},title:"Sign in",body:a.default.createElement(l.default.Consumer,null,function(e){return a.default.createElement(u.default,{firebase:e})})}),a.default.createElement(c.default,{visible:t,closeModal:function(){return e.toggleModal("signUp")},title:"Sign up",body:a.default.createElement(l.default.Consumer,null,function(e){return a.default.createElement(i.default,{firebase:e})})})))}}]),n}();n.default=p},205:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(0),i=s(a),l=s(t(12)),u=s(t(93)),c=t(96);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var f=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.state={initialValues:{email:"",password:"",confirmPassword:""}},r.fieldsConfig=[{type:"text",name:"email",placeholder:"Email"},{type:"password",name:"password",placeholder:"Password"},{type:"password",name:"confirmPassword",placeholder:"Confirm password"}],r.onSuccessAction=function(e){console.log(e)},d(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.Component),o(n,[{key:"render",value:function(){var e=this.state.initialValues,n=this.props.firebase.doCreateUserWithEmailAndPassword;return i.default.createElement(u.default,r({initialValues:e,fields:this.fieldsConfig,validationSchema:c.signUpSchema,firebaseAction:n,onSuccessAction:this.onSuccessAction},this.props))}}]),n}();f.propTypes={initialValues:l.default.object,firebase:l.default.object},n.default=f},212:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Error=n.Input=n.Form=void 0;var r,o=s(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"],["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 1rem 0;\n"]),a=s(["\n  width: 300px;\n  height: 35px;\n  border: 2px solid ",";\n  background-color: #fff;\n  margin-bottom: 0.5rem;\n  padding: 0.25rem;\n  color: ",";\n  font-size: 1rem;\n\n  &:focus {\n    border: 2px solid ",";\n    outline: none;\n  }\n"],["\n  width: 300px;\n  height: 35px;\n  border: 2px solid ",";\n  background-color: #fff;\n  margin-bottom: 0.5rem;\n  padding: 0.25rem;\n  color: ",";\n  font-size: 1rem;\n\n  &:focus {\n    border: 2px solid ",";\n    outline: none;\n  }\n"]),i=s(["\n  font-size: 0.75rem;\n  color: ",";\n  margin-bottom: 0.5rem;\n"],["\n  font-size: 0.75rem;\n  color: ",";\n  margin-bottom: 0.5rem;\n"]),l=t(16),u=(r=l)&&r.__esModule?r:{default:r},c=t(17);function s(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=u.default.form(o),f=u.default.input(a,c.colors.dark,c.colors.dark,c.colors.accent),p=u.default.div(i,c.colors.accent);n.Form=d,n.Input=f,n.Error=p},341:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(0),i=s(a),l=s(t(12)),u=s(t(93)),c=t(96);function s(e){return e&&e.__esModule?e:{default:e}}function d(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var f=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.state={initialValues:{email:"",password:""}},r.fieldsConfig=[{type:"text",name:"email",placeholder:"Email"},{type:"password",name:"password",placeholder:"Password"}],r.onSuccessAction=function(e){console.log(e)},d(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.Component),o(n,[{key:"render",value:function(){var e=this.state.initialValues,n=this.props.firebase.doSignInWithEmailAndPassword;return i.default.createElement(u.default,r({initialValues:e,fields:this.fieldsConfig,validationSchema:c.signInSchema,firebaseAction:n,onSuccessAction:this.onSuccessAction},this.props))}}]),n}();f.propTypes={initialValues:l.default.object,firebase:l.default.object},n.default=f},44:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=l(t(0)),a=l(t(12)),i=t(45);function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var n=e.action,t=e.title,a=e.large,l=e.dataAttr;return o.default.createElement(i.StyledButton,r({},"string"==typeof n?{type:n}:{onClick:n},{isLarge:a,"data-attr":l}),t)};u.propTypes={action:a.default.oneOfType([a.default.func,a.default.string]).isRequired,title:a.default.string.isRequired,large:a.default.bool,dataAttr:a.default.number},u.defaultProps={large:!1,dataAttr:void 0},n.default=u},45:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ButtonList=n.StyledButton=void 0;var r,o=s(["\n  border: 2px solid ",";\n  background-color: ",";\n  padding: 0.5rem;\n  margin: 0.25rem;\n  color: ",";\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: background-color 1s;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    a {\n      color: white;\n    }\n  }\n\n  ","\n"],["\n  border: 2px solid ",";\n  background-color: ",";\n  padding: 0.5rem;\n  margin: 0.25rem;\n  color: ",";\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 2px;\n  transition: background-color 1s;\n\n  a {\n    color: ",";\n    text-decoration: none;\n    width: 100%;\n    height: 100%;\n    &:hover {\n      color: white;\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n    color: white;\n    a {\n      color: white;\n    }\n  }\n\n  ","\n"]),a=s(["\n      background-color: transparent;\n      border-color: ",";\n      color: ",";\n      font-size: 1rem;\n      height: 3rem;\n    "],["\n      background-color: transparent;\n      border-color: ",";\n      color: ",";\n      font-size: 1rem;\n      height: 3rem;\n    "]),i=s(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-bottom: 1rem;\n"],["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding-bottom: 1rem;\n"]),l=t(16),u=(r=l)&&r.__esModule?r:{default:r},c=t(17);function s(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=u.default.button(o,c.colors.dark,c.colors.light,c.colors.dark,c.colors.accent,c.colors.accent,function(e){return e.isLarge&&(0,l.css)(a,c.colors.light,c.colors.light)}),f=u.default.div(i);n.StyledButton=d,n.ButtonList=f},79:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(0)),o=i(t(12)),a=i(t(80));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.lazy(function(){return Promise.all([t.e(4),t.e(20)]).then(t.t.bind(null,140,7))}),u=function(e){var n=e.visible,t=e.title,o=e.body,i=e.footer,u=e.closeModal;return r.default.createElement(a.default,{visible:n},r.default.createElement(l,{closeModal:u}),r.default.createElement("h2",{style:{display:"flex",alignItems:"center"}},t),o,r.default.createElement("div",{className:"modal-footer"},i))};u.propTypes={visible:o.default.bool.isRequired,title:o.default.string.isRequired,body:o.default.node,footer:o.default.node,closeModal:o.default.func},n.default=u},80:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=s(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: calc(50px + 5.5rem) 50px 50px 50px;\n  z-index: 1;\n"],["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: calc(50px + 5.5rem) 50px 50px 50px;\n  z-index: 1;\n"]),o=s(["\n  background-color: whitesmoke;\n  border-radius: 5px;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 0.5rem 0.5rem 2rem 0.5rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n\n  h2 {\n    color: #ee6c4d;\n    text-align: center;\n    padding-bottom: 0.5rem;\n  }\n\n  h3 {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n  }\n\n  p {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n    max-width: 80%;\n    margin: 0 auto;\n\n    &:last-of-type {\n      font-size: 0.75rem;\n    }\n  }\n\n  img {\n    width: 80%;\n    border-radius: 5%;\n    opacity: 0.8;\n    padding-bottom: 0.5rem;\n  }\n"],["\n  background-color: whitesmoke;\n  border-radius: 5px;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 0.5rem 0.5rem 2rem 0.5rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n\n  h2 {\n    color: #ee6c4d;\n    text-align: center;\n    padding-bottom: 0.5rem;\n  }\n\n  h3 {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n  }\n\n  p {\n    color: #3d5a80;\n    padding-bottom: 0.5rem;\n    max-width: 80%;\n    margin: 0 auto;\n\n    &:last-of-type {\n      font-size: 0.75rem;\n    }\n  }\n\n  img {\n    width: 80%;\n    border-radius: 5%;\n    opacity: 0.8;\n    padding-bottom: 0.5rem;\n  }\n"]),a=c(t(16)),i=c(t(137)),l=c(t(0)),u=c(t(12));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var d=a.default.div(r),f=a.default.div(o),p=function(e){var n=e.children;return e.visible&&l.default.createElement(d,null,l.default.createElement(i.default,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!0,transitionLeaveTimeout:500},l.default.createElement(f,null,n)))};p.propTypes={children:u.default.oneOfType([u.default.arrayOf(u.default.node),u.default.node]).isRequired},n.default=p},93:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(t(0)),o=t(392),a=u(t(12)),i=t(212),l=u(t(44));function u(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var n=e.initialValues,t=e.fields,a=e.validationSchema,u=e.firebaseAction,c=e.onSuccessAction;return r.default.createElement(o.Formik,{initialValues:n,onSubmit:function(e,n){u(e).then(function(e){n.setSubmitting(!1),c&&c(e)},function(e){n.setSubmitting(!1),n.setStatus({msg:e.message})})},validationSchema:a},function(e){var n=e.values,o=e.handleChange,a=e.handleBlur,u=e.handleSubmit,c=e.errors,s=e.touched,d=e.status;return r.default.createElement(i.Form,{onSubmit:u},t.map(function(e){return r.default.createElement("div",{key:e.name},r.default.createElement(i.Input,{onChange:o,onBlur:a,value:n[e.name],type:e.type,name:e.name,placeholder:e.placeholder}),c[e.name]&&s[e.name]?r.default.createElement(i.Error,null,c[e.name]):null)}),d&&d.msg&&r.default.createElement(i.Error,null,d.msg),r.default.createElement(l.default,{title:"Submit",action:"submit"}))})};c.propTypes={initialValues:a.default.object,url:a.default.string,firebaseAction:a.default.func,fields:a.default.arrayOf(a.default.object),validationSchema:a.default.object,firebase:a.default.object,onSuccessAction:a.default.func},n.default=c},96:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.signUpSchema=n.signInSchema=void 0;var r=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(213));var o=r.object().shape({password:r.string().min(6,"Your password is too short!").required("This field is required!"),email:r.string().email("Your email is invalid!").required("This field is required!")}),a=r.object().shape({password:r.string().min(6,"Your password is too short!").required("This field is required!"),confirmPassword:r.string().oneOf([r.ref("password"),null],"Passwords must match"),email:r.string().email("Your email is invalid!").required("This field is required!")});n.signInSchema=o,n.signUpSchema=a}}]);
//# sourceMappingURL=6.js.map