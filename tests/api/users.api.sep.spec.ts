import { ApiHelper } from '../../src/api/ApiHelper';
import{test,expect} from '../../src/fixtures/apifixtures'

const TOKEN=process.env.API_TOKEN!;
const AUTH_HEADER={Authorization: `Bearer ${TOKEN}`}

let userID:number

test.describe.serial(()=>
{
test('GET api -- get all users', async ({apiHelper})=>
{
    let response=await apiHelper.get('/public/v2/users',AUTH_HEADER)
    expect(response.status).toBe(200)
    expect((await response.body).length).toBeGreaterThan(0)
})

test('POST api -- Create a user', async ({apiHelper})=>
{

     let userData ={
        name:'Gururaaj API',
        email:`Gururaj_${Date.now()}@open.com`,
        gender:'Male',
        status:'inactive'
    }
    let response=await apiHelper.post('/public/v2/users',userData,AUTH_HEADER)
    expect(response.status).toBe(201)
    expect((await response.body).name).toBe(userData.name)
    userID=(await response.body).id
    console.log('Created user Id :', userID);
    
})

test('PUT api -- update a user', async ({apiHelper})=>
{

     let updatedUserData ={
        name:'Gururaaj API updated145',
        status:'active'
    }
    let response=await apiHelper.put(`/public/v2/users/${userID}`,updatedUserData,AUTH_HEADER)
    expect(response.status).toBe(200)
    expect((await response.body).name).toBe(updatedUserData.name)
    expect((await response.body).status).toBe(updatedUserData.status)
    
    
})

test('Delete api -- update a user', async ({apiHelper})=>
{

    let response=await apiHelper.delete(`/public/v2/users/${userID}`,AUTH_HEADER)
    expect(response.status).toBe(204)
    
    
    
})

})