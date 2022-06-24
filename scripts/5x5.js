var t;
var score;
var ts;
const scores = document.getElementById('sc');

let Buttons = document.getElementById('b2');
Buttons.onclick = function() 
{
    ts=0;
    score = 0;
    scores.innerHTML = '0';
    clearTimeout(t);
    startTimer();
    changecolour();
}

function changecolour()
{
    colors = ['FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1'];
    for(var i=1 ; i < 6 ; i++)
    {
        for(var j=1 ; j < 6 ; j++)
        {
            if(i==5 && j==5){
                document.getElementById("p55").style.backgroundColor = 'white';
            }
            var cells = document.getElementById("p"+i+j);
            let a=Math.floor(Math.random() * colors.length);
            cells.style.backgroundColor = '#' + colors[a];
            colors.splice(a,1);
            
        }
    }
}


var s1 = document.getElementById("p11");
var s2 = document.getElementById("p12");
var s3 = document.getElementById("p13");
var s4 = document.getElementById("p14");
var s5 = document.getElementById("p15");
var s6 = document.getElementById("p21");
var s7 = document.getElementById("p22");
var s8 = document.getElementById("p23");
var s9 = document.getElementById("p24");
var s10 = document.getElementById("p25");
var s11 = document.getElementById("p31");
var s12 = document.getElementById("p32");
var s13 = document.getElementById("p33");
var s14 = document.getElementById("p34");
var s15 = document.getElementById("p35");
var s16 = document.getElementById("p41");
var s17 = document.getElementById("p42");
var s18 = document.getElementById("p43");
var s19 = document.getElementById("p44");
var s20 = document.getElementById("p45");
var s21 = document.getElementById("p51");
var s22 = document.getElementById("p52");
var s23 = document.getElementById("p53");
var s24 = document.getElementById("p54");
var s25 = document.getElementById("p55");
var temp;

s1.onclick = function(){swap1();score++;scores.innerHTML = score;}
s2.onclick = function(){swap2();score++;scores.innerHTML = score;}
s3.onclick = function(){swap3();score++;scores.innerHTML = score;}
s4.onclick = function(){swap4();score++;scores.innerHTML = score;}
s5.onclick = function(){swap5();score++;scores.innerHTML = score;}
s6.onclick = function(){swap6();score++;scores.innerHTML = score;}
s7.onclick = function(){swap7();score++;scores.innerHTML = score;}
s8.onclick = function(){swap8();score++;scores.innerHTML = score;}
s9.onclick = function(){swap9();score++;scores.innerHTML = score;}
s10.onclick = function(){swap10();score++;scores.innerHTML = score;}
s11.onclick = function(){swap11();score++;scores.innerHTML = score;}
s12.onclick = function(){swap12();score++;scores.innerHTML = score;}
s13.onclick = function(){swap13();score++;scores.innerHTML = score;}
s14.onclick = function(){swap14();score++;scores.innerHTML = score;}
s15.onclick = function(){swap15();score++;scores.innerHTML = score;}
s16.onclick = function(){swap16();score++;scores.innerHTML = score;}
s17.onclick = function(){swap17();score++;scores.innerHTML = score;}
s18.onclick = function(){swap18();score++;scores.innerHTML = score;}
s19.onclick = function(){swap19();score++;scores.innerHTML = score;}
s20.onclick = function(){swap20();score++;scores.innerHTML = score;}
s21.onclick = function(){swap21();score++;scores.innerHTML = score;}
s22.onclick = function(){swap22();score++;scores.innerHTML = score;}
s23.onclick = function(){swap23();score++;scores.innerHTML = score;}
s24.onclick = function(){swap24();score++;scores.innerHTML = score;}
s25.onclick = function(){swap25();score++;scores.innerHTML = score;}

function swap1()
{
    if(s2.style.backgroundColor == 'white'){
       s2.style.backgroundColor = s1.style.backgroundColor;
       s1.style.backgroundColor = 'white';}
    if(s6.style.backgroundColor == 'white'){
        s6.style.backgroundColor = s1.style.backgroundColor;
        s1.style.backgroundColor = 'white';}   
}

function swap2(){
    if(s3.style.backgroundColor == 'white'){
        s3.style.backgroundColor = s2.style.backgroundColor;
        s2.style.backgroundColor = 'white';}
    if(s1.style.backgroundColor == 'white'){
        s1.style.backgroundColor = s2.style.backgroundColor;
        s2.style.backgroundColor = 'white';}
    if(s7.style.backgroundColor == 'white'){
        s7.style.backgroundColor = s2.style.backgroundColor;
        s2.style.backgroundColor = 'white';}
}

function swap3(){
    if(s4.style.backgroundColor == 'white'){
        s4.style.backgroundColor = s3.style.backgroundColor;
        s3.style.backgroundColor = 'white';}
    if(s2.style.backgroundColor == 'white'){
        s2.style.backgroundColor = s3.style.backgroundColor;
        s3.style.backgroundColor = 'white';}
    if(s8.style.backgroundColor == 'white'){
        s8.style.backgroundColor = s3.style.backgroundColor;
        s3.style.backgroundColor = 'white';}
}

function swap4(){
    if(s5.style.backgroundColor == 'white'){
        s5.style.backgroundColor = s4.style.backgroundColor;
        s4.style.backgroundColor = 'white';}
    if(s3.style.backgroundColor == 'white'){
        s3.style.backgroundColor = s4.style.backgroundColor;
        s4.style.backgroundColor = 'white';}
    if(s9.style.backgroundColor == 'white'){
        s9.style.backgroundColor = s4.style.backgroundColor;
        s4.style.backgroundColor = 'white';}
}

function swap5()
{
    if(s4.style.backgroundColor == 'white'){
       s4.style.backgroundColor = s5.style.backgroundColor;
       s5.style.backgroundColor = 'white';}
    if(s10.style.backgroundColor == 'white'){
        s10.style.backgroundColor = s5.style.backgroundColor;
        s5.style.backgroundColor = 'white';}   
}

function swap6(){
    if(s1.style.backgroundColor == 'white'){
        s1.style.backgroundColor = s6.style.backgroundColor;
        s6.style.backgroundColor = 'white';}
    if(s11.style.backgroundColor == 'white'){
        s11.style.backgroundColor = s6.style.backgroundColor;
        s6.style.backgroundColor = 'white';}
    if(s7.style.backgroundColor == 'white'){
        s7.style.backgroundColor = s6.style.backgroundColor;
        s6.style.backgroundColor = 'white';}
}

function swap7(){
    if(s2.style.backgroundColor == 'white'){
        s2.style.backgroundColor = s7.style.backgroundColor;
        s7.style.backgroundColor = 'white';}
    if(s6.style.backgroundColor == 'white'){
        s6.style.backgroundColor = s7.style.backgroundColor;
        s7.style.backgroundColor = 'white';}
    if(s8.style.backgroundColor == 'white'){
        s8.style.backgroundColor = s7.style.backgroundColor;
        s7.style.backgroundColor = 'white';}
    if(s12.style.backgroundColor == 'white'){
        s12.style.backgroundColor = s7.style.backgroundColor;
        s7.style.backgroundColor = 'white';}
}

function swap8(){
    if(s3.style.backgroundColor == 'white'){
        s3.style.backgroundColor = s8.style.backgroundColor;
        s8.style.backgroundColor = 'white';}
    if(s7.style.backgroundColor == 'white'){
        s7.style.backgroundColor = s8.style.backgroundColor;
        s8.style.backgroundColor = 'white';}
    if(s9.style.backgroundColor == 'white'){
        s9.style.backgroundColor = s8.style.backgroundColor;
        s8.style.backgroundColor = 'white';}
    if(s13.style.backgroundColor == 'white'){
        s13.style.backgroundColor = s8.style.backgroundColor;
        s8.style.backgroundColor = 'white';}
}

function swap9(){
    if(s4.style.backgroundColor == 'white'){
        s4.style.backgroundColor = s9.style.backgroundColor;
        s9.style.backgroundColor = 'white';}
    if(s8.style.backgroundColor == 'white'){
        s8.style.backgroundColor = s9.style.backgroundColor;
        s9.style.backgroundColor = 'white';}
    if(s10.style.backgroundColor == 'white'){
        s10.style.backgroundColor = s9.style.backgroundColor;
        s9.style.backgroundColor = 'white';}
    if(s14.style.backgroundColor == 'white'){
        s14.style.backgroundColor = s9.style.backgroundColor;
        s9.style.backgroundColor = 'white';}
}

function swap10(){
    if(s15.style.backgroundColor == 'white'){
        s15.style.backgroundColor = s10.style.backgroundColor;
        s10.style.backgroundColor = 'white';}
    if(s9.style.backgroundColor == 'white'){
        s9.style.backgroundColor = s10.style.backgroundColor;
        s10.style.backgroundColor = 'white';}
    if(s5.style.backgroundColor == 'white'){
        s5.style.backgroundColor = s10.style.backgroundColor;
        s10.style.backgroundColor = 'white';}
}

function swap11(){
    if(s6.style.backgroundColor == 'white'){
        s6.style.backgroundColor = s11.style.backgroundColor;
        s11.style.backgroundColor = 'white';}
    if(s16.style.backgroundColor == 'white'){
        s16.style.backgroundColor = s11.style.backgroundColor;
        s11.style.backgroundColor = 'white';}
    if(s12.style.backgroundColor == 'white'){
        s12.style.backgroundColor = s11.style.backgroundColor;
        s11.style.backgroundColor = 'white';}
}

function swap12(){
    if(s7.style.backgroundColor == 'white'){
        s7.style.backgroundColor = s12.style.backgroundColor;
        s12.style.backgroundColor = 'white';}
    if(s11.style.backgroundColor == 'white'){
        s11.style.backgroundColor = s12.style.backgroundColor;
        s12.style.backgroundColor = 'white';}
    if(s13.style.backgroundColor == 'white'){
        s13.style.backgroundColor = s12.style.backgroundColor;
        s12.style.backgroundColor = 'white';}
    if(s17.style.backgroundColor == 'white'){
        s17.style.backgroundColor = s12.style.backgroundColor;
        s12.style.backgroundColor = 'white';}
}

function swap13(){
    if(s8.style.backgroundColor == 'white'){
        s8.style.backgroundColor = s13.style.backgroundColor;
        s13.style.backgroundColor = 'white';}
    if(s12.style.backgroundColor == 'white'){
        s12.style.backgroundColor = s13.style.backgroundColor;
        s13.style.backgroundColor = 'white';}
    if(s14.style.backgroundColor == 'white'){
        s14.style.backgroundColor = s13.style.backgroundColor;
        s13.style.backgroundColor = 'white';}
    if(s18.style.backgroundColor == 'white'){
        s18.style.backgroundColor = s13.style.backgroundColor;
        s13.style.backgroundColor = 'white';}
}

function swap14(){
    if(s9.style.backgroundColor == 'white'){
        s9.style.backgroundColor = s14.style.backgroundColor;
        s14.style.backgroundColor = 'white';}
    if(s13.style.backgroundColor == 'white'){
        s13.style.backgroundColor = s14.style.backgroundColor;
        s14.style.backgroundColor = 'white';}
    if(s15.style.backgroundColor == 'white'){
        s15.style.backgroundColor = s14.style.backgroundColor;
        s14.style.backgroundColor = 'white';}
    if(s19.style.backgroundColor == 'white'){
        s19.style.backgroundColor = s14.style.backgroundColor;
        s14.style.backgroundColor = 'white';}
}

function swap15(){
    if(s20.style.backgroundColor == 'white'){
        s20.style.backgroundColor = s15.style.backgroundColor;
        s15.style.backgroundColor = 'white';}
    if(s14.style.backgroundColor == 'white'){
        s14.style.backgroundColor = s15.style.backgroundColor;
        s15.style.backgroundColor = 'white';}
    if(s10.style.backgroundColor == 'white'){
        s10.style.backgroundColor = s15.style.backgroundColor;
        s15.style.backgroundColor = 'white';}
}

function swap16(){
    if(s11.style.backgroundColor == 'white'){
        s11.style.backgroundColor = s16.style.backgroundColor;
        s16.style.backgroundColor = 'white';}
    if(s21.style.backgroundColor == 'white'){
        s21.style.backgroundColor = s16.style.backgroundColor;
        s16.style.backgroundColor = 'white';}
    if(s17.style.backgroundColor == 'white'){
        s17.style.backgroundColor = s16.style.backgroundColor;
        s16.style.backgroundColor = 'white';}
}

function swap17(){
    if(s12.style.backgroundColor == 'white'){
        s12.style.backgroundColor = s17.style.backgroundColor;
        s17.style.backgroundColor = 'white';}
    if(s16.style.backgroundColor == 'white'){
        s16.style.backgroundColor = s17.style.backgroundColor;
        s17.style.backgroundColor = 'white';}
    if(s18.style.backgroundColor == 'white'){
        s18.style.backgroundColor = s17.style.backgroundColor;
        s17.style.backgroundColor = 'white';}
    if(s22.style.backgroundColor == 'white'){
        s22.style.backgroundColor = s17.style.backgroundColor;
        s17.style.backgroundColor = 'white';}
}

function swap18(){
    if(s13.style.backgroundColor == 'white'){
        s13.style.backgroundColor = s18.style.backgroundColor;
        s18.style.backgroundColor = 'white';}
    if(s17.style.backgroundColor == 'white'){
        s17.style.backgroundColor = s18.style.backgroundColor;
        s18.style.backgroundColor = 'white';}
    if(s19.style.backgroundColor == 'white'){
        s19.style.backgroundColor = s18.style.backgroundColor;
        s18.style.backgroundColor = 'white';}
    if(s23.style.backgroundColor == 'white'){
        s23.style.backgroundColor = s18.style.backgroundColor;
        s18.style.backgroundColor = 'white';}
}

function swap19(){
    if(s14.style.backgroundColor == 'white'){
        s14.style.backgroundColor = s19.style.backgroundColor;
        s19.style.backgroundColor = 'white';}
    if(s18.style.backgroundColor == 'white'){
        s18.style.backgroundColor = s19.style.backgroundColor;
        s19.style.backgroundColor = 'white';}
    if(s20.style.backgroundColor == 'white'){
        s20.style.backgroundColor = s19.style.backgroundColor;
        s19.style.backgroundColor = 'white';}
    if(s24.style.backgroundColor == 'white'){
        s24.style.backgroundColor = s19.style.backgroundColor;
        s19.style.backgroundColor = 'white';}
}

function swap20(){
    if(s25.style.backgroundColor == 'white'){
        s25.style.backgroundColor = s20.style.backgroundColor;
        s20.style.backgroundColor = 'white';}
    if(s19.style.backgroundColor == 'white'){
        s19.style.backgroundColor = s20.style.backgroundColor;
        s20.style.backgroundColor = 'white';}
    if(s15.style.backgroundColor == 'white'){
        s15.style.backgroundColor = s20.style.backgroundColor;
        s20.style.backgroundColor = 'white';}
}

function swap21()
{
    if(s22.style.backgroundColor == 'white'){
       s22.style.backgroundColor = s21.style.backgroundColor;
       s21.style.backgroundColor = 'white';}
    if(s16.style.backgroundColor == 'white'){
        s16.style.backgroundColor = s21.style.backgroundColor;
        s21.style.backgroundColor = 'white';}   
}

function swap22(){
    if(s23.style.backgroundColor == 'white'){
        s23.style.backgroundColor = s22.style.backgroundColor;
        s22.style.backgroundColor = 'white';}
    if(s21.style.backgroundColor == 'white'){
        s21.style.backgroundColor = s22.style.backgroundColor;
        s22.style.backgroundColor = 'white';}
    if(s17.style.backgroundColor == 'white'){
        s17.style.backgroundColor = s22.style.backgroundColor;
        s22.style.backgroundColor = 'white';}
}

function swap23(){
    if(s24.style.backgroundColor == 'white'){
        s24.style.backgroundColor = s23.style.backgroundColor;
        s23.style.backgroundColor = 'white';}
    if(s22.style.backgroundColor == 'white'){
        s22.style.backgroundColor = s23.style.backgroundColor;
        s23.style.backgroundColor = 'white';}
    if(s18.style.backgroundColor == 'white'){
        s18.style.backgroundColor = s23.style.backgroundColor;
        s23.style.backgroundColor = 'white';}
}

function swap24()
{
    if(s25.style.backgroundColor == 'white'){
        s25.style.backgroundColor = s24.style.backgroundColor;
        s24.style.backgroundColor = 'white';}
    if(s23.style.backgroundColor == 'white'){
        s23.style.backgroundColor = s24.style.backgroundColor;
        s24.style.backgroundColor = 'white';}
    if(s19.style.backgroundColor == 'white'){
        s19.style.backgroundColor = s24.style.backgroundColor;
        s24.style.backgroundColor = 'white';}
}

function swap25()
{
    if(s24.style.backgroundColor == 'white'){
       s24.style.backgroundColor = s25.style.backgroundColor;
       s25.style.backgroundColor = 'white';}
    if(s20.style.backgroundColor == 'white'){
        s20.style.backgroundColor = s25.style.backgroundColor;
        s25.style.backgroundColor = 'white';}   
}

let newbutton = document.getElementById('b3');
newbutton.onclick = function() 
{
    checkit();
}

function checkit()
{
    var flag =0;
    for(var i=1;i<4;i++)
    {
        for(var j=1;j<4;j++)
        {
            if(document.getElementById("m"+i+j).style.backgroundColor == document.getElementById("p"+(i+1)+(j+1)).style.backgroundColor)
            flag++;
        }
    }
    if(flag == 9)
    {
        alert("Congrats!You have matched the color tiles correctly"+  "\n" + "Your score(time in seconds+number of moves) is:" + (score+ts) + "\n" + "The lower the score,the better you have played");
        stopTimer();
    }
    else alert("The tiles don't match");
}

const timer = document.getElementById('stopwatch');

var hr = 0;
var sec = 0;
var min = 0;
var stoptime = true;

function startTimer() {
    
    timer.innerHTML = '00:00:00';
    hr = 0;
    sec = 0;
    min = 0;
    stoptime = true;
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;
    ts++;

    t = setTimeout("timerCycle()", 1000);
  }
}
