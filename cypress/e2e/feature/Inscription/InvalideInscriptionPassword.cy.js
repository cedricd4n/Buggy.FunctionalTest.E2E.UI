import { faker } from '@faker-js/faker';
import dashboardPageActions from '../../../PageObjects/PageActions/DashboardPageActions';
import inscriptionPageActions from '../../../PageObjects/PageActions/InscriptionPageAction';


let username = faker.internet.userName()
let firstname = faker.person.firstName();
let lastname = faker.person.lastName()
let listPassword = ["Pass", "password", "P@ssword", "Password123", "PASSWORD"]
let describeTestCase = "";
const dashboard_page = new dashboardPageActions
const inscription_page = new inscriptionPageActions
describe('Invalide Inscription Password ', function () {



    for (let testCaseIndex = 0; testCaseIndex < listPassword.length; testCaseIndex++) {

        switch (listPassword[testCaseIndex]) {
            case "Pass":
                describeTestCase = "de minimum 4 caractère"
                break;
            case "password":
                describeTestCase = "contenant aucun symbole de caractère majuscule"
                break;
            case "P@ssword":
                describeTestCase = " contenant aucun  caractère majuscule"
                break;
            case "Password123":
                describeTestCase = "contenant aucun symbole"
                break;
            case "PASSWORD":
                describeTestCase = "contenant aucun caractère minuscule"
                break;
            default:
                break;
        }

        it(`TC_${testCaseIndex}:Failed Inscription  avec un password ${describeTestCase}`, function () {
            cy.visit('')
            dashboard_page.DashboardButton()
            inscription_page.username(username)
            inscription_page.firstname(firstname)
            inscription_page.lastname(lastname)
            inscription_page.paswword(listPassword[testCaseIndex])
            inscription_page.confirmpassword(listPassword[testCaseIndex])
            inscription_page.button_register()

            inscription_page.last_alerte_fail_pasword(listPassword[testCaseIndex])
        });

    }


})