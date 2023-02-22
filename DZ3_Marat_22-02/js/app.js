const tabsContent = document.querySelectorAll('.tabcontent')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
let swapCount = 0;
let swapInterval;
let swapTimeout;

const hideTabContent = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    })
}

const showTabContent = (i = 0) => {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((item, index) => {
            if (target === item) {
                hideTabContent();
                showTabContent(index)
                swapCount = index;
                clearInterval(swapInterval);
                clearTimeout(swapTimeout);``
                swapTimeout = setTimeout(startTabSwitch, 1000);
            }
        })
    }
})
const startTabSwitch = () => {
    swapInterval = setInterval(() => {
        switch (swapCount) {
            case 0:
                hideTabContent()
                swapCount++;
                showTabContent(swapCount);
                break;
            case 1:
                hideTabContent()
                swapCount++;
                showTabContent(swapCount);
                break;
            case 2:
                hideTabContent()
                swapCount++;
                showTabContent(swapCount);
                break;
            case 3:
                hideTabContent()
                swapCount = 0;
                showTabContent(swapCount);
                break;
        }
    }, 2000);
}

startTabSwitch()


const modal = document.querySelector('.modal');
const opentModalBtn = document.querySelector('.btn_white');
const closeModalBtn = document.querySelector('.modal__close');

const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

}

opentModalBtn.addEventListener('click', openModal);

const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);

const pepper = document.querySelector('.pepper');
const modalObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        openModal();
    }
})

modalObserver.observe(pepper);