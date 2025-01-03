import inscriptionPageLocators from '../PageElements/InscriptionPageElements.json';



class inscriptionPageActions {

    username(username) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_username).type(username);
        return
    }
    clear_username(username) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_username).type(username).clear();
        return
    }
    firstname(firstname) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_firstname).type(firstname);
        return
    }
    clear_firstname(firstname) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_firstname).type(firstname).clear();
        return
    }
    lastname(lastname) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_lastname).type(lastname);
        return
    }
    clear_lastname(lastname) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_lastname).type(lastname).clear();
        return
    }
    paswword(password) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_password).type(password);
        return
    }
    clear_paswword(password) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_password).type(password).clear();
        return
    }
    confirmpassword(confirmpassword) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_confirmpassword).type(confirmpassword);
        return
    }
    clear_confirmpassword(confirmpassword) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_input_confirmpassword).type(confirmpassword).clear();
        return
    }
    button_register() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_button).click({ force: true });
        return
    }
    alerte_sucess() {
        cy.contains(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_success).should('be.visible');


        return
    }
    last_alerte_fail_pasword(password) {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            // Log the text to the console
            switch (password) {
                case "Pass":
                    expect(text).to.include(`minimum field size of 6`);
                    break;
                case "password":
                    expect(text).to.include(`Password must have uppercase characters`);
                    break;
                case "P@ssword":
                    expect(text).to.include(`Password must have numeric characters`);
                    break;
                case "Password123":
                    expect(text).to.include(`Password must have symbol characters`);
                    break;
                case "PASSWORD":
                    expect(text).to.include(`Password must have lowercase characters`);

                    break;
                default:
                    break;
            }

            //  cy.contains();
        });

        return
    }
    last_alerte_fail_login() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_number).invoke('text').then((text) => {

            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_message_fail_login);
            //  cy.contains();
        })

        return
    }

    alerte_fail_login() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_login_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_login_message);
        })

        return
    }
    alerte_fail_firstname() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_firstname_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_firstname_message);
        })

        return
    }
    alerte_fail_lastname() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_lastname_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_lastname_message);
        })

        return
    }
    alerte_fail_password() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_password_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_password_message);
        })

        return
    }
    alerte_fail_confirmpassword() {
        cy.get(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail).eq(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_confirm_password_number).invoke('text').then((text) => {
            cy.log(text);
            console.log("le texte est ", text)
            expect(text).to.include(inscriptionPageLocators.InscriptionPageLocator.inscription_alerte_fail_confirm_password_message);
        })

        return
    }
    
   
    alerte_fail_alreadylogin() {
        cy.contains(inscriptionPageLocators.InscriptionPageLocator.inscription_message_fail_alreadylogin).should('be.visible');


        return
    }
}

export default inscriptionPageActions