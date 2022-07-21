// cypress/plugins/index.ts

/// <reference types="cypress" />

import {default as cucumber} from "cypress-cucumber-preprocessor";

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('file:preprocessor', cucumber({
  browserifyOptions: {
    extensions: ['.js', '.ts'],
    plugin: [
      ['tsify']
    ]
  }
  }))
}
