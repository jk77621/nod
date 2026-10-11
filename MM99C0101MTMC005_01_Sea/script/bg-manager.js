/**
 * @class bgManager
 * @classdesc 배경 클래스
 */
bgManager = new (function () {
    let p = this;

    let m_mcThis, m_lib;

    let m_arrContainer = [];

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
        for (let i = 0; i < 2; ++i) {
            container = new createjs.Container();
            m_mcThis.addChildAt(container, 1);
            m_arrContainer.push(container);
        }

        // 기본 배경 세팅
        addBg(0, true);
        addBg(1, true);
    }

    /**
     * @method bgManager.move
     * @description 배경을 움직인다.
     * @param {Boolean} bLeft 왼쪽, 오른쪽 이동 여부
     * @param {Function} funcComplete 완료 콜백
     */
    p.move = function (bLeft, funcComplete) {
        let nGap = bLeft ? -30 : 30;
        let k = 0;
        let l = 0;
        let container, mcBg;
        for (let i = 0; i < m_arrContainer.length - 1; ++i) {
            container = m_arrContainer[i];
            for (let j = 0; j < container.numChildren; ++j) {
                mcBg = container.getChildAt(j);

                createjs.Tween.get(mcBg, { useTicks: true }).to({ x: mcBg.x + nGap }, 30, createjs.Ease.backOut)
                    .addEventListener("complete", onCompleteTween);
                l++;
            }
        }

        function onCompleteTween() {
            if (k == l - 1) {
                if (funcComplete) funcComplete();
            } else {
                k++;
            }
        }
    }

    // 배경을 추가한다.
    function addBg(nIndex, bFirst) {
        let container = m_arrContainer[nIndex];
        let mcBg = new m_lib["mcBg" + nIndex];
        mcBg.x = bFirst ? 0 : container.getChildAt(container.numChildren - 1).x + mcBg.nominalBounds.width;
        container.addChild(mcBg);
    }
})();