import {test, expect, request, APIRequestContext} from '@playwright/test';
import { RestFullAPI } from '../api/RestFullAPI';

let objectAPI: RestFullAPI;
let apiContext: APIRequestContext;
let objectId: string;

const testData = {
    name: 'Test divice 1',
    data: {
        brand: 'Mac Mini M4',
        year: 2024
    },
};

test.describe('RestFullAPI test Suite', () => {
    test.beforeAll(async ({}) => {
        apiContext = await request.newContext({
            baseURL: 'https://api.restful-api.dev',
        });
        objectAPI = new RestFullAPI(apiContext);
    });

    test('Create Object', async () => {
        const response = await objectAPI.createObject(testData);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        objectId = responseBody.id;
        expect(responseBody.name).toBe(testData.name);
        expect(responseBody.data).toEqual(testData.data);
    });

    test('Get Object', async () => {
        const response = await objectAPI.getObject(objectId);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.id).toBe(objectId);
        expect(responseBody.name).toBe(testData.name);
    });

    test('Edit object', async () => {
        const updatedData = {
            name: 'Updated Test divice 1',
            data: {
                brand: 'Mac Mini M3',
                year: 2025
            },
        };
        const response = await objectAPI.updateObject(objectId, updatedData);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.name).toBe(updatedData.name);
        expect(responseBody.data).toEqual(updatedData.data);
    });

    test('Delete Object', async () => {
        const response = await objectAPI.deleteObject(objectId);
        expect(response.ok()).toBeTruthy();
    });

    test.afterAll(async () => {
        await apiContext.dispose();
    });
});