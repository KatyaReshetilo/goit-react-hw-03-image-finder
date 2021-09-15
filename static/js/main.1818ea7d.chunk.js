(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"modal_overlay__8Ui7U",modal:"modal_modal__1KTvi"}},13:function(e,t,a){e.exports={imageGallery:"imageGallery_imageGallery__3p7QG"}},14:function(e,t,a){e.exports={button:"button_button__3DnGa"}},16:function(e,t,a){e.exports={overlay:"loder_overlay__NrIGq"}},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),s=a.n(o),c=a(3),i=a(4),l=a(6),m=a(5),u=a(11),h=a(9),g=a.n(h),b=a(0),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onClickItem=function(){e.props.openModal(e.props.bigImageURL)},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("li",{className:g.a.imageGalleryItem,children:Object(b.jsx)("img",{src:this.props.url,alt:"image",className:g.a.imageGalleryItemImage,onClick:this.onClickItem})})}}]),a}(n.Component),d=a(13),j=a.n(d),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],status:"idle"},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.imageName,r=this.props.page;e.imageName===n&&e.page===r||(fetch("https://pixabay.com/api/?q=".concat(n,"&page=").concat(r,"&key=").concat("22673335-b99cca5659da707c56ab45ca0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return a.setState({images:[].concat(Object(u.a)(a.state.images),Object(u.a)(e.hits))})})),this.props.statusOff(this.state.status))}},{key:"render",value:function(){var e=this,t=this.state.images;return Object(b.jsx)("ul",{className:j.a.imageGallery,children:t.map((function(t){return Object(b.jsx)(p,{url:t.webformatURL,openModal:function(){return e.props.onSelect(t.largeImageURL)},bigImgUrl:t.largeImageURL},t.webformatURL)}))})}}]),a}(n.Component),O=a(7),y=a.n(O),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handelNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handelSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()&&(e.props.onSubmit(e.state.imageName),e.setState({imageName:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:y.a.searchbar,children:Object(b.jsxs)("form",{className:y.a.searchForm,onSubmit:this.handelSubmit,children:[Object(b.jsx)("button",{type:"submit",className:y.a.searchFormButton,children:Object(b.jsx)("span",{className:y.a.searchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:y.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:this.state.imageName,onChange:this.handelNameChange,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),_=a(10),x=a.n(_),I=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClickBackdrope=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:x.a.overlay,onClick:this.handleClickBackdrope,children:Object(b.jsx)("div",{className:x.a.modal,children:Object(b.jsx)("img",{src:this.props.bigImg,alt:"",width:"800"})})})}}]),a}(n.Component),w=a(14),N=a.n(w);function k(e){var t=e.onClickAdd;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(b.jsx)("button",{className:N.a.button,type:"button",onClick:t,children:Object(b.jsx)("span",{children:"Load More"})})}var C=a(15),S=a.n(C),F=a(16),G=a.n(F),M=function(){return Object(b.jsx)("div",{className:G.a.overlay,children:Object(b.jsx)(S.a,{type:"Grid",color:"#00BFFF",height:100,width:100})})},L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:null,showModal:!1,bigImg:null,page:1,button:!1,status:"idle"},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handelFormSubmit=function(t){return e.setState({imageName:t,button:!0,status:"load"})},e.bigImgs=function(t){e.setState({bigImg:t}),e.toggleModal()},e.statusOff=function(t){setTimeout((function(t){return e.setState({status:t})}),500)},e.addMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{onSubmit:this.handelFormSubmit}),Object(b.jsx)(f,{imageName:this.state.imageName,onOpen:this.toggleModal,bigImg:this.state.bigImg,page:this.state.page,onSelect:this.bigImgs,statusOff:this.statusOff}),this.state.button&&Object(b.jsx)(k,{onClickAdd:this.addMore}),"load"===this.state.status&&Object(b.jsx)(M,{}),this.state.showModal&&Object(b.jsx)(I,{onClose:this.toggleModal,bigImg:this.state.bigImg})]})}}]),a}(n.Component),B=L;s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"searchbar_searchbar__2rBrK",searchForm:"searchbar_searchForm__1iWze",searchFormButton:"searchbar_searchFormButton__2j9WE",searchFormButtonLabel:"searchbar_searchFormButtonLabel__1CyX6",searchFormInput:"searchbar_searchFormInput__2oLNG"}},9:function(e,t,a){e.exports={imageGalleryItem:"imageGalleryItem_imageGalleryItem__VD0j3",imageGalleryItemImage:"imageGalleryItem_imageGalleryItemImage__3Ija8"}}},[[42,1,2]]]);
//# sourceMappingURL=main.1818ea7d.chunk.js.map