/**
 * @class globalEvent
 * @classdesc 전역으로 발생하는 이벤트 관리 클래스
 */
var globalEvent = new (function () {
    var p = this;
    var GLOBAL_EVENT = {};
    GLOBAL_EVENT.onBackButtonPressed = [];
    GLOBAL_EVENT.onBackground = [];
    GLOBAL_EVENT.onForeground = [];

    /**
     * @method globalEvent.removeEventListener
     * @description 커스텀 이벤트 핸들러 제거
     * @param {String} type 이벤트 타입
     * @param {Function} func 이벤트 핸들러
     */
    p.removeEventListener = function (type, func) {
        switch (type) {
            case "onBackground":
                var n = GLOBAL_EVENT.onBackground.indexOf(func);
                if (n > -1) {
                    GLOBAL_EVENT.onBackground.splice(n, 1);
                }
                break;
            case "onForeground":
                var n = GLOBAL_EVENT.onForeground.indexOf(func);
                if (n > -1) {
                    GLOBAL_EVENT.onForeground.splice(n, 1);
                }
                break;
            default: break;
        }
    }

    /**
     * @method globalEvent.addEventListener
     * @description 커스텀 이벤트 핸들러 등록
     * @param {String} type 이벤트 타입
     * @param {Function} func 이벤트 핸들러
     */
    p.addEventListener = function (type, func) {
        switch (type) {
            case "onBackground":
                GLOBAL_EVENT.onBackground.push(func);
                break;
            case "onForeground":
                GLOBAL_EVENT.onForeground.push(func);
                break;
            default: break;
        }
        //console.log(GLOBAL_EVENT);
    }

    /**
     * @method globalEvent.removeAllEventListeners
     * @description 커스텀 이벤트 핸들러 전체 제거
     */
    p.removeAllEventListeners = function () {
        for (var aa in GLOBAL_EVENT) {
            //var arrEvent = GLOBAL_EVENT[aa];
            //arrEvent = [];
            GLOBAL_EVENT[aa] = [];
        }
    }

    /**
     * @method globalEvent.dispatchEvent
     * @description 커스텀 이벤트 발생 요청
     * @param {String} type 이벤트 타입
     * @param {Object} data 이벤트 데이터
     */
    p.dispatchEvent = function (type, data) {
        var arrEvent = GLOBAL_EVENT[type];
        if (!arrEvent) return;
        for (var i = 0; i < arrEvent.length; ++i) {
            arrEvent[i](type, data);
        }
    }
})();