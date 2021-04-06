import Zoopla, { Filters } from '../src';

const zoopla = new Zoopla();

describe('endpoint tests', () => {
    test('propertyListings', async () => {
        try {
            await zoopla.propertyListings({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('7');
        }
    });

    test('zedIndex', async () => {
        try {
            await zoopla.zedIndex({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('7');
        }
    });

    test('areaValueGraphs', async () => {
        try {
            await zoopla.areaValueGraphs({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('1');
        }
    });

    test('richList', async () => {
        try {
            await zoopla.richList({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('1');
        }
    });

    test('averagesArea', async () => {
        try {
            await zoopla.averagesArea({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('1');
        }
    });

    test('zedIndices', async () => {
        try {
            await zoopla.zedIndices({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('1');
        }
    });

    test('zooplaEstimates', async () => {
        try {
            await zoopla.zooplaEstimates({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('7');
        }
    });

    test('averageSoldPrices', async () => {
        try {
            await zoopla.averageSoldPrices({});
        } catch (e) {
            expect(e.response.data.error_code).toBe('1');
        }
    });
});

describe('property-listings tests', () => {
    test('area', async () => {
        const r = await zoopla.propertyListings({
            area: 'Bampton, Oxfordshire',
        });

        expect(r.area_name).toEqual('Bampton');
        expect(r.county).toEqual('Oxfordshire');
    });

    test('branch_id', async () => {
        const r = await zoopla.propertyListings({
            branch_id: 13801,
        });

        r.listing.forEach((listing) => {
            expect(listing.branch_id).toEqual('13801');
        });
    });

    describe('category', () => {
        test('commercial', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                category: Filters.Category.Commercial,
            });

            r.listing.forEach((listing) => {
                expect(listing.category).toEqual('Commercial');
            });
        });

        test('residential', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                category: Filters.Category.Residential,
            });

            r.listing.forEach((listing) => {
                expect(listing.category).toEqual('Residential');
            });
        });
    });

    test('created_since', async () => {
        const testDateTime = '2020-11-15 00:00:00';
        const testDateTimeEpoch = Date.parse(testDateTime);

        const r = await zoopla.propertyListings({
            area: 'England',
            created_since: testDateTime,
            order_by: Filters.OrderBy.Age,
            ordering: Filters.Ordering.Ascending,
        });

        r.listing.forEach((listing) => {
            expect(Date.parse(listing.last_published_date)).toBeGreaterThanOrEqual(testDateTimeEpoch);
        });
    });

    describe('furnished state', () => {
        test('furnished', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                furnished: Filters.Furnished.Furnished,
                order_by: Filters.OrderBy.Age,
            });

            r.listing.forEach((listing) => {
                expect(['furnished_or_unfurnished', 'furnished']).toContain(listing.furnished_state);
            });
        });

        test('unfurinished', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                furnished: Filters.Furnished.Unfurnished,
                order_by: Filters.OrderBy.Age,
            });

            r.listing.forEach((listing) => {
                expect(['furnished_or_unfurnished', 'unfurnished']).toContain(listing.furnished_state);
            });
        });

        test('part furnished', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                furnished: Filters.Furnished.PartFurnished,
                order_by: Filters.OrderBy.Age,
            });

            r.listing.forEach((listing) => {
                expect(['furnished_or_unfurnished', 'part_furnished']).toContain(listing.furnished_state);
            });
        });
    });

    test('keywords', async () => {
        const kwTest: string = 'STPP';
        const r = await zoopla.propertyListings({
            area: 'England',
            keywords: kwTest,
        });

        // kw can be in description or bullet so need to add description to array and test for substring match

        r.listing.forEach((listing) => {
            listing.bullet.push(r.listing[0].description);
            const foundMatch = r.listing[0].bullet.filter((element) => element.includes(kwTest)).length > 0;
            expect(foundMatch).toBeTruthy();
        });
    });

    test('listing_id', async () => {
        const testListingId = 57195600;
        const r = await zoopla.propertyListings({
            listing_id: testListingId,
            include_sold: true,
        });

        expect(r.result_count).toBe(1);
        expect(r.listing[0].listing_id).toBe(testListingId.toString());
    });

    describe('listing_status', () => {
        test('sale', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                listing_status: Filters.ListingStatus.Sale,
            });

            r.listing.forEach((listing) => {
                expect(listing.listing_status).toBe('sale');
            });
        });

        test('rent', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                listing_status: Filters.ListingStatus.Rent,
            });

            r.listing.forEach((listing) => {
                expect(listing.listing_status).toBe('rent');
            });
        });
    });

    test('max/min beds', async () => {
        const r = await zoopla.propertyListings({
            area: 'England',
            maximum_beds: 5,
            minimum_beds: 5,
        });

        r.listing.forEach((listing) => {
            // annoyingly this value can sometimes be a string so we need to parse it to an int
            const numBedrooms =
                typeof listing.num_bedrooms === 'string' ? parseInt(listing.num_bedrooms) : listing.num_bedrooms;
            expect(numBedrooms).toBe(5);
        });
    });

    test('max/min price', async () => {
        const r = await zoopla.propertyListings({
            area: 'England',
            maximum_price: 750000,
            minimum_beds: 700000,
        });

        r.listing.forEach((listing) => {
            expect(listing.price).toBeLessThanOrEqual(750000);
            expect(listing.price).toBeGreaterThanOrEqual(700000);
        });
    });

    describe('order_by', () => {
        test('age: desc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.Age,
                ordering: Filters.Ordering.Descending,
            });

            let previousAgeEpoch = 9999999999999;
            let currentAgeEpoch = 0;

            r.listing.forEach((listing) => {
                currentAgeEpoch = Date.parse(listing.first_published_date);
                expect(currentAgeEpoch).toBeLessThanOrEqual(previousAgeEpoch);
                previousAgeEpoch = currentAgeEpoch;
            });
        });

        test('age: asc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.Age,
                ordering: Filters.Ordering.Ascending,
            });

            let previousAgeEpoch = 0;
            let currentAgeEpoch = 0;

            r.listing.forEach((listing) => {
                currentAgeEpoch = Date.parse(listing.first_published_date);
                expect(currentAgeEpoch).toBeGreaterThanOrEqual(previousAgeEpoch);
                previousAgeEpoch = currentAgeEpoch;
            });
        });

        test('price: desc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.Price,
                ordering: Filters.Ordering.Descending,
            });

            let previousPrice = 99999999999999999;
            let currentPrice = 0;

            r.listing.forEach((listing) => {
                if (listing.price_change) {
                    const lastChange = listing.price_change[listing.price_change.length - 1].price;
                    if (typeof lastChange === 'string') {
                        currentPrice = parseInt(lastChange);
                    } else {
                        currentPrice = lastChange;
                    }
                    expect(currentPrice).toBeLessThanOrEqual(previousPrice);
                    previousPrice = currentPrice;
                }
            });
        });

        test('price: asc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.Price,
                ordering: Filters.Ordering.Ascending,
            });

            let previousPrice = 0;
            let currentPrice = 0;

            r.listing.forEach((listing) => {
                if (listing.price_change) {
                    const lastChange = listing.price_change[listing.price_change.length - 1].price;
                    if (typeof lastChange === 'string') {
                        currentPrice = parseInt(lastChange);
                    } else {
                        currentPrice = lastChange;
                    }
                    expect(currentPrice).toBeGreaterThanOrEqual(previousPrice);
                    previousPrice = currentPrice;
                }
            });
        });

        test('price_change: desc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.PriceChange,
                ordering: Filters.Ordering.Descending,
            });

            r.listing.forEach((listing) => {
                if (listing.price_change_summary) {
                    expect(listing.price_change_summary.direction).toBe('up');
                }
            });
        });

        test('price_change: asc', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                order_by: Filters.OrderBy.PriceChange,
                ordering: Filters.Ordering.Ascending,
            });

            r.listing.forEach((listing) => {
                if (listing.price_change_summary) {
                    expect(listing.price_change_summary.direction).toBe('down');
                }
            });
        });
    });

    describe('page_size', () => {
        test('10', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                page_size: 10,
            });

            expect(r.listing.length).toEqual(10);
        });

        test('20', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                page_size: 20,
            });

            expect(r.listing.length).toEqual(20);
        });

        test('50', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                page_size: 50,
            });

            expect(r.listing.length).toEqual(50);
        });

        test('100', async () => {
            const r = await zoopla.propertyListings({
                area: 'England',
                page_size: 100,
            });

            expect(r.listing.length).toEqual(100);
        });
    });
});

describe('zed-index tests', () => {
    test('output type: town', async () => {
        const r = await zoopla.zedIndex({
            area: 'Oxford',
            output_type: Filters.OutputType.Town,
        });

        expect(r.town).toBe('Oxford');
    });

    test('output type: outcode', async () => {
        const r = await zoopla.zedIndex({
            area: 'OX1',
            output_type: Filters.OutputType.Outcode,
        });

        expect(r.postcode).toBe('OX1');
    });

    test('output type: county', async () => {
        const r = await zoopla.zedIndex({
            area: 'Oxfordshire',
            output_type: Filters.OutputType.County,
        });

        expect(r.county).toBe('Oxfordshire');
    });

    test('output type: county', async () => {
        const r = await zoopla.zedIndex({
            area: 'England',
            output_type: Filters.OutputType.Country,
        });

        expect(r.country).toBe('England');
    });
});
