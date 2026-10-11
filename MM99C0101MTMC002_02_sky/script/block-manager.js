/**
 * @class blockManager
 * @classdesc 블록 클래스
 */
blockManager = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcCharSet, m_mcPositionSet, m_mcBg;

    let m_arrPattern = [ // 블록이 나올 패턴 (-1 : 랜덤 위험요소, 4 : 박스2 + 아이템1)
        [-1, -1, 4],
        [-1, -1, 4],
        [-1, -1, 4],
        [-1, -1, -1, 4],
        [-1, -1, -1, 4],
        [-1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
        [-1, -1, -1, -1, 4],
    ];
    let m_arrCount = [];
    let m_arrContainer = [];
    let m_arrStart = [];
    let m_arrEnd = [];
    let m_arrY = [];
    let m_arrItem = [0, 2, 3, 4];

    let m_nCount = 0;
    let m_nOldItem = -1;
    let m_nMoveFrame = 100; // 블록이 이동하는 시간
    let m_nGreenCount = 0;
    let m_nRainbowCount = 0;

    let m_bItem = false;
    let m_bBlue = false;
    let m_bYellow = false;
    let m_bRed = false;
    let m_bPlay = false;
    let m_bFull = false;
    let m_bGreen = false;
    let m_bRainbow = false;
    let m_bBig = false;

    let m_container;
    let m_funcComplete;

    const ADD_FRAME = 15; // 블록이 위에서 생성되는 시간
    const ITEM_TEST = false; // 아이템 테스트 여부 (상자에서 아이템만 나옴)
    const ITEM_INDEX = 6; // 2: 파란 물약, 3: 노란 물약, 4: 빨간 물약, 5: 초록 물약, 6: 무지개 물약

    /**
     * @method blockManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_mcPositionSet = m_mcThis.mcPositionSet;
        m_mcBg = m_mcThis.mcBg;

        // 아이템을 넣어준다.
        for (let i = 0; i < m_arrPattern.length; ++i) {
            for (let j = 0; j < m_arrPattern[i].length; ++j) {
                m_arrCount.push(m_arrPattern[i][j]);
            }
        }
        m_arrPattern = util.shuffle(m_arrPattern);

        // 블록 컨테이너 생성
        m_container = new createjs.Container();
        m_mcThis.addChildAt(m_container, 2);

        // 시작, 완료 지점을 배열에 넣어준다.
        m_mcPositionSet.alpha = 0.01;

        let mcArea;
        for (let i = 0; i < m_mcPositionSet.numChildren; ++i) {
            mcArea = m_mcPositionSet.getChildAt(i);
            if (mcArea == null) break;

            let sType = mcArea.name.substr(2, mcArea.name.length - 3);
            switch (sType) {
                case "Start":
                    m_arrStart.push({ x: mcArea.x, scale: mcArea.scale });
                    break;
                case "End":
                    m_arrEnd.push({ x: mcArea.x, scale: mcArea.scale });
                    break;
            }

            m_arrY.push(mcArea.y);
        }

        m_mcBg.gotoAndStop(0);

        addBlock();
    }

    /**
     * @method blockManager.onHitEnemy
     * @method blockManager.onCompleteEnemy
     * @method blockManager.onHitItem
     * @method blockManager.onCompleteItem
     * @method blockManager.onHitBox
     * @method blockManager.onCompleteBox
     * @description 콜백 설정
     */
    p.onHitEnemy;
    p.onCompleteEnemy;
    p.onHitItem;
    p.onCompleteItem;
    p.onHitBox;
    p.onCompleteBox;

    /**
     * @method blockManager.move
     * @description 블록을 움직인다.
     */
    p.move = function () {
        m_mcBg.play();
        createjs.Ticker.paused = false;
        m_mcThis.addEventListener("tick", onTickBlock);
    }

    /**
     * @method blockManager.stop
     * @description 블록을 멈춘다.
     */
    p.stop = function () {
        m_mcBg.stop();
        createjs.Ticker.paused = true;
        m_mcThis.removeEventListener("tick", onTickBlock);
    }

    /**
     * @method blockManager.setBlue
     * @param {Boolean} bBlue 파란 물약 여부
     * @param {Function} funcComplete 완료 콜백
     * @description 파란 물약을 설정한다.
     */
    p.setBlue = function (bBlue, funcComplete) {
        m_bBlue = bBlue;
        m_funcComplete = funcComplete;
    }

    /**
     * @method blockManager.setYellow
     * @param {Boolean} bYellow 노란 물약 여부
     * @param {Function} funcComplete 완료 콜백
     * @description 노란 물약을 설정한다.
     */
    p.setYellow = function (bYellow, funcComplete) {
        m_bYellow = bYellow;
        m_funcComplete = funcComplete
    }

    /**
     * @method blockManager.setRed 
     * @param {Boolean} bRed 빨간 물약 여부
     * @description 빨간 물약을 설정한다.
     */
    p.setRed = function (bRed) {
        m_bRed = bRed;
    }

    /**
     * @method blockManager.setRainbow
     * @description 무지개 물약을 설정한다.
     */
    p.setRainbow = function () {
        // m_nAddCount = 0;
        m_bRainbow = true;
    }

    /**
     * @method blockManager.setDeleteBlock 
     * @description 현재 위치에 있는 블락을 지운다.
     */
    p.setDeleteBlock = function () {
        let mcBlock;
        for (let i = 0; i < m_arrContainer.length; ++i) {
            mcBlock = m_arrContainer[i];

            if (mcBlock.y > 400 && mcBlock.y < 768) deleteBlock(mcBlock);
        }
    }

    /**
     * @method blockManager.setSpeed 
     * @param {Boolean} bActive 블락 이동 속도 증가 여부
     * @description 잠시 블락을 빠르게 나오게 한다.
     */
    p.setSpeed = function (bActive) {
        m_nMoveFrame = bActive ? 50 : 100;
    }

    /**
     * @method blockManager.setBoost 
     * @param {Boolean} bActive 블락 이동 속도 증가 여부
     * @description 잠시 블락을 더 빠르게 나오게 한다.
     */
    p.setBoost = function (bActive) {
        m_nMoveFrame = bActive ? 25 : 100;
    }

    // 블록 틱 이벤트 핸들러
    function onTickBlock(e) {
        let mcBlock, bHitBlock, bHitPass;
        for (let i = 0; i < m_arrContainer.length; ++i) {
            mcBlock = m_arrContainer[i];

            if (m_bBlue) {
                bHitBlock = hitBlue(mcBlock);
                if (bHitBlock) {
                    if (mcBlock.y > 200 && mcBlock.y < 400) deleteBlue(mcBlock);
                    if (m_funcComplete) {
                        m_funcComplete();
                        m_funcComplete = null;
                    }
                }
            } else if (m_bYellow) {
                bHitBlock = hitYellow(mcBlock);
                if (bHitBlock) {
                    if (m_funcComplete) {
                        m_funcComplete();
                        m_funcComplete = null;
                    }
                }
            } else if (m_bRed) {
                bHitBlock = hitRed(mcBlock);
                if (bHitBlock) {
                    if (mcBlock.y > 300 && mcBlock.y < 350) deleteRed(mcBlock);
                }
            } else if (m_bRainbow) {
                bHitBlock = hitRainbow(mcBlock);
                if (bHitBlock) playPassEffect();
            } else {
                bHitBlock = hitBlock(mcBlock);
                bHitPass = hitPass(mcBlock);

                if (bHitBlock) addItem(mcBlock);
                if (bHitPass) playPassSound();
            }
        }
    }

    // 장애물 없이 지나갔을 때 사운드를 재생한다.
    function playPassSound() {
        if (m_bPlay) return;
        m_bPlay = true;
        audioManager.get().play("sounds_add/sfx_Tongs.mp3", 1);
        util.setTimeout(() => {
            m_bPlay = false;
        }, 500);
    }

    // 장애물 없이 지나갔을 때 캐릭터 이펙트를 재생한다.
    function playPassEffect() {
        if (m_bBig) return;
        m_bBig = true;
        audioManager.get().play("sounds_add/sfx_hit_explosion_fireworks1.mp3", 1);
        createjs.Tween.get(m_mcCharSet, { useTicks: true })
            .to({ scale: 1.2 }, 10, createjs.Ease.circIn)
            .addEventListener("complete", () => {
                createjs.Tween.get(m_mcCharSet, { useTicks: true })
                    .to({ scale: 1 }, 10, createjs.Ease.circOut)
                    .addEventListener("complete", () => {
                        m_bBig = false;
                    });
            });
    }

    // 아이템을 추가한다.
    function addItem(mcBlock) {
        p.stop();
        mcBlock.isHit = true;
        switch (mcBlock.type) {
            case -1: // 위험 요소
                if (p.onHitEnemy) p.onHitEnemy(mcBlock.currentFrame);

                deleteEnemy(mcBlock, () => {
                    if (p.onCompleteEnemy) p.onCompleteEnemy();
                });
                break;
            case 4: // 박스
                if (p.onHitBox) p.onHitBox();

                mcBlock.gotoAndStop(1);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => {
                    if (p.onCompleteBox) p.onCompleteBox(mcBlock);
                });
                break;
            case 5: // 아이템
                let nIndex = mcBlock.currentFrame;

                if (p.onHitItem) p.onHitItem();

                m_bItem = true;
                if (nIndex == 3) m_bFull = true;
                if (nIndex == 5) m_bGreen = true;

                deleteBlock(mcBlock, () => {
                    if (p.onCompleteItem) p.onCompleteItem(nIndex);
                });
                break;
        }
    }

    // 위험요소 블록을 지운다.
    function deleteEnemy(mcBlock, funcComplete) {
        mcBlock.getChildAt(0).gotoAndStop(1);
        mcBlock.getChildAt(0).getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(0).getChildAt(0), () => {
            if (funcComplete) funcComplete();
        });
    }

    // 파란 물약 아이템으로 블록을 지운다.
    function deleteBlue(mcBlock, funcComplete) {
        mcBlock.isHit = true;
        mcBlock.getChildAt(1).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(1), () => {
            deleteBlock(mcBlock, funcComplete);
        });
    }

    // 빨간 물약 아이템으로 블록을 지운다.
    function deleteRed(mcBlock, funcComplete) {
        if (mcBlock.isHit) return;
        if (mcBlock.type != -1) return;
        mcBlock.isHit = true;
        mcBlock.getChildAt(2).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(2), () => {
            deleteBlock(mcBlock, funcComplete);
        });
    }

    // 블록을 지운다.
    function deleteBlock(mcBlock, funcComplete) {
        mcBlock.isHit = true;
        mcBlock.addEventListener("tick", onTickAlpha);
        function onTickAlpha(e) {
            mcBlock.getChildAt(0).alpha -= 0.1;
            if (mcBlock.getChildAt(0).alpha <= 0) {
                mcBlock.removeEventListener("tick", onTickAlpha);
                mcBlock.getChildAt(0).alpha = 0;
                if (funcComplete) funcComplete();
            }
        }
    }

    // 파란 물약을 먹었을 때 블록에 닿았는지 체크한다.
    function hitBlue(mcBlock) {
        let bHit = false;

        if (mcBlock.y >= 200 && mcBlock.y <= 400) bHit = true;

        return bHit && !mcBlock.isHit && mcBlock.visible;
    }

    // 노란 물약을 먹었을 때 블록에 닿았는지 체크한다.
    function hitYellow(mcBlock) {
        let bHit = false;

        if (mcBlock.y >= 300 && mcBlock.y <= 400) bHit = true;

        return bHit && !mcBlock.isHit && mcBlock.visible;
    }

    // 빨간 물약을 먹었을 때 블록에 닿았는지 체크한다.
    function hitRed(mcBlock) {
        let bHit = false;

        if (mcBlock.y >= 300 && mcBlock.y <= 350) bHit = true;

        return bHit && !mcBlock.isHit && mcBlock.visible;
    }

    // 무지개 물약을 먹었을 때 블록에 닿았는지 체크한다.
    function hitRainbow(mcBlock) {
        let bHit = false;

        if (mcBlock.y >= 250 && mcBlock.y <= 300) bHit = true;

        return bHit && !mcBlock.isHit && !mcBlock.visible;
    }

    // 캐릭터가 블록에 닿았는지 체크한다.
    function hitBlock(mcBlock) {
        let bHit = false;
        let bHit2 = false;
        let arrLine = [427, 853];
        let nLine = -1;

        if (m_mcCharSet.x >= 0 && m_mcCharSet.x <= arrLine[0]) nLine = 0;
        if (m_mcCharSet.x > arrLine[0] && m_mcCharSet.x <= arrLine[1]) nLine = 1;
        if (m_mcCharSet.x > arrLine[1] && m_mcCharSet.x <= 1280) nLine = 2;

        if (mcBlock.y >= 550 && mcBlock.y <= 600) bHit = true;
        if (nLine == mcBlock.index) bHit2 = true;

        return bHit && bHit2 && !mcBlock.isHit && mcBlock.visible;
    }

    // 캐릭터가 다른 라인 블록에 닿았는지 체크한다.
    function hitPass(mcBlock) {
        let bHit = false;
        let bHit2 = false;
        let arrLine = [427, 853];
        let nLine = -1;

        if (m_mcCharSet.x >= 0 && m_mcCharSet.x <= arrLine[0]) nLine = 0;
        if (m_mcCharSet.x > arrLine[0] && m_mcCharSet.x <= arrLine[1]) nLine = 1;
        if (m_mcCharSet.x > arrLine[1] && m_mcCharSet.x <= 1280) nLine = 2;

        if (mcBlock.y >= 550 && mcBlock.y <= 600) bHit = true;
        if (nLine == mcBlock.index) bHit2 = true;

        return bHit && bHit2 && !mcBlock.isHit && !mcBlock.visible;
    }

    // 블록을 추가한다.
    function addBlock() {
        if (m_nCount == m_arrCount.length) m_nCount = 0;

        let nType;
        if (m_bGreen) {
            if (m_nGreenCount == 1) {
                m_bGreen = false;
                m_nGreenCount = 0;
                nType = 4;
            } else {
                m_nGreenCount++;
                nType = -1;
            }
        } else if (m_bRainbow) {
            if (m_nRainbowCount == 2) {
                m_bRainbow = false;
                m_nRainbowCount = 0;
                nType = 4;
            } else {
                m_nRainbowCount++;
                nType = -1;
            }
        } else {
            nType = m_arrCount[m_nCount];
            m_nCount++;
        }

        let nRandom, mcBlock;
        switch (nType) {
            case -1:
                nRandom = Math.floor(Math.random() * 3);
                for (let i = 0; i < 3; ++i) {
                    mcBlock = new m_lib["mcEnemy"];
                    mcBlock.visible = m_bFull ? true : (i == nRandom ? false : true);
                    mcBlock.type = -1;
                    mcBlock.index = i;
                    addTween(mcBlock);
                    m_container.addChildAt(mcBlock, 0);
                    m_arrContainer.push(mcBlock);
                }
                m_bFull = false;
                break;
            case 4:
                if (m_bItem) {
                    m_bItem = false;
                    nRandom = -1;
                } else {
                    nRandom = Math.floor(Math.random() * 3);
                }
                for (let i = 0; i < 3; ++i) {
                    mcBlock = new m_lib["mcBox"];
                    mcBlock.type = ITEM_TEST ? 5 : (i == nRandom ? 5 : 4);
                    mcBlock.index = i;
                    addTween(mcBlock);
                    m_container.addChildAt(mcBlock, 0);
                    m_arrContainer.push(mcBlock);
                }
                break;
        }
    }

    // 종 스크롤 이동을 하는 트윈을 추가한다.
    function addTween(mcTarget) {
        mcTarget.regY = 89.1;
        mcTarget.scale = 0.1;
        mcTarget.alpha = 0;
        mcTarget.x = m_arrStart[mcTarget.index].x;
        mcTarget.y = getMinY();
        createjs.Tween.get(mcTarget, { useTicks: true })
            .to({ scale: m_arrStart[mcTarget.index].scale, alpha: 1 }, ADD_FRAME, createjs.Ease.linear)
            .addEventListener("complete", () => {
                setAni(mcTarget);

                createjs.Tween.get(mcTarget, { useTicks: true })
                    .to({ x: m_arrEnd[mcTarget.index].x, y: getMaxY(), scale: m_arrEnd[mcTarget.index].scale }, m_nMoveFrame, createjs.Ease.circIn)
                    .addEventListener("complete", () => {
                        m_container.removeChild(mcTarget);
                        m_arrContainer.shift();
                    });

                if (mcTarget.index == 0) {
                    createjs.Tween.get(mcTarget, { useTicks: true }).to({ alpha: 1 }, 120).call(() => {
                        addBlock();
                    });
                }
            });
    }

    // 블록 등장 애니메이션을 설정한다.
    function setAni(mcBlock) {
        switch (mcBlock.type) {
            case -1: // 위험 요소
                let nRandom = Math.floor(Math.random() * 6);

                mcBlock.gotoAndStop(nRandom);
                mcBlock.getChildAt(0).gotoAndStop(0);
                mcBlock.getChildAt(0).getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0).getChildAt(0), () => { });
                break;
            case 4: // 박스
                mcBlock.gotoAndStop(0);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => { });
                break;
            case 5: // 아이템
                let nIndex = ITEM_TEST ? ITEM_INDEX : getNotOverlapItem() + 2;

                mcBlock.gotoAndStop(nIndex);
                mcBlock.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcBlock.getChildAt(0), () => { });
                break;
        }
    }

    // 현재 지정한 영역에서 가지고 있는 y좌표중에 제일 큰 수를 가지고 온다.
    function getMaxY() {
        let nY = Math.max.apply(null, m_arrY);
        return nY;
    }

    // 현재 지정한 영역에서 가지고 있는 y좌표중에 제일 작은 수를 가지고 온다.
    function getMinY() {
        let nY = Math.min.apply(null, m_arrY);
        return nY;
    }

    // 이전 아이템과 중복되지 않는 아이템을 가지고 온다.
    function getNotOverlapItem() {
        let arr1 = m_arrItem;
        let arr2 = [m_nOldItem];
        let difference = arr1.filter(x => !arr2.includes(x));
        difference = util.shuffle(difference);
        m_nOldItem = difference[0];
        return difference[0];
    }
})();