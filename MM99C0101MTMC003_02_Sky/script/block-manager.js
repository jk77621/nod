/**
 * @class blockManager
 * @classdesc 블록 클래스
 */
blockManager = new (function () {
    let p = this;

    let m_mcThis, m_mcCharSet, m_lib;

    let m_arrPattern = [ // 블록이 나올 패턴 (-1 : 랜덤, 4 : 박스)
        [-1, -1, -1, 4],
        [-1, -1, -1, 4],
        [-1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, -1, 4],
        [-1, -1, -1, -1, -1, -1, 4]
    ];
    let m_arrCount = [];
    let m_arrSnack = [0, 1, 2, 3]; // 랜덤에서 제외할 과자
    let m_arrColor = [0, 1, 2, 3]; // 랜덤에서 제외할 과자 컬러
    let m_arrY = [108.25, 244.7, 381.1, 517.55]; // 랜덤에서 제외할 칸 위치
    let m_arrItemTotal = [0, 1, 2];
    let m_arrItemOld = [];
    let m_arrContainer = [];
    let m_arrBg = [];

    let m_nCount = 0;
    let m_nOldSnack = -1;
    let m_nOldColor = -1;
    let m_nOldY = -1;
    let m_nBoxCount = 0;
    let m_nSpeed = 12; // 블록의 속도

    let m_bFull = false;
    let m_bBig = false;
    let m_bBox = false;
    let m_bRainbow = false;

    let m_container;

    const BLOCK_START = 1000; // 블록의 시작위치
    const BLOCK_GAP = 200; // 블록간의 간격
    const BLOCK_X = -640; // 블록이 화면에서 사라질 x좌표
    const BLOCK_NUM = 35; // 블록을 화면에 유지할 갯수
    const ITEM_TEST = false; // 아이템 테스트 여부 (상자에서 아이템만 나옴)
    const ITEM_INDEX = 0; // 0: 과자 분수, 1: 대포 방귀, 2: 무지개 부스터
    const BG_WIDTH = 2555;

    /**
     * @method blockManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_lib = lib;

        // 아이템을 넣어준다.
        for (let i = 0; i < m_arrPattern.length; ++i) {
            for (let j = 0; j < m_arrPattern[i].length; ++j) {
                m_arrCount.push(m_arrPattern[i][j]);
            }
        }
        m_arrPattern = util.shuffle(m_arrPattern);

        // 배경 컨테이너 생성
        let container;
        for (let i = 0; i < 2; ++i) {
            container = new createjs.Container();
            m_mcThis.addChildAt(container, 2);
            m_arrBg.push(container);
        }

        // 블록 컨테이너 생성
        m_container = new createjs.Container();
        m_mcThis.addChildAt(m_container, 4);

        // 기본 배경 세팅
        addBg(0, true);
        addBg(1, true);
        addBg(0, false);
        addBg(1, false);

        // 기본 블록 세팅
        addBlock(true);
        addBlock();
        addBlock();
        addBlock();
        addBlock();
        addBlock();
        addBlock();
    }

    /**
     * @method blockManager.onHitFountain
     * @method blockManager.onCompleteFountain
     * @method blockManager.onHitFart
     * @method blockManager.onCompleteFart
     * @method blockManager.onHitBig
     * @method blockManager.onCompleteBig
     * @method blockManager.onHitBox
     * @description 콜백 설정
     */
    p.onHitFountain;
    p.onCompleteFountain;
    p.onHitFart;
    p.onCompleteFart;
    p.onHitBig;
    p.onCompleteBig;
    p.onHitBox;

    /**
     * @method blockManager.move
     * @description 블록을 움직인다.
     */
    p.move = function () {
        m_mcThis.addEventListener("tick", onTickBlock);
    }

    /**
     * @method blockManager.stop
     * @description 블록을 멈춘다.
     */
    p.stop = function () {
        m_mcThis.removeEventListener("tick", onTickBlock);
    }

    /**
     * @method blockManager.addFullBox
     * @description 다음 박스가 나오는 타이밍에 모든 칸에 박스를 넣는다.
     */
    p.addFullBox = function () {
        m_bFull = true;
        let nCount = m_nCount + 1;
        if (nCount == m_arrCount.length) nCount = 0;
        for (let i = nCount; i < m_arrCount.length; ++i) {
            if (m_arrCount[i] == 4) {
                m_arrCount[i] = 5;
                break;
            }
        }
    }

    /**
     * @method blockManager.deleteFullBox
     * @description 이미 모든 칸에 추가된 박스가 있으면 지운다.
     */
    p.deleteFullBox = function () {
        m_bFull = false;
        for (let i = 0; i < m_arrCount.length; ++i) {
            if (m_arrCount[i] == 5) {
                m_arrCount[i] = 4;
            }
        }
    }

    /**
     * @method blockManager.setSpeed
     * @description 블록 진행 속도를 조절한다.
     * @param {Number} nSpeed 블록 진행 속도
     */
    p.setSpeed = function (nSpeed) {
        m_nSpeed = nSpeed;
    }

    /**
     * @method blockManager.setBig
     * @description 무지개 부스터를 설정한다.
     * @param {Boolean} bBig 무지개 부스터 여부
     */
    p.setBig = function (bBig) {
        m_bBig = bBig;
    }

    /**
     * @method blockManager.setDeleteBox
     * @description 화면에 보여지는 박스 삭제를 설정한다.
     * @param {Boolean} bBox 박스 삭제 여부
     */
    p.setDeleteBox = function (bBox) {
        m_bBox = bBox;
    }

    /**
     * @method blockManager.setRainbow
     * @description 무지개 발판 활성화를 설정한다.
     * @param {Number} bActive 무지개 발판 활성화 여부
     */
    p.setRainbow = function (bActive) {
        m_bRainbow = bActive;
    }

    // 배경을 추가한다.
    function addBg(nIndex, bFirst) {
        let container = m_arrBg[nIndex];
        let mcBg = new m_lib["mcBg" + nIndex];
        mcBg.x = bFirst ? 0 : container.getChildAt(container.numChildren - 1).x + BG_WIDTH;
        if (mcBg.mcItemRail) mcBg.mcItemRail.visible = false;
        container.addChild(mcBg);
    }

    // 블록 틱 이벤트 핸들러
    function onTickBlock(e) {
        let container, mcBg;
        for (let i = 0; i < m_arrBg.length; ++i) {
            container = m_arrBg[i];
            for (let j = 0; j < container.numChildren; ++j) {
                mcBg = container.getChildAt(j);
                mcBg.x -= m_nSpeed;

                if (mcBg.mcItemRail) mcBg.mcItemRail.visible = m_bRainbow;
                if (mcBg.x < -BG_WIDTH - 50) {
                    mcBg.x = container.getChildAt(container.numChildren - 1).x + BG_WIDTH + m_nSpeed - 10;
                    container.removeChildAt(0);
                    container.addChild(mcBg);
                    container.getChildAt(0).x -= 10;
                }
            }
        }

        let mcBlock;
        for (let i = 0; i < m_arrContainer.length; ++i) {
            mcBlock = m_arrContainer[i];
            mcBlock.x -= m_nSpeed;

            if (!m_bFull) if (mcBlock.x > -100 && mcBlock.x < 1380) if (mcBlock.type == 5)
                mcBlock.visible = false;

            if (m_bBig) if (mcBlock.x > 405 && mcBlock.x < 1380) if (mcBlock.type == 4 || mcBlock.type == 5)
                mcBlock.visible = false;

            if (m_bBox) if (mcBlock.x > 405 && mcBlock.x < 1380) if (mcBlock.type == 4 || mcBlock.type == 5)
                mcBlock.visible = false;

            let bHitBlock = m_bBig ? hitAllBlock(mcBlock) : hitBlock(mcBlock);
            if (bHitBlock) {
                mcBlock.isHit = true;
                switch (mcBlock.type) {
                    case -1:
                        if (mcBlock.currentFrame == 0)
                            audioManager.get().play("sounds_add/sfx_etc_jjojock_re.mp3", 1);
                        mcBlock.gotoAndPlay(1);
                        util.getClipFrameComplete(mcBlock, function () { });
                        break;
                    case 4:
                    case 5:
                        m_container.addChild(mcBlock);
                        if (m_nBoxCount == 0 || m_nBoxCount == 4 || m_nBoxCount == 8) {
                            addItem(mcBlock);
                        } else {
                            if (p.onHitBox) p.onHitBox(mcBlock);
                        }
                        m_nBoxCount++;
                        break;
                }
            }

            if (mcBlock.x < BLOCK_X) {
                m_container.removeChild(mcBlock);
                m_arrContainer.shift();
            }
        }

        if (m_container.numChildren <= BLOCK_NUM) {
            addBlock();
        }
    }

    // 아이템을 추가한다.
    function addItem(mcBlock) {
        let nIndex = ITEM_TEST ? ITEM_INDEX : getNotOverlapItem();
        switch (nIndex) {
            case 0:
                if (p.onHitFountain) p.onHitFountain();

                p.stop();

                mcBlock.gotoAndStop(4);
                let nFrame = mcBlock.getChildAt(0).labels[0].position;
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.addFuncAtFrame(mcBlock.getChildAt(0), function () {
                    p.move();

                    audioManager.get().play("sounds_add/sfx_JJJJocks.mp3", 1);

                    mcBlock.getChildAt(0).gotoAndPlay(nFrame);
                    util.getClipFrameComplete(mcBlock.getChildAt(0), function () { });

                    if (p.onCompleteFountain) p.onCompleteFountain(nIndex, mcBlock);
                }, nFrame);
                break;
            case 1:
                if (p.onHitFart) p.onHitFart();

                p.stop();

                mcBlock.gotoAndStop(5);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), function () { });

                util.setTimeout(() => {
                    p.move();
                }, 500);

                util.setTimeout(() => {
                    if (p.onCompleteFart) p.onCompleteFart(nIndex, mcBlock);
                }, 2500);
                break;
            case 2:
                audioManager.get().play("sounds_add/AM3_star_sfx.mp3", 1);

                if (p.onHitBig) p.onHitBig();

                mcBlock.gotoAndStop(6);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), function () { });
                util.setTimeout(() => {
                    if (p.onCompleteBig) p.onCompleteBig(nIndex, mcBlock);
                }, 1000);
                break;
        }
    }

    // 캐릭터가 블록에 닿았는지 체크한다.
    function hitBlock(mcBlock) {
        let ptLocal = mcBlock.globalToLocal(m_mcCharSet.x + 70, m_mcCharSet.y);
        let bHit = mcBlock.hitTest(ptLocal.x, ptLocal.y);
        let ptLocal2 = mcBlock.globalToLocal(m_mcCharSet.x, m_mcCharSet.y);
        let bHit2 = mcBlock.hitTest(ptLocal2.x, ptLocal2.y);
        let ptLocal3 = mcBlock.globalToLocal(m_mcCharSet.x - 10, m_mcCharSet.y);
        let bHit3 = mcBlock.hitTest(ptLocal3.x, ptLocal3.y);
        return (bHit || bHit2 || bHit3) && !mcBlock.isHit && mcBlock.visible;
    }

    // 캐릭터가 모든 블록에 닿았는지 체크한다.
    function hitAllBlock(mcBlock) {
        let bAll = false;
        let nX = 700;
        let nY;
        for (let i = 0; i < m_arrY.length; ++i) {
            nY = m_arrY[i];
            let ptLocal = mcBlock.globalToLocal(nX + 70, nY);
            let bHit = mcBlock.hitTest(nX, ptLocal.y);
            let ptLocal2 = mcBlock.globalToLocal(nX, nY);
            let bHit2 = mcBlock.hitTest(ptLocal2.x, ptLocal2.y);
            let ptLocal3 = mcBlock.globalToLocal(nX - 70, nY);
            let bHit3 = mcBlock.hitTest(ptLocal3.x, ptLocal3.y);
            if (bHit || bHit2 || bHit3) bAll = true;
        }
        return bAll && !mcBlock.isHit && mcBlock.visible;
    }

    // 블록을 추가한다.
    function addBlock(bFirst) {
        if (m_nCount == m_arrCount.length) m_nCount = 0;
        let nRandom, mcSnack, mcBox, nSet, nX, nY;
        switch (m_arrCount[m_nCount]) {
            case -1:
                nRandom = Math.floor(Math.random() * 4) + 4;
                nSet = getNotOverlapSnack();
                nX = bFirst ? BLOCK_START : getMaxX() + BLOCK_GAP;
                nY = getNotOverlapY();
                for (let i = 0; i < nRandom; ++i) {
                    mcSnack = new m_lib["mcItem" + nSet + "_" + getNotOverlapColor()];
                    mcSnack.type = m_arrCount[m_nCount];
                    mcSnack.x = nX + 60 * i;
                    mcSnack.y = nY;
                    m_container.addChild(mcSnack);
                    m_arrContainer.push(mcSnack);
                }
                break;
            case 4:
                nRandom = Math.floor(Math.random() * 4);
                mcBox = new m_lib["mcBox"];
                mcBox.type = m_arrCount[m_nCount];
                mcBox.x = bFirst ? BLOCK_START : getMaxX() + BLOCK_GAP;
                mcBox.y = m_arrY[nRandom];
                m_container.addChild(mcBox);
                m_arrContainer.push(mcBox);
                break;
            case 5:
                nX = bFirst ? BLOCK_START : getMaxX() + BLOCK_GAP;
                for (let i = 0; i < m_arrY.length; ++i) {
                    mcBox = new m_lib["mcBox"];
                    mcBox.type = m_arrCount[m_nCount];
                    mcBox.x = nX;
                    mcBox.y = m_arrY[i];
                    m_container.addChild(mcBox);
                    m_arrContainer.push(mcBox);
                }
                break;
        }
        m_nCount++;
    }

    // 현재 컨테이너에서 가지고 있는 x좌표중에 제일 큰 수를 가지고 온다.
    function getMaxX() {
        let arrX = [];
        let mcBlock;
        for (let i = 0; i < m_arrContainer.length; ++i) {
            mcBlock = m_arrContainer[i];
            arrX.push(mcBlock.x);
        }
        let nX = Math.max.apply(null, arrX);
        return nX;
    }

    // 이전 과자와 중복되지 않는 과자를 가지고 온다.
    function getNotOverlapSnack() {
        let arr1 = m_arrSnack;
        let arr2 = [m_nOldSnack];
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_nOldSnack = difference[0];
        return difference[0];
    }

    // 이전 과자 컬러와 중복되지 않는 과자 컬러를 가지고 온다.
    function getNotOverlapColor() {
        let arr1 = m_arrColor;
        let arr2 = [m_nOldColor];
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_nOldColor = difference[0];
        return difference[0];
    }

    // 이전 칸 위치와 중복되지 않는 칸 위치를 가지고 온다.
    function getNotOverlapY() {
        let arr1 = m_arrY;
        let arr2 = [m_nOldY];
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_nOldY = difference[0];
        return difference[0];
    }

    // 이전 아이템과 중복되지 않는 아이템을 가지고 온다.
    function getNotOverlapItem() {
        let arr1 = m_arrItemTotal;
        let arr2 = m_arrItemOld;
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_arrItemOld.push(difference[0]);
        return difference[0];
    }
})();