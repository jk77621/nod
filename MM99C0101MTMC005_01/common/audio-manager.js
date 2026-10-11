/**
 * @class audioManager
 * @classdesc AutioUtil 관리 클래스
 *            사운드를 순환버퍼 형태로 여러개 만들어 놓고 성능 개선        
 *            coypright (c) 2016- 2020 NOD.
 */
var audioManager = new (function () {
    var p = this;
    var nAudioIndex = 0;
    var arrEffectAudios = [];
    for (var i = 0; i < 10; ++i) {
        var ao = new AudioItem();
        ao.name = "eff_" + i;
        arrEffectAudios.push(ao);
    }

    var bgm = new AudioItem();
    bgm.name = "bgm0";

    var nIDTimerBGM = 0;
    var oldPathBGM = "";

    /**
     * @method audioManager.stop
     * @description 사운드 멈춤
     *              인자에 아무것도 넣지 않으면 모든 사운드 멈춤
     */
    p.stop = function (path) {
        if (!path) path = "";
        var len = arrEffectAudios.length;
        if (path.length == 0) {
            for (var i = 0; i < len; ++i) {
                arrEffectAudios[i].stop();
            }
        }
        else {
            for (var i = 0; i < len; ++i) {
                var audio = arrEffectAudios[i];
                if (audio.path == path) audio.stop();
            }
        }
    }

    /**
     * @method audioManager.pause
     * @description 사운드 중지
     *              인자에 아무것도 넣지 않으면 모든 사운드 중지
     */
    p.pause = function (path) {
        if (!path) path = "";
        var len = arrEffectAudios.length;
        if (path.length == 0) {
            for (var i = 0; i < len; ++i) {
                arrEffectAudios[i].pause();
            }
            // if (bgm) bgm.pause();
        }
        else {
            for (var i = 0; i < len; ++i) {
                var audio = arrEffectAudios[i];
                if (audio.path == path) audio.pause();
            }
        }
    }

    /**
     * @method audioManager.resume
     * @description 사운드 재개
     *              인자에 아무것도 넣지 않으면 모든 사운드 재개
     */
    p.resume = function (path) {
        if (!path) path = "";
        var len = arrEffectAudios.length;
        if (path.length == 0) {
            for (var i = 0; i < len; ++i) {
                arrEffectAudios[i].resume();
            }
            // if (bgm) bgm.resume();
        }
        else {
            for (var i = 0; i < len; ++i) {
                var audio = arrEffectAudios[i];
                if (audio.path == path) audio.resume();
            }
        }
    }

    /**
     * @method audioManager.get
     * @description 오디오 파일을 가져온다.
     */
    p.get = function () {
        var n = nAudioIndex;
        // 사운드가 재생중이지 않은 파일을 찾아서 그 파일로 플래이
        var findCnt = 0;
        var audio;
        while (true) {
            if (++n >= arrEffectAudios.length) n = 0;
            audio = arrEffectAudios[n];
            // console.log( "audio_name", audio.name );
            if (!audio.playing) {
                nAudioIndex = n;
                //console.log(n);
                break;
            }
            if (++findCnt > arrEffectAudios.length) {
                console.error("사운드 버퍼의 한계치" + arrEffectAudios.length + " 보다 많은 갯수의 사운드가 동시 재생되고 있습니다.\n버퍼의 갯수를 늘여주세요.");
                break;
            }
        }
        return audio;
    }

    /**
     * @method audioManager.clearEnded
     * @description 기존 onEnded 이벤트를 제거.
     */
    p.clearEnded = function (path) {
        if (!path) path = "";
        var len = arrEffectAudios.length;
        if (path.length == 0) {
            for (var i = 0; i < len; ++i) {
                arrEffectAudios[i].onEnded = null;
            }
        }
        else {
            for (var i = 0; i < len; ++i) {
                var audio = arrEffectAudios[i];
                if (audio.path == path) audio.onEnded = null;
            }
        }
    }

    /**
     * @method audioManager.playBGM
     * @description BGM 재생
     */
    p.playBGM = function (path, volume) {
        if (!volume) volume = 0.1;
        if (path == oldPathBGM) {
            bgm.volume = volume;
            return;
        }

        bgm.volume = volume;
        bgm.play(path, volume);
        bgm.onEnded = function () {
            bgm.play(path, volume);
        }

        oldPathBGM = path;
    }

    /**
     * @method audioManager.stopBGM
     * @description BGM 멈춤
     */
    p.stopBGM = function () {
        bgm.stop();
    }

    /**
     * @method audioManager.pauseBGM
     * @description BGM 중지
     */
    p.pauseBGM = function () {
        bgm.pause();
    }

    /**
     * @method audioManager.resumeBGM
     * @description BGM 재개
     */
    p.resumeBGM = function () {
        bgm.resume();
    }

    // p.playBGM = function (path, volume) {        
    //     if (!volume) volume = 0.1;
    //     if (path == oldPathBGM) {
    //         bgm.volume = volume;
    //         return;
    //     }
    //     clearTimeout(nIDTimerBGM);
    //     bgm.onEnded = function() {
    //         nIDTimerBGM = setTimeout(function (p,v) {
    //             bgm.volume = v;
    //             bgm.play(p);
    //         }, 1000,path,volume);
    //     }
    //     bgm.play(path);
    //     oldPathBGM = path;
    // }
})();