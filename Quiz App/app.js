// var score = 0;
// function cheak(){
//     var q1=document.getElementById('q1-a3');
//     var q2=document.getElementById('q2-a3');
//     var q3=document.getElementById('q3-a1');

//     if(q1.checked == true){   // cheaked mean radio button cheak hai ke nahi
//         score++;
        
        
//     }
//     if(q2.checked == true){   // cheaked mean radio button cheak hai ke nahi
//         score++;
//     }
//     if(q3.checked == true){   // cheaked mean radio button cheak hai ke nahi
//         score++;
//     }

//     alert("Your Score is "+score+" Out of 3");
//     score=0;
//     history.go(0);

// }




// APP 2

var nameid=document.getElementById("navbarDropdown");
var name=prompt("Enter Your name ");
nameid.innerHTML=name;



var qno=document.getElementById("qno");
var question=document.getElementById("question");
var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
var a3=document.getElementById("a3");
var a4=document.getElementById("a4");
var s1=document.getElementById("a1-1");
var s2=document.getElementById("a2-2");
var s3=document.getElementById("a3-3");
var s4=document.getElementById("a4-4");
var len=1;
var score=0;


var min=00;
var sec=00;
var msec=00;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;












var myQyestion=[
    {
        question :"What is 2-4+6*8"
        ,answer:
        {
            a :"67",
            b : "50",
            c : "70",
            d : "90"        
    
        },
        correctAnswer:"50"
    },
    {
        question :"What is green light mean"
        ,answer:
        {
            a :"Stop",
            b : "Ready",
            c : "Start",
            d : "none of above"        
    
        },
        correctAnswer:"Start"
    },
    {
        question :"What is the name of this country"
        ,answer:
        {
            a :"Pakistan",
            b : "USA",
            c : "Turkey"
            ,d: "UK"        
    
        },
        correctAnswer:"Pakistan"
    }
    
    ]

    
question.innerHTML=myQyestion[0].question;
s1.innerHTML=myQyestion[0].answer.a;
s2.innerHTML=myQyestion[0].answer.b;
s3.innerHTML=myQyestion[0].answer.c;
s4.innerHTML=myQyestion[0].answer.d;
qno.innerHTML="Question : "+len+" of "+myQyestion.length;
start();
function next(){
if(len < myQyestion.length){
   

    if(a1.checked==true && myQyestion[len-1].correctAnswer == s1.innerHTML){
        score++;
    }

    if(a2.checked==true && myQyestion[len-1].correctAnswer == s2.innerHTML){
        score++;
    }
    
    if(a3.checked==true && myQyestion[len-1].correctAnswer == s3.innerHTML){
        score++;
    }
    
    if(a4.checked==true && myQyestion[len-1].correctAnswer == s4.innerHTML){
        score++;
    }
    question.innerHTML=myQyestion[len].question;
    s1.innerHTML=myQyestion[len].answer.a;
    s2.innerHTML=myQyestion[len].answer.b;
    s3.innerHTML=myQyestion[len].answer.c;
    s4.innerHTML=myQyestion[len].answer.d;
    a1.checked=false;
    a2.checked=false;
    a3.checked=false;
    a4.checked=false;
    len++;
    qno.innerHTML="Question : "+len+" of "+myQyestion.length;

}
else{
   Result();

}    
}



function timer(){
    msec++
   
    if (msec>= 100){
        sec++
        secHeading.innerHTML=sec
        msec=0;
    }
    else if (sec>=59){
        min++
        minHeading.innerHTML=min
        sec=0;
        clearInterval(interval);
        Result();
        
    }
    
}

function start(){
    
interval=setInterval(timer,10); // ab ye 10 mili sec ke speed se chale ga very fast

}









function Result(){
    if(a1.checked==true && myQyestion[len-1].correctAnswer == s1.innerHTML){
        score++;
    }

    if(a2.checked==true && myQyestion[len-1].correctAnswer == s2.innerHTML){
        score++;
    }
    
    if(a3.checked==true && myQyestion[len-1].correctAnswer == s3.innerHTML){
        score++;
    }
    
    if(a4.checked==true && myQyestion[len-1].correctAnswer == s4.innerHTML){
        score++;
    }
    

    var main=document.getElementById("main");
    main.style.display="none";

    var pro=document.getElementById("pro");

    pro.style.display="block";
   
    var name1=document.getElementById("name");
    name1.innerHTML=name;



    var pb=document.getElementById('pb');
    score=(score*100)/myQyestion.length;
    pb.style.width=score+"%";

    var prop=document.getElementById('prop');
    prop.innerHTML="Your Score is "+score+"%";
    prop.style.fontWeight="bold";
   
    prop.style.color="black";

   

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
