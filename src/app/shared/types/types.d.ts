export interface City {
    name: string;
    id: number;
    isDeleted: boolean;
    name_native: string;
    country: string;
    continent: string;
    latitude: string;
    longitude: string;
    population: string;
    founded: string;
    timezone: string | null;
    climate: string | null;
    description: string | null
    landmarks: [
        {
            name: string;
            id: number;
            description: string | null;
            image_url: string | null;
            cityId: number;
            isDeleted: boolean;
            categories: [
                {
                    id: number,
                    name: string,
                    iconName: string
                }] | null
        }

    ]
}
export interface LandmarkView {
    id: number;
    name: string;
    description: string | null;
    imageURL: string;
    visitDuration: number;
    cityName: string;
    cityId: number;
    countryName: string;
    categories: Category[] | null;
}