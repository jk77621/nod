/**
 * 전체 콘텐츠 공통 기능을 관리
 */
pageBase = new (function () {
    var p = this;

    var m_lib, m_mcPage;

    var m_arrUserAnswerData;

    /**
     * @method pageBase.init
     * @description 페이지 기본 객체 ( animateCC 그래픽 객체와 class를 등록 )
     * @param {animateCC library} lib animateCC 라이브러리 객체
     * @param {String} strClassPage animateCC 라이브러리 root class
     */
    p.init = function (lib, strClassPage) {
        m_lib = lib;
        m_mcPage = new lib[strClassPage]();
        uiManager.getStage("contents").addChild(m_mcPage);

        util.stopRecursion1frameClip(m_mcPage);

        var strScriptFunction = strClassPage.split("_contents").join("");

        window[strScriptFunction].init(lib);
    }

    /**
     * @method pageBase.getPageClip
     * @description 현재 로드 된 페이지 클립을 리턴
     */
    p.getPageClip = function () { return m_mcPage; }

    /**
     * @method pageBase.getPageLib
     * @description 현재 로드 된 페이지의 라이브러리 객체를 리턴
     */
    p.getPageLib = function () { return m_lib; }

    /**
     * @method pageBase.complete
     * @description 현재 학습중인 메뉴의 완료를 호출한다.
     */
    p.complete = function () {
        // external 쪽 ( native )에 완료를 알린다.
        // data 저장 유무 확인
        if (m_arrUserAnswerData) {
            saveUserAnswerDataToServer();
        }
    }

    /**
     * @method pageBase.setUserAnswertData
     * @description 사용자의 모듈 학습 풀이 정보 데이터를 입력한다.
     * @param   {Array}     학습자의 풀이 정보 데이터 [ { index:0, correct:T/F, answer:"사용자 정답 데이터"...... } ]
     */
    p.setUserAnswertData = function (arrData) {
        m_arrUserAnswerData = arrData;
    }

    // 사용자의 데이터를 서버로 전송한다.
    function saveUserAnswerDataToServer() {

    }

})();