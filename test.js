// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код

import { questions } from "./data.js";
// масив запитань

//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll('.ans') // кнопки відповідей
let qw_text = document.querySelector('.qw') // текст запитання
// витянуємо з потрібного файла потрібний елемент
let img = document.querySelector(".img")
let qw = ""
let answers = []
let can_click = true
let card_qw = document.querySelector(".card-qw")
// функція відображення запитання

function showQuestion(){

    // отримуємо поточне запитання
    qw = questions[q_index]
    // відображаємо текст запитання
    qw_text.innerHTML= qw.qw
    // тасуємо відповіді
    let ans = qw.ans
    ans = shuffle(ans)
    ans - shuffle(ans)
    console.log(btn_ans)
    // тасуємо копію масиву відповідей
   // відображаємо відповіді на кнопках відповідей
   for (let i =0; i< ans.length; i++){
    btn_ans[i].innerHTML = ans[i]
   }

    
}
//відображаємо перше запитання
showQuestion()


// обробники кліків по кнопках відповідей
for (let i = 0; i<btn_ans.length; i++){
    btn_ans[i].addEventListener("click", function(){
           if (can_click){
            can_click = false
        let ans = btn_ans[i].innerHTML
        answers.push(ans)
        if(ans == qw.correct){
            console.log('COCK')
            score ++
        }
        else{
            console.log('KNOCK KNOCK')
        }
        img.src = qw.img
        
        anime ({
                    targets:card_qw,
                    opacity:[1,0],
                    easing: "easeInCubic",
                    duration:500
                })
        anime({
            targets: ".img",
            rotate:["0","360deg"],
            scale:[1,500],
            opacity:[0,.9],
            easing: "easeInCubic",
            duration: 2000

        }).finished.then(function(){
        q_index++
            if(q_index == questions.length){
                answers = answers.join('/')
                document.cookie = `answers=${answers}; max-age${60*60*60}`
                document.cookie = `score=${score}; max-age=${60*60*60}`
                document.cookie = `total=${questions.length}; max-age=${60*60*60}`
                window.location.replace("result.html")
            }
            else{
                showQuestion()
                 anime({
            targets: ".img",
            rotate:["360deg","0deg"],
            scale:[500,1],
            opacity:[0.9,0],
            easing: "easeInCubic",
            duration: 2000

        }).finished.then(function(){
                anime ({
                    targets:card_qw,
                    opacity:[0,1],
                    easing: "easeInCubic",
                    duration:500
                }).finished.then(function(){
                can_click =true
                })
            })
        }
        })
}})

    }

const fish = document.getElementById('fish');
const answer = document.querySelectorAll('.ans');

answers.forEach(ans => {
    ans.addEventListener('click', () => {
        // рибка пливе в куточок
        fish.classList.add('fish-to-corner');

        // через 2 сек рибка "випливає назад"
        setTimeout(() => {
            fish.classList.remove('fish-to-corner');
            fish.classList.add('fish-back');

            // через 1 сек повертаємо до початкового стану
            setTimeout(() => {
                fish.classList.remove('fish-back');
            }, 1000);
        }, 2000);
    });
});


//1. отримуємо всі кнопки відповідей у циклі
//2. додаємо обробник кліку на кожну кнопку
//3. у обробнику перевіряємо чи правильна відповідь
//4. змінюємо змінну-колір  (зелений - правильна, червоний - неправильна) та рахунок
//5. запускаємо анімацію зміни кольору кнопки
//6. після завершення анімації збільшуємо індекс запитання
//7. якщо запитання закінчилися - переходимо на сторінку результатів та 
//   зберігаємо у cookie кількість правильних відповідей та загальну кількість запитань,
//  інакше показуємо наступне запитання
