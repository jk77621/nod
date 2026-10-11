/**
 * @class step1
 * @classdesc HM1 ( step1 ) 클래스
 */
step1 = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcChangeSet, m_mcTapArea, m_mcIndicator, m_mcGuide, m_mcBtnTuto, m_mcBtnUp, m_mcBtnDown, m_mcCharSet;

    let m_arrData = [
        { count: 0, answer: -1 }, { count: 1, answer: -1 }, { count: 2, answer: -1 }, { count: 3, answer: -1 }, { count: 4, answer: -1 },
        { count: 5, answer: -1 }, { count: 6, answer: -1 }, { count: 7, answer: -1 }, { count: 8, answer: -1 }, { count: 9, answer: -1 }
    ];

    let m_nCurCount = 0;
    let m_nTotCount = 10;

    let m_bResult = true;

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

        // addChildAt 오류 방지
        let stage = uiManager.getStage("contents");
        stage.update();

        m_mcThis.autoReset = false;

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

        bgManager.init(m_mcThis, lib);
        blockManager.init(m_mcThis, lib);
        charManager.init(m_mcThis);
        quesManager.init(m_mcThis, lib);
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
                startGuideByTimer(4000);
            }
        }
    }

    // 튜토리얼 버튼 클릭 이벤트 핸들러
    function onClickTuto(e) {
        let mcBtnTuto = e.currentTarget;
        stopGuideByTimer();
        p.setEnabled(false);
        tutorialManager.play();
        tutorialManager.onEndVideo = onCompleteTutorial;
        function onCompleteTutorial() {
            p.setEnabled(true);
            startGuideByTimer(4000);
        }
    }

    // 상하 버튼 클릭 이벤트 핸들러
    function onClickBtn(e) {
        let mcBtn = e.currentTarget;
        let sType = blockManager.getAnswer();
        stopGuideByTimer();
        p.setEnabled(false);
        mcBtn.gotoAndStop(1);
        util.setTimeout(onTimeout, 1000);
        function onTimeout() {
            mcBtn.gotoAndStop(0);
        }
        if (sType == mcBtn.type) {
            charManager.jump(function () {
                if (isCompleteUnit()) {
                    resultManager.show();
                    resultManager.onCompleteEnding = onCompleteEnding;
                } else {
                    p.setEnabled(true);
                    startGuideByTimer(4000);
                }
            });
        } else {
            charManager.jumpWrong(function () {
                p.setEnabled(true);
                startGuideByTimer(4000);
            });
        }
    }

    // 결과 화면 엔딩 완료 콜백
    function onCompleteEnding() {
        if (p.onCompleteStep) p.onCompleteStep();
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
        m_mcGuide.nTime = nTime;
        m_mcGuide.interval = util.setTimeout(onTimeout, nTime);
        function onTimeout() {
            m_mcTapArea.addEventListener("click", onCompleteAni);

            m_mcGuide.gotoAndStop(0);
            m_mcGuide.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcGuide.getChildAt(0), function () { });

            m_mcCharSet.gotoAndStop(8);
            m_mcCharSet.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteAni);
        }
    }

    function stopGuideByTimer() {
        m_mcTapArea.removeEventListener("click", onCompleteAni);

        m_mcGuide.getChildAt(0).gotoAndStop(0);
        m_mcCharSet.gotoAndStop(0);

        util.clearTimeout(m_mcGuide.interval);
    }

    function onCompleteAni() {
        stopGuideByTimer();
        startGuideByTimer(m_mcGuide.nTime);
    }
})();