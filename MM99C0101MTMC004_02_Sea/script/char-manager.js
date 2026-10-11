/**
 * @class charManager
 * @classdesc 캐릭터 클래스
 */
charManager = new (function () {
    let p = this;

    let m_mcThis, m_mcCharSet, m_mcBox, m_mcGage;

    /**
     * @method charManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_mcBox = m_mcThis.mcBox;
        m_mcGage = m_mcThis.mcGage;
    }

    /**
     * @method charManager.arriveBox
     * @description 박스 도착
     * @param {Function} funcContinue 진행 콜백
     * @param {Function} funcComplete 완료 콜백
     */
    p.arriveBox = function (funcContinue, funcComplete) {
        m_mcGage.gotoAndStop(m_mcGage.currentFrame);
        m_mcGage.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcGage.getChildAt(0), () => {
            if (m_mcGage.currentFrame == m_mcGage.totalFrames - 1) {
                m_mcBox.gotoAndPlay(1);
                util.getClipFrameComplete(m_mcBox, () => { });

                m_mcCharSet.gotoAndStop(1);
                m_mcCharSet.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(m_mcCharSet.getChildAt(0), () => {
                    if (funcComplete) funcComplete();
                });
            } else {
                m_mcGage.gotoAndStop(m_mcGage.currentFrame + 1);
                m_mcGage.getChildAt(0).gotoAndStop(0);
                if (funcContinue) funcContinue();
            }
        });
    }
})();