Feature: ar-video
  Scenario: sign-up
    When I am on sign-up page
    Then I am on sign-up page
    Then I type first-name to field firstName
    When I click submit button
    Then I should see validation error