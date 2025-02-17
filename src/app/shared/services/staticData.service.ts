import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class StaticDataService {

    getCountries(): { id: number; name: string; }[] {
        return [
            { "id": 1, "name": "Afghanistan" },
            { "id": 2, "name": "Albania" },
            { "id": 3, "name": "Algeria" },
            { "id": 4, "name": "Andorra" },
            { "id": 5, "name": "Angola" },
            { "id": 6, "name": "Argentina" },
            { "id": 7, "name": "Armenia" },
            { "id": 8, "name": "Australia" },
            { "id": 9, "name": "Austria" },
            { "id": 10, "name": "Azerbaijan" },
            { "id": 11, "name": "Bahamas" },
            { "id": 12, "name": "Bahrain" },
            { "id": 13, "name": "Bangladesh" },
            { "id": 14, "name": "Barbados" },
            { "id": 15, "name": "Belarus" },
            { "id": 16, "name": "Belgium" },
            { "id": 17, "name": "Belize" },
            { "id": 18, "name": "Benin" },
            { "id": 19, "name": "Bhutan" },
            { "id": 20, "name": "Bolivia" },
            { "id": 21, "name": "Bosnia and Herzegovina" },
            { "id": 22, "name": "Botswana" },
            { "id": 23, "name": "Brazil" },
            { "id": 24, "name": "Brunei" },
            { "id": 25, "name": "Bulgaria" },
            { "id": 26, "name": "Burkina Faso" },
            { "id": 27, "name": "Burundi" },
            { "id": 28, "name": "Cambodia" },
            { "id": 29, "name": "Cameroon" },
            { "id": 30, "name": "Canada" },
            { "id": 31, "name": "Central African Republic" },
            { "id": 32, "name": "Chad" },
            { "id": 33, "name": "Chile" },
            { "id": 34, "name": "China" },
            { "id": 35, "name": "Colombia" },
            { "id": 36, "name": "Comoros" },
            { "id": 37, "name": "Congo" },
            { "id": 38, "name": "Costa Rica" },
            { "id": 39, "name": "Croatia" },
            { "id": 40, "name": "Cuba" },
            { "id": 41, "name": "Cyprus" },
            { "id": 42, "name": "Czech Republic" },
            { "id": 43, "name": "Denmark" },
            { "id": 44, "name": "Djibouti" },
            { "id": 45, "name": "Dominican Republic" },
            { "id": 46, "name": "Ecuador" },
            { "id": 47, "name": "Egypt" },
            { "id": 48, "name": "El Salvador" },
            { "id": 49, "name": "Estonia" },
            { "id": 50, "name": "Ethiopia" },
            { "id": 51, "name": "Fiji" },
            { "id": 52, "name": "Finland" },
            { "id": 53, "name": "France" },
            { "id": 54, "name": "Germany" },
            { "id": 55, "name": "Greece" },
            { "id": 56, "name": "India" },
            { "id": 57, "name": "Indonesia" },
            { "id": 58, "name": "Iran" },
            { "id": 59, "name": "Iraq" },
            { "id": 60, "name": "Ireland" },
            { "id": 61, "name": "Israel" },
            { "id": 62, "name": "Italy" },
            { "id": 63, "name": "Japan" },
            { "id": 64, "name": "Jordan" },
            { "id": 65, "name": "Kazakhstan" },
            { "id": 66, "name": "Kenya" },
            { "id": 67, "name": "Kuwait" },
            { "id": 68, "name": "Latvia" },
            { "id": 69, "name": "Lebanon" },
            { "id": 70, "name": "Libya" },
            { "id": 71, "name": "Lithuania" },
            { "id": 72, "name": "Luxembourg" },
            { "id": 73, "name": "Malaysia" },
            { "id": 74, "name": "Mexico" },
            { "id": 75, "name": "Morocco" },
            { "id": 76, "name": "Netherlands" },
            { "id": 77, "name": "New Zealand" },
            { "id": 78, "name": "Nigeria" },
            { "id": 79, "name": "North Korea" },
            { "id": 80, "name": "Norway" },
            { "id": 81, "name": "Oman" },
            { "id": 82, "name": "Pakistan" },
            { "id": 83, "name": "Palestine" },
            { "id": 84, "name": "Peru" },
            { "id": 85, "name": "Philippines" },
            { "id": 86, "name": "Poland" },
            { "id": 87, "name": "Portugal" },
            { "id": 88, "name": "Qatar" },
            { "id": 89, "name": "Romania" },
            { "id": 90, "name": "Russia" },
            { "id": 91, "name": "Saudi Arabia" },
            { "id": 92, "name": "South Africa" },
            { "id": 93, "name": "South Korea" },
            { "id": 94, "name": "Spain" },
            { "id": 95, "name": "Sweden" },
            { "id": 96, "name": "Switzerland" },
            { "id": 97, "name": "Syria" },
            { "id": 98, "name": "Thailand" },
            { "id": 99, "name": "Turkey" },
            { "id": 100, "name": "Ukraine" },
            { "id": 101, "name": "United Arab Emirates" },
            { "id": 102, "name": "United Kingdom" },
            { "id": 103, "name": "United States" },
            { "id": 104, "name": "Venezuela" },
            { "id": 105, "name": "Vietnam" },
            { "id": 106, "name": "Yemen" }
        ]
    }
    cities = [
        { "id": 1, "name": "New York", "countryId": 103 },
        { "id": 2, "name": "Los Angeles", "countryId": 103 },
        { "id": 3, "name": "Chicago", "countryId": 103 },
        { "id": 4, "name": "Houston", "countryId": 103 },
        { "id": 5, "name": "London", "countryId": 102 },
        { "id": 6, "name": "Manchester", "countryId": 102 },
        { "id": 7, "name": "Birmingham", "countryId": 102 },
        { "id": 8, "name": "Edinburgh", "countryId": 102 },
        { "id": 9, "name": "Berlin", "countryId": 54 },
        { "id": 10, "name": "Munich", "countryId": 54 },
        { "id": 11, "name": "Hamburg", "countryId": 54 },
        { "id": 12, "name": "Frankfurt", "countryId": 54 },
        { "id": 13, "name": "Paris", "countryId": 53 },
        { "id": 14, "name": "Lyon", "countryId": 53 },
        { "id": 15, "name": "Marseille", "countryId": 53 },
        { "id": 16, "name": "Tokyo", "countryId": 63 },
        { "id": 17, "name": "Osaka", "countryId": 63 },
        { "id": 18, "name": "Nagoya", "countryId": 63 },
        { "id": 19, "name": "Kyoto", "countryId": 63 },
        { "id": 20, "name": "Beijing", "countryId": 34 },
        { "id": 21, "name": "Shanghai", "countryId": 34 },
        { "id": 22, "name": "Guangzhou", "countryId": 34 },
        { "id": 23, "name": "Shenzhen", "countryId": 34 },
        { "id": 24, "name": "Moscow", "countryId": 90 },
        { "id": 25, "name": "Saint Petersburg", "countryId": 90 },
        { "id": 26, "name": "Kazan", "countryId": 90 },
        { "id": 27, "name": "Novosibirsk", "countryId": 90 },
        { "id": 28, "name": "Dubai", "countryId": 101 },
        { "id": 29, "name": "Abu Dhabi", "countryId": 101 },
        { "id": 30, "name": "Sharjah", "countryId": 101 },
        { "id": 31, "name": "Istanbul", "countryId": 99 },
        { "id": 32, "name": "Ankara", "countryId": 99 },
        { "id": 33, "name": "Izmir", "countryId": 99 },
        { "id": 34, "name": "Bursa", "countryId": 99 },
        { "id": 35, "name": "Delhi", "countryId": 56 },
        { "id": 36, "name": "Mumbai", "countryId": 56 },
        { "id": 37, "name": "Bangalore", "countryId": 56 },
        { "id": 38, "name": "Hyderabad", "countryId": 56 },
        { "id": 39, "name": "Sydney", "countryId": 8 },
        { "id": 40, "name": "Melbourne", "countryId": 8 },
        { "id": 41, "name": "Brisbane", "countryId": 8 },
        { "id": 42, "name": "Perth", "countryId": 8 },
        { "id": 43, "name": "Cairo", "countryId": 47 },
        { "id": 44, "name": "Alexandria", "countryId": 47 },
        { "id": 45, "name": "Giza", "countryId": 47 },
        { "id": 46, "name": "Mexico City", "countryId": 74 },
        { "id": 47, "name": "Guadalajara", "countryId": 74 },
        { "id": 48, "name": "Monterrey", "countryId": 74 },
        { "id": 49, "name": "Sao Paulo", "countryId": 23 },
        { "id": 50, "name": "Rio de Janeiro", "countryId": 23 },
        { "id": 51, "name": "Tehran", "countryId": 58 },
        { "id": 52, "name": "Kish", "countryId": 58 },
        { "id": 53, "name": "Shiraz", "countryId": 58 },
        { "id": 54, "name": "Madrid", "countryId": 94 },
        { "id": 55, "name": "Lagos", "countryId": 78 },
    ]
    getCities(): { id: number; name: string; countryId: number; }[] {
        return this.cities;
    }
    getFilteredCities(id: number): { id: number; name: string; countryId: number; }[] {
        return this.cities.filter(c => c.countryId === id);
    }
    getFilteredCitiesByCountryName(countryName: string): { id: number; name: string; countryId: number; }[] {
        const countryId = this.getCountries().find(country => country.name.toLocaleLowerCase() === countryName.toLocaleLowerCase());
        return this.cities.filter(c => c.countryId === countryId?.id);
    }
    getCategories() {
        return [
            { name: 'Historical', iconName: '🏰' },  // Castles, ruins, ancient sites
            { name: 'Nature', iconName: '🌳' },     // Parks, forests, natural reserves
            { name: 'Modern', iconName: '🏙️' },    // Skyscrapers, urban landmarks
            { name: 'Religious', iconName: '⛪' },  // Churches, temples, mosques
            { name: 'Cultural', iconName: '🎭' },   // Theaters, art galleries, cultural centers
            { name: 'Architectural', iconName: '🏛️' },  // Famous buildings, monuments
            { name: 'Seaside', iconName: '🏖️' },   // Beaches, coastal landmarks
            { name: 'Mountain', iconName: '⛰️' },   // Famous peaks, hiking spots
            { name: 'Desert', iconName: '🏜️' },    // Sand dunes, desert wonders
            { name: 'Underground', iconName: '🕳️' }, // Caves, underground cities
            { name: 'Space & Science', iconName: '🔭' }, // Observatories, science museums
            { name: 'Industrial', iconName: '🏗️' }, // Factories, historical industries
            { name: 'Waterfalls', iconName: '🌊' }, // Famous waterfalls, rivers
            { name: 'Islands', iconName: '🏝️' },   // Tropical and historical islands
            { name: 'Adventure', iconName: '🎢' },  // Theme parks, extreme sports locations
        ];
    }
}