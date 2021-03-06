// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
///<reference types="Cypress"/>
// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/**
 * @type {Cypress.PluginConfig}
 */

// cypress/support/index.ts
Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(value)
})

Cypress.Commands.add('login', (email:string,pass:string) => {
  return `${email} ${pass}`
})