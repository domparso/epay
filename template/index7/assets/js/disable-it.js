(function(){'use strict';var devtools={open:false,orientation:null};var threshold=160;var emitEvent=function(state,orientation){window.dispatchEvent(new CustomEvent('devtoolschange',{detail:{open:state,orientation:orientation}}))};setInterval(function(){var widthThreshold=window.outerWidth-window.innerWidth>threshold;var heightThreshold=window.outerHeight-window.innerHeight>threshold;var orientation=widthThreshold?'vertical':'horizontal';if(!(heightThreshold&&widthThreshold)&&((window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized)||widthThreshold||heightThreshold)){if(!devtools.open||devtools.orientation!==orientation){emitEvent(true,orientation)}devtools.open=true;devtools.orientation=orientation}else{if(devtools.open){emitEvent(false,null)}devtools.open=false;devtools.orientation=null}},500);if(typeof module!=='undefined'&&module.exports){module.exports=devtools}else{window.devtools=devtools}})();if(window.devtools.open)actionOnOpenDevtool();window.addEventListener('devtoolschange',function(e){if(e.detail.open)actionOnOpenDevtool()});function actionOnOpenDevtool(){var span=$('<span>Close developer console and refresh page</span>');$("html").replaceWith(span)}$(document).bind("contextmenu",function(e){return false});$(document).keydown(function(e){if(e.which===123){return false}if(e.ctrlKey&&(e.keyCode===85)){return false}if(e.ctrlKey&&e.shiftKey&&(e.keyCode===74||e.keyCode===73)){return false}});