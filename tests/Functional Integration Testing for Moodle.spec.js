import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(480000);
    // test.setTimeout(120000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    // VF-001
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test ');
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('12qwaszx!@QWASZX');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(1000);
    // UC-001
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(1000);
    // // UC-002
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    page.getByPlaceholder('Username');
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.waitForTimeout(500);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('12qwaszx!@QWASZX');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(500);
    await page.locator('#modalFlowBot').getByText('×').click();
    await page.waitForTimeout(1000);
    await page.getByRole('menuitem', { name: 'Site administration' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('tab', { name: 'Users' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Assign system roles' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: 'Common Unit Training Manager' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').click();
    await page.waitForTimeout(750);
    await page.getByRole('cell', { name: 'Potential users   Search Clear' }).getByLabel('Search').fill('Michael Grove');
    await page.waitForTimeout(500);
    await page.getByRole('cell', { name: 'Potential users   Search' }).getByLabel('Search').press('Enter');
    await page.waitForTimeout(50000);
    await page.getByLabel('Potential users').selectOption('1195852');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: '◄ Add' }).click();
    await page.waitForTimeout(10000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/admin/roles/assign.php?contextid=1&roleid=24');
    await page.locator('#addselect_clearbutton').click();
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).click();
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).fill('Michael Grove');
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).press('Enter');
    await page.locator('#removeselect_clearbutton').click();
    await page.waitForTimeout(1000);
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).click();
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).fill('Michael Grove');
    await page.getByRole('cell', { name: 'Existing users   Search Clear' }).getByLabel('Search', { exact: true }).press('Enter');
    await page.getByLabel('Existing users').selectOption('1195852');
    await page.getByRole('button', { name: 'Remove ►' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#removeselect_clearbutton').click();
});
// await page.getByRole('button', { name: 'Dismiss this notification' }).click();
// CM-001
// CM-002
// CM-005
// CM-004/005
// CT-001
// CT-001/002/003
// CT-002
// CT-002/003
// CT-004/005
// AS-001
// AS-002
// EN-001
// RP-001
// RP-002
// RP-003/001
// BR-001
// CM-003
// US-001
// US-002
// US-003
// SE-001
// SE-002
// });