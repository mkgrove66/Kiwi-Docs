import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});


test('test', async ({ page }) => {
    test.setTimeout(600000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Seymour2024$!$!');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(1000);
});