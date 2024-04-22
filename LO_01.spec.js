import { test, expect } from '@playwright/test';
import LoginPage from '../../Pages/login_page';

test('Admin User Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToHomePage();

  await loginPage.setEmail('admin@gmail.com')
  await loginPage.setPassword('Admin@123')
  await loginPage.clickLoginButton();

  await expect(page).toHaveURL('https://taxreceit-frontend.onrender.com/admin/dashboard');
  // Perform login
  
  // Add assertions or further actions here
});
