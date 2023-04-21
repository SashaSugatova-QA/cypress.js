
describe('Автотесты на Cypress', function () {
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').click();

    })

    it('Проверка логики восстановления пароля', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#forgotEmailButton').click();
       cy.get('#mailForgot').type('maxim@qa.studio');
       cy.get('#restoreEmailButton').click();
       cy.contains('Успешно отправили пароль на e-mail');
       cy.get('#exitMessageButton > .exitIcon').click();
   })


   it('Верный логин, неверный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio11');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').click();

   })

   it('Неверный логин, верный пароль', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('ugerman@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Такого логина или пароля нет');
       cy.get('#exitMessageButton > .exitIcon').click();
   })

   it('Негативный кейс валидации', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('germandolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Нужно исправить проблему валидации');
       cy.get('#exitMessageButton > .exitIcon').click();

   })

   it('Проверка на приведение к строчным буквам в логине', function () {
       cy.visit('https://login.qa.studio/');
       cy.get('#mail').type('GerMan@Dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно');
       cy.get('#exitMessageButton > .exitIcon').click();

   })

    it('Автотест для HuntingPony', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[href="/collection/sumki-i-avtokresla"] > .banner-list__item-title', {timeout: 10000}).click();
        cy.get('[data-product-id="344951508"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1', {timeout: 10000}).click();
        cy.get('.add-cart-counter__btn-label', {timeout: 15000}).click();
        cy.get('[data-add-cart-counter-plus=""]', {timeout: 15000}).click();
        cy.get('.header__cart > .icon', {timeout: 15000}).click();
        cy.get('.cart-controls > .button', {timeout: 15000}).click();
        cy.contains('Оформление заказа');
})
})