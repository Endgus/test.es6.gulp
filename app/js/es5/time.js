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
var get_timer = function get_timer() {
    var finish = new Date(2017, 0, 1);
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
        alert('С Новым Годом!!! ');
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
};