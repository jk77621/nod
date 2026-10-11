/**
 * @class tutorialManager
 * @description 튜토리얼 클래스
 */
tutorialManager = new (function () {
    let p = this;

    let m_mcThis, m_mcTutorial;

    let m_video;

    /**
     * @method tutorialManager.onLoadVideo
     * @method tutorialManager.onEndVideo
     * @description 콜백
     */
    p.onLoadVideo;
    p.onEndVideo;

    /**
     * @method tutorialManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 튜토리얼 무비클립 객체
     * @param {String} sPath 튜토리얼 비디오 경로
     */
    p.init = function (mcThis, sPath) {
        m_mcThis = mcThis;
        m_mcTutorial = m_mcThis.mcTutorial;

        setTutorialLayer();
        showTutorialLayer(false);

        m_video = document.createElement("video");
        m_video.src = sPath;
        m_video.currentTime = 0;
        m_video.volume = 1;
        m_video.area = m_mcTutorial.mcArea;
        m_video.addEventListener("loadedmetadata", onLoadVideo);
        m_video.addEventListener("ended", onEndVideo);
    }

    /**
     * @method tutorialManager.play
     * @description 비디오 재생
     */
    p.play = function () {
        audioManager.playBGM("sounds_add/bgm.mp3", 0.1);

        showTutorialLayer(true);

        m_video.currentTime = 0;
        m_video.play();
    }

    /**
     * @method tutorialManager.pause
     * @description 비디오 중지
     */
    p.pause = function () {
        m_video.pause();
    }

    /**
     * @method tutorialManager.resume
     * @description 비디오 재개
     */
    p.resume = function () {
        m_video.play();
    }

    /**
     * @method tutorialManager.pause
     * @description 비디오 정지
     */
    p.stop = function () {
        audioManager.stop();
        audioManager.playBGM("sounds_add/bgm.mp3", 0.2);

        m_video.currentTime = 1;
        m_video.pause();
    }

    /**
     * @method tutorialManager.setVolume
     * @description 비디오 볼륨을 설정한다.
     * @param {String} sType 비디오 타입
     * @param {Number} nVolume 비디오 볼륭
     */
    p.setVolume = function (nVolume) {
        m_video.volume = nVolume;
    }

    // 비디오 객체 로드 이벤트 핸들러
    function onLoadVideo(e) {
        var objVideo = e.currentTarget;
        var mcArea = objVideo.area;
        var bitVideo = new createjs.Bitmap(objVideo);

        bitVideo.x = mcArea.nominalBounds.x;
        bitVideo.y = mcArea.nominalBounds.y;
        bitVideo.scaleX = mcArea.nominalBounds.width / objVideo.videoWidth;
        bitVideo.scaleY = mcArea.nominalBounds.height / objVideo.videoHeight;

        mcArea.addChild(bitVideo);

        if (p.onLoadVideo) p.onLoadVideo();
    }

    // 팝업 레이어에 튜토리얼을 넣는다.
    function setTutorialLayer() {
        let stageTutorial = uiManager.getStage("popup");
        stageTutorial.addChild(m_mcTutorial);

        // 컨텐츠 클릭 방지
        m_mcTutorial.mcDimmed.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
        });

        // 닫기 버튼 이벤트
        m_mcTutorial.mcBtnClose.addEventListener("click", (e) => {
            p.stop();
            showTutorialLayer(false);
            if (p.onEndVideo) p.onEndVideo();
        });
    }

    // 튜토리얼 레이어를 보여준다.
    function showTutorialLayer(bShow) {
        m_mcTutorial.visible = bShow;
        if (bShow) pauseContents(); else resumeContents();
    }

    // 컨텐츠 재생을 중지한다.
    function pauseContents() {
        createjs.Ticker.paused = true;
        createjs.Ticker.removeEventListener("tick", uiManager.getStage("contents"));
        audioManager.pause();
    }

    // 컨텐츠 재생을 재개한다.
    function resumeContents() {
        createjs.Ticker.paused = false;
        createjs.Ticker.addEventListener("tick", uiManager.getStage("contents"));
        audioManager.resume();
    }

    // 비디오 객체 완료 이벤트 핸들러
    function onEndVideo(e) {
        showTutorialLayer(false);
        if (p.onEndVideo) p.onEndVideo();
    }
})();