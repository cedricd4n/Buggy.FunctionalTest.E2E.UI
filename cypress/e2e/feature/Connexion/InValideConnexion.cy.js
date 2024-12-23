
import { faker } from '@faker-js/faker';
import connexionPageActions from '../../../PageObjects/PageActions/ConnexionPageActions';
import ConnectionData from '../../../fixtures/ConnectionData.json';

let username= ConnectionData.WrongBuggyUserName

let password= ConnectionData.WrongPassword
const connexion_page= new connexionPageActions
describe('Invalide Connexion ', function(){
   it('TC_0:Connexion echouée ', function () {
      cy.visit('')
      connexion_page.login(username)
      connexion_page.password(password)
      connexion_page.button()
      connexion_page.message_fail();
   });
   
})