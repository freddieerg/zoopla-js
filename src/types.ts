/* eslint-disable camelcase */
import * as filters from './filters';

export interface PricePerUnitArea {
    price?: number;
    units?: string;
}

export interface OtherImage {
    url?: string;
    description?: string;
}

export interface FloorArea {
    max_floor_area?: {
        value?: number;
        units?: string;
    };
    min_floor_area?: {
        value?: number;
        units?: string;
    };
}

export interface PropertyImage {
    original?: string;
    '480x360'?: string;
    '354x255'?: string;
    '645x430'?: string;
    '80x60'?: string;
    '768x576'?: string;
    '150x113'?: string;
    '1024x768'?: string;
    caption?: string;
    '50x38'?: string;
    '240x180'?: string;
}

export interface PriceChange {
    direction?: string;
    date?: string;
    percent?: string;
    price?: number;
}

export interface PropertyListing {
    country_code?: string;
    num_floors?: number;
    view_count_30day?: number;
    image_150_113_url?: string;
    listing_status?: string;
    num_bedrooms?: number;
    location_is_approximate?: boolean;
    image_50_38_url?: string;
    site_plan?: Array<string>;
    latitude?: number;
    view_count?: number;
    furnished_state?: boolean;
    agent_address?: string;
    branch_id?: number;
    category?: string;
    property_type?: string;
    images?: Array<PropertyImage>;
    longitude?: number;
    floor_area?: Array<FloorArea>;
    listing_date?: string;
    thumbnail_url?: string;
    description?: string;
    agent_postcode?: string;
    post_town?: string;
    details_url?: string;
    price_per_sq_ft?: number;
    short_description?: string;
    outcode?: string;
    other_image?: Array<OtherImage>;
    image_645_430_url?: string;
    price_per_unit_area?: PricePerUnitArea;
    title?: string;
    county?: string;
    price?: number;
    is_premium_listing?: boolean;
    listing_id?: number;
    bullet?: Array<any>;
    image_caption?: string;
    image_80_60_url?: string;
    property_number?: string;
    status?: string;
    agent_name?: string;
    num_recepts?: number;
    property_badge?: string;
    country?: string;
    first_published_date?: string;
    displayable_address?: string;
    price_modifier?: string;
    street_name?: string;
    num_bathrooms?: number;
    incode?: string;
    featured_type?: string;
    agent_logo?: string;
    price_change?: Array<PriceChange>;
    agent_phone?: string;
    image_354_255_url?: string;
    image_url?: string;
    last_published_date?: string;
    price_change_summary?: object;
    price_per_sq_metres?: number;
    original_image?: Array<string>;
}

export interface PropertyListingsResponse {
    country?: string;
    result_count?: number;
    longitude?: number;
    area_name?: string;
    listing?: Array<PropertyListing>;
    street?: string;
    town?: string;
    latitude?: number;
    county?: string;
    bounding_box?: object;
    postcode?: string;
}

export interface PropertyListingsRequest {
    area?: string;
    branch_id?: number;
    category?: filters.Category;
    chain_free?: boolean;
    created_since?: string | 'YYYY-MM-DD HH:MM:SS';
    description_style?: number;
    furnished?: filters.Furnished;
    include_featured_properties?: boolean | number;
    include_rented?: boolean | number;
    include_sold?: boolean | number;
    keywords?: string;
    listing_id?: number;
    listing_status?: filters.ListingStatus;
    maximum_beds?: number;
    maximum_price?: number;
    minimum_beds?: number;
    minimum_price?: number;
    new_homes?: boolean;
    order_by?: filters.OrderBy;
    ordering?: filters.Ordering;
    page_number?: number;
    page_size?: number;
    property_type?: filters.PropertyType;
    property_sub_type?: filters.PropertySubType;
    radius?: number;
    summarised?: boolean;
}
