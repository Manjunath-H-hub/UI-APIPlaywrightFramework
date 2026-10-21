import {test,expect} from '../src/fixtures/pagefixtures'
import { CsvHelper } from '../src/utils/CsvHelper'
import { ExcelHelper } from '../src/utils/ExcelHelper'
import { JsonHelper } from '../src/utils/JsonHelper'



test.beforeEach(async ({loginPage})=>
{
  
   await loginPage.goToLoginPage()
  
})

test('Login page title test', async ({loginPage})=>
{
   
   let pageTitle=await loginPage.getPageTitle()
   console.log('Login page tittle: ', pageTitle);
   expect(pageTitle).toBe('Account Login')
   //await expect(page).toHaveTitle('Account Login');

})

test('Forgot pwd link exist test', async ({loginPage})=>
{
  expect(await loginPage.isForgotPwdLinkExist()).toBeTruthy()

})

test('User is able to login app test', async({loginPage,homePage})=>
{
  await loginPage.doLogin(process.env.MY_USERNAME!, process.env.MY_PASSWORD!)
  expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy()
  expect.soft(await homePage.getPageTitle()).toBe('My Account')
})

//DD_1: sequence mode --only 1 test is running with test data one by one using testData from fixtures
test('login to app using wrong credentials with Data driven test', async ({loginPage,testData})=>
{
   for(let row of testData)
   {
    await loginPage.doLogin(row.username, row.password);   //username and password coming from csv file 
    //expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()

   }
})

//DD_2: without fixtures, parallel mode. read csv data directly and loop the test method row wise

// let testData=CsvHelper.readCsv('src/data/loginData.csv')   //call csvhelper static method to read csv data

// for(let row of testData)
// {
//   test(`Invalid login test with  -${row.username}  -${row.password}`, async ({loginPage})=>  // username and password getting from csv file
//   {
//     await loginPage.doLogin(row.username, row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()
//   })
// }

//DD_3: Excel 

let loginTestData=ExcelHelper.readExcel('src/data/OpenCartTestData.xlsx', 'login')

for(let row of loginTestData)
{
  test(`Invalid login test with excel data -${row.username} -${row.password}`, async ({loginPage}): Promise<void>=>  // username and password getting from excel  file
  {
    await loginPage.doLogin(row.username, row.password);
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()
  })
}

//DD_3: Json

// let loginJsonData=JsonHelper.readJson('src/data/LoginData.json')

// for(let row of loginJsonData)
// {
//   test(`Invalid login test with JSON data -${row.username}  -${row.password}`, async ({loginPage})=>  // username and password getting from JSON  file
//   {
//     await loginPage.doLogin(row.username, row.password);
//     expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy()
//   })
// }