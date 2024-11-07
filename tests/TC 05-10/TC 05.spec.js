import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});


test('test', async ({ page }) => {
    test.setTimeout(120000);

    
});