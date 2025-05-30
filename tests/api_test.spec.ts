import {test, expect, request, APIRequestContext} from '@playwright/test';
import { RestFullAPI } from '../api/RestFullAPI';
import { CreateObjectData } from '../types/objectTypes';
import testObjectData from '../test-files/testObjectData.json';

let objectAPI: RestFullAPI;
let apiContext: APIRequestContext;
let objectId: string;

test.describe('RestFullAPI test Suite', () => {
    test.beforeAll(async ({}) => {
        apiContext = await request.newContext({
            baseURL: 'https://api.restful-api.dev',
        });
        objectAPI = new RestFullAPI(apiContext);
    });

    test('Create Object', async () => {
        const data: CreateObjectData = testObjectData.create;

        const response = await objectAPI.createObject(data);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        objectId = responseBody.id;
        expect(responseBody.name).toBe(data.name);
        expect(responseBody.data).toEqual(data.data);
    });

    test('Get Object', async () => {
        const response = await objectAPI.getObject(objectId);
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.id).toBe(objectId);
        expect(responseBody.name).toBe(testObjectData.create.name);
    });

    test('Edit object', async () => {
        const updatedData: CreateObjectData = testObjectData.update;
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