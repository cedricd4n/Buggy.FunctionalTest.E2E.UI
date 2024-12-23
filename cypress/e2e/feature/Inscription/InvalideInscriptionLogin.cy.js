import { faker } from '@faker-js/faker';
import dashboardPageActions from '../../../PageObjects/PageActions/DashboardPageActions';
import inscriptionPageActions from '../../../PageObjects/PageActions/InscriptionPageAction';
import ConnectionData from '../../../fixtures/ConnectionData.json';
let username=  ConnectionData.WrongBuggyUserName
let firstname= faker.person.firstName();
let lastname= faker.person.lastName()
let password= ConnectionData.BuggyPassword
const dashboard_page= new dashboardPageActions
const inscription_page=new inscriptionPageActions
describe('Invalide Inscription Login', function(){
    it('TC_0:Failed Inscription  avec   un login contenant des espaces', function () {
     cy.visit('')
     dashboard_page.DashboardButton()
     inscription_page.username(username)
     inscription_page.firstname(firstname)
     inscription_page.lastname(lastname)
     inscription_page.paswword(password)
     inscription_page.confirmpassword(password)
     inscription_page.button_register()
     
     inscription_page.last_alerte_fail_login()
    });
    
 })