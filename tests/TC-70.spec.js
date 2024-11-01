import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(180000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.waitForTimeout(750);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('12qwaszx!@QWASZX');
    await page.waitForTimeout(750);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(750);
    await page.locator('#yui_3_18_1_1_1730487743900_18');
    // await page.locator('.icon fa fa-search fa-fw').click();
    // await page.locator('button.btn btn-open rounded-0 nav-link:has-text("Toggle search input")');
    await page.waitForTimeout(5000);
    // await page.locator('css=#searchinput-navbar-67251734c0f7967251734bdff33 > a').click();
    // await page.locator('//html/body/div[2]/nav/div[2]/div[1]/a').click();
    // await page.locator('//*[@id="searchiput-navbar-6724f44af2f096724f44aef9733"]/a').click();
    // await page.locator('//*[@id="yui_3_18_1_1_1730474244584_18"]').click();
    // await page.locator('//*[@id="searchinput-navbar-6724f1004d7886724f1004a5753"]/a').click();
    // await page.locator('#nav-bar :text("Toggle search input")').click();
    // await page.locator('article:has-text("Toggle search input")').click();
    // await page.getByRole('button', { name: 'Toggle search input' }).click();
    // await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('smith');
    // await page.getByRole('button', { name: 'Search' }).click();
    // await page.getByRole('link', { name: 'Users' }).click();
    // await page.waitForTimeout(750);
    // await page.getByLabel('User menu').click();
    // await page.waitForTimeout(750);
    // await page.getByRole('menuitem', { name: 'Log out' }).click();
    // await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    // await page.waitForTimeout(2000);
});