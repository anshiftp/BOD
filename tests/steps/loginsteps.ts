// //Manually you are not going to write ,you need to copy paste which is generated automatically
// import{test,expect} from '@playwright/test'
// import{createBdd} from 'playwright-bdd'
// const {Given,When,Then}=createBdd();
// Given('user is on login page', async ({page}) => {
//   await page.goto("https://saucedemo.com");
// });
 
// Then('user enters username', async ({page}) => {
//  await page.locator("#user-name").fill('standard_user');
// });
 
// Then('user enters password', async ({page}) => {
//   await page.locator("#password").fill('secret_sauce');
// });
 
// Then('user clicks login button', async ({page}) => {
//   await page.locator("#login-button").click();
// });
 
// Then('user is logged in successfully', async ({page}) => {
//   const actualUrl=await page.url();
//   await expect(actualUrl).toBe("https://www.saucedemo.com/inventory.html");
// });
 
// Then('user is able to navigate to product page', async ({page}) => {
//   const logo=await page.locator("//span[text()='Products']").textContent();
//   await expect(logo).toBe("Products");
// });
 
//                         /*
//                         Created By me\\
 
 
 
//                         */
 
// Then('user enters locked username', async ({page}) => {
//   await page.locator("#user-name").fill('locked_out_user');
// });
 
// Then('user gets an error message', async ({page}) => {
//   const errorMessage=await page.locator("//h3[text()='Epic sadface: Sorry, this user has been locked out.']").textContent();
//   await expect(errorMessage).toBe("Epic sadface: Sorry, this user has been locked out.");
 
// });
 
// Then('user is back on login page', async ({page}) => {
//   const pageUrl=await page.url();
//   await expect(pageUrl).toBe("https://www.saucedemo.com/");
// });

import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

Given('user is on login page', async ({page}) => {
  // Step: Given user is on login page
  await page.goto("https://saucedemo.com");
  // From: tests\features\login.feature:23:1
});

Then('User enters {string}', async ({page}, username) => {
  // Step: Then User enters "standard_user"
  await page.locator("#user-name").fill(username);
  // From: tests\features\login.feature:24:1
});

Then('user enters {string}', async ({page}, password) => {
  // Step: And user enters "secret_sauce"
  await page.locator("#password").fill(password);
  // From: tests\features\login.feature:25:1
});

Then('user clicks login button', async ({page}) => {
  // Step: And user clicks login button
  await page.locator("#login-button").click();
  // From: tests\features\login.feature:26:1
});

Then('user is logged in successfully', async ({page}) => {
  // Step: Then user is logged in successfully
  const actualUrl=await page.url();
  await expect(actualUrl).toBe("https://www.saucedemo.com/inventory.html");
  // From: tests\features\login.feature:27:1
});

Then('user is able to navigate to product page', async ({page}) => {
  // Step: And user is able to navigate to product page
  const logo=await page.locator("//span[text()='Products']").textContent();
  await expect(logo).toBe("Products");
  // From: tests\features\login.feature:28:1
});
