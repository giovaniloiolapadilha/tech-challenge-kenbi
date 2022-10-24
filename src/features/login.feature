@login
Feature: Login
  I want to login to the system with admin user e no admin user
  and ensure when I don't prodive the corrects information the system
  don't let me login

  Scenario Outline: Login success
    Given I am on Login Page
    When I submit Login page values "<email>" "<password>"
    And show menus "<menus>"
    Examples:
      | email         | password | menus                                                                                                |
      | teste1@qa.com | abcd     | Home && Lista de Compras && Carrinho                                                                 |
      | teste2@qa.com | 1234     | Home && Cadastrar Usuários && Listar Usuários && Cadastrar Produtos && Listar Produtos && Relatórios |

  Scenario Outline: Login invalid
    Given I am on Login Page
    When I submit Login page values "<email>" "<password>"
    Then show message "<message>"
    Examples:
      | email         | password | message                                       |
      |               | abcd     | Email é obrigatório                           |
      | teste1@qa.com |          | Password é obrigatório                        |
      | teste1@qa.com | aaaaa    | Email e/ou senha inválidos                    |
      | aaaa@aaaaa    | teste    | Email deve ser um email válido                |