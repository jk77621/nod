/**
 * @class bgManager
 * @classdesc 배경 클래스
 */
bgManager = new (function () {
    let p = this;

    let m_mcThis, m_lib;

    let m_arrContainer = [];
    let m_arrSpeed = [2, 3, 5, 4];

    /**
     * @method bgManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;

        // 배경 컨테이너 생성
        let container;
        for (let i = 0; i < 4; ++i) {
            container = new createjs.Container();
            m_mcThis.addChildAt(container, i == 0 ? 2 : 1);
            m_arrContainer.push(container);
        }

        // 기본 배경 세팅
        addBg(0, true);
        addBg(1, true);
        addBg(2, true);
        addBg(3, true);
        addBg(0, false);
        addBg(1, false);
        addBg(2, false);
        addBg(3, false);

        m_mcThis.addEventListener("tick", onTickLoop);
    }

    /**
     * @method bgManager.move
     * @description 배경을 움직인다.
     */
    p.move = function () {
        m_mcThis.addEventListener("tick", onTick);
    }

    /**
     * @method bgManager.stop
     * @description 배경을 멈춘다.
     */
    p.stop = function () {
        m_mcThis.removeEventListener("tick", onTick);
    }

    /**
     * @method bgManager.clear
     * @description 틱 이벤트를 모두 지운다.
     */
    p.clear = function () {
        m_mcThis.removeEventListener("tick", onTickLoop);
    }

    // 배경을 추가한다.
    function addBg(nIndex, bFirst) {
        let container = m_arrContainer[nIndex];
        let mcBg = new m_lib["mcBg" + nIndex];
        mcBg.nWidth = (nIndex == 2 || nIndex == 3 ? mcBg.nominalBounds.width - 20 : mcBg.nominalBounds.width);
        mcBg.x = bFirst ? 0 : container.getChildAt(container.numChildren - 1).x + mcBg.nWidth;
        container.addChild(mcBg);
    }

    // 배경 틱 이벤트 핸들러
    function onTick(e) {
        let container, mcBg;
        for (let i = 0; i < m_arrContainer.length - 1; ++i) {
            container = m_arrContainer[i];
            for (let j = 0; j < container.numChildren; ++j) {
                mcBg = container.getChildAt(j);
                mcBg.x -= m_arrSpeed[i];

                if (mcBg.x < -mcBg.nominalBounds.width) {
                    mcBg.x = container.getChildAt(container.numChildren - 1).x + mcBg.nWidth + m_arrSpeed[i];
                    container.removeChildAt(0);
                    container.addChild(mcBg);
                }
            }
        }
    }

    // 배경 틱 루프 이벤트 핸들러
    function onTickLoop(e) {
        let container, mcBg;
        for (let i = 3; i < m_arrContainer.length; ++i) {
            container = m_arrContainer[i];
            for (let j = 0; j < container.numChildren; ++j) {
                mcBg = container.getChildAt(j);
                mcBg.x -= m_arrSpeed[i];

                if (mcBg.x < -mcBg.nominalBounds.width) {
                    mcBg.x = container.getChildAt(container.numChildren - 1).x + mcBg.nWidth + m_arrSpeed[i];
                    container.removeChildAt(0);
                    container.addChild(mcBg);
                }
            }
        }
    }
})();