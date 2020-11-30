import axios, { AxiosRequestConfig } from 'axios';
import * as types from './types';

class Zoopla {
    private readonly baseUrl: string;

    constructor() {
        this.baseUrl = 'https://tk0j8r3nal.execute-api.us-east-1.amazonaws.com/dev/';
    }

    /**
     * Converts true / false bool to int boolean for some params as requested by Zoopla.
     * @param params
     * @private
     */
    private static booleanConverter(params: types.PropertyListingsRequest) {
        const cParams: types.PropertyListingsRequest = params;

        if ('include_featured_properties' in cParams) {
            cParams.include_featured_properties = cParams.include_featured_properties ? 1 : 0;
        }
        if ('include_sold' in cParams) {
            cParams.include_sold = cParams.include_sold ? 1 : 0;
        }
        if ('include_rented' in cParams) {
            cParams.include_rented = cParams.include_rented ? 1 : 0;
        }
        return cParams;
    }

    /**
     * Builds and then sends the request to the server.
     * @param endpoint
     * @param params
     * @private
     */
    private async makeRequest(endpoint, params) {
        const finalParams = Zoopla.booleanConverter(params);

        const request: AxiosRequestConfig = {
            url: `${endpoint}.js`,
            method: 'GET',
            baseURL: this.baseUrl,
            params: finalParams,
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
