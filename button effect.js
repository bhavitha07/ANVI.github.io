const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect= wrapper.getBoundingClientRect();

const noBtnRect= noBtn.getBoundingClientRect();
yesBtn.addEventListener('click',()=>{
    question.innerHTML='<i><u><b>I know But<br> You Have to Agree these following : </u></b></i><br><br>1) Iam Stylish, Beautiful, Cute, Charming, Intelligent, Brave,Decent, Sharp, Smart, Sexier than You?<br><br>2) Min-12 <> Max-20 children<br><br>OR<br><br>3)Click "No" :- If you want only you me and only 1 kid ';
    
    yesBtn.addEventListener('click',function(){
        window.location="Final.html"
    });
    
    
});

noBtn.addEventListener('mouseover',()=>{
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left=i +'px';
    noBtn.style.top=j +'px';
})