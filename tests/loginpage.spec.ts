import {test, expect} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage'

let loginPage:LoginPage
let homePage:HomePage

test.beforeEach(async ({page})=>
{
   loginPage=new LoginPage(page)
   await loginPage.goToLoginPage()
   homePage=new HomePage(page)
})

test('Login page title test', async ({page})=>
{
   
   let pageTitle=await loginPage.getLoginPageTitle()
   console.log('Login page tittle: ', pageTitle);
   expect(pageTitle).toBe('Account Login')
   //await expect(page).toHaveTitle('Account Login');

})

test('Forgot pwd link exist test', async ({page})=>
{
  expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy()

})

test('User is able to login app test', async({page})=>
{
  await loginPage.doLogin('majnunath.sdet@gmail.com','manju@SDET1')
  expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy()
  expect.soft(await homePage.getPageTitle()).toBe('My Account')
})


