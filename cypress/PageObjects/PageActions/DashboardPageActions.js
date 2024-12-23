import dashboardPageLocators from '../PageElements/DashboardPageElements.json';
console.log(JSON.stringify(dashboardPageLocators))
class dashboardPageActions {
    bouton_register='Register'
    DashboardButton(){
        cy.contains(dashboardPageLocators.DashboardPageLocator.bouton_register).click({ force: true });
       return
    }
    
}

export default dashboardPageActions