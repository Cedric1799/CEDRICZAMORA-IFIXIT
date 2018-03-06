!function(e,t,o,n){"use strict";t=void 0!==t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(n){var i,s=e(this),r=s.selector||"",c=(new Date).getTime(),l=[],a=arguments[0],f="string"==typeof a,m=[].slice.call(arguments,1);return s.each(function(){var s,d,u,h,g,p=e.isPlainObject(n)?e.extend(!0,{},e.fn.sticky.settings,n):e.extend({},e.fn.sticky.settings),b=p.className,v=p.namespace,x=p.error,C="."+v,S="module-"+v,y=e(this),k=e(t),z=e(p.scrollContext),T=(y.selector,y.data(S)),w=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},B=this;g={initialize:function(){g.determineContainer(),g.determineContext(),g.verbose("Initializing sticky",p,s),g.save.positions(),g.checkErrors(),g.bind.events(),p.observeChanges&&g.observeChanges(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),T=g,y.data(S,g)},destroy:function(){g.verbose("Destroying previous instance"),g.reset(),u&&u.disconnect(),h&&h.disconnect(),k.off("load"+C,g.event.load).off("resize"+C,g.event.resize),z.off("scrollchange"+C,g.event.scrollchange),y.removeData(S)},observeChanges:function(){"MutationObserver"in t&&(u=new MutationObserver(g.event.documentChanged),h=new MutationObserver(g.event.changed),u.observe(o,{childList:!0,subtree:!0}),h.observe(B,{childList:!0,subtree:!0}),h.observe(d[0],{childList:!0,subtree:!0}),g.debug("Setting up mutation observer",h))},determineContainer:function(){s=p.container?e(p.container):y.offsetParent()},determineContext:function(){if(d=p.context?e(p.context):s,0===d.length)return void g.error(x.invalidContext,p.context,y)},checkErrors:function(){if(g.is.hidden()&&g.error(x.visible,y),g.cache.element.height>g.cache.context.height)return g.reset(),void g.error(x.elementSize,y)},bind:{events:function(){k.on("load"+C,g.event.load).on("resize"+C,g.event.resize),z.off("scroll"+C).on("scroll"+C,g.event.scroll).on("scrollchange"+C,g.event.scrollchange)}},event:{changed:function(e){clearTimeout(g.timer),g.timer=setTimeout(function(){g.verbose("DOM tree modified, updating sticky menu",e),g.refresh()},100)},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==B||e(t).find(B).length>0)&&(g.debug("Element removed from DOM, tearing down events"),g.destroy())})})},load:function(){g.verbose("Page contents finished loading"),w(g.refresh)},resize:function(){g.verbose("Window resized"),w(g.refresh)},scroll:function(){w(function(){z.triggerHandler("scrollchange"+C,z.scrollTop())})},scrollchange:function(e,t){g.stick(t),p.onScroll.call(B)}},refresh:function(e){g.reset(),p.context||g.determineContext(),e&&g.determineContainer(),g.save.positions(),g.stick(),p.onReposition.call(B)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(b.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){g.lastScroll=e},elementScroll:function(e){g.elementScroll=e},positions:function(){var e={height:z.height()},t={margin:{top:parseInt(y.css("margin-top"),10),bottom:parseInt(y.css("margin-bottom"),10)},offset:y.offset(),width:y.outerWidth(),height:y.outerHeight()},o={offset:d.offset(),height:d.outerHeight()};s.outerHeight();g.is.standardScroll()||(g.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=z.scrollTop(),e.left=z.scrollLeft(),t.offset.top+=e.top,o.offset.top+=e.top,t.offset.left+=e.left,o.offset.left+=e.left),g.cache={fits:t.height+p.offset<=e.height,sameHeight:t.height==o.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:o.offset.top,height:o.height,bottom:o.offset.top+o.height}},g.set.containerSize(),g.stick(),g.debug("Caching element positions",g.cache)}},get:{direction:function(e){var t="down";return e=e||z.scrollTop(),void 0!==g.lastScroll&&(g.lastScroll<e?t="down":g.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||z.scrollTop(),g.lastScroll?e-g.lastScroll:0},currentElementScroll:function(){return g.elementScroll?g.elementScroll:g.is.top()?Math.abs(parseInt(y.css("top"),10))||0:Math.abs(parseInt(y.css("bottom"),10))||0},elementScroll:function(e){e=e||z.scrollTop();var t=g.cache.element,o=g.cache.scrollContext,n=g.get.scrollChange(e),i=t.height-o.height+p.offset,s=g.get.currentElementScroll(),r=s+n;return s=g.cache.fits||r<0?0:r>i?i:r}},remove:{lastScroll:function(){delete g.lastScroll},elementScroll:function(e){delete g.elementScroll},minimumSize:function(){s.css("min-height","")},offset:function(){y.css("margin-top","")}},set:{offset:function(){g.verbose("Setting offset on element",p.offset),y.css("margin-top",p.offset)},containerSize:function(){var e=s.get(0).tagName;"HTML"===e||"body"==e?g.determineContainer():Math.abs(s.outerHeight()-g.cache.context.height)>p.jitter&&(g.debug("Context has padding, specifying exact height for container",g.cache.context.height),s.css({height:g.cache.context.height}))},minimumSize:function(){var e=g.cache.element;s.css("min-height",e.height)},scroll:function(e){g.debug("Setting scroll on element",e),g.elementScroll!=e&&(g.is.top()&&y.css("bottom","").css("top",-e),g.is.bottom()&&y.css("top","").css("bottom",e))},size:function(){0!==g.cache.element.height&&0!==g.cache.element.width&&(B.style.setProperty("width",g.cache.element.width+"px","important"),B.style.setProperty("height",g.cache.element.height+"px","important"))}},is:{standardScroll:function(){return z[0]==t},top:function(){return y.hasClass(b.top)},bottom:function(){return y.hasClass(b.bottom)},initialPosition:function(){return!g.is.fixed()&&!g.is.bound()},hidden:function(){return!y.is(":visible")},bound:function(){return y.hasClass(b.bound)},fixed:function(){return y.hasClass(b.fixed)}},stick:function(e){var t=e||z.scrollTop(),o=g.cache,n=o.fits,i=o.sameHeight,s=o.element,r=o.scrollContext,c=o.context,l=g.is.bottom()&&p.pushing?p.bottomOffset:p.offset,e={top:t+l,bottom:t+l+r.height},a=(g.get.direction(e.top),n?0:g.get.elementScroll(e.top)),f=!n;0!==s.height&&!i&&(g.is.initialPosition()?e.top>=c.bottom?(g.debug("Initial element position is bottom of container"),g.bindBottom()):e.top>s.top&&(s.height+e.top-a>=c.bottom?(g.debug("Initial element position is bottom of container"),g.bindBottom()):(g.debug("Initial element position is fixed"),g.fixTop())):g.is.fixed()?g.is.top()?e.top<=s.top?(g.debug("Fixed element reached top of container"),g.setInitialPosition()):s.height+e.top-a>=c.bottom?(g.debug("Fixed element reached bottom of container"),g.bindBottom()):f&&(g.set.scroll(a),g.save.lastScroll(e.top),g.save.elementScroll(a)):g.is.bottom()&&(e.bottom-s.height<=s.top?(g.debug("Bottom fixed rail has reached top of container"),g.setInitialPosition()):e.bottom>=c.bottom?(g.debug("Bottom fixed rail has reached bottom of container"),g.bindBottom()):f&&(g.set.scroll(a),g.save.lastScroll(e.top),g.save.elementScroll(a))):g.is.bottom()&&(e.top<=s.top?(g.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),g.setInitialPosition()):p.pushing?g.is.bound()&&e.bottom<=c.bottom&&(g.debug("Fixing bottom attached element to bottom of browser."),g.fixBottom()):g.is.bound()&&e.top<=c.bottom-s.height&&(g.debug("Fixing bottom attached element to top of browser."),g.fixTop())))},bindTop:function(){g.debug("Binding element to top of parent container"),g.remove.offset(),y.css({left:"",top:"",marginBottom:""}).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top),p.onTop.call(B),p.onUnstick.call(B)},bindBottom:function(){g.debug("Binding element to bottom of parent container"),g.remove.offset(),y.css({left:"",top:""}).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom),p.onBottom.call(B),p.onUnstick.call(B)},setInitialPosition:function(){g.debug("Returning to initial position"),g.unfix(),g.unbind()},fixTop:function(){g.debug("Fixing element to top of page"),p.setSize&&g.set.size(),g.set.minimumSize(),g.set.offset(),y.css({left:g.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top),p.onStick.call(B)},fixBottom:function(){g.debug("Sticking element to bottom of page"),p.setSize&&g.set.size(),g.set.minimumSize(),g.set.offset(),y.css({left:g.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom),p.onStick.call(B)},unbind:function(){g.is.bound()&&(g.debug("Removing container bound position on element"),g.remove.offset(),y.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom))},unfix:function(){g.is.fixed()&&(g.debug("Removing fixed position on element"),g.remove.minimumSize(),g.remove.offset(),y.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom),p.onUnstick.call(B))},reset:function(){g.debug("Resetting elements position"),g.unbind(),g.unfix(),g.resetCSS(),g.remove.offset(),g.remove.lastScroll()},resetCSS:function(){y.css({width:"",height:""}),s.css({height:""})},setting:function(t,o){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(void 0===o)return p[t];p[t]=o}},internal:function(t,o){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(void 0===o)return g[t];g[t]=o}},debug:function(){!p.silent&&p.debug&&(p.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,p.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!p.silent&&p.verbose&&p.debug&&(p.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),g.verbose.apply(console,arguments)))},error:function(){p.silent||(g.error=Function.prototype.bind.call(console.error,console,p.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,o,n;p.performance&&(t=(new Date).getTime(),n=c||t,o=t-n,c=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:B,"Execution Time":o})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,0)},display:function(){var t=p.name+":",o=0;c=!1,clearTimeout(g.performance.timer),e.each(l,function(e,t){o+=t["Execution Time"]}),t+=" "+o+"ms",r&&(t+=" '"+r+"'"),(void 0!==console.group||void 0!==console.table)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,o,n){var s,r,c,l=T;return o=o||m,n=B||n,"string"==typeof t&&void 0!==l&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(o,n){var i=o!=s?n+t[o+1].charAt(0).toUpperCase()+t[o+1].slice(1):t;if(e.isPlainObject(l[i])&&o!=s)l=l[i];else{if(void 0!==l[i])return r=l[i],!1;if(!e.isPlainObject(l[n])||o==s)return void 0!==l[n]&&(r=l[n],!1);l=l[n]}})),e.isFunction(r)?c=r.apply(n,o):void 0!==r&&(c=r),e.isArray(i)?i.push(c):void 0!==i?i=[i,c]:void 0!==c&&(i=c),r}},f?(void 0===T&&g.initialize(),g.invoke(a)):(void 0!==T&&T.invoke("destroy"),g.initialize())}),void 0!==i?i:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,setSize:!0,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document);