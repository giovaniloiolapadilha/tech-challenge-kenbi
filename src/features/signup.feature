@signup
Feature: Sign Up
  I want to login to the system with admin user e no admin user
  and ensure when I don't prodive the corrects information the system
  don't let me sign up

  Scenario:
    Given I have only user "fulano@qa.com" registered

  Scenario Outline: SignUp success by public page
    Given I am on SignUp Public page
    When I submit SignUp page values "<name>" "<email>" "<password>" "<admin>"
    And I am logged in with user "admin"
    And I am on User List page
    Then show User List with user "<name>" "<email>" "<password>" "<admin>"
    Examples:
      | name         | email         | password | admin | 
      | Teste Common | teste1@qa.com | abcd     | false | 
      | Teste Admin  | teste2@qa.com | 1234     | true  |

  Scenario Outline: SignUp success by private page
    Given I am logged in with user "admin"
    And I am on Sign Up Private page
    When I submit SignUp page values "<name>" "<email>" "<password>" "<admin>"
    Then show User List with user "<name>" "<email>" "<password>" "<admin>"
    Examples:
      | name           | email         | password | admin |
      | Teste Common 2 | teste3@qa.com | a1b2     | false |
      | Teste Admin 2  | teste4@qa.com | a!.ç     | true  |

  Scenario Outline: SignUp invalid by public page
    Given I am on SignUp Public page
    When I submit SignUp page values "<name>" "<email>" "<password>" "<admin>"
    Then show message "<message>"
    Examples:
      | name    | email           | password | admin | message                                                             |
      |         |                 |          | false | Nome é obrigatório && Email é obrigatório && Password é obrigatório |
      |         | teste@teste.com |          | false | Nome é obrigatório && Password é obrigatório                        |
      | Giovani | teste@teste.com |          | false | Password é obrigatório                                              |
      | Giovani | teste@teste     | abcd     | false | Email deve ser um email válido                                      |
      | Giovani | fulano@qa.com   | abcd     | true  | Este email já está sendo usado                                      |

  Scenario Outline: SignUp invalid by private page
    Given I am logged in with user "admin"
    And I am on Sign Up Private page
    When I submit SignUp page values "<name>" "<email>" "<password>" "<admin>"
    Then show message "<message>"
    Examples:
      | name    | email           | password | admin | message                                                             |
      |         |                 |          | false | Nome é obrigatório && Email é obrigatório && Password é obrigatório |
      |         | teste@teste.com |          | false | Nome é obrigatório && Password é obrigatório                        |
      | Giovani | teste@teste.com |          | false | Password é obrigatório                                              |
      | Giovani | teste@teste     | abcd     | false | Email deve ser um email válido                                      |
      | Giovani | fulano@qa.com   | abcd     | true  | Este email já está sendo usado                                      |
