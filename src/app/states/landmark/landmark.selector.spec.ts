import { selectLandmarks } from './landmark.selectors';
import { AppState } from '../app.state';
import { LandmarkView } from '../../shared/types/types';

describe('Landmark Selectors', () => {
    let landMarkData: LandmarkView[] = [
        {
            id: 30,
            name: "Marienplatz",
            description: null,
            imageURL: "munich-marienplatz.jpg",
            visitDuration: 30,
            cityName: "Munich",
            cityId: 10,
            countryName: "Germany",
            categories: []
        },
        {
            id: 29,
            name: "Schloss Nymphenburg",
            description: null,
            imageURL: "Schloss-Nymphenburg-Muenchen.jpeg",
            visitDuration: 90,
            cityName: "Munich",
            cityId: 10,
            countryName: "Germany",
            categories: []
        }]
    const mockState: AppState = {
        cities: { cities: null, error: null, loading: false },
        landmarks: {
            landmarks: landMarkData,
            loading: false,
            error: null
        }
    };

    // Test case to check if all landmarks are selected correctly
    it('should select all landmarks', () => {
        const result = selectLandmarks.projector(mockState.landmarks);
        expect(result.length).toBe(2);
        expect(result[0].name).toBe('Marienplatz');
        expect(result[1].name).toBe('Schloss Nymphenburg');
    });

    // Test case to check if selector returns an empty array when there are no landmarks
    it('should return an empty array when there are no landmark', () => {
        const mockState = {
            landmarks: {
                landmarks: [],
                loading: false,
                error: null,
            },
        };
        const result = selectLandmarks.projector(mockState.landmarks);
        expect(result.length).toBe(0);
    });
});
