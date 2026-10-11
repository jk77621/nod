/**
 * @class charManager
 * @classdesc 캐릭터 클래스
 */
charManager = new (function () {
    let p = this;

    let m_mcThis, m_mcCharSet, m_mcSmoke;

    let m_nJumpCount = 0;

    /**
     * @method charManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     */
    p.init = function (mcThis) {
        m_mcThis = mcThis;
        m_mcCharSet = m_mcThis.mcCharSet;
        m_mcSmoke = m_mcThis.mcSmoke;
    }

    /**
     * @method charManager.jumpWrong
     * @description 점프 오답
     * @param {Function} funcComplete 완료 콜백
     */
    p.jumpWrong = function (funcComplete) {
        m_mcCharSet.gotoAndStop(2);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.jump
     * @description 기본 점프
     * @param {Function} funcComplete 완료 콜백
     */
    p.jump = function (funcComplete) {
        let mcCurrBlock = blockManager.getCurrBlock();
        let mcNextBlock = blockManager.getNextBlock();
        let ptLocal = new createjs.Point(mcNextBlock.getChildAt(0).mcChaArea.x, mcNextBlock.getChildAt(0).mcChaArea.y);
        let ptGlobal = mcNextBlock.getChildAt(0).localToGlobal(ptLocal.x, ptLocal.y);
        let bStop = m_nJumpCount < 2;

        jumpSmoke(mcCurrBlock);

        if (bStop) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x, y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        } else {
            blockManager.move();
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x - blockManager.getBlockGap(), y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        }

        m_mcCharSet.gotoAndStop(1);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            m_nJumpCount++;
            switch (mcNextBlock.type) {
                case -1:
                    onCompleteJump();
                    break;
                case 6:
                    arriveSpring(mcNextBlock, onCompleteSpring);
                    function onCompleteSpring() {
                        p.springJump(0, 2, onCompleteJump);
                    }
                    break;
                case 7:
                    arriveKongKongi(mcNextBlock, onCompleteKongKongi);
                    function onCompleteKongKongi() {
                        p.kongkongiJump(onCompleteJump);
                    }
                    break;
                case 8:
                    arriveBox(mcNextBlock, onCompleteBox);
                    function onCompleteBox() {
                        quesManager.show();
                        quesManager.onCompleteQues = onCompleteQues;
                    }

                    function onCompleteQues(bAnswer) {
                        step1.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                        step1.setCurCount(step1.getCurCount() + 1);
                        if (bAnswer) {
                            quesRight(mcNextBlock, onCompleteRight);
                            function onCompleteRight() {
                                p.quantumJump(0, 4, onCompleteJump);
                            }
                        } else {
                            quesWrong(mcNextBlock, onCompleteJump);
                        }
                    }
                    break;
            }
        }

        function onCompleteJump() {
            if (funcComplete) funcComplete();
        }
    }

    /**
     * @method charManager.springJump
     * @description 스프링 점프
     * @param {Number} n1 현재 진행 카운트
     * @param {Number} n2 총 카운트
     * @param {Function} funcComplete 완료 콜백
     */
    p.springJump = function (n1, n2, funcComplete) {
        let mcCurrBlock = blockManager.getCurrBlock();
        let mcNextBlock = blockManager.getNextBlock();
        let ptLocal = new createjs.Point(mcNextBlock.getChildAt(0).mcChaArea.x, mcNextBlock.getChildAt(0).mcChaArea.y);
        let ptGlobal = mcNextBlock.getChildAt(0).localToGlobal(ptLocal.x, ptLocal.y);
        let bStop = m_nJumpCount < 2;

        jumpSmoke(mcCurrBlock);

        if (bStop) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x, y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        } else {
            blockManager.move();
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x - blockManager.getBlockGap(), y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        }

        m_mcCharSet.gotoAndStop(4);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            m_nJumpCount++;
            switch (mcNextBlock.type) {
                case -1:
                    onCompleteJump();
                    break;
                case 6:
                    arriveSpring(mcNextBlock, onCompleteSpring);
                    function onCompleteSpring() {
                        p.springJump(0, 2, onCompleteJump);
                    }
                    break;
                case 7:
                    arriveKongKongi(mcNextBlock, onCompleteKongKongi);
                    function onCompleteKongKongi() {
                        p.kongkongiJump(onCompleteJump);
                    }
                    break;
                case 8:
                    arriveBox(mcNextBlock, onCompleteBox);
                    function onCompleteBox() {
                        quesManager.show();
                        quesManager.onCompleteQues = onCompleteQues;
                    }

                    function onCompleteQues(bAnswer) {
                        step1.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                        step1.setCurCount(step1.getCurCount() + 1);
                        if (bAnswer) {
                            quesRight(mcNextBlock, onCompleteRight);
                            function onCompleteRight() {
                                p.quantumJump(0, 4, onCompleteJump);
                            }
                        } else {
                            quesWrong(mcNextBlock, onCompleteJump);
                        }
                    }
                    break;
            }
        }

        function onCompleteJump() {
            if (n1 == n2 - 1) {
                if (funcComplete) funcComplete();
            } else {
                p.springJump(n1 + 1, n2, funcComplete);
            }
        }
    }

    /**
     * @method charManager.kongkongiJump
     * @description 콩콩이 점프
     * @param {Function} funcComplete 완료 콜백
     */
    p.kongkongiJump = function (funcComplete) {
        let mcCurrBlock = blockManager.getCurrBlock();
        let mcNextBlock = blockManager.getNextBlock();
        let ptLocal = new createjs.Point(mcNextBlock.getChildAt(0).mcChaArea.x, mcNextBlock.getChildAt(0).mcChaArea.y);
        let ptGlobal = mcNextBlock.getChildAt(0).localToGlobal(ptLocal.x, ptLocal.y);
        let bStop = m_nJumpCount < 2;

        jumpSmoke(mcCurrBlock);

        if (bStop) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x, y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        } else {
            blockManager.move();
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x - blockManager.getBlockGap(), y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        }

        m_mcCharSet.gotoAndStop(3);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            m_nJumpCount++;
            switch (mcNextBlock.type) {
                case -1:
                    onCompleteJump();
                    break;
                case 6:
                    arriveSpring(mcNextBlock, onCompleteSpring);
                    function onCompleteSpring() {
                        p.springJump(0, 2, onCompleteJump);
                    }
                    break;
                case 7:
                    arriveKongKongi(mcNextBlock, onCompleteKongKongi);
                    function onCompleteKongKongi() {
                        p.kongkongiJump(onCompleteJump);
                    }
                    break;
                case 8:
                    arriveBox(mcNextBlock, onCompleteBox);
                    function onCompleteBox() {
                        quesManager.show();
                        quesManager.onCompleteQues = onCompleteQues;
                    }

                    function onCompleteQues(bAnswer) {
                        step1.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                        step1.setCurCount(step1.getCurCount() + 1);
                        if (bAnswer) {
                            quesRight(mcNextBlock, onCompleteRight);
                            function onCompleteRight() {
                                p.quantumJump(0, 4, onCompleteJump);
                            }
                        } else {
                            quesWrong(mcNextBlock, onCompleteJump);
                        }
                    }
                    break;
            }
        }

        function onCompleteJump() {
            if (funcComplete) funcComplete();
        }
    }

    /**
    * @method charManager.quantumJump
    * @description 퀀텀 점프
    * @param {Number} n1 현재 진행 카운트
    * @param {Number} n2 총 카운트
    * @param {Function} funcComplete 완료 콜백
    */
    p.quantumJump = function (n1, n2, funcComplete) {
        let mcCurrBlock = blockManager.getCurrBlock();
        let mcNextBlock = blockManager.getNextBlock();
        let ptLocal = new createjs.Point(mcNextBlock.getChildAt(0).mcChaArea.x, mcNextBlock.getChildAt(0).mcChaArea.y);
        let ptGlobal = mcNextBlock.getChildAt(0).localToGlobal(ptLocal.x, ptLocal.y);
        let bStop = m_nJumpCount < 2;

        jumpSmoke(mcCurrBlock);

        if (bStop) {
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x, y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        } else {
            blockManager.move();
            createjs.Tween.get(m_mcCharSet, { useTicks: true }).to({ x: ptGlobal.x - blockManager.getBlockGap(), y: ptGlobal.y }, 25, createjs.Ease.cubicOut);
        }

        m_mcCharSet.gotoAndStop(6);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            m_nJumpCount++;
            switch (mcNextBlock.type) {
                case -1:
                    onCompleteJump();
                    break;
                case 6:
                    arriveSpring(mcNextBlock, onCompleteSpring);
                    function onCompleteSpring() {
                        p.springJump(0, 2, onCompleteJump);
                    }
                    break;
                case 7:
                    arriveKongKongi(mcNextBlock, onCompleteKongKongi);
                    function onCompleteKongKongi() {
                        p.kongkongiJump(onCompleteJump);
                    }
                    break;
                case 8:
                    arriveBox(mcNextBlock, onCompleteBox);
                    function onCompleteBox() {
                        quesManager.show();
                        quesManager.onCompleteQues = onCompleteQues;
                    }

                    function onCompleteQues(bAnswer) {
                        step1.setData(step1.getCurCount(), bAnswer ? 0 : 1);
                        step1.setCurCount(step1.getCurCount() + 1);
                        if (bAnswer) {
                            quesRight(mcNextBlock, onCompleteRight);
                            function onCompleteRight() {
                                p.quantumJump(0, 4, onCompleteJump);
                            }
                        } else {
                            quesWrong(mcNextBlock, onCompleteJump);
                        }
                    }
                    break;
            }
        }

        function onCompleteJump() {
            if (n1 == n2 - 1) {
                if (funcComplete) funcComplete();
            } else {
                p.quantumJump(n1 + 1, n2, funcComplete);
            }
        }
    }

    // 점프 연기 애니메이션
    function jumpSmoke(mcBlock, funcComplete) {
        if (m_nJumpCount > 0) {
            m_mcSmoke.x = 0;
            m_mcSmoke.y = 0;
            mcBlock.getChildAt(0).mcChaArea.addChild(m_mcSmoke);
        } else {
            m_mcSmoke.x = m_mcCharSet.x;
            m_mcSmoke.y = m_mcCharSet.y;
        }
        m_mcSmoke.gotoAndPlay(1);
        util.getClipFrameComplete(m_mcSmoke, function () { });
        if (funcComplete) funcComplete();
    }

    // 스프링 도착 애니메이션
    function arriveSpring(mcBlock, funcComplete) {
        mcBlock.getChildAt(0).gotoAndStop(1);
        mcBlock.getChildAt(0).getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(0).getChildAt(0), function () { });
        if (funcComplete) funcComplete();
    }

    // 콩콩이 도착 애니메이션
    function arriveKongKongi(mcBlock, funcComplete) {
        mcBlock.getChildAt(0).gotoAndStop(1);
        mcBlock.getChildAt(0).getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(0).getChildAt(0), function () { });
        if (funcComplete) funcComplete();
    }

    // 선물 상자 도착 애니메이션
    function arriveBox(mcBlock, funcComplete) {
        mcBlock.getChildAt(0).mcChaArea.getChildAt(0).gotoAndStop(1);
        mcBlock.getChildAt(0).mcChaArea.getChildAt(0).getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(0).mcChaArea.getChildAt(0).getChildAt(0), function () { });

        m_mcCharSet.gotoAndStop(5);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            if (funcComplete) funcComplete();
        }
    }

    // 퀴즈 정답 애니메이션
    function quesRight(mcBlock, funcComplete) {
        let mcBox = mcBlock.getChildAt(0).mcChaArea.getChildAt(0);

        m_mcThis.addChildAt(mcBox, 6);

        mcBox.addEventListener("tick", onTickBox);
        function onTickBox(e) {
            let ptGlobal = new createjs.Point(mcBlock.getChildAt(0).mcChaArea.x, mcBlock.getChildAt(0).mcChaArea.y);
            let ptLocal = mcBlock.getChildAt(0).mcChaArea.parent.localToGlobal(ptGlobal.x, ptGlobal.y);
            mcBox.x = ptLocal.x;
            mcBox.y = ptLocal.y;
        }

        mcBox.gotoAndStop(2);
        mcBox.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBox.getChildAt(0), function () {
            mcBox.removeEventListener("tick", onTickBox);
            mcBox.x = 0;
            mcBox.y = 0;
            mcBlock.getChildAt(0).mcChaArea.addChild(mcBox);
        });

        m_mcCharSet.gotoAndStop(0);
        if (funcComplete) funcComplete();
    }

    // 퀴즈 오답 애니메이션
    function quesWrong(mcBlock, funcComplete) {
        mcBlock.getChildAt(0).mcChaArea.getChildAt(0).gotoAndStop(3);
        mcBlock.getChildAt(0).mcChaArea.getChildAt(0).getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(mcBlock.getChildAt(0).mcChaArea.getChildAt(0).getChildAt(0), function () { });

        m_mcCharSet.gotoAndStop(7);
        m_mcCharSet.getChildAt(0).gotoAndPlay(1);
        util.getClipFrameComplete(m_mcCharSet.getChildAt(0), onCompleteChar);
        function onCompleteChar() {
            m_mcCharSet.gotoAndStop(0);
            if (funcComplete) funcComplete();
        }
    }
})();