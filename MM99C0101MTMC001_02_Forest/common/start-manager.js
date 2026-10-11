/**
 * @class startManager
 * @classdesc 각 콘텐츠를 로드하기 전 처리 되어야 할 기본 기능 처리 클래스
 *            UI 세팅, 공용 js 파일 로드 등 기본으로 처리해야 할 기능들을 순차적으로 관리한다.
 */
startManager = new (function () {
    var p = this;

    loadDefaultJS(init);

    // common에 있는 js파일들을 로드한다.
    function loadDefaultJS(funcComplete) {
        var arrFiles = ["common/audio-item.js", "common/audio-manager.js",
            "common/cjs-manager.js", "common/createjs.min.js",
            "common/ui-manager.js", "common/page-base.js",
            "common/util.js", "common/external.js",
            "common/date-manager.js", "common/global-event.js",
            "common/videoplayer/video.js"];

        if (isPlayerStarted()) {
            console.log("Client platform : Mobile");
        } else {
            console.log("Client platform : PC");
            // for (var i = 0; i < arrFiles.length; i++) arrFiles[i] = "../../000_common/" + arrFiles[i].substr("common/".length);
        }
        // console.log( arrFiles );

        JSLoader.loadArr(arrFiles, funcComplete);
    }

    // 초기화
    function init() {
        uiManager.setUI(loadContentsFile);
    }

    // 현재 html 파일명을 기준으로 그래픽 소스 ( animateCC의 콘텐츠 파일 - 파일명_contents.js )와
    // 콘텐츠를 제어할 스크립트 파일 ( script 폴더 내 파일명.js )을 로딩한다.
    // 로딩 후 pageBase 클래스에 관련 정보를 입력한다.
    function loadContentsFile(funcComplete) {
        // var arrTemp = location.href.split("/");

        // var strFileName;
        // if (isPlayerStarted()) {
        //     strFileName = arrTemp[arrTemp.length - 2].split(".")[0].split("_")[1];
        // } else {
        //     strFileName = arrTemp[arrTemp.length - 2].split(".")[0];
        // }
        // console.log(strFileName);

        JSLoader.load("script/contents.js", function () {
            var strContentsPath = contentsType.strModuleName + "_contents.js";
            var strScriptPath = "script/" + contentsType.strModuleName + ".js";

            cjsManager.loadPage(strContentsPath, strScriptPath, onCompleteLoaded, onProgress);

            function onCompleteLoaded(lib) {
                pageBase.init(lib, strContentsPath.split(".")[0]);
            }

            function onProgress(nPerc) {
            }
        });

    }

    // 현재 플레이어에서 구동 중인지 체크한다.
    function isPlayerStarted() {
        const filter = "win16|win32|win64|mac|macintel";
        var bPlayerStarted = 0 > filter.indexOf(navigator.platform.toLowerCase());
        return bPlayerStarted;
    }
})();