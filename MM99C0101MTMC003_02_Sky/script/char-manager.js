/**
 * @class charManager
 * @classdesc 캐릭터 클래스
 */
charManager = new (function () {
    let p = this;

    let m_mcThis, m_mcCharSet;

    let m_arrY = [108.25, 244.7, 381.1, 517.55]; // 캐릭터가 이동할 칸 위치

    let m_nCurY = 2; // 캐릭터의 현재 칸 위치


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
     * @method charManager.upJump
     * @description 위로 점프
     * @param {Function} funcComplete 완료 콜백
     */
    p.upJump = function (funcComplete) {
        if (!(m_mcCharSet.currentFrame == 0 || m_mcCharSet.currentFrame == 5)) return;
        m_nCurY--;
        if (m_nCurY < 0) {
            m_nCurY = 0;
            onCompleteChar();
            return;
        }
        if (m_nCurY > m_arrY.length - 1) {
            m_nCurY = m_arrY.length - 1;
            onCompleteChar();
            return;
        }

        if (m_mcCharSet.currentFrame == 5) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ y: m_arrY[m_nCurY] }, 10, createjs.Ease.backIn)
                .addEventListener("complete", () => {
                    if (funcComplete) funcComplete();
                });
            return;
        }

        createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ y: m_arrY[m_nCurY] }, 10, createjs.Ease.backOut);

        m_mcCharSet.gotoAndStop(8);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.downJump
     * @description 아래로 점프
     * @param {Function} funcComplete 완료 콜백
     */
    p.downJump = function (funcComplete) {
        if (!(m_mcCharSet.currentFrame == 0 || m_mcCharSet.currentFrame == 5)) return;
        m_nCurY++;
        if (m_nCurY < 0) {
            m_nCurY = 0;
            onCompleteChar();
            return;
        }
        if (m_nCurY > m_arrY.length - 1) {
            m_nCurY = m_arrY.length - 1;
            onCompleteChar();
            return;
        }

        if (m_mcCharSet.currentFrame == 5) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ y: m_arrY[m_nCurY] }, 10, createjs.Ease.backIn)
                .addEventListener("complete", () => {
                    if (funcComplete) funcComplete();
                });
            return;
        }

        createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ y: m_arrY[m_nCurY] }, 10, createjs.Ease.backIn);

        m_mcCharSet.gotoAndStop(9);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.arriveBox
     * @description 박스 도착
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.arriveBox = function (mcBox, funcComplete) {
        createjs.Tween.removeTweens(m_mcCharSet);
        m_nCurY = m_arrY.indexOf(mcBox.y);

        mcBox.gotoAndStop(1);
        mcBox.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBox.getChildAt(0), function () { });

        m_mcCharSet.y = m_arrY[m_nCurY];
        m_mcCharSet.gotoAndStop(1);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.quesRight
     * @description 퀴즈 성공
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesRight = function (mcBox, funcComplete) {
        mcBox.gotoAndStop(2);

        createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 305 }, 20, createjs.Ease.backOut);

        m_mcCharSet.gotoAndStop(2);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);

            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 205 }, 20, createjs.Ease.backOut)
                .addEventListener("complete", onCompleteTween);
        }

        function onCompleteTween() {
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.quesWrong
     * @description 퀴즈 실패
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesWrong = function (mcBox, funcComplete) {
        mcBox.gotoAndStop(3);
        mcBox.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBox.getChildAt(0), function () { });

        m_mcCharSet.gotoAndStop(3);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.getFountain
     * @description 과자 분수 획득
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Function} funcComplete 완료 콜백
     */
    p.getFountain = function (mcBox, funcComplete) {
        createjs.Tween.removeTweens(m_mcCharSet);
        m_nCurY = m_arrY.indexOf(mcBox.y);

        m_mcCharSet.y = m_arrY[m_nCurY];
        m_mcCharSet.gotoAndStop(4);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.getFart
     * @description 대포 방귀 획득
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Boolean} bActive 방귀 활성화 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.getFart = function (mcBox, bActive, funcComplete) {
        if (bActive) {
            createjs.Tween.removeTweens(m_mcCharSet);
            m_nCurY = m_arrY.indexOf(mcBox.y);

            m_mcCharSet.y = m_arrY[m_nCurY];
            m_mcCharSet.gotoAndStop(5);
            m_mcCharSet.getChildAt(0).gotoAndPlay(1);
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 305 }, 20, createjs.Ease.backOut)
                .addEventListener("complete", onCompleteTween);
        } else {
            m_mcCharSet.gotoAndStop(0);
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 205 }, 20, createjs.Ease.backOut)
                .addEventListener("complete", onCompleteTween);
        }

        function onCompleteTween() {
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.getBig
     * @description 무지개 부스터 획득
     * @param {MovieClip} mcBox 박스 무비클립
     * @param {Boolean} bActive 부스터 활성화 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.getBig = function (mcBox, bActive, funcComplete) {
        if (bActive) {
            createjs.Tween.removeTweens(m_mcCharSet);
            m_nCurY = m_arrY.indexOf(mcBox.y);

            m_mcCharSet.y = m_arrY[m_nCurY];
            m_mcCharSet.gotoAndStop(7);
            m_mcCharSet.getChildAt(0).gotoAndPlay(1);
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 405, y: 320, scale: 4.2 }, 20, createjs.Ease.backOut)
                .addEventListener("complete", onCompleteTween);
        } else {
            m_mcCharSet.gotoAndStop(0);
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: 205, y: m_arrY[m_nCurY], scale: 1 }, 20, createjs.Ease.backOut)
                .addEventListener("complete", onCompleteTween);
        }

        function onCompleteTween() {
            if (funcComplete) funcComplete();
        }
    }
})();