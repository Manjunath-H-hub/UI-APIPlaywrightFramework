
import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";


export class SearchResultsPage extends BasePage
{
    //private locators decleration

    private readonly searchResult:Locator;
    
    
    //controctor of the class and initialize the locators 
    constructor(page:Page)
    {
      super(page);
      this.searchResult=page.locator('.product-layout')
   
      
    }

    //action method
    async getProductSearchResultsCount():Promise<number>
    {
       return await this.searchResult.count()
    }

    async selectProduct(productName:string):Promise<void>
    {
        await this.page.getByRole('link', { name: productName, exact:true }).first().click()

    }
    


}