(function(){
    'use strict';
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var result = document.getElementById('result');
    var startTime;
    var isStarted = false;

    start.addEventListener('click', function() {
        if(isStarted) {
            return;
        }
        isStarted = true;

        result.className = 'stanby';
        result.textContent = '0.000';
        
        this.className = 'pushed';
        stop.className = '';
        
        startTime = Date.now();
    });

    stop.addEventListener('click', function() {
        if(!isStarted) {
            return;
        }
        isStarted = false;

        result.className = '';

        this.className = 'pushed';
        start.className = '';

        var elapsedTime;
        elapsedTime = (Date.now() - startTime) / 1000;
        result.textContent = elapsedTime.toFixed(3);
        var diff = elapsedTime - 5.0;
        if(Math.abs(diff) < 1.0){
            result.className = 'perfect';
        }
    });
})();