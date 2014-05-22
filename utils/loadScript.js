(function (window) {
    var finish = function (elem, callback) {

        if (isIE) {
            elem.onreadystatechange = function() {
                if (this.readyState == 'loaded' || this.readyState == 'complete') {
                    callback();
                }
            };
        } else {
            elem.onload = function() {
                callback();
            };
        }

        elem.onerror = function () {
            alert('加载失败，请刷新后重试！');
        };
            
        };
        
    var loadScript = function (url, done, callback) {

        if(done) {
            callback();
            return false;
        }

        var script = parent.document.createElement('script'),
            head = parent.document.getElementsByTagName('head')[0];

        script.type = "text/javascript";
        script.src = url;
        script.async = true;
        script.defer = true;
        head.appendChild(script);
        finish(script, callback);
    };
    
    window.loadScript = loadScript;
    
})(window)