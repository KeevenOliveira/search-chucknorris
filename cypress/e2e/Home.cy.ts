context('Home', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('should display the Home', () => {
        cy.visit('http://localhost:3000/');
    });

    it('should find one image in body of page', () => {
        cy.get('body').find('img').should('have.length', 1);
    });
    it('should be find 2 texts in body', () => {
        cy.get('body').contains('Nothing to show');
        cy.get('body').contains('Try to search something :)');
    });
    it('should be find search in page with placeholder Search', () => {
        cy.get('input[type="search"]').should(
            'have.attr',
            'placeholder',
            'Search',
        );
    });
    it('should be find button with type submit in page', () => {
        cy.get('button[type="submit"]').should('have.length', 1);
    });
    it('should be find react select in page', () => {
        cy.get('.css-1s2u09g-control');
    });

    context('Home > searching for phrases', () => {
        it('should be type in the search field', () => {
            cy.get('input[type="search"]')
                .type('MPK-5')
                .should('have.value', 'MPK-5');
        });
        it('should be find one card', () => {
            cy.get('input[type="search"]').type('MPK-5');
            cy.get('form').submit();
            cy.get('body').contains(
                "When Chuck Norris wa born 3 nurses and 2 doctors were killed when he shot them with 2 MPK-5's he had developed while in the womb.",
            );
            cy.get('[data-testid="Card"]').should('have.length', 1);
        });
        it('should be find 5 cards after request', () => {
            cy.get('input[type="search"]').type('Chuck norris');
            cy.get('form').submit();
            cy.get('[data-testid="Card"]').should('have.length', 5);
        });
        it('should be find toast when search without value', () => {
            cy.get('form').submit();
            cy.on('window:alert', str => {
                expect(str).to.equal('Please, enter a search');
            });
        });
        it('should be click and select one option in React Selection', () => {
            cy.get('.css-1s2u09g-control').type('animal').type('{enter}');
        });
        it('should be select one category and search one word', () => {
            cy.get('.css-1s2u09g-control').type('animal').type('{enter}');
            cy.get('input[type="search"]').type('cat');
            cy.get('form').submit();
            cy.get('[data-testid="Card"]').should('have.length', 1);
        });
    });
});
