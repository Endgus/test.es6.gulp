'use strict';

/*
//Time
function startTime(){
    var tm=new Date();
    var h=tm.getHours();
    var m=tm.getMinutes();
    var s=tm.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time').innerHTML=h+" : "+m+" : "+s;
    t=setTimeout('startTime()',500);
}
function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}
startTime();
*/
var globalYear = new Date().getFullYear() + 1; // переводим конец таймера на следующий год
var get_timer = function get_timer() {
    var finish = new Date(globalYear, 0, 1);
    var start = new Date();
    if (finish > start) {
        var newTime = finish - start;
        var hours = parseInt(newTime / (60 * 60 * 1000));
        if (hours < 10) {
            hours = '0' + hours;
        }
        var minut = parseInt(newTime / (60 * 1000) % 60);
        if (minut < 10) {
            minut = '0' + minut;
        }
        var sec = parseInt(newTime / 1000 % 60);
        if (sec < 10) {
            sec = '0' + sec;
        }
        document.getElementById('time').innerHTML = hours + " : " + minut + " : " + sec;
        setTimeout(get_timer, 1000);
    } else {
        alert('\u0421 \u041D\u043E\u0432\u044B\u043C ' + globalYear + ' \u0413\u043E\u0434\u043E\u043C!!!');
        var soundClick = function soundClick() {
            var audio = new Audio(); // Создаём новый элемент Audio
            audio.src = 'images/1.mp3'; // Указываем путь к звуку "клика"
            audio.autoplay = true; // Автоматически запускаем
        };
        soundClick();
    }
};

window.onload = function () {
    get_timer();

    var flag = 0;
    $('.btn-primary').click(function () {
        switch (flag) {
            case 0:
                $('#time').css('color', 'red');flag++;break;
            case 1:
                $('#time').css('color', 'blue');flag++;break;
            case 2:
                $('#time').css('color', 'green');flag = 0;
        }
    });

    var play = 0;
    $('#mWinter').click(function () {
        $('#mWinter').toggleClass('glyphicon-pause');
        if (play == 0) {
            document.getElementById('c1').play();
            play = 1;
        } else if (play == 1) {
            document.getElementById('c1').pause();
            play = 0;
        }
    });
    var play1 = 0;
    $('#mSnow').click(function () {
        $('#mSnow').toggleClass('glyphicon-pause');
        if (play1 == 0) {
            document.getElementById('c2').play();
            play1 = 1;
        } else if (play1 == 1) {
            document.getElementById('c2').pause();
            play1 = 0;
        }
    });
    var play2 = 0;
    $('#mColl').click(function () {
        $('#mColl').toggleClass('glyphicon-pause');
        if (play2 == 0) {
            document.getElementById('c3').play();
            play2 = 1;
        } else if (play2 == 1) {
            document.getElementById('c3').pause();
            play2 = 0;
        }
    });
    var play3 = 0;
    $('#mCrist').click(function () {
        $('#mCrist').toggleClass('glyphicon-pause');
        if (play3 == 0) {
            document.getElementById('c4').play();
            play3 = 1;
        } else if (play3 == 1) {
            document.getElementById('c4').pause();
            play3 = 0;
        }
    });
};