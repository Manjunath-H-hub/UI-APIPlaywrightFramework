import {test, expect} from '../src/fixtures/pagefixtures'

test.beforeEach( async({loginPage})=>
{ 
   await loginPage.goToLoginPage()
   await loginPage.doLogin('majnunath.sdet@gmail.com','manju@SDET1') 
})

// test('Home page title test', async({homePage})=>
// {
//     let homePageTitle= homePage.getPageTitle()
//     console.log('Home Page Title :', homePageTitle);
//     expect(homePageTitle).toBe('My Account')
// })

test('Logout link is exist test', async ({homePage})=>
{
    expect(await homePage.isLogoutLinkExist()).toBeTruthy()
})

test('Home page headers test', async ({homePage})=>
{
    let homeHeaders=await homePage.getHomePageHeaders()
    console.log('HomePage headers :',homeHeaders);
    expect.soft(homeHeaders).toHaveLength(4)
    expect.soft(homeHeaders).toEqual(['My Account','My Orders','My Affiliate Account','Newsletter'])

})