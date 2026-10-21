
import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";


export class HomePage extends BasePage
{
    //private locators decleration

    private readonly logoutLink:Locator;
    private readonly headers:Locator;
   
    
    //controctor of the class and initialize the locators 
    constructor(page:Page)
    {
      super(page);
      this.logoutLink=page.getByRole('link', { name: 'Logout' })
      this.headers=page.getByRole('heading', {level: 2 })
     
      
    }
    //public page actions(methods)/behaviour
    
    async isLogoutLinkExist():Promise<boolean>
    {
        return await this.logoutLink.isVisible()
    }

   async getHomePageHeaders():Promise<String[]>
   {
    return await this.headers.allInnerTexts()
   }
   
   async doSearch(searchKey:string):Promise<void>
   {
      console.log(`search key : ${searchKey}`);
      await this.searchBox.fill(searchKey)
      await this.searchIcon.click()
   }


}