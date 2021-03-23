/* eslint-disable camelcase */
import * as Filters from './filters';

export interface PricePerUnitArea {
    price: number;
    units: string;
}

export interface OtherImage {
    url: string;
    description: string;
}

export interface FloorArea {
    max_floor_area: {
        value: number;
        units: string;
    };
    min_floor_area?: {
        value?: number;
        units?: string;
    };
}

export interface PropertyImage {
    original: string;
    '480x360': string;
    '354x255': string;
    '645x430': string;
    '80x60': string;
    '768x576': string;
    '150x113': string;
    '1024x768': string;
    caption: string;
    '50x38': string;
    '240x180': string;
}

export interface PriceChange {
    direction: string;
    date: string;
    percent: string;
    price: number | string;
}

export interface PriceChangeSummary {
    direction: string;
    percent: string;
    last_updated_date: string;
}

export interface BoundingBox {
    longitude_min: string;
    latitude_min: string;
    longitude_max: string;
    latitude_max: string;
}

export interface RichListArea {
    details_url: string;
    name: string;
    zed_index: number;
}

export interface PropertyListing {
    country_code: string;
    num_floors: number;
    view_count_30day: number;
    image_150_113_url: string | null;
    listing_status: string;
    num_bedrooms: number | string;
    location_is_approximate: boolean;
    image_50_38_url?: string | null;
    site_plan?: string[];
    latitude: number;
    view_count: number;
    furnished_state: string | null;
    agent_address: string;
    branch_id: number;
    brochure?: string[];
    category: string;
    property_type: string;
    images: PropertyImage[];
    longitude: number;
    floor_area: FloorArea[];
    floor_plan: string[];
    epc_graph: string[];
    listing_date: string;
    thumbnail_url: string;
    description: string;
    agent_postcode: string;
    post_town: string | null;
    details_url: string;
    price_per_sq_ft?: number;
    short_description: string;
    outcode: string;
    other_image: OtherImage[];
    image_645_430_url: string | null;
    price_per_unit_area?: PricePerUnitArea;
    title: string;
    county: string | null;
    price: number;
    is_premium_listing: boolean;
    listing_id: number;
    bullet: string[];
    image_caption: string;
    image_80_60_url: string | null;
    property_number: string;
    status: string;
    agent_name: string;
    num_recepts: number;
    property_badge: string;
    country: string;
    first_published_date: string;
    displayable_address: string;
    price_modifier?: string;
    street_name: string;
    num_bathrooms: number | string;
    incode: string;
    featured_type: string;
    agent_logo: string;
    price_change?: PriceChange[];
    agent_phone: string;
    image_354_255_url: string | null;
    image_url: string;
    last_published_date: string;
    price_change_summary?: PriceChangeSummary;
    price_per_sq_metres?: number;
    original_image: string[];
}

export interface PropertyListingsResponse {
    country: string;
    result_count: number;
    longitude?: number;
    area_name: string;
    listing: PropertyListing[];
    street: string;
    town: string;
    latitude?: number;
    county: string;
    bounding_box?: object;
    postcode: string;
}

export interface PropertyListingsRequest {
    area?: string;
    branch_id?: number;
    category?: Filters.Category;
    chain_free?: boolean;
    created_since?: string | 'YYYY-MM-DD HH:MM:SS';
    description_style?: number;
    furnished?: Filters.Furnished;
    include_featured_properties?: boolean | number;
    include_rented?: boolean | number;
    include_sold?: boolean | number;
    keywords?: string;
    listing_id?: number;
    listing_status?: Filters.ListingStatus;
    maximum_beds?: number;
    maximum_price?: number;
    minimum_beds?: number;
    minimum_price?: number;
    new_homes?: boolean;
    order_by?: Filters.OrderBy;
    ordering?: Filters.Ordering;
    page_number?: number;
    page_size?: number;
    property_type?: Filters.PropertyType;
    property_sub_type?: Filters.PropertySubType;
    radius?: number;
    summarised?: boolean;
}

export interface ZedIndexRequest {
    area?: string;
    output_type?: Filters.OutputType;
}

export interface ZedIndexResponse {
    rental_estimate?: string;
    area_url?: string;
    street?: string;
    zed_index_1year?: number;
    town?: string;
    zed_index?: number;
    average_rental_price?: number;
    zed_index_2year?: number;
    zed_index_3year?: number;
    latitude?: number;
    postcode?: string;
    zed_index_6month?: number;
    country?: string;
    longitude?: number;
    area_name?: string;
    zed_index_3month?: number;
    zed_index_4year?: number;
    county?: string;
    zed_index_5year?: number;
    bounding_box?: BoundingBox;
}

export interface AreaValueGraphsRequest {
    area?: string;
    size?: Filters.Size;
    output_type?: Filters.OutputType;
}

export interface AreaValueGraphsResponse {
    country?: string;
    longitude?: number;
    area_name?: string;
    street?: string;
    town?: string;
    average_values_graph_url?: string;
    latitude?: number;
    value_ranges_graph_url?: string;
    county?: string;
    value_trend_graph_url?: string;
    postcode?: string;
    area_values_url?: string;
    bounding_box?: BoundingBox;
    home_values_graph_url?: string;
}

export interface RichListRequest {
    area?: string;
    output_type?: Filters.OutputType;
    area_type?: Filters.AreaType;
}

export interface RichListResponse {
    country?: string;
    longitude?: number;
    area_name?: string;
    highest?: Array<RichListArea>;
    street?: string;
    town?: string;
    lowest?: Array<RichListArea>;
    latitude?: number;
    richlist_url?: string;
    county?: string;
    bounding_box?: BoundingBox;
    postcode?: string;
}

export interface AveragesAreaSalesData {
    average_price_paid?: number;
    number_of_sales?: number;
}

export interface AveragesAreaPropertyType {
    '12_months'?: AveragesAreaSalesData;
    '20_years'?: AveragesAreaSalesData;
    '6_months'?: AveragesAreaSalesData;
    '5_years'?: AveragesAreaSalesData;
    '10_years'?: AveragesAreaSalesData;
    all?: AveragesAreaSalesData;
    '3_months'?: AveragesAreaSalesData;
}

export interface AveragesAreaRequest {
    area?: string;
    output_type?: Filters.OutputType;
}

export interface AveragesAreaResponse {
    country?: string;
    longitude?: number;
    area_name?: string;
    terraced?: AveragesAreaPropertyType;
    detached?: AveragesAreaPropertyType;
    street?: string;
    town?: string;
    all?: AveragesAreaPropertyType;
    semi_detached?: AveragesAreaPropertyType;
    latitude?: number;
    county?: string;
    postcode?: string;
    bounding_box?: BoundingBox;
    flat?: AveragesAreaPropertyType;
}

export interface ZedIndicesResult {
    longitude?: string;
    latitude?: string;
    name?: string;
    zed_index?: number;
}

export interface ZedIndicesRequest {
    ordering?: Filters.Ordering;
    output_type?: Filters.OutputType;
    area_type?: Filters.AreaType;
    page_number?: number;
    page_size?: number;
}

export interface ZedIndicesResponse {
    country?: string;
    result_count?: number;
    longitude?: number;
    area_name?: string;
    street?: string;
    town?: string;
    results_url?: string;
    latitude?: number;
    county?: string;
    bounding_box?: BoundingBox;
    postcode?: string;
    results?: Array<ZedIndicesResult>;
}

export interface ValueHistory {
    direction: string;
    interval_months: string;
    percent_change: number;
    price_change: number;
}

export interface ZooplaEstimatesProperty {
    address?: string;
    change_1year?: number;
    change_2year?: number;
    change_3month?: number;
    change_3year?: number;
    change_4year?: number;
    change_5year?: number;
    change_6month?: number;
    claimed_status?: number;
    confidence_rating?: string;
    country?: string;
    county?: string;
    details_url?: string;
    estimate_value?: number;
    estimate_value_lower?: number;
    estimate_value_upper?: number;
    last_sale_date?: string;
    last_sale_price?: number;
    latitude?: string;
    listing_id?: any[];
    longitude?: string;
    percent_change_1year?: number;
    percent_change_2year?: number;
    percent_change_3month?: number;
    percent_change_3year?: number;
    percent_change_4year?: number;
    percent_change_5year?: number;
    percent_change_6month?: number;
    postcode?: string;
    property_id?: number;
    property_type?: string;
    refine_estimate_url?: string;
    rental_estimate_value_lower?: number;
    rental_estimate_value_upper?: number;
    rental_value?: any;
    street?: string;
    temptme_status?: number;
    tenure?: string;
    town?: string;
    value_history?: Array<ValueHistory>;
    num_baths?: string;
    num_beds?: string;
    num_recepts?: string;
}

export interface ZooplaEstimatesRequest {
    area?: string;
    order_by?: Filters.EstimatesOrderBy;
    ordering?: Filters.Ordering;
    page_number?: number;
    page_size?: number;
    property_type?: Filters.EstimatesPropertyType;
}

export interface ZooplaEstimatesResponse {
    area_name?: string;
    bounding_box?: BoundingBox;
    country?: string;
    county?: string;
    latitude?: number;
    longitude?: number;
    postcode?: string;
    property?: Array<ZooplaEstimatesProperty>;
    result_count?: number;
    street?: string;
    town?: string;
}

export interface AverageSoldPricesArea {
    number_of_sales_7year?: number;
    average_sold_price_7year?: number;
    number_of_sales_5year?: number;
    number_of_sales_3year?: number;
    average_sold_price_1year?: number;
    number_of_sales_1year?: number;
    turnover?: string;
    prices_url?: string;
    average_sold_price_3year?: number;
    average_sold_price_5year?: number;
}

export interface AverageSoldPricesRequest {
    area?: string;
    area_type?: Filters.AreaType;
    output_type?: Filters.OutputType;
    page_number?: number;
    page_size?: number;
    ordering?: Filters.Ordering;
}

export interface AverageSoldPricesResponse {
    country?: string;
    result_count?: number;
    longitude?: number;
    area_name?: string;
    street?: string;
    town?: string;
    latitude?: number;
    county?: string;
    areas?: Array<AverageSoldPricesArea>;
    bounding_box?: BoundingBox;
    postcode?: string;
}
