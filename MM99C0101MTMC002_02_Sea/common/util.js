/**
 * @class util
 * @classdesc 전체 콘텐츠 유용한 기능 관리 클래스
 *            coypright (c) 2016- 2020 NOD.
 */
var util = new (function () {
    var p = this;

    /**
     * @method util.getClipFrameComplete
     * @description 대상 무비클립이 종료 됐을 때 호출
     * @param {MovieClip} mc 대상 무비클립
     * @param {Function} funcComplete 완료 콜백
     * @param {Boolean} bLoop 완료 후 루프 여부
     */
    p.getClipFrameComplete = function (mc, funcComplete, bLoop) {
        p.addFuncAtFrame( mc, onCompleteTimeline );

        function onCompleteTimeline( mcTarget ) {
            if (!bLoop) mc.stop();
            if (funcComplete) funcComplete( mcTarget );
        }
    }

    /** 
     * @method util.addFuncAtFrame
     * @description 인자로 전달한 무비클립의 특정 프레임에 콜백을 삽입
     * @param {MovieClip} target 해당 무비클립
     * @param {Function} func 실행이 끝난 후 콜백 default: null
     * @param {Number} frame 콜백실행할 프레임, default: 9999( 마지막 프레임 )
     */
    p.addFuncAtFrame = function (target, func, frame) {
        if( !func ) func = null;
        if( !frame ) frame = 9999;

        if (frame >= target.totalFrames) frame = target.totalFrames - 1;

        if (target.tarFunc != null) target.timeline.removeTween(target.tarFunc);

        target.tarFunc = target.timeline.addTween(
            createjs.Tween.get(target).wait(frame).call(
                function (_mc) {
                    _mc.stop();

                    if (func) func(_mc);

                }, [target]
            )
        );
    }

    /** 
     * @method util.removeFuncAtFrame
     * @description 무비클립의 특정 프레임에 삽입된 콜백을 제거
     * @param {MovieClip} target 해당 무비클립
     */
    p.removeFuncAtFrame = function (target) {
        if (target.tarFunc != null) target.timeline.removeTween(target.tarFunc);
    }


    /**
     * @method util.addZero
     * @description 0,1,2... > 01, 02... 의 문자열로 변경하여 리턴
     * @param {Number} n 변경할 숫자
     */
    p.addZero = function (n) {
        if (n < 10) {
            return "0" + String(n);
        } else {
            return String(n);
        }
    }

    /**
     * @method util.setTimeout
     * @description setTimeout pause 이슈를 해결하기 위한 createjs 사용
     * @param {Function} funcTimeout 완료 콜백
     * @param {Number} nMiliSec timeout 시간 ( 밀리세컨드 )
     */
    p.setTimeout = function (funcTimeout, nMiliSec) {
        var mcTemp = new createjs.MovieClip();
        var strID = createjs.Tween.get(mcTemp).wait(nMiliSec).call(funcTimeout);
        return strID;
    }

    /**
     * @method util.clearTimeout
     * @description util.timeout을 사용한 객체의 timeout clear
     * @param {String} strID util.setTimeout return id
     */
    p.clearTimeout = function (strID) {
        if (strID.target == undefined) return;

        var mcTarget = strID.target;
        createjs.Tween.removeTweens(mcTarget);
    }

    /**
     * @method util.setInterval
     * @description setInterval pause 이슈를 해결하기 위한 createjs 사용
     * @param {Function} funcInterval 완료 콜백
     * @param {Number} nMiliSec timeout 시간 ( 단위 : 밀리세컨드 )
     */
    p.setInterval = function (funcInterval, nMiliSec) {
        var mcTemp = new createjs.MovieClip();
        var strID = createjs.Tween.get(mcTemp, { loop: true }).wait(nMiliSec).call(funcInterval);
        return strID;
    }

    /**
     * @method util.clearInterval
     * @description util.timeout을 사용한 객체의 timeout clear
     * @param {String} strID util.setTimeout return id
     */
    p.clearInterval = function (strID) {
        var mcTarget = strID.target;
        createjs.Tween.removeTweens(mcTarget);
    }

    /**
     * @method util.stopRecursion1frameClip
     * @description 지정된 무비클립의 자식들을 확인하여 1프레임 클릭을 모두 정지시킨다. ( createjs 라이브러리 오류 처리 )
     * @param mcTarget  대상 무비클립
     */
    p.stopRecursion1frameClip = function (mcTarget) {
        var b = (mcTarget instanceof createjs.MovieClip);
        if (b) {
            if (mcTarget.totalFrames == 1) mcTarget.gotoAndStop(0);
            for (var i = 0; i < mcTarget.numChildren; ++i) {
                var t = mcTarget.getChildAt(i);
                p.stopRecursion1frameClip(t);
            }
        }
    }

    /**
     * @method util.getSecFromTimeString
     * @description XX:XX:XX 형태의 Time String 값을 second 로 변환
     */
    p.getSecFromTimeString = function (strTime) {
        var arrTime = strTime.split(":");
        var nTime = Number(arrTime[0]) * 60 + Number(arrTime[1]) + Number(arrTime[2]) / 100;
        return nTime;
    }

    /**
     * @method util.shuffle
     * @description array 를 섞어 준다
     */
    p.shuffle = function (o) {
        if (!o) return o;
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    /**
     * @method util.fixCjsText
     * @description createjs Text 관련 수정
     */
    p.fixCjsText = function () {
        // createjs Text 정렬관련 오류 수정
        var cache = {}
        createjs.Text.prototype._drawTextLine = function (ctx, text, y) {
            this.textBaseline = ctx.textBaseline = "alphabetic";
            if (!(this.font in cache)) {
                var metrics = this.getMetrics();
                cache[this.font] = metrics.vOffset;
            }
            var offset = cache[this.font];
            if (this.outline) {
                ctx.strokeText(text, 0, y - offset, this.maxWidth || 0xFFFF);
            } else {
                ctx.fillText(text, 0, y - offset, this.maxWidth || 0xFFFF);
            }
        };
    }

    /**
     * @method util.drawRect
     * @description 지정된 사각형을 그려서 리턴한다.
     * @param {Object} objRectangle rectAngle
     * @param {String} strColor 색상
     * @param {Number} nAlpha 알파
     */
    p.drawRect = function (objRectangle, strColor, nAlpha) {
        if (!strColor) strColor = "#FFFFFF";
        if (!nAlpha) nAlpha = 0.1;

        var graphics = new createjs.Graphics().beginFill(strColor).drawRect(objRectangle.x, objRectangle.y, objRectangle.width, objRectangle.height);
        var shape = new createjs.Shape(graphics);
        shape.alpha = nAlpha;
        return shape;
    }

    /**
     * @method util.loadImage
     * @description 이미지를 로드한다.
     * @param {Object} arrPath 다운로드 이미지 배열
     * @param {String} callbackFileloadQueue 로드 진행 콜백
     * @param {Number} callbackCompleteQueue 로드 완료 콜백
     * @param {Number} callbackError 로드 에러 콜백
     */
    p.loadImage = function (arrPath, callbackFileloadQueue, callbackCompleteQueue, callbackError) {
        var queue = new createjs.LoadQueue(true);
        queue.on("fileload", onFileloadQueue, this);
        queue.on("complete", onCompleteQueue, this);
        queue.on("error", onError, this);

        for (var i = 0; i < arrPath.length; i++) {
            queue.loadFile(arrPath[i]);
        }

        queue.load();

        function onFileloadQueue(e) {
            // var item = e.item;
            // var type = item.type;

            if (e.item.type == createjs.Types.IMAGE) {
                // console.log( e );
                callbackFileloadQueue(e);
            }
        }
        function onCompleteQueue() {
            // console.log( "onCompleteQueue==================" );
            callbackCompleteQueue();
        }
        function onError(e) {
            queue.stopOnError = true;
            callbackError(e);
        }
    }
})();
