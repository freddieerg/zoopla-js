import axios, { AxiosRequestConfig } from 'axios';

import * as types from './types';

class Zoopla {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://tk0j8r3nal.execute-api.us-east-1.amazonaws.com/dev/';
    }

    /**
     * Builds and then sends the request to the server.
     * @param endpoint
     * @param params
     * @private
     */
    private async makeRequest(endpoint, params) {
        const request: AxiosRequestConfig = {
            url: `${endpoint}.js`,
            method: 'GET',
            baseURL: this.baseUrl,
            params,
        };
        return (await axios.request(request)).data;
    }

    /**
     * Retrieve property listings for a given area.
     * @param params
     */
    public async propertyListings(params: types.PropertyListingsRequest): Promise<types.PropertyListingsResponse> {
        return this.makeRequest('property_listings', params);
    }
}

export default Zoopla;
