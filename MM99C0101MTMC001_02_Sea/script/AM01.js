AM01 = new (function () {
    let m_this = this;

    let m_mcThis;

    let m_arrStep = [];

    /**
     * @method AM01.init
     * @description 초기화 설정
     */
    m_this.init = function () {
        m_mcThis = pageBase.getPageClip();
        m_lib = pageBase.getPageLib();

        m_mcThis.visible = false;

        if (document.getElementsByTagName("head") != null) {
            document.getElementsByTagName("head")[0].insertAdjacentHTML(
                "beforeend",
                '<link rel="stylesheet" href="font/font.css"> />'
            );
        }

        let arrFiles = [
            "script/step0.js", "script/step1.js", "script/bg-manager.js", "script/block-manager.js", "script/char-manager.js",
            "script/ques-manager.js", "script/result-manager.js", "script/tutorial-manager.js", "script/drawing-manager.js", "script/dto-manager.js"
        ];
        JSLoader.loadArr(arrFiles, onCompelteScripts);
        function onCompelteScripts() {
            init();
        }
    }

    // 초기화
    function init() {
        m_mcThis.visible = true;

        // alert("20240216-21-56");

        let mcChild, mcStep;
        for (let i = 0; i < m_mcThis.totalFrames; ++i) {
            m_mcThis.gotoAndStop(i);
            for (let j = 0; j < m_mcThis.numChildren; ++j) {
                mcChild = m_mcThis.getChildAt(j);
                if (mcChild.name == null) continue;
                if (mcChild.name.includes("mcStep")) mcStep = mcChild;
            }

            m_arrStep[i] = {};

            switch (mcStep.name) {
                case "mcStep0":
                    step0.init(mcStep);
                    step0.onCompleteStep = completeStep;

                    m_arrStep[i].step = mcStep;
                    m_arrStep[i].start = step0.start;
                    m_arrStep[i].bgm = "sounds_add/bgm.mp3";
                    m_arrStep[i].bgmVolume = 0.2;
                    break;
                case "mcStep1":
                    step1.init(mcStep, m_lib);
                    step1.onCompleteStep = completeStep;

                    m_arrStep[i].step = mcStep;
                    m_arrStep[i].start = step1.start;
                    m_arrStep[i].bgm = "sounds_add/bgm.mp3";
                    m_arrStep[i].bgmVolume = 0.2;
                    break;
            }
        }

        m_mcThis.gotoAndStop(0);
        startStep();
    }

    // 스텝을 시작한다.
    function startStep() {
        let objStep = m_arrStep[m_mcThis.currentFrame];
        audioManager.playBGM(objStep.bgm, objStep.bgmVolume);
        objStep.start(objStep.step);
    }

    // 스텝을 완료하고 다음 스텝을 시작한다.
    function completeStep() {
        if (m_mcThis.currentFrame == m_mcThis.totalFrames - 1) {
            let nTotalStepCount = dtoManager.getTotalStepCount();
            let nFirstStepCount = dtoManager.getFirstStepCount();
            let arrDTO = dtoManager.getDTO();
            let objDTO = { itemCount: nTotalStepCount, itemFirstCorrectCount: nFirstStepCount, indexDetailDTO: arrDTO };

            console.log(objDTO);

            external.completeUnitForQuiz(nTotalStepCount, nFirstStepCount, arrDTO);
            return;
        }

        m_mcThis.gotoAndStop(m_mcThis.currentFrame + 1);
        startStep();
    }
})();