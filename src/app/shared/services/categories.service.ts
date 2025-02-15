import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Categories {
    CATEGORIES = [
        {
            id: 1,
            title: "Forest Adventure",
            description: "Venture deep into lush greenery, encountering exotic wildlife and serene nature. Experience hiking, camping, and the peaceful embrace of the wild.",
            image: "specification-box-image-1.webp",
        },
        {
            id: 2,
            title: "Hiking",
            description: "Reconnect with nature on scenic hiking trails that take you through rolling hills, dense forests, and stunning landscapes. Explore at your own pace.",
            image: "specification-box-image-4.webp",
        },
        {
            id: 3,
            title: "Kayaking",
            description: "Glide through crystal-clear waters and navigate stunning rivers, lakes, or ocean waves. Experience the thrill and serenity of kayaking in breathtaking locations.",
            image: "specification-box-image-2.webp",
        },
        {
            id: 4,
            title: "Landmark Exploration",
            description: "Discover the world’s most iconic landmarks, from ancient ruins to modern marvels. Dive into history, culture, and architectural wonders.",
            image: "specification-box-image-3.jpg",
        }
    ];
    getCategoriesWithDetails() {
        return this.CATEGORIES
    }
}