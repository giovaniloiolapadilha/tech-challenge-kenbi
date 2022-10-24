@search
Feature: Search
  I want to find product by title or part of title 
  and ensure when don't find the system return a message

  Background:
    Given I am logged in with user "no admin"
    And I am on Home Page

  Scenario Outline: Search success
    When I submit Search page value "<search>"
    Then show product "<product>" with price "<price>"
    Examples:
      | search               | product              | price  |
      | Samsung              | Samsung 60 polegadas | $ 5240 |
      | MX                   | Logitech MX Vertical | $ 470  |
      | Samsung 60 polegadas | Samsung 60 polegadas | $ 5240 |

  Scenario: Search unfound produdct
    When I submit Search page value "xadasxzcas"
    Then show message "Nenhum produto foi encontrado"

  Scenario: Search empty
    When I submit Search page value ""
    Then show list "2" products
