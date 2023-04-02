"use strict";

// 1 Создание данных шапки

document.documentElement.setAttribute("lang", "ru");


let metaUTF = document.createElement("meta");
metaUTF.setAttribute("charset", "UTF-8");
document.head.prepend(metaUTF);

let metaV = document.createElement("meta");
metaV.setAttribute("name", "viewport");
metaV.setAttribute("content", "width=device-width");
metaV.setAttribute("initial-scale", "1");
metaUTF.after(metaV);

let metaName = document.createElement("meta");
metaName.setAttribute("name", "author");
metaName.setAttribute("content", "Pavel Tsebruk");
metaV.after(metaName);


let title = document.createElement('title');
title.innerHTML = "JS__8";
metaName.after(title);


// 2  Создание главных блоков

let container = document.createElement("div");
document.body.prepend(container);
container.classList.add("conteiner");

let header = document.createElement("div")
container.appendChild(header);
header.classList.add("header");

let info = document.createElement("div");
container.appendChild(info);
info.classList.add("info");

let boxLeft = document.createElement("div")
info.appendChild(boxLeft);
boxLeft.classList.add("boxLeft");

let boxRight = document.createElement("div")
info.appendChild(boxRight);
boxRight.classList.add("boxRight");

// 3 1ый блок

let span__header = document.createElement("span");
header.appendChild(span__header);
span__header.classList.add("span__header");
span__header.innerHTML = 'Choose Your Option'


let span2__header = document.createElement("span");
header.appendChild(span2__header);
span2__header.classList.add("span2__header");
span2__header.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'

// 4 2ой блок

let p__boxLeft = document.createElement("p");
boxLeft.appendChild(p__boxLeft);
p__boxLeft.classList.add("p__boxLeft");
p__boxLeft.innerHTML = 'FREELANCER'

let p2__boxLeft = document.createElement("p");
boxLeft.appendChild(p2__boxLeft);
p2__boxLeft.classList.add("p2__boxLeft");
p2__boxLeft.innerHTML = 'Initially designed to'

let p3__boxLeft = document.createElement("p");
boxLeft.appendChild(p3__boxLeft);
p3__boxLeft.classList.add("p3__boxLeft");
p3__boxLeft.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '

let a__boxLeft = document.createElement("a");
boxLeft.appendChild(a__boxLeft);
a__boxLeft.classList.add("a__boxLeft");
a__boxLeft.innerHTML = 'START HERE'

// 5 3ий блок

let p__boxRight = document.createElement("p");
boxRight.appendChild(p__boxRight);
p__boxRight.classList.add("p__boxRight");
p__boxRight.innerHTML = 'STUDIO'

let p2__boxRight = document.createElement("p");
boxRight.appendChild(p2__boxRight);
p2__boxRight.classList.add("p2__boxRight");
p2__boxRight.innerHTML = 'Initially designed to '

let p3__boxRight = document.createElement("p");
boxRight.appendChild(p3__boxRight);
p3__boxRight.classList.add("p3__boxRight");
p3__boxRight.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing '

let a__boxRight = document.createElement("a");
boxRight.appendChild(a__boxRight);
a__boxRight.classList.add("a__boxRight")
a__boxRight.innerHTML = 'START HERE'

// 6 Закатываем стили

let style = document.createElement("style");
document.body.append(style);

style.innerHTML = `
     .container{ 
        display: flex;
     }
     
     .header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 464px;
        height: 84px;
        padding-top: 40px ;
        padding-bottom: 50px ;
        margin: auto;
     }


     .span__header{
        display: flex;
        font-size: 36px;
        justify-content: center;
        align-items: center;
        font-family: 'Arvo', serif;
     }


     .span2__header{
        font-size: 14px;
        color: #9FA3A7;
        font-family: 'Open Sans', sans-serif;
     }


     .info{
        display: flex;
        justify-content: center;
       
     }


     .boxLeft{
        display: flex;
        flex-direction: column;
        width: 401px;
        height: 480px;
        align-items: center;
        justify-content: space-between; 
        border: 1px solid #E5E5E5;
        border-radius: 7px 0px 0px 7px;
        padding: 81px 95px 70px 95px;
        box-sizing: border-box;
     }

     .p__boxLeft{
        font-size: 12px;
        color: #9FA3A7;
        font-family: 'Montserrat', sans-serif;
     }

     .p2__boxLeft{
        font-size: 36px;
        font-family: 'Arvo', serif;
        text-align: center;
     }

     .p3__boxLeft{
        font-size: 12px;
        color: #9FA3A7;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
     }
     
     .a__boxLeft{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 167px;
        height: 62px;
        border: 3px solid #FFC80A;
        border-radius: 40px;
        font-size: 12px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
     }


     .boxRight{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; 
        width: 401px;
        height: 480px;
        background-color: #8F75BE;
        padding: 81px 95px 70px 95px;
        box-sizing: border-box;
     }

     .p__boxRight{
        font-size: 12px;
        color: #FFC80A;
        font-family: 'Montserrat', sans-serif;
     }

     .p2__boxRight{
        font-size: 36px;
        text-align: center;
        font-family: 'Arvo', serif;
        color: #FFFFFF;
        

     }

     .p3__boxRight{
        font-size: 12px;
        color: #FFFFFF;
        text-align: center;
        font-family: 'Open Sans', sans-serif;
     }
    
     .a__boxRight{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 167px;
        height: 62px;
        border: 3px solid #FFC80A;
        border-radius: 40px;
        font-size: 12px;
        color:  #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
     }

`

// Не разобрался только вот в чём: почему p2__boxLeft и p2__boxRight, автоматически определили себе какието Пэйдинги, над собой и под собой. 
// Если вы в браузере через консоль наведёте на эти блоки, вы поймёте про что я .
// В Фигме кнопка отделяется немного от текста, там есть пустое пространство, но из за проблемы описаной мной выше, мне не удалось это сделать.
// Если есть возможность подскажите почему.


