
import {test, expect} from '../src/fixtures/pagefixtures'
import { SearchResultsPage } from '../src/pages/SearchResultsPage'
import { CsvHelper } from '../src/utils/CsvHelper'



test.beforeEach(async ({loginPage})=>
{
    await loginPage.goToLoginPage()
    await loginPage.doLogin(process.env.MY_USERNAME!, process.env.MY_PASSWORD!)

})

//DATA PROVIDER
let productData=CsvHelper.readCsv('src/data/product.csv')

for(let row of productData)
{
   test(`Verify search search results count - ${row.searchkey}  -${row.productname}`, async ({homePage,searchResultsPage})=>
{
    await homePage.doSearch(row.searchkey)
    let number=await searchResultsPage.getProductSearchResultsCount()
    expect(number).toBe(Number(row.resultcount))

})

}

for(let row of productData)
{
    test(`Verify user is able to land on product page  ${row.searchkey} - ${row.productname}`, async ({homePage,searchResultsPage,page})=>
{
    await homePage.doSearch(row.searchkey)
    await searchResultsPage.selectProduct(row.productname)
    expect(await page.title()).toBe(row.productname)

})

}



