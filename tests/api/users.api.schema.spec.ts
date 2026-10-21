
/*import{test, expect} from '@playwright/test'
import Ajv from 'ajv'

let TOKEN=process.env.API_TOKEN!
let AUTH_HEADER= {Authorization: `Bearer ${TOKEN}`}

//set up the ajv
let ajv=new Ajv()

//define json schema
let userSchema=
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "gender": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "email",
    "gender",
    "status"
  ]
}

let usersArraysSchema=
{
  "type": "array",
  "items": userSchema
}

test('GET --- get a user', async({apiHelper})=>
{
   let userData=
   {
    name:'Guru API Auto',
    email:`automation_${Date.now()}@open.com`,
    gender:'Male',
    status:'Active'
   }
    
   //post create a user
   let createResponse=await apiHelper.post('/public/v2/users', userData,AUTH_HEADER)
   let userId=createResponse.body.id

   //get a user
   let getUserResponse=await apiHelper.get(`/public/v2/users${userId}`,AUTH_HEADER)
   expect(getUserResponse.status()).toBe(200)

   // schema validation code
   let validate=ajv.compile(userSchema)
   let isSchemaValid=validate(getUserResponse.body)

   if(!isSchemaValid)
   {
    console.log('Schema errors', validate.errors);
   }
   expect(isSchemaValid).toBeTruthy()


})

*/