webpackJsonp([5],{1114:function(e,t){},623:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(627),c=a(i),o=n(634),l=a(o),d=n(42),f=a(d),b=n(99),h=a(b),S=n(100),j=a(S),y=n(651),p=a(y),m=n(56),g=a(m),C=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(628),n(635),n(43),n(101),n(102),n(661),n(57);var v=n(794),I=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(v),E=n(626),k=a(E);n(1114);var L=function(t){function n(t){s(this,n);var a=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return a.state={columns:[{title:"课程名称",dataIndex:"courseTitle",key:"courseTitle"},{title:"课程图",key:"qrCodePicUrl",dataIndex:"qrCodePicUrl",render:function(t){return e.createElement("img",{src:t,style:{width:"60px",height:"40px"}})}},{title:"更新期数",dataIndex:"description",key:"description"},{title:"购买量",dataIndex:"salesCounts",key:"salesCounts",render:function(e,t){return null==t.salesCounts?0:t.salesCounts}},{title:"状态",dataIndex:"courseState",key:"courseState",render:function(e,t){return"release"==t.courseState?"已上架":"已下架"}},{title:"操作",key:"action",render:function(t,n,s){return e.createElement("span",null,e.createElement("a",{onClick:function(){return a.deleteCourse(n,s)}},"删除"))}}],firstSubjectId:1,firstSubjectList:[],secondSubjectId:"",secondSubjectList:[],secondCourseList:[],totalCount:0,page:0,limit:10,deleteVisible:!1,loading:!1,deleteData:{}},a}return r(n,t),C(n,[{key:"componentDidMount",value:function(){this.getCourseTree()}},{key:"getCourseTree",value:function(){var e=this;I.getCourseTree().then(function(t){200===t.code&&e.setState({firstSubjectList:t.data,firstSubjectId:t.data[0].subjectId},function(){for(var t=0;t<e.state.firstSubjectList.length;t++)if(e.state.firstSubjectList[t].subjectId===e.state.firstSubjectId)return void e.setState({secondSubjectList:e.state.firstSubjectList[t].children,secondSubjectId:e.state.firstSubjectList[t].children[0].subjectId},function(){e.getCourseBySecondSubjectId()})})})}},{key:"getCourseBySecondSubjectId",value:function(){var e=this,t={subjectId:this.state.secondSubjectId};this.setState({loading:!0}),I.getCourseBySubjectId(t).then(function(t){var n=t.data;e.setState({secondCourseList:n.list,totalCount:t.data.totalCount,loading:!1})})}},{key:"onFatherChange",value:function(e){var t=this,n=this;this.setState({firstSubjectId:e.target.value},function(){for(var e=0;e<n.state.firstSubjectList.length;e++)if(n.state.firstSubjectList[e].subjectId===n.state.firstSubjectId)return void t.setState({secondSubjectList:n.state.firstSubjectList[e].children,secondSubjectId:n.state.firstSubjectList[e].children[0].subjectId},function(){n.getCourseBySecondSubjectId()})})}},{key:"onChildrenChange",value:function(e){var t=this;this.setState({secondSubjectId:e.target.value},function(){t.getCourseBySecondSubjectId()})}},{key:"deleteCourse",value:function(e){this.setState({deleteVisible:!0,deleteData:e})}},{key:"addCourse",value:function(){var e={source:"subjectManage",secondSubjectId:this.state.secondSubjectId,secondSubjectTitle:this.state.secondSubjectId},t={pathname:"/selectCourse",state:e};this.props.history.push(t)}},{key:"sureDeleteCourse",value:function(){var e=this,t={subjectId:this.state.secondSubjectId,courseId:this.state.deleteData.courseId};I.deleteCourseToSubject(t).then(function(t){t.data,200===t.data.code&&(g.default.success("删除成功",.8),e.getCourseBySecondSubjectId())}),this.setState({deleteVisible:!1})}},{key:"cancelDelete",value:function(){this.setState({deleteVisible:!1})}},{key:"pageChange",value:function(e){var t=this;this.setState({page:e,loading:!0},function(){t.getCourseBySecondSubjectId()})}},{key:"render",value:function(){var t=this;return e.createElement("div",null,e.createElement(k.default,{title:"课程主题管理"}),e.createElement("div",{className:"courseList-wrap"},e.createElement(h.default,{style:{marginBottom:25}},e.createElement(j.default,{span:19},e.createElement("span",{className:"title"},"一级分类："),e.createElement(p.default.Group,{buttonStyle:"solid",onChange:function(e){return t.onFatherChange(e)},value:this.state.firstSubjectId},this.state.firstSubjectList.map(function(t,n){return e.createElement(p.default.Button,{style:{marginRight:10},key:n,value:t.subjectId},t.title)})))),e.createElement(h.default,null,e.createElement(j.default,null,e.createElement("span",{className:"title"},"二级分类："),e.createElement(p.default.Group,{buttonStyle:"solid",onChange:function(e){return t.onChildrenChange(e)},value:this.state.secondSubjectId},this.state.secondSubjectList.map(function(t,n){return e.createElement(p.default.Button,{style:{marginRight:10},key:n,value:t.subjectId},t.title)})))),e.createElement(h.default,{style:{textAlign:"right"}},e.createElement(j.default,null,e.createElement(f.default,{type:"primary",onClick:function(e){return t.addCourse(e)}},"添加课程"))),e.createElement("div",{className:"course-list"},e.createElement(l.default,{rowKey:function(e){return e.index},columns:this.state.columns,dataSource:this.state.secondCourseList,loading:this.state.loading,pagination:{defaultPageSize:this.state.limit,current:this.state.page,total:this.state.totalCount,onChange:this.pageChange.bind(this)}})),e.createElement("div",{className:"model"},e.createElement(c.default,{title:"删除课程",visible:this.state.deleteVisible,onCancel:this.cancelDelete.bind(this),footer:[e.createElement(f.default,{key:"back",onClick:function(){return t.cancelDelete()}},"取消"),e.createElement(f.default,{key:"submit",type:"primary",onClick:function(){return t.sureDeleteCourse()}},"确定")]},e.createElement("p",null,"确定要删除",e.createElement("strong",null,"《",this.state.deleteData.courseTitle,"》"),"这门课程吗？")))))}}]),n}(e.Component);t.default=L}).call(t,n(1))}});