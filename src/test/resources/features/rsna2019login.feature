
@Rsna2019Stage
Feature: RSNA2019 Login

  @login
  Scenario: Login to RSNA 2019 Stage
  When User on RSNA Stage application
  Then User clock on login button
  And  User input user name and password
  Then User click on login button to submit
  Then User sees Welcome to meeting central in page

