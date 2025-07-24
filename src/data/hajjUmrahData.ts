import { HajjPackage, UmrahPackage } from '../types';

export const hajjPackages: HajjPackage[] = [
  {
    id: 1,
    name: "Premium Hajj Package",
    duration: "40 Days",
    price: 450000,
    originalPrice: 520000,
    rating: 4.9,
    image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["5-Star Hotels", "VIP Transportation", "Expert Guide", "All Meals Included"],
    itinerary: [
      "Arrival in Jeddah, transfer to Makkah",
      "Umrah rituals and Tawaf",
      "Travel to Madinah",
      "Visit to Prophet's Mosque",
      "Return to Makkah for Hajj",
      "Hajj rituals - Mina, Arafat, Muzdalifah",
      "Completion of Hajj and departure"
    ],
    includes: [
      "Round-trip airfare",
      "5-star accommodation in Makkah and Madinah",
      "All meals (breakfast, lunch, dinner)",
      "VIP transportation",
      "Expert religious guide",
      "Hajj kit and essentials",
      "24/7 support"
    ],
    excludes: [
      "Personal expenses",
      "Shopping",
      "Additional tours",
      "Travel insurance",
      "Visa fees"
    ]
  },
  {
    id: 2,
    name: "Standard Hajj Package",
    duration: "35 Days",
    price: 320000,
    originalPrice: 380000,
    rating: 4.7,
    image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["4-Star Hotels", "Group Transportation", "Experienced Guide", "Meals Included"],
    itinerary: [
      "Arrival in Jeddah, transfer to Makkah",
      "Umrah rituals and Tawaf",
      "Travel to Madinah",
      "Visit to Prophet's Mosque",
      "Return to Makkah for Hajj",
      "Hajj rituals - Mina, Arafat, Muzdalifah",
      "Completion of Hajj and departure"
    ],
    includes: [
      "Round-trip airfare",
      "4-star accommodation",
      "Daily meals",
      "Group transportation",
      "Religious guide",
      "Basic Hajj kit"
    ],
    excludes: [
      "Personal expenses",
      "Shopping",
      "Travel insurance",
      "Visa fees",
      "Additional services"
    ]
  }
];

export const umrahPackages: UmrahPackage[] = [
  {
    id: 1,
    name: "Luxury Umrah Package",
    duration: "14 Days",
    price: 180000,
    originalPrice: 220000,
    rating: 4.8,
    image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["5-Star Hotels", "Private Transportation", "Personal Guide", "Premium Services"],
    itinerary: [
      "Arrival in Jeddah, transfer to Makkah",
      "Check-in to 5-star hotel near Haram",
      "Umrah rituals with personal guide",
      "Free time for additional Tawaf and prayers",
      "Travel to Madinah",
      "Visit to Prophet's Mosque",
      "Ziyarat tours in Madinah",
      "Return to Makkah",
      "Final Umrah and departure preparations",
      "Departure from Jeddah"
    ],
    includes: [
      "Round-trip airfare",
      "5-star accommodation near Haram",
      "All meals",
      "Private transportation",
      "Personal religious guide",
      "Umrah kit",
      "Ziyarat tours",
      "24/7 support"
    ],
    excludes: [
      "Personal shopping",
      "Additional tours",
      "Travel insurance",
      "Visa processing fees",
      "Personal expenses"
    ]
  },
  {
    id: 2,
    name: "Economy Umrah Package",
    duration: "10 Days",
    price: 95000,
    originalPrice: 120000,
    rating: 4.5,
    image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["3-Star Hotels", "Group Transportation", "Group Guide", "Essential Services"],
    itinerary: [
      "Arrival in Jeddah, transfer to Makkah",
      "Check-in to hotel",
      "Umrah rituals with group guide",
      "Free time for prayers",
      "Travel to Madinah",
      "Visit to Prophet's Mosque",
      "Return to Makkah",
      "Final prayers and departure"
    ],
    includes: [
      "Round-trip airfare",
      "3-star accommodation",
      "Daily breakfast",
      "Group transportation",
      "Group guide",
      "Basic Umrah kit"
    ],
    excludes: [
      "Lunch and dinner",
      "Personal expenses",
      "Shopping",
      "Travel insurance",
      "Visa fees",
      "Additional tours"
    ]
  },
  {
    id: 3,
    name: "Family Umrah Package",
    duration: "12 Days",
    price: 140000,
    originalPrice: 170000,
    rating: 4.7,
    image: "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Family Rooms", "Child-Friendly", "Flexible Schedule", "Family Guide"],
    itinerary: [
      "Arrival in Jeddah, family transfer to Makkah",
      "Family check-in to connected rooms",
      "Umrah rituals with family-friendly guide",
      "Flexible time for family prayers",
      "Family travel to Madinah",
      "Visit to Prophet's Mosque with children",
      "Family-friendly Ziyarat tours",
      "Return to Makkah",
      "Final family Umrah and departure"
    ],
    includes: [
      "Round-trip airfare for family",
      "Family accommodation",
      "All meals",
      "Family transportation",
      "Family guide",
      "Children's Umrah kits",
      "Flexible scheduling"
    ],
    excludes: [
      "Personal shopping",
      "Additional tours",
      "Travel insurance",
      "Visa fees",
      "Personal expenses"
    ]
  }
];