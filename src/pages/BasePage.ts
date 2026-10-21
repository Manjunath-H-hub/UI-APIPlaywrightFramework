import { Locator, Page } from "@playwright/test";

export class BasePage
{
    protected readonly page:Page;
    //common locators across all pages
    protected readonly logo:Locator;
    protected readonly searchBox:Locator;
    protected readonly searchIcon:Locator;
    protected readonly footerLinks:Locator;
    protected readonly currency:Locator;
    protected readonly cartButton:Locator;


    constructor(page:Page)
    {
        this.page=page
        this.logo=page.getByRole('img', { name: 'naveenopencart' })
        this.searchBox=page.getByRole('textbox', { name: 'Search' })
        this.searchIcon=page.locator('.fa.fa-search')
        this.footerLinks=page.locator('footer a')
        this.currency=page.getByText('Currency', { exact: true })
        this.cartButton=page.locator('.col-sm-3 i.fa-shopping-cart')
    }

    //comman methods

    async isLogoVisible():Promise<boolean>
    {
        return await this.logo.isVisible()
    }
    
    
    async isSearchBoxVisible():Promise<boolean>
    {
        return await this.searchBox.isVisible()
    }

     async isSearchIconVisible():Promise<boolean>
    {
        return await this.searchIcon.isVisible()
    }

     async isFooterLinksVisible():Promise<boolean>
    {
        return await this.footerLinks.isVisible()
    }
    
     async isCurrencyButtonVisible():Promise<boolean>
    {
        return await this.currency.isVisible()
    }
   
      async isCartButtonVisible():Promise<boolean>
    {
        return await this.cartButton.isVisible()
    }

    //page level generic methods

    async getPageTitle():Promise<string>
    {
        return await this.page.title()
    }

    getPageURLs():string
    {
      return this.page.url()
    }

    async waitForPageLoad():Promise<void>
    {
        await this.page.waitForLoadState('load')
    }

    async takeScreenshot(name:string)
    {
        return await this.page.screenshot(
            {
                fullPage:true,
                path:`reports/screenshot/${name}.png`
            }
        )
    }
    
}