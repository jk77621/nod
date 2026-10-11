(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"video_atlas_1", frames: [[948,545,66,26],[470,556,75,26],[948,517,72,26],[948,573,66,26],[796,462,150,160],[610,596,124,46],[194,556,90,96],[194,654,124,46],[286,556,90,96],[378,556,90,96],[320,654,124,46],[828,0,162,165],[736,596,54,54],[0,0,576,554],[828,167,114,114],[92,658,64,64],[578,302,216,292],[796,302,198,158],[578,0,248,300],[0,556,90,204],[92,556,100,100],[470,596,138,57],[944,167,77,76],[944,245,55,54],[948,462,54,53]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.말풍 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.영어자막 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.일시정지 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.자막끄기 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.재생 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.재생_dim = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.한글자막 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img0 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img1 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img10 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img2 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img3 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img4 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img5 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img6 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Coner_img7 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.비트맵1 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.End_A_tag = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.img_b01_136 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.img_b01_164 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.img_MV12_71 = function() {
	this.initialize(ss["video_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.심볼9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.6)").s().p("Ehj/AJRIAAyhIOZAAQFgAiA4FUIAAABQAkB7CbAaIAPACMCwAgADIAAKWg");
	this.shape.setTransform(640.025,59.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼9, new cjs.Rectangle(0,0,1280.1,118.7), null);


(lib.심볼8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.비트맵1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼8, new cjs.Rectangle(0,0,100,100), null);


(lib.심볼7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.말풍();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼7, new cjs.Rectangle(0,0,150,160), null);


(lib.심볼1복사본 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,204,0,0.008)").s().p("Eg0sABEIAAiIMBpYAAAIAACIg");
	this.shape.setTransform(337.25,-0.0243,1,2.8686);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼1복사본, new cjs.Rectangle(0,-19.7,674.5,39.3), null);


(lib.심볼1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Eg0rABFIAAiJMBpXAAAIAACJg");
	this.shape.setTransform(337.25,0.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.심볼1, new cjs.Rectangle(0,-6,674.5,13.7), null);


(lib.sym_b01_39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.img_MV12_71();
	this.instance.setTransform(-9.5,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sym_b01_39, new cjs.Rectangle(-9.5,-9.5,54,53), null);


(lib.sym_b01_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.img_b01_164();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sym_b01_30, new cjs.Rectangle(0,0,55,54), null);


(lib.mcSpeed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// 레이어_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-33.05,-13.15);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-35.9,-13.15);

	this.text = new cjs.Text("2배속", "22px 'HUNemodream180'", "#462411");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 62;
	this.text.parent = this;
	this.text.setTransform(-0.05,-11.15);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-37.55,-13.15);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-33.05,-13.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// 레이어_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBA00").s().p("Aj5C0Qg6AAgpgpQgpgpAAg6IAAhPQAAg6ApgpQApgpA6AAIHzAAQA6AAApApQApApAAA6IAABPQAAA6gpApQgpApg6AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39,-18,78,36);


(lib.mcCaptionArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 텍스트(영문)
	this.tfCaption = new cjs.Text("", "bold 55px 'Maplestory'");
	this.tfCaption.name = "tfCaption";
	this.tfCaption.textAlign = "center";
	this.tfCaption.lineHeight = 63;
	this.tfCaption.lineWidth = 981;
	this.tfCaption.parent = this;
	this.tfCaption.setTransform(0,-63.35);

	this.timeline.addTween(cjs.Tween.get(this.tfCaption).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCaptionArea, new cjs.Rectangle(-492.5,-65.3,985,65.3), null);


(lib.mc_time_control = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F80000").s().p("Ah+B/Qg1g1AAhKQAAhKA1g1QA0g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhKAAg0g1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_time_control, new cjs.Rectangle(-18,-18,36,36), null);


(lib.mc_btn_control = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 레이어_2
	this.instance = new lib.재생_dim();
	this.instance.setTransform(-45,-48);

	this.instance_1 = new lib.재생();
	this.instance_1.setTransform(-45,-48);

	this.instance_2 = new lib.일시정지();
	this.instance_2.setTransform(-45,-48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// 레이어_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(83,83,83,0.008)").s().p("AkxExIAApiIJiAAIAAJig");
	this.shape.setTransform(-0.65,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45,-48,90,96);


(lib.EndA_OBJ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// img
	this.instance = new lib.Coner_img10();
	this.instance.setTransform(-286.3,-275.8);

	this.instance_1 = new lib.Coner_img0();
	this.instance_1.setTransform(-76.95,-77.6);

	this.instance_2 = new lib.Coner_img1();
	this.instance_2.setTransform(-25.6,-25.55);

	this.instance_3 = new lib.Coner_img2();
	this.instance_3.setTransform(-55.2,-55.9);

	this.instance_4 = new lib.Coner_img3();
	this.instance_4.setTransform(-30.6,-30.6);

	this.instance_5 = new lib.Coner_img4();
	this.instance_5.setTransform(-106.8,-144.7);

	this.instance_6 = new lib.Coner_img5();
	this.instance_6.setTransform(-97,-77.65);

	this.instance_7 = new lib.Coner_img6();
	this.instance_7.setTransform(-122.5,-148.3);

	this.instance_8 = new lib.Coner_img7();
	this.instance_8.setTransform(-43.7,-100.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.3,-275.8,576,554);


(lib.Back_light_sym = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFCC","rgba(255,255,255,0)"],[0.239,0.533,0.816],0.1,-356.2,0.1,348.5).s().p("EgPQg41IeiAAMgPSBwBIjCBqg");
	this.shape.setTransform(-8,174.55,1.6069,1,0,0,0,-7.8,214.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.5,-403.7,314.2,727.5);


(lib.mcCaptioncopy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 레이어_3
	this.instance = new lib.자막끄기();
	this.instance.setTransform(-62,-23);

	this.instance_1 = new lib.한글자막();
	this.instance_1.setTransform(-62,-23);

	this.instance_2 = new lib.영어자막();
	this.instance_2.setTransform(-62,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-23,124,46);


(lib.sym_b01_35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sym_b01_39();
	this.instance.setTransform(15.9,15.4,0.5,0.5,0,0,0,15.9,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.3,scaleX:1,scaleY:1,y:15.35},6).to({scaleX:1.1714,scaleY:1.1714,y:15.4,alpha:0.4297},4).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.6,63.3,62.1);


(lib.sym_b01_28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.instance = new lib.sym_b01_30();
	this.instance.setTransform(17.5,17,1,1,0,0,0,27.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},9).to({_off:true},1).wait(40));

	// 레이어_1
	this.instance_1 = new lib.img_b01_136();
	this.instance_1.setTransform(-21,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:true},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,77,76);


(lib.middle_star_Y = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.EndA_OBJ("single",1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},34).to({_off:true},1).wait(4).to({_off:false,rotation:286.5283},0).to({startPosition:1},1).to({_off:true},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.2,-103.6,204.3,202.2);


(lib.middle_star_W = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.EndA_OBJ("single",3);
	this.instance.setTransform(-0.1,0,0.81,0.81,-54.9267,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:305.0733},36).to({_off:true},1).wait(2).to({_off:false,regY:-0.1,scaleX:0.8099,scaleY:0.8099,rotation:231.6025,x:-0.15,y:0.15},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.2,-66.5,131.10000000000002,130.1);


(lib.mcSpeedBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_2
	this.speed2 = new lib.mcSpeed();
	this.speed2.name = "speed2";
	this.speed2.setTransform(0,-72);

	this.speed1 = new lib.mcSpeed();
	this.speed1.name = "speed1";
	this.speed1.setTransform(0,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.speed1},{t:this.speed2}]}).wait(1));

	// 레이어_1
	this.speed0 = new lib.mcSpeed();
	this.speed0.name = "speed0";

	this.timeline.addTween(cjs.Tween.get(this.speed0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcSpeedBtn, new cjs.Rectangle(-39,-90,78,108), null);


(lib.mc_timebar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// handler
	this.handler = new lib.mc_time_control();
	this.handler.name = "handler";

	this.timeline.addTween(cjs.Tween.get(this.handler).wait(1));

	// new Progress
	this.progress = new lib.심볼1();
	this.progress.name = "progress";
	this.progress.setTransform(6.85,-0.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0001").s().p("AAfBEIgBAAIgCAAQgagBgSgSQgMgNgFgPQgDgKAAgLQAAgbAUgVQASgSAagBIACAAIABAAIAGAAIAACHIgGAAg");
	this.shape.setTransform(3.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.progress}]}).wait(1));

	// new back
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg0rAA9QgcABgUgVQgRgRgCgYQACgXARgRQAUgUAcgBMBpWAAAQAcABAUAUQASARACAXQgCAYgSARQgUAVgcgBg");
	this.shape_1.setTransform(343.975,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("EA1bgACQgUgVgcAAMhpWAAAQgcAAgUAVQgRAQgCAYIgBgHQAAgdAUgSQAUgVAcAAMBpWAAAQAcAAAUAVQAVASAAAdIgBAHQgCgYgSgQg");
	this.shape_2.setTransform(343.975,-3.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// instance
	this.back = new lib.심볼1복사본();
	this.back.name = "back";
	this.back.setTransform(6.85,-0.85);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_timebar, new cjs.Rectangle(-18,-20.5,706,39.3), null);


(lib.efx_Pat_star_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// EndA_OBJ
	this.instance = new lib.EndA_OBJ("single",8);
	this.instance.setTransform(0,0.05,0.9999,0.9999,-1.7314);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7.1,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_1 = new lib.EndA_OBJ("single",8);
	this.instance_1.setTransform(-0.05,0,1,1,114.2568);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-703.9,y:-310.35,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_2 = new lib.EndA_OBJ("single",7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_3 = new lib.EndA_OBJ("single",7);
	this.instance_3.setTransform(0,0,1,1,173.9546);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-493.7,y:-462.6,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_4 = new lib.EndA_OBJ("single",7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_5 = new lib.EndA_OBJ("single",6);
	this.instance_5.setTransform(-0.2,0.1,0.9999,0.9999,-1.867,0,0,-0.2,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-477.65,y:478.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_6 = new lib.EndA_OBJ("single",6);
	this.instance_6.setTransform(-0.1,-0.1,0.9999,0.9999,99.1794,0,0,-0.1,0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-219.15,y:-580.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_7 = new lib.EndA_OBJ("single",6);
	this.instance_7.setTransform(0.05,-0.15,0.9999,0.9999,156.9464,0,0,-0.1,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:326.5,y:-486.9,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_8 = new lib.EndA_OBJ("single",5);
	this.instance_8.setTransform(0.15,-0.05,1,1,-164.8818,0,0,-0.1,0.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:577.95,y:-452.75,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_9 = new lib.EndA_OBJ("single",5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-292.35,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(17));

	// EndA_OBJ
	this.instance_10 = new lib.EndA_OBJ("single",4);
	this.instance_10.setTransform(0,0,0.75,0.75);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:465.15,y:-427.65,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_11 = new lib.EndA_OBJ("single",4);
	this.instance_11.setTransform(0,0,0.75,0.75);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-166.15,y:-453.5,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_12 = new lib.EndA_OBJ("single",4);
	this.instance_12.setTransform(0,0,0.75,0.75);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-155.45,y:638.75,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_13 = new lib.EndA_OBJ("single",4);
	this.instance_13.setTransform(0,0,0.75,0.75);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:412.1,y:552.7,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_14 = new lib.EndA_OBJ("single",4);
	this.instance_14.setTransform(0.1,0,0.75,0.75,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:486.25,y:447.2,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_15 = new lib.EndA_OBJ("single",4);
	this.instance_15.setTransform(0.05,0.05,1.5,1.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:173.3,y:548.85,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_16 = new lib.EndA_OBJ("single",4);
	this.instance_16.setTransform(0.05,0,1.5,1.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:359.55,y:-382.5,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_17 = new lib.EndA_OBJ("single",4);
	this.instance_17.setTransform(0,0,1.5,1.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:-677.25,y:-206.5,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_18 = new lib.EndA_OBJ("single",2);
	this.instance_18.setTransform(0,0,1.5,1.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:-267.35,y:-428.55,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_19 = new lib.EndA_OBJ("single",2);
	this.instance_19.setTransform(0,-0.05,0.75,0.75);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:-575.5,y:-374.55,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_20 = new lib.EndA_OBJ("single",2);
	this.instance_20.setTransform(0,-0.05,0.75,0.75);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:198.9,y:-452.4,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_21 = new lib.EndA_OBJ("single",2);
	this.instance_21.setTransform(0,-0.05,0.75,0.75);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(7).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:522.9,y:-560.4,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_22 = new lib.EndA_OBJ("single",2);
	this.instance_22.setTransform(0,-0.05,0.75,0.75);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(7).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:665.6,y:-272.35,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_23 = new lib.EndA_OBJ("single",2);
	this.instance_23.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:700.65,y:340.65,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_24 = new lib.EndA_OBJ("single",2);
	this.instance_24.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:240.65,y:666.65,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_25 = new lib.EndA_OBJ("single",2);
	this.instance_25.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-301.5,y:568.4,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_26 = new lib.EndA_OBJ("single",2);
	this.instance_26.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(7).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-666.8,y:435.5,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_27 = new lib.EndA_OBJ("single",2);
	this.instance_27.setTransform(0,0,1.5,1.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:-678.6,y:470.45,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_28 = new lib.EndA_OBJ("single",2);
	this.instance_28.setTransform(0,0,1.5,1.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:-702.45,y:-23.95,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_29 = new lib.EndA_OBJ("single",2);
	this.instance_29.setTransform(0.05,0,1.5,1.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,x:716.05,y:-38,alpha:0},21,cjs.Ease.get(-1)).to({_off:true},1).wait(6));

	// EndA_OBJ
	this.instance_30 = new lib.middle_star_W("synched",16);
	this.instance_30.setTransform(129.5,32.15,0.5117,0.5117,-55.4142,0,0,0.1,0.1);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.5251,scaleY:0.5251,x:181,y:8.35,alpha:0.0933,startPosition:17},0).wait(1).to({scaleX:0.5378,scaleY:0.5378,x:230.8,y:-13.85,alpha:0.1821,startPosition:18},0).wait(1).to({scaleX:0.5499,scaleY:0.5499,x:278,y:-34.9,alpha:0.2663,startPosition:19},0).wait(1).to({scaleX:0.5614,scaleY:0.5614,rotation:-55.4141,x:322.65,y:-54.85,alpha:0.346,startPosition:20},0).wait(1).to({scaleX:0.5722,scaleY:0.5722,x:364.8,y:-73.7,alpha:0.4211,startPosition:21},0).wait(1).to({scaleX:0.5823,scaleY:0.5823,x:404.4,y:-91.4,alpha:0.4917,startPosition:22},0).wait(1).to({scaleX:0.5918,scaleY:0.5918,x:441.35,y:-107.95,alpha:0.5577,startPosition:23},0).wait(1).to({scaleX:0.6007,scaleY:0.6007,x:475.85,y:-123.3,alpha:0.6191,startPosition:24},0).wait(1).to({scaleX:0.6088,scaleY:0.6088,x:507.75,y:-137.55,alpha:0.676,startPosition:25},0).wait(1).to({scaleX:0.6164,scaleY:0.6164,x:537.15,y:-150.7,alpha:0.7284,startPosition:26},0).wait(1).to({scaleX:0.6232,scaleY:0.6232,x:563.95,y:-162.65,alpha:0.7762,startPosition:27},0).wait(1).to({scaleX:0.6295,scaleY:0.6295,rotation:-55.414,x:588.15,y:-173.5,alpha:0.8194,startPosition:28},0).wait(1).to({scaleX:0.635,scaleY:0.635,x:609.85,y:-183.2,alpha:0.8581,startPosition:29},0).wait(1).to({scaleX:0.6399,scaleY:0.6399,x:629,y:-191.75,alpha:0.8923,startPosition:30},0).wait(1).to({regX:0.1,regY:0.2,scaleX:0.6442,scaleY:0.6442,x:646.65,y:-198.7,alpha:0.9219,startPosition:31},0).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.6478,scaleY:0.6478,rotation:-55.4142,x:659.6,y:-205.45,alpha:0.6402,startPosition:32},0).wait(1).to({scaleX:0.6507,scaleY:0.6507,rotation:-55.4144,x:671.05,y:-210.6,alpha:0.4097,startPosition:33},0).wait(1).to({scaleX:0.653,scaleY:0.653,rotation:-55.4145,x:679.95,y:-214.6,alpha:0.2305,startPosition:34},0).wait(1).to({scaleX:0.6547,scaleY:0.6547,rotation:-55.4146,x:686.3,y:-217.45,alpha:0.1024,startPosition:35},0).wait(1).to({scaleX:0.6557,scaleY:0.6557,rotation:-55.4147,x:690.15,y:-219.15,alpha:0.0256,startPosition:36},0).wait(1).to({regX:0.1,regY:0,scaleX:0.656,scaleY:0.656,x:692.5,y:-219.25,alpha:0,startPosition:42},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_31 = new lib.middle_star_W("synched",13);
	this.instance_31.setTransform(48.55,-48.95,0.78,0.78,0,0,0,0,-0.1);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.8004,scaleY:0.8004,x:32.9,y:-105.85,alpha:0.0933,startPosition:14},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,x:18.15,y:-158.9,alpha:0.1821,startPosition:15},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:4.2,y:-209.25,alpha:0.2663,startPosition:16},0).wait(1).to({scaleX:0.8558,scaleY:0.8558,x:-9,y:-256.85,alpha:0.346,startPosition:17},0).wait(1).to({scaleX:0.8723,scaleY:0.8723,x:-21.45,y:-301.75,alpha:0.4211,startPosition:18},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,x:-33.2,y:-343.9,alpha:0.4917,startPosition:19},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:-44.15,y:-383.4,alpha:0.5577,startPosition:20},0).wait(1).to({scaleX:0.9157,scaleY:0.9157,x:-54.35,y:-420.1,alpha:0.6191,startPosition:21},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:-63.8,y:-454.15,alpha:0.676,startPosition:22},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:-72.45,y:-485.4,alpha:0.7284,startPosition:23},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,x:-80.4,y:-513.95,alpha:0.7762,startPosition:24},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,x:-87.6,y:-539.85,alpha:0.8194,startPosition:25},0).wait(1).to({scaleX:0.968,scaleY:0.968,x:-94,y:-562.95,alpha:0.8581,startPosition:26},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:-99.65,y:-583.35,alpha:0.8923,startPosition:27},0).wait(1).to({regX:0,regY:-0.1,scaleX:0.982,scaleY:0.982,x:-104.4,y:-599.6,alpha:0.9219,startPosition:28},0).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.9875,scaleY:0.9875,x:-108.75,y:-616,alpha:0.6402,startPosition:29},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:-112.15,y:-628.25,alpha:0.4097,startPosition:30},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:-114.8,y:-637.75,alpha:0.2305,startPosition:31},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:-116.7,y:-644.55,alpha:0.1024,startPosition:32},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:-117.85,y:-648.6,alpha:0.0256,startPosition:33},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-118,y:-648.5,alpha:0,startPosition:39},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_32 = new lib.middle_star_W("synched",16);
	this.instance_32.setTransform(24.95,111.7,0.4492,0.4492,-38.2099,0,0,-0.2,0.2);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(1).to({regY:-1.6,scaleX:0.461,scaleY:0.461,rotation:-38.2101,x:-31.55,y:156,alpha:0.0933,startPosition:17},0).wait(1).to({scaleX:0.4722,scaleY:0.4722,rotation:-38.2102,x:-84.9,y:198.8,alpha:0.1821,startPosition:18},0).wait(1).to({scaleX:0.4828,scaleY:0.4828,rotation:-38.2103,x:-135.55,y:239.4,alpha:0.2663,startPosition:19},0).wait(1).to({scaleX:0.4929,scaleY:0.4929,rotation:-38.2104,x:-183.4,y:277.8,alpha:0.346,startPosition:20},0).wait(1).to({scaleX:0.5023,scaleY:0.5023,rotation:-38.2105,x:-228.55,y:313.95,alpha:0.4211,startPosition:21},0).wait(1).to({scaleX:0.5112,scaleY:0.5112,rotation:-38.2106,x:-270.9,y:347.95,alpha:0.4917,startPosition:22},0).wait(1).to({scaleX:0.5196,scaleY:0.5196,rotation:-38.2107,x:-310.55,y:379.75,alpha:0.5577,startPosition:23},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,rotation:-38.2108,x:-347.45,y:409.4,alpha:0.6191,startPosition:24},0).wait(1).to({scaleX:0.5345,scaleY:0.5345,rotation:-38.2109,x:-381.7,y:436.8,alpha:0.676,startPosition:25},0).wait(1).to({scaleX:0.5411,scaleY:0.5411,rotation:-38.211,x:-413.15,y:462,alpha:0.7284,startPosition:26},0).wait(1).to({scaleX:0.5472,scaleY:0.5472,x:-441.85,y:485.05,alpha:0.7762,startPosition:27},0).wait(1).to({scaleX:0.5526,scaleY:0.5526,rotation:-38.2111,x:-467.8,y:505.85,alpha:0.8194,startPosition:28},0).wait(1).to({scaleX:0.5575,scaleY:0.5575,x:-491.05,y:524.5,alpha:0.8581,startPosition:29},0).wait(1).to({scaleX:0.5618,scaleY:0.5618,rotation:-38.2112,x:-511.55,y:541,alpha:0.8923,startPosition:30},0).wait(1).to({regX:-0.3,regY:0.2,scaleX:0.5655,scaleY:0.5655,x:-528.75,y:556.1,alpha:0.9219,startPosition:31},0).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.5687,scaleY:0.5687,rotation:-38.2115,x:-544.3,y:567.3,alpha:0.6402,startPosition:32},0).wait(1).to({scaleX:0.5713,scaleY:0.5713,rotation:-38.2116,x:-556.65,y:577.15,alpha:0.4097,startPosition:33},0).wait(1).to({scaleX:0.5733,scaleY:0.5733,rotation:-38.2118,x:-566.2,y:584.8,alpha:0.2305,startPosition:34},0).wait(1).to({scaleX:0.5748,scaleY:0.5748,rotation:-38.2119,x:-573.05,y:590.3,alpha:0.1024,startPosition:35},0).wait(1).to({scaleX:0.5756,scaleY:0.5756,x:-577.15,y:593.6,alpha:0.0256,startPosition:36},0).wait(1).to({regY:0.1,scaleX:0.5759,scaleY:0.5759,rotation:-38.212,x:-577.95,y:595.5,alpha:0,startPosition:42},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_33 = new lib.middle_star_W("synched",16);
	this.instance_33.setTransform(120.15,101.55,0.78,0.78,2.4769,0,0,0.1,0.1);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.8004,scaleY:0.8004,rotation:2.4771,x:165.85,y:133.05,alpha:0.0933,startPosition:17},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,rotation:2.4774,x:209.55,y:164.4,alpha:0.1821,startPosition:18},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,rotation:2.4776,x:251,y:194.1,alpha:0.2663,startPosition:19},0).wait(1).to({scaleX:0.8558,scaleY:0.8558,rotation:2.4778,x:290.2,y:222.2,alpha:0.346,startPosition:20},0).wait(1).to({scaleX:0.8723,scaleY:0.8723,rotation:2.478,x:327.15,y:248.7,alpha:0.4211,startPosition:21},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,rotation:2.4782,x:361.85,y:273.6,alpha:0.4917,startPosition:22},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,rotation:2.4784,x:394.35,y:296.85,alpha:0.5577,startPosition:23},0).wait(1).to({scaleX:0.9157,scaleY:0.9157,rotation:2.4785,x:424.6,y:318.55,alpha:0.6191,startPosition:24},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,rotation:2.4787,x:452.6,y:338.6,alpha:0.676,startPosition:25},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,rotation:2.4788,x:478.35,y:357.05,alpha:0.7284,startPosition:26},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,rotation:2.479,x:501.9,y:373.95,alpha:0.7762,startPosition:27},0).wait(1).to({scaleX:0.9596,scaleY:0.9596,rotation:2.4791,x:523.15,y:389.15,alpha:0.8194,startPosition:28},0).wait(1).to({scaleX:0.968,scaleY:0.968,rotation:2.4792,x:542.2,y:402.85,alpha:0.8581,startPosition:29},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,rotation:2.4793,x:559,y:414.9,alpha:0.8923,startPosition:30},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.982,scaleY:0.982,x:573.8,y:427,alpha:0.9219,startPosition:31},0).wait(1).to({regX:-0.2,regY:-1.6,scaleX:0.9875,scaleY:0.9875,x:585.85,y:434.1,alpha:0.6402,startPosition:32},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:595.95,y:441.35,alpha:0.4097,startPosition:33},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:603.8,y:447,alpha:0.2305,startPosition:34},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:609.4,y:451,alpha:0.1024,startPosition:35},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:612.75,y:453.4,alpha:0.0256,startPosition:36},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:614.15,y:455.95,alpha:0,startPosition:42},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_34 = new lib.middle_star_Y("synched",14);
	this.instance_34.setTransform(-118.35,23.85,0.343,0.343,-35.5786,0,0,0.4,-0.2);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.352,scaleY:0.352,x:-172.6,y:53.05,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-35.5787,x:-224.35,y:81.35,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,x:-273.45,y:108.25,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-35.5788,x:-319.9,y:133.7,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,x:-363.7,y:157.65,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:-404.85,y:180.2,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,rotation:-35.5789,x:-443.35,y:201.3,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,x:-479.15,y:220.85,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,rotation:-35.579,x:-512.3,y:238.95,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:-542.8,y:255.7,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4178,scaleY:0.4178,x:-570.7,y:270.95,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,x:-595.9,y:284.75,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,rotation:-35.5791,x:-618.45,y:297.1,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.429,scaleY:0.429,x:-638.4,y:308,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.3,regY:-0.2,scaleX:0.4319,scaleY:0.4319,x:-655.85,y:318.15,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,x:-670.25,y:325.4,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-35.5792,x:-682.2,y:331.9,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4378,scaleY:0.4378,x:-691.45,y:337,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.4389,scaleY:0.4389,rotation:-35.5793,x:-698.1,y:340.6,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,x:-702.05,y:342.8,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.5,regY:-0.4,scaleX:0.4398,scaleY:0.4398,x:-703.55,y:344.2,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_35 = new lib.middle_star_Y("synched",14);
	this.instance_35.setTransform(-146,-14.65,0.343,0.343,-41.5446,0,0,0.4,-0.7);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.352,scaleY:0.352,rotation:-41.5447,x:-190.3,y:29.75,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3605,scaleY:0.3605,rotation:-41.5448,x:-232.55,y:72.35,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,x:-272.7,y:112.85,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3763,scaleY:0.3763,rotation:-41.5449,x:-310.65,y:151.1,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,x:-346.5,y:187.2,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,rotation:-41.545,x:-380.15,y:221.05,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:-411.55,y:252.75,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-41.5451,x:-440.85,y:282.25,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:-468,y:309.6,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:-492.95,y:334.75,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4178,scaleY:0.4178,rotation:-41.5452,x:-515.7,y:357.7,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,x:-536.3,y:378.5,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,x:-554.75,y:397.05,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.429,scaleY:0.429,rotation:-41.5453,x:-571.05,y:413.45,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.3,regY:-0.7,scaleX:0.4319,scaleY:0.4319,x:-585.4,y:428.2,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-41.5454,x:-597.05,y:439.7,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-41.5455,x:-606.85,y:449.55,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4378,scaleY:0.4378,rotation:-41.5456,x:-614.45,y:457.15,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.4389,scaleY:0.4389,rotation:-41.5457,x:-619.8,y:462.65,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,x:-623.05,y:465.9,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.6,regY:-0.5,scaleX:0.4398,scaleY:0.4398,x:-624.4,y:467.6,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_36 = new lib.middle_star_Y("synched",14);
	this.instance_36.setTransform(-68.75,111.85,0.3773,0.3773,0.6697,0,0,0.1,0);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.3872,scaleY:0.3872,rotation:0.6699,x:-100,y:155.2,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3966,scaleY:0.3966,rotation:0.6701,x:-130.2,y:196.9,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.4055,scaleY:0.4055,rotation:0.6703,x:-158.95,y:236.45,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.414,scaleY:0.414,rotation:0.6705,x:-186.1,y:273.9,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.422,scaleY:0.422,rotation:0.6706,x:-211.65,y:309.2,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.4294,scaleY:0.4294,rotation:0.6708,x:-235.7,y:342.4,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.4364,scaleY:0.4364,rotation:0.6709,x:-258.2,y:373.4,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.443,scaleY:0.443,rotation:0.6711,x:-279.2,y:402.25,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.449,scaleY:0.449,rotation:0.6712,x:-298.6,y:429,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4546,scaleY:0.4546,rotation:0.6713,x:-316.4,y:453.6,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4596,scaleY:0.4596,rotation:0.6714,x:-332.7,y:476.1,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.4642,scaleY:0.4642,rotation:0.6715,x:-347.4,y:496.4,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4683,scaleY:0.4683,rotation:0.6716,x:-360.6,y:514.6,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.472,scaleY:0.472,rotation:0.6717,x:-372.25,y:530.65,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.4751,scaleY:0.4751,x:-383.05,y:545.2,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4777,scaleY:0.4777,rotation:0.6719,x:-390.85,y:556.3,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4799,scaleY:0.4799,rotation:0.672,x:-397.85,y:565.9,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4816,scaleY:0.4816,rotation:0.6722,x:-403.3,y:573.3,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.4828,scaleY:0.4828,x:-407.15,y:578.65,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4835,scaleY:0.4835,rotation:0.6723,x:-409.5,y:581.85,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.4,regY:-0.1,scaleX:0.4838,scaleY:0.4838,x:-411,y:583.65,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_37 = new lib.middle_star_Y("synched",14);
	this.instance_37.setTransform(84.5,144.75,0.3431,0.3431,-1.3815,0,0,0.9,-0.2);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.3521,scaleY:0.3521,rotation:-1.3816,x:131.2,y:183.25,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-1.3817,x:175.5,y:220.3,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:-1.3818,x:217.45,y:255.4,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-1.3819,x:257.15,y:288.65,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:-1.382,x:294.55,y:320,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,rotation:-1.3821,x:329.7,y:349.45,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,rotation:-1.3822,x:362.65,y:377,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-1.3823,x:393.25,y:402.6,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,rotation:-1.3824,x:421.6,y:426.3,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4133,scaleY:0.4133,rotation:-1.3825,x:447.65,y:448.15,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4179,scaleY:0.4179,x:471.5,y:468.1,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,rotation:-1.3826,x:493.05,y:486.15,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4258,scaleY:0.4258,x:512.35,y:502.3,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,rotation:-1.3827,x:529.35,y:516.55,alpha:0.8923,startPosition:28},0).wait(1).to({regX:1,regY:-0.2,scaleX:0.4319,scaleY:0.4319,x:543.85,y:529.35,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-1.383,x:556.5,y:539.3,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-1.3832,x:566.7,y:547.85,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:-1.3834,x:574.65,y:554.5,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.439,scaleY:0.439,rotation:-1.3835,x:580.3,y:559.2,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,rotation:-1.3836,x:583.7,y:562.05,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,x:584.55,y:563.5,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_38 = new lib.middle_star_Y("synched",14);
	this.instance_38.setTransform(-38.55,161.6,0.343,0.343,-53.7969,0,0,0.2,-0.5);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.352,scaleY:0.352,x:-14,y:188.45,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,x:9.1,y:214.5,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:-53.797,x:31.15,y:239.2,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,x:51.95,y:262.6,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:-53.7971,x:71.6,y:284.7,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:90.1,y:305.45,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:107.35,y:324.85,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-53.7972,x:123.45,y:342.9,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:138.3,y:359.55,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,x:152,y:374.95,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4178,scaleY:0.4178,x:164.5,y:389,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,rotation:-53.7973,x:175.8,y:401.7,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,x:185.95,y:413.05,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.429,scaleY:0.429,x:194.85,y:423.05,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.2,regY:-0.5,scaleX:0.4319,scaleY:0.4319,x:202.55,y:432.5,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-53.7976,x:209.15,y:439.15,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-53.7979,x:214.5,y:445.15,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4378,scaleY:0.4378,rotation:-53.7981,x:218.7,y:449.85,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.4389,scaleY:0.4389,rotation:-53.7983,x:221.7,y:453.2,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,rotation:-53.7984,x:223.45,y:455.2,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.6,regY:-0.4,scaleX:0.4398,scaleY:0.4398,x:224.05,y:456.6,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_39 = new lib.middle_star_Y("synched",14);
	this.instance_39.setTransform(172.35,-8.05,0.343,0.343,-37.5245,0,0,1,-0.4);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.352,scaleY:0.352,rotation:-37.5244,x:217.95,y:13.95,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-37.5243,x:261.35,y:35.25,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,x:302.5,y:55.45,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-37.5242,x:341.5,y:74.6,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,x:378.2,y:92.65,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,rotation:-37.5241,x:412.7,y:109.55,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:444.95,y:125.4,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-37.524,x:475,y:140.15,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,x:502.8,y:153.85,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4132,scaleY:0.4132,rotation:-37.5239,x:528.35,y:166.35,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4178,scaleY:0.4178,x:551.75,y:177.85,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,x:572.9,y:188.25,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4257,scaleY:0.4257,rotation:-37.5238,x:591.8,y:197.55,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.429,scaleY:0.429,x:608.5,y:205.75,alpha:0.8923,startPosition:28},0).wait(1).to({regX:1,regY:-0.3,scaleX:0.4319,scaleY:0.4319,x:623.05,y:213.35,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-37.5241,x:635.2,y:218.85,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-37.5243,x:645.2,y:223.75,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4378,scaleY:0.4378,rotation:-37.5245,x:653,y:227.6,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.4389,scaleY:0.4389,rotation:-37.5246,x:658.55,y:230.35,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,rotation:-37.5247,x:661.85,y:232,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.6,regY:-0.4,scaleX:0.4398,scaleY:0.4398,x:663.05,y:233.1,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_40 = new lib.middle_star_Y("synched",14);
	this.instance_40.setTransform(134.5,-41.15,0.343,0.343,-29.0734,0,0,0.9,-0.7);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.352,scaleY:0.352,rotation:-29.0738,x:188.2,y:-49,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-29.0741,x:239.15,y:-56.2,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:-29.0745,x:287.5,y:-63.05,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-29.0748,x:333.3,y:-69.5,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:-29.0751,x:376.45,y:-75.6,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,rotation:-29.0753,x:416.95,y:-81.3,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,rotation:-29.0756,x:454.85,y:-86.65,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-29.0758,x:490.15,y:-91.65,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,rotation:-29.0761,x:522.8,y:-96.25,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4133,scaleY:0.4133,rotation:-29.0763,x:552.95,y:-100.45,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4179,scaleY:0.4179,rotation:-29.0764,x:580.35,y:-104.35,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,rotation:-29.0766,x:605.2,y:-107.95,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4258,scaleY:0.4258,rotation:-29.0768,x:627.45,y:-111.05,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,rotation:-29.0769,x:647.05,y:-113.85,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.9,regY:-0.7,scaleX:0.4319,scaleY:0.4319,rotation:-29.077,x:663.9,y:-115.85,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-29.0768,x:678.4,y:-118.25,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-29.0766,x:690.1,y:-119.9,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:-29.0764,x:699.25,y:-121.2,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.439,scaleY:0.439,rotation:-29.0763,x:705.8,y:-122.15,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,rotation:-29.0762,x:709.75,y:-122.7,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,x:710.95,y:-122.55,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_41 = new lib.middle_star_Y("synched",14);
	this.instance_41.setTransform(100.1,8.65,0.3431,0.3431,-52.547,0,0,0.5,-0.1);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.3521,scaleY:0.3521,rotation:-52.5469,x:149,y:-27.1,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-52.5468,x:195.55,y:-60.6,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3687,scaleY:0.3687,rotation:-52.5467,x:239.7,y:-92.35,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-52.5466,x:281.5,y:-122.45,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3836,scaleY:0.3836,rotation:-52.5465,x:320.9,y:-150.75,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,rotation:-52.5464,x:358,y:-177.35,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3968,scaleY:0.3968,x:392.6,y:-202.25,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4027,scaleY:0.4027,rotation:-52.5463,x:424.85,y:-225.45,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4082,scaleY:0.4082,rotation:-52.5462,x:454.7,y:-246.9,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4133,scaleY:0.4133,x:482.15,y:-266.7,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4179,scaleY:0.4179,rotation:-52.5461,x:507.2,y:-284.75,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.422,scaleY:0.422,x:529.9,y:-301.05,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4258,scaleY:0.4258,rotation:-52.546,x:550.2,y:-315.65,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,x:568.15,y:-328.5,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.5,regY:-0.1,scaleX:0.4319,scaleY:0.4319,rotation:-52.5459,x:583.8,y:-339,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4343,scaleY:0.4343,rotation:-52.5456,x:596.75,y:-349.15,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4363,scaleY:0.4363,rotation:-52.5454,x:607.5,y:-356.85,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:-52.5452,x:615.9,y:-362.9,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.439,scaleY:0.439,rotation:-52.5451,x:621.85,y:-367.2,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4396,scaleY:0.4396,rotation:-52.545,x:625.45,y:-369.75,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.3,regY:-0.4,scaleX:0.4399,scaleY:0.4399,x:626.75,y:-369.95,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_42 = new lib.middle_star_Y("synched",14);
	this.instance_42.setTransform(95.2,-42.5,0.3431,0.3431,-6.8254,0,0,0.4,-0.6);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.3521,scaleY:0.3521,rotation:-6.8255,x:106.85,y:-92.55,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.3606,scaleY:0.3606,rotation:-6.8256,x:117.6,y:-139.9,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.3688,scaleY:0.3688,rotation:-6.8258,x:127.85,y:-184.9,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.3764,scaleY:0.3764,rotation:-6.8259,x:137.5,y:-227.4,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.3837,scaleY:0.3837,rotation:-6.826,x:146.6,y:-267.45,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.3905,scaleY:0.3905,rotation:-6.8261,x:155.15,y:-305.1,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.3969,scaleY:0.3969,rotation:-6.8262,x:163.2,y:-340.35,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4028,scaleY:0.4028,rotation:-6.8263,x:170.6,y:-373.15,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.4083,scaleY:0.4083,rotation:-6.8264,x:177.5,y:-403.55,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4133,scaleY:0.4133,rotation:-6.8265,x:183.85,y:-431.45,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.4179,scaleY:0.4179,rotation:-6.8266,x:189.65,y:-456.95,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.4221,scaleY:0.4221,x:194.9,y:-480.05,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.4258,scaleY:0.4258,rotation:-6.8267,x:199.65,y:-500.7,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.4291,scaleY:0.4291,x:203.75,y:-518.9,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.4,regY:-0.6,scaleX:0.432,scaleY:0.432,rotation:-6.8268,x:206.8,y:-534.3,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4344,scaleY:0.4344,rotation:-6.8275,x:210.35,y:-548.05,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.4364,scaleY:0.4364,rotation:-6.8281,x:212.8,y:-558.95,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4379,scaleY:0.4379,rotation:-6.8286,x:214.75,y:-567.45,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.439,scaleY:0.439,rotation:-6.8289,x:216.1,y:-573.5,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4397,scaleY:0.4397,rotation:-6.8291,x:216.95,y:-577.15,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0.1,regY:-0.5,scaleX:0.4399,scaleY:0.4399,rotation:-6.8292,x:216.7,y:-578,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_43 = new lib.middle_star_Y("synched",14);
	this.instance_43.setTransform(-5.55,78.15,0.4289,0.4289,-34.5381,0,0,-0.2,-0.1);
	this.instance_43.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4401,scaleY:0.4401,rotation:-34.5385,x:-39.45,y:20.95,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.4508,scaleY:0.4508,rotation:-34.5388,x:-72.1,y:-32.65,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.461,scaleY:0.461,rotation:-34.5391,x:-103,y:-83.45,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.4706,scaleY:0.4706,rotation:-34.5394,x:-132.3,y:-131.6,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.4796,scaleY:0.4796,rotation:-34.5396,x:-159.8,y:-176.95,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.4881,scaleY:0.4881,rotation:-34.5399,x:-185.7,y:-219.55,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.4961,scaleY:0.4961,rotation:-34.5401,x:-209.95,y:-259.45,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.5035,scaleY:0.5035,rotation:-34.5404,x:-232.55,y:-296.55,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.5104,scaleY:0.5104,rotation:-34.5406,x:-253.45,y:-330.9,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.5167,scaleY:0.5167,rotation:-34.5408,x:-272.65,y:-362.5,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.5224,scaleY:0.5224,rotation:-34.5409,x:-290.2,y:-391.35,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.5276,scaleY:0.5276,rotation:-34.5411,x:-306.1,y:-417.5,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.5323,scaleY:0.5323,rotation:-34.5412,x:-320.3,y:-440.85,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.5364,scaleY:0.5364,rotation:-34.5414,x:-332.85,y:-461.45,alpha:0.8923,startPosition:28},0).wait(1).to({regX:-0.2,regY:-0.1,scaleX:0.54,scaleY:0.54,rotation:-34.5415,x:-344.15,y:-478.3,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.543,scaleY:0.543,rotation:-34.5418,x:-352.85,y:-494.5,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,rotation:-34.542,x:-360.35,y:-506.9,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.5474,scaleY:0.5474,rotation:-34.5422,x:-366.2,y:-516.5,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,rotation:-34.5423,x:-370.4,y:-523.4,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.5496,scaleY:0.5496,rotation:-34.5424,x:-372.9,y:-527.5,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0,regY:-0.4,scaleX:0.5499,scaleY:0.5499,x:-374.2,y:-527.85,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_44 = new lib.middle_star_Y("synched",14);
	this.instance_44.setTransform(-95.4,-44.8,0.3899,0.3899,-29.5625,0,0,0,-0.3);
	this.instance_44.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4002,scaleY:0.4002,x:-154.05,y:-57.55,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.4099,scaleY:0.4099,rotation:-29.5626,x:-210.2,y:-69.1,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.4191,scaleY:0.4191,x:-263.45,y:-80.1,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.4279,scaleY:0.4279,rotation:-29.5627,x:-313.85,y:-90.55,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.4361,scaleY:0.4361,x:-361.4,y:-100.3,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.4438,scaleY:0.4438,rotation:-29.5628,x:-406.05,y:-109.5,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.4511,scaleY:0.4511,x:-447.75,y:-118.05,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.4578,scaleY:0.4578,rotation:-29.5629,x:-486.6,y:-126.05,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.464,scaleY:0.464,x:-522.6,y:-133.45,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.4698,scaleY:0.4698,rotation:-29.563,x:-555.7,y:-140.3,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.475,scaleY:0.475,x:-585.95,y:-146.55,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.4797,scaleY:0.4797,x:-613.3,y:-152.2,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.484,scaleY:0.484,rotation:-29.5631,x:-637.8,y:-157.25,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.4877,scaleY:0.4877,x:-659.35,y:-161.7,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.1,regY:-0.3,scaleX:0.491,scaleY:0.491,x:-678.5,y:-164.75,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.4937,scaleY:0.4937,rotation:-29.5636,x:-693.9,y:-168.8,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.496,scaleY:0.496,rotation:-29.564,x:-706.85,y:-171.45,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.4977,scaleY:0.4977,rotation:-29.5643,x:-716.95,y:-173.5,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.499,scaleY:0.499,rotation:-29.5645,x:-724.15,y:-175,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.4997,scaleY:0.4997,rotation:-29.5646,x:-728.45,y:-175.9,alpha:0.0256,startPosition:34},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:-730.35,y:-175.4,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_45 = new lib.middle_star_Y("synched",14);
	this.instance_45.setTransform(-56.3,31.85,0.7799,0.7799,-37.7389,0,0,-0.2,0.1);
	this.instance_45.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.8004,scaleY:0.8004,x:-67.95,y:72.75,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.8198,scaleY:0.8198,rotation:-37.739,x:-79.4,y:113.3,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:-90.3,y:151.85,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.8557,scaleY:0.8557,x:-100.65,y:188.2,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.8722,scaleY:0.8722,rotation:-37.7391,x:-110.35,y:222.55,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,x:-119.5,y:254.8,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.9021,scaleY:0.9021,x:-128,y:284.9,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.9156,scaleY:0.9156,rotation:-37.7392,x:-136,y:313.05,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:-143.4,y:339.05,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.9395,scaleY:0.9395,x:-150.1,y:363,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:-156.3,y:384.75,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,x:-161.9,y:404.55,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.968,scaleY:0.968,x:-166.9,y:422.25,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,rotation:-37.7393,x:-171.35,y:437.85,alpha:0.8923,startPosition:28},0).wait(1).to({regX:-0.2,regY:0.1,scaleX:0.9819,scaleY:0.9819,x:-175.7,y:453.55,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.9874,scaleY:0.9874,rotation:-37.7397,x:-178.35,y:462.85,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.992,scaleY:0.992,rotation:-37.74,x:-181,y:472.25,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,rotation:-37.7402,x:-183.05,y:479.55,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.998,scaleY:0.998,rotation:-37.7404,x:-184.5,y:484.65,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:-37.7405,x:-185.4,y:487.8,alpha:0.0256,startPosition:34},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,rotation:-37.7406,x:-186.35,y:491.1,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_46 = new lib.middle_star_Y("synched",14);
	this.instance_46.setTransform(35.3,7.35,0.7799,0.7799,-34.2584,0,0,0,0.1);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.8004,scaleY:0.8004,x:97.7,y:13.05,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.8198,scaleY:0.8198,x:156.7,y:19.95,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:212.65,y:26.55,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.8557,scaleY:0.8557,rotation:-34.2585,x:265.6,y:32.8,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.8722,scaleY:0.8722,x:315.5,y:38.6,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,x:362.4,y:44.15,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.9021,scaleY:0.9021,x:406.3,y:49.35,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.9156,scaleY:0.9156,x:447.15,y:54.1,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:484.95,y:58.55,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.9395,scaleY:0.9395,x:519.75,y:62.65,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:551.5,y:66.4,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,x:580.25,y:69.75,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.968,scaleY:0.968,x:606,y:72.8,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:628.7,y:75.4,alpha:0.8923,startPosition:28},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9819,scaleY:0.9819,x:647.85,y:79.75,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.9875,scaleY:0.9875,rotation:-34.2586,x:664.9,y:79.7,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:678.45,y:81.3,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,rotation:-34.2587,x:689,y:82.55,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:696.55,y:83.45,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:701.1,y:84,alpha:0.0256,startPosition:34},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:1,scaleY:1,x:702.15,y:86.3,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_47 = new lib.middle_star_Y("synched",14);
	this.instance_47.setTransform(-21.9,-60.05,0.78,0.78,6.4499);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.8004,scaleY:0.8004,x:-87.55,y:-43.95,alpha:0.0933,startPosition:15},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,rotation:6.45,x:-151.2,y:-27.85,alpha:0.1821,startPosition:16},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:-211.65,y:-12.6,alpha:0.2663,startPosition:17},0).wait(1).to({scaleX:0.8558,scaleY:0.8558,rotation:6.4501,x:-268.8,y:1.8,alpha:0.346,startPosition:18},0).wait(1).to({scaleX:0.8723,scaleY:0.8723,rotation:6.4502,x:-322.65,y:15.4,alpha:0.4211,startPosition:19},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,x:-373.3,y:28.25,alpha:0.4917,startPosition:20},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,rotation:6.4503,x:-420.65,y:40.2,alpha:0.5577,startPosition:21},0).wait(1).to({scaleX:0.9157,scaleY:0.9157,x:-464.8,y:51.35,alpha:0.6191,startPosition:22},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:-505.6,y:61.65,alpha:0.676,startPosition:23},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,rotation:6.4504,x:-543.15,y:71.2,alpha:0.7284,startPosition:24},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,x:-577.5,y:79.8,alpha:0.7762,startPosition:25},0).wait(1).to({scaleX:0.9596,scaleY:0.9596,x:-608.5,y:87.65,alpha:0.8194,startPosition:26},0).wait(1).to({scaleX:0.968,scaleY:0.968,rotation:6.4505,x:-636.25,y:94.7,alpha:0.8581,startPosition:27},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:-660.8,y:100.95,alpha:0.8923,startPosition:28},0).wait(1).to({regX:-0.1,regY:0.1,scaleX:0.982,scaleY:0.982,x:-683.8,y:107.45,alpha:0.9219,startPosition:29},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.9875,scaleY:0.9875,rotation:6.4507,x:-699.95,y:110.8,alpha:0.6402,startPosition:30},0).wait(1).to({scaleX:0.992,scaleY:0.992,rotation:6.4508,x:-714.55,y:114.55,alpha:0.4097,startPosition:31},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,rotation:6.4509,x:-726,y:117.45,alpha:0.2305,startPosition:32},0).wait(1).to({scaleX:0.998,scaleY:0.998,rotation:6.451,x:-734.15,y:119.5,alpha:0.1024,startPosition:33},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:-739.05,y:120.75,alpha:0.0256,startPosition:34},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-742.5,y:122.3,alpha:0,startPosition:40},0).to({_off:true},1).wait(13));

	// EndA_OBJ
	this.instance_48 = new lib.middle_star_Y("synched",13);
	this.instance_48.setTransform(13.4,-140.65,0.78,0.78,0,0,0,0.1,-0.1);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.8004,scaleY:0.8004,x:39.05,y:-166.85,alpha:0.0933,startPosition:14},0).wait(1).to({scaleX:0.8199,scaleY:0.8199,x:62.3,y:-190.95,alpha:0.1821,startPosition:15},0).wait(1).to({scaleX:0.8383,scaleY:0.8383,x:84.4,y:-213.8,alpha:0.2663,startPosition:16},0).wait(1).to({scaleX:0.8558,scaleY:0.8558,x:105.3,y:-235.4,alpha:0.346,startPosition:17},0).wait(1).to({scaleX:0.8723,scaleY:0.8723,x:125,y:-255.8,alpha:0.4211,startPosition:18},0).wait(1).to({scaleX:0.8877,scaleY:0.8877,x:143.5,y:-274.95,alpha:0.4917,startPosition:19},0).wait(1).to({scaleX:0.9022,scaleY:0.9022,x:160.85,y:-292.8,alpha:0.5577,startPosition:20},0).wait(1).to({scaleX:0.9157,scaleY:0.9157,x:176.95,y:-309.55,alpha:0.6191,startPosition:21},0).wait(1).to({scaleX:0.9281,scaleY:0.9281,x:191.9,y:-324.95,alpha:0.676,startPosition:22},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:205.65,y:-339.15,alpha:0.7284,startPosition:23},0).wait(1).to({scaleX:0.9501,scaleY:0.9501,x:218.15,y:-352.15,alpha:0.7762,startPosition:24},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,x:229.55,y:-363.85,alpha:0.8194,startPosition:25},0).wait(1).to({scaleX:0.968,scaleY:0.968,x:239.7,y:-374.35,alpha:0.8581,startPosition:26},0).wait(1).to({scaleX:0.9755,scaleY:0.9755,x:248.6,y:-383.6,alpha:0.8923,startPosition:27},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:0.982,scaleY:0.982,x:254.95,y:-390.5,alpha:0.9219,startPosition:28},0).wait(1).to({regX:1.6,regY:-1.3,scaleX:0.9875,scaleY:0.9875,x:263,y:-398.45,alpha:0.6402,startPosition:29},0).wait(1).to({scaleX:0.992,scaleY:0.992,x:268.35,y:-404,alpha:0.4097,startPosition:30},0).wait(1).to({scaleX:0.9955,scaleY:0.9955,x:272.55,y:-408.35,alpha:0.2305,startPosition:31},0).wait(1).to({scaleX:0.998,scaleY:0.998,x:275.55,y:-411.4,alpha:0.1024,startPosition:32},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,x:277.35,y:-413.25,alpha:0.0256,startPosition:33},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:276.5,y:-412.75,alpha:0,startPosition:39},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-843.9,-714.9,1664,1515.1999999999998);


(lib.efx_Pat_star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// EndA_OBJ
	this.instance = new lib.EndA_OBJ("single",8);
	this.instance.setTransform(0,0.05,0.9999,0.9999,-1.7314);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:7.1,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0,y:0.05,alpha:0},0).to({x:7.1,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_1 = new lib.EndA_OBJ("single",8);
	this.instance_1.setTransform(-0.05,0,1,1,114.2568);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:-703.9,y:-310.35,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:-0.05,y:0,alpha:0},0).to({x:-703.9,y:-310.35,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_2 = new lib.EndA_OBJ("single",7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0,y:0,alpha:0},0).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_3 = new lib.EndA_OBJ("single",7);
	this.instance_3.setTransform(0,0,1,1,173.9546);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:-493.7,y:-462.6,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0,y:0,alpha:0},0).to({x:-493.7,y:-462.6,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_4 = new lib.EndA_OBJ("single",7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0,y:0,alpha:0},0).to({x:382.6,y:642.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_5 = new lib.EndA_OBJ("single",6);
	this.instance_5.setTransform(-0.2,0.1,0.9999,0.9999,-1.867,0,0,-0.2,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:-477.65,y:478.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:-0.2,y:0.1,alpha:0},0).to({x:-477.65,y:478.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_6 = new lib.EndA_OBJ("single",6);
	this.instance_6.setTransform(-0.1,-0.1,0.9999,0.9999,99.1794,0,0,-0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({_off:false},0).to({x:-219.15,y:-580.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:-0.1,y:-0.1,alpha:0},0).to({x:-219.15,y:-580.65,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_7 = new lib.EndA_OBJ("single",6);
	this.instance_7.setTransform(0.05,-0.15,0.9999,0.9999,156.9464,0,0,-0.1,0.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({_off:false},0).to({x:326.5,y:-486.9,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0.05,y:-0.15,alpha:0},0).to({x:326.5,y:-486.9,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_8 = new lib.EndA_OBJ("single",5);
	this.instance_8.setTransform(0.15,-0.05,1,1,-164.8818,0,0,-0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({x:577.95,y:-452.75,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0.15,y:-0.05,alpha:0},0).to({x:577.95,y:-452.75,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_9 = new lib.EndA_OBJ("single",5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).to({x:-292.35,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(8).to({_off:false,x:0,y:0,alpha:0},0).to({x:-292.35,y:652.95,alpha:1},17,cjs.Ease.get(1)).to({_off:true},1).wait(4));

	// EndA_OBJ
	this.instance_10 = new lib.EndA_OBJ("single",4);
	this.instance_10.setTransform(0,0,0.75,0.75);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:465.15,y:-427.65},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0},0).to({scaleX:0.5,scaleY:0.5,x:465.15,y:-427.65},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_11 = new lib.EndA_OBJ("single",4);
	this.instance_11.setTransform(0,0,0.75,0.75);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-166.15,y:-453.5},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0},0).to({scaleX:0.5,scaleY:0.5,x:-166.15,y:-453.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_12 = new lib.EndA_OBJ("single",4);
	this.instance_12.setTransform(0,0,0.75,0.75);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-155.45,y:638.75},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0},0).to({scaleX:0.5,scaleY:0.5,x:-155.45,y:638.75},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_13 = new lib.EndA_OBJ("single",4);
	this.instance_13.setTransform(0,0,0.75,0.75);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:412.1,y:552.7},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0},0).to({scaleX:0.5,scaleY:0.5,x:412.1,y:552.7},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_14 = new lib.EndA_OBJ("single",4);
	this.instance_14.setTransform(0.1,0,0.75,0.75,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:486.25,y:447.2},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0.1,y:0},0).to({scaleX:0.5,scaleY:0.5,x:486.25,y:447.2},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_15 = new lib.EndA_OBJ("single",4);
	this.instance_15.setTransform(0.05,0.05,1.5,1.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:173.3,y:548.85},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0.05,y:0.05},0).to({scaleX:1,scaleY:1,x:173.3,y:548.85},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_16 = new lib.EndA_OBJ("single",4);
	this.instance_16.setTransform(0.05,0,1.5,1.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:359.55,y:-382.5},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0.05,y:0},0).to({scaleX:1,scaleY:1,x:359.55,y:-382.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_17 = new lib.EndA_OBJ("single",4);
	this.instance_17.setTransform(0,0,1.5,1.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-677.25,y:-206.5},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0,y:0},0).to({scaleX:1,scaleY:1,x:-677.25,y:-206.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_18 = new lib.EndA_OBJ("single",2);
	this.instance_18.setTransform(0,0,1.5,1.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-267.35,y:-428.55},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0,y:0},0).to({scaleX:1,scaleY:1,x:-267.35,y:-428.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_19 = new lib.EndA_OBJ("single",2);
	this.instance_19.setTransform(0,-0.05,0.75,0.75);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(19).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:-575.5,y:-374.55},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,regY:0,scaleX:0.75,scaleY:0.75,x:0,y:-0.05},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:-575.5,y:-374.55},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_20 = new lib.EndA_OBJ("single",2);
	this.instance_20.setTransform(0,-0.05,0.75,0.75);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(19).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:198.9,y:-452.4},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,regY:0,scaleX:0.75,scaleY:0.75,x:0,y:-0.05},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:198.9,y:-452.4},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_21 = new lib.EndA_OBJ("single",2);
	this.instance_21.setTransform(0,-0.05,0.75,0.75);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:522.9,y:-560.4},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,regY:0,scaleX:0.75,scaleY:0.75,x:0,y:-0.05},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:522.9,y:-560.4},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_22 = new lib.EndA_OBJ("single",2);
	this.instance_22.setTransform(0,-0.05,0.75,0.75);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(19).to({_off:false},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:665.6,y:-272.35},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,regY:0,scaleX:0.75,scaleY:0.75,x:0,y:-0.05},0).to({regY:0.1,scaleX:0.5,scaleY:0.5,x:665.6,y:-272.35},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_23 = new lib.EndA_OBJ("single",2);
	this.instance_23.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:700.65,y:340.65},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0.1},0).to({scaleX:0.5,scaleY:0.5,x:700.65,y:340.65},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_24 = new lib.EndA_OBJ("single",2);
	this.instance_24.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:240.65,y:666.65},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0.1},0).to({scaleX:0.5,scaleY:0.5,x:240.65,y:666.65},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_25 = new lib.EndA_OBJ("single",2);
	this.instance_25.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-301.5,y:568.4},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0.1},0).to({scaleX:0.5,scaleY:0.5,x:-301.5,y:568.4},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_26 = new lib.EndA_OBJ("single",2);
	this.instance_26.setTransform(0,0.1,0.75,0.75,0,0,0,0,0.1);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:-666.8,y:435.5},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:0.75,scaleY:0.75,x:0,y:0.1},0).to({scaleX:0.5,scaleY:0.5,x:-666.8,y:435.5},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_27 = new lib.EndA_OBJ("single",2);
	this.instance_27.setTransform(0,0,1.5,1.5);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-678.6,y:470.45},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0,y:0},0).to({scaleX:1,scaleY:1,x:-678.6,y:470.45},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_28 = new lib.EndA_OBJ("single",2);
	this.instance_28.setTransform(0,0,1.5,1.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:-702.45,y:-23.95},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0,y:0},0).to({scaleX:1,scaleY:1,x:-702.45,y:-23.95},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_29 = new lib.EndA_OBJ("single",2);
	this.instance_29.setTransform(0.05,0,1.5,1.5);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:716.05,y:-38},21,cjs.Ease.get(-1)).to({_off:true},1).wait(3).to({_off:false,scaleX:1.5,scaleY:1.5,x:0.05,y:0},0).to({scaleX:1,scaleY:1,x:716.05,y:-38},14,cjs.Ease.get(-1)).to({_off:true},1).wait(1));

	// EndA_OBJ
	this.instance_30 = new lib.middle_star_W("synched",3);
	this.instance_30.setTransform(108.6,24.2,0.3936,0.3936,-55.4141,0,0,0.1,0.1);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({scaleX:0.5117,scaleY:0.5117,rotation:-55.4142,x:129.5,y:32.15,alpha:1,startPosition:13},10).wait(3).to({startPosition:16},0).to({regY:0,scaleX:0.656,scaleY:0.656,rotation:-55.4147,x:692.5,y:-219.25,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regY:0.1,scaleX:0.5117,scaleY:0.5117,rotation:-55.4142,x:0.1,y:-0.05,startPosition:16},0).to({regY:0,scaleX:0.656,scaleY:0.656,rotation:-55.4147,x:692.5,y:-219.25,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_31 = new lib.middle_star_W("synched",0);
	this.instance_31.setTransform(46.35,-38.15,0.6,0.6,0,0,0,0,-0.1);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({scaleX:0.78,scaleY:0.78,x:48.55,y:-48.95,alpha:1,startPosition:10},10).wait(3).to({startPosition:13},0).to({regY:0,scaleX:1,scaleY:1,x:-118,y:-648.5,startPosition:39},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regY:-0.1,scaleX:0.78,scaleY:0.78,x:0.05,y:-0.15,startPosition:13},0).to({regY:0,scaleX:1,scaleY:1,x:-118,y:-648.5,startPosition:39},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_32 = new lib.middle_star_W("synched",3);
	this.instance_32.setTransform(28.2,85.45,0.3455,0.3455,-38.2121,0,0,-0.2,0.2);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({scaleX:0.4492,scaleY:0.4492,rotation:-38.2099,x:24.95,y:111.7,alpha:1,startPosition:13},10).wait(3).to({startPosition:16},0).to({regY:0.1,scaleX:0.5759,scaleY:0.5759,rotation:-38.212,x:-577.95,y:595.5,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regY:0.2,scaleX:0.4492,scaleY:0.4492,rotation:-38.2099,x:0,y:0.05,startPosition:16},0).to({regY:0.1,scaleX:0.5759,scaleY:0.5759,rotation:-38.212,x:-577.95,y:595.5,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_33 = new lib.middle_star_W("synched",3);
	this.instance_33.setTransform(101.4,77.6,0.6,0.6,2.478,0,0,0.1,0.1);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({scaleX:0.78,scaleY:0.78,rotation:2.4769,x:120.15,y:101.55,alpha:1,startPosition:13},10).wait(3).to({startPosition:16},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:2.4793,x:614.15,y:455.95,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.1,regY:0.1,scaleX:0.78,scaleY:0.78,rotation:2.4769,x:0.2,y:0.05,startPosition:16},0).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:2.4793,x:614.15,y:455.95,startPosition:42},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_34 = new lib.middle_star_Y("synched",1);
	this.instance_34.setTransform(-82.05,17.8,0.2638,0.2638,-35.5762,0,0,0.5,-0.4);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({regX:0.4,regY:-0.2,scaleX:0.343,scaleY:0.343,rotation:-35.5786,x:-118.35,y:23.85,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.5,regY:-0.4,scaleX:0.4398,scaleY:0.4398,rotation:-35.5793,x:-703.55,y:344.2,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.4,regY:-0.2,scaleX:0.343,scaleY:0.343,rotation:-35.5786,x:0.05,y:-0.15,startPosition:14},0).to({regX:0.5,regY:-0.4,scaleX:0.4398,scaleY:0.4398,rotation:-35.5793,x:-703.55,y:344.2,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_35 = new lib.middle_star_Y("synched",1);
	this.instance_35.setTransform(-103.3,-11.75,0.2639,0.2639,-41.5422,0,0,0.5,-0.6);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({regX:0.4,regY:-0.7,scaleX:0.343,scaleY:0.343,rotation:-41.5446,x:-146,y:-14.65,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.6,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-41.5457,x:-624.4,y:467.6,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.4,regY:-0.7,scaleX:0.343,scaleY:0.343,rotation:-41.5446,x:-0.05,y:-0.3,startPosition:14},0).to({regX:0.6,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-41.5457,x:-624.4,y:467.6,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_36 = new lib.middle_star_Y("synched",1);
	this.instance_36.setTransform(-43.9,85.55,0.2902,0.2902,0.6717,0,0,0.1,0);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({scaleX:0.3773,scaleY:0.3773,rotation:0.6697,x:-68.75,y:111.85,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.4,regY:-0.1,scaleX:0.4838,scaleY:0.4838,rotation:0.6723,x:-411,y:583.65,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.1,regY:0,scaleX:0.3773,scaleY:0.3773,rotation:0.6697,x:0.05,y:0,startPosition:14},0).to({regX:0.4,regY:-0.1,scaleX:0.4838,scaleY:0.4838,rotation:0.6723,x:-411,y:583.65,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_37 = new lib.middle_star_Y("synched",1);
	this.instance_37.setTransform(74,110.8,0.2639,0.2639,-1.3818,0,0,0.8,-0.4);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({regX:0.9,regY:-0.2,scaleX:0.3431,scaleY:0.3431,rotation:-1.3815,x:84.5,y:144.75,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-1.3836,x:584.55,y:563.5,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.9,regY:-0.2,scaleX:0.3431,scaleY:0.3431,rotation:-1.3815,x:0.3,y:-0.05,startPosition:14},0).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-1.3836,x:584.55,y:563.5,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_38 = new lib.middle_star_Y("synched",1);
	this.instance_38.setTransform(-20.65,123.75,0.2639,0.2639,-53.7987,0,0,0.4,-0.5);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({regX:0.2,scaleX:0.343,scaleY:0.343,rotation:-53.7969,x:-38.55,y:161.6,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.6,regY:-0.4,scaleX:0.4398,scaleY:0.4398,rotation:-53.7984,x:224.05,y:456.6,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.2,regY:-0.5,scaleX:0.343,scaleY:0.343,rotation:-53.7969,x:-0.1,y:-0.15,startPosition:14},0).to({regX:0.6,regY:-0.4,scaleX:0.4398,scaleY:0.4398,rotation:-53.7984,x:224.05,y:456.6,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_39 = new lib.middle_star_Y("synched",1);
	this.instance_39.setTransform(141.6,-6.75,0.2639,0.2639,-37.5213,0,0,0.8,-0.4);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({regX:1,scaleX:0.343,scaleY:0.343,rotation:-37.5245,x:172.35,y:-8.05,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.6,scaleX:0.4398,scaleY:0.4398,rotation:-37.5247,x:663.05,y:233.1,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:1,scaleX:0.343,scaleY:0.343,rotation:-37.5245,x:0.15,y:-0.3,startPosition:14},0).to({regX:0.6,scaleX:0.4398,scaleY:0.4398,rotation:-37.5247,x:663.05,y:233.1,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_40 = new lib.middle_star_Y("synched",1);
	this.instance_40.setTransform(112.45,-32.15,0.2639,0.2639,-29.0758,0,0,0.8,-0.7);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).to({regX:0.9,scaleX:0.343,scaleY:0.343,rotation:-29.0734,x:134.5,y:-41.15,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-29.0762,x:710.95,y:-122.55,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.9,regY:-0.7,scaleX:0.343,scaleY:0.343,rotation:-29.0734,x:0.15,y:-0.35,startPosition:14},0).to({regX:0.7,regY:-0.5,scaleX:0.4398,scaleY:0.4398,rotation:-29.0762,x:710.95,y:-122.55,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_41 = new lib.middle_star_Y("synched",1);
	this.instance_41.setTransform(86,6.15,0.2639,0.2639,-52.5457,0,0,0.5,-0.4);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({regY:-0.1,scaleX:0.3431,scaleY:0.3431,rotation:-52.547,x:100.1,y:8.65,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.3,regY:-0.4,scaleX:0.4399,scaleY:0.4399,rotation:-52.545,x:626.75,y:-369.95,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.5,regY:-0.1,scaleX:0.3431,scaleY:0.3431,rotation:-52.547,x:0.05,y:-0.15,startPosition:14},0).to({regX:0.3,regY:-0.4,scaleX:0.4399,scaleY:0.4399,rotation:-52.545,x:626.75,y:-369.95,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_42 = new lib.middle_star_Y("synched",1);
	this.instance_42.setTransform(82.2,-33.2,0.2639,0.2639,-6.8267,0,0,0.2,-0.6);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).to({regX:0.4,scaleX:0.3431,scaleY:0.3431,rotation:-6.8254,x:95.2,y:-42.5,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0.1,regY:-0.5,scaleX:0.4399,scaleY:0.4399,rotation:-6.8292,x:216.7,y:-578,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.4,regY:-0.6,scaleX:0.3431,scaleY:0.3431,rotation:-6.8254,x:0.15,y:-0.2,startPosition:14},0).to({regX:0.1,regY:-0.5,scaleX:0.4399,scaleY:0.4399,rotation:-6.8292,x:216.7,y:-578,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_43 = new lib.middle_star_Y("synched",1);
	this.instance_43.setTransform(4.7,59.55,0.3299,0.3299,-34.5411,0,0,-0.1,-0.3);
	this.instance_43.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({regX:-0.2,regY:-0.1,scaleX:0.4289,scaleY:0.4289,rotation:-34.5381,x:-5.55,y:78.15,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:0,regY:-0.4,scaleX:0.5499,scaleY:0.5499,rotation:-34.5424,x:-374.2,y:-527.85,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:-0.2,regY:-0.1,scaleX:0.4289,scaleY:0.4289,rotation:-34.5381,x:-0.05,y:0,startPosition:14},0).to({regX:0,regY:-0.4,scaleX:0.5499,scaleY:0.5499,rotation:-34.5424,x:-374.2,y:-527.85,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_44 = new lib.middle_star_Y("synched",1);
	this.instance_44.setTransform(-64.45,-34.95,0.3,0.3,-29.5656,0,0,-0.1,-0.2);
	this.instance_44.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).to({regX:0,regY:-0.3,scaleX:0.3899,scaleY:0.3899,rotation:-29.5625,x:-95.4,y:-44.8,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:-29.5646,x:-730.35,y:-175.4,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0,regY:-0.3,scaleX:0.3899,scaleY:0.3899,rotation:-29.5625,x:-0.05,y:-0.1,startPosition:14},0).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:-29.5646,x:-730.35,y:-175.4,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_45 = new lib.middle_star_Y("synched",1);
	this.instance_45.setTransform(-34.3,24,0.5999,0.5999,-37.7408,0,0,-0.1,0.1);
	this.instance_45.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({regX:-0.2,scaleX:0.7799,scaleY:0.7799,rotation:-37.7389,x:-56.3,y:31.85,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-37.7406,x:-186.35,y:491.1,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:-0.2,scaleX:0.7799,scaleY:0.7799,rotation:-37.7389,x:-0.05,y:0.15,startPosition:14},0).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-37.7406,x:-186.35,y:491.1,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_46 = new lib.middle_star_Y("synched",1);
	this.instance_46.setTransform(36.15,5.15,0.5999,0.5999,-34.26);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({regY:0.1,scaleX:0.7799,scaleY:0.7799,rotation:-34.2584,x:35.3,y:7.35,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-34.2587,x:702.15,y:86.3,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0,scaleX:0.7799,scaleY:0.7799,rotation:-34.2584,x:0.05,y:0.05,startPosition:14},0).to({regX:-0.1,scaleX:1,scaleY:1,rotation:-34.2587,x:702.15,y:86.3,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_47 = new lib.middle_star_Y("synched",1);
	this.instance_47.setTransform(-7.9,-46.7,0.6,0.6,6.4498,0,0,-0.1,0);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({regX:0,scaleX:0.78,scaleY:0.78,rotation:6.4499,x:-21.9,y:-60.05,alpha:1,startPosition:11},10).wait(3).to({startPosition:14},0).to({scaleX:1,scaleY:1,rotation:6.451,x:-742.5,y:122.3,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,scaleX:0.78,scaleY:0.78,rotation:6.4499,x:0,y:0,startPosition:14},0).to({scaleX:1,scaleY:1,rotation:6.451,x:-742.5,y:122.3,startPosition:40},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	// EndA_OBJ
	this.instance_48 = new lib.middle_star_Y("synched",0);
	this.instance_48.setTransform(19.3,-108.7,0.6,0.6,0,0,0,0.1,-0.1);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({scaleX:0.78,scaleY:0.78,x:13.4,y:-140.65,alpha:1,startPosition:10},10).wait(3).to({startPosition:13},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:276.5,y:-412.75,startPosition:39},20,cjs.Ease.get(1)).to({_off:true},1).wait(2).to({_off:false,regX:0.1,regY:-0.1,scaleX:0.78,scaleY:0.78,x:0.1,y:-0.1,startPosition:13},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:276.5,y:-412.75,startPosition:39},20,cjs.Ease.get(1)).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-843.9,-714.9,1652.8,1515.1999999999998);


(lib.big_star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.EndA_OBJ("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400.9,-401.5,800.5,801.5);


(lib.Back_light_A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Back_light_sym
	this.instance = new lib.Back_light_sym("single",0);
	this.instance.setTransform(-15,0,0.3,0.3,-90,0,0,-12,241.8);
	this.instance.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-12.2,regY:242.1,scaleX:1,scaleY:1,rotation:-45,x:-35.4,y:-35.2},10,cjs.Ease.get(1)).wait(14).to({startPosition:0},0).to({regY:242,scaleX:1.111,scaleY:1.111,x:-39.45,y:-39.2},1).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_1 = new lib.Back_light_sym("single",0);
	this.instance_1.setTransform(15,0,0.3,0.3,90,0,0,-12,241.8);
	this.instance_1.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:135,x:35.25,y:35.35},10,cjs.Ease.get(1)).wait(12).to({startPosition:0},0).to({regY:242,scaleX:1.3332,scaleY:1.3332,x:47.05,y:47.25},3).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_2 = new lib.Back_light_sym("single",0);
	this.instance_2.setTransform(0,15,0.3,0.3,180,0,0,-12,241.8);
	this.instance_2.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-12.1,regY:242,scaleX:1,scaleY:1,rotation:225,x:-35.4,y:35.4},10,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({scaleX:1.5554,scaleY:1.5554,x:-55,y:55.05},5).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_3 = new lib.Back_light_sym("single",0);
	this.instance_3.setTransform(0,-15,0.3,0.3,0,0,0,-12,241.7);
	this.instance_3.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:45,x:35.25,y:-35.3},10,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({scaleX:1.7776,scaleY:1.7776,x:62.7,y:-62.75},7).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_4 = new lib.Back_light_sym("single",0);
	this.instance_4.setTransform(-10.6,10.6,0.2999,0.2999,-135,0,0,-12,241.8);
	this.instance_4.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:-90,x:-49.95,y:0},10,cjs.Ease.get(1)).wait(6).to({startPosition:0},0).to({scaleX:2,scaleY:2,x:-99.9},9).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_5 = new lib.Back_light_sym("single",0);
	this.instance_5.setTransform(10.6,-10.6,0.2999,0.2999,45,0,0,-12,241.8);
	this.instance_5.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:90,x:49.95,y:0},10,cjs.Ease.get(1)).wait(4).to({startPosition:0},0).to({scaleX:2,scaleY:2,x:99.9},9).to({regY:242,scaleX:1.7778,scaleY:1.7778,x:89},2).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_6 = new lib.Back_light_sym("single",0);
	this.instance_6.setTransform(10.6,10.6,0.2999,0.2999,135,0,0,-12,241.8);
	this.instance_6.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:180,x:0,y:49.95},10,cjs.Ease.get(1)).wait(2).to({startPosition:0},0).to({scaleX:2,scaleY:2,y:99.9},9).to({regY:242,scaleX:1.5555,scaleY:1.5555,y:77.85},4).to({_off:true},1).wait(34));

	// Back_light_sym
	this.instance_7 = new lib.Back_light_sym("single",0);
	this.instance_7.setTransform(-10.6,-10.6,0.2999,0.2999,-45,0,0,-12,241.8);
	this.instance_7.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-12.1,regY:242.1,scaleX:1,scaleY:1,rotation:0,x:0,y:-49.95},10,cjs.Ease.get(1)).to({scaleX:2,scaleY:2,y:-99.9},9,cjs.Ease.get(1)).to({scaleX:1.3333,scaleY:1.3333,x:-0.05,y:-66.55},6).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1391.6,-1391.6,2783.2,2783.2);


(lib.Back_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Back_light_A
	this.instance = new lib.Back_light_A("synched",0);
	this.instance.setTransform(-12.15,232.05,0.5,0.5,0,0,0,0,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:1,scaleY:1,alpha:0.5,startPosition:9},9,cjs.Ease.get(1)).wait(9).to({startPosition:18},0).to({scaleX:1.5,scaleY:1.5,y:232,alpha:0,startPosition:25},7).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2099.5,-1344.5,3975.9,3266.3);


(lib.mcCaptionbtn복사본 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.caption2 = new lib.mcCaptioncopy2();
	this.caption2.name = "caption2";
	this.caption2.setTransform(1.6,-152.8);

	this.caption0 = new lib.mcCaptioncopy2();
	this.caption0.name = "caption0";
	this.caption0.setTransform(1.6,0);

	this.caption1 = new lib.mcCaptioncopy2();
	this.caption1.name = "caption1";
	this.caption1.setTransform(1.6,-85.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.caption1},{t:this.caption0},{t:this.caption2}]}).wait(1));

	// 레이어_2
	this.back = new lib.심볼7();
	this.back.name = "back";
	this.back.setTransform(1.6,-110,1,1,0,0,0,75,80);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcCaptionbtn복사본, new cjs.Rectangle(-73.4,-190,150,213), null);


(lib.sym_b01_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_1
	this.instance = new lib.sym_b01_28("synched",0,false);
	this.instance.setTransform(25.9,25.4,1,1,0,0,0,15.9,15.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1,startPosition:4},4,cjs.Ease.get(1)).to({scaleX:0.5,scaleY:0.5,startPosition:12},8,cjs.Ease.get(1)).to({alpha:0.668,startPosition:14},2).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,77,76);


(lib.sym_b01_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_5
	this.instance = new lib.sym_b01_35("synched",0,false);
	this.instance.setTransform(1237.75,96.1,1,1,0,0,0,15.9,15.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:1097.75,y:116.1,startPosition:10},10,cjs.Ease.quadInOut).to({_off:true},1).wait(6));

	// 레이어_4
	this.instance_1 = new lib.sym_b01_35("synched",0,false);
	this.instance_1.setTransform(1173.2,23,1,1,0,0,0,15.9,15.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:1053.2,y:3,startPosition:10},10,cjs.Ease.quadInOut).to({_off:true},1).wait(8));

	// 레이어_8
	this.instance_2 = new lib.sym_b01_32("synched",0,false);
	this.instance_2.setTransform(1142.4,100.9,1,1,0,0,0,27.5,27);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:1042.4,y:120.9,startPosition:14},14,cjs.Ease.quadInOut).to({_off:true},1).wait(5));

	// 레이어_3
	this.instance_3 = new lib.sym_b01_32("synched",0,false);
	this.instance_3.setTransform(1215.5,56.15,1,1,0,0,0,27.5,27);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:1075.5,startPosition:14},14,cjs.Ease.quadInOut).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-26,1254,175.2);


(lib.mcSafariControler = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 레이어_3
	this.mcCaption2 = new lib.mcCaptionbtn복사본();
	this.mcCaption2.name = "mcCaption2";
	this.mcCaption2.setTransform(469.5,16.6);

	this.mcSpeedList = new lib.mcSpeedBtn();
	this.mcSpeedList.name = "mcSpeedList";
	this.mcSpeedList.setTransform(-506.2,157.55);

	this.txtTot = new cjs.Text("00:00", "bold 32px 'Maplestory'");
	this.txtTot.name = "txtTot";
	this.txtTot.textAlign = "center";
	this.txtTot.lineHeight = 38;
	this.txtTot.lineWidth = 101;
	this.txtTot.parent = this;
	this.txtTot.setTransform(330.95,1.35);
	this.txtTot.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.txtCur = new cjs.Text("00:00", "bold 32px 'Maplestory'");
	this.txtCur.name = "txtCur";
	this.txtCur.textAlign = "center";
	this.txtCur.lineHeight = 38;
	this.txtCur.lineWidth = 101;
	this.txtCur.parent = this;
	this.txtCur.setTransform(-516.65,0.55);
	this.txtCur.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,4);

	this.btnPlay = new lib.mc_btn_control();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(-653.45,-10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPlay},{t:this.txtCur},{t:this.txtTot},{t:this.mcSpeedList},{t:this.mcCaption2}]}).wait(1));

	// 레이어_4
	this.timeProgress = new lib.mc_timebar();
	this.timeProgress.name = "timeProgress";
	this.timeProgress.setTransform(2.5,19,1,1,0,0,0,425,0);

	this.timeline.addTween(cjs.Tween.get(this.timeProgress).wait(1));

	// bg
	this.mcCtrlBack = new lib.심볼9();
	this.mcCtrlBack.name = "mcCtrlBack";
	this.mcCtrlBack.setTransform(-80,-8.95,1,1,0,0,0,640,59.3);

	this.timeline.addTween(cjs.Tween.get(this.mcCtrlBack).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcSafariControler, new cjs.Rectangle(-720,-173.4,1280.1,349), null);


(lib.End_Efx_A = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		playSound("eff_cornerEnding");
	}
	this.frame_110 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(108).call(this.frame_110).wait(1));

	// tag
	this.instance = new lib.End_A_tag();
	this.instance.setTransform(3.05,778.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(110));

	// efx_Pat_star
	this.instance_1 = new lib.efx_Pat_star_2("synched",0,false);
	this.instance_1.setTransform(1039.95,544,0.5,0.5,0,0,0,0.1,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63).to({_off:false},0).to({_off:true},46).wait(2));

	// efx_Pat_star
	this.instance_2 = new lib.efx_Pat_star_2("synched",0,false);
	this.instance_2.setTransform(319.95,144,0.5,0.5,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({_off:true},46).wait(11));

	// efx_Pat_star
	this.instance_3 = new lib.efx_Pat_star("synched",0,false);
	this.instance_3.setTransform(639.95,344);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({_off:true},60).wait(28));

	// sym_b01_24
	this.instance_4 = new lib.sym_b01_24("synched",0,false);
	this.instance_4.setTransform(487.2,460.15,1,1,-90,0,0,1180,50.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},17).wait(1).to({_off:false,rotation:45,x:503.2,y:273.8},0).to({_off:true},18).wait(72));

	// sym_b01_24
	this.instance_5 = new lib.sym_b01_24("synched",0,false);
	this.instance_5.setTransform(763.6,388,1,1,0,90,-90,1180,50.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({_off:true},17).wait(1).to({_off:false,skewX:45,skewY:-135,x:803.7,y:432.35},0).to({_off:true},18).wait(72));

	// efx
	this.instance_6 = new lib.big_star("synched",0);
	this.instance_6.setTransform(640,584,0.5,0.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:344,alpha:1,startPosition:12},12,cjs.Ease.get(1)).wait(7).to({startPosition:19},0).to({regX:0.1,regY:0.1,scaleX:0.6,scaleY:0.6,alpha:0,mode:"single"},7).to({_off:true},1).wait(83));

	// efx
	this.instance_7 = new lib.big_star("synched",0);
	this.instance_7.setTransform(640,584,0.5,0.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,y:344,alpha:0.1016,startPosition:12},12,cjs.Ease.get(1)).to({_off:true},7).wait(90));

	// Back_Light
	this.instance_8 = new lib.Back_light("synched",0,false);
	this.instance_8.setTransform(649.65,161.65);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},108).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1449.9,-1182.8,3975.9,3266.3);


// stage content:
(lib.video = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mcEnding
	this.mcEnding = new lib.End_Efx_A();
	this.mcEnding.name = "mcEnding";

	this.timeline.addTween(cjs.Tween.get(this.mcEnding).wait(1));

	// caption
	this.mcCaptionArea = new lib.mcCaptionArea();
	this.mcCaptionArea.name = "mcCaptionArea";
	this.mcCaptionArea.setTransform(640,680.4);

	this.timeline.addTween(cjs.Tween.get(this.mcCaptionArea).wait(1));

	// UI
	this.type0 = new lib.mcSafariControler();
	this.type0.name = "type0";
	this.type0.setTransform(720,718);

	this.timeline.addTween(cjs.Tween.get(this.type0).wait(1));

	// 레이어_1
	this.mcBack = new lib.심볼8();
	this.mcBack.name = "mcBack";
	this.mcBack.setTransform(637.45,384.75,12.8,7.6799,0,0,0,49.8,50.1);

	this.timeline.addTween(cjs.Tween.get(this.mcBack).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,384,640.0999999999999,509.6);
// library properties:
lib.properties = {
	id: 'CC01F99F45911D429B467372AF599915',
	width: 1280,
	height: 768,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/video_atlas_1.png", id:"video_atlas_1"},
		{src:"sounds/eff_cornerEnding.mp3", id:"eff_cornerEnding"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CC01F99F45911D429B467372AF599915'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;