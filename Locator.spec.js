import{test} from '@playwright/test';


test('Example3',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');


    // // // CSS Selector
    // await page.locator('input#email').fill('swethatecng@gmail.com');
    // // // // Text Selector
    // await page.locator('#name').fill('Venkat');
    // // // // Role-Based Selector
    // await page.getByRole('button', { name: 'STOP' });
    // // // // Placeholder
    // await page.getByPlaceholder('Enter Phone').fill('1234567890');
    // // // //  Label-based
    // await page.getByLabel('Email:');
    // // // Alt text 
    // await page.getByAltText('logo icon');
    // // // Title
    // await page.getByTitle('Form Elements');
    // // // // Test ID
	// await page.getByTestId('page-skin-1');
    // // nth(index)
    // await page.locator('a').nth(2).click(); 
    // // hasText(text)
    // await page.locator('tr', { hasText: 'Amit'});
    // hstLocator
    // await page.locator('tr', {has: page.locator('td')}).first().click();
});





// import {test} from '@playwright/test';
// test('Example',async({page})=>{
// await page.goto('https://testautomationpractice.blogspot.com/')
// await page.locator('input#name').fill('Playwright');
// await page.locator('#email').fill('swethatecng@gmail.com')


// })

