import{test,expect, Locator} from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage'
import { HomePage } from '../src/pages/HomePage'

let loginPage:LoginPage;
let homePage:HomePage;

test.beforeEach( async({page})=>
{
   loginPage=new LoginPage(page);
   await loginPage.goToLoginPage()
   await loginPage.doLogin('majnunath.sdet@gmail.com','manju@SDET1')
   homePage=new HomePage(page)
})

test('Home page title test', async()=>
{
    let homePageTitle=await homePage.getPageTitle()
    console.log('Home Page Title :', homePageTitle);
    expect(homePageTitle).toBe('My Account')
})

test('Logout link is exist test', async ()=>
{
    expect(await homePage.isLogoutLinkExist()).toBeTruthy()
})

test('Home page headers test', async ()=>
{
    let homeHeaders=await homePage.getHomePageHeaders()
    console.log('HomePage headers :',homeHeaders);
    expect.soft(homeHeaders).toHaveLength(4)
    expect.soft(homeHeaders).toEqual(['My Account','My Orders','My Affiliate Account','Newsletter'])

})