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
    // await page.locator('#nav-bar :text("Toggle search input")').click();
    // await page.locator('article:has-text("Toggle search input")').click();
    // await page.getByRole('button', { name: 'Toggle search input' }).click();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('smith');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Users' }).click();
    await page.waitForTimeout(750);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.waitForTimeout(2000);
});