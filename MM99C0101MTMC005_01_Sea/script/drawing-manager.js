/**
 * @class drawingManager
 * @classdesc 드로잉 클래스 ( sliced, highlighter, crayon )
 */
drawingManager = new (function () {
    let p = this;

    let m_mcThis, m_lib, m_mcDrawingArea;

    let m_objPen = { color: "#FF2A30", index: -1, mode: "", size: 50 };
    let m_objPt;

    let m_bitSliced = new createjs.Bitmap('images_add/sliced.png');
    let m_bitCrayon = new createjs.Bitmap('images_add/crayon.png');

    let m_arrPenColor = ["#000000", "#FF3300", "#3399FF"];
    let m_arrCrayonColor = ["#FF2A30", "#FF5700", "#FFDC00", "#00AE2D", "#00B4FF", "#0066FF", "#9F00FF", "#000000"];
    let m_arrSlicedColor = ["#000000", "#9F00FF", "#0066FF", "#00B4FF", "#00AE2D", "#FFDC00", "#FF5700", "#FF2A30"];
    let m_arrHightColor = ["#FF4D4C", "#FF9B53", "#FFE92B", "#D0FF3E", "#76FF60", "#5DD9F4", "#6499F4", "#AB64F4"];
    let m_arrGradientColor = ["#F32A21", "#F54324", "#F86629", "#FA7B2C", "#FFB434", "#FFC32E", "#FFCF29", "#FFF71A", "#FFF01D", "#EEFC21", "#DEFB2A", "#D9FA2C", "#BFF939",
        "#A9F540", "#91F146", "#77EC4E", "#66E952", "#4CE55A", "#36E160", "#23DF73", "#28E180", "#35E6A0", "#3EE9B6", "#46ECC9", "#51F1E8", "#5CF5FF", "#54E0FC", "#45B8F8",
        "#3C9EF5", "#368CF3", "#406AEB", "#485AE6", "#5839DC", "#5F2DD8", "#5F2DD8", "#4E4DE2", "#4167EA", "#3977EF", "#3486F3", "#3C9EF5", "#48BDF9", "#4ECFFB", "#54E0FC",
        "#56F3F2", "#4FF0DF", "#43EBC2", "#38DBA3", "#32E599", "#28E180", "#24DE65", "#38E15F", "#56E657", "#6AEA51", "#98F245", "#7EED4C", "#B9F83B", "#C7F935", "#D9FA2C",
        "#EAFB23", "#F8FC1C", "#FFF71A", "#FFE322", "#FFCF29", "#FFB932", "#FDA231", "#FA7B2C", "#F75927", "#F43F23", "#F32A21"];
    let m_arrStroke = [];

    let m_nOldPt;
    let m_nGradientColor = 0;

    let m_rectLimit;

    /**
     * @method drawingManager.init
     * @description 초기화 설정
     * @param {MovieClip} mcThis 무비클립 객체
     * @param {animateCC library} lib animateCC 라이브러리 객체
     */
    p.init = function (mcThis, lib) {
        m_mcThis = mcThis;
        m_lib = lib;
        m_mcDrawingArea = m_mcThis.mcDrawingArea;
        m_rectLimit = m_mcDrawingArea.nominalBounds;

        let stage = new createjs.Stage();
        m_mcDrawingArea.stage = stage;

        let container = new createjs.Container();
        m_mcDrawingArea.container = container;
        m_mcDrawingArea.container.cache(0, 0, m_mcDrawingArea.nominalBounds.width, m_mcDrawingArea.nominalBounds.height);

        stage.addChild(container);
        m_mcDrawingArea.removeChildAt(1);
        m_mcDrawingArea.addChild(stage);
        m_mcDrawingArea.mouseChildren = false;
        m_mcDrawingArea.mouseEnabled = false;
        m_mcDrawingArea.gotoAndStop(0);
        m_mcDrawingArea.addEventListener("mousedown", onDown);
    }

    /**
     * @method drawingManager.onStartUnselect
     * @method drawingManager.onStartDrawing
     * @method drawingManager.onCompleteDrawing
     * @description 콜백 설정
     */
    p.onStartUnselect;
    p.onStartDrawing;
    p.onCompleteDrawing;

    /**
     * @method drawingManager.setEnabled
     * @description 마우스 활성화를 설정한다.
     * @param {Boolean} bEnabled 활성화 유무
     */
    p.setEnabled = function (bEnabled) {
        m_mcDrawingArea.mouseEnabled = bEnabled;
    }

    /**
     * @method drawingManager.setPen
     * @description 펜을 설정한다.
     * @param {Number} nIndex 팬 인덱스
     * @param {String} sMode 펜 모드
     * @param {Number} nSize 펜 사이즈
     */
    p.setPen = function (nIndex, sMode, nSize) {
        m_nGradientColor = nIndex;

        let sColor = "";
        switch (sMode) {
            case "pen":
                sColor = m_arrPenColor[nIndex];
                break;
            case "sliced":
                sColor = m_arrSlicedColor[nIndex];
                break;
            case "high":
                sColor = m_arrHightColor[nIndex];
                break;
            case "crayon":
                sColor = m_arrCrayonColor[nIndex];
                break;
            case "rainbow":
                sColor = m_arrGradientColor[nIndex];
                break;
            case "eraser":
                sColor = "#FFFFFF";
        }

        m_objPen = {
            color: sColor,
            index: nIndex,
            mode: sMode,
            size: nSize
        };
    }

    /**
     * @method drawingManager.getBit
     * @description 그리기 영역의 비트맵을 가지고 온다.
     */
    p.getBit = function () {
        let bit = new createjs.Bitmap(m_mcDrawingArea.container.cacheCanvas);
        return bit;
    }

    /**
     * @method drawingManager.getStroke
     * @description 그리기한 포인트를 획단위로 가지고 온다.
     */
    p.getStroke = function () {
        return m_arrStroke;
    }

    /**
     * @method drawingManager.clear
     * @description 그리기한 포인트를 획단위로 가지고 온다.
     */
    p.clear = function () {
        m_arrStroke = [];

        m_mcDrawingArea.container.uncache();
        m_mcDrawingArea.container.cache(0, 0, m_mcDrawingArea.nominalBounds.width, m_mcDrawingArea.nominalBounds.height);
    }

    // 드로잉 영역 마우스 다운 이벤트 핸들러
    function onDown(e) {
        let mcDrawingArea = e.currentTarget;
        let ptGlobal = new createjs.Point(e.stageX, e.stageY);
        let ptLocal = mcDrawingArea.container.globalToLocal(ptGlobal.x, ptGlobal.y);

        if (p.onStartUnselect) p.onStartUnselect();
        if (m_objPen.index == -1 || m_objPen.mode == "") return;
        if (p.onStartDrawing) p.onStartDrawing();

        m_nOldPt = ptLocal;

        let arrColor = hexToRgb(m_objPen.color);
        let bit, shape;
        switch (m_objPen.mode) {
            case "pen":
                shape = new createjs.Shape();
                mcDrawingArea.shape = shape;
                mcDrawingArea.shape.mask = m_mcDrawingArea.getChildAt(0);
                mcDrawingArea.shape.alpha = 1;
                mcDrawingArea.shape.graphics.setStrokeStyle(m_objPen.size, "round", "round").beginStroke(m_objPen.color);
                mcDrawingArea.addChild(shape);

                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                mcDrawingArea.container.updateCache("source-over");
                break;
            case "sliced":
                bit = m_bitSliced.clone();
                bit.regX = m_bitSliced.getBounds().width / 2;
                bit.regY = m_bitSliced.getBounds().width / 2;
                bit.scaleX = m_objPen.size / m_bitSliced.getBounds().width;
                bit.scaleY = m_objPen.size * 2 / m_bitSliced.getBounds().width;
                bit.x = ptLocal.x;
                bit.y = ptLocal.y;
                // bit.rotation = 45;
                bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                bit.cache(0, 0, m_bitSliced.getBounds().width, m_bitSliced.getBounds().height);
                mcDrawingArea.container.addChild(bit);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(bit);
                break;
            case "high":
                shape = new createjs.Shape();
                mcDrawingArea.shape = shape;
                mcDrawingArea.shape.alpha = 0.5;
                mcDrawingArea.shape.graphics.setStrokeStyle(m_objPen.size, "round", "round").beginStroke(m_objPen.color);
                mcDrawingArea.addChild(shape);

                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                break;
            case "crayon":
                bit = m_bitCrayon.clone();
                bit.regX = m_bitCrayon.getBounds().width / 2;
                bit.regY = m_bitCrayon.getBounds().width / 2;
                bit.scale = m_objPen.size / m_bitCrayon.getBounds().width;
                bit.x = ptLocal.x;
                bit.y = ptLocal.y;
                bit.rotation = Math.floor(Math.random() * 360);
                bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                bit.cache(0, 0, m_bitCrayon.getBounds().width, m_bitCrayon.getBounds().height);
                mcDrawingArea.container.addChild(bit);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(bit);
                break;
            case "rainbow":
                bit = m_bitCrayon.clone();
                bit.regX = m_bitCrayon.getBounds().width / 2;
                bit.regY = m_bitCrayon.getBounds().width / 2;
                bit.scale = m_objPen.size / m_bitCrayon.getBounds().width;
                bit.x = ptLocal.x;
                bit.y = ptLocal.y;
                bit.rotation = Math.floor(Math.random() * 360);
                bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                bit.cache(0, 0, m_bitCrayon.getBounds().width, m_bitCrayon.getBounds().height);
                mcDrawingArea.container.addChild(bit);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(bit);

                m_objPen.color = m_arrGradientColor[m_nGradientColor];
                if (++m_nGradientColor >= m_arrGradientColor.length) m_nGradientColor = 0;
                break;
            case "pattern":
                bit = new m_lib["mc_pattern" + m_objPen.index];
                bit.regX = bit.nominalBounds.width / 2;
                bit.regY = bit.nominalBounds.width / 2;
                bit.scale = m_objPen.size / bit.getBounds().width;
                bit.x = ptLocal.x;
                bit.y = ptLocal.y;
                bit.rotation = Math.floor(Math.random() * 360);
                bit.getChildAt(2).visible = false;
                bit.getChildAt(0).visible = false;
                // bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                bit.cache(0, 0, bit.nominalBounds.width, bit.nominalBounds.height);
                mcDrawingArea.container.addChild(bit);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(bit);
                break;
            case "eraser":
                shape = new createjs.Shape();
                mcDrawingArea.shape = shape;
                mcDrawingArea.shape.alpha = 1;
                mcDrawingArea.shape.graphics.setStrokeStyle(m_objPen.size, "round", "round").beginStroke(m_objPen.color);
                mcDrawingArea.container.addChild(shape);

                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                mcDrawingArea.container.updateCache("destination-out");
                mcDrawingArea.stage.update();
                break;
        }

        m_objPt = { x: [ptLocal.x], y: [ptLocal.y] }

        mcDrawingArea.addEventListener("pressmove", onMove);
        mcDrawingArea.addEventListener("pressup", onUp);
    }

    // 드로잉 영역 마우스 무브 이벤트 핸들러
    function onMove(e) {
        let mcDrawingArea = e.currentTarget;
        let ptGlobal = new createjs.Point(e.stageX, e.stageY);
        let ptLocal = mcDrawingArea.container.globalToLocal(ptGlobal.x, ptGlobal.y);

        if (ptLocal.x < m_rectLimit.x) { mcDrawingArea.removeEventListener("pressmove", onMove); return; }
        if (ptLocal.y < m_rectLimit.y) { mcDrawingArea.removeEventListener("pressmove", onMove); return; }
        if (ptLocal.x > m_rectLimit.x + m_rectLimit.width) { mcDrawingArea.removeEventListener("pressmove", onMove); return; }
        if (ptLocal.y > m_rectLimit.y + m_rectLimit.height) { mcDrawingArea.removeEventListener("pressmove", onMove); return; }

        let arrColor = hexToRgb(m_objPen.color);
        let bit, nDistance, nn, nCnt, xGap, yGap;
        switch (m_objPen.mode) {
            case "pen":
                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                break;
            case "sliced":
                bit = m_bitSliced.clone();
                nDistance = distanceBetween(m_nOldPt, ptLocal);
                nn = 3;
                nCnt = parseInt(nDistance / nn) + 1;
                xGap = (ptLocal.x - m_nOldPt.x) / nCnt;
                yGap = (ptLocal.y - m_nOldPt.y) / nCnt;
                for (let i = nCnt; i > 0; --i) {
                    bit.regX = m_bitSliced.getBounds().width / 2;
                    bit.regY = m_bitSliced.getBounds().width / 2;
                    bit.scaleX = m_objPen.size / m_bitSliced.getBounds().width;
                    bit.scaleY = m_objPen.size * 2 / m_bitSliced.getBounds().width;
                    bit.x = m_nOldPt.x + (i * xGap);
                    bit.y = m_nOldPt.y + (i * yGap);
                    // bit.rotation = 45;
                    bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                    bit.cache(0, 0, m_bitSliced.getBounds().width, m_bitSliced.getBounds().height);
                    mcDrawingArea.container.addChild(bit);
                    mcDrawingArea.container.updateCache("source-over");
                    mcDrawingArea.container.removeChild(bit);
                }
                m_nOldPt = ptLocal;
                break;
            case "high":
                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                break;
            case "crayon":
                bit = m_bitCrayon.clone();
                nDistance = distanceBetween(m_nOldPt, ptLocal);
                nn = m_objPen.size / 2; // 팬의 두께의 반정도의 크기가 넘어가면 더 그리자
                nCnt = parseInt(nDistance / nn) + 1;
                xGap = (ptLocal.x - m_nOldPt.x) / nCnt;
                yGap = (ptLocal.y - m_nOldPt.y) / nCnt;
                for (let i = nCnt; i > 0; --i) {
                    bit.regX = m_bitCrayon.getBounds().width / 2;
                    bit.regY = m_bitCrayon.getBounds().width / 2;
                    bit.scale = m_objPen.size / m_bitCrayon.getBounds().width;
                    bit.x = m_nOldPt.x + (i * xGap);
                    bit.y = m_nOldPt.y + (i * yGap);
                    bit.rotation = Math.floor(Math.random() * 360);
                    bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                    bit.cache(0, 0, m_bitCrayon.getBounds().width, m_bitCrayon.getBounds().height);
                    mcDrawingArea.container.addChild(bit);
                    mcDrawingArea.container.updateCache("source-over");
                    mcDrawingArea.container.removeChild(bit);
                }
                m_nOldPt = ptLocal;
                break;
            case "rainbow":
                bit = m_bitCrayon.clone();
                nDistance = distanceBetween(m_nOldPt, ptLocal);
                nn = m_objPen.size / 2; // 팬의 두께의 반정도의 크기가 넘어가면 더 그리자
                nCnt = parseInt(nDistance / nn) + 1;
                xGap = (ptLocal.x - m_nOldPt.x) / nCnt;
                yGap = (ptLocal.y - m_nOldPt.y) / nCnt;
                for (let i = nCnt; i > 0; --i) {
                    bit.regX = m_bitCrayon.getBounds().width / 2;
                    bit.regY = m_bitCrayon.getBounds().width / 2;
                    bit.scale = m_objPen.size / m_bitCrayon.getBounds().width;
                    bit.x = m_nOldPt.x + (i * xGap);
                    bit.y = m_nOldPt.y + (i * yGap);
                    bit.rotation = Math.floor(Math.random() * 360);
                    bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                    bit.cache(0, 0, m_bitCrayon.getBounds().width, m_bitCrayon.getBounds().height);
                    mcDrawingArea.container.addChild(bit);
                    mcDrawingArea.container.updateCache("source-over");
                    mcDrawingArea.container.removeChild(bit);
                }

                m_objPen.color = m_arrGradientColor[m_nGradientColor];
                if (++m_nGradientColor >= m_arrGradientColor.length) m_nGradientColor = 0;
                m_nOldPt = ptLocal;
                break;
            case "pattern":
                nDistance = distanceBetween(m_nOldPt, ptLocal);
                nn = m_objPen.size / 1;
                if (nDistance > nn) {
                    bit = new m_lib["mc_pattern" + m_objPen.index];
                    bit.regX = bit.nominalBounds.width / 2;
                    bit.regY = bit.nominalBounds.width / 2;
                    bit.scale = m_objPen.size / bit.getBounds().width;
                    bit.x = ptLocal.x;
                    bit.y = ptLocal.y;
                    bit.rotation = Math.floor(Math.random() * 360);
                    bit.getChildAt(2).visible = false;
                    bit.getChildAt(0).visible = false;
                    // bit.filters = [new createjs.ColorFilter(0, 0, 0, 1, arrColor[0], arrColor[1], arrColor[2], 0)];
                    bit.cache(0, 0, bit.nominalBounds.width, bit.nominalBounds.height);
                    mcDrawingArea.container.addChild(bit);
                    mcDrawingArea.container.updateCache("source-over");
                    mcDrawingArea.container.removeChild(bit);

                    m_nOldPt = ptLocal;
                }
                break;
            case "eraser":
                mcDrawingArea.shape.graphics.lineTo(ptLocal.x, ptLocal.y);
                mcDrawingArea.container.updateCache("destination-out");
                mcDrawingArea.stage.update();
                break;
        }

        m_objPt.x.push(ptLocal.x);
        m_objPt.y.push(ptLocal.y);
    }

    // 드로잉 영역 마우스 업 이벤트 핸들러
    function onUp(e) {
        let mcDrawingArea = e.currentTarget;

        switch (m_objPen.mode) {
            case "pen":
                mcDrawingArea.container.addChild(mcDrawingArea.shape);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(mcDrawingArea.shape);
                break;
            case "sliced":
                break;
            case "high":
                mcDrawingArea.container.addChild(mcDrawingArea.shape);
                mcDrawingArea.container.updateCache("source-over");
                mcDrawingArea.container.removeChild(mcDrawingArea.shape);
                break;
            case "crayon":
                break;
            case "rainbow":
                break;
            case "pattern":
                break;
            case "eraser":
                mcDrawingArea.container.removeChild(mcDrawingArea.shape);
                break;
        }

        let objPt = { ...m_objPt };
        m_arrStroke.push(objPt);

        if (p.onCompleteDrawing) p.onCompleteDrawing();

        mcDrawingArea.removeEventListener("pressmove", onMove);
        mcDrawingArea.removeEventListener("pressup", onUp);
    }

    // 거리를 계산한다.
    function distanceBetween(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    // rgb컬러를 rgba컬러로 변환한다.
    function hexToRgb(hex, alpha) {
        let r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (0 <= alpha && alpha <= 1) {
            return [r, g, b, alpha]
        } else {
            return [r, g, b]
        }
    }
})();