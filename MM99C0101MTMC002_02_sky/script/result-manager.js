/**
 * @class resultManager
 * @classdesc 캐릭터 클래스
 */
resultManager = new (function () {
    let p = this;

    let m_mcThis, m_mcChangeSet, m_mcResultSet, m_mcEnding, m_mcBtnComplete, m_mcNarrSet, m_mcTxtSet, m_mcDataSet, m_mcNumSet;

    let m_arrData = [];
    let m_arrReview = [];
    let m_arrWrong = [];

    let m_nPoint = 0;
    let m_bReview = false;

    /**
     * @method resultManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcChangeSet = m_mcThis.mcChangeSet;
        m_mcResultSet = m_mcThis.mcResultSet;
        m_mcEnding = m_mcResultSet.mcEnding;
        m_mcBtnComplete = m_mcResultSet.mcBtnComplete;
        m_mcNarrSet = m_mcResultSet.mcNarrSet;
        m_mcTxtSet = m_mcResultSet.mcTxtSet;
        m_mcDataSet = m_mcResultSet.mcDataSet;
        m_mcNumSet = m_mcResultSet.mcNumSet;

        m_mcResultSet.visible = false;

        m_mcBtnComplete.mouseEnabled = false;
        m_mcBtnComplete.addEventListener("click", onClickComplete);
    }

    /**
     * @method step1.onCompleteResult
     * @method step1.onCompleteEnding
     * @description 콜백 설정
     */
    p.onCompleteResult;
    p.onCompleteEnding;

    /**
     * @method resultManager.show
     * @description 결과 화면을 보여준다.
     */
    p.show = function () {
        let nFrame = 0;
        let sTxt = "";
        if (isPlayerStarted()) {
            external.studentName(onCompleteName);
            function onCompleteName(sName) {
                console.log(sName);
                sTxt = sName;
                onCompleteLoad();
            }
        } else {
            sTxt = "김판다";
            onCompleteLoad();
        }

        function onCompleteLoad() {
            if (m_bReview) {
                setChangeRainbowOutro(onChangeRainbow, onCompleteRainbow);
            } else {
                setChangeRainbow(onChangeRainbow, onCompleteRainbow);
            }
        }

        function onChangeRainbow() {
            audioManager.playBGM("sounds_add/bgm2.mp3", 0.2);

            m_arrData = step1.getData();

            m_arrReview = [];
            m_arrWrong = [];
            m_nPoint = 0;
            for (let i = 0; i < m_arrData.length; ++i) {
                if (m_arrData[i].answer == 2) {
                    m_arrReview.push(i);
                    m_nPoint++;
                } else if (m_arrData[i].answer == 1) {
                    m_arrWrong.push(i);
                } else {
                    m_nPoint++;
                }
            }

            switch (m_nPoint) {
                case 0:
                case 1:
                case 2:
                case 3:
                    nFrame = m_bReview ? 4 : 0;
                    break;
                case 4:
                case 5:
                case 6:
                    nFrame = 1;
                    break;
                case 7:
                case 8:
                case 9:
                    nFrame = 2;
                    break;
                case 10:
                    nFrame = 3;
                    break;
            }

            m_mcResultSet.visible = true;
            m_mcTxtSet.gotoAndStop(nFrame);
            setText(sTxt);
            m_mcNumSet.gotoAndStop(m_nPoint);

            let mcData;
            for (let i = 0; i < m_mcDataSet.numChildren; ++i) {
                mcData = m_mcDataSet["mc" + i];
                if (mcData == null) break;

                mcData.gotoAndStop(m_arrData[i].answer);
            }
        }

        function onCompleteRainbow() {
            if (m_bReview) {
                setReviewNarr(onCompleteNarr);
            } else {
                setIntroNarr(nFrame, onCompleteNarr);
            }
        }

        function onCompleteNarr() {
            createCompleteBtn();
        }
    }

    /**
    * @method resultManager.hide
    * @description 결과 화면을 숨긴다.
    */
    p.hide = function () {
        if (!m_bReview) audioManager.playBGM("sounds_add/bgm.mp3", 0.2);
        m_mcResultSet.visible = false;
        if (p.onCompleteResult) p.onCompleteResult();
    }

    // 현재 플레이어에서 구동 중인지 체크한다.
    function isPlayerStarted() {
        const filter = "win16|win32|win64|mac|macintel";
        let bPlayerStarted = 0 > filter.indexOf(navigator.platform.toLowerCase());
        return bPlayerStarted;
    }

    // 텍스트 지정하고 가운데로 정렬한다.
    function setText(s1) {
        m_mcTxtSet.getChildAt(1).getChildAt(1).text = s1;
        m_mcTxtSet.getChildAt(1).getChildAt(1).font = "49px ONE-Mobile-POP";
        m_mcTxtSet.getChildAt(1).getChildAt(1).textAlign = "center";
        m_mcTxtSet.getChildAt(1).getChildAt(1).textBaseline = "middle";
        m_mcTxtSet.getChildAt(1).getChildAt(1).y = 108;
        let nW = m_mcTxtSet.getChildAt(1).getChildAt(1).getBounds().width;
        m_mcTxtSet.getChildAt(1).getChildAt(1).scale = s1.length > 5 ? 215 / nW : 1;
    }

    // 인트로 나레이션을 재생한다.
    function setIntroNarr(nFrame, funcComplete) {
        m_mcNarrSet.mcNarr2.gotoAndPlay(1);
        util.getClipFrameComplete(m_mcNarrSet.mcNarr2, onCompleteNarr);
        function onCompleteNarr() {
            m_mcTxtSet.getChildAt(2).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcTxtSet.getChildAt(2), onCompleteNarr2);
        }

        function onCompleteNarr2() {
            if (nFrame > 2) {
                m_mcNarrSet.mcNarr0.gotoAndPlay(1);
                util.getClipFrameComplete(m_mcNarrSet.mcNarr0, onCompleteNarr3);
            } else {
                m_mcNarrSet.mcNarr1.gotoAndPlay(1);
                util.getClipFrameComplete(m_mcNarrSet.mcNarr1, onCompleteNarr3);
            }
        }

        function onCompleteNarr3() {
            if (funcComplete) funcComplete();
        }
    }

    // 리뷰 풀이 나레이션을 재생한다.
    function setReviewNarr(funcComplete) {
        m_mcNarrSet.mcNarr3.gotoAndPlay(1);
        util.getClipFrameComplete(m_mcNarrSet.mcNarr3, onCompleteNarr);
        function onCompleteNarr() {
            setDataAni(onCompleteData);
        }

        function onCompleteData() {
            m_mcTxtSet.getChildAt(2).gotoAndPlay(1);
            util.getClipFrameComplete(m_mcTxtSet.getChildAt(2), onCompleteNarr2);
        }

        function onCompleteNarr2() {
            m_mcNarrSet.mcNarr0.gotoAndPlay(1);
            util.getClipFrameComplete(m_mcNarrSet.mcNarr0, onCompleteNarr3);
        }

        function onCompleteNarr3() {
            if (funcComplete) funcComplete();
        }
    }

    // 데이터 채워지는 애니메이션을 실행한다.
    function setDataAni(funcComplete) {
        let j = 0;
        let k = 0;
        let mcData;
        for (let i = 0; i < m_mcDataSet.numChildren; ++i) {
            mcData = m_mcDataSet["mc" + i];
            if (mcData == null) break;

            if (m_arrData[i].answer == 2) {
                mcData.gotoAndStop(m_arrData[i].answer);
                mcData.getChildAt(0).gotoAndPlay(1);
                util.getClipFrameComplete(mcData.getChildAt(0), onCompleteAni);
                k++;
            } else {
                mcData.gotoAndStop(m_arrData[i].answer);
            }
        }

        if (k == 0) {
            k = 1;
            onCompleteAni();
        } else {
            audioManager.get().play("sounds_add/sfx_etc_bbock.mp3", 1);
        }

        function onCompleteAni() {
            if (j == k - 1) {
                setTimeout(onTimeout, 1000);
                function onTimeout() {
                    if (funcComplete) funcComplete();
                }
            } else {
                j++;
            }
        }
    }

    // 완료 버튼을 생성한다.
    function createCompleteBtn() {
        if (m_mcBtnComplete.currentFrame != 0) return;
        m_mcBtnComplete.mouseEnabled = true;
        m_mcBtnComplete.gotoAndPlay(1);
        util.getClipFrameComplete(m_mcBtnComplete, onCompleteAni);
        function onCompleteAni() {
        }
    }

    // 완료 버튼 클릭 이벤트 핸들러
    function onClickComplete(e) {
        let mcBtnComplete = e.currentTarget;
        mcBtnComplete.mouseEnabled = false;
        mcBtnComplete.mcGuide.gotoAndStop(0);
        mcBtnComplete.gotoAndStop(0);

        if (m_nPoint > 9 || m_bReview) {
            setEnding(onCompleteEnding);
        } else {
            setChangeRainbow(onChangeRainbow, onCompleteRainbow);
            function onChangeRainbow() {
                m_bReview = true;
                p.hide();
                quesManager.setReview(0, m_arrWrong.length);
                setReviewQues(0, onCompleteReview);
            }

            function onCompleteRainbow() {
            }
        }

        function onCompleteEnding() {
            if (p.onCompleteEnding) p.onCompleteEnding();
        }

        function onCompleteReview() {
            p.show();
        }
    }

    // 엔딩을 설정한다.
    function setEnding(funcComplete) {
        m_mcEnding.gotoAndPlay(1);
        util.getClipFrameComplete(m_mcEnding, onCompleteEnding);
        function onCompleteEnding() {
            if (funcComplete) funcComplete();
        }
    }

    // 리뷰 풀이를 설정한다.
    function setReviewQues(n1, funcComplete) {
        let nCount = m_arrWrong[n1];
        step1.setCurCount(nCount);
        quesManager.show();
        quesManager.onCompleteReview = onCompleteReview;
        function onCompleteReview(bAnswer) {
            step1.setData(nCount, bAnswer ? 2 : 1);
            if (n1 == m_arrWrong.length - 1) {

                if (funcComplete) funcComplete();
            } else {
                setReviewQues(n1 + 1, funcComplete);
            }
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

    // 무지개 화면 전환 아웃트로를 설정한다.
    function setChangeRainbowOutro(funcChange, funcComplete) {
        if (funcChange) funcChange();
        m_mcChangeSet.gotoAndStop(1);
        m_mcChangeSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcChangeSet.getChildAt(0), onCompleteOutro);
        function onCompleteOutro() {
            if (funcComplete) funcComplete();
        }
    }
})();