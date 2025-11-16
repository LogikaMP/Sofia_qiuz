// зчитуємо куки
// кількість правильних відповідей
// загальна кількість запитань

// розбиваємо куки на масив елементів
// перебираємо елементи
// розбиваємо елемент на ключ і значення
// якщо ключ - score, записуємо значення в змінну score
// якщо ключ - total, записуємо значення в змінну total


// підключаємось до події завантаження сторінки для анімації результату
let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
let stat = document.querySelector('.stats')
let answers = []
// 0–3 бали:
// "Мабуть, ти тільки починаєш плавати у світі рибок… 🐟 Не переймайся, кожна рибка колись вчилася плавати!"

// 4–6 балів:
// "Ти знаєш рибок на 5 з 10 🐠 – середній рівень! Є куди рости, але вже точно не сухопутна жаба."

// 7–9 балів:
// "Вау! Ти знаєш рибок на 8 з 10 🐡 – справжній акваріумний експерт! Можеш власну колекцію заводити."

// 10 балів:
// "Блискуче! 10 з 10 🐟🐟🐟 Ти – король/королева океану, рибки тобі аплодують!"
let res = ""
let res_div = document.querySelector(".res")
for (let i=0; i<cookie.length; i++){
    let[name, value] = cookie [i].split('=')
    if (name.trim() == 'score'){
        score.innerHTML == value
        if (value==10){
            res_div.innerHTML = "Блискуче! 10 з 10 🐟🐟🐟 Ти – король/королева океану, рибки тобі аплодують!"
        } else if(9<=value<=7 ){
            res_div.innerHTML ="Вау! Ти знаєш рибок на 8 з 10 🐡 – справжній акваріумний експерт! Можеш власну колекцію заводити."
        } else if (4<=value<=6){
            res_div.innerHTML ="Ти знаєш рибок на 5 з 10 🐠 – середній рівень! Є куди рости, але вже точно не сухопутна жаба."
        }else {
            res_div.innerHTML = "Мабуть, ти тільки починаєш плавати у світі рибок… 🐟 Не переймайся, кожна рибка колись вчилася плавати!"
        }
    }
    if(name.trim() == 'total'){
        total.innerHTML = value
    }
    if(name.trim() == 'answers'){
        answers = value.split('/')
    }
}
import{ questions } from "./data.js"
for (let i=0; i<questions.length; i++){
    let cols = []
    for (let g=0; g<4; g++){
        if(questions[i].ans[g] == questions[i].correct){
            cols.push('rgba(95, 255, 103, 1)')
        }
        else{
            cols.push('#fff8f6')
        }
        if(answers[i].trim() == questions[i].ans[g] && answers[i].trim() != questions[i].correct){
            cols[g]='rgba(255, 77, 77, 1)'
    }
}
    stat.innerHTML+=`<div class="card-qw op"> 
      <div class="qw"> ${questions[i].qw} </div>  
      <div class="answers"> 
        <div class="ans" style =" background:${cols[0]}"> ${questions[i].ans[0]} </div>
        <div class="ans" style = "background:${cols[1]}"> ${questions[i].ans[1]} </div>
        <div class="ans" style = "background:${cols[2]}"> ${questions[i].ans[2]} </div>
        <div class="ans" style = "background:${cols[3]}"> ${questions[i].ans[3]} </div>
      </div>`
}

// анімація
anime ({
    targets:".result",
    translateY:["-500px","0px"],
    easing: "easeInCubic",
    duration:400
})
let cards = document.querySelectorAll(".card-qw");

// масив для відстеження, які вже анімовані
let animated = new Array(cards.length).fill(false);

window.addEventListener("scroll", () => {
    for (let i = 0; i < cards.length; i++) {
        if (animated[i]) continue; // пропускаємо вже анімовані

        const rect = cards[i].getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) { // коли картка майже на екрані
            animated[i] = true;

            let x = (i % 2 === 0) ? "-500px" : "500px";

            anime({
                targets: cards[i],
                translateX: [x, "0px"],
                opacity: [0, 1],
                easing: "easeInCubic",
                duration: 400
            });
        }
    }
});

// перезапуск на початок
let restart = document.querySelector('.restart')
restart = addEventListener('click', function(){

anime({
    targets: restart,
    scale: [0.8, 1],              // зменшення → нормальний розмір
    rotate: [-2, 2],               // легке покачування
    opacity: [0, 1],               // плавна поява
    duration: 1500,
    easing: 'easeInOutSine'             // повторювати покачування

}).finished.then(function(){
    window.location.replace("test.html")
})
})


