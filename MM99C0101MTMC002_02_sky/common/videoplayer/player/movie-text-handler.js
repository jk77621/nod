function MovieTextHandler() {
    var p = this;

    var arrData = [];
    var fastMapData;

    p.setTexts = function (arr) {
        arrData = arr || [];
        //ArrayUtil.sortOn(arrData,"start");      
        fastMapData = new FastTimeMap(arrData);
    }

    p.tickMovieText = function (sec) {
        if (!fastMapData) return;
        var textStart = fastMapData.getInStartEnd(sec);
        if (textStart) {
            if (p.objCurTextInfo != textStart) {
                p.objCurTextInfo = textStart;
                p.dispatchEvent("onTextStart", textStart);
            }
        }
        else {
            if (p.objCurTextInfo != null) {
                p.dispatchEvent("onTextEnd", p.objCurTextInfo);
                p.objCurTextInfo = null;
            }
        }
    }

};