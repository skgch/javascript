(function(){
    'use strict';
    var priceForm = document.getElementById('price');
    var numForm = document.getElementById('num');
    var btn = document.getElementById('btn');
    var result = document.getElementById('result');

    priceForm.addEventListener('click', function() {
        this.select();
    });

    numForm.addEventListener('click', function() {
        this.select();
    });
    
    btn.addEventListener('click', function(){
        var price = priceForm.value;
        var num = numForm.value;
    if(price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)){
        if(price % num === 0) {
            result.innerHTML = '一人' + (price / num) + '円ちょうどです！';
        } else {
            var unit = 100;
            var x1 = Math.floor(price / num / unit) * unit
            var y1 = price - (x1 * num);
            var x2 = Math.ceil(price / num / unit) * unit
            var y2 = (x2 * num) - price;
            result.innerHTML = 
                '一人' + x1 + '円だと' + y1 + '円足りません。<br>' +
                '一人' + x2 + '円だと' + y2 + '円余ります。';
            
        }
    } else {
        result.innerHTML = '入力された値に誤りがあります。';
    }
    });
})();
 