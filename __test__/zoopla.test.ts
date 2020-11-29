import Zoopla from '../src/zoopla';

const zoopla = new Zoopla();

describe('property-listings endpoint tests', () => {
    test('area param', async () => {
        const r = await zoopla.propertyListings({
            area: 'L3',
        });

        expect(r.area_name).toEqual(' L3');
    });
});
