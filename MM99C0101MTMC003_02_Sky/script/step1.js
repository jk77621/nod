/**
 * @class step1
 * @classdesc HM1 ( step1 ) 클래스
 */
step1 = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcChangeSet, m_mcTapArea, m_mcIndicator, m_mcGuide, m_mcBtnTuto, m_mcBtnUp, m_mcBtnDown, m_mcCharSet, m_mcItemSet;

    let m_arrData = [
        { count: 0, answer: -1 }, { count: 1, answer: -1 }, { count: 2, answer: -1 }, { count: 3, answer: -1 }, { count: 4, answer: -1 },
        { count: 5, answer: -1 }, { count: 6, answer: -1 }, { count: 7, answer: -1 }, { count: 8, answer: -1 }, { count: 9, answer: -1 }
    ];

    let m_nCurCount = 0;
    let m_nTotCount = 10;

    let m_bResult = false;
    let m_bFart = false;

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
        m_mcIndicator = m_mcThis.mcIndicator;
        m_mcGuide = m_mcThis.mcGuide;
        m_mcBtnTuto = m_mcThis.mcBtnTuto;
        m_mcBtnUp = m_mcThis.mcControlSet.mcBtnUp;
        m_mcBtnDown = m_mcThis.mcControlSet.mcBtnDown;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_mcItemSet = m_mcThis.mcItemSet;

        // addChildAt 오류 방지
        let stage = uiManager.getStage("contents");
        stage.update();

        m_mcThis.autoReset = false;

        m_mcGuide.getChildAt(0).gotoAndStop(0);

        m_mcBtnTuto.mouseChildren = false;
        m_mcBtnTuto.mouseEnabled = false;
        m_mcBtnTuto.addEventListener("click", onClickTuto);

        m_mcBtnUp.mouseChildren = false;
        m_mcBtnUp.mouseEnabled = false;
        m_mcBtnUp.type = "Up";
        m_mcBtnUp.addEventListener("click", onClickBtn);

        m_mcBtnDown.mouseChildren = false;
        m_mcBtnDown.mouseEnabled = false;
        m_mcBtnDown.type = "Down";
        m_mcBtnDown.addEventListener("click", onClickBtn);

        blockManager.init(m_mcThis, lib);
        blockManager.onHitFountain = onHitFountain;
        blockManager.onCompleteFountain = onCompleteFountain;
        blockManager.onHitFart = onHitFart;
        blockManager.onCompleteFart = onCompleteFart;
        blockManager.onHitBig = onHitBig;
        blockManager.onCompleteBig = onCompleteBig;
        blockManager.onHitBox = onHitBox;
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
        m_mcBtnUp.mouseEnabled = bEnabled;
        m_mcBtnDown.mouseEnabled = bEnabled;
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
                    { count: 0, answer: 1 }, { count: 1, answer: 1 }, { count: 2, answer: 1 }, { count: 3, answer: 1 }, { count: 4, answer: 1 },
                    { count: 5, answer: 1 }, { count: 6, answer: 1 }, { count: 7, answer: 1 }, { count: 8, answer: 1 }, { count: 9, answer: 1 }
                ];
                resultManager.show();
            } else {
                p.setEnabled(true);
                // startGuideByTimer(7000);
                startBoxByTimer(3000);

                blockManager.move();
                m_mcCharSet.getChildAt(0).gotoAndPlay(1);
            }
        }
    }

    // 과자 분수 시작 콜백
    function onHitFountain() {
        stopBoxByTimer();
        // stopGuideByTimer();
        p.setEnabled(false);
        blockManager.setDeleteBox(true);

        audioManager.playBGM("sounds_add/bgm3.mp3", 0.2);
    }

    // 과자 분수 완료 콜백
    function onCompleteFountain(nIndex, mcBlock) {
        let mcItem = m_mcItemSet["mcItem" + nIndex];
        mcItem.gotoAndStop(1);

        blockManager.setSpeed(24);
        charManager.getFountain(mcBlock, () => {
            blockManager.deleteFullBox();
            blockManager.setSpeed(12);
            blockManager.setDeleteBox(false);

            audioManager.playBGM("sounds_add/bgm.mp3", 0.2);

            p.setEnabled(true);
            // startGuideByTimer(7000);
            startBoxByTimer(3000);
        });
    }

    // 대포 방귀 시작 콜백
    function onHitFart() {
        m_bFart = true;

        audioManager.playBGM("sounds_add/bgm3.mp3", 0.2);

        stopBoxByTimer();
        // stopGuideByTimer();
        p.setEnabled(false);
        blockManager.setDeleteBox(true);
    }

    // 대포 방귀 완료 콜백
    function onCompleteFart(nIndex, mcBlock) {
        let mcItem = m_mcItemSet["mcItem" + nIndex];
        mcItem.gotoAndStop(1);

        p.setEnabled(true);
        blockManager.setSpeed(24);
        charManager.getFart(mcBlock, true);
        util.setTimeout(() => {
            blockManager.deleteFullBox();
            blockManager.setSpeed(12);
            blockManager.setDeleteBox(false);
            charManager.getFart(mcBlock, false);

            audioManager.playBGM("sounds_add/bgm.mp3", 0.2);

            // startGuideByTimer(7000);
            startBoxByTimer(3000);

            m_bFart = false;
        }, 8000);
    }

    // 무지개 부스터 시작 콜백
    function onHitBig() {
        stopBoxByTimer();
        // stopGuideByTimer();
        p.setEnabled(false);
        blockManager.setDeleteBox(true);

        audioManager.playBGM("sounds_add/bgm3.mp3", 0.2);
    }

    // 무지개 부스터 완료 콜백
    function onCompleteBig(nIndex, mcBlock) {
        let mcItem = m_mcItemSet["mcItem" + nIndex];
        mcItem.gotoAndStop(1);

        blockManager.setSpeed(24);
        blockManager.setRainbow(true);
        blockManager.setBig(true);
        blockManager.setDeleteBox(false);
        charManager.getBig(mcBlock, true);
        util.setTimeout(() => {
            blockManager.deleteFullBox();
            blockManager.setSpeed(12);
            blockManager.setRainbow(false);
            blockManager.setBig(false);
            charManager.getBig(mcBlock, false, () => {
                audioManager.playBGM("sounds_add/bgm.mp3", 0.2);

                p.setEnabled(true);
                // startGuideByTimer(7000);
                startBoxByTimer(3000);
            });
        }, 6000);
    }

    // 박스 도착 콜백
    function onHitBox(mcBlock) {
        stopBoxByTimer();
        // stopGuideByTimer();
        p.setEnabled(false);

        blockManager.stop();
        charManager.arriveBox(mcBlock, () => {
            quesManager.show();
            quesManager.onCompleteQues = onCompleteQues;
            function onCompleteQues(bAnswer) {
                p.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                p.setCurCount(step1.getCurCount() + 1);

                blockManager.setDeleteBox(true);
                if (bAnswer) {
                    blockManager.setSpeed(24);
                    blockManager.move();
                    util.setTimeout(() => { blockManager.deleteFullBox(); }, 1000);
                    charManager.quesRight(mcBlock, onCompleteRight);
                    function onCompleteRight() {
                        blockManager.setSpeed(12);
                        onCompleteFeed();
                    }
                } else {
                    blockManager.move();
                    charManager.quesWrong(mcBlock, onCompleteWrong);
                    function onCompleteWrong() {
                        blockManager.deleteFullBox();
                        onCompleteFeed();
                    }
                }
            }
        });

        function onCompleteFeed() {
            blockManager.setDeleteBox(false);
            if (isCompleteUnit()) {
                blockManager.setDeleteBox(true);
                util.setTimeout(() => {
                    blockManager.stop();
                }, 3000);
                util.setTimeout(() => {
                    resultManager.show();
                    resultManager.onCompleteEnding = onCompleteEnding;
                }, 1000);
                function onCompleteEnding() {
                    if (p.onCompleteStep) p.onCompleteStep();
                }
            } else {
                p.setEnabled(true);
                // startGuideByTimer(7000);
                startBoxByTimer(3000);
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

    // 상하 버튼 클릭 이벤트 핸들러
    function onClickBtn(e) {
        let mcBtn = e.currentTarget;

        if (Math.floor(Math.random() * 2) == 0) {
            audioManager.get().play("sounds_add/Na_002_Re.mp3", 1);
        } else {
            audioManager.get().play("sounds_add/Na_003_Re.mp3", 1);
        }

        // if (!m_bFart) stopGuideByTimer();
        p.setEnabled(false);
        mcBtn.gotoAndStop(1);
        util.setTimeout(() => {
            mcBtn.gotoAndStop(0);
        }, 1000);
        switch (mcBtn.type) {
            case "Up":
                charManager.upJump(onCompleteJump);
                break;
            case "Down":
                charManager.downJump(onCompleteJump);
                break;
        }
        function onCompleteJump() {
            p.setEnabled(true);
            // if (!m_bFart) startGuideByTimer(7000);
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

    // 일정 시간동안 특별한 호출이 없을 경우 지정된 박스를 생성한다.
    function startBoxByTimer(nTime) {
        m_mcThis.interval = util.setTimeout(onTimeout, nTime);
        function onTimeout() {
            blockManager.addFullBox();
        }
    }

    function stopBoxByTimer() {
        util.clearTimeout(m_mcThis.interval);
    }

    // 일정 시간동안 특별한 호출이 없을 경우 지정된 가이드를 실행한다.
    function startGuideByTimer(nTime) {
        stopGuideByTimer();

        m_mcGuide.nTime = nTime;
        m_mcGuide.interval2 = setTimeout(onTimeout, nTime);
        function onTimeout() {
            m_mcTapArea.addEventListener("click", stopGuideByTimer);

            m_mcGuide.gotoAndStop(0);
            m_mcGuide.getChildAt(0).gotoAndPlay(1);

            m_mcCharSet.gotoAndStop(10);
            m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        }
    }

    function stopGuideByTimer() {
        m_mcTapArea.removeEventListener("click", stopGuideByTimer);

        m_mcGuide.getChildAt(0).gotoAndStop(0);
        m_mcCharSet.gotoAndStop(0);

        if (m_mcGuide.interval2) clearTimeout(m_mcGuide.interval2);
    }
})();