
import { faker } from '@faker-js/faker';

import dashboardPageActions from '../../../PageObjects/PageActions/DashboardPageActions';
import inscriptionPageActions from '../../../PageObjects/PageActions/InscriptionPageAction';
import ConnectionData from '../../../fixtures/ConnectionData.json';

let username= faker.internet.userName()
let firstname= faker.person.firstName();
let lastname= faker.person.lastName()
let password= ConnectionData.BuggyPassword
const dashboard_page= new dashboardPageActions
const inscription_page=new inscriptionPageActions
describe('valide Inscription ', function(){
   beforeEach(() => {
      cy.visit('')
      dashboard_page.DashboardButton()
  });
   it('TC_0:Inscription réussi avec  des information valides', function () {
    
   inscription_page.username(username)
   inscription_page.firstname(firstname)
   inscription_page.lastname(lastname)
   inscription_page.paswword(password)
   inscription_page.confirmpassword(password)
   inscription_page.button_register()
   inscription_page.alerte_sucess()
   });

   it('TC_1:Inscription echoue avec un login deja entrer', function () {
    
     inscription_page.username(username)
     inscription_page.firstname(firstname)
     inscription_page.lastname(lastname)
     inscription_page.paswword(password)
     inscription_page.confirmpassword(password)
     inscription_page.button_register()
     inscription_page.alerte_fail_alreadylogin()
     });
     
})