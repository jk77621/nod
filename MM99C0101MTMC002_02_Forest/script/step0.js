/**
 * @class step0
 * @classdesc AM02 ( step0 ) 클래스
 */
step0 = new (function () {
    let p = this;

    let m_mcThis;

    let m_bSkip = false;

    /**
     * @method step0.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
    }

    /**
     * @method step0.onCompleteStep
     * @description 콜백 설정
     */
    p.onCompleteStep;

    /**
     * @method step0.isSkip
     * @description 애니메이션 스킵 여부
     */
    p.isSkip = function () {
        return m_bSkip;
    }

    /**
     * @method step0.start
     * @description 시작 설정
     * @param {Function} funcComplete 완료 콜백
     */
    p.start = function (funcComplete) {
        m_mcThis.gotoAndPlay(1);
        m_mcThis.mcTapArea.addEventListener("click", onCompleteIntro);
        util.getClipFrameComplete(m_mcThis, onCompleteIntro);
        function onCompleteIntro() {
            audioManager.stop();
            m_mcThis.mcTapArea.removeEventListener("click", onCompleteIntro);

            m_bSkip = m_mcThis.currentFrame != m_mcThis.totalFrames - 1;

            m_mcThis.gotoAndStop(0);

            if (p.onCompleteStep) p.onCompleteStep();
        }
    }
})();