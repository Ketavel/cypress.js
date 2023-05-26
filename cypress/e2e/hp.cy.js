describe('Тестирование HuntingPony', function () {
    
    it('Прогонка смока', function () {
        cy.visit('https://huntingpony.com/');
        
        cy.get('body > div.page_layout.page_layout-clear > main > div.layout.widget-type_system_widget_v4_banner_list_22 > div > div > a:nth-child(3) > div.banner-list__item-title').click();
        cy.get('body > div.page_layout.page_layout-clear.page_layout_section_top > main > div.layout.widget-type_system_widget_v4_catalog_2 > div > div > div > form:nth-child(2) > div > div.product-preview__area-photo > div > div.img-ratio.img-ratio_cover > div > a > picture:nth-child(1) > img').click();
        cy.wait(500);
        cy.get('.add-cart-counter__btn-label').click();
        cy.wait(500);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.wait(500);
        cy.get('.header__cart > .icon').click();
        cy.wait(500);
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
      
        cy.end();

    })
})
