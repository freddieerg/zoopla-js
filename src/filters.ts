/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum Category {
    Residential = 'residential',
    Commercial = 'commercial',
}

export enum ListingStatus {
    Sale = 'sale',
    Rent = 'rent',
}

export enum Furnished {
    Furnished = 'furnished',
    Unfurnished = 'unfurnished',
    PartFurnished = 'part-furnished',
}

export enum OrderBy {
    Age = 'age',
    Price = 'price',
    PriceChange = 'price_change',
    ViewCount = 'view_count',
}

export enum Ordering {
    Descending = 'descending',
    Ascending = 'ascending',
}

export enum PropertyType {
    Houses = 'houses',
    Flats = 'flats',
    Retail = 'retail',
    FarmsLand = 'farms_land',
}

export enum PropertySubType {
    Detached = 'detached',
    SemiDetached = 'semi_detached',
    Terraced = 'terraced',
    CountryHouse = 'country_house',
    TerracedHouse = 'terraced_house',
    Industrial = 'industrial',
    LightIndustrial = 'light_industrial',
    Bungalow = 'bungalow',
    Office = 'office',
    Studio = 'studio',
    TownHouse = 'townhouse',
    BlockOfFlats = 'block_of_flats',
    DetachedBungalow = 'detached_bungalow',
    SemiDetachedBungalow = 'semi_detached_bungalow',
    TerracedBungalow = 'terraced_bungalow',
    Cottage = 'cottage',
    MobileParkHome = 'park_home',
}
