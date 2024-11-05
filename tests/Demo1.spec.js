import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});

test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://learn-doc.test.josce.mil/moodle/login/index.php?saml=off');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('automation_test');
    await page.waitForTimeout(750);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('Seymour2024$!$!');
    await page.waitForTimeout(750);
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('button', { name: 'Toggle search input' }).click();
    await page.waitForTimeout(750);
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('Doa');
    await page.waitForTimeout(750);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(750);
    await page.getByLabel('User menu').click();
    await page.waitForTimeout(750);
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.goto('https://federation.test.cce.af.mil/pool/sso/authenticate/msg/14?RelayState=https%3A%2F%2Flearn-doc.test.josce.mil%2Fmoodle%2F&SAMLRequest=nZJPb9swDMW%2FiqG7LctOmlhIAqQNhgXotqDJdthlUCW6USFLnkjvz7efYrdYd2gPuwkU34%2BPD1yh6lwvtwOd%2FR18HwAp%2B9U5j3L8WLMhehkUWpRedYCStDxuP9zKqihlHwMFHRx7IXlboRAhkg2eZfvdmn2rGjE3Zl5eNdWyrsWiEnW1qBdLvVw0bVU39T00V42ZmSXLvkDEpFyzBEpyxAH2Hkl5SqWymuVC5OX8JGayLKUov7Jsl7axXtGoOhP1KDlvwUAcawWl%2F0JrKFRbdNbxPgTHEQO%2FLMJVygQ8Wa0IWLZ9dn4TPA4dxCPEH1bD57vbv2wHKvrcBD2hHwMm%2BIXchWAcjMgRXnHsp0euNBb9uX9Vy7LDU8zX1hvrH95O%2BH5qQvn%2BdDrkh0%2FHE9usLpPkmFjc%2FJ%2FXDkgZRepidcVf8lbTBX1MTva7Q3BW%2F87ehdgpet2oKMRYsSZvx1Y5eOxB29aCSVk7F37eREjBrxnFARjfTEP%2FvdTNHw%3D%3D&u=https%3A%2F%2Flearn-doc.test.josce.mil%2Fmoodle%2Fauth%2Fsaml2%2Fsp%2Fmetadata.php');
    await page.waitForTimeout(5000);
});