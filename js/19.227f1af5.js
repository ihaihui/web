webpackJsonp([19],{605:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(627),u=a(s),o=n(42),c=a(o),f=n(641),p=a(f),h=n(99),d=a(h),m=n(642),v=a(m),y=n(100),g=a(y),b=n(12),E=a(b),k=n(56),C=a(k),w=n(629),O=a(w),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(628),n(43),n(643),n(101),n(644),n(102),n(61),n(57),n(631);var V=n(658),j=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(V);n(680);var P=n(626),I=a(P),T=O.default.Option,M=function(t){function n(e){l(this,n);var t=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={previewVisible:!1,previewImage:"",fileList:[],imgUrl:"",courseList:[],selectChangeFlag:!1,inputValue:"",visible:!1,infoMsg:"该页面有未保存的数据，确定离开此页面？"},t}return i(n,t),S(n,[{key:"componentDidMount",value:function(){this._getCourseList(),this.props.location.state}},{key:"selectChange",value:function(e){this.setState({selectChangeFlag:!0,courseId:e})}},{key:"_getCourseList",value:function(){var e=this,t={};j.getCourseList(t).then(function(t){e.setState({courseList:t.data.list})})}},{key:"sureBanner",value:function(e){var t=this,n={courseId:this.state.courseId,imgUrl:this.state.imgUrl,showOrder:this.state.inputValue,bannerStatus:"release"};this.state.fileList.length?this.state.courseId?this.state.inputValue?j.saveBanner(n).then(function(e){var n=t;200===e.code&&(C.default.success("保存成功",.8),setTimeout(function(){n.props.history.push("/banner")},1e3))}):C.default.info("请填写banner序列号"):C.default.info("请选择一门课程列表"):C.default.info("请选择上传的图片")}},{key:"handleOk",value:function(){this.setState({visible:!1}),this.props.history.push("/banner")}},{key:"handleCancel",value:function(){this.setState({visible:!1})}},{key:"handlePreview",value:function(e){this.setState({previewImage:e.response.data.fileUrl||this.state.imgUrl,previewVisible:!0})}},{key:"imgHandleCancel",value:function(){this.setState({previewVisible:!1})}},{key:"inputChangeValue",value:function(e){this.setState({inputValue:e})}},{key:"handleChange",value:function(e){var t=e.fileList;this.setState({fileList:t}),t.length&&"done"===t[0].status?(C.default.success(t[0].name+" 上传成功！"),this.setState({imgUrl:t[0].response.data.key})):t.length&&"error"===t[0].status&&C.default.error(t[0].name+" 上传失败！")}},{key:"cancelBanner",value:function(){this.state.fileList.length||this.state.inputValue||this.state.selectChangeFlag?this.setState({visible:!0}):this.props.history.push("/banner")}},{key:"render",value:function(){var t=this,n={name:"inputFile",action:"http://39.98.32.147:58081/course/admin/file-upload/upload-img",listType:"picture-card",headers:{token:_.getStore("tz_token")}},a=this.state,l=a.previewVisible,r=a.previewImage,i=a.fileList,s=e.createElement("div",null,e.createElement(E.default,{type:"plus"}),e.createElement("div",{className:"ant-upload-text"},"上传图片"));return e.createElement("div",null,e.createElement(I.default,{title:"新增banner / 编辑banner"}),e.createElement("div",{className:"banner-wrapper"},e.createElement(d.default,null,e.createElement(g.default,{span:"3"},e.createElement("span",{className:"title"},"添加图片:")),e.createElement(g.default,{span:"18"},e.createElement(v.default,L({},n,{fileList:i,onPreview:function(e){return t.handlePreview(e)},onChange:function(e){return t.handleChange(e)}}),i.length<1?s:null))),e.createElement(d.default,{style:{marginTop:105}},e.createElement(g.default,{span:"3"},e.createElement("span",{style:{margin:10}},"排序号:")),e.createElement(g.default,null,e.createElement(p.default,{min:-1e4,max:1e4,step:.01,value:this.state.inputValue,onChange:function(e){return t.inputChangeValue(e)}}))),e.createElement(d.default,{style:{marginTop:105}},e.createElement(g.default,{span:"3"},e.createElement("span",{className:"title"},"选择课程:")),e.createElement(g.default,{span:"18"},e.createElement(O.default,{defaultValue:"请选择",style:{width:400},onChange:this.selectChange.bind(this)},this.state.courseList.map(function(t,n){return e.createElement(T,{key:n,value:t.courseId},t.courseTitle)})))),e.createElement(d.default,{style:{marginTop:155}},e.createElement(g.default,{span:"2"},e.createElement(c.default,{onClick:function(e){return t.cancelBanner(e)}},"取消")),e.createElement(g.default,{span:"6"},e.createElement(c.default,{type:"primary",onClick:function(e){return t.sureBanner(e)}}," 保存")))),e.createElement(u.default,{title:"提示",visible:this.state.visible,footer:[e.createElement(c.default,{key:"back",onClick:function(){return t.handleCancel()}},"取消"),e.createElement(c.default,{key:"submit",type:"primary",onClick:function(){return t.handleOk()}},"确定")]},e.createElement("p",null,this.state.infoMsg)),e.createElement(u.default,{visible:l,footer:null,onCancel:function(e){return t.imgHandleCancel(e)}},e.createElement("img",{alt:"image",style:{width:"100%"},src:r})))}}]),n}(e.Component);t.default=M}).call(t,n(1))}});