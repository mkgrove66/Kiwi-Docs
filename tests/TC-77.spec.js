import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://tftr.test.josce.mil/#/');
    await page.waitForTimeout(1000);
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('mytraining.test');
    await page.waitForTimeout(1000);
    await page.getByLabel('Password', { exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Seymour2024$!$!');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.locator('html').click();
    await page.waitForTimeout(1000);
    await page.goto('https://tftr.test.josce.mil/#/Training/Profile');
    await page.waitForTimeout(1000);
    await page.getByLabel('Primary Navigation').locator('a').filter({ hasText: 'Manage' }).click();
    await page.locator('a').filter({ hasText: 'Product' }).click();
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Search for CFETP').click();
    await page.locator('a').filter({ hasText: 'MyTraining Test' }).click();
    await page.waitForTimeout(1000);
    await page.locator('a').filter({ hasText: 'Logout' }).click();
    await page.waitForTimeout(1000);
});