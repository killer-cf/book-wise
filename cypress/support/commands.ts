/* eslint-disable no-undef */
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => {})

// Cypress.Commands.add(
//   'drag',
//   { prevSubject: 'element' },
//   (subject, options) => {},
// )

// Cypress.Commands.add(
//   'dismiss',
//   { prevSubject: 'optional' },
//   (subject, options) => {},
// )

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {})

// Cypress.Commands.add('getBySel', (selector, ...args) => {
//   return cy.get(`[data-test=${selector}]`, ...args)
// })

// Cypress.Commands.add('getBySelLike', (selector, ...args) => {
//   return cy.get(`[data-test*=${selector}]`, ...args)
// })

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy='${value}']`)
})
