/**
 * @class charManager
 * @classdesc 캐릭터 클래스
 */
charManager = new (function () {
    let p = this;

    let m_mcThis, m_mcCharSet;

    /**
     * @method charManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcCharSet = m_mcThis.mcCharSet;
    }

    /**
     * @method charManager.arriveBox
     * @description 박스 도착
     * @param {Function} funcComplete 완료 콜백
     */
    p.arriveBox = function (funcComplete) {
        m_mcCharSet.gotoAndStop(1);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.arriveEnemy
     * @description 장애물 도착
     * @param {Number} nIndex 장애물 인덱스
     * @param {Function} funcComplete 완료 콜백
     */
    p.arriveEnemy = function (nIndex, funcComplete) {
        m_mcCharSet.gotoAndStop(nIndex == 4 ? 11 : 2);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.quesRight
     * @description 퀴즈 정답
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesRight = function (mcBox, funcComplete) {
        mcBox.gotoAndStop(5);

        m_mcCharSet.gotoAndStop(3);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.quesWrong
     * @description 퀴즈 오답
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesWrong = function (mcBox, funcComplete) {
        let nRandom = Math.floor(Math.random() * 3);

        mcBox.gotoAndStop(6);
        mcBox.getChildAt(0).gotoAndStop(0);
        mcBox.getChildAt(0).mcEnemySet.gotoAndStop(nRandom);
        mcBox.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBox.getChildAt(0), () => { });

        m_mcCharSet.gotoAndStop(4);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.blueMove
     * @description 파란 물약 걷기
     * @param {Function} funcComplete 완료 콜백
     */
    p.blueMove = function (funcComplete) {
        m_mcCharSet.gotoAndStop(5);
        if (funcComplete) funcComplete();
    }

    /**
     * @method charManager.blueUse
     * @description 파란 물약 사용
     * @param {Function} funcComplete 완료 콜백
     */
    p.blueUse = function (funcComplete) {
        m_mcCharSet.gotoAndStop(6);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.yellowMove
     * @description 노란 물약 걷기
     * @param {Function} funcComplete 완료 콜백
     */
    p.yellowMove = function (funcComplete) {
        m_mcCharSet.gotoAndStop(7);
        if (funcComplete) funcComplete();
    }

    /**
     * @method charManager.yellowUse
     * @description 노란 물약 사용
     * @param {Function} funcComplete 완료 콜백
     */
    p.yellowUse = function (funcComplete) {
        m_mcCharSet.gotoAndStop(8);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.redMove
     * @description 빨간 물약 걷기
     * @param {Function} funcComplete 완료 콜백
     */
    p.redMove = function (funcComplete) {
        m_mcCharSet.gotoAndStop(9);
        if (funcComplete) funcComplete();
    }

    /**
     * @method charManager.redUse
     * @description 빨간 물약 사용
     * @param {Boolean} bUse 빨간 물약 사용 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.redUse = function (bUse, funcComplete) {
        if (bUse) {
            audioManager.get().play("sounds_add/sfx_electric.mp3", 1);
            m_mcCharSet.gotoAndStop(10);
        } else {
            m_mcCharSet.gotoAndStop(0);
        }
        if (funcComplete) funcComplete();
    }
})();