/**
 * @class AudioItem
 * @classdesc html audio 태그 관리 클래스
 *            coypright(c) 2016 - 2020 NOD.
 *            TODO : 재생 위치 관련 이벤트가 있으면 좋지 않을까?
 */
AudioItem = function () {
    var p = this;
    var audio = new Audio();
    audio.autoplay = false;

    p.onEnded = null;
    p.onTimeupdate = null;
    p.startAt = 0;
    p.path = "";

    var curStat = "empty";
    var volume = 1;
    var playbackRate = 1;

    Object.defineProperty(p, "playing", { get: function () { return curStat == "playing"; } });
    Object.defineProperty(p, "duration", { get: function () { return audio.duration; } });
    Object.defineProperty(p, "currentTime", { get: function () { return audio.currentTime; } });

    /**
     * @description 오디오 관련 이벤트 핸들러
     */
    // audio.addEventListener('play', function (ev) {
    //     console.log("play event");
    // });

    var nIDTick = 0;
    function onTick() {
        // console.log(audio.currentTime + " " + audio.duration);
        if (p.onTimeupdate) p.onTimeupdate(audio.currentTime);
    }

    // audio.addEventListener('canplaythrough', function() {
    //   }, false);

    audio.addEventListener('durationchange', function (ev) {
        var t = p.startAt * p.duration;
        // console.log("startAt", p.path, p.startAt, p.duration, t);
        if (p.startAt > 0) {
            audio.currentTime = t;
        }
    });

    audio.addEventListener('playing', function (ev) {
        // audio.volume = volume;
        clearInterval(nIDTick);
        if (p.onTimeupdate == null) return;
        nIDTick = setInterval(onTick, 33);
    });

    audio.addEventListener('pause', function (ev) {
        clearInterval(nIDTick);
    });

    audio.addEventListener('ended', function (ev) {
        clearInterval(nIDTick);
        if (curStat != "playing") return;
        curStat = "ended";
        if (p.onEnded) p.onEnded(p);
    });

    audio.addEventListener('error', function (ev) {
        curStat = "error";
        var error = ev.path[0].error;
        for (var aa in error) {
            console.error(aa + " :" + error[aa]);
        }
    });

    /**
     * @method AudioItem.play
     * @description 오디오 재생
     */
    p.play = function (path, nVolume, bLoop) {
        if (!nVolume) nVolume = volume;

        if (!path) {
            // console.error(arguments);
            return;
        }

        // audio.pause();
        p.path = path;
        audio.src = path;
        audio.volume = nVolume;
        audio.playbackRate = playbackRate;
        // audio.load();

        var promise = audio.play();

        if (promise !== undefined) {
            promise.then(function () {
                // Autoplay started!
                curStat = "playing";
            }).catch(function (error) {
                console.log(path);
                curStat = "error";
                console.error("먼저 문서와 상호 작용하지 않았기 때문에 play() 가 실패했습니다.");
                // Autoplay was prevented. 
                // Show a "Play" button so that user can start playback.
            });
        } else {
            curStat = "playing";
        }
    }

    /**
     * @method AudioItem.pause
     * @description 오디오 중지
     */
    p.pause = function () {
        if (curStat !== "playing") return;
        curStat = "paused";
        audio.pause();
    }

    /**
     * @method AudioItem.resume
     * @description 오디오 재개
     */
    p.resume = function () {
        if (curStat !== "paused") return;
        curStat = "playing";
        audio.play();
    }

    /**
     * @method AudioItem.stop
     * @description 오디오 멈춤
     */
    p.stop = function () {
        curStat = "stoped";
        audio.pause();
        if (!isNaN(audio.duration)) audio.currentTime = 0;
    }

    /**
     * @method AudioItem.seek
     * @description 오디오 현재 시간 설정
     */
    p.seek = function (ms) {
        if (!isNaN(audio.duration)) audio.currentTime = ms;
    }

    /**
     * @method Object.defineProperty
     * @description 오디오 재생 속도 조절
     */
    Object.defineProperty(p, "playbackRate", {
        get: function () {
            return playbackRate;
        },
        set: function (v) {
            if (v < 0.5) v = 0.5;
            if (v > 3) v = 3;
            playbackRate = v;
            audio.playbackRate = playbackRate;
        }
    });

    /**
     * @method Object.defineProperty
     * @description 오디오 재생 볼륨 조절
     */
    Object.defineProperty(p, "volume", {
        get: function () {
            return volume;
        },
        set: function (v) {
            if (v < 0) v = 0;
            if (v > 1) v = 1;
            volume = v;
            audio.volume = volume;
        }
    });
}