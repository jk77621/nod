/**
 * @class dataManager
 * @classdesc 데이터 클래스
 */
dataManager = new (function () {
    let p = this;

    // 방해 요소 등장 횟수
    let m_nStrongShow = 3;
    let m_nGhostShow = 3;

    // 방해 요소 제시 갯수
    let m_nGhostCount = 2;

    /**
     * @method dataManager.getStrongShow
     * @description 스트롱 돌멩이가 등장할 횟수를 가지고 온다.
     */
    p.getStrongShow = function () {
        return m_nStrongShow;
    }

    /**
     * @method dataManager.getGhostShow
     * @description 고스트 돌멩이가 등장할 횟수를 가지고 온다.
     */
    p.getGhostShow = function () {
        return m_nGhostShow;
    }

    /**
     * @method dataManager.getGhostCount
     * @description 고스트 돌멩이를 제시할 갯수를 가지고 온다.
     */
    p.getGhostCount = function () {
        return m_nGhostCount;
    }
})();