// 1. DATA PACK (Must be at the very top of the file)
const allCountries = [
    { 
        name: "Antigua and Barbuda", code: "AG", continent: "North America", capital: "Saint John's", pop: "93,000", 
        area: "442 km²<br>(170 mi²)", lang: "English", cur: "East Caribbean Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Financial services.", 
        cities: ["Saint John's", "All Saints", "Liberta", "Potters Village"], 
        marks: ["Nelson's Dockyard", "Shirley Heights", "Devil's Bridge", "Dickenson Bay"], 
        culture: "A vibrant mix of West African and British influences.", 
        facts: ["Known as the 'Land of 365 Beaches'", "Has no permanent rivers or lakes", "The national sport is Cricket"] 
    },
    { 
        name: "Bahamas", code: "BS", continent: "North America", capital: "Nassau", pop: "409,000", 
        area: "13,878 km²<br>(5,358 mi²)", lang: "English", cur: "Bahamian Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Banking.", 
        cities: ["Nassau", "Freeport", "West End", "Marsh Harbour"], 
        marks: ["Atlantis Paradise Island", "Exuma Cays Land Park", "Blue Holes", "Dean's Blue Hole"], 
        culture: "Famous for the colorful 'Junkanoo' street parade.", 
        facts: ["Home to the world's deepest blue hole", "Consists of over 700 islands", "You can swim with wild pigs here"] 
    },
    { 
        name: "Barbados", code: "BB", continent: "North America", capital: "Bridgetown", pop: "281,000", 
        area: "430 km²<br>(166 mi²)", lang: "English", cur: "Barbadian Dollar ($)", gov: "Parliamentary Republic", econ: "Tourism and Sugar.", 
        cities: ["Bridgetown", "Speightstown", "Oistins", "Holetown"], 
        marks: ["Harrison's Cave", "The Crane Beach", "Mount Gay Distillery", "George Washington House"], 
        culture: "Birthplace of Rihanna and world-famous rum.", 
        facts: ["Considered the birthplace of rum", "Known as the 'Land of the Flying Fish'", "Grapefruit was first discovered here"] 
    },
    { 
        name: "Belize", code: "BZ", continent: "North America", capital: "Belmopan", pop: "405,000", 
        area: "22,966 km²<br>(8,867 mi²)", lang: "English, Spanish", cur: "Belize Dollar ($)", gov: "Constitutional Monarchy", econ: "Agriculture and Eco-tourism.", 
        cities: ["Belize City", "San Ignacio", "Orange Walk", "Belmopan"], 
        marks: ["Great Blue Hole", "Caracol Mayan Ruins", "Xunantunich", "Caye Caulker"], 
        culture: "Diverse Maya, Garifuna, and Mestizo heritage.", 
        facts: ["The Great Blue Hole is visible from space", "Lowest population density in Central America", "Home to the world's only jaguar preserve"] 
    },
    { 
        name: "Canada", code: "CA", continent: "North America", capital: "Ottawa", pop: "38.2 Million", 
        area: "9.98 Million km²<br>(3.85 Million mi²)", lang: "English, French", cur: "Canadian Dollar ($)", gov: "Parliamentary Democracy", econ: "Energy and High-tech.", 
        cities: ["Toronto", "Montreal", "Vancouver", "Calgary"], 
        marks: ["Niagara Falls", "Banff National Park", "CN Tower", "Hopewell Rocks"], 
        culture: "Multicultural; famous for hockey and maple syrup.", 
        facts: ["Has more lakes than the rest of the world combined", "Parts of Canada have less gravity", "Word means 'village'"] 
    },
    { 
        name: "Costa Rica", code: "CR", continent: "North America", capital: "San José", pop: "5.1 Million", 
        area: "51,100 km²<br>(19,730 mi²)", lang: "Spanish", cur: "Costa Rican Colón (₡)", gov: "Republic", econ: "Eco-tourism and Medical tech.", 
        cities: ["San José", "Puerto Limón", "Alajuela", "Heredia"], 
        marks: ["Arenal Volcano", "Manuel Antonio Park", "Monteverde Cloud Forest", "Tortuguero Canal"], 
        culture: "Centered around the 'Pura Vida' philosophy.", 
        facts: ["No standing army since 1948", "Over 25% of land is protected parks", "99% of energy comes from renewable sources"] 
    },
    { 
        name: "Cuba", code: "CU", continent: "North America", capital: "Havana", pop: "11.3 Million", 
        area: "109,884 km²<br>(42,426 mi²)", lang: "Spanish", cur: "Cuban Peso ($)", gov: "Communist State", econ: "Sugar, Tobacco, and Medical services.", 
        cities: ["Havana", "Santiago de Cuba", "Camagüey", "Holguín"], 
        marks: ["Old Havana", "Varadero Beach", "Viñales Valley", "Castillo de la Real Fuerza"], 
        culture: "Famous for salsa, cigars, and vintage 1950s cars.", 
        facts: ["Highest doctor-to-patient ratio globally", "The prehistoric fish 'Manjuari' is only here", "Christmas was not official until 1997"] 
    },
    { 
        name: "Dominica", code: "DM", continent: "North America", capital: "Roseau", pop: "72,000", 
        area: "751 km²<br>(290 mi²)", lang: "English, French Patois", cur: "East Caribbean Dollar ($)", gov: "Parliamentary Republic", econ: "Agriculture and Eco-tourism.", 
        cities: ["Roseau", "Portsmouth", "Marigot", "Berekua"], 
        marks: ["Boiling Lake", "Morne Trois Pitons", "Emerald Pool", "Champagne Reef"], 
        culture: "Strong indigenous Kalinago roots.", 
        facts: ["Known as the 'Nature Island of the Caribbean'", "Home to the world's 2nd largest hot spring", "Only island with surviving Carib Indians"] 
    },
    { 
        name: "Dominican Republic", code: "DO", continent: "North America", capital: "Santo Domingo", pop: "11 Million", 
        area: "48,671 km²<br>(18,792 mi²)", lang: "Spanish", cur: "Dominican Peso ($)", gov: "Republic", econ: "Tourism, Mining, Agriculture.", 
        cities: ["Santo Domingo", "Santiago", "Puerto Plata", "La Romana"], 
        marks: ["Zona Colonial", "Punta Cana Beaches", "Pico Duarte", "Bahia de las Aguilas"], 
        culture: "Birthplace of Merengue and Bachata music.", 
        facts: ["Oldest permanent European settlement in Americas", "Lowest point in Caribbean (Lake Enriquillo)", "Only place where Larimar stone is found"] 
    },
    { 
        name: "El Salvador", code: "SV", continent: "North America", capital: "San Salvador", pop: "6.3 Million", 
        area: "21,041 km²<br>(8,124 mi²)", lang: "Spanish", cur: "US Dollar ($) / Bitcoin", gov: "Republic", econ: "Manufacturing hub.", 
        cities: ["San Salvador", "Santa Ana", "San Miguel", "Soyapango"], 
        marks: ["Joyas de Cerén", "Santa Ana Volcano", "Lake Coatepeque", "El Tunco Beach"], 
        culture: "Known for 'Pupusas' and volcanic landscapes.", 
        facts: ["Smallest and densest country in Central America", "Known as the 'Land of Volcanoes'", "World-class destination for surfing"] 
    },
    { 
        name: "Grenada", code: "GD", continent: "North America", capital: "St. George's", pop: "125,000", 
        area: "344 km²<br>(133 mi²)", lang: "English", cur: "East Caribbean Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Spices.", 
        cities: ["St. George's", "Gouyave", "Grenville", "Victoria"], 
        marks: ["Grand Anse Beach", "Underwater Sculpture Park", "Annandale Falls", "Fort George"], 
        culture: "Rich French/British history; famous for 'Oil Down'.", 
        facts: ["Produces 20% of the world's nutmeg", "Home to first underwater sculpture park", "Grenada dove is found only here"] 
    },
    { 
        name: "Guatemala", code: "GT", continent: "North America", capital: "Guatemala City", pop: "17 Million", 
        area: "108,889 km²<br>(42,042 mi²)", lang: "Spanish, Mayan", cur: "Quetzal (Q)", gov: "Republic", econ: "Coffee, Sugar, Bananas.", 
        cities: ["Guatemala City", "Antigua Guatemala", "Quetzaltenango", "Escuintla"], 
        marks: ["Tikal Mayan Ruins", "Lake Atitlán", "Pacaya Volcano", "Semuc Champey"], 
        culture: "Heart of the Mayan world; colorful textiles.", 
        facts: ["Name means 'Land of many trees'", "Blue denim was first created here", "Chocolate bar was invented during Mayan times"] 
    },
    { 
        name: "Haiti", code: "HT", continent: "North America", capital: "Port-au-Prince", pop: "11.5 Million", 
        area: "27,750 km²<br>(10,714 mi²)", lang: "Haitian Creole, French", cur: "Gourde (G)", gov: "Republic", econ: "Textiles and Agriculture.", 
        cities: ["Port-au-Prince", "Carrefour", "Delmas", "Cap-Haïtien"], 
        marks: ["Citadelle Laferrière", "Sans-Souci Palace", "Labadee", "Bassin Bleu"], 
        culture: "World's first black-led republic.", 
        facts: ["First independent nation in Latin America", "Largest fortress in Americas (Citadelle)", "Famous for vibrant wood carvings"] 
    },
    { 
        name: "Honduras", code: "HN", continent: "North America", capital: "Tegucigalpa", pop: "10 Million", 
        area: "112,492 km²<br>(43,433 mi²)", lang: "Spanish", cur: "Lempira (L)", gov: "Republic", econ: "Bananas and Coffee.", 
        cities: ["Tegucigalpa", "San Pedro Sula", "Choloma", "La Ceiba"], 
        marks: ["Copán Mayan Ruins", "Roatán Islands", "Pulhapanzak Waterfall", "Pico Bonito"], 
        culture: "Blends Mayan, Spanish, and Garifuna traditions.", 
        facts: ["Has a phenomenon called 'Rain of Fish'", "First country called a 'Banana Republic'", "Longest Mayan hieroglyphic text is here"] 
    },
    { 
        name: "Jamaica", code: "JM", continent: "North America", capital: "Kingston", pop: "2.8 Million", 
        area: "10,991 km²<br>(4,244 mi²)", lang: "English, Patois", cur: "Jamaican Dollar ($)", gov: "Constitutional Monarchy", econ: "Mining and Tourism.", 
        cities: ["Kingston", "Montego Bay", "Spanish Town", "Portmore"], 
        marks: ["Dunn's River Falls", "Blue Mountains", "Bob Marley Museum", "Negril Seven Mile Beach"], 
        culture: "Global influence through Reggae and Rastafarianism.", 
        facts: ["Most churches per square mile globally", "First Caribbean country with its own website", "James Bond was written here"] 
    },
    { 
        name: "Mexico", code: "MX", continent: "North America", capital: "Mexico City", pop: "126.7 Million", 
        area: "1.96 Million km²<br>(758,449 mi²)", lang: "Spanish", cur: "Mexican Peso ($)", gov: "Federal Republic", econ: "Manufacturing and Tourism.", 
        cities: ["Mexico City", "Guadalajara", "Monterrey", "Puebla"], 
        marks: ["Chichén Itzá", "Teotihuacan Pyramids", "Chapultepec Castle", "Palenque"], 
        culture: "Rich Mayan history and colorful Mariachi music.", 
        facts: ["Largest pyramid by volume (Cholula) is here", "Mexico City sinks 10 inches every year", "Introduced chocolate to the world"] 
    },
    { 
        name: "Nicaragua", code: "NI", continent: "North America", capital: "Managua", pop: "6.8 Million", 
        area: "130,373 km²<br>(50,337 mi²)", lang: "Spanish", cur: "Córdoba (C$)", gov: "Republic", econ: "Coffee, Beef, and Surf tourism.", 
        cities: ["Managua", "León", "Masaya", "Granada"], 
        marks: ["Lake Nicaragua", "Ometepe Island", "Masaya Volcano", "Granada Colonial Center"], 
        culture: "Rich in poetry and traditional folk dances.", 
        facts: ["Only freshwater lake with sharks", "Known as the 'Land of Lakes and Volcanoes'", "Home to León and Granada, oldest cities"] 
    },
    { 
        name: "Panama", code: "PA", continent: "North America", capital: "Panama City", pop: "4.4 Million", 
        area: "75,417 km²<br>(29,119 mi²)", lang: "Spanish", cur: "Balboa (B/.) / US Dollar ($)", gov: "Republic", econ: "Logistics hub and Panama Canal.", 
        cities: ["Panama City", "San Miguelito", "David", "Arraiján"], 
        marks: ["Panama Canal", "Casco Viejo", "San Blas Islands", "Biomuseo"], 
        culture: "A bridge between continents; modern and indigenous mix.", 
        facts: ["See sun rise over Pacific and set over Atlantic", "Canal generates about 40% of the GDP", "Panama Hat was actually invented in Ecuador"] 
    },
    { 
        name: "Saint Kitts and Nevis", code: "KN", continent: "North America", capital: "Basseterre", pop: "48,000", 
        area: "261 km²<br>(101 mi²)", lang: "English", cur: "East Caribbean Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Citizenship by investment.", 
        cities: ["Basseterre", "Sandy Point Town", "Cayon", "Charlestown"], 
        marks: ["Brimstone Hill Fortress", "Mount Liamuiga", "Pinney's Beach", "Frigate Bay"], 
        culture: "Influenced by British and West African dance.", 
        facts: ["Smallest sovereign state in the Americas", "Known as the 'Mother Colony' of West Indies", "Monkeys outnumber humans on Saint Kitts"] 
    },
    { 
        name: "Saint Lucia", code: "LC", continent: "North America", capital: "Castries", pop: "180,000", 
        area: "616 km²<br>(238 mi²)", lang: "English, French Patois", cur: "East Caribbean Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Offshore banking.", 
        cities: ["Castries", "Bexon", "Vieux Fort", "Micoud"], 
        marks: ["The Pitons", "Sulphur Springs", "Marigot Bay", "Rodney Bay"], 
        culture: "A blend of French, British, and African heritages.", 
        facts: ["The Pitons are iconic volcanic spires", "Only country named after a woman", "Has the world's only 'drive-in' volcano"] 
    },
    { 
        name: "Saint Vincent and the Grenadines", code: "VC", continent: "North America", capital: "Kingstown", pop: "104,000", 
        area: "389 km²<br>(150 mi²)", lang: "English", cur: "East Caribbean Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism and Agriculture.", 
        cities: ["Kingstown", "Georgetown", "Byera Village", "Barrouallie"], 
        marks: ["La Soufrière Volcano", "Tobago Cays", "Mustique", "Botanical Gardens"], 
        culture: "Rich in sailing and Garifuna heritage.", 
        facts: ["'Pirates of the Caribbean' was filmed here", "Kingstown is the 'City of Arches'", "La Soufrière erupted as recently as 2021"] 
    },
    { 
        name: "Trinidad and Tobago", code: "TT", continent: "North America", capital: "Port of Spain", pop: "1.5 Million", 
        area: "5,131 km²<br>(1,981 mi²)", lang: "English", cur: "Trinidad and Tobago Dollar ($)", gov: "Parliamentary Republic", econ: "Oil and Natural gas.", 
        cities: ["Chaguanas", "San Fernando", "Port of Spain", "Arima"], 
        marks: ["Maracas Bay", "Pigeon Point", "Pitch Lake", "Caroni Bird Sanctuary"], 
        culture: "Birthplace of Steelpan and Soca music.", 
        facts: ["Steelpan is only instrument invented in 20th century", "Pitch Lake is world's largest asphalt deposit", "Home to hottest pepper, Moruga Scorpion"] 
    },
    { 
        name: "United States", code: "US", continent: "North America", capital: "Washington, D.C.", pop: "333 Million", 
        area: "9.83 Million km²<br>(3.79 Million mi²)", lang: "English, Spanish", cur: "US Dollar ($)", gov: "Federal Republic", econ: "Tech/Finance.", 
        cities: ["New York City", "Los Angeles", "Chicago", "Houston"], 
        marks: ["Statue of Liberty", "Grand Canyon", "Golden Gate Bridge", "Mount Rushmore"], 
        culture: "A global 'Melting Pot' known for Jazz and Hollywood.", 
        facts: ["Flag was designed by a high school student", "No official national language", "Uses roughly 18% of the world's energy"] 
    },
    { 
        name: "Argentina", code: "AR", continent: "South America", capital: "Buenos Aires", pop: "45.8 Million", 
        area: "2.78 Million km²<br>(1.07 Million mi²)", lang: "Spanish", cur: "Argentine Peso ($)", gov: "Federal Republic", econ: "G20 member; beef and soy exporter.", 
        cities: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"], 
        marks: ["Iguazu Falls", "Perito Moreno Glacier", "Mount Aconcagua", "Teatro Colón"], 
        culture: "Home of Tango and world-class Asado (BBQ).", 
        facts: ["5 presidents in 10 days in 2001", "Created first animated feature film", "Radio began here in 1920"] 
    },
    { 
        name: "Bolivia", code: "BO", continent: "South America", capital: "Sucre / La Paz", pop: "12.2 Million", 
        area: "1.1 Million km²<br>(424,164 mi²)", lang: "Spanish, Quechua", cur: "Boliviano (Bs.)", gov: "Republic", econ: "Exporter of gas and lithium.", 
        cities: ["Santa Cruz", "La Paz", "El Alto", "Cochabamba"], 
        marks: ["Salar de Uyuni", "Lake Titicaca", "Tiwanaku", "Madidi Park"], 
        culture: "Famous for colorful 'Pollera' skirts.", 
        facts: ["Largest salt flat on Earth", "Highest capital city", "30+ official languages"] 
    },
    { 
        name: "Brazil", code: "BR", continent: "South America", capital: "Brasília", pop: "215.3 Million", 
        area: "8.51 Million km²<br>(3.28 Million mi²)", lang: "Portuguese", cur: "Brazilian Real (R$)", gov: "Republic", econ: "Agriculture/Aviation.", 
        cities: ["São Paulo", "Rio de Janeiro", "Salvador", "Fortaleza"], 
        marks: ["Christ the Redeemer", "Sugarloaf Mountain", "Iguaçu Falls", "Amazon Theatre"], 
        culture: "Samba and Carnival.", 
        facts: ["150 years of coffee leadership", "Snake Island", "Soccer stadiums everywhere"] 
    },
    { 
        name: "Chile", code: "CL", continent: "South America", capital: "Santiago", pop: "19.2 Million", 
        area: "756,102 km²<br>(291,933 mi²)", lang: "Spanish", cur: "Chilean Peso ($)", gov: "Republic", econ: "Leading copper producer.", 
        cities: ["Santiago", "Valparaíso", "Concepción", "Antofagasta"], 
        marks: ["Torres del Paine", "Easter Island", "Atacama Desert", "Valle de la Luna"], 
        culture: "Land of poets and the 'Cueca' folk dance.", 
        facts: ["Atacama is the driest non-polar desert", "Longest country north to south", "Largest swimming pool in the world"] 
    },
    { 
        name: "Colombia", code: "CO", continent: "South America", capital: "Bogotá", pop: "51.3 Million", 
        area: "1.14 Million km²<br>(440,831 mi²)", lang: "Spanish", cur: "Colombian Peso ($)", gov: "Republic", econ: "Coffee and Emeralds.", 
        cities: ["Bogotá", "Medellín", "Cali", "Barranquilla"], 
        marks: ["Salt Cathedral", "Tayrona Park", "Monserrate", "Caño Cristales"], 
        culture: "Vibrant Cumbia music and magical realism.", 
        facts: ["Produces 70-90% of world emeralds", "Coastlines on Pacific and Atlantic", "River of Five Colors is here"] 
    },
    { 
        name: "Ecuador", code: "EC", continent: "South America", capital: "Quito", pop: "18 Million", 
        area: "283,561 km²<br>(109,484 mi²)", lang: "Spanish", cur: "US Dollar ($)", gov: "Republic", econ: "Bananas and Oil.", 
        cities: ["Guayaquil", "Quito", "Cuenca", "Santo Domingo"], 
        marks: ["Galápagos Islands", "Cotopaxi", "Mitad del Mundo", "Cajas Park"], 
        culture: "Birthplace of the Panama Hat.", 
        facts: ["Closest point to the sun", "Rights for nature", "Darwin's inspiration"] 
    },
    { 
        name: "Guyana", code: "GY", continent: "South America", capital: "Georgetown", pop: "800,000", 
        area: "214,969 km²<br>(83,000 mi²)", lang: "English", cur: "Guyanese Dollar ($)", gov: "Republic", econ: "Fast-growing oil hub.", 
        cities: ["Georgetown", "Linden", "New Amsterdam", "Anna Regina"], 
        marks: ["Kaieteur Falls", "St. George's Cathedral", "Mount Roraima", "Kanuku Mountains"], 
        culture: "South American geography with Caribbean soul.", 
        facts: ["World's largest single-drop waterfall", "70% pristine rainforest", "National sport is Cricket"] 
    },
    { 
        name: "Paraguay", code: "PY", continent: "South America", capital: "Asunción", pop: "6.7 Million", 
        area: "406,752 km²<br>(157,048 mi²)", lang: "Spanish, Guaraní", cur: "Guaraní (₲)", gov: "Republic", econ: "Soy and Hydroelectric power.", 
        cities: ["Asunción", "Ciudad del Este", "San Lorenzo", "Luque"], 
        marks: ["Itaipu Dam", "Jesuit Missions", "Pantanal", "Ybycuí Park"], 
        culture: "A unique bilingual indigenous society.", 
        facts: ["Landlocked 'Heart of South America'", "Itaipu is a renewable energy giant", "Drink cold-brewed 'Tereré' tea"] 
    },
    { 
        name: "Peru", code: "PE", continent: "South America", capital: "Lima", pop: "33.7 Million", 
        area: "1.28 Million km²<br>(496,225 mi²)", lang: "Spanish, Quechua", cur: "Peruvian Sol (S/.)", gov: "Republic", econ: "Mining and Gastronomy.", 
        cities: ["Lima", "Arequipa", "Cusco", "Trujillo"], 
        marks: ["Machu Picchu", "Nazca Lines", "Lake Titicaca", "Sacsayhuamán"], 
        culture: "Heir to the Inca Empire; world-class food.", 
        facts: ["Over 3,000 varieties of potatoes", "3,700 species of butterflies", "Amazon River begins in Peruvian Andes"] 
    },
    { 
        name: "Suriname", code: "SR", continent: "South America", capital: "Paramaribo", pop: "612,000", 
        area: "163,820 km²<br>(63,251 mi²)", lang: "Dutch", cur: "Surinamese Dollar ($)", gov: "Republic", econ: "Mining and Bauxite.", 
        cities: ["Paramaribo", "Lelydorp", "Nieuw Nickerie", "Moengo"], 
        marks: ["Central Nature Reserve", "St. Peter Cathedral", "Galibi Reserve", "Fort Zeelandia"], 
        culture: "Smallest nation in SA; Dutch-Caribbean mix.", 
        facts: ["Only Dutch-speaking SA country", "90% covered in forest", "UNESCO World Heritage inner city"] 
    },
    { 
        name: "Uruguay", code: "UY", continent: "South America", capital: "Montevideo", pop: "3.5 Million", 
        area: "176,215 km²<br>(68,037 mi²)", lang: "Spanish", cur: "Uruguayan Peso ($)", gov: "Republic", econ: "Agri and Software.", 
        cities: ["Montevideo", "Salto", "Ciudad de la Costa", "Paysandú"], 
        marks: ["Casapueblo", "Colonia del Sacramento", "Punta del Este", "Palacio Salvo"], 
        culture: "Socially progressive with Gaucho traditions.", 
        facts: ["3 cows for every 1 human", "Won the first-ever World Cup", "Entirely outside the tropics"] 
    },
    { 
        name: "Venezuela", code: "VE", continent: "South America", capital: "Caracas", pop: "28 Million", 
        area: "916,445 km²<br>(353,841 mi²)", lang: "Spanish", cur: "Bolívar (Bs.)", gov: "Republic", econ: "World's largest oil reserves.", 
        cities: ["Caracas", "Maracaibo", "Valencia", "Barquisimeto"], 
        marks: ["Angel Falls", "Los Roques", "Mount Roraima", "Catatumbo Lightning"], 
        culture: "Famous for Arepas and beauty pageants.", 
        facts: ["World's highest uninterrupted waterfall", "Most lightning strikes on Earth", "First to abolish death penalty"] 
    },
    { 
        name: "Australia", code: "AU", continent: "Oceania", capital: "Canberra", pop: "26 Million", 
        area: "7.69 Million km²<br>(2.97 Million mi²)", lang: "English", cur: "Australian Dollar ($)", gov: "Constitutional Monarchy", econ: "Mining/Services.", 
        cities: ["Sydney", "Melbourne", "Brisbane", "Perth"], 
        marks: ["Sydney Opera House", "Great Barrier Reef", "Uluru", "Twelve Apostles"], 
        culture: "Outdoor lifestyle; Aboriginal heritage.", 
        facts: ["Alps get more snow than Switzerland", "90% live on the coast", "3x more sheep than people"] 
    },
    { 
        name: "Fiji", code: "FJ", continent: "Oceania", capital: "Suva", pop: "926,000", 
        area: "18,274 km²<br>(7,056 mi²)", lang: "English, Fijian, Hindi", cur: "Fijian Dollar ($)", gov: "Republic", econ: "Tourism and Sugar.", 
        cities: ["Suva", "Nadi", "Lautoka", "Labasa"], 
        marks: ["Mamanuca Islands", "Sri Siva Subramaniya Temple", "Garden of the Sleeping Giant", "Bouma Park"], 
        culture: "Famous for 'Bula' spirit and Kava ceremonies.", 
        facts: ["Consists of 333 islands", "Coconuts are a vital part of life", "International Date Line passes through it"] 
    },
    { 
        name: "New Zealand", code: "NZ", continent: "Oceania", capital: "Wellington", pop: "5.1 Million", 
        area: "268,021 km²<br>(103,483 mi²)", lang: "English, Māori", cur: "NZ Dollar ($)", gov: "Constitutional Monarchy", econ: "Tourism/Dairy.", 
        cities: ["Auckland", "Wellington", "Christchurch", "Hamilton"], 
        marks: ["Milford Sound", "Hobbiton", "Mount Cook", "Waitomo Caves"], 
        culture: "Māori heritage and Haka traditions.", 
        facts: ["No snakes in the wild", "First to give women the vote", "More people in Auckland than South Island"] 
    },
    { 
        name: "Papua New Guinea", code: "PG", continent: "Oceania", capital: "Port Moresby", pop: "10.1 Million", 
        area: "462,840 km²<br>(178,703 mi²)", lang: "Tok Pisin, Hiri Motu, English", cur: "Kina (K)", gov: "Constitutional Monarchy", econ: "Mining and Agri.", 
        cities: ["Port Moresby", "Lae", "Mount Hagen", "Madang"], 
        marks: ["Kokoda Track", "Tavurvur Volcano", "Varirata Park", "Sepik River"], 
        culture: "World's most linguistically diverse nation.", 
        facts: ["Over 800 languages spoken", "Home to the Hooded Pitohui (poisonous bird)", "Traditional 'Sing-sing' festivals"] 
    },
{ 
        name: "Kiribati", code: "KI", continent: "Oceania", capital: "South Tarawa", pop: "131,000", 
        area: "811 km²\n(313 mi²)", lang: "Gilbertese, English", cur: "Australian Dollar ($)", gov: "Republic", econ: "Fishing and Copra.", 
        cities: ["South Tarawa", "Betio", "Bikenibeu", "Teaoraereke"], 
        marks: ["Christmas Island", "Phoenix Islands", "Tarawa Atoll", "Outer Islands"], 
        culture: "Centered around 'Maneaba' (meeting houses) and traditional dance.", 
        facts: ["Only country in all four hemispheres", "First nation to see the sunrise each day", "At risk of disappearing due to rising sea levels"] 
    },
    { 
        name: "Marshall Islands", code: "MH", continent: "Oceania", capital: "Majuro", pop: "42,000", 
        area: "181 km²\n(70 mi²)", lang: "Marshallese, English", cur: "US Dollar ($)", gov: "Republic", econ: "US aid and fishing.", 
        cities: ["Majuro", "Ebeye", "Arno", "Jabor"], 
        marks: ["Bikini Atoll", "Kalalin Pass", "Majuro Bridge", "Laura Beach"], 
        culture: "Famous for ancient stick charts used for wave navigation.", 
        facts: ["Consists of 29 coral atolls", "Home to the world's largest shark sanctuary", "Site of 67 US nuclear tests between 1946-1958"] 
    },
    { 
        name: "Micronesia", code: "FM", continent: "Oceania", capital: "Palikir", pop: "114,000", 
        area: "702 km²\n(271 mi²)", lang: "English + 8 Local", cur: "US Dollar ($)", gov: "Federal Republic", econ: "Subsistence farming and fishing.", 
        cities: ["Weno", "Palikir", "Kolonia", "Colonia"], 
        marks: ["Nan Madol Ruins", "Chuuk Lagoon", "Stone Money (Yap)", "Pohnpei Mountains"], 
        culture: "Home to the giant ancient stone money of Yap.", 
        facts: ["Nan Madol is an ancient city built on coral reefs", "Chuuk Lagoon is a world-class wreck diving site", "The country is spread across 4 distinct states"] 
    },
    { 
        name: "Nauru", code: "NR", continent: "Oceania", capital: "Yaren", pop: "12,000", 
        area: "21 km²\n(8 mi²)", lang: "Nauruan, English", cur: "Australian Dollar ($)", gov: "Republic", econ: "Phosphate mining.", 
        cities: ["Yaren", "Denigomodu", "Meneng", "Aiwo"], 
        marks: ["Anibare Bay", "Command Ridge", "Buada Lagoon", "Moqua Well"], 
        culture: "Deeply influenced by its history of phosphate wealth.", 
        facts: ["World's smallest island nation", "Does not have an official capital city", "The only country without a military"] 
    },
    { 
        name: "Palau", code: "PW", continent: "Oceania", capital: "Ngerulmud", pop: "18,000", 
        area: "459 km²\n(177 mi²)", lang: "Palauan, English", cur: "US Dollar ($)", gov: "Republic", econ: "High-end tourism.", 
        cities: ["Koror", "Airai", "Meyuns", "Ngerulmud"], 
        marks: ["Rock Islands", "Jellyfish Lake", "Ngardmau Falls", "Belau National Museum"], 
        culture: "A matrilineal society with strong environmental focus.", 
        facts: ["First country to change its visa for ecological protection", "Jellyfish Lake has millions of stingless jellyfish", "Has no standing army"] 
    },
    { 
        name: "Samoa", code: "WS", continent: "Oceania", capital: "Apia", pop: "205,000", 
        area: "2,831 km²\n(1,093 mi²)", lang: "Samoan, English", cur: "Samoan Tālā (T)", gov: "Republic", econ: "Agri and Tourism.", 
        cities: ["Apia", "Vaitele", "Faleasiu", "Vailele"], 
        marks: ["To Sua Ocean Trench", "Lalomanu Beach", "Robert Louis Stevenson Museum", "Piula Cave Pool"], 
        culture: "Governed by 'Fa'a Samoa' (The Samoan Way).", 
        facts: ["Tattoos (Pe'a) are a deeply sacred rite of passage", "Skipped a full day in 2011 to align its time zone with trade partners", "Known as the 'Heart of Polynesia'"] 
    },
    { 
        name: "Solomon Islands", code: "SB", continent: "Oceania", capital: "Honiara", pop: "724,000", 
        area: "28,896 km²\n(11,157 mi²)", lang: "English + 70 Local", cur: "Solomon Islands Dollar ($)", gov: "Constitutional Monarchy", econ: "Timber and Fishing.", 
        cities: ["Honiara", "Gizo", "Auki", "Noro"], 
        marks: ["Guadalcanal Battlefield", "Marovo Lagoon", "Kennedy Island", "Rennell Island"], 
        culture: "Rich in WWII history and traditional shell money.", 
        facts: ["Marovo is the world's largest saltwater lagoon", "Site of the intense WWII Battle of Guadalcanal", "Over 900 islands make up the country"] 
    },
    { 
        name: "Tonga", code: "TO", continent: "Oceania", capital: "Nuku'alofa", pop: "107,000", 
        area: "747 km²\n(288 mi²)", lang: "Tongan, English", cur: "Paʻanga (T$)", gov: "Constitutional Monarchy", econ: "Agriculture and Tourism.", 
        cities: ["Nuku'alofa", "Neiafu", "Haveluloto", "Vaini"], 
        marks: ["Ha'amonga 'a Maui", "Mapu 'a Vaea Blowholes", "Anahulu Cave", "Pangaimotu Island"], 
        culture: "The only monarchy in the Pacific Islands.", 
        facts: ["Known as the 'Friendly Islands'", "Never lost its indigenous governance to colonization", "Tonga is the first country to experience a new day"] 
    },
    { 
        name: "Tuvalu", code: "TV", continent: "Oceania", capital: "Funafuti", pop: "11,000", 
        area: "26 km²\n(10 mi²)", lang: "Tuvaluan, English", cur: "Australian Dollar ($)", gov: "Constitutional Monarchy", econ: "Fishing and .tv domain.", 
        cities: ["Funafuti", "Asau", "Lolua", "Savave"], 
        marks: ["Funafuti Conservation Area", "Tuvalu Philatelic Bureau", "Nanumanga Caves", "Funafala"], 
        culture: "A community-focused culture with shared traditional meals.", 
        facts: ["Fourth smallest country in the world", "Its highest point is only 4.6 meters above sea level", "Earns millions by leasing its '.tv' internet domain"] 
    },
    { 
        name: "Vanuatu", code: "VU", continent: "Oceania", capital: "Port Vila", pop: "326,000", 
        area: "12,189 km²\n(4,706 mi²)", lang: "Bislama, French, English", cur: "Vatu (Vt)", gov: "Republic", econ: "Agriculture and Tourism.", 
        cities: ["Port Vila", "Luganville", "Norsup", "Isangel"], 
        marks: ["Mount Yasur", "Millennium Cave", "SS President Coolidge Wreck", "Champagne Beach"], 
        culture: "Birthplace of land diving (Nagol), the origin of bungee jumping.", 
        facts: ["Mount Yasur is one of the world's most accessible active volcanoes", "Has the world's only underwater post office", "Voted the 'Happiest Place on Earth' multiple times"] 
    },
    { 
        name: "Albania", code: "AL", continent: "Europe", capital: "Tirana", pop: "2.8 Million", 
        area: "28,748 km²\n(11,100 mi²)", lang: "Albanian", cur: "Albanian Lek (L)", gov: "Republic", econ: "Tourism and Energy.", 
        cities: ["Tirana", "Durrës", "Vlorë", "Elbasan"], 
        marks: ["Butrint Ruins", "Berat Castle", "Gjirokastër", "Blue Eye Spring"], 
        culture: "Known for the 'Besa' code of honor and hospitality.", 
        facts: ["More Albanians live outside the country than inside", "Nodding means 'no' and shaking your head means 'yes'", "Mother Teresa was ethnically Albanian"] 
    },
    { 
        name: "Andorra", code: "AD", continent: "Europe", capital: "Andorra la Vella", pop: "79,000", 
        area: "468 km²\n(181 mi²)", lang: "Catalan", cur: "Euro (€)", gov: "Principality", econ: "Tourism and Finance.", 
        cities: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Sant Julià de Lòria"], 
        marks: ["Casa de la Vall", "Madriu-Perafita-Claror Valley", "Pal Arinsal", "Caldea"], 
        culture: "A unique co-principality shared by France and Spain.", 
        facts: ["World's only country with Catalan as the sole official language", "Has no national bank and no national currency of its own", "Is the highest capital city in Europe"] 
    },
    { 
        name: "Austria", code: "AT", continent: "Europe", capital: "Vienna", pop: "9 Million", 
        area: "83,879 km²\n(32,386 mi²)", lang: "German", cur: "Euro (€)", gov: "Federal Republic", econ: "High-tech and Tourism.", 
        cities: ["Vienna", "Salzburg", "Innsbruck", "Graz"], 
        marks: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Hallstatt", "The Hofburg"], 
        culture: "The world capital of classical music.", 
        facts: ["Over 60% of the country is covered by the Alps", "The sewing machine was invented by an Austrian", "Vienna's Central Cemetery has more residents than the city has living people"] 
    },
    { 
        name: "Belarus", code: "BY", continent: "Europe", capital: "Minsk", pop: "9.2 Million", 
        area: "207,600 km²\n(80,155 mi²)", lang: "Belarusian, Russian", cur: "Belarusian Ruble (Br)", gov: "Republic", econ: "Industry and IT.", 
        cities: ["Minsk", "Gomel", "Mogilev", "Vitebsk"], 
        marks: ["Mir Castle", "Nesvizh Castle", "Brest Fortress", "Belovezhskaya Pushcha"], 
        culture: "Rich in folklore and traditional 'Vyshyvanka' patterns.", 
        facts: ["Contains the oldest forest in Europe", "Is known as the 'Silicon Valley' of Eastern Europe", "The game 'World of Tanks' was created here"] 
    },
    { 
        name: "Belgium", code: "BE", continent: "Europe", capital: "Brussels", pop: "11.6 Million", 
        area: "30,689 km²\n(11,849 mi²)", lang: "Dutch, French, German", cur: "Euro (€)", gov: "Monarchy", econ: "Trade and Manufacturing.", 
        cities: ["Brussels", "Antwerp", "Ghent", "Bruges"], 
        marks: ["The Grand Place", "Atomium", "Manneken Pis", "Gravensteen"], 
        culture: "Home of the Smurfs, Tintin, and fine chocolate.", 
        facts: ["Produces over 800 types of beer", "Brussels airport sells more chocolate than anywhere else on Earth", "Tomorrowland, the world's largest music festival, is here"] 
    },
    { 
        name: "Bosnia and Herzegovina", code: "BA", continent: "Europe", capital: "Sarajevo", pop: "3.2 Million", 
        area: "51,129 km²\n(19,741 mi²)", lang: "Bosnian, Croatian, Serbian", cur: "Convertible Mark (KM)", gov: "Federal Republic", econ: "Timber and Mining.", 
        cities: ["Sarajevo", "Banja Luka", "Tuzla", "Mostar"], 
        marks: ["Stari Most (Old Bridge)", "Baščaršija", "Kravica Waterfall", "Jajce Waterfall"], 
        culture: "A beautiful meeting point of Eastern and Western traditions.", 
        facts: ["Nickname is the 'Heart Shaped Land'", "Sarajevo hosted the 1984 Winter Olympics", "Is home to one of the last remaining jungles in Europe (Perućica)"] 
    },
    { 
        name: "Bulgaria", code: "BG", continent: "Europe", capital: "Sofia", pop: "6.8 Million", 
        area: "110,994 km²\n(42,855 mi²)", lang: "Bulgarian", cur: "Bulgarian Lev (лв)", gov: "Republic", econ: "Industry and Agri.", 
        cities: ["Sofia", "Plovdiv", "Varna", "Burgas"], 
        marks: ["Rila Monastery", "Alexander Nevsky Cathedral", "Buzludzha", "Seven Rila Lakes"], 
        culture: "Renowned for Rose oil production and Cyrillic script.", 
        facts: ["The Cyrillic alphabet was invented here", "Is the oldest country in Europe that hasn't changed its name", "Produces about 85% of the world's rose oil"] 
    },
    { 
        name: "Croatia", code: "HR", continent: "Europe", capital: "Zagreb", pop: "3.8 Million", 
        area: "56,594 km²\n(21,851 mi²)", lang: "Croatian", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Shipbuilding.", 
        cities: ["Zagreb", "Split", "Rijeka", "Dubrovnik"], 
        marks: ["Dubrovnik Old Town", "Plitvice Lakes", "Pula Arena", "Diocletian's Palace"], 
        culture: "Famous for the 'Klapa' singing and Mediterranean vibes.", 
        facts: ["The necktie was invented in Croatia", "Dubrovnik was the filming location for King's Landing", "Is the home of the Dalmatian dog breed"] 
    },
    { 
        name: "Cyprus", code: "CY", continent: "Europe", capital: "Nicosia", pop: "1.2 Million", 
        area: "9,251 km²\n(3,572 mi²)", lang: "Greek, Turkish", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Shipping.", 
        cities: ["Nicosia", "Limassol", "Larnaca", "Paphos"], 
        marks: ["Tombs of the Kings", "Kykkos Monastery", "Aphrodite's Rock", "Lala Mustafa Pasha Mosque"], 
        culture: "Rich in Greek mythology; the legendary birthplace of Aphrodite.", 
        facts: ["The whole city of Paphos is a UNESCO World Heritage site", "Is home to the world's oldest wine label (Commandaria)", "Cyprus is the only country to have a map of its land on its flag"] 
    },
    { 
        name: "Czech Republic", code: "CZ", continent: "Europe", capital: "Prague", pop: "10.5 Million", 
        area: "78,866 km²\n(30,450 mi²)", lang: "Czech", cur: "Czech Koruna (Kč)", gov: "Republic", econ: "Automotive and Tech.", 
        cities: ["Prague", "Brno", "Ostrava", "Plzeň"], 
        marks: ["Prague Castle", "Charles Bridge", "Old Town Square", "Sedlec Ossuary"], 
        culture: "Bohemian glass artistry and medieval architecture.", 
        facts: ["Has the most castles per square mile in Europe", "Soft contact lenses were invented here", "Prague Castle is the largest ancient castle in the world"] 
    },
    { 
        name: "Denmark", code: "DK", continent: "Europe", capital: "Copenhagen", pop: "5.9 Million", 
        area: "42,933 km²\n(16,577 mi²)", lang: "Danish", cur: "Danish Krone (kr)", gov: "Monarchy", econ: "Renewable Energy.", 
        cities: ["Copenhagen", "Aarhus", "Odense", "Aalborg"], 
        marks: ["Little Mermaid Statue", "Tivoli Gardens", "Nyhavn", "Kronborg Castle"], 
        culture: "Defined by 'Hygge' and high-quality design.", 
        facts: ["The Danish flag is the oldest continuously used national flag", "Is the birthplace of LEGO", "Has no mountains; its highest point is only 170m"] 
    },
    { 
        name: "Estonia", code: "EE", continent: "Europe", capital: "Tallinn", pop: "1.3 Million", 
        area: "45,227 km²\n(17,462 mi²)", lang: "Estonian", cur: "Euro (€)", gov: "Republic", econ: "IT and Digital Services.", 
        cities: ["Tallinn", "Tartu", "Narva", "Pärnu"], 
        marks: ["Tallinn Old Town", "Lahemaa Park", "Alexander Nevsky Cathedral", "Kuressaare Castle"], 
        culture: "One of the world's most digitally advanced societies.", 
        facts: ["Was the first country to allow online voting", "Skype was created in Estonia", "Has over 2,000 islands in the Baltic Sea"] 
    },
    { 
        name: "Finland", code: "FI", continent: "Europe", capital: "Helsinki", pop: "5.5 Million", 
        area: "338,424 km²\n(130,666 mi²)", lang: "Finnish, Swedish", cur: "Euro (€)", gov: "Republic", econ: "Tech and Timber.", 
        cities: ["Helsinki", "Espoo", "Tampere", "Vantaa"], 
        marks: ["Suomenlinna", "Helsinki Cathedral", "Santa Claus Village", "Temppeliaukio Church"], 
        culture: "Sauna culture and the philosophy of 'Sisu'.", 
        facts: ["Has more saunas than cars", "Consistently ranked as the world's happiest country", "Is home to the only official Santa Claus"] 
    },
    { 
        name: "France", code: "FR", continent: "Europe", capital: "Paris", pop: "67.8 Million", 
        area: "551,695 km²\n(213,010 mi²)", lang: "French", cur: "Euro (€)", gov: "Republic", econ: "Aerospace and Luxury.", 
        cities: ["Paris", "Lyon", "Marseille", "Bordeaux"], 
        marks: ["Eiffel Tower", "Louvre Museum", "Mont Saint-Michel", "Versailles"], 
        culture: "Art, gastronomy, and high fashion.", 
        facts: ["Produces 1,600 types of cheese", "Louvre is the world's largest museum", "Most visited country on Earth"] 
    },
    { 
        name: "Germany", code: "DE", continent: "Europe", capital: "Berlin", pop: "83.2 Million", 
        area: "357,022 km²\n(137,847 mi²)", lang: "German", cur: "Euro (€)", gov: "Republic", econ: "Engineering and Cars.", 
        cities: ["Berlin", "Munich", "Hamburg", "Frankfurt"], 
        marks: ["Brandenburg Gate", "Neuschwanstein Castle", "Cologne Cathedral", "Reichstag"], 
        culture: "Christmas markets and precision engineering.", 
        facts: ["No speed limit on much of the Autobahn", "Berlin has more bridges than Venice", "Gummy bears were invented here"] 
    },
    { 
        name: "Greece", code: "GR", continent: "Europe", capital: "Athens", pop: "10.4 Million", 
        area: "131,957 km²\n(50,949 mi²)", lang: "Greek", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Shipping.", 
        cities: ["Athens", "Thessaloniki", "Patras", "Heraklion"], 
        marks: ["The Acropolis", "Parthenon", "Santorini", "Delphi"], 
        culture: "Cradle of Western civilization and philosophy.", 
        facts: ["Has over 6,000 islands", "First Olympic Games were held here in 776 BC", "No point is more than 85 miles from the sea"] 
    },
    { 
        name: "Hungary", code: "HU", continent: "Europe", capital: "Budapest", pop: "9.7 Million", 
        area: "93,030 km²\n(35,919 mi²)", lang: "Hungarian", cur: "Forint (Ft)", gov: "Republic", econ: "Automotive and Pharma.", 
        cities: ["Budapest", "Debrecen", "Szeged", "Miskolc"], 
        marks: ["Parliament Building", "Fisherman's Bastion", "Buda Castle", "Thermal Baths"], 
        culture: "Famous for thermal spas and Paprika.", 
        facts: ["The Rubik's Cube was invented by a Hungarian", "Budapest has the oldest underground rail in mainland Europe", "Is home to the world's first official wine region (Tokaj)"] 
    },
    { 
        name: "Iceland", code: "IS", continent: "Europe", capital: "Reykjavík", pop: "376,000", 
        area: "103,000 km²\n(39,769 mi²)", lang: "Icelandic", cur: "Icelandic Króna (kr)", gov: "Republic", econ: "Fishing and Energy.", 
        cities: ["Reykjavík", "Kópavogur", "Hafnarfjörður", "Akureyri"], 
        marks: ["Blue Lagoon", "Gulfoss Waterfall", "Hallgrímskirkja", "Skógafoss"], 
        culture: "Land of fire and ice; rich in sagas.", 
        facts: ["Has no mosquitoes at all", "Is home to one of the world's oldest parliaments", "Most Icelanders believe in elves and trolls"] 
    },
    { 
        name: "Ireland", code: "IE", continent: "Europe", capital: "Dublin", pop: "5.1 Million", 
        area: "70,273 km²\n(27,133 mi²)", lang: "Irish, English", cur: "Euro (€)", gov: "Republic", econ: "Tech and Pharma.", 
        cities: ["Dublin", "Cork", "Galway", "Limerick"], 
        marks: ["Cliffs of Moher", "Guinness Storehouse", "Blarney Castle", "Newgrange"], 
        culture: "Traditional folk music and 'craic'.", 
        facts: ["There are no snakes in the wild here", "Halloween originated from an Irish festival", "More Irish people live outside Ireland than inside"] 
    },
    { 
        name: "Italy", code: "IT", continent: "Europe", capital: "Rome", pop: "59 Million", 
        area: "301,340 km²\n(116,348 mi²)", lang: "Italian", cur: "Euro (€)", gov: "Republic", econ: "Fashion and Design.", 
        cities: ["Rome", "Milan", "Naples", "Florence"], 
        marks: ["Colosseum", "Leaning Tower", "Florence Cathedral", "Venice Canals"], 
        culture: "Renaissance art, opera, and pizza.", 
        facts: ["Most UNESCO sites in the world", "3,000 euros are thrown into Trevi Fountain daily", "Over 400 types of pasta"] 
    },
    { 
        name: "Latvia", code: "LV", continent: "Europe", capital: "Riga", pop: "1.9 Million", 
        area: "64,589 km²\n(24,938 mi²)", lang: "Latvian", cur: "Euro (€)", gov: "Republic", econ: "Timber and Logistics.", 
        cities: ["Riga", "Daugavpils", "Liepāja", "Jelgava"], 
        marks: ["Riga Old Town", "Rundāle Palace", "Gauja Park", "Freedom Monument"], 
        culture: "Massive choral singing festivals.", 
        facts: ["Over 50% of the country is covered by forest", "Riga has one of the world's largest collections of Art Nouveau buildings", "The first Christmas tree was reportedly decorated in Riga"] 
    },
    { 
        name: "Liechtenstein", code: "LI", continent: "Europe", capital: "Vaduz", pop: "39,000", 
        area: "160 km²\n(62 mi²)", lang: "German", cur: "Swiss Franc (CHF)", gov: "Monarchy", econ: "Finance and Tech.", 
        cities: ["Vaduz", "Schaan", "Triesen", "Balzers"], 
        marks: ["Vaduz Castle", "Gutenberg Castle", "Kunstmuseum", "Alps Mountains"], 
        culture: "A small but highly prosperous Alpine nation.", 
        facts: ["Is a double-landlocked country", "World's leading producer of false teeth", "You can rent the entire country for a night"] 
    },
    { 
        name: "Lithuania", code: "LT", continent: "Europe", capital: "Vilnius", pop: "2.8 Million", 
        area: "65,300 km²\n(25,212 mi²)", lang: "Lithuanian", cur: "Euro (€)", gov: "Republic", econ: "Laser tech and Fintech.", 
        cities: ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai"], 
        marks: ["Gediminas Tower", "Trakai Island Castle", "Hill of Crosses", "Vilnius Cathedral"], 
        culture: "Rich pagan history and folk art.", 
        facts: ["Lithuanian is one of the oldest living languages in the world", "The national dish is Cepelinai (potato dumplings)", "Vilnius has a self-proclaimed independent republic (Užupis)"] 
    },
    { 
        name: "Luxembourg", code: "LU", continent: "Europe", capital: "Luxembourg City", pop: "645,000", 
        area: "2,586 km²\n(998 mi²)", lang: "Luxembourgish, French, German", cur: "Euro (€)", gov: "Grand Duchy", econ: "Finance and Banking.", 
        cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange", "Dudelange"], 
        marks: ["Bock Casemates", "Grand Ducal Palace", "Vianden Castle", "Notre-Dame Cathedral"], 
        culture: "The world's only remaining Grand Duchy.", 
        facts: ["Is the first country to make all public transport free", "Highest GDP per capita in the world", "Nearly half of the population is made up of foreigners"] 
    },
    { 
        name: "Malta", code: "MT", continent: "Europe", capital: "Valletta", pop: "518,000", 
        area: "316 km²\n(122 mi²)", lang: "Maltese, English", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Gaming.", 
        cities: ["Valletta", "Birkirkara", "Mosta", "Sliema"], 
        marks: ["Upper Barrakka Gardens", "Mdina Old City", "Blue Grotto", "Ħaġar Qim"], 
        culture: "Historic Knights of Malta heritage.", 
        facts: ["Valletta is the smallest capital in the EU", "Was a major filming location for Gladiator and Troy", "Has more historic monuments per square mile than any other country"] 
    },
    { 
        name: "Moldova", code: "MD", continent: "Europe", capital: "Chişinău", pop: "2.6 Million", 
        area: "33,846 km²\n(13,068 mi²)", lang: "Romanian", cur: "Moldovan Leu (L)", gov: "Republic", econ: "Agriculture and Wine.", 
        cities: ["Chişinău", "Tiraspol", "Bălţi", "Bender"], 
        marks: ["Orheiul Vechi", "Milestii Mici", "Cricova Winery", "Soroca Fortress"], 
        culture: "Ancient winemaking traditions.", 
        facts: ["Home to the world's largest wine cellar", "Is the least visited country in Europe", "The shape of the country looks like a bunch of grapes"] 
    },
    { 
        name: "Monaco", code: "MC", continent: "Europe", capital: "Monaco", pop: "39,000", 
        area: "2.02 km²\n(0.78 mi²)", lang: "French", cur: "Euro (€)", gov: "Principality", econ: "Tourism and Finance.", 
        cities: ["Monte Carlo", "Monaco-Ville", "La Condamine", "Fontvieille"], 
        marks: ["Monte Carlo Casino", "Prince's Palace", "Oceanographic Museum", "Grand Prix Track"], 
        culture: "The global center of luxury and high-stakes racing.", 
        facts: ["Second smallest country in the world", "Has more millionaires per square foot than anywhere else", "National flag is identical to Indonesia's"] 
    },
    { 
        name: "Montenegro", code: "ME", continent: "Europe", capital: "Podgorica", pop: "620,000", 
        area: "13,812 km²\n(5,333 mi²)", lang: "Montenegrin", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Agri.", 
        cities: ["Podgorica", "Nikšić", "Herceg Novi", "Pljevlja"], 
        marks: ["Kotor Old Town", "Ostrog Monastery", "Durmitor Park", "Sveti Stefan"], 
        culture: "Rugged mountains meet a stunning Adriatic coast.", 
        facts: ["Name means 'Black Mountain'", "Kotor is one of the best-preserved medieval towns in the Adriatic", "Uses the Euro despite not being in the EU"] 
    },
    { 
        name: "Netherlands", code: "NL", continent: "Europe", capital: "Amsterdam", pop: "17.7 Million", 
        area: "41,543 km²\n(16,040 mi²)", lang: "Dutch", cur: "Euro (€)", gov: "Monarchy", econ: "Logistics and Food.", 
        cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"], 
        marks: ["Anne Frank House", "Kinderdijk Windmills", "Keukenhof", "Rijksmuseum"], 
        culture: "Tolerance, cycling, and canal cities.", 
        facts: ["26% of country is below sea level", "Dutch men are the tallest on average", "More bicycles than people here"] 
    },
    { 
        name: "North Macedonia", code: "MK", continent: "Europe", capital: "Skopje", pop: "2 Million", 
        area: "25,713 km²\n(9,928 mi²)", lang: "Macedonian, Albanian", cur: "Macedonian Denar (den)", gov: "Republic", econ: "Agri and Textiles.", 
        cities: ["Skopje", "Bitola", "Kumanovo", "Prilep"], 
        marks: ["Old Bazaar", "Lake Ohrid", "Stone Bridge", "Matka Canyon"], 
        culture: "A historic crossroads of Ottoman and Slavic cultures.", 
        facts: ["Lake Ohrid is one of the oldest and deepest in Europe", "Is the only country that got independent from Yugoslavia without shedding blood", "Macedonia is the birthplace of the Cyrillic alphabet"] 
    },
    { 
        name: "Norway", code: "NO", continent: "Europe", capital: "Oslo", pop: "5.4 Million", 
        area: "385,207 km²\n(148,729 mi²)", lang: "Norwegian", cur: "Norwegian Krone (kr)", gov: "Monarchy", econ: "Oil and Green Energy.", 
        cities: ["Oslo", "Bergen", "Trondheim", "Stavanger"], 
        marks: ["Geirangerfjord", "Pulpit Rock", "Viking Ship Museum", "Nidaros Cathedral"], 
        culture: "Viking history and 'Friluftsliv'.", 
        facts: ["Introduced salmon sushi to Japan", "Highest density of EVs globally", "Nobel Peace Prize is awarded in Oslo"] 
    },
    { 
        name: "Poland", code: "PL", continent: "Europe", capital: "Warsaw", pop: "38 Million", 
        area: "312,696 km²\n(120,733 mi²)", lang: "Polish", cur: "Złoty (zł)", gov: "Republic", econ: "Manufacturing/Tech.", 
        cities: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"], 
        marks: ["Wawel Castle", "Salt Mine", "Main Square Kraków", "Malbork Castle"], 
        culture: "Resilient history and medieval charm.", 
        facts: ["Largest brick castle globally", "Marie Curie was born here", "First constitution in Europe"] 
    },
    { 
        name: "Portugal", code: "PT", continent: "Europe", capital: "Lisbon", pop: "10.3 Million", 
        area: "92,212 km²\n(35,603 mi²)", lang: "Portuguese", cur: "Euro (€)", gov: "Republic", econ: "Cork and Energy.", 
        cities: ["Lisbon", "Porto", "Vila Nova", "Amadora"], 
        marks: ["Belém Tower", "Pena Palace", "Jerónimos Monastery", "Luis I Bridge"], 
        culture: "Fado music and maritime exploration.", 
        facts: ["Largest cork producer globally", "Oldest bookstore is in Lisbon", "Half the 'New World' was once theirs"] 
    },
    { 
        name: "Romania", code: "RO", continent: "Europe", capital: "Bucharest", pop: "19 Million", 
        area: "238,397 km²\n(92,045 mi²)", lang: "Romanian", cur: "Romanian Leu (L)", gov: "Republic", econ: "IT and Industry.", 
        cities: ["Bucharest", "Cluj-Napoca", "Timişoara", "Iaşi"], 
        marks: ["Bran Castle", "Peles Castle", "Parliament Building", "Corvin Castle"], 
        culture: "The legendary home of Dracula and Transylvanian lore.", 
        facts: ["Parliament building is the heaviest in the world", "Is home to Europe's largest population of brown bears", "The 'Merry Cemetery' has humorous tombstones"] 
    },
    { 
        name: "San Marino", code: "SM", continent: "Europe", capital: "San Marino", pop: "34,000", 
        area: "61 km²\n(24 mi²)", lang: "Italian", cur: "Euro (€)", gov: "Republic", econ: "Tourism and Banking.", 
        cities: ["Dogana", "Borgo Maggiore", "San Marino", "Serravalle"], 
        marks: ["Three Towers", "Liberty Square", "Basilica di San Marino", "Mount Titano"], 
        culture: "Claimed as the world's oldest surviving republic.", 
        facts: ["Has two presidents (Captains Regent) at the same time", "Is completely surrounded by Italy", "Abraham Lincoln was an honorary citizen"] 
    },
    { 
        name: "Serbia", code: "RS", continent: "Europe", capital: "Belgrade", pop: "6.8 Million", 
        area: "88,361 km²\n(34,116 mi²)", lang: "Serbian", cur: "Serbian Dinar (din)", gov: "Republic", econ: "Agri and Industry.", 
        cities: ["Belgrade", "Novi Sad", "Niš", "Kragujevac"], 
        marks: ["Belgrade Fortress", "Church of Saint Sava", "Tara Park", "Studenica Monastery"], 
        culture: "A high-energy Balkan culture with a love for sports.", 
        facts: ["Nikola Tesla was ethnically Serbian", "The vampire legend originated in Serbia", "Belgrade is one of the oldest cities in Europe"] 
    },
    { 
        name: "Slovakia", code: "SK", continent: "Europe", capital: "Bratislava", pop: "5.4 Million", 
        area: "49,035 km²\n(18,933 mi²)", lang: "Slovak", cur: "Euro (€)", gov: "Republic", econ: "Automotive and Tech.", 
        cities: ["Bratislava", "Košice", "Prešov", "Žilina"], 
        marks: ["Bratislava Castle", "Spiš Castle", "Tatra Mountains", "Bochnice Castle"], 
        culture: "The land of a thousand caves and mountain peaks.", 
        facts: ["Has the most castles per capita in the world", "Is the world's largest car producer per capita", "Bratislava is the only capital bordering two countries"] 
    },
    { 
        name: "Slovenia", code: "SI", continent: "Europe", capital: "Ljubljana", pop: "2.1 Million", 
        area: "20,273 km²\n(7,827 mi²)", lang: "Slovenian", cur: "Euro (€)", gov: "Republic", econ: "Services and Pharma.", 
        cities: ["Ljubljana", "Maribor", "Celje", "Kranj"], 
        marks: ["Lake Bled", "Postojna Cave", "Ljubljana Castle", "Predjama Castle"], 
        culture: "A green heart of Europe focused on sustainability.", 
        facts: ["More than half of the country is protected forest", "Is the only country with 'LOVE' in its name", "Home to the oldest grapevine in the world"] 
    },
    { 
        name: "Spain", code: "ES", continent: "Europe", capital: "Madrid", pop: "47.4 Million", 
        area: "505,990 km²\n(195,365 mi²)", lang: "Spanish", cur: "Euro (€)", gov: "Monarchy", econ: "Tourism and Renewables.", 
        cities: ["Madrid", "Barcelona", "Valencia", "Seville"], 
        marks: ["Sagrada Família", "Alhambra", "Prado Museum", "Park Güell"], 
        culture: "Flamenco, Siestas, and Tapas.", 
        facts: ["Throws tomatoes at festivals", "Eiffel Tower almost went to Barcelona", "Produces 45% of world olive oil"] 
    },
    { 
        name: "Sweden", code: "SE", continent: "Europe", capital: "Stockholm", pop: "10.5 Million", 
        area: "450,295 km²\n(173,860 mi²)", lang: "Swedish", cur: "Swedish Krona (kr)", gov: "Monarchy", econ: "Innovation and Tech.", 
        cities: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"], 
        marks: ["Vasa Museum", "Gamla Stan", "Drottningholm Palace", "Abisko Park"], 
        culture: "'Lagom' and 'Fika' traditions.", 
        facts: ["Has the most islands (220,000+)", "Imports trash because it recycles so well", "Nobel Prizes started here"] 
    },
    { 
        name: "Switzerland", code: "CH", continent: "Europe", capital: "Bern", pop: "8.7 Million", 
        area: "41,285 km²\n(15,940 mi²)", lang: "German, French, Italian", cur: "Swiss Franc (CHF)", gov: "Republic", econ: "Finance and Watches.", 
        cities: ["Zurich", "Geneva", "Basel", "Bern"], 
        marks: ["The Matterhorn", "Chillon Castle", "Jungfraujoch", "Lake Geneva"], 
        culture: "Precision, neutrality, and Alpine life.", 
        facts: ["Nuclear shelters for everyone", "Teaching dog to bark is illegal", "Red Cross began here"] 
    },
    { 
        name: "Ukraine", code: "UA", continent: "Europe", capital: "Kyiv", pop: "41 Million", 
        area: "603,628 km²\n(233,062 mi²)", lang: "Ukrainian", cur: "Hryvnia (₴)", gov: "Republic", econ: "Agri and Steel.", 
        cities: ["Kyiv", "Kharkiv", "Odesa", "Dnipro"], 
        marks: ["Saint Sophia's", "Kyiv-Pechersk Lavra", "Lviv Old Town", "Chernobyl"], 
        culture: "Sunflower-filled landscapes and rich embroidery.", 
        facts: ["Deepest subway station in the world is here", "The largest plane ever built was Ukrainian (An-225)", "Invented the first gas lamp"] 
    },
    { 
        name: "United Kingdom", code: "GB", continent: "Europe", capital: "London", pop: "67 Million", 
        area: "242,495 km²\n(93,628 mi²)", lang: "English", cur: "British Pound (£)", gov: "Monarchy", econ: "Finance and Tech.", 
        cities: ["London", "Manchester", "Edinburgh", "Birmingham"], 
        marks: ["Big Ben", "Stonehenge", "Edinburgh Castle", "Tower of London"], 
        culture: "Literature, music, and tea history.", 
        facts: ["No name on postage stamps", "French was official for 300 years", "Oldest underground rail"] 
    },
    { 
        name: "Vatican City", code: "VA", continent: "Europe", capital: "Vatican City", pop: "800", 
        area: "0.49 km²\n(0.19 mi²)", lang: "Italian, Latin", cur: "Euro (€)", gov: "Theocracy", econ: "Tourism/Souvenirs.", 
        cities: ["Vatican City"], 
        marks: ["St. Peter's Basilica", "Sistine Chapel", "Vatican Museums", "St. Peter's Square"], 
        culture: "Spiritual center of the Catholic Church.", 
        facts: ["Smallest country globally", "Own post office and stamps", "Entirely a UNESCO site"] 
    },
    { 
        name: "Afghanistan", code: "AF", continent: "Asia", capital: "Kabul", pop: "41.1 Million", 
        area: "652,230 km²\n(251,827 mi²)", lang: "Pashto, Dari", cur: "Afghan Afghani (؋)", gov: "Theocratic Republic", econ: "Agriculture and Mining.", 
        cities: ["Kabul", "Kandahar", "Herat", "Mazar-i-Sharif"], 
        marks: ["Buddhas of Bamiyan Site", "Band-e Amir", "Blue Mosque", "Friday Mosque"], 
        culture: "A land of epic poetry, hospitality, and the sport of Buzkashi.", 
        facts: ["Poetry has been a huge part of culture for over 1,000 years", "The national sport involves riders on horseback grabbing a goat carcass", "Produces some of the world's finest lapis lazuli"] 
    },
    { 
        name: "Armenia", code: "AM", continent: "Asia", capital: "Yerevan", pop: "3 Million", 
        area: "29,743 km²\n(11,484 mi²)", lang: "Armenian", cur: "Armenian Dram (֏)", gov: "Republic", econ: "Mining and Tech.", 
        cities: ["Yerevan", "Gyumri", "Vanadzor", "Vagharshapat"], 
        marks: ["Mount Ararat", "Geghard Monastery", "Khor Virap", "Temple of Garni"], 
        culture: "Home to ancient Christian history and traditional Duduk music.", 
        facts: ["First country in the world to adopt Christianity as a state religion", "Chess is a mandatory subject in primary schools", "Yerevan is one of the world's oldest continuously inhabited cities"] 
    },
    { 
        name: "Azerbaijan", code: "AZ", continent: "Asia", capital: "Baku", pop: "10.1 Million", 
        area: "86,600 km²\n(33,436 mi²)", lang: "Azerbaijani", cur: "Azerbaijani Manat (₼)", gov: "Republic", econ: "Oil and Natural Gas.", 
        cities: ["Baku", "Ganja", "Sumqayit", "Lankaran"], 
        marks: ["Flame Towers", "Maiden Tower", "Gobustan Rock Art", "Mud Volcanoes"], 
        culture: "Known as the 'Land of Fire' for its burning gas vents.", 
        facts: ["Home to nearly half of the world's mud volcanoes", "Baku's Old City is a UNESCO World Heritage site", "Sugar is put in tea to see if a marriage proposal is accepted"] 
    },
    { 
        name: "Bahrain", code: "BH", continent: "Asia", capital: "Manama", pop: "1.5 Million", 
        area: "765 km²\n(295 mi²)", lang: "Arabic", cur: "Bahraini Dinar (.د.ب)", gov: "Monarchy", econ: "Finance and Petroleum.", 
        cities: ["Manama", "Riffa", "Muharraq", "Hamad Town"], 
        marks: ["Qal'at al-Bahrain", "Al Fateh Grand Mosque", "Tree of Life", "Bahrain International Circuit"], 
        culture: "A blend of modern skyline and ancient Dilmun history.", 
        facts: ["The 'Tree of Life' grows in the middle of a desert without a water source", "Was the first Gulf state to discover oil", "Home to the world's largest underwater theme park"] 
    },
    { 
        name: "Bhutan", code: "BT", continent: "Asia", capital: "Thimphu", pop: "780,000", 
        area: "38,394 km²\n(14,824 mi²)", lang: "Dzongkha", cur: "Bhutanese Ngultrum (Nu.)", gov: "Constitutional Monarchy", econ: "Hydropower and Tourism.", 
        cities: ["Thimphu", "Phuntsholing", "Paro", "Gelephu"], 
        marks: ["Tiger's Nest (Paro Taktsang)", "Punakha Dzong", "Buddha Dordenma", "Dochula Pass"], 
        culture: "Famous for prioritizing 'Gross National Happiness'.", 
        facts: ["Only carbon-negative country in the world", "Plastic bags and tobacco are banned nationwide", "The national animal is the Takin, a mix between a cow and a goat"] 
    },
    { 
        name: "Brunei", code: "BN", continent: "Asia", capital: "Bandar Seri Begawan", pop: "450,000", 
        area: "5,765 km²\n(2,226 mi²)", lang: "Malay", cur: "Brunei Dollar ($)", gov: "Absolute Monarchy", econ: "Oil and Gas.", 
        cities: ["Bandar Seri Begawan", "Kuala Belait", "Seria", "Tutong"], 
        marks: ["Omar Ali Saifuddien Mosque", "Kampong Ayer", "Jame' Asr Hassanil Bolkiah", "Istana Nurul Iman"], 
        culture: "Islamic traditions mixed with Malay royal heritage.", 
        facts: ["Istana Nurul Iman is the largest residential palace in the world", "Home to a floating village called the 'Venice of the East'", "The Sultan has one of the world's largest private car collections"] 
    },
    { 
        name: "Cambodia", code: "KH", continent: "Asia", capital: "Phnom Penh", pop: "16.7 Million", 
        area: "181,035 km²\n(69,898 mi²)", lang: "Khmer", cur: "Cambodian Riel (៛)", gov: "Monarchy", econ: "Garments and Tourism.", 
        cities: ["Phnom Penh", "Siem Reap", "Battambang", "Sihanoukville"], 
        marks: ["Angkor Wat", "Bayon Temple", "Tonlé Sap", "Royal Palace"], 
        culture: "Heir to the Khmer Empire; famous for Apsara dance.", 
        facts: ["Angkor Wat is the largest religious monument in the world", "Is the only country with a building on its national flag", "New Year is celebrated for three days in April"] 
    },
    { 
        name: "China", code: "CN", continent: "Asia", capital: "Beijing", pop: "1.41 Billion", 
        area: "9.59 Million km²\n(3.7 Million mi²)", lang: "Mandarin", cur: "Yuan (¥)", gov: "Communist State", econ: "Manufacturing and Tech.", 
        cities: ["Shanghai", "Beijing", "Shenzhen", "Guangzhou"], 
        marks: ["Great Wall", "Forbidden City", "Terracotta Army", "Potala Palace"], 
        culture: "Oldest continuous civilization with deep Confucian roots.", 
        facts: ["The Great Wall is over 13,000 miles long", "Panda bears are on loan from China to the rest of the world", "Uses 45 billion pairs of chopsticks a year"] 
    },
    { 
        name: "Georgia", code: "GE", continent: "Asia", capital: "Tbilisi", pop: "3.7 Million", 
        area: "69,700 km²\n(26,911 mi²)", lang: "Georgian", cur: "Georgian Lari (₾)", gov: "Republic", econ: "Agri and Tourism.", 
        cities: ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"], 
        marks: ["Gergeti Trinity Church", "Uplistsikhe", "Narikala Fortress", "Vardzia"], 
        culture: "Famous for polyphonic singing and 8,000 years of wine history.", 
        facts: ["Regarded as the birthplace of wine", "The Georgian alphabet is one of the only 14 unique scripts in the world", "Home to the world's deepest cave (Krubera)"] 
    },
    { 
        name: "India", code: "IN", continent: "Asia", capital: "New Delhi", pop: "1.4 Billion", 
        area: "3.28 Million km²\n(1.26 Million mi²)", lang: "Hindi, English", cur: "Indian Rupee (₹)", gov: "Republic", econ: "IT and Agri.", 
        cities: ["Mumbai", "Bengaluru", "Kolkata", "Chennai"], 
        marks: ["Taj Mahal", "Golden Temple", "Hawa Mahal", "Qutub Minar"], 
        culture: "Yoga, Bollywood, and the world's largest film industry.", 
        facts: ["Chess was invented here", "Wettest inhabited place on Earth is in India", "Highest number of vegetarians globally"] 
    },
    { 
        name: "Indonesia", code: "ID", continent: "Asia", capital: "Jakarta", pop: "276 Million", 
        area: "1.9 Million km²\n(735,358 mi²)", lang: "Indonesian", cur: "Rupiah (Rp)", gov: "Republic", econ: "Palm Oil and Coal.", 
        cities: ["Jakarta", "Surabaya", "Bandung", "Medan"], 
        marks: ["Borobudur", "Komodo National Park", "Uluwatu Temple", "Raja Ampat"], 
        culture: "Unity in Diversity across 17,000 islands.", 
        facts: ["World's largest archipelago", "Home to the Komodo Dragon", "Jakarta is sinking about 10 inches every year"] 
    },
    { 
        name: "Iran", code: "IR", continent: "Asia", capital: "Tehran", pop: "88 Million", 
        area: "1.64 Million km²\n(636,374 mi²)", lang: "Persian", cur: "Iranian Rial (﷼)", gov: "Theocracy", econ: "Oil and Gas.", 
        cities: ["Tehran", "Isfahan", "Shiraz", "Tabriz"], 
        marks: ["Persepolis", "Naqsh-e Jahan Square", "Golestan Palace", "Azadi Tower"], 
        culture: "Heir to the Persian Empire; famous for carpets and poetry.", 
        facts: ["Iran has had 28 different capitals throughout history", "Largest producer of saffron and pistachios", "Home to the world's rarest big cat, the Asiatic Cheetah"] 
    },
    { 
        name: "Iraq", code: "IQ", continent: "Asia", capital: "Baghdad", pop: "43 Million", 
        area: "438,317 km²\n(169,235 mi²)", lang: "Arabic, Kurdish", cur: "Iraqi Dinar (ع.د)", gov: "Republic", econ: "Oil exporter.", 
        cities: ["Baghdad", "Basra", "Mosul", "Erbil"], 
        marks: ["Ziggurat of Ur", "Babylon Ruins", "Spiral Minaret", "Erbil Citadel"], 
        culture: "Cradle of Civilization (Mesopotamia).", 
        facts: ["Writing, the wheel, and the 60-minute hour were invented here", "Baghdad was the world's largest city in the 9th century", "The Hanging Gardens of Babylon were located here"] 
    },
    { 
        name: "Israel", code: "IL", continent: "Asia", capital: "Jerusalem", pop: "9.5 Million", 
        area: "22,072 km²\n(8,522 mi²)", lang: "Hebrew", cur: "New Shekel (₪)", gov: "Republic", econ: "Tech and Innovation.", 
        cities: ["Jerusalem", "Tel Aviv", "Haifa", "Beersheba"], 
        marks: ["Western Wall", "Dome of the Rock", "Dead Sea", "Masada"], 
        culture: "Ancient religious roots mixed with high-tech 'Start-up Nation'.", 
        facts: ["The Dead Sea is the lowest point on dry land", "Voicemail and USB flash drives were developed here", "Israel has more museums per capita than any other country"] 
    },
    { 
        name: "Japan", code: "JP", continent: "Asia", capital: "Tokyo", pop: "125.1 Million", 
        area: "377,975 km²\n(145,937 mi²)", lang: "Japanese", cur: "Yen (¥)", gov: "Monarchy", econ: "High-tech/Robotics.", 
        cities: ["Tokyo", "Osaka", "Yokohama", "Nagoya"], 
        marks: ["Mount Fuji", "Senso-ji Temple", "Fushimi Inari Shrine", "Himeji Castle"], 
        culture: "Ancient Samurai heritage and modern Anime.", 
        facts: ["Has over 5 million vending machines", "More pets than children here", "Oldest company in the world is here (Kongō Gumi)"] 
    },
    { 
        name: "Jordan", code: "JO", continent: "Asia", capital: "Amman", pop: "11 Million", 
        area: "89,342 km²\n(34,495 mi²)", lang: "Arabic", cur: "Jordanian Dinar (د.ا)", gov: "Monarchy", econ: "Tourism and Pharma.", 
        cities: ["Amman", "Zarqa", "Irbid", "Aqaba"], 
        marks: ["Petra", "Wadi Rum", "Dead Sea", "Jerash"], 
        culture: "Bedouin hospitality and historic desert landscapes.", 
        facts: ["Petra is one of the New 7 Wonders of the World", "Wadi Rum has been used to film Mars in many movies", "Baptism of Jesus occurred on the Jordan River bank"] 
    },
    { 
        name: "Kazakhstan", code: "KZ", continent: "Asia", capital: "Astana", pop: "19 Million", 
        area: "2.72 Million km²\n(1.05 Million mi²)", lang: "Kazakh, Russian", cur: "Tenge (₸)", gov: "Republic", econ: "Oil and Mining.", 
        cities: ["Almaty", "Astana", "Shymkent", "Karaganda"], 
        marks: ["Khan Shatyr", "Bayterek Tower", "Charyn Canyon", "Lake Kaindy"], 
        culture: "Nomadic roots and Central Asian hospitality.", 
        facts: ["World's largest landlocked country", "First person in space (Yuri Gagarin) launched from here", "Apples originated in the mountains of Kazakhstan"] 
    },
    { 
        name: "Kuwait", code: "KW", continent: "Asia", capital: "Kuwait City", pop: "4.3 Million", 
        area: "17,818 km²\n(6,880 mi²)", lang: "Arabic", cur: "Kuwaiti Dinar (د.ك)", gov: "Monarchy", econ: "Oil exporter.", 
        cities: ["Kuwait City", "Jahra", "Ahmadi", "Hawally"], 
        marks: ["Kuwait Towers", "Grand Mosque", "Liberation Tower", "Al Shaheed Park"], 
        culture: "Modern Gulf culture with traditional maritime roots.", 
        facts: ["The Kuwaiti Dinar is the highest-valued currency in the world", "Sadu weaving is a major traditional folk art", "Home to the world's 6th largest oil reserves"] 
    },
    { 
        name: "Kyrgyzstan", code: "KG", continent: "Asia", capital: "Bishkek", pop: "6.7 Million", 
        area: "199,951 km²\n(77,202 mi²)", lang: "Kyrgyz, Russian", cur: "Som (с)", gov: "Republic", econ: "Gold and Agri.", 
        cities: ["Bishkek", "Osh", "Jalal-Abad", "Karakol"], 
        marks: ["Issyk-Kul Lake", "Ala Archa Park", "Song-Kul", "Sulaiman-Too"], 
        culture: "Nomadic yurt life and the 'Manas' epic.", 
        facts: ["90% of the country is covered by mountains", "Issyk-Kul is the world's second-largest alpine lake", "Home to the Epic of Manas, the longest poem in history"] 
    },
    { 
        name: "Laos", code: "LA", continent: "Asia", capital: "Vientiane", pop: "7.5 Million", 
        area: "236,800 km²\n(91,429 mi²)", lang: "Lao", cur: "Kip (₭)", gov: "Communist State", econ: "Hydropower and Agri.", 
        cities: ["Vientiane", "Luang Prabang", "Savannakhet", "Pakse"], 
        marks: ["Pha That Luang", "Kuang Si Falls", "Wat Xieng Thong", "Plain of Jars"], 
        culture: "Buddhist traditions and the slow pace of life on the Mekong.", 
        facts: ["Only landlocked country in Southeast Asia", "Was once known as the 'Land of a Million Elephants'", "Most heavily bombed country in history per capita"] 
    },
    { 
        name: "Lebanon", code: "LB", continent: "Asia", capital: "Beirut", pop: "5.5 Million", 
        area: "10,452 km²\n(4,036 mi²)", lang: "Arabic", cur: "Lebanese Pound (ل.ل)", gov: "Republic", econ: "Services and Finance.", 
        cities: ["Beirut", "Tripoli", "Sidon", "Tyre"], 
        marks: ["Baalbek Ruins", "Jeita Grotto", "Byblos", "Cedars of God"], 
        culture: "Phoenician history and world-famous cuisine.", 
        facts: ["Byblos is the oldest continuously inhabited city in the world", "The national symbol is the Cedar tree, which can live for 1,000 years", "Beirut has been destroyed and rebuilt 7 times"] 
    },
    { 
        name: "Malaysia", code: "MY", continent: "Asia", capital: "Kuala Lumpur", pop: "33 Million", 
        area: "330,803 km²\n(127,724 mi²)", lang: "Malay", cur: "Ringgit (RM)", gov: "Monarchy", econ: "Electronics and Palm Oil.", 
        cities: ["Kuala Lumpur", "George Town", "Johor Bahru", "Kota Kinabalu"], 
        marks: ["Petronas Towers", "Batu Caves", "Mount Kinabalu", "Langkawi Bridge"], 
        culture: "Harmonious multicultural mix of Malay, Chinese, and Indian.", 
        facts: ["Sarawak Chamber is the largest cave chamber globally", "Home to the world's largest flower, the Rafflesia", "Petronas Towers were once the world's tallest buildings"] 
    },
    { 
        name: "Maldives", code: "MV", continent: "Asia", capital: "Malé", pop: "520,000", 
        area: "298 km²\n(115 mi²)", lang: "Dhivehi", cur: "Rufiyaa (Rf)", gov: "Republic", econ: "High-end Tourism.", 
        cities: ["Malé", "Addu City", "Fuvahmulah", "Kulhudhuffushi"], 
        marks: ["Old Friday Mosque", "Banana Reef", "Victory Wreck", "Underwater Restaurants"], 
        culture: "Island life focused on ocean preservation.", 
        facts: ["Lowest and flattest country in the world", "Held the world's first underwater cabinet meeting", "Maldives islands are 99% water"] 
    },
    { 
        name: "Mongolia", code: "MN", continent: "Asia", capital: "Ulaanbaatar", pop: "3.4 Million", 
        area: "1.56 Million km²\n(603,909 mi²)", lang: "Mongolian", cur: "Tögrög (₮)", gov: "Republic", econ: "Mining and Agri.", 
        cities: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan"], 
        marks: ["Genghis Khan Statue", "Gobi Desert", "Terelj Park", "Erdene Zuu Monastery"], 
        culture: "Nomadic heritage and the Nadaam festival.", 
        facts: ["Least densely populated sovereign country", "Home to the two-humped Bactrian camel", "Ulaanbaatar is the world's coldest capital city"] 
    },
    { 
        name: "Myanmar", code: "MM", continent: "Asia", capital: "Naypyidaw", pop: "54 Million", 
        area: "676,578 km²\n(261,228 mi²)", lang: "Burmese", cur: "Kyat (K)", gov: "Military Council", econ: "Natural Gas and Agri.", 
        cities: ["Yangon", "Mandalay", "Naypyidaw", "Bago"], 
        marks: ["Shwedagon Pagoda", "Bagan Temples", "Inle Lake", "Golden Rock"], 
        culture: "Strong Buddhist traditions and 'Thanaka' face paste.", 
        facts: ["Bagan contains over 2,000 ancient temples", "One of only 3 countries that don't use the metric system", "People wear 'Longyi' (traditional skirt) regardless of gender"] 
    },
    { 
        name: "Nepal", code: "NP", continent: "Asia", capital: "Kathmandu", pop: "30 Million", 
        area: "147,516 km²\n(56,956 mi²)", lang: "Nepali", cur: "Nepalese Rupee (₨)", gov: "Republic", econ: "Tourism and Agri.", 
        cities: ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"], 
        marks: ["Mount Everest", "Lumbini", "Pashupatinath", "Boudhanath"], 
        culture: "Himalayan life; birthplace of the Buddha.", 
        facts: ["Only country with a non-rectangular national flag", "Mount Everest, world's highest peak, is here", "Lumbini is the birthplace of Gautama Buddha"] 
    },
    { 
        name: "North Korea", code: "KP", continent: "Asia", capital: "Pyongyang", pop: "26 Million", 
        area: "120,540 km²\n(46,541 mi²)", lang: "Korean", cur: "North Korean Won (₩)", gov: "Communist State", econ: "State-led economy.", 
        cities: ["Pyongyang", "Hamhung", "Chongjin", "Nampo"], 
        marks: ["Kumsusan Palace", "Juche Tower", "Mount Paektu", "Ryugyong Hotel"], 
        culture: "Heavily militarized socialist culture.", 
        facts: ["Has its own time zone (Pyongyang Time)", "Holds the world's largest stadium (Rungrado 1st of May)", "The literacy rate is reportedly 100%"] 
    },
    { 
        name: "Oman", code: "OM", continent: "Asia", capital: "Muscat", pop: "4.5 Million", 
        area: "309,500 km²\n(119,499 mi²)", lang: "Arabic", cur: "Omani Rial (﷼)", gov: "Monarchy", econ: "Oil and Tourism.", 
        cities: ["Muscat", "Salalah", "Sohar", "Nizwa"], 
        marks: ["Sultan Qaboos Mosque", "Nizwa Fort", "Wadi Bani Khalid", "Royal Opera House"], 
        culture: "Traditional Arab maritime and desert culture.", 
        facts: ["Is the oldest independent state in the Arab world", "Muscat means 'Safe Anchorage'", "Famous for its world-class frankincense"] 
    },
    { 
        name: "Pakistan", code: "PK", continent: "Asia", capital: "Islamabad", pop: "231 Million", 
        area: "796,095 km²\n(307,374 mi²)", lang: "Urdu, English", cur: "Pakistani Rupee (₨)", gov: "Republic", econ: "Textiles and Agri.", 
        cities: ["Karachi", "Lahore", "Islamabad", "Faisalabad"], 
        marks: ["Badshahi Mosque", "K2", "Mohenjo-daro", "Faisal Mosque"], 
        culture: "Mughal history and Sufi traditions.", 
        facts: ["Home to K2, world's 2nd highest mountain", "Largest volunteer ambulance network globally", "Produces half the world's hand-stitched soccer balls"] 
    },
    { 
        name: "Palestine", code: "PS", continent: "Asia", capital: "Jerusalem (East)", pop: "5 Million", 
        area: "6,020 km²\n(2,324 mi²)", lang: "Arabic", cur: "Shekel/Dinar", gov: "Republic", econ: "Agri and Services.", 
        cities: ["Ramallah", "Gaza City", "Hebron", "Bethlehem"], 
        marks: ["Dome of the Rock", "Church of the Nativity", "Al-Aqsa Mosque", "Hisham's Palace"], 
        culture: "Deep religious history and olive wood carving.", 
        facts: ["Jericho is the oldest continuously inhabited city", "Olive trees are sacred and live for thousands of years", "Bethlehem is the birthplace of Jesus"] 
    },
    { 
        name: "Philippines", code: "PH", continent: "Asia", capital: "Manila", pop: "114 Million", 
        area: "300,000 km²\n(115,831 mi²)", lang: "Filipino, English", cur: "Philippine Peso (₱)", gov: "Republic", econ: "Tech services and Coconuts.", 
        cities: ["Manila", "Quezon City", "Cebu City", "Davao City"], 
        marks: ["Banaue Rice Terraces", "Chocolate Hills", "Intramuros", "Palawan River"], 
        culture: "Unique Spanish, American, and Indigenous mix.", 
        facts: ["Archipelago of 7,641 islands", "Manila is the most densely populated city", "World's largest exporter of coconuts"] 
    },
    { 
        name: "Qatar", code: "QA", continent: "Asia", capital: "Doha", pop: "2.7 Million", 
        area: "11,586 km²\n(4,473 mi²)", lang: "Arabic", cur: "Qatari Riyal (﷼)", gov: "Monarchy", econ: "Natural Gas.", 
        cities: ["Doha", "Al Wakrah", "Al Khor", "Madinat ash Shamal"], 
        marks: ["Museum of Islamic Art", "Souq Waqif", "The Pearl-Qatar", "Lusail Stadium"], 
        culture: "Ultra-modern architecture with Bedouin heritage.", 
        facts: ["Highest GDP per capita in the world", "Hosted the 2022 FIFA World Cup", "Home to the international news network Al Jazeera"] 
    },
    { 
        name: "Saudi Arabia", code: "SA", continent: "Asia", capital: "Riyadh", pop: "35.9 Million", 
        area: "2.15 Million km²\n(830,000 mi²)", lang: "Arabic", cur: "Saudi Riyal (﷼)", gov: "Monarchy", econ: "Oil giant.", 
        cities: ["Riyadh", "Jeddah", "Mecca", "Medina"], 
        marks: ["Kaaba", "Prophet's Mosque", "Kingdom Centre", "Hegra"], 
        culture: "Spiritual heart of Islam.", 
        facts: ["Largest country without a permanent river", "Mecca is the holiest city in Islam", "Home to the world's largest sand desert (Empty Quarter)"] 
    },
    { 
        name: "Singapore", code: "SG", continent: "Asia", capital: "Singapore", pop: "5.6 Million", 
        area: "728 km²\n(281 mi²)", lang: "English, Mandarin", cur: "Singapore Dollar ($)", gov: "Republic", econ: "Finance and Port.", 
        cities: ["Singapore"], 
        marks: ["Gardens by the Bay", "Marina Bay Sands", "Sentosa", "Merlion"], 
        culture: "Diverse 'Melting Pot' known for cleanliness.", 
        facts: ["Selling chewing gum is illegal", "One of only three surviving city-states", "City, capital, and country all at once"] 
    },
    { 
        name: "South Korea", code: "KR", continent: "Asia", capital: "Seoul", pop: "51.7 Million", 
        area: "100,210 km²\n(38,691 mi²)", lang: "Korean", cur: "South Korean Won (₩)", gov: "Republic", econ: "High-tech global leader.", 
        cities: ["Seoul", "Busan", "Incheon", "Daegu"], 
        marks: ["Gyeongbokgung Palace", "N Seoul Tower", "Jeju Island", "Hanok Village"], 
        culture: "K-Pop, K-Dramas, and 'Pali-pali' pace.", 
        facts: ["Babies are 1 year old at birth", "Fastest average internet speed globally", "Over half the country is forest"] 
    },
    { 
        name: "Sri Lanka", code: "LK", continent: "Asia", capital: "Sri Jayawardenepura Kotte", pop: "22 Million", 
        area: "65,610 km²\n(25,332 mi²)", lang: "Sinhala, Tamil", cur: "Sri Lankan Rupee (₨)", gov: "Republic", econ: "Tea and Tourism.", 
        cities: ["Colombo", "Kandy", "Galle", "Jaffna"], 
        marks: ["Sigiriya", "Temple of the Tooth", "Ella Rock", "Dambulla Cave"], 
        culture: "Known as the 'Teardrop of India' for its shape.", 
        facts: ["First country to have a female Prime Minister", "Is the world's leading producer of cinnamon", "Tea is the biggest export"] 
    },
    { 
        name: "Syria", code: "SY", continent: "Asia", capital: "Damascus", pop: "21 Million", 
        area: "185,180 km²\n(71,498 mi²)", lang: "Arabic", cur: "Syrian Pound (ل.س)", gov: "Republic", econ: "Agri and Petroleum.", 
        cities: ["Damascus", "Aleppo", "Homs", "Latakia"], 
        marks: ["Umayyad Mosque", "Palmyra Ruins", "Crac des Chevaliers", "Citadel of Aleppo"], 
        culture: "Rich in history; Damascus is one of the oldest cities.", 
        facts: ["Damascus is the oldest continuously inhabited capital in the world", "The alphabet was purportedly invented in Ugarit, Syria", "The world's oldest church is in Dura-Europos"] 
    },
    { 
        name: "Taiwan", code: "TW", continent: "Asia", capital: "Taipei", pop: "23.5 Million", 
        area: "36,193 km²\n(13,974 mi²)", lang: "Mandarin", cur: "New Taiwan Dollar ($)", gov: "Republic", econ: "Global Semiconductor hub.", 
        cities: ["Taipei", "Kaohsiung", "Taichung", "Tainan"], 
        marks: ["Taipei 101", "Taroko Gorge", "Sun Moon Lake", "National Palace Museum"], 
        culture: "Vibrant night markets and tech-forward society.", 
        facts: ["Home to TSMC, world's largest semiconductor maker", "Taipei 101 was the world's tallest building (2004-2010)", "Garbage trucks play music to alert citizens"] 
    },
    { 
        name: "Tajikistan", code: "TJ", continent: "Asia", capital: "Dushanbe", pop: "10 Million", 
        area: "143,100 km²\n(55,251 mi²)", lang: "Tajik", cur: "Somoni (SM)", gov: "Republic", econ: "Aluminum and Cotton.", 
        cities: ["Dushanbe", "Khujand", "Bokhtar", "Kulob"], 
        marks: ["Pamir Mountains", "Iskanderkul", "Hissar Fortress", "Rudaki Park"], 
        culture: "Persian heritage and high mountain traditions.", 
        facts: ["93% of the country is covered by mountains", "Home to the world's second-highest dam (Nurek Dam)", "Dushanbe means 'Monday' in Tajik"] 
    },
    { 
        name: "Thailand", code: "TH", continent: "Asia", capital: "Bangkok", pop: "71.6 Million", 
        area: "513,120 km²\n(198,117 mi²)", lang: "Thai", cur: "Thai Baht (฿)", gov: "Monarchy", econ: "Tourism and Agri.", 
        cities: ["Bangkok", "Chiang Mai", "Phuket", "Chon Buri"], 
        marks: ["Grand Palace", "Wat Arun", "Phi Phi Islands", "Sukhothai"], 
        culture: "'Land of Smiles' with ornate temples.", 
        facts: ["Illegal to step on money", "Bangkok's ceremonial name is world's longest", "World's largest exporter of orchids"] 
    },
    { 
        name: "Timor-Leste", code: "TL", continent: "Asia", capital: "Dili", pop: "1.3 Million", 
        area: "14,874 km²\n(5,743 mi²)", lang: "Tetum, Portuguese", cur: "US Dollar ($)", gov: "Republic", econ: "Oil and Coffee.", 
        cities: ["Dili", "Maliana", "Baucau", "Liquiçá"], 
        marks: ["Cristo Rei Statue", "Mount Ramelau", "Atauro Island", "Tais Market"], 
        culture: "Unique blend of Southeast Asian and Portuguese.", 
        facts: ["One of the world's youngest countries (independent 2002)", "Has the most biodiverse waters on Earth (Atauro Island)", "The only Christian-majority nation in Southeast Asia along with Philippines"] 
    },
    { 
        name: "Turkey", code: "TR", continent: "Europe/Asia", capital: "Ankara", pop: "85 Million", 
        area: "783,356 km²\n(302,455 mi²)", lang: "Turkish", cur: "Lira (₺)", gov: "Republic", econ: "Manufacturing and Agri.", 
        cities: ["Istanbul", "Ankara", "Izmir", "Antalya"], 
        marks: ["Hagia Sophia", "Cappadocia", "Topkapi", "Pamukkale"], 
        culture: "Bridge between East and West.", 
        facts: ["Istanbul is the only city on two continents", "First university in history was here", "World's largest hazelnut producer"] 
    },
    { 
        name: "Turkmenistan", code: "TM", continent: "Asia", capital: "Ashgabat", pop: "6 Million", 
        area: "488,100 km²\n(188,456 mi²)", lang: "Turkmen", cur: "Turkmen Manat (m)", gov: "Republic", econ: "Natural Gas.", 
        cities: ["Ashgabat", "Türkmenabat", "Daşoguz", "Mary"], 
        marks: ["Darvaza Gas Crater", "Merv", "Kunya-Urgench", "Ertugrul Gazi Mosque"], 
        culture: "Famous for Akhal-Teke horses and ornate carpets.", 
        facts: ["Home to the 'Gates of Hell' (burning gas crater)", "Ashgabat has the most white marble buildings in the world", "Is one of the least visited countries globally"] 
    },
    { 
        name: "United Arab Emirates", code: "AE", continent: "Asia", capital: "Abu Dhabi", pop: "10 Million", 
        area: "83,600 km²\n(32,278 mi²)", lang: "Arabic", cur: "UAE Dirham (د.إ)", gov: "Federation", econ: "Oil and Services.", 
        cities: ["Dubai", "Abu Dhabi", "Sharjah", "Al Ain"], 
        marks: ["Burj Khalifa", "Sheikh Zayed Mosque", "Palm Jumeirah", "Louvre Abu Dhabi"], 
        culture: "Ultra-modern luxury meets desert hospitality.", 
        facts: ["Burj Khalifa is the tallest building in the world", "Dubai has a police force with supercars (Lamborghinis/Ferraris)", "Is home to the world's first ministry of artificial intelligence"] 
    },
    { 
        name: "Uzbekistan", code: "UZ", continent: "Asia", capital: "Tashkent", pop: "35 Million", 
        area: "447,400 km²\n(172,742 mi²)", lang: "Uzbek", cur: "Uzbek Som (сўм)", gov: "Republic", econ: "Cotton and Gold.", 
        cities: ["Tashkent", "Samarkand", "Bukhara", "Namangan"], 
        marks: ["Registan Square", "Itchan Kala", "Shah-i-Zinda", "Gur-e-Amir"], 
        culture: "Heart of the Silk Road with stunning blue tiles.", 
        facts: ["One of only two double-landlocked countries in the world", "Samarkand is one of the oldest inhabited cities in Central Asia", "Home to the world's largest open-pit gold mine"] 
    },
    { 
        name: "Vietnam", code: "VN", continent: "Asia", capital: "Hanoi", pop: "98 Million", 
        area: "331,210 km²\n(127,881 mi²)", lang: "Vietnamese", cur: "Dong (₫)", gov: "Communist State", econ: "Manufacturing and Agri.", 
        cities: ["Ho Chi Minh", "Hanoi", "Da Nang", "Haiphong"], 
        marks: ["Ha Long Bay", "Hoi An", "Cu Chi Tunnels", "Ban Gioc"], 
        culture: "Family values and world-class street food.", 
        facts: ["Second largest coffee producer", "World's largest cave is here", "45 million motorbikes in use"] 
    },
    { 
        name: "Yemen", code: "YE", continent: "Asia", capital: "Sana'a", pop: "33 Million", 
        area: "527,968 km²\n(203,850 mi²)", lang: "Arabic", cur: "Yemeni Rial (﷼)", gov: "Republic", econ: "Agri and Petroleum.", 
        cities: ["Sana'a", "Aden", "Taiz", "Al Hudaydah"], 
        marks: ["Old City of Sana'a", "Socotra Island", "Shibam", "Dar al-Hajar"], 
        culture: "Known for its unique vertical 'skyscrapers' made of mud.", 
        facts: ["Shibam is called the 'Manhattan of the Desert'", "Socotra Island has plants that look like they're from another planet", "Coffee 'Mocha' is named after the Yemeni port city of Al-Mocha"] 
    },
    { 
        name: "Algeria", code: "DZ", continent: "Africa", capital: "Algiers", pop: "44.6 Million", 
        area: "2.38 Million km²\n(919,595 mi²)", lang: "Arabic, Berber", cur: "Algerian Dinar (د.ج)", gov: "Republic", econ: "Oil and Gas exporter.", 
        cities: ["Algiers", "Oran", "Constantine", "Annaba"], 
        marks: ["Djémila Ruins", "Timgad", "Casbah of Algiers", "Tassili n'Ajjer"], 
        culture: "Blends Arab, Berber, and French influences.", 
        facts: ["Largest country in Africa", "80% of land is the Sahara Desert", "Home to 7 UNESCO World Heritage sites"] 
    },
    { 
        name: "Angola", code: "AO", continent: "Africa", capital: "Luanda", pop: "34 Million", 
        area: "1.25 Million km²\n(481,354 mi²)", lang: "Portuguese", cur: "Kwanza (Kz)", gov: "Republic", econ: "Oil and Diamonds.", 
        cities: ["Luanda", "Huambo", "Lobito", "Benguela"], 
        marks: ["Kalandula Falls", "Miradouro da Lua", "Tundavala Gap", "Kissama Park"], 
        culture: "Known for the energetic 'Kizomba' dance and music.", 
        facts: ["Luanda is often ranked as one of the world's most expensive cities for expats", "Home to the Giant Sable Antelope, found nowhere else", "The capital was once a major Portuguese slave trade port"] 
    },
    { 
        name: "Benin", code: "BJ", continent: "Africa", capital: "Porto-Novo", pop: "13 Million", 
        area: "112,622 km²\n(43,484 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Cotton and Palm Oil.", 
        cities: ["Cotonou", "Porto-Novo", "Parakou", "Djougou"], 
        marks: ["Royal Palaces of Abomey", "Ouidah Museum", "Pendjari Park", "Ganvie"], 
        culture: "The historic birthplace of the Vodun (Voodoo) religion.", 
        facts: ["Ganvie is a village built entirely on stilts in the middle of a lake", "The 'Door of No Return' memorializes the history of the slave trade", "Benin was the first country in Africa to transition from a dictatorship to a democracy"] 
    },
    { 
        name: "Botswana", code: "BW", continent: "Africa", capital: "Gaborone", pop: "2.6 Million", 
        area: "581,730 km²\n(224,607 mi²)", lang: "English, Setswana", cur: "Pula (P)", gov: "Republic", econ: "Diamonds and Tourism.", 
        cities: ["Gaborone", "Francistown", "Molepolole", "Maun"], 
        marks: ["Okavango Delta", "Chobe National Park", "Tsodilo Hills", "Makgadikgadi Pans"], 
        culture: "A stable democracy focused on wildlife conservation.", 
        facts: ["Okavango Delta is the world's largest inland delta", "Home to the world's largest concentration of African elephants", "The currency, 'Pula', literally means 'rain', which is very precious here"] 
    },
    { 
        name: "Burkina Faso", code: "BF", continent: "Africa", capital: "Ouagadougou", pop: "22 Million", 
        area: "274,200 km²\n(105,870 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Military Government", econ: "Gold and Cotton.", 
        cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora"], 
        marks: ["Sindou Peaks", "Granaries of Koro", "Grand Mosque Bobo-Dioulasso", "Arli Park"], 
        culture: "Host of FESPACO, Africa's largest film festival.", 
        facts: ["The name means 'Land of Incorruptible People'", "Is a leader in African cinema", "Home to the 'Crocodile Pond' of Bazoulé where people swim with tame crocodiles"] 
    },
    { 
        name: "Burundi", code: "BI", continent: "Africa", capital: "Gitega", pop: "12.8 Million", 
        area: "27,834 km²\n(10,747 mi²)", lang: "Kirundi, French", cur: "Burundian Franc (FBu)", gov: "Republic", econ: "Coffee and Tea.", 
        cities: ["Bujumbura", "Gitega", "Muyinga", "Ngozi"], 
        marks: ["Source of the Nile", "Rusizi National Park", "Kigwena Forest", "Lake Tanganyika"], 
        culture: "Famous for the 'Royal Drummers of Burundi'.", 
        facts: ["Burundi has a tradition of elaborate acrobatic drumming", "One of the world's smallest countries in Africa", "Lake Tanganyika is the world's second-deepest lake"] 
    },
    { 
        name: "Cabo Verde", code: "CV", continent: "Africa", capital: "Praia", pop: "560,000", 
        area: "4,033 km²\n(1,557 mi²)", lang: "Portuguese", cur: "Escudo (Esc)", gov: "Republic", econ: "Tourism and Services.", 
        cities: ["Praia", "Mindelo", "Santa Maria", "Assomada"], 
        marks: ["Pico do Fogo", "Cidade Velha", "Sal Island", "Boa Vista Dunes"], 
        culture: "Famous for 'Morna' music, popularized by Cesária Évora.", 
        facts: ["Is a volcanic archipelago of 10 islands", "Has more of its citizens living abroad than on the islands", "The islands were uninhabited until the Portuguese arrived in 1460"] 
    },
    { 
        name: "Cameroon", code: "CM", continent: "Africa", capital: "Yaoundé", pop: "27 Million", 
        area: "475,442 km²\n(183,569 mi²)", lang: "French, English", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Oil and Agriculture.", 
        cities: ["Douala", "Yaoundé", "Garoua", "Bamenda"], 
        marks: ["Mount Cameroon", "Waza National Park", "Dja Faunal Reserve", "Limbe Wildlife Centre"], 
        culture: "Known as 'Africa in Miniature' for its diverse landscapes.", 
        facts: ["Has one of Africa's most successful national soccer teams", "Mount Cameroon is one of Africa's largest active volcanoes", "Is home to over 250 different ethnic groups"] 
    },
    { 
        name: "Central African Republic", code: "CF", continent: "Africa", capital: "Bangui", pop: "5.5 Million", 
        area: "622,984 km²\n(240,535 mi²)", lang: "Sango, French", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Diamonds and Timber.", 
        cities: ["Bangui", "Bimbo", "Berbérati", "Carnot"], 
        marks: ["Dzanga-Sangha Park", "Boali Falls", "Manovo-Gounda Park", "Ubangi River"], 
        culture: "Home to diverse forest-dwelling and nomadic communities.", 
        facts: ["Is one of the best places in the world to see lowland gorillas", "Contains the world's third-largest tropical rainforest", "Is a landlocked country in the center of the continent"] 
    },
    { 
        name: "Chad", code: "TD", continent: "Africa", capital: "N'Djamena", pop: "17 Million", 
        area: "1.28 Million km²\n(495,755 mi²)", lang: "Arabic, French", cur: "CFA Franc (FCFA)", gov: "Military Government", econ: "Oil and Agriculture.", 
        cities: ["N'Djamena", "Moundou", "Sarh", "Abéché"], 
        marks: ["Zakouma Park", "Lake Chad", "Ennedi Massif", "Tibesti Mountains"], 
        culture: "A historic crossroads for Saharan trade routes.", 
        facts: ["Known as the 'Dead Heart of Africa' due to its distance from the sea", "Ennedi Massif contains thousands of ancient cave paintings", "Lake Chad has shrunk by 95% since the 1960s"] 
    },
    { 
        name: "Comoros", code: "KM", continent: "Africa", capital: "Moroni", pop: "840,000", 
        area: "1,861 km²\n(719 mi²)", lang: "Arabic, French, Comorian", cur: "Comorian Franc (CF)", gov: "Federal Republic", econ: "Agriculture (Vanilla).", 
        cities: ["Moroni", "Mutsamudu", "Fomboni", "Domoni"], 
        marks: ["Mount Karthala", "Mohéli Marine Park", "Grand Mosque Moroni", "Anjouan Beaches"], 
        culture: "Blends African, Arab, and French influences on three islands.", 
        facts: ["Known as the 'Perfume Isles' because they are a top producer of Ylang-Ylang", "Mount Karthala is one of the world's most active volcanoes", "The Coelacanth, a 'living fossil' fish, was discovered in its waters"] 
    },
    { 
        name: "Democratic Republic of the Congo", code: "CD", continent: "Africa", capital: "Kinshasa", pop: "95 Million", 
        area: "2.34 Million km²\n(905,354 mi²)", lang: "French", cur: "Congolese Franc (FC)", gov: "Republic", econ: "Mining (Cobalt/Copper).", 
        cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Goma"], 
        marks: ["Virunga National Park", "Congo River", "Mount Nyiragongo", "Lola ya Bonobo"], 
        culture: "Famous for 'Soukous' music and the stylish 'Sapeurs'.", 
        facts: ["Is the only place in the world where Bonobos are found in the wild", "Mount Nyiragongo has the world's largest lava lake", "Kinshasa and Brazzaville are the closest two capital cities in the world"] 
    },
    { 
        name: "Djibouti", code: "DJ", continent: "Africa", capital: "Djibouti", pop: "1.1 Million", 
        area: "23,200 km²\n(8,958 mi²)", lang: "Arabic, French", cur: "Djiboutian Franc (Fdj)", gov: "Republic", econ: "Ports and Logistics.", 
        cities: ["Djibouti", "Ali Sabieh", "Dikhil", "Tadjoura"], 
        marks: ["Lake Assal", "Lake Abbe", "Day Forest Park", "Moucha Island"], 
        culture: "A strategic maritime hub at the entrance to the Red Sea.", 
        facts: ["Lake Assal is the lowest point in Africa and the saltiest outside Antarctica", "Home to unique 'chimney' rock formations used in the movie Planet of the Apes", "It hosts more foreign military bases than any other country"] 
    },
    { 
        name: "Egypt", code: "EG", continent: "Africa", capital: "Cairo", pop: "109 Million", 
        area: "1.01 Million km²\n(390,121 mi²)", lang: "Arabic", cur: "Egyptian Pound (E£)", gov: "Republic", econ: "Tourism and Suez Canal.", 
        cities: ["Cairo", "Alexandria", "Giza", "Luxor"], 
        marks: ["Pyramids of Giza", "The Sphinx", "Karnak Temple", "Abu Simbel"], 
        culture: "The historic heart of the Arab world and ancient civilization.", 
        facts: ["Ancient Egyptians used moldy bread to heal infections", "365-day calendar was invented here", "Hieroglyphs had over 700 signs"] 
    },
    { 
        name: "Equatorial Guinea", code: "GQ", continent: "Africa", capital: "Malabo", pop: "1.6 Million", 
        area: "28,051 km²\n(10,831 mi²)", lang: "Spanish, French", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Oil and Gas.", 
        cities: ["Malabo", "Bata", "Ebebiyín", "Oyala"], 
        marks: ["Pico Basile", "Monte Alen Park", "Malabo Cathedral", "Moca Valley"], 
        culture: "The only Spanish-speaking country in Africa.", 
        facts: ["Is the wealthiest country per capita in Africa due to oil", "The capital, Malabo, is on an island, not the mainland", "Home to the Goliath Frog, the largest frog in the world"] 
    },
    { 
        name: "Eritrea", code: "ER", continent: "Africa", capital: "Asmara", pop: "3.6 Million", 
        area: "117,600 km²\n(45,405 mi²)", lang: "Tigrinya, Arabic, English", cur: "Nakfa (Nkf)", gov: "Presidential Republic", econ: "Mining and Agri.", 
        cities: ["Asmara", "Keren", "Massawa", "Assab"], 
        marks: ["Asmara Architecture", "Dahlak Marine Park", "Qohaito Ruins", "Saint Mariam Cathedral"], 
        culture: "Known for the beautifully preserved Italian Art Deco architecture in Asmara.", 
        facts: ["Asmara is a UNESCO World Heritage site for its modern architecture", "The country has no official language", "Has a massive coastline but its islands are mostly uninhabited"] 
    },
    { 
        name: "Eswatini", code: "SZ", continent: "Africa", capital: "Mbabane, Lobamba", pop: "1.2 Million", 
        area: "17,364 km²\n(6,704 mi²)", lang: "Swati, English", cur: "Lilangeni (L)", gov: "Absolute Monarchy", econ: "Sugar and Textiles.", 
        cities: ["Mbabane", "Manzini", "Big Bend", "Mhlume"], 
        marks: ["Hlane Royal Park", "Mlilwane Sanctuary", "Sibebe Rock", "Mantenga Falls"], 
        culture: "One of the world's last remaining absolute monarchies.", 
        facts: ["Known for the 'Umhlanga' Reed Dance festival", "Sibebe Rock is the world's second-largest granite monolith", "Changed its name from Swaziland in 2018"] 
    },
    { 
        name: "Ethiopia", code: "ET", continent: "Africa", capital: "Addis Ababa", pop: "123 Million", 
        area: "1.1 Million km²\n(426,373 mi²)", lang: "Amharic", cur: "Birr (Br)", gov: "Federal Republic", econ: "Coffee and Aviation.", 
        cities: ["Addis Ababa", "Gondar", "Lalibela", "Dire Dawa"], 
        marks: ["Lalibela Churches", "Simien Mountains", "Axum Obelisks", "Blue Nile Falls"], 
        culture: "A historic nation with its own unique calendar and alphabet.", 
        facts: ["The Ethiopian calendar is 7 years behind the rest of the world", "Is the birthplace of coffee", "The only African nation never to be colonized"] 
    },
    { 
        name: "Gabon", code: "GA", continent: "Africa", capital: "Libreville", pop: "2.3 Million", 
        area: "267,667 km²\n(103,347 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Military Government", econ: "Oil and Manganese.", 
        cities: ["Libreville", "Port-Gentil", "Franceville", "Oyem"], 
        marks: ["Loango National Park", "Lope National Park", "Ivindo Falls", "Libreville Waterfront"], 
        culture: "Known as the 'Eden of Africa' for its protected nature.", 
        facts: ["About 85% of the country is covered by rainforest", "Home to 'surfing hippos' in Loango National Park", "Gabon produces 25% of the world's manganese"] 
    },
    { 
        name: "Gambia", code: "GM", continent: "Africa", capital: "Banjul", pop: "2.6 Million", 
        area: "10,689 km²\n(4,127 mi²)", lang: "English", cur: "Dalasi (D)", gov: "Republic", econ: "Tourism and Agriculture.", 
        cities: ["Serekunda", "Brikama", "Banjul", "Bakau"], 
        marks: ["Kunta Kinteh Island", "River Gambia Park", "Abuko Nature Reserve", "Wassu Stone Circles"], 
        culture: "A small, peaceful nation surrounding the Gambia River.", 
        facts: ["The smallest country on mainland Africa", "Is almost entirely surrounded by Senegal", "Kunta Kinteh Island is a historic slave trade site"] 
    },
    { 
        name: "Ghana", code: "GH", continent: "Africa", capital: "Accra", pop: "32 Million", 
        area: "238,533 km²\n(92,098 mi²)", lang: "English", cur: "Cedi (GH₵)", gov: "Republic", econ: "Gold and Cocoa.", 
        cities: ["Accra", "Kumasi", "Tamale", "Sekondi-Takoradi"], 
        marks: ["Cape Coast Castle", "Kakum National Park", "Lake Volta", "Elmina Castle"], 
        culture: "Famous for 'Kente' cloth and the Ashanti Kingdom.", 
        facts: ["First sub-Saharan country to gain independence (1957)", "Is the world's second-largest producer of cocoa", "Lake Volta is the world's largest artificial lake by surface area"] 
    },
    { 
        name: "Guinea", code: "GN", continent: "Africa", capital: "Conakry", pop: "13.5 Million", 
        area: "245,857 km²\n(94,926 mi²)", lang: "French", cur: "Guinean Franc (FG)", gov: "Military Government", econ: "Bauxite and Gold.", 
        cities: ["Conakry", "Nzérékoré", "Kankan", "Kindia"], 
        marks: ["Mount Nimba", "Fouta Djallon", "Iles de Los", "Conakry Mosque"], 
        culture: "A land of rich musical traditions and diverse ethnic groups.", 
        facts: ["Contains about 25% of the world's known bauxite reserves", "Is known as the 'Water Tower of West Africa' for its many rivers", "Home to the rare Nimba otter-shrew"] 
    },
    { 
        name: "Guinea-Bissau", code: "GW", continent: "Africa", capital: "Bissau", pop: "2 Million", 
        area: "36,125 km²\n(13,948 mi²)", lang: "Portuguese", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Cashews and Fishing.", 
        cities: ["Bissau", "Gabú", "Bafatá", "Canchungo"], 
        marks: ["Bijagós Islands", "Bubaque", "Orango Park", "Bissau Velho"], 
        culture: "Features the unique matriarchal society of the Bijagós Islands.", 
        facts: ["Is one of the world's top exporters of cashew nuts", "The Bijagós archipelago is a UNESCO Biosphere Reserve", "Celebrates a unique Carnival with traditional masks"] 
    },
    { 
        name: "Ivory Coast", code: "CI", continent: "Africa", capital: "Yamoussoukro", pop: "27 Million", 
        area: "322,463 km²\n(124,504 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Cocoa and Coffee.", 
        cities: ["Abidjan", "Bouaké", "Daloa", "Yamoussoukro"], 
        marks: ["Basilica of Our Lady of Peace", "Tai National Park", "Comoé National Park", "Abidjan Plateau"], 
        culture: "Known for its 'Zouglou' music and artistic masks.", 
        facts: ["World's largest producer of cocoa beans", "The Basilica in Yamoussoukro is the world's largest church", "Abidjan is often called the 'Manhattan of Africa'"] 
    },
    { 
        name: "Kenya", code: "KE", continent: "Africa", capital: "Nairobi", pop: "54 Million", 
        area: "580,367 km²\n(224,081 mi²)", lang: "Swahili, English", cur: "Kenyan Shilling (KSh)", gov: "Republic", econ: "Tourism and Tea.", 
        cities: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"], 
        marks: ["Maasai Mara", "Mount Kenya", "Amboseli Park", "Lamu Island"], 
        culture: "Home to the Maasai and world-famous marathon runners.", 
        facts: ["Leading exporter of black tea", "Nairobi is the only city with a national park inside its limits", "Global leader in mobile money technology"] 
    },
    { 
        name: "Lesotho", code: "LS", continent: "Africa", capital: "Maseru", pop: "2.3 Million", 
        area: "30,355 km²\n(11,720 mi²)", lang: "Sesotho, English", cur: "Loti (L)", gov: "Monarchy", econ: "Water and Textiles.", 
        cities: ["Maseru", "Teyateyaneng", "Mafeteng", "Hlotse"], 
        marks: ["Maletsunyane Falls", "Thaba Bosiu", "Katse Dam", "Tselanyane Park"], 
        culture: "A mountainous kingdom entirely surrounded by South Africa.", 
        facts: ["Known as the 'Kingdom in the Sky' because its entire territory is above 1,000m", "Has the highest low point of any country in the world", "Is one of only three countries entirely surrounded by another country"] 
    },
    { 
        name: "Liberia", code: "LR", continent: "Africa", capital: "Monrovia", pop: "5.3 Million", 
        area: "111,369 km²\n(43,000 mi²)", lang: "English", cur: "Liberian Dollar ($)", gov: "Republic", econ: "Rubber and Iron Ore.", 
        cities: ["Monrovia", "Gbarnga", "Buchanan", "Ganta"], 
        marks: ["Sapo National Park", "Providence Island", "Robertsport Beaches", "Mount Nimba"], 
        culture: "Founded by freed slaves from the United States.", 
        facts: ["Africa's oldest modern republic, founded in 1847", "Is one of only three countries that doesn't use the metric system", "The flag is modeled after the US flag"] 
    },
    { 
        name: "Libya", code: "LY", continent: "Africa", capital: "Tripoli", pop: "6.7 Million", 
        area: "1.76 Million km²\n(679,362 mi²)", lang: "Arabic", cur: "Libyan Dinar (ل.د)", gov: "Government of National Unity", econ: "Oil and Gas.", 
        cities: ["Tripoli", "Benghazi", "Misrata", "Bayda"], 
        marks: ["Leptis Magna", "Cyrene Ruins", "Ghadames Old Town", "Akakus Mountains"], 
        culture: "Heir to ancient Roman and Islamic civilizations.", 
        facts: ["Leptis Magna is one of the world's best-preserved Roman ruins", "Is home to the world's largest irrigation project (The Great Man-Made River)", "Almost 90% of the country is desert"] 
    },
    { 
        name: "Madagascar", code: "MG", continent: "Africa", capital: "Antananarivo", pop: "29 Million", 
        area: "587,041 km²\n(226,658 mi²)", lang: "Malagasy, French", cur: "Ariary (Ar)", gov: "Republic", econ: "Vanilla and Mining.", 
        cities: ["Antananarivo", "Toamasina", "Antsirabe", "Mahajanga"], 
        marks: ["Avenue of the Baobabs", "Tsingy de Bemaraha", "Isalo Park", "Nosy Be"], 
        culture: "A unique blend of Southeast Asian and African influences.", 
        facts: ["90% of its wildlife is found nowhere else on Earth", "Is the world's largest producer of vanilla", "Lemurs are native only to Madagascar"] 
    },
    { 
        name: "Malawi", code: "MW", continent: "Africa", capital: "Lilongwe", pop: "20 Million", 
        area: "118,484 km²\n(45,747 mi²)", lang: "English, Chichewa", cur: "Kwacha (MK)", gov: "Republic", econ: "Tobacco and Tea.", 
        cities: ["Lilongwe", "Blantyre", "Mzuzu", "Zomba"], 
        marks: ["Lake Malawi", "Mount Mulanje", "Liwonde Park", "Nyika Plateau"], 
        culture: "Known as the 'Warm Heart of Africa' for its friendly people.", 
        facts: ["Lake Malawi has more fish species than any other lake on Earth", "The lake takes up about one-third of the country's territory", "Is a leading exporter of tobacco"] 
    },
    { 
        name: "Mali", code: "ML", continent: "Africa", capital: "Bamako", pop: "22 Million", 
        area: "1.24 Million km²\n(478,767 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Military Government", econ: "Gold and Agriculture.", 
        cities: ["Bamako", "Sikasso", "Mopti", "Timbuktu"], 
        marks: ["Great Mosque of Djenné", "Timbuktu Mansions", "Bandiagara Escarpment", "Bamako Mosque"], 
        culture: "Heir to the legendary Mali Empire and Timbuktu learning.", 
        facts: ["Home to the world's largest mud-brick building (Djenné Mosque)", "Timbuktu was a legendary center of learning and trade", "Was once the source of half of the world's gold"] 
    },
    { 
        name: "Mauritania", code: "MR", continent: "Africa", capital: "Nouakchott", pop: "4.7 Million", 
        area: "1.03 Million km²\n(397,685 mi²)", lang: "Arabic", cur: "Ouguiya (UM)", gov: "Republic", econ: "Iron Ore and Fishing.", 
        cities: ["Nouakchott", "Nouadhibou", "Kiffa", "Rosso"], 
        marks: ["Eye of the Sahara", "Chinguetti", "Banc d'Arguin Park", "Ancient Ouadane"], 
        culture: "A bridge between the Arab Maghreb and West Africa.", 
        facts: ["The 'Eye of the Sahara' is a giant circular formation visible from space", "Home to the world's longest trains (up to 2.5km long)", "The historic city of Chinguetti is a holy city of Islam"] 
    },
    { 
        name: "Mauritius", code: "MU", continent: "Africa", capital: "Port Louis", pop: "1.3 Million", 
        area: "2,040 km²\n(788 mi²)", lang: "English, French", cur: "Mauritian Rupee (₨)", gov: "Republic", econ: "Tourism and Finance.", 
        cities: ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix", "Curepipe"], 
        marks: ["Le Morne Brabant", "Seven Coloured Earths", "Black River Gorges", "Chamarel Waterfall"], 
        culture: "A peaceful multicultural island with Indian, African, and French roots.", 
        facts: ["Was the only home of the now-extinct Dodo bird", "Has a famous 'underwater waterfall' optical illusion off its coast", "Is the only African country where Hinduism is the largest religion"] 
    },
    { 
        name: "Morocco", code: "MA", continent: "Africa", capital: "Rabat", pop: "37 Million", 
        area: "446,550 km²\n(172,414 mi²)", lang: "Arabic, Berber", cur: "Dirham (MAD)", gov: "Monarchy", econ: "Tourism and Phosphates.", 
        cities: ["Casablanca", "Marrakesh", "Fes", "Rabat"], 
        marks: ["Hassan II Mosque", "Jemaa el-Fnaa", "Blue City", "Sahara Dunes"], 
        culture: "Labyrinthine medinas and mint tea ceremonies.", 
        facts: ["World's oldest university is in Fes", "Closest African country to Europe", "Marrakesh is called the 'Red City'"] 
    },
    { 
        name: "Mozambique", code: "MZ", continent: "Africa", capital: "Maputo", pop: "32 Million", 
        area: "799,380 km²\n(308,642 mi²)", lang: "Portuguese", cur: "Metical (MT)", gov: "Republic", econ: "Natural Gas and Agri.", 
        cities: ["Maputo", "Matola", "Beira", "Nampula"], 
        marks: ["Bazaruto Archipelago", "Island of Mozambique", "Gorongosa Park", "Quirimbas Islands"], 
        culture: "Famous for 'Marrabenta' music and world-class seafood.", 
        facts: ["The only national flag to feature a modern weapon (AK-47)", "The Island of Mozambique was the capital for 400 years", "Is a top world producer of cashews"] 
    },
    { 
        name: "Namibia", code: "NA", continent: "Africa", capital: "Windhoek", pop: "2.5 Million", 
        area: "824,292 km²\n(318,261 mi²)", lang: "English", cur: "Namibian Dollar ($)", gov: "Republic", econ: "Mining and Tourism.", 
        cities: ["Windhoek", "Walvis Bay", "Swakopmund", "Henties Bay"], 
        marks: ["Sossusvlei Dunes", "Etosha National Park", "Fish River Canyon", "Skeleton Coast"], 
        culture: "Stunning desert landscapes and diverse ethnic groups like the Himba.", 
        facts: ["Contains the world's oldest desert, the Namib", "Has the world's largest population of free-roaming cheetahs", "The Fish River Canyon is the largest in Africa"] 
    },
    { 
        name: "Niger", code: "NE", continent: "Africa", capital: "Niamey", pop: "25 Million", 
        area: "1.27 Million km²\n(490,000 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Military Government", econ: "Uranium and Agri.", 
        cities: ["Niamey", "Zinder", "Maradi", "Tahoua"], 
        marks: ["Air Mountains", "Agadez Mosque", "W National Park", "Zinder Old Town"], 
        culture: "Home to the annual 'Gerewol' nomadic festival.", 
        facts: ["Over 80% of the country is the Sahara Desert", "Is the world's top producer of high-grade uranium", "Home to one of the world's largest protected areas (Termit Reserve)"] 
    },
    { 
        name: "Nigeria", code: "NG", continent: "Africa", capital: "Abuja", pop: "213 Million", 
        area: "923,768 km²\n(356,669 mi²)", lang: "English", cur: "Naira (₦)", gov: "Republic", econ: "Oil and Nollywood.", 
        cities: ["Lagos", "Kano", "Ibadan", "Abuja"], 
        marks: ["Zuma Rock", "Yankari Reserve", "Nike Art Center", "Tarkwa Bay"], 
        culture: "Diverse with 250+ ethnic groups; Afrobeats global hub.", 
        facts: ["Nollywood is the 2nd largest film industry by volume", "Most populous country in Africa", "Over 500 indigenous languages"] 
    },
    { 
        name: "Rwanda", code: "RW", continent: "Africa", capital: "Kigali", pop: "13.5 Million", 
        area: "26,338 km²\n(10,169 mi²)", lang: "Kinyarwanda, French, English", cur: "Rwandan Franc (RF)", gov: "Republic", econ: "Tourism and Coffee.", 
        cities: ["Kigali", "Butare", "Gisenyi", "Ruhengeri"], 
        marks: ["Volcanoes National Park", "Nyungwe Forest", "Akagera Park", "Kigali Memorial"], 
        culture: "Known as the 'Land of a Thousand Hills'.", 
        facts: ["The first country in the world to ban plastic bags (2008)", "Home to the endangered mountain gorillas", "Kigali is often cited as the cleanest city in Africa"] 
    },
    { 
        name: "Sao Tome and Principe", code: "ST", continent: "Africa", capital: "São Tomé", pop: "223,000", 
        area: "964 km²\n(372 mi²)", lang: "Portuguese", cur: "Dobra (Db)", gov: "Republic", econ: "Cocoa and Oil.", 
        cities: ["São Tomé", "Trindade", "Santana", "Santo António"], 
        marks: ["Pico Cão Grande", "Obo National Park", "Boca do Inferno", "Banana Beach"], 
        culture: "Historic 'Chocolate Islands' with Portuguese-Creole vibes.", 
        facts: ["Was once the world's largest producer of cocoa", "Pico Cão Grande is a massive volcanic plug rising 300m above the forest", "Is the second-smallest country in Africa"] 
    },
    { 
        name: "Senegal", code: "SN", continent: "Africa", capital: "Dakar", pop: "17 Million", 
        area: "196,722 km²\n(75,955 mi²)", lang: "French, Wolof", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Fishing and Tourism.", 
        cities: ["Dakar", "Touba", "Thiès", "Saint-Louis"], 
        marks: ["Lake Retba (Pink Lake)", "Goree Island", "African Renaissance Monument", "Djoudj Bird Sanctuary"], 
        culture: "Famous for its 'Teranga' (hospitality) and vibrant music.", 
        facts: ["Lake Retba is naturally pink due to high salt and algae content", "Dakar is the westernmost point of mainland Africa", "Home to the tallest statue in Africa (Renaissance Monument)"] 
    },
    { 
        name: "Seychelles", code: "SC", continent: "Africa", capital: "Victoria", pop: "100,000", 
        area: "459 km²\n(177 mi²)", lang: "Creole, French, English", cur: "Seychellois Rupee (₨)", gov: "Republic", econ: "Tourism and Fishing.", 
        cities: ["Victoria", "Anse Boileau", "Beau Vallon", "Anse Royale"], 
        marks: ["Vallee de Mai", "Anse Source d'Argent", "Aldabra Atoll", "Morne Seychellois"], 
        culture: "An idyllic archipelago with French-Creole roots.", 
        facts: ["Home to the world's heaviest tortoises (Aldabra Giant Tortoise)", "Smallest capital city in the world (Victoria)", "Home to the rare Coco de Mer, the world's largest seed"] 
    },
    { 
        name: "Sierra Leone", code: "SL", continent: "Africa", capital: "Freetown", pop: "8.4 Million", 
        area: "71,740 km²\n(27,699 mi²)", lang: "English, Krio", cur: "Leone (Le)", gov: "Republic", econ: "Diamonds and Mining.", 
        cities: ["Freetown", "Kenema", "Bo", "Makeni"], 
        marks: ["Bunce Island", "Tacugama Sanctuary", "Tiwai Island", "Banana Islands"], 
        culture: "Known for its beautiful beaches and resilient spirit.", 
        facts: ["Freetown was founded as a haven for freed slaves", "Home to some of the rarest primates, like the Western Chimpanzee", "Is one of the world's top producers of high-quality diamonds"] 
    },
    { 
        name: "Somalia", code: "SO", continent: "Africa", capital: "Mogadishu", pop: "17 Million", 
        area: "637,657 km²\n(246,201 mi²)", lang: "Somali, Arabic", cur: "Somali Shilling (Sh.so.)", gov: "Federal Republic", econ: "Livestock and Telecomm.", 
        cities: ["Mogadishu", "Hargeisa", "Kismayo", "Bosaso"], 
        marks: ["Laas Geel", "Mogadishu Lighthouse", "Shangani District", "Lag Badana Park"], 
        culture: "Known as a 'Nation of Poets' with deep oral traditions.", 
        facts: ["Has the longest coastline on the African mainland", "Laas Geel contains some of the best-preserved cave paintings in Africa", "Somali culture is traditionally nomadic"] 
    },
    { 
        name: "South Africa", code: "ZA", continent: "Africa", capital: "Pretoria", pop: "60 Million", 
        area: "1.22 Million km²\n(471,445 mi²)", lang: "11 Official Languages", cur: "Rand (R)", gov: "Republic", econ: "Mining and Industry.", 
        cities: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], 
        marks: ["Table Mountain", "Kruger Park", "Robben Island", "Cradle of Humankind"], 
        culture: "The 'Rainbow Nation' with 3 capitals.", 
        facts: ["Only country to voluntarily dismantle nukes", "Home to world's largest diamond", "Has 3 official capital cities"] 
    },
    { 
        name: "South Sudan", code: "SS", continent: "Africa", capital: "Juba", pop: "11 Million", 
        area: "644,329 km²\n(248,777 mi²)", lang: "English", cur: "South Sudanese Pound (£)", gov: "Republic", econ: "Oil and Agri.", 
        cities: ["Juba", "Malakal", "Wau", "Yei"], 
        marks: ["Boma National Park", "Sudd Wetland", "Nimule Park", "Mount Kinyeti"], 
        culture: "Known for the diverse Dinka and Nuer pastoralist cultures.", 
        facts: ["The world's youngest sovereign state (independent 2011)", "Home to one of the largest wildlife migrations on Earth", "The Sudd is one of the world's largest wetlands"] 
    },
    { 
        name: "Sudan", code: "SD", continent: "Africa", capital: "Khartoum", pop: "46 Million", 
        area: "1.86 Million km²\n(718,723 mi²)", lang: "Arabic, English", cur: "Sudanese Pound (£)", gov: "Transitional Government", econ: "Oil and Agri.", 
        cities: ["Khartoum", "Omdurman", "Port Sudan", "Nyala"], 
        marks: ["Meroë Pyramids", "Jebel Barkal", "Sanganeb Reef", "Khartoum Nile Confluence"], 
        culture: "Historic bridge between Egypt and sub-Saharan Africa.", 
        facts: ["Has more pyramids than Egypt (over 200 in Meroë)", "Khartoum is where the Blue and White Nile rivers meet", "Home to the ancient Kingdom of Kush"] 
    },
    { 
        name: "Tanzania", code: "TZ", continent: "Africa", capital: "Dodoma", pop: "63 Million", 
        area: "945,087 km²\n(364,900 mi²)", lang: "Swahili, English", cur: "Tanzanian Shilling (TSh)", gov: "Republic", econ: "Tourism and Agri.", 
        cities: ["Dar es Salaam", "Dodoma", "Mwanza", "Arusha"], 
        marks: ["Mount Kilimanjaro", "Serengeti", "Ngorongoro Crater", "Zanzibar Stone Town"], 
        culture: "Home to 120+ ethnic groups and Mount Kilimanjaro.", 
        facts: ["Mount Kilimanjaro is the highest peak in Africa", "Serengeti hosts the Great Migration", "Zanzibar is world-famous for its spice trade"] 
    },
    { 
        name: "Togo", code: "TG", continent: "Africa", capital: "Lomé", pop: "8.6 Million", 
        area: "56,785 km²\n(21,925 mi²)", lang: "French", cur: "CFA Franc (FCFA)", gov: "Republic", econ: "Phosphates and Agri.", 
        cities: ["Lomé", "Sokodé", "Kara", "Atakpamé"], 
        marks: ["Koutammakou", "Lake Togo", "Aklowa Falls", "Fazao-Malfakassa Park"], 
        culture: "Known for its unique 'Tamberma' mud tower-houses.", 
        facts: ["Koutammakou is a UNESCO World Heritage site for its tower-houses", "Lomé is the only African capital with a beach on the Atlantic", "The Akodessewa Fetish Market is the world's largest voodoo market"] 
    },
    { 
        name: "Tunisia", code: "TN", continent: "Africa", capital: "Tunis", pop: "12 Million", 
        area: "163,610 km²\n(63,170 mi²)", lang: "Arabic", cur: "Tunisian Dinar (DT)", gov: "Republic", econ: "Tourism and Industry.", 
        cities: ["Tunis", "Sfax", "Sousse", "Kairouan"], 
        marks: ["Carthage Ruins", "El Djem Amphitheatre", "Sidi Bou Said", "Djerba Island"], 
        culture: "A Mediterranean blend of Roman, Arab, and French heritages.", 
        facts: ["El Djem is one of the best-preserved Roman amphitheatres", "Star Wars was famously filmed in the Tunisian desert", "Kairouan is considered the fourth holiest city in Islam"] 
    },
    { 
        name: "Uganda", code: "UG", continent: "Africa", capital: "Kampala", pop: "47 Million", 
        area: "241,038 km²\n(93,065 mi²)", lang: "English, Swahili", cur: "Ugandan Shilling (USh)", gov: "Republic", econ: "Coffee and Tourism.", 
        cities: ["Kampala", "Entebbe", "Gulu", "Mbarara"], 
        marks: ["Murchison Falls", "Bwindi Impenetrable Forest", "Mountains of the Moon", "Source of the Nile"], 
        culture: "Known as the 'Pearl of Africa' for its stunning biodiversity.", 
        facts: ["Home to half of the world's remaining mountain gorillas", "Is located exactly on the Equator", "Is one of the world's youngest populations by age"] 
    },
    { 
        name: "Zambia", code: "ZM", continent: "Africa", capital: "Lusaka", pop: "19 Million", 
        area: "752,618 km²\n(290,587 mi²)", lang: "English", cur: "Zambian Kwacha (ZK)", gov: "Republic", econ: "Copper and Agri.", 
        cities: ["Lusaka", "Kitwe", "Ndola", "Livingstone"], 
        marks: ["Victoria Falls", "South Luangwa Park", "Lake Kariba", "Lower Zambezi"], 
        culture: "Known for the spectacular 'Mosi-oa-Tunya' (Victoria Falls).", 
        facts: ["Victoria Falls is the world's largest curtain of falling water", "The currency 'Kwacha' means 'Dawn'", "Is the world's top producer of emeralds"] 
    },
    { 
        name: "Zimbabwe", code: "ZW", continent: "Africa", capital: "Harare", pop: "15 Million", 
        area: "390,757 km²\n(150,872 mi²)", lang: "16 Official Languages", cur: "ZWL / US Dollar ($)", gov: "Republic", econ: "Mining and Agri.", 
        cities: ["Harare", "Bulawayo", "Chitungwiza", "Mutare"], 
        marks: ["Great Zimbabwe Ruins", "Victoria Falls", "Matobo Hills", "Hwange Park"], 
        culture: "Heir to the ancient Great Zimbabwe stone civilization.", 
        facts: ["Great Zimbabwe is the largest ancient stone structure south of the Sahara", "Home to Victoria Falls on the border with Zambia", "The national animal is the Sable Antelope"] 
    }
];

// 2. STATE VARIABLES
let filteredCountries = [...allCountries];
let selectedCountry = null;
let activeTab = 'overview';
let activeContinent = 'All';

// 3. CORE FUNCTIONS
function renderSidebar() {
    const list = document.getElementById("countryList");
    if (!list) return;

    list.innerHTML = filteredCountries.map((c) => `
        <div class="country-item ${selectedCountry === c ? 'selected' : ''}" onclick="selectCountry('${c.name}')">
            <img src="https://flagsapi.com/${c.code}/flat/64.png" alt="Flag" onerror="this.src='https://via.placeholder.com/30'">
            <div>
                <strong>${c.name}</strong><br>
                <small>${c.continent}</small>
            </div>
        </div>
    `).join("");
    
    document.getElementById("sidebarCount").innerText = `Countries (${filteredCountries.length})`;
}

function selectCountry(name) {
    selectedCountry = allCountries.find(c => c.name === name);
    const card = document.getElementById("profileCard");
    const empty = document.getElementById("emptyState");
    if(card) card.style.display = "block";
    if(empty) empty.style.display = "none";
    renderSidebar();
    updateProfile();
}

function updateProfile() {
    if (!selectedCountry) return;
    const c = selectedCountry;

    const flagImg = document.getElementById("flagImg");
    if(flagImg) flagImg.src = `https://flagsapi.com/${c.code}/flat/64.png`;
    
    document.getElementById("name").innerText = c.name;
    document.getElementById("capital").innerText = c.capital;
    document.getElementById("pop").innerText = c.pop;
    document.getElementById("area").innerHTML = c.area;
    document.getElementById("cur").innerText = c.cur;

    const content = document.getElementById("tabContent");
    if (activeTab === 'overview') {
        content.innerHTML = `
            <div class="info-item"><span class="info-label">🗣️ Languages</span><span class="info-value">${c.lang}</span></div>
            <div class="info-item"><span class="info-label">🏛️ Government</span><span class="info-value">${c.gov}</span></div>
            <div class="info-item"><span class="info-label">📈 Economy</span><span class="info-value">${c.econ}</span></div>
            <div class="info-item"><span class="info-label">🏙️ Major Cities</span><span class="info-value">${c.cities.join(", ")}</span></div>
        `;
    } else if (activeTab === 'culture') {
        content.innerHTML = `<h3>🎨 Cultural Traditions</h3><p>${c.culture}</p>`;
    } else if (activeTab === 'landmarks') {
        content.innerHTML = `<h3>🏔️ Famous Landmarks</h3><ul>${c.marks.map(m => `<li>${m}</li>`).join("")}</ul>`;
    } else if (activeTab === 'facts') {
        content.innerHTML = `<h3>💡 Did You Know?</h3>${c.facts.map(f => `<p>• ${f}</p>`).join("")}`;
    }
}

// 4. NAVIGATION & FILTERS
window.showTab = function(tab, btn) {
    activeTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    updateProfile();
};

window.searchAndFilter = function() {
    const term = document.getElementById("searchInput").value.toLowerCase();
    filteredCountries = allCountries.filter(c => 
        (c.name.toLowerCase().includes(term) || c.capital.toLowerCase().includes(term)) &&
        (activeContinent === 'All' || c.continent === activeContinent)
    );
    renderSidebar();
};

window.filterByContinent = function(cont, btn) {
    activeContinent = cont;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    searchAndFilter();
};

window.speakName = function() {
    if (!selectedCountry) return;
    const speech = new SpeechSynthesisUtterance(`${selectedCountry.name}. The capital is ${selectedCountry.capital}`);
    window.speechSynthesis.speak(speech);
};

// 5. CRITICAL INITIALIZATION
// This waits until the page is ready to fill the sidebar
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
});