
/*import { ApiHelper } from '../../src/api/ApiHelper';
import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN!;
const AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

//helper - generic function - create a fresh user
async function createUser(apiHelper:any)
{
     let userData = {
                name: 'Gururaaj API',
                email: `Gururaj_${Date.now()}@open.com`,
                gender: 'Male',
                status: 'active' 
            };
            
            let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
            expect(response.status).toBe(201);
            return response.body
            
        
}

// Test 1 create a user and verify + verify :AAA
// POST ----> userId--->GET /userId ----verify 

test('POST - create a user', async ({apiHelper})=>
{
    //create a user
    let userResponse=await createUser(apiHelper)

    //get a user
    let response=await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER)
    expect(response.status).toBe(200)
    expect(await response.body.name).toBe('Gururaaj')

})

// Test 2 update a user and verify + verify :AAA
// POST ----> userId--PUT(Update)--->GET /userId ----verify 

test('PUT - update a user', async ({apiHelper})=>
{
    //create a user
    let userResponse=await createUser(apiHelper)

    // update a user
     let updatedUserData ={
        name:'Gururaaj API updated145',
        status:'active'
    }
    let responsePut=await apiHelper.put(`/public/v2/users/${userResponse.id}`,updatedUserData,AUTH_HEADER)
    expect(responsePut.status).toBe(200)
    expect(await responsePut.body.name).toBe(updatedUserData.name)
    expect(await responsePut.body.status).toBe(updatedUserData.status)

    //get a user
    let responseGet=await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER)
    expect(responseGet.status).toBe(200)
    expect(await responseGet.body.name).toBe(updatedUserData.name)

})

// Test 3 delete a user and verify + verify :AAA
// POST ----> userId--Delete--->GET ----verify 

test('Delete - delete a user', async ({apiHelper})=>
{
    //create a user
    let userResponse=await createUser(apiHelper)

    //delete a user
    let responseD=await apiHelper.delete(`/public/v2/users/${userResponse.id}`,AUTH_HEADER)
    expect(responseD.status).toBe(204)
    
     //get a user
    let responseGet=await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER)
    expect(responseGet.status).toBe(404)
    

})
    */