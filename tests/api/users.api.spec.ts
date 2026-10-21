
import {test,expect} from '@playwright/test'

let AUTH_TOKEN={Authorization: 'Bearer d708e6f7d989043609266913f26dd0b32ce1fe260dfff7b404d79bae3d2a1615'}


test('Get a user test', async ({request})=>
{
   let getResponse= await request.get('https://gorest.co.in/public/v2/users/8671696',
        {
           headers:AUTH_TOKEN 
        }
       )

       console.log(getResponse);

       let getResponseJson=await getResponse.json()
       console.log(getResponseJson);
       console.log(getResponse.status());
       console.log(getResponse.statusText());

})

test('Create a user test', async ({request})=>
{
    let userData ={
        name:'Gururaaj',
        email:`Gururaj_${Date.now()}@open.com`,
        gender:'Male',
        status:'Active'
    }

   let postResponse= await request.post('https://gorest.co.in/public/v2/users/',
        {
           data:userData,
           headers:AUTH_TOKEN,
        
        }
       )

       console.log(postResponse);

       let postResponseJson=await postResponse.json()
       console.log(postResponseJson);
       console.log(postResponse.status()); //201     422 =Unprocessable Entity  (if you run again with same data)
       console.log(postResponse.statusText());  //created
      

})


test('Update a user test', async ({request})=>
{
    let userData ={
        name:'GururaajGood',
        email:`Gururaj_${Date.now()}@open.com`,
        gender:'Male',
        status:'InActive'
    }

   let putResponse= await request.put('https://gorest.co.in/public/v2/users/8675129',
        {
           data:userData,
           headers:AUTH_TOKEN,
        
        }
       )

       console.log(putResponse);

       let putResponseJson=await putResponse.json()
       console.log(putResponseJson);
       console.log(putResponse.status()); //200
       console.log(putResponse.statusText());  //ok
      

})

test('Delete a user test', async ({request})=>
{
    

   let deleteResponse= await request.delete('https://gorest.co.in/public/v2/users/8675129',
        {
           headers:AUTH_TOKEN,
        
        }
       )
      
       console.log(deleteResponse.status()); //204
       console.log(deleteResponse.statusText());  // no content 
      

})
