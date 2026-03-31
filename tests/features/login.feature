
# Scenario:Login with valid credentials
# Given user is on login page
# Then user enters username
# And user enters password
# And user clicks login button
# Then user is logged in successfully
# And user is able to navigate to product page
  
 
# Scenario:Login with locked user credentials
# Given user is on login page
# Then user enters locked username
# And user enters password
# And user clicks login button
# Then user gets an error message
# And user is back on login page
 

Feature:Login Functionality
Scenario:Login with valid credentials(fully automated)
Given user is on login page
Then User enters "<username>"
And user enters "<password>"
And user clicks login button
Then user is logged in successfully
And user is able to navigate to product page
Examples:
| username                  | password          |
| standard_user             | secret_sauce      |
| performance_glitch_user   | secret_sauce      |
| problem_user              | secret_sauce      |
| error_user                | secret_sauce      |
| visual_user               | secret_sauce      |
 
 
 