(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{303:function(module,exports,__webpack_require__){__webpack_require__(304),__webpack_require__(476),__webpack_require__(477),__webpack_require__(660),__webpack_require__(663),__webpack_require__(666),module.exports=__webpack_require__(679)},378:function(module,exports){},477:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(239)},679:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(239).configure)([__webpack_require__(680)],module,!1)}).call(this,__webpack_require__(67)(module))},680:function(module,exports,__webpack_require__){var map={"./stories.tsx":688};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=680},682:function(module,exports,__webpack_require__){var api=__webpack_require__(683),content=__webpack_require__(684);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},684:function(module,exports,__webpack_require__){(exports=__webpack_require__(685)(!1)).push([module.i,"html {\n  font-size: 16px;\n  box-sizing: border-box;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nhtml,\nbody {\n  min-height: 100%;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\nbody {\n  margin: 2em;\n  font-size: 1rem;\n  font-family: monospace;\n  color: #333;\n}\nbody,\ninput,\nbutton {\n  -webkit-font-smoothing: antialiased;\n}\n.textarea {\n  width: 100%;\n  outline: 0;\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: #FFF;\n  border-left: 4px solid #005C9A;\n  resize: none;\n  font: inherit;\n}\n",""]),module.exports=exports},688:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FancyTextarea",(function(){return stories_FancyTextarea})),__webpack_require__.d(__webpack_exports__,"RegularTextarea",(function(){return stories_RegularTextarea})),__webpack_require__.d(__webpack_exports__,"WithMinimum3Rows",(function(){return stories_WithMinimum3Rows})),__webpack_require__.d(__webpack_exports__,"WithMaxHeight",(function(){return stories_WithMaxHeight})),__webpack_require__.d(__webpack_exports__,"WithFunctionRef",(function(){return stories_WithFunctionRef}));__webpack_require__(22),__webpack_require__(169),__webpack_require__(297),__webpack_require__(14),__webpack_require__(298),__webpack_require__(39);var jsx_runtime=__webpack_require__(6),react=__webpack_require__(4),dist=__webpack_require__(20),esm=(__webpack_require__(682),__webpack_require__(18),__webpack_require__(56),__webpack_require__(38),__webpack_require__(30),__webpack_require__(301),__webpack_require__(686),__webpack_require__(302));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var resize=function resize(rows,el){if(el){var overflowY="hidden",maxHeight=window.getComputedStyle(el).maxHeight;if("none"!==maxHeight)parseFloat(maxHeight)<el.scrollHeight&&(overflowY="");el.style.height="0",el.style.overflowY=overflowY,el.style.height="".concat(function getHeight(rows,el){var _window$getComputedSt=window.getComputedStyle(el),borderBottomWidth=_window$getComputedSt.borderBottomWidth,borderTopWidth=_window$getComputedSt.borderTopWidth,fontSize=_window$getComputedSt.fontSize,lineHeight=_window$getComputedSt.lineHeight,paddingBottom=_window$getComputedSt.paddingBottom,paddingTop=_window$getComputedSt.paddingTop,lh="normal"===lineHeight?1.2*parseFloat(fontSize):parseFloat(lineHeight),rowHeight=0===rows?0:lh*rows+parseFloat(borderBottomWidth)+parseFloat(borderTopWidth)+parseFloat(paddingBottom)+parseFloat(paddingTop),scrollHeight=el.scrollHeight+parseFloat(borderBottomWidth)+parseFloat(borderTopWidth);return Math.max(rowHeight,scrollHeight)}(rows,el),"px")}},source_ExpandingTextarea=function ExpandingTextarea(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,["forwardedRef"]),isForwardedRefFn="function"==typeof forwardedRef,internalRef=Object(react.useRef)(),ref=isForwardedRefFn||!forwardedRef?internalRef:forwardedRef,rows=props.rows?parseInt(""+props.rows,10):0,onChange=props.onChange,onInput=props.onInput;Object(react.useEffect)((function(){resize(rows,ref.current)}),[ref,rows]);var handleInput=Object(react.useCallback)((function(e){onChange&&onChange(e),onInput&&onInput(e),resize(rows,ref.current)}),[onChange,onInput,ref,rows]),handleRef=Object(react.useCallback)((function(node){ref.current=node,isForwardedRefFn&&forwardedRef(node)}),[forwardedRef,isForwardedRefFn,ref]);return Object(jsx_runtime.jsx)("textarea",Object.assign({},props,{onInput:handleInput,ref:handleRef,rows:rows}))};source_ExpandingTextarea.displayName="ExpandingTextarea";var source=Object(esm.a)(source_ExpandingTextarea);try{source_ExpandingTextarea.displayName="ExpandingTextarea",source_ExpandingTextarea.__docgenInfo={description:"",displayName:"ExpandingTextarea",props:{forwardedRef:{defaultValue:null,description:"",name:"forwardedRef",required:!1,type:{name:"RefObject<HTMLTextAreaElement> | RefFn"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((evt: FormEvent<HTMLTextAreaElement>) => void)"}},onInput:{defaultValue:null,description:"",name:"onInput",required:!1,type:{name:"((evt: FormEvent<HTMLTextAreaElement>) => void)"}},rows:{defaultValue:null,description:"",name:"rows",required:!1,type:{name:"string | number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/index.tsx#ExpandingTextarea"]={docgenInfo:source_ExpandingTextarea.__docgenInfo,name:"ExpandingTextarea",path:"source/index.tsx#ExpandingTextarea"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}__webpack_exports__.default={title:"ExpandingTextarea",component:source,parameters:{}};var stories_FancyTextarea=function FancyTextarea(){var textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current;null===(_textareaRef$current=textareaRef.current)||void 0===_textareaRef$current||_textareaRef$current.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Minimalist textarea"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{className:"textarea",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:Object(dist.number)("maxLength",3e3),name:"pet[notes]",onChange:handleChange,placeholder:Object(dist.text)("placeholder","Enter details here..."),ref:textareaRef,rows:Object(dist.text)("rows","1"),style:{display:"block",width:"350px"}})]})};stories_FancyTextarea.displayName="FancyTextarea";var stories_RegularTextarea=function RegularTextarea(){var textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current2;null===(_textareaRef$current2=textareaRef.current)||void 0===_textareaRef$current2||_textareaRef$current2.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Regular textarea"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:Object(dist.number)("maxLength",3e3),name:"pet[notes]",onChange:handleChange,placeholder:Object(dist.text)("placeholder","Enter details here..."),ref:textareaRef,style:{display:"block",width:"300px"}})]})};stories_RegularTextarea.displayName="RegularTextarea";var stories_WithMinimum3Rows=function WithMinimum3Rows(){var textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current3;null===(_textareaRef$current3=textareaRef.current)||void 0===_textareaRef$current3||_textareaRef$current3.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Regular textarea with minimum 3 rows"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:Object(dist.number)("maxLength",3e3),name:"pet[notes]",onChange:handleChange,placeholder:Object(dist.text)("placeholder","Enter details here..."),ref:textareaRef,rows:Object(dist.text)("rows","3"),style:{display:"block",width:"300px"}})]})};stories_WithMinimum3Rows.displayName="WithMinimum3Rows";var stories_WithMaxHeight=function WithMaxHeight(){var textareaRef=Object(react.useRef)(),handleChange=Object(react.useCallback)((function(e){console.log(e.target.value)}),[]);return Object(react.useEffect)((function(){var _textareaRef$current4;null===(_textareaRef$current4=textareaRef.current)||void 0===_textareaRef$current4||_textareaRef$current4.focus()}),[]),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Minimalist textarea with a max-height"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{className:"textarea",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id:"my-textarea",maxLength:Object(dist.number)("maxLength",3e3),name:"pet[notes]",onChange:handleChange,placeholder:Object(dist.text)("placeholder","Enter details here..."),ref:textareaRef,rows:Object(dist.text)("rows","1"),style:{display:"block",maxHeight:"100px",width:"350px"}})]})};stories_WithMaxHeight.displayName="WithMaxHeight";var stories_FunctionRef=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(FunctionRef,_Component);var _super=_createSuper(FunctionRef);function FunctionRef(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,FunctionRef),(_this=_super.call(this,props)).el=null,_this.handleChange=function(e){_this.setState({value:e.currentTarget.value})},_this.setRef=function(node){_this.el=node},_this.state={value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(FunctionRef,[{key:"render",value:function render(){return console.log(this.el),Object(jsx_runtime.jsxs)("main",{children:[Object(jsx_runtime.jsx)("h1",{children:"Textarea component that receiving a callback ref"}),Object(jsx_runtime.jsx)("label",{htmlFor:"my-textarea",children:"Please Enter Some Details:"}),Object(jsx_runtime.jsx)(source,{id:"my-textarea",maxLength:Object(dist.number)("maxLength",3e3),name:"pet[notes]",onChange:this.handleChange,placeholder:Object(dist.text)("placeholder","Enter details here..."),ref:this.setRef,style:{display:"block",width:"300px"},value:this.state.value})]})}}]),FunctionRef}(react.Component),stories_WithFunctionRef=function WithFunctionRef(){return Object(jsx_runtime.jsx)(stories_FunctionRef,{})};stories_WithFunctionRef.displayName="WithFunctionRef";try{stories_FancyTextarea.displayName="FancyTextarea",stories_FancyTextarea.__docgenInfo={description:"",displayName:"FancyTextarea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/stories.tsx#FancyTextarea"]={docgenInfo:stories_FancyTextarea.__docgenInfo,name:"FancyTextarea",path:"source/stories.tsx#FancyTextarea"})}catch(__react_docgen_typescript_loader_error){}try{stories_RegularTextarea.displayName="RegularTextarea",stories_RegularTextarea.__docgenInfo={description:"",displayName:"RegularTextarea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/stories.tsx#RegularTextarea"]={docgenInfo:stories_RegularTextarea.__docgenInfo,name:"RegularTextarea",path:"source/stories.tsx#RegularTextarea"})}catch(__react_docgen_typescript_loader_error){}try{stories_WithMinimum3Rows.displayName="WithMinimum3Rows",stories_WithMinimum3Rows.__docgenInfo={description:"",displayName:"WithMinimum3Rows",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/stories.tsx#WithMinimum3Rows"]={docgenInfo:stories_WithMinimum3Rows.__docgenInfo,name:"WithMinimum3Rows",path:"source/stories.tsx#WithMinimum3Rows"})}catch(__react_docgen_typescript_loader_error){}try{stories_WithMaxHeight.displayName="WithMaxHeight",stories_WithMaxHeight.__docgenInfo={description:"",displayName:"WithMaxHeight",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/stories.tsx#WithMaxHeight"]={docgenInfo:stories_WithMaxHeight.__docgenInfo,name:"WithMaxHeight",path:"source/stories.tsx#WithMaxHeight"})}catch(__react_docgen_typescript_loader_error){}try{stories_WithFunctionRef.displayName="WithFunctionRef",stories_WithFunctionRef.__docgenInfo={description:"",displayName:"WithFunctionRef",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["source/stories.tsx#WithFunctionRef"]={docgenInfo:stories_WithFunctionRef.__docgenInfo,name:"WithFunctionRef",path:"source/stories.tsx#WithFunctionRef"})}catch(__react_docgen_typescript_loader_error){}}},[[303,1,2]]]);
//# sourceMappingURL=main.c15cb5b23b7117342c90.bundle.js.map