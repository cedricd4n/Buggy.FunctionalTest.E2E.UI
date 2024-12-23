import { faker } from '@faker-js/faker';
import dashboardPageActions from '../../../../PageObjects/PageActions/DashboardPageActions';
import inscriptionPageActions from '../../../../PageObjects/PageActions/InscriptionPageAction';
import ConnectionData from '../../../../fixtures/ConnectionData.json';

let username = faker.internet.userName()
let firstname = faker.person.firstName();
let lastname = faker.person.lastName()
let password = ConnectionData.BuggyPassword
const dashboard_page = new dashboardPageActions
const inscription_page = new inscriptionPageActions
describe('Validation Formulaire', function () {
    beforeEach(() => {
        cy.visit('')
        dashboard_page.DashboardButton()
    });
    it(`TC-0:Validation Champ Login`, function () {
       
        inscription_page.clear_username(username)

        inscription_page.alerte_fail_login()
    });
    it(`TC-1:Validation Champ First Name`, function () {
        
        inscription_page.clear_firstname(firstname);


        inscription_page.alerte_fail_firstname()
    });
    it.skip(`TC-2:Validation Champ Last Name`, function () {
        inscription_page.clear_lastname(lastname);


        inscription_page.alerte_fail_lastname()
    });
    it(`TC-3:Validation Champ Password`, function () {
        inscription_page.clear_paswword(password);


        inscription_page.alerte_fail_password()
    });
    it(`TC-4:Validation Champ Confirm Password`, function () {
        inscription_page.clear_confirmpassword(password);


        inscription_page.alerte_fail_confirmpassword()
    });




})