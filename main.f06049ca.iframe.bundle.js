/*! For license information please see main.f06049ca.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$":function(module,exports,__webpack_require__){var map={"./index.stories.tsx":"./src/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$"},"./src/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return index_stories_Default})),__webpack_require__.d(__webpack_exports__,"UseLoginForm",(function(){return index_stories_UseLoginForm})),__webpack_require__.d(__webpack_exports__,"WithChildren",(function(){return index_stories_WithChildren})),__webpack_require__.d(__webpack_exports__,"WithStyle",(function(){return index_stories_WithStyle})),__webpack_require__.d(__webpack_exports__,"WithClassName",(function(){return index_stories_WithClassName})),__webpack_require__.d(__webpack_exports__,"WithRender",(function(){return index_stories_WithRender}));var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),loadSdk=(__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),function loadSdk(){return new Promise((function(resolve,reject){var js=document.createElement("script");js.id="kakao-sdk",js.src="//developers.kakao.com/sdk/js/kakao.min.js",js.onload=resolve,document.body.append(js)}))}),DEFAULT_STYLE={display:"inline-block",padding:"0px",width:"222px",height:"49px",lineHeight:"49px",color:"rgb(60, 30, 30)",backgroundColor:"rgb(255, 235, 0)",border:"1px solid transparent",borderRadius:"3px",fontSize:"16px",textAlign:"center"};function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self)}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var src_KakaoLogin=function(_React$PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(KakaoLogin,_React$PureComponent);var _componentDidMount,_super=_createSuper(KakaoLogin);function KakaoLogin(){var _this;_classCallCheck(this,KakaoLogin);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_super.call.apply(_super,[this].concat(args))).state={isLoggedIn:!1},_this.onButtonClick=function(){var _window$Kakao,_this$props=_this.props,_this$props$throughTa=_this$props.throughTalk,throughTalk=void 0===_this$props$throughTa||_this$props$throughTa,_this$props$persistAc=_this$props.persistAccessToken,persistAccessToken=void 0===_this$props$persistAc||_this$props$persistAc,_this$props$needProfi=_this$props.needProfile,needProfile=void 0===_this$props$needProfi||_this$props$needProfi,_this$props$useLoginF=_this$props.useLoginForm,useLoginForm=void 0!==_this$props$useLoginF&&_this$props$useLoginF,onSuccess=_this$props.onSuccess,onFail=_this$props.onFail,method=useLoginForm?"loginForm":"login";(null===(_window$Kakao=window.Kakao)||void 0===_window$Kakao?void 0:_window$Kakao.Auth)[method]({throughTalk:throughTalk,persistAccessToken:persistAccessToken,success:function success(response){var _window$Kakao2;(_this.setState({isLoggedIn:!0}),needProfile)?null===(_window$Kakao2=window.Kakao)||void 0===_window$Kakao2||_window$Kakao2.API.request({url:"/v2/user/me",success:function success(profile){onSuccess({response:response,profile:profile})},fail:onFail}):onSuccess({response:response})},fail:onFail})},_this.onLogout=function(){var _window$Kakao3;null===(_window$Kakao3=window.Kakao)||void 0===_window$Kakao3||_window$Kakao3.Auth.logout((function(){var _this$props$onLogout,_this$props2,_window$Kakao4;null===(_this$props$onLogout=(_this$props2=_this.props).onLogout)||void 0===_this$props$onLogout||_this$props$onLogout.call(_this$props2,null===(_window$Kakao4=window.Kakao)||void 0===_window$Kakao4?void 0:_window$Kakao4.Auth.getAccessToken()),_this.setState({isLoggedIn:!1})}))},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(KakaoLogin,[{key:"componentDidMount",value:(_componentDidMount=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,loadSdk();case 2:window.Kakao.init(this.props.token);case 3:case"end":return _context.stop()}}),_callee,this)}))),function componentDidMount(){return _componentDidMount.apply(this,arguments)})},{key:"render",value:function render(){var onClick=this.state.isLoggedIn?this.onLogout:this.onButtonClick,_this$props3=this.props,render=_this$props3.render,_this$props3$classNam=_this$props3.className,className=void 0===_this$props3$classNam?"":_this$props3$classNam,_this$props3$style=_this$props3.style,style=void 0===_this$props3$style?DEFAULT_STYLE:_this$props3$style,_this$props3$children=_this$props3.children,children=void 0===_this$props3$children?"카카오로 로그인하기":_this$props3$children;return"function"==typeof render?render({onClick:onClick}):react_default.a.createElement("button",{type:"button",className:className,onClick:onClick,style:style},children)}}]),KakaoLogin}(react_default.a.PureComponent);src_KakaoLogin.DEFAULT_STYLE=DEFAULT_STYLE;var token="64d0c649f5b7e5a3ef9790587ee5f19b",index_stories_Default=(__webpack_exports__.default={parameters:{storySource:{source:'import React from "react";\nimport KakaoLogin from ".";\n\nconst token = "64d0c649f5b7e5a3ef9790587ee5f19b";\n\nexport default {\n  title: "KakaoLogin",\n  component: KakaoLogin,\n};\n\nexport const Default = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n  />\n);\n\nexport const UseLoginForm = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n    useLoginForm\n  />\n);\n\nexport const WithChildren = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n  >\n    <div style={{ color: "red" }}>카카오톡 로그인</div>\n  </KakaoLogin>\n);\n\nexport const WithStyle = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n    style={{\n      color: "blue",\n      backgroundColor: "red",\n    }}\n  />\n);\n\nexport const WithClassName = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n    className="can-you-see-me?"\n  />\n);\n\nexport const WithRender = () => (\n  <KakaoLogin\n    token={token}\n    onSuccess={console.log}\n    onFail={console.error}\n    onLogout={console.info}\n    render={({ onClick }) => {\n      return (\n        <a\n          href="#"\n          onClick={(e) => {\n            e.preventDefault();\n            onClick();\n          }}\n        >\n          카카오로 로그인하기\n        </a>\n      );\n    }}\n  />\n);\n',locationsMap:{default:{startLoc:{col:23,line:11},endLoc:{col:1,line:18},startBody:{col:23,line:11},endBody:{col:1,line:18}},"use-login-form":{startLoc:{col:28,line:20},endLoc:{col:1,line:28},startBody:{col:28,line:20},endBody:{col:1,line:28}},"with-children":{startLoc:{col:28,line:30},endLoc:{col:1,line:39},startBody:{col:28,line:30},endBody:{col:1,line:39}},"with-style":{startLoc:{col:25,line:41},endLoc:{col:1,line:52},startBody:{col:25,line:41},endBody:{col:1,line:52}},"with-class-name":{startLoc:{col:29,line:54},endLoc:{col:1,line:62},startBody:{col:29,line:54},endBody:{col:1,line:62}},"with-render":{startLoc:{col:26,line:64},endLoc:{col:1,line:84},startBody:{col:26,line:64},endBody:{col:1,line:84}}}}},title:"KakaoLogin",component:src_KakaoLogin},function Default(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info})});index_stories_Default.displayName="Default";var index_stories_UseLoginForm=function UseLoginForm(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info,useLoginForm:!0})};index_stories_UseLoginForm.displayName="UseLoginForm";var index_stories_WithChildren=function WithChildren(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info},react_default.a.createElement("div",{style:{color:"red"}},"카카오톡 로그인"))};index_stories_WithChildren.displayName="WithChildren";var index_stories_WithStyle=function WithStyle(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info,style:{color:"blue",backgroundColor:"red"}})};index_stories_WithStyle.displayName="WithStyle";var index_stories_WithClassName=function WithClassName(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info,className:"can-you-see-me?"})};index_stories_WithClassName.displayName="WithClassName";var index_stories_WithRender=function WithRender(){return react_default.a.createElement(src_KakaoLogin,{token:token,onSuccess:console.log,onFail:console.error,onLogout:console.info,render:function render(_ref){var _onClick=_ref.onClick;return react_default.a.createElement("a",{href:"#",onClick:function onClick(e){e.preventDefault(),_onClick()}},"카카오로 로그인하기")}})};index_stories_WithRender.displayName="WithRender"},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preset/addDecorator.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);
//# sourceMappingURL=main.f06049ca.iframe.bundle.js.map