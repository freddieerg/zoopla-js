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
    FarmsLand = 'farms_land',
}

export enum PropertySubType {
    Detached = 'detached',
    SemiDetached = 'semi_detached',
    Terraced = 'terraced',
    Bungalow = 'bungalow',
    DetachedBungalow = 'detached_bungalow',
    SemiDetachedBungalow = 'semi_detached_bungalow',
    TerracedBungalow = 'terraced_bungalow',
    Cottage = 'cottage',
    MobileParkHome = 'park_home',
}
