/**
 * @class step1
 * @classdesc AM02 ( step1 ) 클래스
 */
step1 = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcChangeSet, m_mcTapArea, m_mcItemPop, m_mcIndicator, m_mcGuide, m_mcBtnTuto, m_mcCharSet, m_mcDimd, m_mcBg;

    let m_arrData = [
        { count: 0, answer: -1 }, { count: 1, answer: -1 }, { count: 2, answer: -1 }, { count: 3, answer: -1 }, { count: 4, answer: -1 },
        { count: 5, answer: -1 }, { count: 6, answer: -1 }, { count: 7, answer: -1 }, { count: 8, answer: -1 }, { count: 9, answer: -1 }
    ];

    let m_nCurCount = 0;
    let m_nTotCount = 10;

    let m_bResult = false;

    let m_guideTime;
    let m_guideInterval;

    /**
     * @method step1.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;
        m_mcChangeSet = m_mcThis.mcChangeSet;
        m_mcTapArea = m_mcThis.mcTapArea;
        m_mcItemPop = m_mcThis.mcItemPop;
        m_mcIndicator = m_mcThis.mcIndicator;
        m_mcGuide = m_mcThis.mcGuide;
        m_mcBtnTuto = m_mcThis.mcBtnTuto;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_mcDimd = m_mcThis.mcDimd;
        m_mcBg = m_mcThis.mcBg;

        // addChildAt 오류 방지
        let stage = uiManager.getStage("contents");
        stage.update();

        m_mcThis.autoReset = false;

        m_mcGuide.visible = false;

        m_mcBtnTuto.mouseChildren = false;
        m_mcBtnTuto.mouseEnabled = false;
        m_mcBtnTuto.addEventListener("click", onClickTuto);

        m_mcCharSet.mouseChildren = false;
        m_mcCharSet.mouseEnabled = false;
        m_mcCharSet.minX = 250;
        m_mcCharSet.maxX = 1150;
        m_mcCharSet.addEventListener("mousedown", onMouseEvent);

        m_mcDimd.visible = false;

        blockManager.init(m_mcThis, lib);
        blockManager.onHitEnemy = onHitEnemy;
        blockManager.onCompleteEnemy = onCompleteEnemy;
        blockManager.onHitItem = onHitItem;
        blockManager.onCompleteItem = onCompleteItem;
        blockManager.onHitBox = onHitBox;
        blockManager.onCompleteBox = onCompleteBox;
        charManager.init(m_mcThis);
        quesManager.init(m_mcThis);
        resultManager.init(m_mcThis);
        tutorialManager.init(m_mcThis, "videos_add/tutorial.mp4");
    }

    /**
     * @method step1.onCompleteStep
     * @description 콜백 설정
     */
    p.onCompleteStep;

    /**
     * @method step1.setEnabled
     * @description 마우스 활성화를 설정한다.
     * @param {Boolean} bEnabled 활성화 유무
     */
    p.setEnabled = function (bEnabled) {
        m_mcBtnTuto.mouseEnabled = bEnabled;
        m_mcCharSet.mouseEnabled = bEnabled;
        if (!bEnabled) {
            m_mcCharSet.removeEventListener("pressmove", onMouseEvent);
            m_mcCharSet.removeEventListener("pressup", onMouseEvent);
        }
    }

    /**
     * @method step1.getCurCount
     * @description  현재 스텝 인덱스를 가지고 온다.
     */
    p.getCurCount = function () {
        return m_nCurCount;
    }

    /**
     * @method step1.setCurCount
     * @description 현재 스텝 인덱스를 설정한다.
     * @param {Number} nCount 지정할 스텝 인덱스
     */
    p.setCurCount = function (nCount) {
        m_nCurCount = nCount;
        setIndicator();
    }

    /**
     * @method step1.getData
     * @description 전체 정오답 데이터를 가지고 온다.
     */
    p.getData = function () {
        return m_arrData;
    }

    /**
     * @method step1.setData
     * @description 정오답 데이터를 지정해서 변경한다.
     * @param {Number} nCount 지정할 스텝 인덱스
     * @param {Boolean} nAnswer 현재 스텝 정오답 데이터
     */
    p.setData = function (nCount, nAnswer) {
        m_arrData[nCount].answer = nAnswer;
    }

    /**
     * @method step1.start
     * @description 시작 설정
     * @param {Function} funcComplete 완료 콜백
     */
    p.start = function (funcComplete) {
        m_mcCharSet.gotoAndStop(0);
        m_mcCharSet.getChildAt(0).gotoAndStop(0);

        if (step0.isSkip()) {
            onCompleteIntro();
        } else {
            m_mcChangeSet.gotoAndStop(4);
            m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteIntro);
        }

        function onCompleteIntro() {
            tutorialManager.play();
            tutorialManager.onEndVideo = onCompleteTutorial;
        }

        function onCompleteTutorial() {
            setIndicator();

            if (m_bResult) {
                m_arrData = [
                    { count: 0, answer: 0 }, { count: 1, answer: 0 }, { count: 2, answer: 1 }, { count: 3, answer: 1 }, { count: 4, answer: 1 },
                    { count: 5, answer: 0 }, { count: 6, answer: 0 }, { count: 7, answer: 0 }, { count: 8, answer: 1 }, { count: 9, answer: 1 }
                ];
                resultManager.show();
                return;
            } else {
                p.setEnabled(true);
                // startGuideByTimer(7000);

                blockManager.move();
                m_mcCharSet.getChildAt(0).gotoAndPlay(1);
            }
        }
    }

    // 위험요소 시작 콜백
    function onHitEnemy(nIndex) {
        // stopGuideByTimer();
        p.setEnabled(false);
        charManager.arriveEnemy(nIndex, () => {
            blockManager.move();
            p.setEnabled(true);
            // startGuideByTimer(7000);
        });
    }

    // 위험요소 완료 콜백
    function onCompleteEnemy() {
    }

    // 아이템 시작 콜백
    function onHitItem(nIndex) {
        // stopGuideByTimer();
        p.setEnabled(false);
    }

    // 아이템 완료 콜백
    function onCompleteItem(nIndex) {
        m_mcItemPop.gotoAndStop(nIndex - 2);
        m_mcItemPop.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcItemPop.getChildAt(0), () => {
            switch (nIndex) {
                case 2: // 파란 물약 (물리치는 물)
                    blockManager.move();
                    m_mcDimd.visible = true;
                    m_mcBg.stop();
                    blockManager.setSpeed(true);
                    charManager.blueMove();
                    blockManager.setBlue(true, () => {
                        blockManager.setSpeed(false);
                        blockManager.stop();
                        charManager.blueUse(() => {
                            blockManager.move();
                            blockManager.setBlue(false);
                            m_mcDimd.visible = false;

                            onCompleteUse();
                        });
                    });
                    break;
                case 3: // 노란 물약 (점프하는 물)
                    blockManager.move();
                    m_mcDimd.visible = true;
                    m_mcBg.stop();
                    blockManager.setSpeed(true);
                    charManager.yellowMove();
                    blockManager.setYellow(true, () => {
                        blockManager.setSpeed(false);
                        charManager.yellowUse(() => {
                            blockManager.setYellow(false);
                            m_mcDimd.visible = false;
                            m_mcBg.play();

                            onCompleteUse();
                        });
                    });
                    break;
                case 4: // 빨간 물약 (힘이 쎄지는 물)
                    blockManager.move();
                    m_mcDimd.visible = true;
                    m_mcBg.stop();
                    blockManager.setSpeed(true);
                    blockManager.setRed(true);
                    charManager.redMove();
                    util.setTimeout(() => {
                        charManager.redUse(true);
                        util.setTimeout(() => {
                            charManager.redUse(false);
                            blockManager.setRed(false);
                            blockManager.setSpeed(false);
                            m_mcDimd.visible = false;
                            m_mcBg.play();

                            onCompleteUse();
                        }, 3000);
                    }, 1000);
                    break;
                case 5: // 초록 물약 (행운의 물)
                    blockManager.move();
                    m_mcDimd.visible = true;
                    m_mcBg.stop();
                    charManager.greenMove();
                    util.setTimeout(() => {
                        blockManager.stop();
                        charManager.greenUse(() => {
                            blockManager.move();
                            m_mcDimd.visible = false;
                            m_mcBg.play();

                            onCompleteUse();
                        });
                    }, 1000);
                    break;
            }
        });

        function onCompleteUse() {
            p.setEnabled(true);
            // startGuideByTimer(7000);
        }
    }

    // 박스 도착 시작 콜백
    function onHitBox() {
        // stopGuideByTimer();
        p.setEnabled(false);
    }

    // 박스 도착 완료 콜백
    function onCompleteBox(mcBlock) {
        charManager.arriveBox(() => {
            // stopGuideByTimer();

            quesManager.show();
            quesManager.onCompleteQues = onCompleteQues;
            function onCompleteQues(bAnswer) {
                p.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                p.setCurCount(step1.getCurCount() + 1);
                // blockManager.setDeleteBlock();
                if (bAnswer) {
                    charManager.quesRight(mcBlock, () => {
                        blockManager.move();
                        onCompleteFeed();
                    });
                } else {
                    charManager.quesWrong(mcBlock, () => {
                        blockManager.move();
                        onCompleteFeed();
                    });
                }
            }
        });

        function onCompleteFeed() {
            if (isCompleteUnit()) {
                util.setTimeout(() => {
                    blockManager.stop();
                    resultManager.show();
                    resultManager.onCompleteEnding = onCompleteEnding;
                }, 1000);
                function onCompleteEnding() {
                    if (p.onCompleteStep) p.onCompleteStep();
                }
            } else {
                p.setEnabled(true);
                // startGuideByTimer(7000);
            }
        }
    }

    // 튜토리얼 버튼 클릭 이벤트 핸들러
    function onClickTuto(e) {
        let mcBtnTuto = e.currentTarget;
        // stopGuideByTimer();
        p.setEnabled(false);
        tutorialManager.play();
        tutorialManager.onEndVideo = onCompleteTutorial;
        function onCompleteTutorial() {
            p.setEnabled(true);
            // startGuideByTimer(7000);
        }
    }

    // 캐릭터 마우스 이벤트 핸들러
    function onMouseEvent(e) {
        let mcCharSet = e.currentTarget;

        switch (e.type) {
            case "mousedown":
                // stopGuideByTimer();
                p.setEnabled(false);

                m_mcCharSet.addEventListener("pressmove", onMouseEvent);
                m_mcCharSet.addEventListener("pressup", onMouseEvent);
                break;
            case "pressmove":
                // stopGuideByTimer();

                let nDeltaX = e.stageX;
                if (nDeltaX > mcCharSet.maxX) nDeltaX = mcCharSet.maxX;
                if (nDeltaX < mcCharSet.minX) nDeltaX = mcCharSet.minX;
                mcCharSet.x = nDeltaX;
                break;
            case "pressup":
                m_mcCharSet.removeEventListener("pressmove", onMouseEvent);
                m_mcCharSet.removeEventListener("pressup", onMouseEvent);

                p.setEnabled(true);
                // startGuideByTimer(7000);
                break;
        }
    }

    // 상단 인디케이터를 설정한다.
    function setIndicator() {
        let mcIndi, nAnswer;
        for (let i = 0; i < m_mcIndicator.numChildren; ++i) {
            mcIndi = m_mcIndicator["mc" + i];
            if (mcIndi == null) break;

            nAnswer = m_arrData[i].answer;

            if (i == m_nCurCount) {
                mcIndi.gotoAndStop(1);
            } else {
                if (nAnswer == -1) {
                    mcIndi.gotoAndStop(0);
                } else if (nAnswer == 1) {
                    mcIndi.gotoAndStop(3);
                } else {
                    mcIndi.gotoAndStop(2);
                }
            }
        }
    }

    // 유닛이 완료되었는지 체크한다.
    function isCompleteUnit() {
        return m_nCurCount == m_nTotCount;
    }

    // 일정 시간동안 특별한 호출이 없을 경우 지정된 가이드를 실행한다.
    function startGuideByTimer(nTime) {
        stopGuideByTimer();

        m_guideTime = nTime;
        m_guideInterval = setTimeout(onTimeout, nTime);
        function onTimeout() {
            m_mcTapArea.addEventListener("mousedown", onCompleteAni);

            m_mcGuide.visible = true;
            m_mcGuide.gotoAndStop(m_mcCharSet.x <= 640 ? 0 : 1);
            m_mcGuide.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcGuide.getChildAt(0), onCompleteAni);
        }
    }

    function stopGuideByTimer() {
        m_mcTapArea.removeEventListener("mousedown", onCompleteAni);

        m_mcGuide.visible = false;
        m_mcGuide.getChildAt(0).gotoAndStop(0);

        if (m_guideInterval) clearTimeout(m_guideInterval);
    }

    function onCompleteAni() {
        stopGuideByTimer();
        startGuideByTimer(m_guideTime);
    }
})();