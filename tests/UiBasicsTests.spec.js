const {test, expect} = require('@playwright/test');

test('UI Controls', async ({ page }) =>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='documents-request']");
    const dropdown = page.locator('select.form-control');
    await dropdown.selectOption('consult');
    await page.locator('.radiotextsty').last().click();
    await page.locator('#okayBtn').click();
    await expect(page.locator('.radiotextsty').last()).toBeChecked();
    await page.locator('#terms').click();
    await expect( page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});



test('Child windows handling', async ({ browser }) =>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [childPage] = await Promise.all([
        context.waitForEvent('page'), documentLink.click()
    ])

    const text = await newPage.locator('.red').textContent();
    const arrayText = text.split('@')
    const domain =  arrayText[1].split(' ')[0]
    await page.locator('#username').fill(domain);

})
