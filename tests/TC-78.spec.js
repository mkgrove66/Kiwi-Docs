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
    await page.getByRole(' button ', { name: 'User menu' }).click();
    // await page.getByLabel('User menu').click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Switch role to...' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('button', { name: 'Common Unit Training Manager' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'More ' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'More ' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'More ' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Reports ' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'UTM (only) Reports' }).click();
    await page.waitForTimeout(750);
    await page.goto('https://learn-doc.test.josce.mil/moodle/local/intelliboard/reports.php?id=29ea6e26f27504dad461cd4a249eb1462ee4a7e75db0e9fe95a0c4520f7f804a');
    await page.waitForTimeout(750);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Return to my normal role' }).click();
    await page.waitForTimeout(750);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(750);
});