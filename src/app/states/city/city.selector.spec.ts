import { selectAllCities } from './city.selectors';
import { AppState } from '../app.state';
import { City } from '../../shared/types/types';

describe('City Selectors', () => {
    // Mock city data for testing
    let cityData: City[] = [
        {
            id: 1, name: 'Munich', latitude: "23.55", longitude: "35.42",
            country: "Germany", description: "Germany", population: "12000000", name_native: "",
            climate: "warm", continent: "Europe", founded: "2000", isDeleted: false, timezone: null, landmarks: [
                {
                    id: 30,
                    name: "Marienplatz",
                    description: "Marienplatz is the heart of Munich",
                    image_url: "f8e23x.jpg",
                    cityId: 10,
                    isDeleted: false,
                    categories: null
                }]
        },
        {
            id: 2, name: 'Berlin', latitude: "52.52", longitude: "13.40",
            country: "Germany", description: "Capital", population: "3600000", name_native: "",
            climate: "moderate", continent: "Europe", founded: "1237", isDeleted: true, timezone: null, landmarks: [
                {
                    id: 30,
                    name: "Marienplatz",
                    description: "Marienplatz is the heart of Munich",
                    image_url: "f8e23x.jpg",
                    cityId: 10,
                    isDeleted: false,
                    categories: null
                }]
        }
    ]
    // Mock state for testing selectors
    const mockState: AppState = {
        cities: { cities: cityData, error: null, loading: false },
        landmarks: {
            landmarks: [],
            loading: false,
            error: null
        }
    };
    // Test case to check if all cities are selected correctly
    it('should select all cities', () => {
        const result = selectAllCities.projector(mockState.cities);
        expect(result.length).toBe(2);
        expect(result[0].name).toBe('Munich');
        expect(result[1].name).toBe('Berlin');
    });

    // Test case to check if selector returns an empty array when there are no cities
    it('should return an empty array when there are no cities', () => {
        const mockState = {cities: {cities: [],loading: false,error: null}};
        const result = selectAllCities.projector(mockState.cities);
        expect(result.length).toBe(0);
    });
});
