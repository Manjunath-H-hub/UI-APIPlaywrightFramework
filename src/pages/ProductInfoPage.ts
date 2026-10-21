
import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";


export class ProductInfoPage extends BasePage
{
    //private locators decleration

    private readonly headers:Locator;
    private readonly productImages:Locator;
    private readonly productMetaData:Locator;
    private readonly productPricing:Locator;
    private map:Map<string, string|number>;
    
    
    //controctor of the class and initialize the locators 
    constructor(page:Page)
    {
      super(page);
      this.headers=page.getByRole('heading', {level: 1})
      this.productImages=page.locator('div#content li img')
      this.productMetaData= page.locator('div#content ul.list-unstyled:nth-of-type(1) li')
      this.productPricing=page.locator('div#content ul.list-unstyled:nth-of-type(2) li')
      this.map=new Map<string,string>();
   
      
    }

    //action method

    async getProductHeader():Promise<string>
    {
        return await this.headers.innerText()
    }

    async getProductImageCount():Promise<number>
    {
        //await this.page.waitForTimeout(4000)  // this is static wait we generally avoid 
        await this.productImages.first().waitFor({state:'visible'})
        return await this.productImages.count()
    }

    /**
     * 
     * @returns this method is returning the actual product data: header, images, metadata, pricing data
     */

    async getProductInfo():Promise<Map<string,string | number>>
    {
        this.map.set('Product Headers', await this.getProductHeader())
        this.map.set('Product image count', await this.getProductImageCount())
        await this.getProductMetaData()
        await this.getProductPricingData()
        return this.map
    }
   
// Brand: Apple
// Product Code: Product 18
// Reward Points: 800
// Availability: Out Of Stock

  private  async getProductMetaData():Promise<void>
    {
        let metaData=await this.productMetaData.allInnerTexts()
        for(let data of metaData)
        {   
            let meta=data.split(':')
            let metaKey=meta[0].trim()
            let metaValue=meta[1].trim()
            this.map.set(metaKey,metaValue)
        }
    }
    

    // $2,000.00
    // Ex Tax: $2,000.00

   private async getProductPricingData():Promise<void>
    {
       let priceData= await this.productPricing.allInnerTexts()
       let productPrice=priceData[0].trim()
       let exTaxPrice=priceData[1].split(':')[1].trim()
       this.map.set('ProductPrice', productPrice)
       this.map.set('ExTaxPrice', exTaxPrice)
        
    }


}