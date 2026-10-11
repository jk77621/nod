/**
 * @class external
 * @classdesc 비상 api 관리 클래스
 *            coypright (c) 2021 - 2022 NOD.
 */
var external;
(function (p) {
    var m_bCompleteUnit = false;

    /**
     * @method external.funcCallback
     * @description 콜백
     */
    p.funcCallback = null;

    /**
     * @method external.completeUnit
     * @description 유닛 완료를 런처에 전달한다.
     * @description 중복 호출을 막기 위해 재호출 시 리턴처리
     * @param {Function} funcComplete 완료 콜백
     */
    p.completeUnit = function (funcComplete) {
        if (m_bCompleteUnit) return;

        m_bCompleteUnit = true;

        if (swm) swm.callOnlyone("jsStudyComplete");
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.completeUnitForQuiz
     * @description 유닛 완료를 런처에 전달한다. (퀴즈)
     * @description 중복 호출을 막기 위해 재호출 시 리턴처리
     * @param {Number} nTotalStepCount 전체문항수
     * @param {Number} nFirstStepCount 최초정답문항수
     * @description 한번에 정답을 맞춘 문항수 ("X,X,O", "O", "X,O", "O" -> 2)
     * @param {Array} arrDTO 데이터 객체 배열
     * @description [{ itemNo: 1, itemHist: "X,X,O", itemDuration: 12, itemResult: "O" }, { itemNo: 2, itemHist: "O", itemDuration: 3, itemResult: "O" }]
     * @description int itemNo 문항 번호
     * @description string itemHist 문항별 정오 이력 (X,X,X,O)
     * @description int itemDuration 소요 시간 (초)
     * @description string itemResult 문항 답변 (최종)
     * @param {Function} funcComplete 완료 콜백
     */
    p.completeUnitForQuiz = function (nTotalStepCount, nFirstStepCount, arrDTO, funcComplete) {
        if (m_bCompleteUnit) return;

        m_bCompleteUnit = true;

        var json = { itemCount: nTotalStepCount, itemFirstCorrectCount: nFirstStepCount, indexDetailDTO: arrDTO };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsStudyCompleteWithData", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.completeUnitForDiag
     * @description 유닛 완료를 런처에 전달한다. (진단평가)
     * @description 중복 호출을 막기 위해 재호출 시 리턴처리
     * @param {String} sCourse 진단코스
     * @param {Array} arrDTO 데이터 객체 배열
     * @description [{ itemNo: 1, itemHist: "X,X,O", itemDuration: 12, itemResult: "O" }, { itemNo: 2, itemHist: "O", itemDuration: 3, itemResult: "O" }]
     * @description int itemNo 문항 번호
     * @description string itemHist 문항별 정오 이력 (X,X,X,O)
     * @description int itemDuration 소요 시간 (초)
     * @description string itemResult 문항 답변 (최종)
     * @param {Function} funcComplete 완료 콜백
     */
    p.completeUnitForDiag = function (sCourse, arrDTO, funcComplete) {
        if (m_bCompleteUnit) return;

        m_bCompleteUnit = true;

        var json = { diagnosisCourse: sCourse, indexDetailDTO: arrDTO };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsStudyCompleteWithData", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.startAmpCheck
     * @description 마이크 입력 레벨 체크용 세팅
     */
    p.startAmpCheck = function () {
        if (swm) swm.callOnlyone("jsAmplitudeStart");
    };

    /**
     * @method external.getAmplitude
     * @description 마이크 입력 레벨 체크
     */
    p.getAmplitude = function (funcChanged) {
        if (swm) swm.callOnlyone("jsRecordAudioAmplitudeGet");
        p.funcCallback = funcChanged;
    };

    /**
     * @method external.startSingleRecord
     * @description 단일 녹음 api 시작
     * @param nUnique (1 ~ 30)고유번호 지정
     */
    p.startSingleRecord = function (nUnique, complete) {
        var json = { fileNo: nUnique };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsRecordAudioStart", jsonToString);
        p.funcCallback = null;
        if (complete) {
            p.funcCallback = complete;
        }
    };

    /**
     * @method external.pauseSingleRecord
     * @description 단일 녹음 api 일시정지
     */
    p.pauseSingleRecord = function () {
        if (swm) swm.callOnlyone("jsRecordAudioPause");
    };

    /**
     * @method external.resumeSingleRecord
     * @description 단일 녹음 api 재시작 (일시정지 상태일때)
     */
    p.resumeSingleRecord = function () {
        if (swm) swm.callOnlyone("jsRecordAudioOnResume");
    };

    /**
     * @method external.stopSingleRecord
     * @description 단일 녹음 api 종료
     */
    p.stopSingleRecord = function (funcRecordResult) {
        if (swm) swm.callOnlyone("jsRecordAudioStop");
        p.funcCallback = funcRecordResult;
    };

    /**
     * @method external.getRecordFileDuration
     * @description 단일 녹음 결과물 재생
     * 현재 이해할수 없지만 녹음 파일 재생 완료 콜백이 없어 해당 길이값의 셋타이머를 사용하여 구현해야 함
     */
    p.getRecordFileDuration = function (funcGetDuration) {
        if (swm) swm.callOnlyone("jsRecordAudioFileGetDuration");
        p.funcCallback = funcGetDuration;
    };

    /**
     * @method external.playRecordResult
     * @description 단일 녹음 결과물 재생
     * @param fileNo number
     * @param seek number
     */
    p.playRecordResult = function (fileNo, seekLength, complete) {
        if (typeof seekLength == "function") {
            complete = seekLength;
            seekLength = undefined;
        }
        seekLength = isNaN(parseInt(seekLength)) ? 0 : seekLength;

        // console.log(seekLength, complete);
        var json = { fileNo: fileNo, seekLength: seekLength };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsRecordAudioFilePlay", jsonToString);
        if (complete) p.funcCallback = complete;
    };

    /**
     * @method external.pauseRecordResult
     * @description 단일 녹음 결과물 일시정지
     */
    p.pauseRecordResult = function () {
        if (swm) swm.callOnlyone("jsRecordAudioFilePause");
    };

    /**
     * @method external.resumeRecordResult
     * @description 단일 녹음 결과물 일시정지 해제
     */
    p.resumeRecordResult = function () {
        if (swm) swm.callOnlyone("jsRecordAudioFileOnResume");
    };

    /**
     * @method external.stopRecordResult
     * @description 단일 녹음 결과물 정지
     */
    p.stopRecordResult = function () {
        if (swm) swm.callOnlyone("jsRecordAudioFileStop");
    };

    /**
     * @method external.uploadRecordResult
     * @description 단일 녹음 결과물 업로드 요청
     */
    p.uploadRecordResult = function (fileNo, complete) {
        var json = { fileNo: fileNo };
        var jsonToString = JSON.stringify(json);
        if (swm) swm.callOnlyone("jsAudioFileUpload", jsonToString);
        if (complete) p.funcCallback = complete;
    };

    /**
     * @method external.initCamView
     * @description 카메라 초기화
     * @description 프리뷰 (미리보기, 녹화)
     * @description 비디오뷰 (녹화 결과물)
     * @description 카메라는 무조건 레이어 최하단에 위치
     * @param {Number} nPreWidth 프리뷰 너비
     * @param {Number} nPreHeight 프리뷰 높이
     * @param {Number} nPreX 프리뷰 X 좌표
     * @param {Number} nPreY 프리뷰 Y 좌표
     * @param {Number} nVideoWidth 비디오뷰 너비
     * @param {Number} nVideoHeight 비디오뷰 높이
     * @param {Number} nVideoX 비디오뷰 X 좌표
     * @param {Number} nVideoY 비디오뷰 Y 좌표
     * @param {Function} funcComplete 완료 콜백
     */
    p.initCamView = function (nPreWidth, nPreHeight, nPreX, nPreY, nVideoWidth, nVideoHeight, nVideoX, nVideoY, funcComplete) {
        var json = {
            pre_width: nPreWidth,
            pre_height: nPreHeight,
            pre_margin_left: nPreX,
            pre_margin_top: nPreY,
            video_width: nVideoWidth,
            video_height: nVideoHeight,
            video_margin_left: nVideoX,
            video_margin_top: nVideoY,
        };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsExCamViewInit", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.startCamPreview
     * @description 카메라 미리보기 시작
     */
    p.startCamPreview = function () {
        if (swm) swm.callOnlyone("jsExPreviewStart");
    };

    /**
     * @method external.stopCamPreview
     * @description 카메라 미리보기 정지
     */
    p.stopCamPreview = function () {
        if (swm) swm.callOnlyone("jsExPreviewStop");
    };

    /**
     * @method external.startCamRecord
     * @description 카메라 녹화 시작
     * @description 녹화 시작 후 녹화 기본 설정으로 인한 지연이 있으므로 콜백을 받은 후 정지 호출
     * @param {Number} nFileNumber 동영상 고유번호 (1 ~ 10까지 지정 가능)
     * @param {Function} funcComplete 완료 콜백
     */
    p.startCamRecord = function (nFileNumber, funcComplete) {
        var json = { fileNo: nFileNumber };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsExCamRecordStart", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.stopCamRecord
     * @description 카메라 녹화 정지
     * @description 녹화 완료 후 파일 생성시간이 있으므로 콜백을 받은 후 재생 호출
     * @param {Function} funcComplete 완료 콜백
     */
    p.stopCamRecord = function (funcComplete) {
        if (swm) swm.callOnlyone("jsExCamRecordStop");
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.playCamRecordResult
     * @description 카메라 녹화 결과물 재생
     * @param {Number} nFileNumber 동영상 고유번호 (1 ~ 10까지 지정 가능)
     */
    p.playCamRecordResult = function (nFileNumber) {
        var json = { fileNo: nFileNumber };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsExRecordVideoPlay", jsonToString);
    };

    /**
     * @method external.pauseCamRecordResult
     * @description 카메라 녹화 결과물 일시정지
     */
    p.pauseCamRecordResult = function () {
        if (swm) swm.callOnlyone("jsExRecordVideoPause");
    };

    /**
     * @method external.uploadImageResult
     * @description 이미지 결과물 업로드 요청
     * @param {Number} nFileNumber 이미지 고유번호 (1 ~ 30까지 지정 가능)
     * @param {String} sBase64Image Base 64로 인코딩된 이미지 데이터
     * @param {Function} funcComplete 완료 콜백
     */
    p.uploadImageResult = function (nFileNumber, sBase64Image, funcComplete) {
        var json = { fileNo: nFileNumber, imageData: sBase64Image };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsImageFileUpload", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.uploadCamRecordResult
     * @description 카메라 녹화 결과물 업로드 요청
     * @param {Number} nFileNumber 동영상 고유번호 (1 ~ 10까지 지정 가능)
     * @param {Function} funcComplete 완료 콜백
     */
    p.uploadCamRecordResult = function (nFileNumber, funcComplete) {
        var json = { fileNo: nFileNumber };
        var jsonToString = JSON.stringify(json);

        if (swm) swm.callOnlyone("jsVideoFileUpload", jsonToString);
        p.funcCallback = funcComplete;
    };

    /**
     * @method external.selvysrStart
     * @description 셀바스 음성인식을 시작
     * @param datfileName 셀바스 파일명
     * @param nUnique (1 ~ 30)고유번호 지정
     */
    p.selvysrStart = function (fileName, nUnique, callback) {
        //파일고유번호 알아보기
        var json = { fileName: fileName, fileNo: nUnique };
        var jsonToString = JSON.stringify(json);
        swm.callOnlyone("jsSelvysrStart", jsonToString);
        external.funcCallback = callback;
    };

    /**
     * @method external.selvysrUpload
     * @description 셀바스 음성인식을 시작
     * @param nUnique (1 ~ 30)고유번호
     */
    p.selvysrUpload = function (nUnique, callback) {
        //파일고유번호 알아보기
        var json = { fileNo: nUnique };
        var jsonToString = JSON.stringify(json);
        swm.callOnlyone("jsSelvysrUpload", jsonToString);
        external.funcCallback = callback;
    };

    /**
     * @method external.studentName
     * @description 학습중인 학생의 이름을 반환
     */
    p.studentName = function (callback) {
        swm.callOnlyone("jsStudentName");
        external.funcCallback = callback;
    };

    /**
     * @method external.selvyWritingRecog
     * @description 셀바스 필기인식을 시작
     * @param {Array} arrAnswer
     * @param {Array} arrInks 
     * @param {Function} callback 
     */
    p.selvyWritingRecog = function (arrAnswer, arrInks, callback, includeNumber = false) {
        ///////////////////////////////////////////////////////////////////
        //fixme:플레이어?
        const dataJson = {
            "language": "ko_KR",
            "inks": arrInks,
            "maxCandidateCount": "5",
            "userSymbol": "",
            "userConfig": {
                "minPoint": 1,
                "maxPoint": 1000,
                "minStroke": 1,
                "maxStroke": 30,
                "writingMode": "single"
            },
            "includeNative": false,
            "includeEnglish": false,
            "includeNumber": includeNumber,
            "includeSymbol": false,
            "includeHangulJamo": true,
            "useGesture": false,
            "answer": arrAnswer
        }

        //플레이어
        if (p.isPlayer()) {
            p.funcCallback = callback;
            if (swm) swm.callOnlyone("jsSelvyPenRecognize", JSON.stringify(dataJson));
            return;
        }

        ///////////////////////////////////////////////////////////////////
        //로컬
        const serverUrl = "http://3.36.172.169:8080/hwr/recognize";
        const apiKey = "61161e2492fa5a0a1786eec71d49335f11c357c6eaf09df330f06b7cae1b93e3";
        const headers = {
            "Authorization": `Bearer ${apiKey} `,
            "Content-Type": "application/json"
        }
        const objData = {
            headers: headers,
            body: JSON.stringify(dataJson),
            method: "POST"
        };


        fetch(serverUrl, objData)
            .then((data) => { return data.json() })
            .then((result) => {
                // console.log(`[RESPONSE]:${ JSON.stringify(result) } `);
                if (result.hwrErrorCode[0].value === 0) {
                    console.log("pc|" + result["candidates"]);
                    callback(result["candidates"]);
                } else {
                    console.log(`[RESPONSE MESSAGE]:${result.hwrErrorCode[0].message} `);
                    callback([]);
                }
            })
            .catch((error) => {
                console.log(`ERROR|${error}`);
                callback([]);
            })
        ///////////////////////////////////////////////////////////////////
    }

    //셀바스tts 스트리밍
    p.selvyTTSStream = function (strWord, bIsyll = false, nLanguage = 0, nSpeaker = 10, nSpeed = 100) {
        let src =
            // "http://218.145.31.55:8080/speech/stream?" +
            // "language=" + nLanguage + "&" +
            // "speaker=" + nSpeaker + "&" +
            // "format=" + "mp3" + "&" +
            // "text=" + encodeURIComponent(strWord);
            "https://tts.only1.co.kr:8080/speech/stream?" +
            "language=" + nLanguage + "&" +
            "speaker=" + nSpeaker + "&" +
            "speed=" + nSpeed + "&" +
            "format=" + "mp3" + "&" +
            "text=" + encodeURIComponent(bIsyll ? `<isyll pause="200ms">${strWord}</isyll>` : strWord);
        console.log(src);
        return src;
    }


    /**
     * @method external.selvyTTS
     * @description 셀바스 tts 요청
     * @param {string} strWord 합성할 텍스트
     * @param {Function} callback 콜백
     * @param {boolean} bIsyll 컨트롤태그 사용여부 | default : false
     * @param {int} nPause 컨트롤태그 pause 시간(ms) | Default : 200
     * @param {int} nLanguage 언어코드 | ko-KR:0 en-US:1 zh-CN:2 ja-JP:3 es-MX:4 en-GB:5 pt-BR:6 fr-CA:7 | Default : 0
     * @param {int} nSpeaker 화자 | 혜진(10), 아람(2), 마루(7) | Default : 10
     * @param {string} nSpeed 출력 합성음의 속도를 조절 | 범위 50 ~ 120 | Default : 100
     * @param {string} nPitch 출력 합성음의 피치를 조절 |  범위 80 ~ 120 | Default : 100
     * @param {string} strFormat 출력 합성음 포맷 | wav, mp3, pcm ※wav: stream모드에서 사용 불가 | Default : mp3
     */
    p.selvyTTS = function (strWord, callback, bIsyll = false, nPause = 200, nLanguage = 0, nSpeaker = 10, nSpeed = 100, nPitch = 100, strFormat = "mp3") {
        ///////////////////////////////////////////////////////////////////
        // const serverUrl = "http://218.145.31.55:8080/speech/buffer"
        // const apiKey = "61161e2492fa5a0a1786eec71d49335f11c357c6eaf09df330f06b7cae1b93e3";

        // const serverUrl = "http://nlb-an2-prod-only1kids-selvasai-416dee68a092f90f.elb.ap-northeast-2.amazonaws.com:6060/speech/buffer"
        // const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQxMzM5NDgzOTl9.pJhE1g3G8l8vZsDGuYiCjGqjPsgcT7xsOj6flHSLMOs";

        const serverUrl = "https://tts.only1.co.kr:8080/speech/buffer"
        const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQxMzM5NDgzOTl9.pJhE1g3G8l8vZsDGuYiCjGqjPsgcT7xsOj6flHSLMOs";

        const headers = {
            "Authorization": `Bearer ${apiKey} `,
            "Content-Type": "application/json"
        }

        //
        nPause = nPause ? nPause : 200;//퍼즈 default 200
        nSpeed = nSpeed ? nSpeed : 100;//스피드 default 100

        const dataJson = {
            "language": nLanguage,
            "speaker": nSpeaker,
            "format": strFormat,
            // "text": strWord,
            "text": bIsyll ? `<isyll pause="${nPause}ms">${strWord}</isyll>` : strWord,
            "speed": nSpeed,
            "pitch": nPitch
        }
        const objData = {
            headers: headers,
            body: JSON.stringify(dataJson),
            method: "POST"
        };

        // console.log(serverUrl);
        console.log(dataJson);

        fetch(serverUrl, objData)
            .then((data) => { return data })
            .then((result) => {
                // console.log(`[RESPONSE]:${JSON.stringify(result)} `);
                // console.log(result);
                // console.log(result.status);
                switch (result.status) {
                    case 200:
                        result.blob().then((audio) => {
                            // console.log(audio);
                            callback(audio);
                        });
                        break;
                    default:
                        console.error(`status code|${result.status}`);
                        callback();
                        break;
                }
            })
            .catch((error) => {
                console.log(`error|${error}`);
                callback();
            })
        ///////////////////////////////////////////////////////////////////
    }

    p.isPlayer = function () {
        return typeof swm !== "undefined";
    }

})((external = external || {}));

//콜백
function callbackOnlyone(method, dto) {
    var objResult = JSON.parse(dto);
    console.log(method, objResult);
    switch (method) {
        case "jsStudyComplete":
        case "jsStudyCompleteWithData":
        case "jsExCamViewInit":
        case "jsExCamRecordStart":
        case "jsExCamRecordStop":
        case "jsImageFileUpload":
            if (external.funcCallback) external.funcCallback(objResult.result);
            break;

        case "jsRecordAudioAmplitudeGet":
            var objAmplitude = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(objAmplitude.amplitude);
            break;

        case "jsRecordAudioStop":
            if (external.funcCallback) external.funcCallback(objResult.result);
            break;

        case "jsRecordAudioFileGetDuration":
            var objDuration = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(objDuration.duration);
            break;

        case "jsRecordAudioPlayerCallback":
            var res;
            if (objResult.data) res = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(res);
            break;

        case "jsAudioFileUpload":
            if (external.funcCallback) external.funcCallback(objResult);
            break;

        case "jsExRecordVideoCallback":
            var res = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(res);
            break;

        case "jsVideoFileUpload":
            var objURL = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(objURL.url);
            break;
        case "jsSelvysrStart":
            //30초가 넘어갈 경우 빈문자열 예외처리
            if (objResult.data == "") {
                objResult.data = '{ "pronunciation": 0 }';
            }

            var data = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(data);
            break;
        case "jsSelvysrUpload":
            var data = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(data);
            break;

        case "jsRecordAudioStart":
            if (external.funcCallback) external.funcCallback(objResult);
            break;

        case "jsStudentName":
            var objName = JSON.parse(objResult.data);
            if (external.funcCallback) external.funcCallback(objName.studentName);
            break;

        case "jsSelvyPenRecognize":
            // console.log(objResult);
            let result = JSON.parse(objResult.data);
            if (result.hwrErrorCode[0].value === 0) {
                console.log("player|" + result["candidates"]);
                if (external.funcCallback) external.funcCallback(result["candidates"]);
            } else {
                console.log(`[RESPONSE MESSAGE]:${result.hwrErrorCode[0].message} `);
                if (external.funcCallback) external.funcCallback([]);
            }
            break;
    }
}
