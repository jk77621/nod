/**
 * @class cjsManager
 * @classdesc createjs 관리 클래스
 *            coypright (c) 2016- 2020 NOD.
 */
var cjsManager = new (function () {
    var cm = this;
    var mapAudios = {};

    /**
     * @method window.playSound
     * @description adobe AnimateCC에서 프레임 사운드를 표현하는 방식입니다. 삭제 금지.
     */
    window.playSound = function (id, loop) {
        var snd = audioManager.get();
        return snd.play(mapAudios[id].src);
    }

    /**
     * @method cjsManager.loadPage
     * @description Lib파일과 관련 페이지를 같이 로딩
     *              funcComplete에 인자로 전달되는 lib 레퍼런스와 페이지 레퍼런스를 이용할 수 있습니다.
     */
    cm.loadPage = function (strLibPath, strSrcPath, funcComplete, funcProgress) {
        cm.loadAnimate(strLibPath, function (lib) {
            cm.loadJS(strSrcPath, function () {
                funcComplete(lib);
            });
        }, onProgress);

        function onProgress(nPerc) {
            if (funcProgress) funcProgress(nPerc)
        }
    }

    /**
     * @method cjsManager.loadJS
     * @description 특정 JS파일을 로딩하는 명령입니다. JSLoader.load 를 이용하셔도 됩니다. 
     */
    cm.loadJS = function (strPath, funcCompleteLoad) {
        JSLoader.load(strPath, funcCompleteLoad);
    }

    /**
     * @method cjsManager.addAudio
     * @description 사운드 파일을 추가한다.
     */
    cm.addAudio = function (manifest) {
        mapAudios[manifest.id] = manifest;
    }

    /**
     * @method cjsManager.loadAnimate
     * @description AnimateCC에서 만들어낸 js파일과 관련 스프라이트,사운드들을 로딩합니다.
     *              funcComplete에 인자로 전달되는 lib 레퍼런스를 이용합니다.
     */
    cm.loadAnimate = function (strPath, funcComplete, funcProgress) {
        cm.loadJS(strPath, function () {
            var key = Object.keys(AdobeAn.compositions)[0];

            var comp = AdobeAn.getComposition(key);
            var loader = new createjs.LoadQueue(true);
            //loader.installPlugin(createjs.Sound);
            /*
            loader.addEventListener("fileload", function (evt) {
                handleFileLoad(evt, comp)
            });*/
            loader.addEventListener("complete", function (evt) {
                onCJSLoadComplete(evt, comp, funcComplete, strPath)
            });
            loader.addEventListener("progress", onProgress);

            // 프로그래스 이벤트 핸들러
            function onProgress(e) {
                if (funcProgress) funcProgress(e.progress);
            }

            loader.addEventListener("error", onError);
            function onError(e) {
                console.log(e)
            }
            var lib = comp.getLibrary();

            var directory = strPath.substr(0, strPath.lastIndexOf("/"));
            if (directory.length != 0) {
                directory += "/";
            }

            // console.log(strPath,"|",directory,"|",lib.properties.manifest);
            for (var i = 0; i < lib.properties.manifest.length; ++i) {
                lib.properties.manifest[i].src = directory + lib.properties.manifest[i].src;
            }

            var arr = [];
            for (var i = 0; i < lib.properties.manifest.length; ++i) {
                var manifest = lib.properties.manifest[i];
                if (lib.properties.manifest[i].src.indexOf("sounds/") < 0) {
                    arr.push(manifest);
                }
                else {
                    mapAudios[manifest.id] = manifest;
                }
            }
            lib.properties.manifest = arr;
            //console.log(lib.properties.manifest);
            //console.log(mapAudios);
            loader.loadManifest(lib.properties.manifest);

            //loader.loadManifest(lib.properties.manifest);
            // AdobeAn = null;
            AdobeAn = {};
            AdobeAn.handleFilterCache = function () { }
        });
    }

    /**
     * @method cjsManager.loadAnimateJSOnly
     * @description AnimateCC에서 만들어낸 js파일을 로딩합니다.
     *              funcComplete에 인자로 전달되는 lib 레퍼런스를 이용합니다.
     */
    cm.loadAnimateJSOnly = function (strPath, funcComplete) {
        cm.loadJS(strPath, function () {
            var key = Object.keys(AdobeAn.compositions)[0];
            var comp = AdobeAn.getComposition(key);
            var lib = comp.getLibrary();
            AdobeAn = null;
            funcComplete(lib);
        });
    }

    // 모든 객체가 로드 완료 되었을 때 호출
    function onCJSLoadComplete(evt, comp, funcComplete, strPath) {
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (var i = 0; i < ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                "images": [queue.getResult(ssMetadata[i].name)],
                "frames": ssMetadata[i].frames
            })
        }
        //console.log(queue, ss, ssMetadata);
        if (funcComplete) funcComplete(lib);
    }
})();

