import { Injectable } from '@angular/core';
import { faCameraRetro, faEnvelope, faHeadset ,faMapMarkerAlt, faMap, faMapLocationDot, faDashboard, faCity, faMapPin, faSearch,
     faEarth, faTreeCity, faLocation} from '@fortawesome/free-solid-svg-icons';
import { faAirbnb, faAvianex, faEnvira, faFacebook, faFly, faFortAwesome, faGithubSquare, faLeanpub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Injectable({
    providedIn: 'root',
})
export class IconService {
    icons = {
        Phone: faHeadset,
        Mail: faEnvelope,
        Facebook: faFacebook,
        Twitter: faTwitter,
        Youtube: faYoutube,
        Logo: faMapLocationDot,
        Github:faGithubSquare,
        Linkedin:faLinkedin,
        Location:faMapMarkerAlt,
        Search:faSearch,
        
    };
    iconsWithTitle = [{ name: 'Avianex', icon: faAvianex }, { name: 'Leanpub', icon: faLeanpub }, { name: 'Fort Awesome', icon: faFortAwesome },
    { name: 'Envira', icon: faEnvira },
    { name: 'CameraCo', icon: faCameraRetro }, { name: 'Airbnb', icon: faAirbnb }, { name: 'Fly', icon: faFly }]
    adminIcons = {
        Dashboard: faDashboard,
        City:faCity,
        Country:faMap,
        Destination:faMapPin,
        ActiveCity:faTreeCity,
        AllCities:faEarth,
        Destination2:faLocation
    };
}
