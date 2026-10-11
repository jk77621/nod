//(function () {
createjs.NODUtil = new (function () {
    let p = this;

    /**
     * @method createjs.NODUtil.FIT
     * @description 지정된 디스플레이 오브젝트 맞춤 타입 상수
     */
    p.FIT = { WIDTH: "fit_width", HEIGHT: "fit_height", IN: "fit_in", OUT: "fit_out", STRETCH: "stretch" };

    /**
     * @method createjs.NODUtil.fitMC
     * @description 지정된 디스플레이 오브젝트의 크기를 타입에 맞게 변형한다.
     * @param {*} mcContainer 
     * @param {*} mcTarget 
     * @param {*} type 
     */
    p.fitMC = function (mcContainer, mcTarget, type) {
        console.log(mcContainer, mcTarget, type);
        p.regAlign(mcContainer, p.ALIGN.CM);
        p.regAlign(mcTarget, p.ALIGN.CM);
        let rectContainer = mcContainer.getBounds();
        let rectTarget = mcTarget.getBounds();
        let scaleX, scaleY, scale = 1;
        scaleX = rectContainer.width / rectTarget.width;
        scaleY = rectContainer.height / rectTarget.height;

        function fit(sx, sy) {
            mcTarget.scaleX = sx;
            mcTarget.scaleY = sy;
            mcTarget.x = mcContainer.x;
            mcTarget.y = mcContainer.y;
        }
        switch (type) {
            case p.FIT.WIDTH: scale = scaleX; fit(scale, scale); break;
            case p.FIT.HEIGHT: scale = scaleY; fit(scale, scale); break;
            case p.FIT.IN: default: scale = (scaleX > scaleY) ? scaleY : scaleX; fit(scale, scale); break;
            case p.FIT.OUT: scale = (scaleX > scaleY) ? scaleX : scaleY; fit(scale, scale); break;
            case p.FIT.STRETCH: fit(scaleX, scaleY); break;
        }
    }


    /**
    * @method createjs.NODUtil.ALIGN
    * @description 지정된 디스플레이 오브젝트 위치 상수
    * 가로( Left Center Right) 
    * 세로( Top Middle Bottom)
    */
    p.ALIGN = { LT: "LT", CT: "CT", RT: "RT", LM: "LM", CM: "CM", RM: "RM", LB: "LB", CB: "CB", RB: "RB" };

    /**
     * @method createjs.NODUtil.resSetXY
     * @description 지정된 디스플레이 오브젝트의 regX,regY 값을 변형한다.
     * @param {*} displayObj 
     * @param {*} x 
     * @param {*} y 
     */
    p.regSetXY = function (displayObj, x, y) {
        let regAdd = { x: x - displayObj.regX, y: y - displayObj.regY };
        displayObj.setTransform(displayObj.x + regAdd.x, displayObj.y + regAdd.y, displayObj.scaleX, displayObj.scaleY, displayObj.rotation, displayObj.skewX, displayObj.skewY, x, y);
        //setTimeout(function () { displayObj.stage.update(); });
    }

    /**
     * @method createjs.NODUtil.regAlign
     * @description 지정된 디스플레이 오브젝트의 regX,regY 값을 변형한다.
     * @param {*} displayObj 
     * @param {*} stat 
     */
    p.regAlign = function (displayObj, stat) {
        if (!stat) stat = p.ALIGN.CM;
        let fixReg = { x: 0, y: 0 };
        stat = stat.toUpperCase();
        let rect = displayObj.getBounds() || displayObj.nominalBounds;
        let size = { w: rect.width, h: rect.height };
        //console.log(displayObj, stat, rect, size);
        switch (stat) {
            case p.ALIGN.LT: fixReg.x = 0; fixReg.y = 0; break;
            case p.ALIGN.CT: fixReg.x = size.w / 2; fixReg.y = 0; break;
            case p.ALIGN.RT: fixReg.x = size.w; fixReg.y = 0; break;
            case p.ALIGN.LM: fixReg.x = 0; fixReg.y = size.h / 2; break;
            case p.ALIGN.CM: default: fixReg.x = size.w / 2; fixReg.y = size.h / 2; break;
            case p.ALIGN.RM: fixReg.x = size.w; fixReg.y = size.h / 2; break;
            case p.ALIGN.LB: fixReg.x = 0; fixReg.y = size.h; break;
            case p.ALIGN.CB: fixReg.x = size.w / 2; fixReg.y = size.h; break;
            case p.ALIGN.RB: fixReg.x = size.w; fixReg.y = size.h; break;
        }
        p.regSetXY(displayObj, fixReg.x, fixReg.y);
    }

    /**
     * @method createjs.NODUtil.stop1frameClip
     * @description 성능 향상을 위함 지정된 무비클립이 하부의 1프레임짜리는 전부 stop시킴
     * @param {*} target 
     */
    p.stop1frameClip = function (target) {
        let b = (target instanceof createjs.MovieClip);
        if (b) {
            if (target.totalFrames == 1) target.gotoAndStop(0);
            //console.log(target.name+" "+target.totalFrames+" "+target.numChildren);
            for (let i = 0; i < target.numChildren; ++i) {
                let t = target.getChildAt(i);
                p.stop1frameClip(t);
            }
        }
    }

    /** 
     * @method createjs.NODUtil.addFuncAtFrame
     * @description 인자로 전달한 무비클립의 특정 프레임에 콜백을 삽입
     * @param {MovieClip} target 해당 무비클립
     * @param {Function} func 실행이 끝난 후 콜백 default: null
     * @param {Number} frame 콜백실행할 프레임, default: 9999( 마지막 프레임 )
     */
    p.addFuncAtFrame = function (target, func = null, frame = 9999) {
        if (frame >= target.totalFrames) frame = target.totalFrames - 1;
        if (target.tarFunc != null) target.timeline.removeTween(target.tarFunc);
        target.tarFunc = target.timeline.addTween(
            createjs.Tween.get(target).wait(frame).call(
                function (_mc) {
                    _mc.stop();
                    if (func) func(_mc);
                }, [target]));
    };
    p.removeFuncAtFrame = function (target) {
        if (target.tarFunc != null) target.timeline.removeTween(target.tarFunc);
    }

    /**
     * @method createjs.NODUtil.setTimeout
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
     * @method createjs.NODUtil.clearTimeout
     * @description util.timeout을 사용한 객체의 timeout clear
     * @param {String} strID util.setTimeout return id
     */
    p.clearTimeout = function (strID) {
        if (strID.target == undefined) return;

        var mcTarget = strID.target;
        createjs.Tween.removeTweens(mcTarget);
    }

    /**
     * @method createjs.NODUtil.setInterval
     * @description setInterval pause 이슈를 해결하기 위한 createjs 사용
     * @param {Function} funcInterval 완료 콜백
     * @param {Number} nMiliSec timeout 시간 ( 밀리세컨드 )
     */
    p.setInterval = function (funcInterval, nMiliSec) {
        var mcTemp = new createjs.MovieClip();
        var strID = createjs.Tween.get(mcTemp, { loop: true }).wait(nMiliSec).call(funcInterval);
        return strID;
    }

    /**
     * @method createjs.NODUtil.clearInterval
     * @description createjs.NODUtil.timeout을 사용한 객체의 timeout clear
     * @param {String} strID util.setTimeout return id
     */
    p.clearInterval = function (strID) {
        var mcTarget = strID.target;
        createjs.Tween.removeTweens(mcTarget);
    }

    /**
     * @method createjs.NODUtil.stopAllClip
     * @description 지정된 클립 하위 모든 클립을 정지한다.
     * @param mcTarget  대상 무비클립
     */
    p.stopAllClip = function (mcTarget) {
        var b = (mcTarget instanceof createjs.MovieClip);
        if (b) {
            mcTarget.stop();
            for (var i = 0; i < mcTarget.numChildren; ++i) {
                var t = mcTarget.getChildAt(i);
                stopAllClip(t);
            }
        }
    }

    /**
     * @method createjs.NODUtil.fixCjsText
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
     * @method createjs.NODUtil.drawRect
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
     * @method createjs.NODUtil.loadImage
     * @description 이미지를 로딩후 
     * @param {*} arrPath 
     * @param {*} callbackFileloadQueue 
     * @param {*} callbackCompleteQueue 
     * @param {*} callbackError 
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


DateUtil = new (function () {
    var p = this;
    /**
     * @method DateUtil.yyyymmdd
     * @description date 객체를 지정된 스트링 문자로 변형하여 전달함.
     * @param {*} date 
     * @returns 0000-00-00 형태
     */
    p.yyyymmdd = function (date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();
        return [date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('-');
    };

})();//DateUtil

ArrayUtil = new (function () {
    var p = this;

    /**
     * @method ArrayUtil.hasSameElements
     * @description 배열의 순서 상관없이 동일한 요소를 갖고 있는지 확인.
     * @param arr1 {Array}
     * @param arr2 {Array}
     * @returns {boolean}
     */
    p.hasSameElements = function (arr1, arr2) {
        if (arr1.length != arr2.length) return false;
        arr1 = copyAndSort(arr1);
        arr2 = copyAndSort(arr2);

        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;


        function copyAndSort(source) {
            var arr = source.concat();
            arr.sort();
            return arr;
        }
    };//end p.hasSameElements

    /**
     * @method ArrayUtil.isSame
     * @description 2개의 배열의 값이 모두 같은가요?
     * @param arr1 {Array}
     * @param arr2 {Array}
     * @returns {boolean}
     */
    p.isSame = function (arr1, arr2) {
        if (arr1.length != arr2.length) return false;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) return false;
        }
        return true;
    };


    /**
     * @method ArrayUtil.shuffle
     * @description 원본 배열을 섞어서 리턴.
     * @param o {Array}
     * @returns {Array}
     */
    p.shuffle = function (o) {
        if (!o) return o;
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };


    /**
     * @method ArrayUtil.remove
     * @description 배열에서 어떤 값을 지움
     * @param arr {Array}
     * @param value {*}
     */
    p.remove = function (arr, value) {
        var index = arr.indexOf(value);
        if (index == -1) return;
        arr.splice(index, 1);
    };


    /**
     * @method ArrayUtil.typeCastingIndexOf
     * @description == 비교하여 index찾음. 즉.. true 랑 1이랗 같다고 할수도 있음.
     * @param arr {Array}
     * @param value {*}
     * @returns {Number}
     */
    p.typeCastingIndexOf = function (arr, value) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == value) return i;
        }
        return -1;
    };

    /**
     * @method ArrayUtil.makeEmpty
     * @description 빈배열을 만든다.
     * @param nLength
     * @returns {arr}
     */
    p.makeEmpty = function (nLength) {
        var retArr = [];
        for (var i = 0; i < nLength; ++i) {
            retArr.push("");
        }
        return retArr;
    }

    /**
     * @method ArrayUtil.sortOn
     * @description JSON 데이터를 원하는 키값으로 sort 한다
     * @param {Array} arrData 대상 데이터
     * @param {String} strKey 변경하려는 JSON 키값
     * @param {String} strType 변경 타입 ( asc:순차 / desc:역순 )
     */
    p.sortOn = function (arrData, strKey, strType) {
        if (strType == undefined) {
            strType = "asc";
        }
        return arrData.sort(function (a, b) {
            var x = a[strKey];
            var y = b[strKey];
            if (strType == "desc") {
                return x > y ? -1 : x < y ? 1 : 0;
            } else if (strType == "asc") {
                return x < y ? -1 : x > y ? 1 : 0;
            }
        });
    };

})();//ArrayUtil

StringUtil = new (function () {
    var p = this;

    /** 숫자를 0을 포함한 문자로 변경 */
    p.zeroString = function (num, len) {
        if (!len) len = 2;
        let str = "" + num;
        let arr = str.split("");
        let ret = "";
        for (let i = 0; i < len; ++i) {
            let s = arr[len - i - 1];
            s ? ret += s : ret += "0";
        }
        return ret;
    }
    /** 앞뒤 공백 제거한다. **/
    p.trim = function (s) {
        if (!s) return s;
        var reg = /^\s+|\s+$/g;
        return s.replace(reg, "");
    };
    /** 확장자를 제거한다. **/
    p.extractExt = function (s) {
        return s.substring(0, s.lastIndexOf('.'));
    }

    /** 분 초를 반환해준다. **/
    p.getMinSec = function (ms) {
        var minutes = Math.floor((ms / 1000) / 60) + "";
        var seconds = Math.floor((ms / 1000) - minutes * 60) + "";
        if (minutes.length == 1) minutes = "0" + minutes;
        if (seconds.length == 1) seconds = "0" + seconds;
        return [minutes, seconds];
    };

    /** 시 분을 반환해준다. **/
    p.getHourMin = function (s) {
        var hours = Math.floor(s / 60 / 60) + "";
        var mins = Math.ceil((s - hours * 60 * 60) / 60) + "";
        if (mins.length == 1) mins = "0" + mins;
        if (mins == 60) mins = 59;
        return [hours, mins];
    };

    /** 첫글자가 한글인지 아닌지 체크한다. **/
    p.checkKorean = function (ch) {
        //console.log("checkKorean")
        for (var i = 0; i < ch.length; ++i) {
            var c = ch.charCodeAt(i);
            // 첫 글자가 ~ 라면 두번째 글자로 체크한다.
            //if(ch.charAt(0) == "~") { c = ch.charCodeAt(1); }
            if (0x1100 <= c && c <= 0x11FF) return true;
            if (0x3130 <= c && c <= 0x318F) return true;
            if (0xAC00 <= c && c <= 0xD7A3) return true;
        }
        return false;
    }

    p.isKor = function (str) {
        var pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글체크        
        return pattern_kor.test(str);
    }

    p.isNum = function (str) {
        var pattern_num = /[0-9]/;	// 숫자         
        return pattern_num.test(str);
    }

    p.isEng = function (str) {
        var pattern_eng = /[a-zA-Z]/;	// 문자         
        return pattern_eng.test(str);
    }


    p.isCC = function (c) {
        //if(c >= 0x4e00 && c <= 0x9fff) return true;
        //2E80 2EFF CJK Radicals Supplement 한중일 부수 보충
        //31C0 31EF CJK Strokes 한중일 한자 획
        //3200 32FF Enclosed CJK Letters and Months 한중일 괄호 문자
        //3400 4DBF CJK Unified Ideographs Extension A 한중일 통합 한자 확장-A
        //4E00 9FBF CJK Unified Ideographs 한중일 통합 한자
        //F900 FAFF CJK Compatibility Ideographs 한중일 호환용 한자
        if (c >= 0x2E80 && c <= 0x2EFF) return true;
        if (c >= 0x31C0 && c <= 0x31EF) return true;
        if (c >= 0x3200 && c <= 0x32FF) return true;
        if (c >= 0x3400 && c <= 0x4DBF) return true;
        if (c >= 0x4E00 && c <= 0x9FBF) return true;
        if (c >= 0xF900 && c <= 0xFAFF) return true;
        return false;
    }

})();