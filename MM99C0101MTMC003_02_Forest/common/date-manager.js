/**
 * @class dateManager
 * @classdesc 날짜 및 시간 관리 클래스
 */
var dateManager = new (function () {
    var p = this;

    var m_dateStart;
    var m_dateEnd;

    /**
     * @method dateManager.start
     * @description 타이머 시작을 알린다.
     */
    p.start = function () {
        m_dateStart = new Date();
    };

    /**
     * @method dateManager.end
     * @description 타이머 완료를 알린다.
     */
    p.end = function () {
        m_dateEnd = new Date();
        m_bComplete = true;
    };

    /**
     * @method dateManager.getStudiedTime
     * @description 총 학습시간을 가지고 온다. ( 단위: 세컨드 )
     */
    p.getStudiedTime = function () {
        if (!m_dateEnd) {
            console.log("dateManager.end가 실행되지 않았습니다.");
            return 0;
        }

        var nStartTime = Math.round(m_dateStart.getTime() / 1000);
        var nEndTime = Math.round(m_dateEnd.getTime() / 1000);

        console.log(nEndTime, nStartTime);

        return nEndTime - nStartTime;
    };

    /**
     * @method dateManager.getStartedTime
     * @description 시작 시간을 가지고 온다.
     */
    p.getStartedTime = function () {
        return getFullTime(m_dateStart);
    };

    /**
     * @method dateManager.getEndedTime
     * @description 완료 시간을 가지고 온다.
     */
    p.getEndedTime = function () {
        return getFullTime(m_dateEnd);
    };

    /**
     * @method dateManager.getNowTime
     * @description 현재 시간을 가지고 온다.
     */
    p.getNowTime = function () {
        var date = new Date();
        return getFullTime(date);
    };

    /**
     * @method dateManager.getToday
     * @description 현재 날짜을 가지고 온다.
     */
    p.getToday = function () {
        var strYear = m_dateStart.getFullYear().toString();
        var strMonth = addZero(m_dateStart.getMonth() + 1);
        var strDate = addZero(m_dateStart.getDate());
        return strYear + '-' + strMonth + '-' + strDate;
    };

    // 지정된 Date 객체의 시간 정보를 YYYYMMDDHHMMSS 으로 리턴한다.
    function getFullTime(date) {
        var strYear = date.getFullYear().toString();
        var strMonth = addZero(date.getMonth() + 1);
        var strDate = addZero(date.getDate());
        var strHours = addZero(date.getHours());
        var strMins = addZero(date.getMinutes());
        var strSecs = addZero(date.getSeconds());
        var strFullTime = strYear + strMonth + strDate + strHours + strMins + strSecs;

        return strFullTime;
    }

    // 0,1,2... > 01, 02... 의 문자열로 변경하여 리턴 ( n : 변경할 숫자 )
    function addZero(n) {
        if (n >= 10) return n.toString();
        return "0" + n.toString();
    }
})();