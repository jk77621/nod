function FastTimeMap(arr) {    
    var p = this;    
    p.getInStartEnd = function(t) {        
        var min = 0;
        var max = arr.length - 1;
        var guess;
        var guessTotal=0;
        while(max>=min){
            guess = Math.floor((max+min)/2);
            guessTotal++;           
            if(arr[guess].start <= t && t<=arr[guess].end) {
                //console.log("검색횟수:",guessTotal);                
                oldObj = arr[guess];

                return arr[guess];
            }
            else if(arr[guess].end<t){min=guess+1;}
            else{max=guess-1;}
        }
        return null;        
    }    
}

/*
var UMIC = new (function UniqueIdxCreater2(){
    var p = this;
    var num = 1;
    p.get = function(objMovie){
        if(objMovie.tempMovieIdx == null){
            num++;
            objMovie.tempMovieIdx = num;
        }
        else{
            var n = parseInt(objMovie.tempMovieIdx);
            if(n>num){
                num = n;
            }
            else{
                num++;
                objMovie.tempMovieIdx = num;
            }
        }
    }
})();
*/

var PF_SRT = function() {
    var toSec = function(str) {
        var sec = 0;
        var t = str.split(",");
        if (t[0]) {
            var tt = t[0].split(":");
            sec = parseFloat(tt[0])*3600+parseFloat(tt[1])*60+parseFloat(tt[2]);
        }
        if(t[1]) {
            sec += parseFloat(t[1])/1000;
        }
        return sec;
    }

    var parse  = function(data) {        
        if (typeof(data) != "string") {
            throw "Sorry, Parser accept string only.";
        }
        
        function strip(s) {
            return s.replace(/^\s+|\s+$/g,"");
        }
        
        var srt = data.replace(/\r\n|\r|\n/g, '\n');        
        srt = strip(srt);        
        var srt_ = srt.split('\n\n');        
        var cont = 0;
        var subtitles = [];
        
        for(s in srt_) {
            st = srt_[s].split('\n');
            if(st.length >=2) {        
                var st2 = st[1].split(' --> ');
                var t = st[2];        
                if(st.length > 2) {
                    for(j=3; j < st.length;j++)
                        t += '\n'+st[j];
                }                
                subtitles[cont] = { line : st[0],
                                    startTime : st2[0],
                                    endTime : st2[1],
                                    start: toSec(st2[0]),
                                    end: toSec(st2[1]),
                                    text : t
                                  } 
                cont++;
            }
        }       
        return subtitles;
    }
    return {
        parse: parse
    }
   
}();