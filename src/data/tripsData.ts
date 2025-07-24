import { Trip } from '../types';

export const tripsData: Trip[] = [
  {
    id: 1,
    name: "Goa Beach Paradise",
    title: "Goa Beach Paradise",
    duration: "4D/3N",
    price: 15999,
    originalPrice: 19999,
    rating: 4.8,
    reviews: "245 reviews",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the sun, sand, and sea with our exclusive Goa beach package. Enjoy water sports, vibrant nightlife, and delicious seafood.",
    highlights: ["Beach Activities", "Water Sports", "Nightlife", "Local Cuisine"],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Beach Exploration",
        activities: ["Airport pickup", "Hotel check-in", "Calangute Beach visit", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Adventure & Sightseeing",
        activities: ["Water sports at Baga Beach", "Dudhsagar Falls excursion", "Spice plantation tour"]
      },
      {
        day: 3,
        title: "Cultural Experience",
        activities: ["Old Goa churches tour", "Local market shopping", "Sunset cruise"]
      },
      {
        day: 4,
        title: "Departure",
        activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer"]
      }
    ],
    inclusions: ["Accommodation", "Breakfast", "Transportation", "Sightseeing"],
    exclusions: ["Lunch & Dinner", "Personal Expenses", "Adventure Activities"]
  },
  {
    id: 2,
    name: "Kashmir Valley Adventure",
    title: "Kashmir Valley Adventure",
    duration: "6D/5N",
    price: 25999,
    originalPrice: 32999,
    rating: 4.9,
    reviews: "189 reviews",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Discover the paradise on earth with breathtaking landscapes, pristine lakes, and snow-capped mountains of Kashmir.",
    highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Shikara Ride"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        activities: ["Airport pickup", "Dal Lake visit", "Shikara ride", "Houseboat stay"]
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        activities: ["Travel to Gulmarg", "Gondola ride", "Skiing (seasonal)", "Hotel check-in"]
      },
      {
        day: 3,
        title: "Gulmarg to Pahalgam",
        activities: ["Morning in Gulmarg", "Travel to Pahalgam", "Betaab Valley visit"]
      },
      {
        day: 4,
        title: "Pahalgam Exploration",
        activities: ["Aru Valley excursion", "Chandanwari visit", "Local sightseeing"]
      },
      {
        day: 5,
        title: "Return to Srinagar",
        activities: ["Travel back to Srinagar", "Mughal Gardens tour", "Shopping"]
      },
      {
        day: 6,
        title: "Departure",
        activities: ["Hotel checkout", "Airport transfer", "Departure"]
      }
    ],
    inclusions: ["Accommodation", "All Meals", "Transportation", "Shikara Ride"],
    exclusions: ["Gondola Ride", "Personal Expenses", "Tips"]
  },
  {
    id: 3,
    name: "Rajasthan Heritage Tour",
    title: "Rajasthan Heritage Tour",
    duration: "7D/6N",
    price: 22999,
    originalPrice: 28999,
    rating: 4.7,
    reviews: "156 reviews",
    image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Explore the royal heritage of Rajasthan with magnificent palaces, colorful markets, and desert adventures.",
    highlights: ["Jaipur City Palace", "Udaipur Lakes", "Jodhpur Fort", "Desert Safari"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        activities: ["Airport pickup", "Hotel check-in", "City Palace visit", "Local market tour"]
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        activities: ["Amber Fort", "Hawa Mahal", "Jantar Mantar", "Albert Hall Museum"]
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        activities: ["Travel to Jodhpur", "Mehrangarh Fort", "Jaswant Thada", "Clock Tower market"]
      },
      {
        day: 4,
        title: "Jodhpur to Udaipur",
        activities: ["Travel to Udaipur", "City Palace complex", "Lake Pichola boat ride"]
      },
      {
        day: 5,
        title: "Udaipur Exploration",
        activities: ["Saheliyon Ki Bari", "Jagdish Temple", "Fateh Sagar Lake", "Sunset point"]
      },
      {
        day: 6,
        title: "Desert Experience",
        activities: ["Desert safari", "Camel ride", "Cultural evening", "Desert camping"]
      },
      {
        day: 7,
        title: "Departure",
        activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer"]
      }
    ],
    inclusions: ["Accommodation", "Breakfast", "Transportation", "Guide"],
    exclusions: ["Lunch & Dinner", "Monument Fees", "Personal Expenses"]
  },
  {
    id: 4,
    name: "Kerala Backwaters",
    title: "Kerala Backwaters",
    duration: "5D/4N",
    price: 18999,
    originalPrice: 23999,
    rating: 4.6,
    reviews: "198 reviews",
    image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience the tranquil backwaters, lush greenery, and traditional houseboat stays in God's Own Country.",
    highlights: ["Houseboat Stay", "Backwater Cruise", "Spice Gardens", "Ayurvedic Spa"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        activities: ["Airport pickup", "Fort Kochi tour", "Chinese fishing nets", "Hotel check-in"]
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        activities: ["Travel to Munnar", "Tea plantation visit", "Mattupetty Dam", "Hotel check-in"]
      },
      {
        day: 3,
        title: "Munnar to Alleppey",
        activities: ["Travel to Alleppey", "Houseboat check-in", "Backwater cruise", "Overnight on houseboat"]
      },
      {
        day: 4,
        title: "Alleppey Experience",
        activities: ["Morning backwater cruise", "Village visit", "Traditional Kerala lunch", "Ayurvedic massage"]
      },
      {
        day: 5,
        title: "Departure",
        activities: ["Houseboat checkout", "Cochin airport transfer", "Departure"]
      }
    ],
    inclusions: ["Accommodation", "All Meals", "Houseboat", "Transportation"],
    exclusions: ["Ayurvedic Treatments", "Personal Expenses", "Tips"]
  },
  {
    id: 5,
    name: "Himachal Pradesh Adventure",
    title: "Himachal Pradesh Adventure",
    duration: "6D/5N",
    price: 21999,
    originalPrice: 27999,
    rating: 4.8,
    reviews: "134 reviews",
    image: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Adventure awaits in the mountains of Himachal Pradesh with scenic valleys, snow-capped peaks, and thrilling activities.",
    highlights: ["Manali", "Rohtang Pass", "Solang Valley", "Adventure Sports"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        activities: ["Airport pickup", "Hotel check-in", "Mall Road visit", "Hadimba Temple"]
      },
      {
        day: 2,
        title: "Manali Local Sightseeing",
        activities: ["Vashisht hot springs", "Tibetan Monastery", "Old Manali", "Manu Temple"]
      },
      {
        day: 3,
        title: "Rohtang Pass Excursion",
        activities: ["Early morning departure", "Rohtang Pass visit", "Snow activities", "Return to Manali"]
      },
      {
        day: 4,
        title: "Solang Valley Adventure",
        activities: ["Solang Valley visit", "Paragliding", "Zorbing", "Cable car ride"]
      },
      {
        day: 5,
        title: "Kasol & Tosh Visit",
        activities: ["Travel to Kasol", "Parvati Valley exploration", "Tosh village visit", "Return to Manali"]
      },
      {
        day: 6,
        title: "Departure",
        activities: ["Hotel checkout", "Shopping", "Airport transfer", "Departure"]
      }
    ],
    inclusions: ["Accommodation", "Breakfast", "Transportation", "Activities"],
    exclusions: ["Lunch & Dinner", "Adventure Sports", "Personal Expenses"]
  },
  {
    id: 6,
    name: "Golden Triangle Tour",
    title: "Golden Triangle Tour",
    duration: "5D/4N",
    price: 16999,
    originalPrice: 21999,
    rating: 4.5,
    reviews: "267 reviews",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Discover India's most iconic destinations including the magnificent Taj Mahal, historic Red Fort, and vibrant markets.",
    highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "India Gate"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        activities: ["Airport pickup", "India Gate visit", "Red Fort tour", "Chandni Chowk shopping"]
      },
      {
        day: 2,
        title: "Delhi to Agra",
        activities: ["Travel to Agra", "Taj Mahal visit", "Agra Fort", "Mehtab Bagh sunset"]
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        activities: ["Travel to Jaipur via Fatehpur Sikri", "City Palace visit", "Local market"]
      },
      {
        day: 4,
        title: "Jaipur Sightseeing",
        activities: ["Amber Fort", "Hawa Mahal", "Jantar Mantar", "Johari Bazaar shopping"]
      },
      {
        day: 5,
        title: "Return to Delhi & Departure",
        activities: ["Travel to Delhi", "Last-minute shopping", "Airport transfer", "Departure"]
      }
    ],
    inclusions: ["Accommodation", "Breakfast", "Transportation", "Guide"],
    exclusions: ["Lunch & Dinner", "Monument Fees", "Personal Expenses"]
  }
];