/*
	*******适用于窗口视频播放*******
	
	
	(以下参数需根据实际情况传入)
		* vodServer : "",				//视频资源地址
		* position : {										//视频的所在位置和大小，分别为：左边距，上边距，宽，高
			left:"", top:"", width:"", height:""	
		}
		
*/

function apply(o, c, defaults){
    // no "this" reference for friendly out of scope calls
    if(defaults){
        apply(o, defaults);
    }
    if(o && c && typeof c == 'object'){
        for(var p in c){
            o[p] = c[p];
        }
    }
    return o;
};

/******************************  页面视频播放Start *************************************/
function WindowVideo(config){
	this.mp = new MediaPlayer(),
	apply(this, config, {});
	var _this = this;
	var T;
	function playVideo(){			//视频播放
		document.getElementById('ads').innerHTML='这是被插入的内容';
			document.body.bgColor = "transparent";				//背景透明
			_this.mp.setMuteFlag(1);
			_this.mp.setSingleMedia(_this.vodServer);
			_this.mp.setVideoDisplayArea(_this.position.left, _this.position.top, _this.position.width, _this.position.height);	//设置视频位置大小
			_this.mp.setVideoDisplayMode(_this.isFullScreen);
			_this.mp.refreshVideoDisplay();
			_this.mp.playFromStart();
	};
		
	this.stopVideo = function(){  		//停止播放
		this.mp.stop();
		clearInterval(T);
	};
	this.pause = function(){
		this.mp.pause();
	};
	this.resume = function(){
		this.mp.resume();
	};
	this.getcurrentPlayTime = function(){
		return this.mp.getCurrentPlayTime();
	}
	this.play = function(){
		playVideo();
	};
	this.end = function(callback){
		setTimeout(function(){T=setInterval(function(){if(_this.mp.getCurrentPlayTime() == 0){callback();}},1500);},3000);
	}
	this.replay = function(){				//单个视频循环
		this.stopVideo();
		playVideo();
		_this.end(function(){
			playVideo();
		});		
	};
}

document.onkeypress = grabPress;		//播放错误处理
function grabPress(d) {
	var f = d.which || d.keyCode;
	switch (f) {
	case 768:
		var b = Utility.getEvent();
		var c = 0;
		var a = jsonParse(b);
		if (!isNaN(a.error_code)) {
			c = parseInt(a.error_code, 10)
		}
		switch (c) {
			case 6:
			case 19:
				break;
			case 8:				//播放结束
				//doWindowVideoOver();
				break;
			case 20:
				break;
		}
		break;
	default:
		break
	}
}
function jsonParse(text) {
	try {
		return ! (/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g, ""))) && eval("(" + text + ")")
	} catch(e) {
		return false
	}
}

/******************************  页面视频播放End *************************************/
