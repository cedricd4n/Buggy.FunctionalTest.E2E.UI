import connexionPageLocators from '../PageElements/ConnexionPageElements.json';

class connexionPageActions {
    
    login(username){
       cy.get(connexionPageLocators.ConnexionPageLocator.connexion_input_username).type(username)

       return
    }
    password(password){
        cy.get(connexionPageLocators.ConnexionPageLocator.connexion_input_password).type(password)
        
        return
     }

     button(){
        cy.contains(connexionPageLocators.ConnexionPageLocator.connexion_button).click({force:true})
        
        return
     }
     message_success(firstname){
        cy.contains(`Hi, ${firstname}`).should('be.visible')
        
        return
     }
     message_fail(){
      cy.contains(connexionPageLocators.ConnexionPageLocator.connexion_message_fail).should('be.visible')
      
      return
   }
    
}



export default connexionPageActions