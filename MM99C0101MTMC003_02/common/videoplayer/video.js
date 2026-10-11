window.onresize = fixRatio;
// window.onload = onLoad;

function fixRatio() {
    //2000 x 1200
    var parentElement = document.getElementById("container");
    var scale = 1;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var stageSize = { width: 1280, height: 768 };
    //var scaleX = Math.round(w * 1000 / stageSize.width) / 1000;
    //var scaleY = Math.round(h * 1000 / stageSize.height) / 1000;
    var scaleX = w / stageSize.width;
    var scaleY = h / stageSize.height;

    scale = scaleX < scaleY ? scaleX : scaleY;
    //console.log(w + " " + h + " " + scaleX + " " + scaleY + " " + scale);
    // console.log("fixRatio",scale,stageSize);
    var xx = parseInt((w - stageSize.width * scale) / 2);
    var yy = parseInt((h - stageSize.height * scale) / 2);
    // console.log(w + " " + h + " " + scaleX + " " + scaleY + " " + scale + " " + xx + " " + yy);
    parentElement.style.transform = "translate(" + xx + "px," + yy + "px) scale(" + scale + ")";
    parentElement.style.transformOrigin = "0px 0px 0px";
    parentElement.style.width = stageSize.width + "px";
    parentElement.style.height = stageSize.height + "px";
    parentElement.style.display = "block";
    parentElement.style.overflow = "hidden";
}

/**
 * 비디오 기능 초기화 밑 설정
 * @param {*} bCompleteAnim  완료 애니메이션 사용 여부
 * @param {*} funcMovieEnded 영상 재생 완료 콜백
 */
function videoInit(bCompleteAnim, funcMovieEnded) {
    var arrVideoFile = ["common/videoplayer/player/common.js", "common/videoplayer/player/event-dispatcher.js", "common/videoplayer/player/html5-player.js", "common/videoplayer/player/movie-text-handler.js"];
    var arrCreatejs = ["common/createjs.min.js", "common/cjs-loader.js", "common/audio-item.js", "common/audio-manager.js", "common/cjs.nod.text.js", "common/cjs.nod.util.js"];

    var arrFiles = arrVideoFile;
    arrFiles = arrFiles.concat(arrCreatejs);
    JSLoader.loadArr(arrFiles, function () {
        fixRatio();
        //var path = "es1_02_d13_c2_1280.mp4";        
        //var srt_kor = "es1_02_d13_c2_1280.kr.srt";
        //var srt_eng = "es1_02_d13_c2_1280.en.srt";

        var path = MP4_PATH || "";
        var srt_kor = KOR_SRT_PATH || "";
        var srt_eng = ENG_SRT_PATH || "";

        console.log(path, "\n", srt_kor, "\n", srt_eng);

        if (!path) {
            console.error("영상의 주소가 올바르지 않습니다.\n" + path);
        }

        var cjs = new cjsLoader();

        cjs.loadAnimate("common/videoplayer/assets/videoPlayer/video.js", function (lib) {
            var mc = new lib.video();

            var container = document.getElementById("container");
            cjs.init(container);
            cjs.setMC(mc);

            //alert("웹에서 동영상 자동 재생이 안되는 것 때문에 클릭 하면 실행되도록 임시로 넣었습니다.");
            //container.onclick = function () {
            //    container.onclick = null;
            new videoPlayer(mc, path, srt_kor, srt_eng, bCompleteAnim, funcMovieEnded);
            //};
        });
    });
}

function videoPlayer(mcThis, videoPath, srtPath, srtEngPath, bCompleteAnim, funcMovieEnded) {
    let nodtextKor = new createjs.NODText("", 50, "Maplestory", "#000000", "center", "");
    let nodtextEng = new createjs.NODText("", 55, "Maplestory", "#000000", "center", "");
    nodtextEng.lineWidth = nodtextKor.lineWidth = 985;

    nodtextKor.lineHeight = 60;
    nodtextEng.lineHeight = 65;

    nodtextEng.setOutLine("#FFFFFF", 8);
    nodtextKor.setOutLine("#FFFFFF", 8);

    nodtextEng.lineSpacing = nodtextKor.lineSpacing = 2;

    var m_mcThis = mcThis;
    var player;

    var orgPosY = m_mcThis.type0.y;
    var controllerHeight = 120;
    // var captionPosGap = 50;

    var m_bHide = false;
    var m_nLastSpeed = 0;
    var m_nLastCaptionType = 2; // 0: 없음 1:한글 2:영어
    var m_nTotalTime;

    //var sbBG;

    var m_arrSrtKor = [];
    var m_arrSrtEng = [];

    let m_bShowUI = true;

    init();

    function init() {
        setVideoArea();
        setEvent();
        showSpeedCombo(false);

        showCaptionCombo(false);

        m_mcThis.type0.timeProgress.progress.scaleX = 0;

        m_mcThis.type0.btnPlay.gotoAndStop(2);

        m_mcThis.type0.mcCaption2.visible = false;

        if (srtPath && srtEngPath) {
            m_mcThis.type0.mcCaption2.visible = true;
        }
    }

    function showSpeedCombo(bVisible) {
        for (var i = 0; i < 3; i++) {
            m_mcThis.type0.mcSpeedList["speed" + i].visible = bVisible;
            m_mcThis.type0.mcSpeedList["speed" + i].gotoAndStop(i);
            m_mcThis.type0.mcSpeedList["speed" + i].mouseChildren = false;
        }
        m_mcThis.type0.mcSpeedList.speed0.visible = true;
        m_mcThis.type0.mcSpeedList.speed0.gotoAndStop(m_nLastSpeed);
    }

    function showCaptionCombo(bVisible) {
        var arr;
        switch (m_nLastCaptionType) {
            case 0:
                arr = [0, 1, 2];
                break;
            case 1:
                arr = [1, 0, 2];
                break;
            case 2:
                arr = [2, 0, 1];
                break;
        }
        //console.log(arr);
        for (var i = 0; i < 3; i++) {
            m_mcThis.type0.mcCaption2["caption" + i].visible = bVisible;
            m_mcThis.type0.mcCaption2["caption" + i].gotoAndStop(arr[i]);
            m_mcThis.type0.mcCaption2["caption" + i].mouseChildren = false;
        }
        m_mcThis.type0.mcCaption2.back.mouseEnabled = false;
        m_mcThis.type0.mcCaption2.back.visible = bVisible;
        m_mcThis.type0.mcCaption2.caption0.visible = true;
    }

    function onError(player) {
        alert(player.strError);
    }

    function onInit(player) {
        if (!player.bLoaded) {
            alert("영상을 불러오지 못하였습니다.");
            return;
        }

        m_mcThis.type0.btnPlay.visible = true;
        createjs.Tween.get(m_mcThis.type0.btnPlay).to({ alpha: 1 }, 500);

        //player.pauseVideo();
        m_nTotalTime = player.getDuration();
        var nM = parseInt(m_nTotalTime / 60);
        var nS = parseInt(m_nTotalTime % 60);
        m_mcThis.type0.txtTot.text = (nM < 10 ? "0" : "") + nM + ":" + (nS < 10 ? "0" : "") + nS;

        m_mcThis.type0.btnPlay.gotoAndStop(2);
        player.playVideo();
        //console.log("DDDD" + m_mcThis.type0.btnPlay.currentFrame);
    }

    function showCaption(str) {
        let mcTxt;
        if (m_nLastCaptionType == 1) {
            nodtextKor.text = str;
            mcTxt = nodtextKor.getClip();
        } else if (m_nLastCaptionType == 2) {
            nodtextEng.text = str;
            mcTxt = nodtextEng.getClip();
        }
        m_mcThis.mcCaptionArea.removeAllChildren();
        if (mcTxt) {
            //console.log(mcTxt.getBounds(), mcTxt.regX, mcTxt.regY, mcTxt.x, mcTxt.y);
            createjs.NODUtil.regAlign(mcTxt, createjs.NODUtil.ALIGN.CB);
            mcTxt.x = mcTxt.y = 0;
            //console.log(mcTxt.getBounds(), mcTxt.regX, mcTxt.regY, mcTxt.x, mcTxt.y);
            m_mcThis.mcCaptionArea.addChild(mcTxt);
        }
    }
    function onEnded(player) {
        m_mcThis.type0.btnPlay.gotoAndStop(1);
        showCaption("");

        m_mcThis.mcBack.mouseEnabled = false;
        m_mcThis.type0.mouseEnabled = false;

        // alert("끝!");
        if (bCompleteAnim) {
            m_mcThis.mcEnding.gotoAndPlay(1);
            util.getClipFrameComplete(m_mcThis.mcEnding, function () {
                m_mcThis.mcEnding.stop();
                if (funcMovieEnded) funcMovieEnded();
            });
        } else {
            if (funcMovieEnded) funcMovieEnded();
        }

    }

    function onPlaying(player) {
        // console.log("onPlaying " +player.isPlaying);
    }

    function showCurrentTime(nCurrentTime) {
        var nM = parseInt(nCurrentTime / 60);
        var nS = parseInt(nCurrentTime % 60);
        m_mcThis.type0.txtCur.text = (nM < 10 ? "0" : "") + nM + ":" + (nS < 10 ? "0" : "") + nS;
    }
    function onTimeupdate(player) {
        var nCurrentTime = player.getCurrentTime();

        m_mcThis.type0.timeProgress.progress.scaleX = nCurrentTime / m_nTotalTime;
        m_mcThis.type0.timeProgress.handler.x = m_mcThis.type0.timeProgress.progress.nominalBounds.width * m_mcThis.type0.timeProgress.progress.scaleX;

        showCurrentTime(nCurrentTime);
    }

    function onTextStart(player, data) {
        //showCaption(data.text + " " + data.text + " " + data.text + " " + data.text);
        showCaption(data.text);
    }

    function onTextEnd(player, data) {
        showCaption("");
    }

    function setVideoArea() {
        //player = external.createMoviePlayer(0, 0, 1280, 768);
        var parentElement = document.getElementById("container");
        player = new Html5Player(parentElement, 0, 0, 1280, 768);
        player.addEventListener("onInit", onInit);
        player.addEventListener("onEnded", onEnded);
        player.addEventListener("onPlaying", onPlaying);
        player.addEventListener("onTimeupdate", onTimeupdate);
        player.addEventListener("onTextStart", onTextStart);
        player.addEventListener("onTextEnd", onTextEnd);
        player.addEventListener("onError", onError);
        player.loadMp4(videoPath);

        if (srtPath)
            player.loadSrtAtMain(srtPath, function (arr) {
                //console.log(srtPath + " " + JSON.stringify(arr));
                m_arrSrtKor = arr;
                if (m_nLastCaptionType == 1) player.setTexts(m_arrSrtKor);
            });
        if (srtEngPath)
            player.loadSrtAtMain(srtEngPath, function (arr) {
                //console.log(srtEngPath + " " + JSON.stringify(arr));
                m_arrSrtEng = arr;
                if (m_nLastCaptionType == 2) player.setTexts(m_arrSrtEng);
            });

        setZIndex(-1);
    }

    function setZIndex(nDepth) {
        player.setZIndex(nDepth);
    }

    function setEvent() {
        m_mcThis.type0.mcCtrlBack.addEventListener("click", function () {
            console.log("DDD");
            setHideTimer();
        });
        m_mcThis.type0.btnPlay.addEventListener("click", onClickPlayPause);
        m_mcThis.type0.mcSpeedList.addEventListener("click", onClickPlaySpeedCtrl);

        m_mcThis.type0.mcCaption2.addEventListener("click", onClickCaption2);

        m_mcThis.mcBack.alpha = 0.01;
        m_mcThis.mcBack.addEventListener("click", onClickScreen);
        //let bTouchEvent = (typeof (window.ontouchstart) != 'undefined');
        //document.addEventListener(bTouchEvent ? 'touchend' : 'mouseup', onClickScreen, false);

        setHideTimer();

        // 여기서 완강 여부를 불러와 컨트롤 가능하게 해야함
        m_mcThis.type0.timeProgress.handler.addEventListener("mousedown", onMouseDown);
        m_mcThis.type0.timeProgress.back.addEventListener("click", onProgressBackClick);
    }

    function showButtomUI(bShow) {
        if (bShow) {
            setHideTimer();

            if (!m_bHide) return;
            //m_mcThis.mcCaptionArea.y -= captionPosGap;
            m_mcThis.mcCaptionArea.y = orgPosY - 30;
            m_bHide = false;

            createjs.Tween.removeTweens(m_mcThis.type0);
            createjs.Tween.get(m_mcThis.type0).to({ y: orgPosY }, 500, createjs.Ease.getPowOut(2), { override: true }).call(setHideTimer);

            m_bShowUI = true;
        } else {
            hide();
        }
    }

    function onClickScreen(evt) {
        showButtomUI(!m_bShowUI);
    }

    function __setProgressSeek(pt) {
        if (pt.x < 0) pt.x = 0;
        if (pt.x > m_mcThis.type0.timeProgress.back.nominalBounds.width) pt.x = m_mcThis.type0.timeProgress.back.nominalBounds.width;
        m_mcThis.type0.timeProgress.handler.x = pt.x;
        var nTime = parseInt((m_nTotalTime * pt.x) / m_mcThis.type0.timeProgress.back.nominalBounds.width);
        m_mcThis.type0.timeProgress.progress.scaleX = pt.x / m_mcThis.type0.timeProgress.back.nominalBounds.width;

        player.seek(nTime);

        showCurrentTime(nTime);
        setHideTimer();
    }

    function onProgressBackClick(e) {
        var pt = m_mcThis.type0.timeProgress.globalToLocal(e.stageX, e.stageY);
        __setProgressSeek(pt);
    }
    function onMouseDown(e) {
        createjs.Tween.removeTweens(m_mcThis);
        player.pauseVideo();

        m_mcThis.type0.timeProgress.handler.addEventListener("pressmove", onMouseMove);
        m_mcThis.type0.timeProgress.handler.addEventListener("pressup", onMouseUp);
        m_mcThis.stage.addEventListener("pressup", onMouseUp);

        m_mcThis.type0.timeProgress.handler.isPlaying = player.isPlaying;
    }

    function onMouseMove(e) {
        var pt = m_mcThis.type0.timeProgress.globalToLocal(e.stageX, e.stageY);
        __setProgressSeek(pt);
    }

    function onMouseUp(e) {
        if (m_mcThis.type0.timeProgress.handler.isPlaying) player.playVideo();

        m_mcThis.type0.timeProgress.handler.removeEventListener("pressmove", onMouseMove);
        m_mcThis.type0.timeProgress.handler.removeEventListener("pressup", onMouseUp);
        m_mcThis.stage.removeEventListener("pressup", onMouseUp);

        setHideTimer();
    }

    function setHideTimer() {
        createjs.Tween.removeTweens(m_mcThis);
        createjs.Tween.get(m_mcThis).wait(4000).call(hide);
    }

    function hide() {
        m_bShowUI = false;

        showSpeedCombo(false);
        showCaptionCombo(false);

        createjs.Tween.get(m_mcThis.type0)
            .to({ y: orgPosY + controllerHeight }, 500, createjs.Ease.getPowOut(2), { override: true })
            .call(function () {
                //m_mcThis.mcCaptionArea.y += captionPosGap;
                m_mcThis.mcCaptionArea.y = orgPosY + controllerHeight - 100;
                m_bHide = true;
            });
    }

    function onClickPlayPause(e) {
        var mcTarget = e.currentTarget;

        var bPlayed = mcTarget.currentFrame == 2;
        if (bPlayed) {
            mcTarget.gotoAndStop(1);
            player.pauseVideo();
        } else {
            mcTarget.gotoAndStop(2);
            player.playVideo();
        }
        setHideTimer();
    }

    function onClickCaption2(e) {
        var mcTarget = e.target;

        var bListEnabled = e.currentTarget.caption1.visible;
        m_mcThis.type0.mcCaption2.back.visible = !bListEnabled;
        if (bListEnabled) {
            if (!mcTarget.name) {
                showCaptionCombo(false);
                return;
            }

            //console.log(mcTarget.currentFrame);
            m_nLastCaptionType = mcTarget.currentFrame; //parseInt(mcTarget.name.substr(-1));
            switch (m_nLastCaptionType) {
                case 0:
                    player.setTexts([]);
                    break;
                case 1:
                    player.setTexts(m_arrSrtKor);
                    break;
                case 2:
                    player.setTexts(m_arrSrtEng);
                    break;
            }
            showCaptionCombo(false);
        } else {
            showCaptionCombo(true);
        }
        setHideTimer();
    }

    function onClickPlaySpeedCtrl(e) {
        var mcTarget = e.target;

        var nSpeed;
        var bListEnabled = e.currentTarget.speed1.visible;
        if (bListEnabled) {
            nSpeed = mcTarget.name.substr(5) * 1;
            if (m_nLastSpeed == nSpeed) return;
            m_nLastSpeed = mcTarget.name.substr(5) * 1;

            player.setPlaybackRate(1 + 0.5 * m_nLastSpeed);

            showSpeedCombo(false);
        } else {
            showSpeedCombo(true);
        }
        setHideTimer();
    }
}