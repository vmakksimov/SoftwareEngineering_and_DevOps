const { test, expect } = require('@playwright/test');

let pageURL = 'http://localhost:3000/'

test("Verify 'All Books' link is visible", async ({ page }) => {
    await page.goto(pageURL);
    await page.waitForSelector('.navbar');
    const allBooksLink = await page.$("#site-header > nav > section > a");
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test("Verify 'Login' button is visible", async ({ page }) => {
    await page.goto(pageURL);
    // await page.waitForSelector('#guest');
    const loginButtonLink = await page.$("#guest a[href='/login']");
    const isLoginButtonVisible = await loginButtonLink.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});

test("Verify 'Register' button is visible", async ({ page }) => {
    await page.goto(pageURL);
    // await page.waitForSelector('#guest');
    const registerButtonLink = await page.$("#guest a[href='/register']");
    const isRegisterButtonVisible = await registerButtonLink.isVisible();
    expect(isRegisterButtonVisible).toBe(true);
});

test("Verify 'All Books' button is visible after login", async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    // await page.waitForSelector('#guest');
    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click(".submit")
    const allBooksLink = await page.$("#site-header > nav > section > a");
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});


