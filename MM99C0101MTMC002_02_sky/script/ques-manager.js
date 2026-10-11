/**
 * @class quesManager
 * @classdesc 캐릭터 클래스
 */
quesManager = new (function () {
    let p = this;

    let m_mcThis, m_mcChangeSet, m_mcTapArea, m_mcGuide, m_mcQuesSet, m_mcNarrSet, m_mcImgNaSet, m_mcWrongSet, m_mcBtnNarr, m_mcTxtSet, m_mcImgSet, m_mcTapSet;

    let m_arrMouseEnabled = [];

    let m_bReview = false;

    let m_nFrame = 0;
    let m_nCurCount = 0;
    let m_nTotCount = 0;
    let m_nImgType = 0;
    let m_nTapType = 0;

    let m_sNumKey = "";

    let m_guideTime;
    let m_guideInterval;

    /**
     * @method quesManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcChangeSet = m_mcThis.mcChangeSet;
        m_mcTapArea = m_mcThis.mcTapArea;
        m_mcGuide = m_mcThis.mcGuide;
        m_mcQuesSet = m_mcThis.mcQuesSet;
        m_mcNarrSet = m_mcQuesSet.mcNarrSet;
        m_mcImgNaSet = m_mcQuesSet.mcImgNaSet;
        m_mcWrongSet = m_mcQuesSet.mcWrongSet;
        m_mcBtnNarr = m_mcQuesSet.mcBtnNarr;
        m_mcTxtSet = m_mcQuesSet.mcTxtSet;
        m_mcImgSet = m_mcQuesSet.mcImgSet;
        m_mcTapSet = m_mcQuesSet.mcTapSet;

        m_mcQuesSet.visible = false;

        m_mcBtnNarr.mouseChildren = false;
        m_mcBtnNarr.mouseEnabled = false;
        m_mcBtnNarr.addEventListener("click", onClickNarr);
    }

    /**
     * @method step1.onCompleteQues
     * @method step1.onCompleteReview
     * @description 콜백 설정
     */
    p.onCompleteQues;
    p.onCompleteReview;

    /**
     * @method quesManager.setEnabled
     * @description 마우스 활성화를 설정한다.
     * @param {Boolean} bEnabled 활성화 유무
     */
    p.setEnabled = function (bEnabled) {
        m_mcBtnNarr.mouseEnabled = bEnabled;
        for (let i = 0; i < m_arrMouseEnabled.length; ++i) {
            m_arrMouseEnabled[i].mouseEnabled = bEnabled;
        }
        if (m_nImgType == 1) drawingManager.setEnabled(bEnabled);
    }

    /**
     * @method quesManager.show
     * @description 퀴즈를 보여준다.
     */
    p.show = function () {
        stopGuideByTimer();
        if (m_bReview) {
            if (m_nCurCount == 0) {
                onChangeRainbow();
                onCompleteRainbow();
            } else {
                setChangeReviewOutro(onChangeRainbow, onCompleteRainbow);
            }
        } else {
            setChangeRainbow(onChangeRainbow, onCompleteRainbow);
        }

        function onChangeRainbow() {
            audioManager.playBGM("sounds_add/bgm2.mp3", 0.2);

            m_nFrame = step1.getCurCount();
            m_mcQuesSet.visible = true;
            m_mcTxtSet.gotoAndStop(m_nFrame);
            m_mcImgSet.gotoAndStop(m_nFrame);
            m_mcTapSet.gotoAndStop(m_nFrame);

            dtoManager.start(m_nFrame);

            setEvent();
        }

        function onCompleteRainbow() {
            setRightNarr(onCompleteNarr);
        }

        function onCompleteNarr() {
            p.setEnabled(true);
            startGuideByTimer(4000);
        }
    }

    /**
     * @method quesManager.hide
     * @description 퀴즈를 숨긴다.
     * @param {Boolean} bAnswer 퀴즈 정답 여부
     */
    p.hide = function (bAnswer) {
        if (m_bReview) {
            if (m_nCurCount == m_nTotCount - 1) {
                setChangeRainbowIntro(onChangeRainbow, onCompleteRainbow);
            } else {
                setChangeReviewIntro(onChangeRainbow, onCompleteRainbow);
            }
        } else {
            setChangeRainbow(onChangeRainbow, onCompleteRainbow);
        }

        function onChangeRainbow() {
            if (!m_bReview) audioManager.playBGM("sounds_add/bgm.mp3", 0.2);
            m_mcQuesSet.visible = false;

            dtoManager.end();
            dtoManager.setHistory(bAnswer ? "O" : "X");
        }

        function onCompleteRainbow() {
            if (m_bReview) {
                m_nCurCount++;
                if (p.onCompleteReview) p.onCompleteReview(bAnswer);
            } else {
                if (p.onCompleteQues) p.onCompleteQues(bAnswer);
            }
        }
    }

    /**
     * @method quesManager.setReview
     * @description 리뷰 풀이로 전환한다.
     * @param {Number} n1 리뷰 풀이 현재 인덱스
     * @param {Number} n2 리뷰 풀이 총 인덱스
     */
    p.setReview = function (n1, n2) {
        m_bReview = true;
        m_nCurCount = n1;
        m_nTotCount = n2;
    }

    // 퀴즈 타입에 맞게 이벤트를 붙인다.
    function setEvent() {
        let arrImgLabels = m_mcImgSet.labels[0].label.split("_");
        let arrTapLabels = m_mcTapSet.labels[0].label.split("_");

        arrImgLabels.shift();
        arrTapLabels.shift();
        m_arrMouseEnabled = [];
        m_sNumKey = "";

        m_nImgType = arrImgLabels[m_nFrame] * 1;
        m_nTapType = arrTapLabels[m_nFrame] * 1;

        let mcBtnImg;
        switch (m_nImgType) {
            case 0:
                mcBtnImg = m_mcImgSet.getChildAt(1).mcBtnImg;

                m_arrMouseEnabled.push(mcBtnImg);

                mcBtnImg.mouseChildren = false;
                mcBtnImg.mouseEnabled = false;
                mcBtnImg.addEventListener("click", onClickImg);
                break;
            case 1:
                drawingManager.init(m_mcImgSet.getChildAt(1), m_lib);
                drawingManager.setPen(-1, "", 10);
                drawingManager.onStartDrawing = onStartDrawing;
                drawingManager.onCompleteDrawing = onCompleteDrawing;

                let mcUndo = m_mcImgSet.getChildAt(1).mcUndo;

                m_arrMouseEnabled.push(mcUndo);

                mcUndo.mouseChildren = false;
                mcUndo.mouseEnabled = false;
                mcUndo.gotoAndStop(0);
                mcUndo.addEventListener("click", onClickUndo);

                let mcStart = m_mcImgSet.getChildAt(1).mcStart;

                m_arrMouseEnabled.push(mcStart);

                mcStart.mouseChildren = false;
                mcStart.mouseEnabled = false;
                mcStart.gotoAndStop(0);
                mcStart.addEventListener("click", onClickStart);

                mcBtnImg = m_mcImgSet.getChildAt(1).mcBtnImg;

                m_arrMouseEnabled.push(mcBtnImg);

                mcBtnImg.mouseChildren = false;
                mcBtnImg.mouseEnabled = false;
                mcBtnImg.addEventListener("click", onClickImg);
                break;
        }

        switch (m_nTapType) {
            case 0:
                let mcTap;
                for (let i = 0; i < m_mcTapSet.getChildAt(0).numChildren; ++i) {
                    mcTap = m_mcTapSet.getChildAt(0)["mcTap" + i];
                    if (mcTap == null) break;

                    m_arrMouseEnabled.push(mcTap);

                    mcTap.mouseChildren = false;
                    mcTap.mouseEnabled = false;
                    mcTap.index = i;
                    mcTap.gotoAndStop(0);
                    mcTap.addEventListener("click", onClickTap);
                }
                break;
            case 1:
                setNumKey();

                let mcNumKeyEnter = m_mcTapSet.getChildAt(0).mcNumKeyEnter;

                m_arrMouseEnabled.push(mcNumKeyEnter);

                mcNumKeyEnter.mouseChildren = false;
                mcNumKeyEnter.mouseEnabled = false;
                mcNumKeyEnter.addEventListener("click", onClickNumKeyEnter);

                let mcNumKeyUndo = m_mcTapSet.getChildAt(0).mcNumKeyUndo;

                m_arrMouseEnabled.push(mcNumKeyUndo);

                mcNumKeyUndo.mouseChildren = false;
                mcNumKeyUndo.mouseEnabled = false;
                mcNumKeyUndo.addEventListener("click", onClickNumKeyUndo);

                let mcNumKey;
                for (let i = 0; i < m_mcTapSet.getChildAt(0).numChildren; ++i) {
                    mcNumKey = m_mcTapSet.getChildAt(0)["mcNumKey" + i];
                    if (mcNumKey == null) break;

                    m_arrMouseEnabled.push(mcNumKey);

                    mcNumKey.mouseChildren = false;
                    mcNumKey.mouseEnabled = false;
                    mcNumKey.index = i;
                    mcNumKey.addEventListener("click", onClickNumKey);
                }
                break;
        }
    }

    // 그리기 시작 콜백
    function onStartDrawing() {
        stopGuideByTimer();
        p.setEnabled(false);
    }

    // 그리기 완료 콜백
    function onCompleteDrawing() {
        p.setEnabled(true);
        startGuideByTimer(4000);
    }

    // 그리기 시작 버튼 클릭 이벤트 핸들러
    function onClickStart(e) {
        let mcStart = e.currentTarget;

        audioManager.get().play("sounds_add/eff_tap.mp3", 1);

        stopGuideByTimer();
        p.setEnabled(false);

        m_mcImgSet.getChildAt(1).mcUndo.gotoAndStop(0);
        m_mcImgSet.getChildAt(1).mcStart.gotoAndStop(1);

        drawingManager.setPen(0, "pen", 10);

        p.setEnabled(true);
        startGuideByTimer(4000);
    }

    // 그리기 지우기 버튼 클릭 이벤트 핸들러
    function onClickUndo(e) {
        let mcUndo = e.currentTarget;

        audioManager.get().play("sounds_add/eff_tap.mp3", 1);

        stopGuideByTimer();
        p.setEnabled(false);

        m_mcImgSet.getChildAt(1).mcUndo.gotoAndStop(1);
        m_mcImgSet.getChildAt(1).mcStart.gotoAndStop(0);

        drawingManager.setPen(0, "eraser", 30);

        p.setEnabled(true);
        startGuideByTimer(4000);
    }

    // 키패드 체크 버튼 클릭 이벤트 핸들러
    function onClickNumKeyEnter(e) {
        let mcNumKeyUndo = e.currentTarget;
        let bAnswer = isAnswerNumKey();
        let mcAni = bAnswer ? m_mcTapSet.getChildAt(0).mcKeySuccess : m_mcTapSet.getChildAt(0).mcKeyFailed;

        stopGuideByTimer();
        p.setEnabled(false);

        if (m_sNumKey == "") {
            audioManager.get().play("sounds_add/eff_retry.mp3", 1);

            setTimeout(() => {
                p.setEnabled(true);
                startGuideByTimer(4000);
            }, 1000);
            return;
        }

        mcAni.gotoAndPlay(1);
        util.getClipFrameComplete(mcAni, onCompleteTap);
        function onCompleteTap() {
            mcAni.gotoAndStop(0);
            if (bAnswer) {
                p.hide(bAnswer);
            } else {
                if (m_bReview) {
                    if (m_nImgType == 1) drawingManager.clear();

                    m_sNumKey = "";
                    setNumKey();

                    setWrongNarr(onCompleteNarr);
                } else {
                    onCompleteNarr();
                }
            }
        }
        function onCompleteNarr() {
            p.hide(bAnswer);
        }
    }

    // 키패드에 적힌 숫자가 정답인지 체크한다.
    function isAnswerNumKey() {
        let arrLabels = m_mcTapSet.getChildAt(0).labels[0].label.split("_");

        arrLabels.shift();

        let sAnswer = arrLabels[0];
        let sNumKey = "";
        let nNumKey;
        for (let i = 4; i > -1; --i) {
            nNumKey = m_sNumKey[i] * 1;
            sNumKey += isNaN(nNumKey) ? "" : nNumKey;
        }

        return sAnswer == sNumKey;
    }

    // 키패드 지우기 버튼 클릭 이벤트 핸들러
    function onClickNumKeyUndo(e) {
        let mcNumKeyUndo = e.currentTarget;

        audioManager.get().play("sounds_add/eff_tap.mp3", 1);

        stopGuideByTimer();
        p.setEnabled(false);

        m_sNumKey = m_sNumKey.substring(1, 5);
        setNumKey();

        p.setEnabled(true);
        startGuideByTimer(4000);
    }

    // 키패드 숫자 버튼 클릭 이벤트 핸들러
    function onClickNumKey(e) {
        let mcNumKey = e.currentTarget;

        audioManager.get().play("sounds_add/eff_tap.mp3", 1);

        stopGuideByTimer();
        p.setEnabled(false);

        let sIndex = mcNumKey.index + "";
        if (m_sNumKey.length < 5) m_sNumKey = sIndex.concat(m_sNumKey);
        setNumKey();

        p.setEnabled(true);
        startGuideByTimer(4000);
    }

    // 키패드 숫자를 설정한다.
    function setNumKey() {
        let mcNumOut, nNumKey;
        for (let i = 0; i < 5; ++i) {
            mcNumOut = m_mcTapSet.getChildAt(0)["mcNumOut" + i];
            if (mcNumOut == null) break;

            nNumKey = m_sNumKey[i] * 1;

            mcNumOut.visible = isNaN(nNumKey) ? false : true;
            mcNumOut.gotoAndStop(isNaN(nNumKey) ? 0 : nNumKey);
        }
    }

    // 보기 영역 클릭 이벤트 핸들러
    function onClickTap(e) {
        let mcTap = e.currentTarget;
        let bAnswer = mcTap.index == 0;
        stopGuideByTimer();
        p.setEnabled(false);
        mcTap.gotoAndPlay(1);
        util.getClipFrameComplete(mcTap, onCompleteTap);
        function onCompleteTap() {
            mcTap.gotoAndStop(0);
            if (bAnswer) {
                p.hide(bAnswer);
            } else {
                if (m_bReview) {
                    if (m_nImgType == 1) drawingManager.clear();

                    setWrongNarr(onCompleteNarr);
                } else {
                    onCompleteNarr();
                }
            }
        }
        function onCompleteNarr() {
            p.hide(bAnswer);
        }
    }

    // 이미지 버튼 클릭 이벤트 핸들러
    function onClickImg(e) {
        let mcBtnImg = e.currentTarget;
        stopGuideByTimer();
        p.setEnabled(false);
        setImgNarr(onCompleteNarr);
        function onCompleteNarr() {
            p.setEnabled(true);
            startGuideByTimer(4000);
        }
    }

    // 이미지 나레이션을 설정한다.
    function setImgNarr(funcComplete) {
        m_mcImgNaSet.gotoAndStop(m_nFrame);
        m_mcImgNaSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcImgNaSet.getChildAt(0), onCompleteNarr);
        function onCompleteNarr() {
            m_mcImgNaSet.getChildAt(0).gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    // 나레이션 버튼 클릭 이벤트 핸들러
    function onClickNarr(e) {
        let mcBtnNarr = e.currentTarget;
        stopGuideByTimer();
        p.setEnabled(false);
        setRightNarr(onCompleteNarr);
        function onCompleteNarr() {
            p.setEnabled(true);
            startGuideByTimer(4000);
        }
    }

    // 정반응 나레이션을 설정한다.
    function setRightNarr(funcComplete) {
        m_mcNarrSet.gotoAndStop(m_nFrame);
        m_mcNarrSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcNarrSet.getChildAt(0), onCompleteNarr);
        function onCompleteNarr() {
            m_mcNarrSet.getChildAt(0).gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    // 오반응 나레이션을 설정한다.
    function setWrongNarr(funcComplete) {
        m_mcWrongSet.gotoAndStop(m_nFrame);
        m_mcWrongSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcWrongSet.getChildAt(0), onCompleteNarr);
        function onCompleteNarr() {
            m_mcWrongSet.getChildAt(0).gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    // 무지개 화면 전환을 설정한다.
    function setChangeRainbow(funcChange, funcComplete) {
        m_mcChangeSet.gotoAndStop(0);
        m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteIntro);
        function onCompleteIntro() {
            if (funcChange) funcChange();

            m_mcChangeSet.gotoAndStop(1);
            m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteOutro);
        }

        function onCompleteOutro() {
            if (funcComplete) funcComplete();
        }
    }

    // 무지개 화면 전환 인트로를 설정한다.
    function setChangeRainbowIntro(funcChange, funcComplete) {
        m_mcChangeSet.gotoAndStop(0);
        m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteIntro);
        function onCompleteIntro() {
            if (funcChange) funcChange();
            if (funcComplete) funcComplete();
        }
    }

    // 리뷰 풀이 화면 전환 인트로을 설정한다.
    function setChangeReviewIntro(funcChange, funcComplete) {
        m_mcChangeSet.gotoAndStop(2);
        m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteIntro);
        function onCompleteIntro() {
            if (funcChange) funcChange();
            if (funcComplete) funcComplete();
        }
    }

    // 리뷰 풀이 화면 전환 아웃트로을 설정한다.
    function setChangeReviewOutro(funcChange, funcComplete) {
        if (funcChange) funcChange();
        m_mcChangeSet.gotoAndStop(3);
        m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteOutro);
        function onCompleteOutro() {
            if (funcComplete) funcComplete();
        }
    }

    // 일정 시간동안 특별한 호출이 없을 경우 지정된 가이드를 실행한다.
    function startGuideByTimer(nTime) {
        stopGuideByTimer();

        m_guideTime = nTime;
        m_guideInterval = setTimeout(onTimeout, nTime);
        function onTimeout() {
            m_mcTapArea.addEventListener("click", onCompleteAni);

            m_mcGuide.visible = true;
            m_mcGuide.gotoAndStop(2);
            m_mcGuide.getChildAt(0).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcGuide.getChildAt(0), onCompleteAni);
        }
    }

    function stopGuideByTimer() {
        m_mcTapArea.removeEventListener("click", onCompleteAni);

        m_mcGuide.visible = false;
        m_mcGuide.getChildAt(0).gotoAndStop(0);

        if (m_guideInterval) clearTimeout(m_guideInterval);
    }

    function onCompleteAni() {
        stopGuideByTimer();
        startGuideByTimer(m_guideTime);
    }
})();