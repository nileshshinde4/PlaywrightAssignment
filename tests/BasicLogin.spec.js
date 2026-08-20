const { test, expect } = require('@playwright/test');

test('Login Flow', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.getByPlaceholder('Username').fill('standard_user');

    // Enter password
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Validate successful login
    await expect(page).toHaveURL(/inventory/);

    // Validate Products page
    await expect(
        page.getByText('Products', { exact: true })
    ).toBeVisible();
});