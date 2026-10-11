/**
 * @class dtoManager
 * @classdesc 문항 데이터 저장 클래스
 */
dtoManager = new (function () {
    let p = this;

    let m_arrDTO = [[], [], [], [], [], [], [], [], [], []];

    let m_nCount = 0;

    /**
     * @method dtoManager.init
     * @description 초기화 설정
     */
    p.init = function () {
        m_arrDTO = [];
    }

    /**
     * @method dtoManager.start
     * @param {Number} nCount 저장할 문항 번호
     * @description 데이터 저장을 시작한다.
     */
    p.start = function (nCount) {
        m_nCount = nCount;

        if (m_arrDTO[m_nCount].length == 0) {
            let objDTO = {
                itemNo: nCount + 1,
                itemHist: "",
                itemDuration: 0,
                // itemResult: ""
            };
            m_arrDTO[m_nCount] = objDTO;
        }

        dateManager.start();
    }

    /**
     * @method dtoManager.end
     * @description 데이터 저장을 완료한다.
     */
    p.end = function () {
        dateManager.end();

        m_arrDTO[m_nCount].itemDuration += dateManager.getStudiedTime();

        // let arrHistory = m_arrDTO[m_nCount].itemHist.split(",");
        // m_arrDTO[m_nCount].itemResult = arrHistory[arrHistory.length - 1];
    }

    /**
     * @method dtoManager.setHistory
     * @description 정 오답 히스토리를 설정한다.
     * @param {String} sHistory 정 오답 히스토리
     */
    p.setHistory = function (sHistory) {
        if (m_arrDTO[m_nCount].itemHist != "") m_arrDTO[m_nCount].itemHist += ",";
        m_arrDTO[m_nCount].itemHist += sHistory;
    }

    /**
     * @method dtoManager.getTotalStepCount
     * @description 전체문항수를 가지고 온다.
     */
    p.getTotalStepCount = function () {
        return m_arrDTO[m_arrDTO.length - 1].itemNo;
    }

    /**
     * @method dtoManager.getFirstStepCount
     * @description 최초정답문항수를 가지고 온다.
     */
    p.getFirstStepCount = function () {
        let nCount = 0;
        for (let i = 0; i < m_arrDTO.length; ++i) {
            if (m_arrDTO[i].itemHist == "O") {
                nCount++;
            }
        }
        return nCount;
    }

    /**
     * @method dtoManager.getDTO
     * @description 데이터 객체 배열을 가지고 온다.
     */
    p.getDTO = function () {
        return m_arrDTO;
    }
})();