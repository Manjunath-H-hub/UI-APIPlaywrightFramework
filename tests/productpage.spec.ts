
import {test, expect} from '../src/fixtures/pagefixtures'
import { SearchResultsPage } from '../src/pages/SearchResultsPage'



test.beforeEach(async ({loginPage})=>
{
    await loginPage.goToLoginPage()
    await loginPage.doLogin(process.env.MY_USERNAME!, process.env.MY_PASSWORD!)

})


   test('Verify the product images count', async ({homePage,searchResultsPage,productInfoPage})=>
{
    await homePage.doSearch('macbook')
    await searchResultsPage.selectProduct('MacBook Pro')
    let imageCount=await productInfoPage.getProductImageCount()
    console.log('Image count on product info page :', imageCount);
    expect(imageCount).toBe(4)

})

   test('Verify the product information/Data', async ({homePage,searchResultsPage,productInfoPage})=>
{
    await homePage.doSearch('macbook')
    await searchResultsPage.selectProduct('MacBook Pro')
    let actualProductInfoMap=await productInfoPage.getProductInfo()
    console.log('Actual product details :',actualProductInfoMap);
    expect.soft(actualProductInfoMap.get('Product Headers')).toBe('MacBook Pro')
    expect.soft(actualProductInfoMap.get('Product image count')).toBe(4)
    expect.soft(actualProductInfoMap.get('Brand')).toBe('Apple')
    expect.soft(actualProductInfoMap.get('Product Code')).toBe('Product 18')
    expect.soft(actualProductInfoMap.get('Reward Points')).toBe('800')
    expect.soft(actualProductInfoMap.get('Availability')).toBe('Out Of Stock')
    expect.soft(actualProductInfoMap.get('ProductPrice')).toBe('$2,000.00')
    expect.soft(actualProductInfoMap.get('ExTaxPrice')).toBe('$2,000.00')

})





