(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{lMKa:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),o=a("mrSG"),c=a("q1tI"),i=a.n(c),r=a("MuoO"),s=a("L6Kr"),d=a("zqYd"),m=a("LLXN"),p=class extends c["Component"]{constructor(){super(...arguments),this.state={cate:"newIndexNewComic"},this.initData=(()=>{var e=this.props.dispatch;e({type:"comic/queryList",payload:{query:{update:!0,size:100,page:1},addon:{type:"newIndexNewComic"}}})})}componentDidMount(){this.initData()}render(){var e=this.props.comic,t=e.newIndexNewComic.list||[];return i.a.createElement("div",{style:{paddingBottom:"20px"}},i.a.createElement("div",{className:"container"},i.a.createElement(s["a"],{img:window.config.newComic,span:Object(m["formatMessage"])({id:"header.newComic"})}),i.a.createElement(n["a"],{bordered:!1},i.a.createElement(d["b"],{list:t}))))}};p=Object(o["a"])([Object(r["connect"])(e=>{var t=e.comic,a=e.category,n=e.loading;return{comic:t,category:a,loading:n.models.comic}})],p),t["default"]=p}}]);