jQuery,jQuery(document).ready(function(o){var r=document.querySelector("#page header");jQuery("#ast-scroll-top")&&jQuery("#ast-scroll-top").length&&(ast_scroll_top=function(){var o=jQuery("#ast-scroll-top"),e=o.css("content"),t=o.data("on-devices");if(e=e.replace(/[^0-9]/g,""),"both"==t||"desktop"==t&&"769"==e||"mobile"==t&&""==e){var l=window.pageYOffset||document.body.scrollTop;r&&r.length?l>r.offsetHeight+100?o.show():o.hide():300<jQuery(window).scrollTop()?o.show():o.hide()}else o.hide()},ast_scroll_top(),jQuery(window).on("scroll",function(){ast_scroll_top()}),jQuery("#ast-scroll-top").on("click",function(o){o.preventDefault(),jQuery("html,body").animate({scrollTop:0},200)}))});!function(r){"undefined"!=typeof astra&&(AstraProQuickView={stick_add_to_cart:astra.shop_quick_view_stick_cart,auto_popup_height_by_image:astra.shop_quick_view_auto_height,init:function(){this._init_popup(),this._bind()},_init_popup:function(){r("#ast-quick-view-content,#ast-quick-view-content div.product").css({"max-width":parseFloat(r(window).width())-120,"max-height":parseFloat(r(window).height())-120});var i=r(".ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link");0<i.length&&i.each(function(i){r(this).attr("href","javascript:void(0)")})},_bind:function(){r(document).off("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link").on("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link",AstraProQuickView._open_quick_view),r(document).on("click","#ast-quick-view-close",AstraProQuickView._close_quick_view),r(document).on("click",".ast-content-main-wrapper",AstraProQuickView._close_quick_view_on_overlay_click),r(document).on("keyup",AstraProQuickView._close_quick_view_on_esc_keypress)},_open_quick_view:function(i){i.preventDefault();var t=r(this),e=t.closest("li.product"),a=r(document).find("#ast-quick-view-modal"),s=r(document).find(".ast-quick-view-bg"),o=t.data("product_id");e.hasClass("ast-qv-on-image-click")&&(o=e.find(".ast-quick-view-data").data("product_id")),a.hasClass("loading")||a.addClass("loading"),s.hasClass("ast-quick-view-bg-ready")||s.addClass("ast-quick-view-bg-ready"),r(document).trigger("ast_quick_view_loading"),r.ajax({url:astra.ajax_url,type:"POST",dataType:"html",data:{action:"ast_load_product_quick_view",product_id:o},success:function(i){r(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html(i),AstraProQuickView._after_markup_append_process()}})},_after_markup_append_process:function(){var i=r(document).find("#ast-quick-view-modal"),t=i.find("#ast-quick-view-content"),e=t.find(".variations_form");if(!i.hasClass("open")){var a=t.outerHeight(),s=r(window).height(),o=r("html");s<a?o.css("margin-right",AstraProQuickView._get_scrollbar_width()):(o.css("margin-right",""),o.find(".ast-sticky-active, .ast-header-sticky-active, .ast-custom-footer").css("max-width","100%")),o.addClass("ast-quick-view-is-open")}0<e.length&&(e.trigger("check_variations"),e.trigger("reset_image"),e.wc_variation_form(),e.find("select").change());var c=i.find(".ast-qv-image-slider");1<c.find("li").length&&c.flexslider(),setTimeout(function(){AstraProQuickView._auto_set_content_height_by_image(),i.removeClass("loading").addClass("open"),r(".ast-quick-view-bg").addClass("open")},100),r(document).trigger("ast_quick_view_loader_stop")},_auto_set_content_height_by_image:function(){r("#ast-quick-view-modal").imagesLoaded().always(function(i){var t=r(document).find("#ast-quick-view-modal");s=t.find(".woocommerce-product-gallery__image img").outerHeight(),summary=t.find(".product .summary.entry-summary"),content=summary.css("content"),summary_content_ht=t.find(".summary-content").outerHeight();var e=t.find(".woocommerce-product-gallery__image img, .ast-qv-slides img"),a=parseFloat(r(window).height())-120,s=parseFloat(s);if(AstraProQuickView.auto_popup_height_by_image?e.length?s<a?summary.css("max-height",parseFloat(s)):summary.css("max-height",a):summary.css("width","100%"):summary.css("max-height",parseFloat(a)),AstraProQuickView.stick_add_to_cart){t.addClass("stick-add-to-cart");var o=t.find(".cart").outerHeight(),c=parseFloat(a)-parseFloat(o);if(o<s){t.find(".cart").addClass("stick");a=r("#ast-quick-view-content").outerHeight(),o=t.find(".cart").outerHeight(),c=parseFloat(a)-parseFloat(o);summary.css("max-height",parseFloat(c))}else c<a?summary.css("max-height",parseFloat(a)):summary.css("max-height","")}})},_close_quick_view_on_esc_keypress:function(i){i.preventDefault(),27===i.keyCode&&AstraProQuickView._close_quick_view()},_close_quick_view:function(i){i&&i.preventDefault(),r(document).find(".ast-quick-view-bg").removeClass("ast-quick-view-bg-ready"),r(document).find("#ast-quick-view-modal").removeClass("open").removeClass("loading"),r(".ast-quick-view-bg").removeClass("open"),r("html").removeClass("ast-quick-view-is-open"),r("html").css("margin-right",""),setTimeout(function(){r(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html("")},600)},_close_quick_view_on_overlay_click:function(i){this===i.target&&AstraProQuickView._close_quick_view()},_get_scrollbar_width:function(){var i=r('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');r("body").append(i);var t=r("div",i).innerWidth();i.css("overflow-y","scroll");var e=r("div",i).innerWidth();return r(i).remove(),t-e}},r(function(){AstraProQuickView.init()}))}(jQuery);!function(i){function n(e,t){$pg_wrap=i(".ast-product-gallery-layout-vertical"),0<$pg_wrap.length&&($pg_nav=$pg_wrap.find(".flex-control-nav"),0<$pg_nav.length&&(768<i(window).width()?!0===e?($pg_view_ht=$pg_wrap.find(".entry-summary").height(),$pg_nav.css({"max-height":$pg_view_ht+"px","overflow-x":"hidden","overflow-y":"auto","paddine-right":"2px"})):($pg_view_ht=$pg_wrap.find(".flex-viewport").height(),$pg_nav_ht=$pg_wrap.find(".flex-control-nav").height(),(!0===t||$pg_nav_ht>$pg_view_ht+50)&&$pg_nav.css({"max-height":$pg_view_ht+"px","overflow-x":"hidden","overflow-y":"auto","paddine-right":"2px"})):$pg_nav.css({"max-height":"","overflow-x":"","overflow-y":"","paddine-right":""})))}var e;jQuery(document).ready(function(e){var t;"undefined"!=typeof wp&&void 0!==wp.customize&&jQuery(window).trigger("resize"),jQuery(".ast-product-gallery-layout-vertical .flex-control-nav li").on("click",function(e){clearTimeout(t),t=setTimeout(function(){n(!1,!0)},500)})}),jQuery(window).on("load",function(){n()}),jQuery(window).on("resize",function(){clearTimeout(e),e=setTimeout(function(){n()},300)})}(jQuery);function astrawpWooQuantityButtons(i){var t=document.querySelector(".woocommerce div.product form.cart");i=i||".qty",$quantityBoxesWrap=document.querySelectorAll("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)");for(var e=0;e<$quantityBoxesWrap.length;e++){var a=$quantityBoxesWrap[e],n=a.querySelector(i);if(n&&"date"!==n.getAttribute("type")&&"hidden"!==n.getAttribute("type")){$qty_parent=n.parentElement,$qty_parent.classList.add("buttons_added"),$qty_parent.insertAdjacentHTML("afterbegin",'<a href="javascript:void(0)" class="minus">-</a>'),$qty_parent.insertAdjacentHTML("beforeend",'<a href="javascript:void(0)" class="plus">+</a>'),$quantityEach=document.querySelectorAll("input"+i+":not(.product-quantity)");for(var r=0;r<$quantityEach.length;r++){var o=$quantityEach[r],u=o.getAttribute("min");u&&0<u&&parseFloat(o.value)<u&&(o.value=u)}if(document.getElementsByTagName("BODY")[0].classList.contains("single-product")&&!t.classList.contains("grouped_form")){var s=document.querySelector(".woocommerce form input[type=number].qty");s.addEventListener("keyup",function(){var t=s.value;s.value=t})}for(var c=a.querySelectorAll(".plus, .minus"),l=0;l<c.length;l++){c[l].addEventListener("click",function(t){var e;e=t.target.parentElement.querySelector(i);var a=parseFloat(e.value),n=parseFloat(e.getAttribute("max")),r=parseFloat(e.getAttribute("min")),o=e.getAttribute("step");a&&""!==a&&"NaN"!==a||(a=0),""!==n&&"NaN"!==n||(n=""),""!==r&&"NaN"!==r||(r=0),"any"!==o&&""!==o&&void 0!==o&&"NaN"!==parseFloat(o)||(o=1),t.target.classList.contains("plus")?e.value=n&&(n==a||n<a)?n:a+parseFloat(o):r&&(r==a||a<r)?e.value=r:0<a&&(e.value=a-parseFloat(o));var u=document.createEvent("HTMLEvents");u.initEvent("change",!0,!1),e.dispatchEvent(u)},!1)}}}}window.addEventListener("load",function(t){astrawpWooQuantityButtons()}),function(){var t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){return this.addEventListener("load",function(){astrawpWooQuantityButtons()}),t.apply(this,arguments)}}();function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var a=0;a<e.length;a++)e[a].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-content").classList.remove("ast-hidden")});var t=document.querySelectorAll(".menu-container-width-mega");if(0<t.length)for(a=0;a<t.length;a++)t[a].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-menu-container").classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-width-mega");if(0<n.length)for(a=0;a<n.length;a++)n[a].addEventListener("mouseenter",function(e){var a=e.target.querySelector(".astra-full-megamenu-wrapper"),t=e.target.querySelector(".astra-mega-menu-width-full");a.classList.remove("ast-hidden"),t.classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");[].slice.call(items).forEach(function(g){jQuery(g).hover(function(){var e=jQuery(g).parents(".ast-container"),a=e.children(),t=e.parent(),n=jQuery(this);if(n.hasClass("full-width-mega")&&(a=jQuery(a).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var r=a.width(),s=a.offset(),i=n.offset(),u=i.left-(s.left+parseFloat(a.css("paddingLeft"))),o=t.width(),f=t.offset(),l=i.left-(f.left+parseFloat(t.css("paddingLeft")));if(n.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),r=$target_container.width()+"px";var d=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),m=n.offset(),c=jQuery(window).width()-d-m.left;u=parseInt($target_container.width()-c)}n.hasClass("full-width-mega")?(n.find(".astra-full-megamenu-wrapper").css({left:"-"+l+"px",width:o}),n.find(".astra-megamenu").css({width:r})):n.find(".astra-megamenu").css({left:"-"+u+"px",width:r})}else n.find(".astra-megamenu").css({left:"",width:"","background-image":""}),n.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})})}),[].slice.call(items).forEach(function(e){var a=jQuery(e).parents(".ast-container"),d=a.children(),m=a.parent(),c=jQuery(e);c.hasClass("full-width-mega")&&(d=jQuery(d).closest(".ast-container")),c.find(".menu-link").focusin(function(e){if(c.find(".sub-menu").addClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var a=d.width(),t=d.offset(),n=c.offset(),r=n.left-(t.left+parseFloat(d.css("paddingLeft"))),s=m.width(),i=m.offset(),u=n.left-(i.left+parseFloat(m.css("paddingLeft")));if(c.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),a=$target_container.width()+"px";var o=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),f=c.offset(),l=jQuery(window).width()-o-f.left;r=parseInt($target_container.width()-l)}c.hasClass("full-width-mega")?(c.find(".astra-full-megamenu-wrapper").css({left:"-"+u+"px",width:s}),c.find(".astra-megamenu").css({width:a})):c.find(".astra-megamenu").css({left:"-"+r+"px",width:a})}else c.find(".astra-megamenu").css({left:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})}),c.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(e).find(".sub-menu .menu-item").last().focusout(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),c.click(function(e){e.stopPropagation()})});!function(){var e,t;function o(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function l(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var n=t.offsetHeight,o=a.offsetHeight;if(n&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(n)-parseFloat(o);else s=parseFloat(o);e.style.maxHeight=Math.abs(s)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),n=0;a.length>n;n++)a[n].onclick=function(e){if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)for(var n=t[a].parentNode.querySelectorAll("a.astra-search-icon"),o=0;o<n.length;o++)n[o]==this&&(r(t[a]),t[a].querySelector("input.search-field").focus(),l(t[a]));else if(this.classList.contains("full-screen")){var s=document.getElementById("ast-seach-full-screen-form");s.classList.contains("full-screen")&&(r(s),c="full-screen",document.body.className+=" "+c,s.querySelector("input.search-field").focus())}var c};for(var c=document.getElementsByClassName("close"),i=(n=0,c.length);n<i;++n)c[n].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),o("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),n=0;n<a.length;n++)s(a[n])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();