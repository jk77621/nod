/**
 * @class charManager
 * @classdesc 캐릭터 클래스
 */
charManager = new (function () {
    let p = this;

    let m_mcThis, m_mcAniSet, m_mcNaviGage, m_mcRoboGage;

    let m_nRightCount = 0;

    /**
     * @method charManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcAniSet = m_mcThis.mcAniSet;
        m_mcNaviGage = m_mcThis.mcNaviGage;
        m_mcRoboGage = m_mcThis.mcRoboGage;
    }

    /**
     * @method charManager.firstFight
     * @description 첫번째 힘겨루기 애니
     * @param {Function} funcComplete 완료 콜백
     */
    p.firstFight = function (funcComplete) {
        m_mcAniSet.gotoAndStop(0);
        m_mcAniSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcAniSet.getChildAt(0), () => {
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.fight
     * @description 힘겨루기 애니
     * @param {Function} funcComplete 완료 콜백
     */
    p.fight = function (funcComplete) {
        m_mcAniSet.gotoAndStop(1);
        m_mcAniSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcAniSet.getChildAt(0), () => {
            if (funcComplete) funcComplete();
        });
    }

    /**
     * @method charManager.quesRight
     * @description 퀴즈 성공
     * @param {Boolean} bEnding 엔딩 재생 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesRight = function (bEnding, funcComplete) {
        createjs.Tween.get(m_mcNaviGage.mcArrow, { useTicks: true }).to({ x: m_mcNaviGage.mcArrow.x + 33 }, 30, createjs.Ease.circOut);
        createjs.Tween.get(m_mcNaviGage.mcGage, { useTicks: true }).to({ x: m_mcNaviGage.mcGage.x + 33 }, 30, createjs.Ease.circOut);

        m_nRightCount++;

        m_mcRoboGage.mcRoboFace.gotoAndStop(1);

        if (m_nRightCount == 3) {
            m_nRightCount = 0;

            m_mcRoboGage.gotoAndStop(2);
            m_mcRoboGage.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcRoboGage.getChildAt(0), () => { });

            m_mcAniSet.gotoAndStop(bEnding ? 7 : 4);
            m_mcAniSet.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcAniSet.getChildAt(0), () => {
                m_mcRoboGage.mcRoboFace.gotoAndStop(0);

                m_mcRoboGage.gotoAndStop(0);
                m_mcRoboGage.getChildAt(0).gotoAndStop(0);

                if (funcComplete) funcComplete();
            });
        } else {
            bgManager.move(true);

            m_mcRoboGage.gotoAndStop(m_nRightCount - 1);
            m_mcRoboGage.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcRoboGage.getChildAt(0), () => { });

            m_mcAniSet.gotoAndStop(bEnding ? 5 : 2);
            m_mcAniSet.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcAniSet.getChildAt(0), () => {
                m_mcRoboGage.mcRoboFace.gotoAndStop(0);

                if (funcComplete) funcComplete();
            });
        }
    }

    /**
     * @method charManager.quesWrong
     * @description 퀴즈 실패
     * @param {Boolean} bEnding 엔딩 재생 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.quesWrong = function (bEnding, funcComplete) {
        createjs.Tween.get(m_mcNaviGage.mcArrow, { useTicks: true }).to({ x: m_mcNaviGage.mcArrow.x - 33 }, 30, createjs.Ease.circOut);
        createjs.Tween.get(m_mcNaviGage.mcGage, { useTicks: true }).to({ x: m_mcNaviGage.mcGage.x - 33 }, 30, createjs.Ease.circOut);

        m_mcRoboGage.mcRoboFace.gotoAndStop(2);

        bgManager.move(false);

        if (bEnding) {
            util.setTimeout(() => {
                m_mcRoboGage.mcRoboFace.gotoAndStop(0);
            }, 9000);
        }

        m_mcAniSet.gotoAndStop(bEnding ? 6 : 3);
        m_mcAniSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcAniSet.getChildAt(0), () => {
            m_mcRoboGage.mcRoboFace.gotoAndStop(0);

            if (funcComplete) funcComplete();
        });
    }
})();