
import { faker, ne } from '@faker-js/faker';
import connexionPageActions from '../../../PageObjects/PageActions/ConnexionPageActions';
import ConnectionData from '../../../fixtures/ConnectionData.json';

let username= ConnectionData.BuggyUserName

let password= ConnectionData.BuggyPassword
const connexion_page= new connexionPageActions
describe('valide Connexion ', function(){
   it('TC_0:Connexion réussi avec  des informations valides', function () {
    cy.visit('')
    connexion_page.login(username)
    connexion_page.password(password)
    connexion_page.button()
    connexion_page.message_success('Carolanne')
    
   });
   
})