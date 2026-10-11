/**
 * @class dataManager
 * @classdesc 데이터 클래스
 */
dataManager = new (function () {
    let p = this;

    // 방해 요소 등장 횟수
    let m_nStrongShow = 4;
    let m_nGhostShow = 0;
    let m_nSunShow = 3;
    let m_nFairyShow = 0;

    // 방해 요소 제시 갯수
    let m_nGhostCount = 2;
    let m_nFairyCount = 2;

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
     * @method dataManager.getSunShow
     * @description 아이템 태양 돌멩이가 등장할 횟수를 가지고 온다.
     */
    p.getSunShow = function () {
        return m_nSunShow;
    }

    /**
     * @method dataManager.getFairyShow
     * @description 아이템 요정 돌멩이가 등장할 횟수를 가지고 온다.
     */
    p.getFairyShow = function () {
        return m_nFairyShow;
    }

    /**
     * @method dataManager.getGhostCount
     * @description 고스트 돌멩이를 제시할 갯수를 가지고 온다.
     */
    p.getGhostCount = function () {
        return m_nGhostCount;
    }

    /**
     * @method dataManager.getFairyCount
     * @description 아이템 요정 돌멩이를 제시할 갯수를 가지고 온다.
     */
    p.getFairyCount = function () {
        return m_nFairyCount;
    }
})();