/**
 * @class blockManager
 * @classdesc 블록 클래스
 */
blockManager = new (function () {
    let p = this;

    let m_mcThis, m_lib;

    let m_arrPattern = [ // 블록이 나올 패턴 (아이템은 제외, -1 : 랜덤, 8 : 박스)
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, -1, -1, 8],
        [-1, -1, -1, -1, -1, -1, -1, 8]
    ];
    let m_arrHeight = [3, 4, 5, 2, 1, 0, 2]; // 블록의 프레임별 높낮이
    let m_arrFrame = [0, 1, 2, 3, 4, 5]; // 랜덤에서 제외할 프레임
    let m_arrCount = [];

    let m_nCount = 0;
    let m_nOldFrame = 1;
    let m_nIndex = 1;
    let m_nOldHeight = 4;

    let m_container;

    const BLOCK_GAP = 250; // 블록간의 간격
    const BLOCK_NUM = 10; // 블록을 화면에 유지할 갯수

    /**
     * @method blockManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;

        // 아이템을 넣어준다.
        let nRandom;
        for (let i = 6; i < m_arrPattern.length; ++i) {
            if (i == 6 || i == 7) {
                nRandom = Math.floor(Math.random() * 6);
                m_arrPattern[i][nRandom] = 6;
            }
            if (i == 8 || i == 9) {
                nRandom = Math.floor(Math.random() * 7);
                m_arrPattern[i][nRandom] = 7;
            }
        }
        m_arrPattern = util.shuffle(m_arrPattern);

        for (let i = 0; i < m_arrPattern.length; ++i) {
            for (let j = 0; j < m_arrPattern[i].length; ++j) {
                m_arrCount.push(m_arrPattern[i][j]);
            }
        }

        // 블록 컨테이너 생성
        m_container = new createjs.Container();
        m_container.addChild(m_mcThis.mcStart);
        m_mcThis.addChildAt(m_container, 3);

        // 기본 블록 세팅
        addBlock();
        addBlock();
        addBlock();
        addBlock();
        addBlock();
        addBlock();
        addBlock();
    }

    /**
     * @method blockManager.move
     * @description 블록을 움직인다.
     * @param {Function} funcComplete 완료 콜백
     */
    p.move = function (funcComplete) {
        if (m_container.numChildren <= BLOCK_NUM) {
            let nCount = BLOCK_NUM - m_container.numChildren;
            for (let i = 0; i < nCount; ++i) {
                addBlock();
            }
        }

        let j = 0;
        let k = 0;
        let mcBlock;
        for (let i = 0; i < m_container.numChildren; ++i) {
            mcBlock = m_container.getChildAt(i);
            createjs.Tween.get(mcBlock, { useTicks: true }).to({ x: mcBlock.x - BLOCK_GAP }, 30, createjs.Ease.cubicOut)
                .addEventListener("complete", onCompleteTween);
            k++;
        }
        function onCompleteTween() {
            if (j == k - 1) {
                deleteBlock();
                if (funcComplete) funcComplete();
            } else {
                j++;
            }
        }
    }

    /**
  * @method blockManager.getCurrBlock
  * @description 인덱스를 하나 올리고 다음 진행 블록을 가지고 온다.
  */
    p.getCurrBlock = function () {
        let mcCurrBlock = m_container.getChildAt(m_nIndex - 1);
        return mcCurrBlock;
    }

    /**
     * @method blockManager.getNextBlock
     * @description 인덱스를 하나 올리고 다음 진행 블록을 가지고 온다.
     */
    p.getNextBlock = function () {
        let mcNextBlock = m_container.getChildAt(m_nIndex);
        let nFrame = mcNextBlock.currentFrame;
        let nHeight = m_arrHeight[nFrame];
        m_nOldHeight = nHeight;
        m_nIndex++;
        return mcNextBlock;
    }

    /**
     * @method blockManager.getBlockGap
     * @description 블록 간의 간격을 상수로 가지고 온다.
     */
    p.getBlockGap = function () {
        return BLOCK_GAP;
    }

    /**
     * @method blockManager.getAnswer
     * @description 블록의 정답 배열을 가지고 온다.
     */
    p.getAnswer = function () {
        let nFrame = m_container.getChildAt(m_nIndex).currentFrame;
        let nHeight = m_arrHeight[nFrame];
        let sType;
        if (m_nOldHeight < nHeight) {
            sType = "Up";
        } else if (m_nOldHeight > nHeight) {
            sType = "Down";
        } else {
            sType = "Same";
        }
        return sType;
    }

    // 블록을 제거한다.
    function deleteBlock() {
        let mcBlock;
        for (let i = 0; i < m_container.numChildren; ++i) {
            mcBlock = m_container.getChildAt(i);
            if (mcBlock.x < -BLOCK_GAP) {
                m_container.removeChild(mcBlock);
                m_nIndex--;
            }
        }
    }

    // 블록을 추가한다.
    function addBlock() {
        let bFirst = m_nCount == 0;
        if (m_nCount == m_arrCount.length) m_nCount = 0;
        let mcBlock, mcItem, mcBox;
        switch (m_arrCount[m_nCount]) {
            case -1:
                mcBlock = new m_lib["mcBlock"];
                mcBlock.gotoAndStop(getNotOverlapFrame());
                mcBlock.type = m_arrCount[m_nCount];
                mcBlock.x = bFirst ? 137.2 + BLOCK_GAP : m_container.getChildAt(m_container.numChildren - 1).x + BLOCK_GAP;
                mcBlock.y = 571.55;
                m_container.addChild(mcBlock);
                break;
            case 6:
                mcBlock = new m_lib["mcBlock"];
                mcBlock.gotoAndStop(6);
                mcBlock.type = m_arrCount[m_nCount];
                mcBlock.x = bFirst ? 137.2 + BLOCK_GAP : m_container.getChildAt(m_container.numChildren - 1).x + BLOCK_GAP;
                mcBlock.y = 571.55;
                m_container.addChild(mcBlock);
                m_nOldFrame = 3;
                break;
            case 7:
                mcBlock = new m_lib["mcBlock"];
                mcBlock.gotoAndStop(getNotOverlapFrame());
                mcBlock.type = m_arrCount[m_nCount];
                mcBlock.x = bFirst ? 137.2 + BLOCK_GAP : m_container.getChildAt(m_container.numChildren - 1).x + BLOCK_GAP;
                mcBlock.y = 571.55;
                mcItem = new m_lib["mcItem"];
                mcBlock.getChildAt(0).mcChaArea.addChild(mcItem);
                m_container.addChild(mcBlock);
                break;
            case 8:
                mcBlock = new m_lib["mcBlock"];
                mcBlock.gotoAndStop(getNotOverlapFrame());
                mcBlock.type = m_arrCount[m_nCount];
                mcBlock.x = bFirst ? 137.2 + BLOCK_GAP : m_container.getChildAt(m_container.numChildren - 1).x + BLOCK_GAP;
                mcBlock.y = 571.55;
                mcBox = new m_lib["mcBox"];
                mcBlock.getChildAt(0).mcChaArea.addChild(mcBox);
                m_container.addChild(mcBlock);
                break;
        }
        m_nCount++;
    }

    // 이전 프레임과 중복되지 않는 프레임을 가지고 온다.
    function getNotOverlapFrame() {
        let arr1 = m_arrFrame;
        let arr2 = [m_nOldFrame, m_arrCount[m_nCount + 1] == 6 ? 3 : -1];
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_nOldFrame = difference[0];
        return difference[0];
    }
})();