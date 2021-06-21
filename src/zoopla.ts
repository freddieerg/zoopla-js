import axios, { AxiosRequestConfig } from 'axios';
import axiosRetry from 'axios-retry';
import * as types from './types';

axiosRetry(axios, { retries: 5 });

interface TokenData {
    api_hash: string;
    api_key: string;
    timestamp: number;
}

class Zoopla {
    private readonly authServer: string;

    private readonly baseUrl: string;

    constructor() {
        this.authServer = 'https://m0zls7tlr7.execute-api.eu-west-1.amazonaws.com/';
        this.baseUrl = 'https://api-native-ios.zoopla.co.uk/api/v2/';
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
     * Sorts all params alphabetically by key.
     * @param params
     * @private
     */
    private sortParams(params: object): object {
        const ordered: object = {};
        Object.keys(params)
            .sort()
            .forEach((key) => {
                ordered[key] = params[key];
            });

        return ordered;
    }

    /**
     * Requests the authentication token from the auth server.
     * @param params
     * @private
     */
    private async getAuthToken(params): Promise<TokenData> {
        const request: AxiosRequestConfig = {
            url: 'token',
            method: 'GET',
            baseURL: this.authServer,
            params,
        };

        return (await axios.request(request)).data;
    }

    /**
     * Builds and then sends the request to the server.
     * @param endpoint
     * @param params
     * @private
     */
    private async makeRequest(endpoint, params) {
        const convertedParams = Zoopla.booleanConverter(params);
        const tokenData = await this.getAuthToken(convertedParams);
        const sortedParams = this.sortParams({ ...convertedParams, ...{ api_key: tokenData.api_key } });
        const finalParams = { ...sortedParams, ...{ timestamp: tokenData.timestamp, api_hash: tokenData.api_hash } };

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

    /**
     * Retrieve the Zoopla.co.uk Zed-Index! for a requested area.
     * @param params
     */
    public async zedIndex(params: types.ZedIndexRequest): Promise<types.ZedIndexResponse> {
        return this.makeRequest('zed_index', params);
    }

    /**
     * Generate a graph of values for an outcode over the previous 3 months
     * and return the URL to the generated image. Please note that the output
     * type must always be "outcode" for this method and therefore an area sufficient
     * to produce an outcode is required.
     * @param params
     */
    public async areaValueGraphs(params: types.AreaValueGraphsRequest): Promise<types.AreaValueGraphsResponse> {
        return this.makeRequest('area_value_graphs', params);
    }

    /**
     * Retrieve richlist values for a specific area.
     * @param params
     */
    public async richList(params: types.RichListRequest): Promise<types.RichListResponse> {
        return this.makeRequest('richlist', params);
    }

    /**
     * Retrieve the average sale price for properties in a particular area.
     * @param params
     */
    public async averagesArea(params: types.AveragesAreaRequest): Promise<types.AveragesAreaResponse> {
        return this.makeRequest('averages_area', params);
    }

    /**
     * Retrieve a list of house price estimates for the requested area.
     * @param params
     */
    public async zedIndices(params: types.ZedIndicesRequest): Promise<types.ZedIndicesResponse> {
        return this.makeRequest('zed_indices', params);
    }

    /**
     * Retrieve a list of Zoopla estimates for the requested area.
     * @param params
     */
    public async zooplaEstimates(params: types.ZooplaEstimatesRequest): Promise<types.ZooplaEstimatesResponse> {
        return this.makeRequest('zoopla_estimates', params);
    }

    /**
     * Retrieve the average sale price for a particular sub-area type within a particular area.
     * @param params
     */
    public async averageSoldPrices(params: types.AverageSoldPricesRequest): Promise<types.AverageSoldPricesResponse> {
        return this.makeRequest('average_sold_prices', params);
    }
}

export default Zoopla;
