
import { faker } from '@faker-js/faker';
import Helper from '../../../support/Helper';
import connexionPageActions from '../../../PageObjects/PageActions/ConnexionPageActions';

import ConnectionData from '../../../fixtures/ConnectionData.json';

let username= ConnectionData.BuggyUserName

let password= ConnectionData.BuggyPassword
let VOTE = '';
let nbVoteMarque = 0;
let nbVoteModele = 0;
let idModele=''
let movetopage=faker.helpers.arrayElement([1,2])
let resultExtractId=[]
let canvote=true
const connexion_page= new connexionPageActions
describe('Voter un modèle à partir de la section marque', function () {
    beforeEach(() => {
        cy.visit('')
        connexion_page.login(username)
        connexion_page.password(password)
        connexion_page.button()
    });


    it('TC_0: vérifie le nombre de vote existant de la marque', {retries :{runMode:1,openMode:1}} ,function () {
        cy.get(".card-block").eq(0).invoke('text').then((text) => {
            const regex = /\((\d+)\s+votes\)/;
            cy.log(text);
            VOTE = Helper.findVote(
                text,
                regex,
            );

            nbVoteMarque = Number(VOTE)
            expect(nbVoteMarque >= 0).to.eq(true);
        })
    });

    it("TC_1: Séléction d' un modèle de la marques", {retries :{runMode:1,openMode:1}},function () {

        cy.wait(5000)
        
        cy.get(".center-block").eq(1).click({ force: true });
        if(movetopage===2){
            cy.contains("»").click({ force: true });
        }
        

        cy.intercept(
            `https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/makes/ckl2phsabijs71623vk0?modelsPage=${movetopage}`,
        ).as('modele');

        cy.wait('@modele').then(intercept => {
            idModele=faker.helpers.arrayElement(intercept.response.body.models.models).id
            cy.get(`a[href="/model/${idModele}"]`).eq(0).click({ force: true });
            resultExtractId=Helper.extractElements(idModele)
            cy.intercept(
                `https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/models/${resultExtractId[0]}%7C${resultExtractId[1]}`,
            ).as('choixmodele');
    
            cy.wait('@choixmodele').then(intercept => {
               
               canvote=intercept.response.body.canVote

               if(canvote){
                cy.contains('Votes: ')
                .parent()
                .parent()
                .find('strong').invoke('text').then((text) => {
    
                    cy.log(typeof text);
                    nbVoteModele = Number(text)
                    expect(nbVoteModele >= 0).to.eq(true);
                })
    
            cy.contains('Vote!').click({ force: true })
            cy.wait(30000)
            cy.contains('Votes: ')
                .parent()
                .parent()
                .find('strong').invoke('text').then((text) => {
    
                    cy.log(typeof text);
    
                    expect(Number(text)).to.be.gte(nbVoteModele + 1);
                })
    
            }
            
            cy.contains('Thank you for your vote!', { timeout: 10000 }).should('be.visible')
                // cy.log(JSON.stringify(faker.helpers.arrayElement(intercept.response.body.models.models)))
            });
            // cy.log(JSON.stringify(faker.helpers.arrayElement(intercept.response.body.models.models)))
            
           
        
        });
        
       
        //    cy.wait(25000)
       

    });

    it('TC_2: vérifie le nombre de vote de la marque s\' inscremente ', function () {
        if(canvote){
            cy.get(".card-block").eq(0).invoke('text').then((text) => {
                const regex = /\((\d+)\s+votes\)/;
                cy.log(text);
                VOTE = Helper.findVote(
                    text,
                    regex,
                );
    
                expect(Number(VOTE)).to.be.gte(nbVoteMarque + 1);
            })
        }else{
            cy.get(".card-block").eq(0).invoke('text').then((text) => {
                const regex = /\((\d+)\s+votes\)/;
                cy.log(text);
                VOTE = Helper.findVote(
                    text,
                    regex,
                );
    
                expect(Number(VOTE)).to.be.gte(nbVoteMarque);
            }) 
        }
        
    });

})