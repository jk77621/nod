/*
	createjs 의 로딩/ 켄버스 드로잉 설정등 초기 화면 설정 관련 내용 
	var cjs  = new cjsLoader();
	cjs.load

*/

function cjsLoader() {
	var cm = this;




	var LAYER_UI = { canvas: null, stage: null };
	var mapAudios = {};

	// adobe AnimateCC에서 프레임 사운드를 표현하는 방식입니다. 지우면 안되요!!
	if (!window["playSound"]) window.playSound = function (id, loop) {
		//var props = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_EARLY, loop: loop, volume: 1})
		//return createjs.Sound.play(id,props);
		var snd = AudioUtil.getBufferAudio();
		return snd.play(mapAudios[id].src);
	}

	/**
	 * 사운드 등록
	 * @param {*} lib 
	 */
	function setRegisterSound(lib) {
		//console.log("setRegisterSound",lib);
		var strFilePath, strFileId, strType;

		for (var i = 0; i < lib.properties.manifest.length; i++) {
			var manifest = lib.properties.manifest[i];

			strType = manifest.type;

			if (manifest.src.indexOf("sounds/") < 0) continue;

			strFilePath = manifest.src.split("?")[0];
			strFileId = manifest.id;

			//gsnd.addSound(strFileId, strFilePath);

			mapAudios[manifest.id] = manifest;
		}
	};

	/*
	Lib파일과 관련 페이지를 같이 로딩
	funcComplete에 인자로 전달되는 lib 레퍼런스와 페이지 레퍼런스를 이용할 수 있습니다.
	*/
	cm.loadPage = function (strLibPath, strSrcPath, funcComplete) {
		//console.log("loadPage",strLibPath);
		cm.loadAnimate(strLibPath, function (lib) {
			JSImport.load(strSrcPath, function () {
				//LAYER_UI.stage.update();
				funcComplete(lib);
			});
		});
	}

	cm.stopRecursion1frameClip = function (target) {
		var b = (target instanceof createjs.MovieClip);
		if (b) {
			if (target.totalFrames == 1) target.gotoAndStop(0);
			//console.log(target.name+" "+target.totalFrames+" "+target.numChildren);
			for (var i = 0; i < target.numChildren; ++i) {
				var t = target.getChildAt(i);
				cm.stopRecursion1frameClip(t);
			}
		}
	}

	cm.addFuncAtFrame = function (target, frame, func) {
		if (!target) return;
		if (!func) return;
		if (frame < 0) {
			frame = 0;
		}
		if (frame >= target.totalFrames) {
			frame = target.totalFrames - 1;
		}

		if (target.tarFunc != null) {
			target.timeline.removeTween(target.tarFunc);
		}

		target.tarFunc = target.timeline.addTween(
			createjs.Tween.get(target).wait(frame).call(func, [target])
		);
	};


	/*
	브라우저에서 하는 가비지 컬랙션 대상이 되지 않기 위해 레퍼런스 저장용 오브젝트입니다.
	*/


	/*
	AnimateCC에서 만들어낸 js파일과 관련 스프라이트,사운드들을 로딩합니다.
	funcComplete에 인자로 전달되는 lib 레퍼런스를 이용합니다.
	*/
	cm.loadAnimate = function (strPath, funcComplete) {
		JSLoader.load(strPath, function () {
			var key = Object.keys(AdobeAn.compositions)[0];
			//console.log("key", key);
			var comp = AdobeAn.getComposition(key);
			var loader = new createjs.LoadQueue(true);
			loader.installPlugin(createjs.Sound);
			/*
			loader.addEventListener("fileload", function (evt) {
				handleFileLoad(evt, comp)
			});*/
			loader.addEventListener("complete", function (evt) {
				onCJSLoadComplete(evt, comp, funcComplete, strPath)
			});
			loader.addEventListener("progress", onCJSProgress);
			var lib = comp.getLibrary();

			var directory = strPath.substr(0, strPath.lastIndexOf("/"));
			if (directory.length != 0) {
				directory += "/";
			}
			//console.log(strPath,"|",directory,"|",lib.properties.manifest);
			for (var i = 0; i < lib.properties.manifest.length; ++i) {
				lib.properties.manifest[i].src = directory + lib.properties.manifest[i].src;
			}


			var arrNoSound = [];
			for (var i = 0; i < lib.properties.manifest.length; ++i) {
				if (lib.properties.manifest[i].src.indexOf("sounds/") >= 0) continue;
				arrNoSound.push(lib.properties.manifest[i]);
			}
			loader.loadManifest(arrNoSound);


			AdobeAn = null;
		});
	}

	var m_parID = "";
	// 초기화
	cm.init = function (parentElement) {
		if (LAYER_UI.stage) {
			console.log("이미 parentElement가 설정되었습니다.");
			return;
		}
		m_parID = parentElement.id;
		LAYER_UI = makeElements(parentElement, "ui");
		LAYER_UI.autoClear = false;
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 30;
	}

	// 지정된 무비클립을 스테이지에 에드 한다. 기존껀 없어져요.
	cm.setMC = function (mc, bTickEnalbe) {
		if (bTickEnalbe === undefined) bTickEnalbe = true;
		LAYER_UI.stage.removeAllChildren();
		if (!mc) {
			return;
		}
		cm.stopRecursion1frameClip(mc);
		LAYER_UI.stage.addChild(mc);
		if (bTickEnalbe) cm.tickEnable(true);
	}

	function onTick(e) {
		LAYER_UI.stage.update();
	}

	cm.tickEnable = function (bEnable) {
		if (bEnable) {
			createjs.Ticker.removeEventListener("tick", onTick);
			createjs.Ticker.addEventListener("tick", onTick);
		}
		else {
			createjs.Ticker.removeEventListener("tick", onTick);
		}
	}

	/*
	cm.setLoadingMc = function(mc) {
		m_mcLoading = mc;
		cm.LAYER_LOADING.stage.addChild(m_mcLoading);
	}
	*/


	// 기본 canvas를 생성한다.
	function makeElements(pe, id) {
		var can = document.createElement('canvas');
		can.id = id;
		can.width = 1280;
		can.height = 768;
		can.style.position = "absolute";
		can.style.display = "block";
		//can.style.backgroundColor = rgba(255, 255, 255, 255);          
		//can.style.zIndex = depths;

		pe.appendChild(can);
		var ctx = can.getContext('2d');
		ctx.miterLimit = 2;
		ctx.alpha = false;
		var stage = new createjs.Stage(can);
		stage.snapToPixelEnabled = true;
		createjs.Touch.enable(stage);
		//stage.framerate = 30;
		//stage = new createjs.StageGL( can,{ antialias: true,transparent:true }  );

		stage.enableMouseOver(10);

		var layer = { canvas: can, stage: stage };
		return layer;
	}

	// 프로그래스 이벤트 핸들러
	function onCJSProgress(e) {
		var percent = parseInt(e.progress * 100);

	}



	// 모든 객체가 로드 완료 되었을 때 호출
	function onCJSLoadComplete(evt, comp, funcComplete, strPath) {
		var lib = comp.getLibrary();
		var ss = comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for (var i = 0; i < ssMetadata.length; i++) {
			ss[ssMetadata[i].name] = new createjs.SpriteSheet({
				"images": [queue.getResult(ssMetadata[i].name)],
				"frames": ssMetadata[i].frames
			})
		}
		setRegisterSound(lib);

		if (funcComplete) setTimeout(funcComplete,0,lib);

		//SoundUtil.loadCommonSound();
	}
}


/*
* ScaleBitmap
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

// namespace:
this.createjs = this.createjs || {};

(function () {
	"use strict";

	// constructor:
	/**
	 * A ScaleBitmap represents an Image, Canvas, or Video in the display list and is split into nine separate regions
	 * to allow independent scaling of each region. This display object can be used to create scaling UI skins, such as
	 * buttons and backgrounds with rounded corners. A ScaleBitmap can be instantiated using an existing HTML element,
	 * or a string, similar to a Bitmap.
	 *
	 * <h4>Example</h4>
	 *      var bitmap = new createjs.ScaleBitmap("imagePath.jpg", new createjs.Rectangle(14, 14, 3, 3));
	 *      bitmap.setDrawSize(100, 100);
	 *
	 * Note: When a string path or image tag that is not yet loaded is used, the stage may need to be redrawn before it
	 * will be displayed.
	 *
	 * @class ScaleBitmap
	 * @extends DisplayObject
	 * @constructor
	 * @param {Image | HTMLCanvasElement | HTMLVideoElement | String} imageOrUri The source object or URI to an image to display. This can be either an Image, Canvas, or Video object, or a string URI to an image file to load and use. If it is a URI, a new Image object will be constructed and assigned to the .image property.
	 * @param {Rectangle} scale9Grid The inner rectangle of the nine region grid.
	 **/
	function ScaleBitmap(imageOrUri, scale9Grid) {
		this.DisplayObject_constructor();

		// public properties:
		/**
		 * The image to render. This can be an Image, a Canvas, or a Video.
		 * @property image
		 * @type Image | HTMLCanvasElement | HTMLVideoElement
		 **/
		if (typeof imageOrUri == "string") {
			this.image = new Image();
			this.image.src = imageOrUri;
		} else {
			this.image = imageOrUri;
		}

		/**
		 * Specifies the width of the drawn ScaleBitmap.
		 * @property drawWidth
		 * @type Number
		 * @default The original width of the image.
		 */
		this.drawWidth = this.image.width;

		/**
		 * Specifies the height of the drawn ScaleBitmap.
		 * @property drawHeight
		 * @type Number
		 * @default The original height of the image.
		 */
		this.drawHeight = this.image.height;
		/**
		 * Specifies the inner rectangle of the nine region scaling grid.
		 * @property scale9Grid
		 * @type Rectangle
		 */
		this.scale9Grid = scale9Grid;

		/**
		 * Whether or not the ScaleBitmap should be draw to the canvas at whole pixel coordinates.
		 * @property snapToPixel
		 * @type Boolean
		 * @default true
		 **/
		this.snapToPixel = true;
	}

	var p = createjs.extend(ScaleBitmap, createjs.DisplayObject);
	ScaleBitmap.prototype.constructor = ScaleBitmap;

	// public methods:

	/**
	 * Changes the dimensions used the draw the ScaleBitmap.
	 *
	 * @method setDrawSize
	 * @param {Number} newWidth The new width of the drawn ScaleBitmap.
	 * @param {Number} newHeight The new height of the drawn ScaleBitmap.
	 */
	p.setDrawSize = function (newWidth, newHeight) {
		this.drawWidth = newWidth;
		this.drawHeight = newHeight;
	};

	/**
	 * Returns true or false indicating whether the display object would be visible if drawn to a canvas.
	 * This does not account for whether it would be visible within the boundaries of the stage.
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method isVisible
	 * @return {Boolean} Boolean indicating whether the display object would be visible if drawn to a canvas
	 **/
	p.isVisible = function () {
		var hasContent = this.cacheCanvas || (this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2));
		return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
	};

	/**
	 * Draws the display object into the specified context ignoring it's visible, alpha, shadow, and transform.
	 * Returns true if the draw was handled (useful for overriding functionality).
	 * NOTE: This method is mainly for internal use, though it may be useful for advanced uses.
	 * @method draw
	 * @param {CanvasRenderingContext2D} ctx The canvas 2D context object to draw into.
	 * @param {Boolean} ignoreCache Indicates whether the draw operation should ignore any current cache.
	 * For example, used for drawing the cache (to prevent it from simply drawing an existing cache back
	 * into itself).
	 **/
	p.draw = function (ctx, ignoreCache) {
		if (this.DisplayObject_draw(ctx, ignoreCache)) { return true; }

		var centerX = this.scale9Grid.width;
		var centerY = this.scale9Grid.height;
		if (centerX == 0) //vertical
		{
			if (centerY == 0) {
				throw "One of scale9Grid width or height must be greater than zero.";
			}
			var imageWidth = this.image.width;
			var scale3Region1 = this.scale9Grid.y;
			var scale3Region3 = this.image.height - scale3Region1 - centerY;
			var oppositeEdgeScale = this.drawWidth / imageWidth;
			var scaledFirstRegion = scale3Region1 * oppositeEdgeScale;
			var scaledThirdRegion = scale3Region3 * oppositeEdgeScale;
			var scaledSecondRegion = this.drawHeight - scaledFirstRegion - scaledThirdRegion;

			ctx.drawImage(this.image, 0, 0, imageWidth, scale3Region1, 0, 0, this.drawWidth, scaledFirstRegion);
			ctx.drawImage(this.image, 0, scale3Region1, imageWidth, centerY, 0, scaledFirstRegion, this.drawWidth, scaledSecondRegion);
			ctx.drawImage(this.image, 0, scale3Region1 + centerY, imageWidth, scale3Region3, 0, scaledFirstRegion + scaledSecondRegion, this.drawWidth, scaledThirdRegion);
		}
		else if (centerY == 0) //horizontal
		{
			var imageHeight = this.image.height;
			scale3Region1 = this.scale9Grid.x;
			scale3Region3 = this.image.width - scale3Region1 - centerX;
			oppositeEdgeScale = this.drawHeight / this.image.height;
			scaledFirstRegion = scale3Region1 * oppositeEdgeScale;
			scaledThirdRegion = scale3Region3 * oppositeEdgeScale;
			scaledSecondRegion = this.drawWidth - scaledFirstRegion - scaledThirdRegion;

			ctx.drawImage(this.image, 0, 0, scale3Region1, imageHeight, 0, 0, scaledFirstRegion, this.drawHeight);
			ctx.drawImage(this.image, scale3Region1, 0, centerX, imageHeight, scaledFirstRegion, 0, scaledSecondRegion, this.drawHeight);
			ctx.drawImage(this.image, scale3Region1 + centerX, 0, scale3Region3, imageHeight, scaledFirstRegion + scaledSecondRegion, 0, scaledThirdRegion, this.drawHeight);
		}
		else {
			var left = this.scale9Grid.x;
			var top = this.scale9Grid.y;
			var right = this.image.width - centerX - left;
			var bottom = this.image.height - centerY - top;
			var scaledCenterX = this.drawWidth - left - right;
			var scaledCenterY = this.drawHeight - top - bottom;

			ctx.drawImage(this.image, 0, 0, left, top, 0, 0, left, top);
			ctx.drawImage(this.image, left, 0, centerX, top, left, 0, scaledCenterX, top);
			ctx.drawImage(this.image, left + centerX, 0, right, top, left + scaledCenterX, 0, right, top);

			ctx.drawImage(this.image, 0, top, left, centerY, 0, top, left, scaledCenterY);
			ctx.drawImage(this.image, left, top, centerX, centerY, left, top, scaledCenterX, scaledCenterY);
			ctx.drawImage(this.image, left + centerX, top, right, centerY, left + scaledCenterX, top, right, scaledCenterY);

			ctx.drawImage(this.image, 0, top + centerY, left, bottom, 0, top + scaledCenterY, left, bottom);
			ctx.drawImage(this.image, left, top + centerY, centerX, bottom, left, top + scaledCenterY, scaledCenterX, bottom);
			ctx.drawImage(this.image, left + centerX, top + centerY, right, bottom, left + scaledCenterX, top + scaledCenterY, right, bottom);
		}

		return true;
	};

	/**
	 * Returns a clone of the ScaleBitmap instance.
	 * @method clone
	 * @return {ScaleBitmap} a clone of the ScaleBitmap instance.
	 **/
	p.clone = function () {
		var o = new ScaleBitmap(this.image, this.scale9Grid.clone());
		if (this.sourceRect) { o.sourceRect = this.sourceRect.clone(); }
		this.cloneProps(o);
		return o;
	};

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 **/
	p.toString = function () {
		return "[ScaleBitmap (name=" + this.name + ")]";
	};

	createjs.ScaleBitmap = createjs.promote(ScaleBitmap, "DisplayObject");

}());
