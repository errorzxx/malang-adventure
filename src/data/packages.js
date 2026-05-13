export const tourPackages = [
  {
    id: "farmhouse-kashmir",
    title: "Popular Kashmir Tour (Farmhouse)",
    pricePerPerson: "13,500",
    priceCouple: "27,000",
    duration: "9 Days",
    stayType: "Farmhouse | Comfortable Stay",
    heroImage: "/images/srinagar.jpg", 
    highlights: ["Dal Lake Sightseeing", "Gulmarg Day Trip", "Sonmarg Valley", "Pahalgam Apple Valley", "Complimentary Bonfire Night"],
    inclusions: [
      "🚆 Indore ↔ Jammu Sleeper Class Train Tickets",
      "🏨 5 Nights Farmhouse Stay (15km from Srinagar)",
      "🍽 5 Breakfast + 5 Dinner",
      "🚗 Full Transport & Sightseeing",
      "🔥 Complimentary Bonfire Night"
    ],
    excludes: [
      "✖ Union Cab Charges / Union Tax",
      "✖ Horse Ride, Gondola, Rafting",
      "✖ Jammu Hotel Stay",
      "✖ Personal Expenses & Laundry"
    ],
    paymentPolicy: "🔹 30% Advance at Booking | 🔹 70% Balance at Srinagar Hotel Check-in",
    terms: [
      "❌ Package Non-Refundable & Non-Transferable",
      "🌦 Sightseeing depends on Weather & Road conditions",
      "🪪 Valid ID Proof mandatory",
      "🚆 Train Ticket confirmation is not guaranteed"
    ],
    weatherPolicy: "Agar snowfall, landslide, ya road block ho, toh delay/extra stay ka kharcha customer ko bear karna hoga. Safety decision final hoga.",
    itinerary: [
      { day: "Day 1", title: "Indore Se Departure", desc: "Departure from Indore Junction via Sleeper Class Train. Journey of approx 1700 km.", image: "/images/indore-station.jpg" },
      { day: "Day 2", title: "Jammu Arrival → Srinagar", desc: "Arrive in Jammu, transfer to Srinagar (300 km). Check-in at the Farmhouse.", image: "/images/srinagar.jpg" },
      { day: "Day 3", title: "Srinagar Local Sightseeing", desc: "Nishat Bagh, Shalimar Bagh, Pari Mahal, Dal Lake, and Lal Chowk.", image: "/images/dal-lake.jpg" }, // Changed to dal-lake
      { day: "Day 4", title: "Gulmarg Day Trip", desc: "Explore Gulmarg. Optional Gondola Ride (Phase 1 & 2) over snow peaks.", image: "/images/gulmarg.jpg" },
      { day: "Day 5", title: "Sonmarg Day Trip", desc: "Full day excursion to Sonmarg Valley. Visit Thajiwas Glacier.", image: "/images/sonmarg.jpg" },
      { day: "Day 6", title: "Pahalgam Transfer", desc: "Visit Apple Valley, Dry Fruit Market, Cricket Bat Market, and Betaab Valley.", image: "/images/pahalgam.jpg" },
      { day: "Day 7", title: "Pahalgam to Jammu", desc: "Scenic drive back to Jammu (280 km) for the return journey.", image: "/images/snow-mountain.jpg" }, // Changed to snow-mountain
      { day: "Day 8 & 9", title: "Indore Arrival", desc: "Board the train from Jammu. Arrival at Indore Junction with sweet memories.", image: "/images/train-return.jpg" }
    ]
  },
  {
    id: "premium-3star-kashmir",
    title: "Premium Kashmir Tour (3★ Hotel)",
    pricePerPerson: "16,500",
    priceCouple: "37,500",
    duration: "9 Days",
    stayType: "3★ Hotels + Houseboat",
    heroImage: "/images/gulmarg.jpg", 
    highlights: ["1-Hour Complimentary Shikara", "Houseboat Stay", "Hazratbal Shrine", "Aru & Betaab Valley", "Doodhpathri Trip"],
    inclusions: [
      "🚆 Sleeper Class Train Tickets (Indore ↔ Jammu)",
      "🏠 1 Night Houseboat Stay (Srinagar)",
      "🏨 5 Nights Hotel Stay (Srinagar + Pahalgam)",
      "🍽 5 Breakfasts & 5 Dinners",
      "🛶 1-Hour Complimentary Shikara Ride",
      "🚗 Complete Sightseeing & Transportation"
    ],
    excludes: [
      "✖ Union Taxi / Union Cab Charges",
      "✖ Pony Ride, Gondola, Rafting",
      "✖ Jammu Hotel Night Stay",
      "✖ Tatkal Ticket Charges Extra"
    ],
    paymentPolicy: "🔹 30% Advance at Booking | 🔹 70% Balance at Srinagar Hotel Check-in",
    terms: [
      "❌ Package is Non-Transferable & Non-Refundable",
      "🪪 Valid Government ID Proof Mandatory",
      "🏨 Hotel Options: D Villas, K28, Khalan Resort, Dar Rahman",
      "🚉 Tatkal Ticket subject to availability"
    ],
    weatherPolicy: "Weather unpredictable hota hai. Snowfall/Strike me refund nahi milega. Alternative sightseeing possible hui toh di jayegi.",
    itinerary: [
      { day: "Day 1 & 2", title: "Departure & Arrival", desc: "Train from Indore to Jammu. En-route scenic views and transfer to Srinagar hotel.", image: "/images/indore-station.jpg" },
      { day: "Day 3", title: "Houseboat & Gardens", desc: "Mughal Gardens and Hazratbal Shrine. Overnight stay in a luxury Houseboat.", image: "/images/dal-lake.jpg" }, // Changed to dal-lake
      { day: "Day 4", title: "Gulmarg Excursion", desc: "Visit highest Golf Course and Pine Forest. Optional Phase 1 & 2 Gondola.", image: "/images/gulmarg.jpg" },
      { day: "Day 5", title: "Sonmarg - Meadow of Gold", desc: "Sindh River and Thajiwas Glacier. Incredible photography points.", image: "/images/sonmarg.jpg" },
      { day: "Day 6", title: "Pahalgam Exploration", desc: "Saffron Fields (Pampore), Awantipora Ruins, and Aru Valley.", image: "/images/pahalgam.jpg" },
      { day: "Day 7", title: "Doodhpathri & Jammu Drop", desc: "Visit Doodhpathri Meadows before evening transfer to Jammu station.", image: "/images/snow-mountain.jpg" }, // Changed to snow-mountain
      { day: "Day 8 & 9", title: "Journey Home", desc: "Board the train back home. Arrival at Indore Junction.", image: "/images/train-return.jpg" }
    ]
  }
];