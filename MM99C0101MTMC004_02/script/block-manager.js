/**
 * @class blockManager
 * @classdesc 블록 클래스
 */
blockManager = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcBox, m_mcGage, m_mcGridSet;

    let m_arrPattern = [ // 블록이 나올 패턴 (-1 : 빈 공간, 0 : 기본,  1 : 스트롱, 2 : 고스트, 3 : 왕판다)
        { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null },
        { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null },
        { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null },
        { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null }, { x: 0, y: 0, target: null },
        { x: 0, y: 0, target: null }
    ];
    let m_arrItem = [{ stepCount: 0, addCount: 0, type: 1 }, { stepCount: 0, addCount: 1, type: 2 }]; // 아이템을 넣을 순서 배열
    let m_arrStepTotal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let m_arrStepOld = [];

    let m_nAddCount = 0;
    let m_nTimeCount = 0;
    let m_nStrongCount = 0;
    let m_nOldIndex = -1;
    let m_nRightCount = 0;
    let m_nItemType = -1;

    let m_bRight = false;

    let m_container;

    const BLOCK_TIME = 1000; // 블록이 나올 시간 간격
    const ITEM_TEST = false; // 아이템 테스트 여부 (블록에서 아이템만 나옴)
    const ITEM_INDEX = 2; // 1 : 스트롱, 2 : 고스트

    /**
     * @method blockManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;
        m_mcBox = m_mcThis.mcBox;
        m_mcGage = m_mcThis.mcGage;
        m_mcGridSet = m_mcThis.mcGridSet;

        // 블록 컨테이너 생성
        m_container = new createjs.Container();
        m_mcThis.addChildAt(m_container, 2);

        // 그리드 셋 x, y좌표를 배열에 넣는다.
        let mcGrid, ptLocal, ptGlobal;
        for (let i = 0; i < m_mcGridSet.numChildren; ++i) {
            mcGrid = m_mcGridSet["mcGrid" + i];
            if (mcGrid == null) break;

            ptLocal = new createjs.Point(mcGrid.x, mcGrid.y);
            ptGlobal = m_mcGridSet.localToGlobal(ptLocal.x, ptLocal.y);

            m_arrPattern[i].x = ptGlobal.x;
            m_arrPattern[i].y = ptGlobal.y;
        }

        // 아이템을 랜덤한 위치에 넣는다.
        m_arrItem = [];
        for (let i = 0; i < dataManager.getStrongShow(); ++i) {
            m_arrItem.push({
                stepCount: getNotOverlapStep(),
                addCount: Math.floor(Math.random() * (m_mcGage.totalFrames - 3)),
                type: 1
            });
        }


        for (let i = 0; i < dataManager.getGhostShow(); ++i) {
            m_arrItem.push({
                stepCount: getNotOverlapStep(),
                addCount: Math.floor(Math.random() * (m_mcGage.totalFrames - 3)),
                type: 2
            });
        }

        console.log(m_arrItem);
    }

    /**
     * @method blockManager.onHitRight
     * @method blockManager.onHitWrong
     * @method blockManager.onCompleteRight
     * @method blockManager.onCompleteWrong
     * @description 콜백 설정
     */
    p.onHitRight;
    p.onHitWrong;
    p.onCompleteRight;
    p.onCompleteWrong;

    /**
     * @method blockManager.setEnabled
     * @description 마우스 활성화를 설정한다.
     * @param {Boolean} bEnabled 활성화 유무
     */
    p.setEnabled = function (bEnabled) {
        m_container.mouseEnabled = bEnabled;
    }

    /**
     * @method blockManager.move
     * @description 블록을 움직인다.
     */
    p.move = function () {
        createjs.Ticker.paused = false;
        m_mcThis.interval = util.setInterval(onIntervalBlock, BLOCK_TIME);
    }

    /**
     * @method blockManager.stop
     * @description 블록을 멈춘다.
     */
    p.stop = function () {
        createjs.Ticker.paused = true;
        util.clearInterval(m_mcThis.interval);
    }

    /**
     * @method blockManager.reset
     * @description 블록을 리셋한다.
     */
    p.reset = function () {
        m_nAddCount = 0;
        m_nTimeCount = 0;
        m_nStrongCount = 0;
        m_nOldIndex = -1;
        m_nItemType = -1;

        let mcBlock;
        for (let i = 0; i < m_arrPattern.length; ++i) {
            mcBlock = m_arrPattern[i].target;
            if (mcBlock) {
                if (mcBlock.type == 3) continue;
                m_container.removeChild(m_arrPattern[i].target);
                m_arrPattern[i].target = null;
            }
        }

        m_mcBox.gotoAndStop(0);

        m_mcGage.gotoAndStop(m_nRightCount);
        m_mcGage.getChildAt(0).gotoAndStop(0);
    }

    /**
     * @method blockManager.addKingBlock
     * @description 킹판다를 추가한다.
     */
    p.addKingBlock = function () {
        m_nRightCount++;

        addBlock(true);

        m_mcGage.gotoAndStop(m_nRightCount - 1);
        m_mcGage.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcGage.getChildAt(0), () => {
            m_mcGage.gotoAndStop(m_mcGage.currentFrame + 1);
            m_mcGage.getChildAt(0).gotoAndStop(0);
        });
    }

    // 이전 스텝과 중복되지 않는 스텝을 가지고 온다.
    function getNotOverlapStep() {
        let arr1 = m_arrStepTotal;
        let arr2 = m_arrStepOld;
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_arrStepOld.push(difference[0]);
        return difference[0];
    }

    // 블록을 추가할 인터벌 함수
    function onIntervalBlock() {
        if (m_bRight) {
            m_nTimeCount = 0;
            m_bRight = false;
            deleteBlock();
            addBlock();
            return;
        }

        if (m_nTimeCount == (m_nAddCount == 0 ? 0 : 3)) {
            m_nTimeCount = 0;
            deleteBlock();
            addBlock();
        } else {
            m_nTimeCount++;
        }
    }

    // 블록을 지운다.
    function deleteBlock() {
        let mcBlock;
        for (let i = 0; i < m_arrPattern.length; ++i) {
            mcBlock = m_arrPattern[i].target;
            if (mcBlock) {
                if (mcBlock.isHit) continue;
                m_container.removeChild(m_arrPattern[i].target);
                m_arrPattern[i].target = null;
            }
        }
    }

    // 블록을 추가한다.
    function addBlock(bAddKing) {
        let nType = bAddKing ? 3 : (ITEM_TEST ? ITEM_INDEX : getType());
        let mcBlock, objXY;
        switch (nType) {
            case 0: // 기본 돌멩이
                mcBlock = new m_lib["mcTile"];

                objXY = getXY(mcBlock);
                mcBlock.isPlaying = false;
                mcBlock.isHit = false;
                mcBlock.type = nType;
                mcBlock.x = objXY.x;
                mcBlock.y = objXY.y;
                m_container.addChild(mcBlock);

                setEvent(mcBlock);
                setIntro(mcBlock);
                break;
            case 1: // 스트롱 돌멩이
                mcBlock = new m_lib["mcTile"];

                objXY = getXY(mcBlock);
                mcBlock.isPlaying = false;
                mcBlock.isHit = false;
                mcBlock.type = nType;
                mcBlock.x = objXY.x;
                mcBlock.y = objXY.y;
                m_container.addChild(mcBlock);

                setEvent(mcBlock);
                setIntro(mcBlock);
                break;
            case 2: // 고스트 돌멩이
                let nRandom = Math.floor(Math.random() * 2);
                for (let i = 0; i < dataManager.getGhostCount(); ++i) {
                    mcBlock = new m_lib["mcTile"];

                    objXY = getXY(mcBlock);
                    mcBlock.isPlaying = false;
                    mcBlock.isHit = false;
                    mcBlock.isReal = nRandom == i;
                    mcBlock.type = nType;
                    mcBlock.x = objXY.x;
                    mcBlock.y = objXY.y;
                    m_container.addChild(mcBlock);

                    setEvent(mcBlock);
                    setIntro(mcBlock);
                }
                break;
            case 3: // 왕판다
                mcBlock = new m_lib["mcTile"];

                objXY = getXY(mcBlock);
                mcBlock.isPlaying = false;
                mcBlock.isHit = true;
                mcBlock.type = nType;
                mcBlock.x = objXY.x;
                mcBlock.y = objXY.y;
                m_container.addChild(mcBlock);

                setIntro(mcBlock);
                break;
        }
        m_nAddCount++;
    }

    // 배열에서 일치하는 순서에 아이템을 넣을 타입을 가지고 온다.
    function getType() {
        if (m_nItemType != -1) return m_nItemType;

        let nType = 0;
        for (let i = 0; i < m_arrItem.length; ++i) {
            if (m_arrItem[i].stepCount == step1.getCurCount() && m_arrItem[i].addCount == m_nAddCount) {
                nType = m_arrItem[i].type;
                m_nItemType = nType;
            }
        }

        return nType;
    }

    // 현재 지정한 영역에서 가지고 있는 x, y좌표중에 랜덤한 좌표를 가지고 온다.
    function getXY(mcBlock) {
        let arrIndex = [];
        for (let i = 0; i < m_arrPattern.length; ++i) {
            if (m_arrPattern[i].target == null && m_nOldIndex != i) arrIndex.push(i);
        }
        let nRandom = Math.floor(Math.random() * arrIndex.length);
        let nIndex = arrIndex[nRandom];

        m_nOldIndex = nIndex;
        m_arrPattern[nIndex].target = mcBlock;

        return m_arrPattern[nIndex];
    }

    // 블록 이벤트를 설정한다.
    function setEvent(mcBlock) {
        mcBlock.mouseChildren = false;
        mcBlock.addEventListener("click", onClickBlock);
    }

    // 블록 클릭 이벤트 핸들러
    function onClickBlock(e) {
        let mcBlock = e.currentTarget;

        if (mcBlock.isPlaying) return;
        if (mcBlock.isHit) return;

        switch (mcBlock.type) {
            case 0: // 기본 돌멩이
                if (p.onHitRight) p.onHitRight();

                if (m_nStrongCount == 2) {
                    m_nStrongCount = 0;
                    m_nItemType = -1;
                }

                m_bRight = true;

                mcBlock.isPlaying = true;
                mcBlock.isHit = true;
                mcBlock.gotoAndStop(1);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => { });

                if (p.onCompleteRight) p.onCompleteRight();
                break;
            case 1: // 스트롱 돌멩이
                if (p.onHitWrong) p.onHitWrong();

                if (m_nStrongCount == 0) { // 첫번째 텝
                    mcBlock.isPlaying = true;
                    mcBlock.gotoAndStop(3);
                    mcBlock.getChildAt(0).gotoAndPlay(1);
                    util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                        mcBlock.isPlaying = false;
                        mcBlock.gotoAndStop(2);
                        mcBlock.getChildAt(0).gotoAndStop(0);

                        if (p.onCompleteWrong) p.onCompleteWrong();
                    });
                } else if (m_nStrongCount == 1) { // 두번째 텝
                    mcBlock.isPlaying = true;
                    mcBlock.gotoAndStop(2);
                    mcBlock.getChildAt(0).gotoAndPlay(1);
                    util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                        mcBlock.isPlaying = false;
                        mcBlock.type = 0;
                        mcBlock.gotoAndStop(1);
                        mcBlock.getChildAt(0).gotoAndStop(0);

                        if (p.onCompleteWrong) p.onCompleteWrong();
                    });
                }
                m_nStrongCount++;
                break;
            case 2: // 고스트 돌멩이
                if (mcBlock.isReal) {
                    let mcTemp;
                    for (let i = 0; i < m_arrPattern.length; ++i) {
                        mcTemp = m_arrPattern[i].target;
                        if (mcTemp) {
                            if (mcTemp.isHit) continue;
                            if (mcTemp.isReal) {
                                if (p.onHitRight) p.onHitRight();

                                m_nItemType = -1;
                                m_bRight = true;

                                mcTemp.isPlaying = true;
                                mcTemp.isHit = true;
                                mcTemp.gotoAndStop(6);
                                mcTemp.getChildAt(0).gotoAndPlay(1);
                                util.getClipFrameComplete(mcTemp.getChildAt(0), () => { });

                                if (p.onCompleteRight) p.onCompleteRight();
                            } else {
                                mcTemp.isPlaying = true;
                                mcTemp.gotoAndStop(5);
                                mcTemp.getChildAt(0).gotoAndPlay(1);
                                util.getClipFrameComplete(mcTemp.getChildAt(0), () => { });
                            }
                        }
                    }
                } else {
                    audioManager.get().play("sounds_add/sfx_Ghost_efx.mp3", 1);

                    if (p.onHitWrong) p.onHitWrong();

                    let mcTemp;
                    for (let i = 0; i < m_arrPattern.length; ++i) {
                        mcTemp = m_arrPattern[i].target;
                        if (mcTemp) {
                            if (mcTemp.isHit) continue;
                            mcTemp.isPlaying = true;
                            mcTemp.gotoAndStop(5);
                            mcTemp.getChildAt(0).gotoAndPlay(1);
                            util.getClipFrameComplete(mcTemp.getChildAt(0), () => { });
                        }
                    }

                    util.setTimeout(() => {
                        if (p.onCompleteWrong) p.onCompleteWrong();
                    }, 1000);
                }
                break;
        }
    }

    // 블록 인트로를 설정한다.
    function setIntro(mcBlock) {
        switch (mcBlock.type) {
            case 0:
                mcBlock.gotoAndStop(0);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                    mcBlock.gotoAndStop(1);
                    mcBlock.getChildAt(0).gotoAndStop(0);
                });
                break;
            case 1:
                mcBlock.gotoAndStop(0);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                    if (m_nStrongCount == 0) {
                        mcBlock.gotoAndStop(3);
                        mcBlock.getChildAt(0).gotoAndStop(0);
                    } else if (m_nStrongCount == 1) {
                        mcBlock.gotoAndStop(2);
                        mcBlock.getChildAt(0).gotoAndStop(0);
                    } else {
                        mcBlock.type = 0;
                        mcBlock.gotoAndStop(1);
                        mcBlock.getChildAt(0).gotoAndStop(0);
                    }
                });
                break;
            case 2:
                mcBlock.gotoAndStop(4);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                    mcBlock.gotoAndStop(!mcBlock.isReal ? 5 : 6);
                    mcBlock.getChildAt(0).gotoAndStop(0);
                });
                break;
            case 3:
                mcBlock.scale = 0.4;
                mcBlock.gotoAndStop(7);
                mcBlock.addEventListener("tick", onTickBlock);
                function onTickBlock(e) {
                    mcBlock.scale += 0.04;
                    if (mcBlock.scale > 1) {
                        mcBlock.scale = 1;
                        mcBlock.removeEventListener("tick", onTickBlock);
                    }
                }
                break;
        }
    }
})();