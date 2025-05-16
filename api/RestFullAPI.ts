import { APIRequestContext, APIResponse } from '@playwright/test';

export class RestFullAPI {
    private readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createObject(data: any): Promise<APIResponse> {
        return this.request.post('/objects', { data });
    }

    async getObject(id: string): Promise<APIResponse> {
        return this.request.get(`/objects/${id}`);
    }

    async updateObject(id: string, data: any): Promise<APIResponse>{
        return this.request.put(`/objects/${id}`, { data });
    }

    async deleteObject(id: string): Promise<APIResponse> {
        return this.request.delete(`/objects/${id}`);
    }

}