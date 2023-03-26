function webCore() {
let sizeWiewport = window.matchMedia('(max-width: 767px)');

if (sizeWiewport.matches){
    new Swiper('.swiper',{
        width: 240,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        slidesPerView: 'auto',
    });
};

// ФУНКЦИОНАЛ ДЛЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА "ОБРАТНАЯ СВЯЗЬ"
let menuMessage = document.querySelectorAll('.menu-message');
let wrapperFeedback = document.querySelector('.wrapper-feedback');
for(let i = 0; i < menuMessage.length; i++){
    menuMessage[i].onclick = function(){
    wrapperFeedback.style.left = '0';
    wrapperFeedback.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };
}
let feedbackExit = document.querySelector('.feedback-exit');
feedbackExit.onclick = function(){
    wrapperFeedback.style.left = '-150%';
};

// ФУНКЦИОНАЛ ДЛЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА "ЗАКАЗАТЬ ЗВОНОК"
let menuPhone = document.querySelectorAll('.menu-phone');
let wrapperOrderCall = document.querySelector('.wrapper-order-call');
for(let i = 0; i < menuPhone.length; i++){
    menuPhone[i].onclick = function(){
    wrapperOrderCall.style.left = '0';
    wrapperOrderCall.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    };
}
let orderCallExit = document.querySelector('.order-call-exit');
orderCallExit.onclick = function(){
    wrapperOrderCall.style.left = '-150%';
};

// ФУНКЦИОНАЛ ДЛЯ КНОПКИ БУРГЕР-МЕНЮ И ЗАКРЫВАЮЩЕЙ КНОПКИ
let menuBurgerMenu = document.querySelector('.menu__burger-menu');
let wrapperMobileMenu = document.querySelector('.wrapper-mobile-menu');
menuBurgerMenu.onclick = function(){
    wrapperMobileMenu.style.left = '0';
};
let exit = document.querySelector('.exit');
exit.onclick = function(){
    wrapperMobileMenu.style.left = '-150%';
};
let wrapperMobileMenuBlur = document.querySelector('.wrapper-mobile-menu__blur');
wrapperMobileMenuBlur.onclick = function(){
    wrapperMobileMenu.style.left = '-150%';
};

// ФУНКЦИОНАЛ ДЛЯ КНОПОК ДЛЯ РАЗВОРАЧИВАНИЯ СКРЫТОГО КОНТЕНТА
// создаем коллекцию всех кнопок разворачивания:
let buttonExpands = document.querySelectorAll('.button-expand');
// создаем массив для сохранения текстов нажатых кнопок:
let buttonExpandTextTemp = [];
// в цикле навешиваем на каждую кнопку обработчик клика:
for(let i = 0; i < buttonExpands.length; i++){
    buttonExpands[i].onclick = function(){
        // при клике на кнопку добавляем или убираем специальный класс:
        buttonExpands[i].classList.toggle('.button-expand_open');
        // в специальную переменую записываем результат проверки есть ли у кнопки специальный класс:
        let buttonExpandClick = buttonExpands[i].classList.contains('.button-expand_open');
        // находим элемент с текстом у этой кнопки:
        let buttonExpandText = buttonExpands[i].querySelector('.button-expand__text');
        // находим элемент со стрелочкой у этой кнопки:
        let buttonExpandImg = buttonExpands[i].querySelector('.button-expand__img');
        // находим предыдущий элемент в dom дереве:
        let previousElementSibling = buttonExpands[i].previousElementSibling;
        // в предыдущем элементе находим скрытый контент:
        let hiddenContent = previousElementSibling.querySelector('.hidden-content');

        // проверяем развернут ли контент:
        if(buttonExpandClick){
            // увеличиваем высоту у блока со скрытым контентом:
            hiddenContent.style.height = 'auto';
            // сохраняем в массив текст кнопки:
            buttonExpandTextTemp[i] = buttonExpandText.textContent;
            // меняем текст у кнопки:
            buttonExpandText.textContent = 'Скрыть';
            // поворачиваем стрелочки у кнопки:            
            buttonExpandImg.style.animationName = 'button-expand-rotate';
        }
        // если текст не развернут:
        else{
            // возвращаем высоту у блока со скрытым контентом по умолчанию:
            hiddenContent.style.height = null;
            // возвращаем текст кнопки сохраненный в массиве:
            buttonExpandText.textContent = buttonExpandTextTemp[i];
            // поворачиваем стрелочки у кнопки обратно:
            buttonExpandImg.style.animationName = 'none';
        }
    }
};
}
export default webCore()








