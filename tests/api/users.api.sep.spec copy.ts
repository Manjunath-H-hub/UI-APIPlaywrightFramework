import { ApiHelper } from '../../src/api/ApiHelper';
import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN!;
const AUTH_HEADER = { Authorization: `Bearer ${TOKEN}` };

// Use a shared object or scope container if sharing state across serial tests, 
// or let Playwright handle test info annotations. For simplicity with serial tests, 
// a module-scoped variable works if workers: 1 is set in playwright.config.ts.
let userID: number;

test.describe.serial('User API CRUD Workflow', () => {

    test('GET api -- get all users', async ({ apiHelper }) => {
        let response = await apiHelper.get('/public/v2/users', AUTH_HEADER);
        expect(response.status).toBe(200);
        
        const body = await response.body;
        expect(body.length).toBeGreaterThan(0);
    });

    test('POST api -- Create a user', async ({ apiHelper }) => {
        let userData = {
            name: 'Gururaaj API',
            email: `Gururaj_${Date.now()}@open.com`,
            gender: 'Male',
            status: 'inactive' // GoRest accepts 'active' or 'inactive' (lowercase)
        };
        
        let response = await apiHelper.post('/public/v2/users', userData, AUTH_HEADER);
        expect(response.status).toBe(201);
        
        const body = await response.body;
        expect(body.name).toBe(userData.name);
        userID = body.id;
        console.log('Created user Id :', userID);
    });

    test('PUT api -- update a user', async ({ apiHelper }) => {
        // Ensure userID is captured before updating
        expect(userID).toBeDefined();

        let updatedUserData = {
            name: 'Gururaaj API updated145',
            status: 'active'
        };
        
        let response = await apiHelper.put(`/public/v2/users/${userID}`, updatedUserData, AUTH_HEADER);
        expect(response.status).toBe(200);
        
        const body = await response.body;
        expect(body.name).toBe(updatedUserData.name);
        expect(body.status).toBe(updatedUserData.status);
    });

    test('Delete api -- delete a user', async ({ apiHelper }) => {
        // Ensure userID is captured before deleting
        expect(userID).toBeDefined();

        let response = await apiHelper.delete(`/public/v2/users/${userID}`, AUTH_HEADER);
        expect(response.status).toBe(204);
    });

});