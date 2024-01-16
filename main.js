const videoBox = document.querySelector('.videoBox');
const containerSpan = document.querySelector('.main > h1');
const urlInp = document.querySelector('.url');
const numInp = document.querySelector('.num');
const submitBtn = document.querySelector('.submit');
const hideShowBtn = document.querySelector('.container > button');
const reloadBtn = document.querySelector('#reloadBtn');
const helpBtn = document.querySelector('#helpBtn');
const helpBox = document.querySelector('.helpBox');


submitBtn.addEventListener('click',function mainFun(e){
    e.preventDefault();
    if(urlInp.value.length == 0){
        containerSpan.innerHTML = 'Fill the (URL) field.';
        containerSpan.classList.add('errorMsgClr');
        defaultVal();
    }
    else if(numInp.value.length == 0){
        containerSpan.innerHTML = 'Fill the (NUMBER) field.';
        containerSpan.classList.add('errorMsgClr');
        defaultVal();
    }
    else{
        if(!urlInp.value.includes('https://')){
            containerSpan.innerHTML = 'Your (URL) is not secure.';
            containerSpan.classList.add('errorMsgClr');
            defaultVal();
        }
        else{
            let embedVal = urlInp.value.replace('watch?v=','embed/');
            let numVal = numInp.value;
            for(let i=0; i<numVal; i++){
                var createFrame = document.createElement('iframe');
                videoBox.appendChild(createFrame);
                createFrame.setAttribute('src',embedVal);
            }
        }

    }

});

function defaultVal(){
    setTimeout(()=>{
        containerSpan.innerHTML = 'Youtube Views Increaser';
        containerSpan.classList.toggle('errorMsgClr');
        
    },2000);
};

hideShowBtn.addEventListener('click',function(){
    const main = document.querySelector('.main');

    if(main.style.top == '-100%' || hideShowBtn.firstElementChild.style.transform == 'rotateX(180deg)'){
        main.style.top = '0px';
        hideShowBtn.firstElementChild.style.transform = 'rotateX(0deg)';
    }else{
        main.style.top = '-100%';
        hideShowBtn.firstElementChild.style.transform = 'rotateX(180deg)';
    }

});

reloadBtn.addEventListener('click',function(){
   location.reload();
});



helpBtn.addEventListener('click',function(){
    if(helpBox.style.display == 'block' || helpBox.style.opacity == '1'){
        setTimeout(()=>{
            helpBox.style.display = 'none';
        },200)
        helpBox.style.opacity = '0';
    }else{
        helpBox.style.display = 'block';
        setTimeout(()=>{
            helpBox.style.opacity = '1';
        },200)
    }

});

helpBox.addEventListener('click',function(){
    helpBox.style.opacity = 0;
    setTimeout(()=>{
        helpBox.style.display = 'none';
    },200)
});

helpBox.firstElementChild.addEventListener('click',function(elm){
    elm.stopPropagation();
});
