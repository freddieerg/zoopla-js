import Zoopla, { Filters } from '../src';

const zoopla = new Zoopla();

describe('property-listings parameter tests', () => {
    test('area', async () => {
        let r = await zoopla.propertyListings({
            area: 'L3',
        });

        expect(r.area_name).toEqual(' L3');

        r = await zoopla.propertyListings({
            area: 'Bampton, Oxfordshire',
        });

        expect(r.area_name).toEqual('Bampton');
        expect(r.county).toEqual('Oxfordshire');
    });

    test('branch_id', async () => {
        const r = await zoopla.propertyListings({
            branch_id: 13801,
        });

        expect(r.listing[0].branch_id).toEqual('13801');
        expect(r.listing[1].branch_id).toEqual('13801');
        expect(r.listing[2].branch_id).toEqual('13801');
    });

    test('category', async () => {
        // test commercial
        let r = await zoopla.propertyListings({
            area: 'England',
            category: Filters.Category.Commercial,
        });

        expect(r.listing[0].category).toEqual('Commercial');
        expect(r.listing[1].category).toEqual('Commercial');
        expect(r.listing[2].category).toEqual('Commercial');

        // test residential
        r = await zoopla.propertyListings({
            area: 'England',
            category: Filters.Category.Residential,
        });

        expect(r.listing[0].category).toEqual('Residential');
        expect(r.listing[1].category).toEqual('Residential');
        expect(r.listing[2].category).toEqual('Residential');
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

        expect(Date.parse(r.listing[0].listing_date)).toBeGreaterThanOrEqual(testDateTimeEpoch);
        expect(Date.parse(r.listing[1].listing_date)).toBeGreaterThanOrEqual(testDateTimeEpoch);
        expect(Date.parse(r.listing[2].listing_date)).toBeGreaterThanOrEqual(testDateTimeEpoch);
    });
});
