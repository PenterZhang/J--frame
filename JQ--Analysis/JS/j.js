(function(window,undefined){
    var A = window.document;
    var j = (function(){
        var j = function(O,T){
            return new j.fn.init(O,T,A);
        }
        j.fn = j.prototype = {
            construct:j,
            init:function(O,T,A){
                var that = this;
                that.ele = null;
                that.text = new Array();
                that.length = '';
                if( O.charAt(0) === '#' ){
                    that.ele  = [document.getElementById(O.slice(1))];
                    that.text = that.ele[0].innerHTML;
                    that.length = that.ele.length;
                    return that;
                }else if(O.charAt(0) === '.' ){
                    that.ele = document.getElementsByClassName(O.slice(1));

                    for(var i = 0 ; i < that.ele.length ; i++ ){
                        that.text.push(that.ele[i].innerHTML);
                    }
                    that.length = that.ele.length;
                    return that;
                }else{
                    that.ele = document.getElementsByTagName(O);
                    for(var i = 0 ; i < that.ele.length ; i++ ){
                        that.text.push(that.ele[i].innerHTML);
                    }
                    that.length = that.ele.length;
                    return that;
                }
            }
        }
        j.fn.init.prototype = j.fn;
        return j;
    })();
    window.j = window.z = j;
})(window);