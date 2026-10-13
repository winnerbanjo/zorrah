export interface MenuItem {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuSection {
  id: string;
  name: string;
  displayTitle: string;
  categories: MenuCategory[];
}

/**
 * Format a number into standard Nigerian Naira currency format (e.g. ₦6,450)
 */
export function formatPrice(price: number): string {
  return `₦${price.toLocaleString("en-NG")}`;
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "food",
    name: "FOOD",
    displayTitle: "FOOD MENU",
    categories: [
      {
        id: "rice",
        name: "RICE",
        items: [
          { id: "jollof-rice", name: "Jollof Rice", price: 6450, popular: true },
          { id: "chinese-rice", name: "Chinese Rice", price: 6988 },
          { id: "mexican-rice", name: "Mexican Rice", price: 6988 },
          { id: "native-rice", name: "Native Rice", price: 6450 },
          { id: "coconut-rice-prawns", name: "Coconut Rice with Prawns", price: 15050, popular: true },
          { id: "steamed-white-rice", name: "Steamed White Rice (Local Rice)", price: 5375 },
          { id: "basmatic-white-rice", name: "Basmatic White Rice", price: 6450 },
          { id: "fried-rice", name: "Fried Rice", price: 6450, popular: true },
        ],
      },
      {
        id: "pasta",
        name: "PASTA",
        items: [
          { id: "seafood-marinara", name: "Seafood Marinara", price: 20963, popular: true },
          { id: "spaghetti-bolognese", name: "Spaghetti Bolognese", price: 17200 },
          { id: "meatball-pasta", name: "Meatball Pasta", price: 16663 },
          { id: "chicken-arrabiata", name: "Chicken Arrabiata", price: 18660 },
          { id: "alfredo-pasta", name: "Alfredo Pasta", price: 19888, popular: true },
          { id: "shrimp-pasta", name: "Shrimp Pasta", price: 19888 },
          { id: "jollof-spaghetti", name: "Jollof Spaghetti", price: 5375 },
        ],
      },
      {
        id: "sides",
        name: "SIDES",
        items: [
          { id: "yam-fries", name: "Yam Fries", price: 3225 },
          { id: "plantain-fries", name: "Plantain Fries", price: 3225, popular: true },
          { id: "french-fries", name: "French Fries", price: 3225 },
          { id: "egg-of-choice", name: "Egg of Choice", price: 3225 },
          { id: "potato-fries", name: "Potato Fries", price: 3225 },
          { id: "mashed-potatoes", name: "Mashed Potatoes", price: 4300 },
        ],
      },
      {
        id: "salads",
        name: "SALADS",
        items: [
          { id: "prawn-avocado-salad", name: "Prawn & Avocado Salad", price: 17200, popular: true },
          { id: "chicken-salad", name: "Chicken Salad", price: 13438 },
          { id: "caesar-salad", name: "Caesar Salad", price: 17738 },
          { id: "special-salad", name: "Special Salad", price: 16985 },
        ],
      },
      {
        id: "soups",
        name: "SOUPS",
        items: [
          { id: "afang-soup", name: "Afang Soup", price: 7310 },
          { id: "edikangikong-soup", name: "Edikangikong Soup", price: 6665 },
          { id: "banga-soup", name: "Banga Soup", price: 6450 },
          { id: "okro-soup", name: "Okro Soup", price: 6450 },
          { id: "seafood-soup", name: "Seafood Soup", price: 32250, popular: true },
          { id: "efo-riro", name: "Efo Riro", price: 6235, popular: true },
          { id: "white-soup", name: "White Soup", price: 6665 },
          { id: "fisherman-soup", name: "Fisherman Soup", price: 37625, popular: true },
          { id: "egusi-soup", name: "Egusi Soup", price: 6450, popular: true },
          { id: "ogbono-soup", name: "Ogbono Soup", price: 6450 },
        ],
      },
      {
        id: "swallow",
        name: "SWALLOW",
        items: [
          { id: "poundo", name: "Poundo", price: 3225 },
          { id: "semo", name: "Semo", price: 2150 },
          { id: "wheat", name: "Wheat", price: 3763 },
          { id: "garri", name: "Garri", price: 2150 },
          { id: "plantain-flour", name: "Plantain Flour", price: 3763 },
          { id: "amala", name: "Amala", price: 3763, popular: true },
        ],
      },
      {
        id: "breakfast",
        name: "BREAKFAST",
        items: [
          { id: "english-breakfast", name: "English Breakfast", price: 16125, popular: true },
          { id: "akara-and-pap", name: "Akara and Pap", price: 10750 },
          { id: "yam-and-egg-sauce", name: "Yam and Egg Sauce", price: 13438, popular: true },
          { id: "irish-potato-gizzard", name: "Irish Potato and Gizzard", price: 16663 },
          { id: "moi-moi-custard", name: "Moi Moi & Custard", price: 10213 },
          { id: "plantain-and-egg-sauce", name: "Plantain and Egg Sauce", price: 13438 },
          { id: "yam-plantain-fish", name: "Yam & Plantain with Fish", price: 12900 },
          { id: "cereal-egg-bread-milk", name: "Cereal with Choice of Egg, Bread & Milk", price: 10750 },
          { id: "noodles", name: "Noodles", price: 8063 },
        ],
      },
      {
        id: "bites",
        name: "BITES",
        items: [
          { id: "chicken-sandwiches", name: "Chicken Sandwiches", price: 13975 },
          { id: "beef-burger", name: "Beef Burger", price: 12900, popular: true },
          { id: "chicken-burger", name: "Chicken Burger", price: 12900 },
          { id: "double-decker", name: "Double Decker", price: 19350 },
          { id: "titus-fish", name: "Titus Fish", price: 8600 },
        ],
      },
    ],
  },
  {
    id: "afro-fusion",
    name: "AFRO FUSION & SPECIALS",
    displayTitle: "AFRO FUSION & SPECIALS",
    categories: [
      {
        id: "afro-fusion-cat",
        name: "AFRO FUSION",
        items: [
          { id: "abunri", name: "Abunri", price: 13438 },
          { id: "nkwobi", name: "Nkwobi", price: 13438, popular: true },
          { id: "isi-ewu", name: "Isi Ewu", price: 16125, popular: true },
          { id: "yam-porridge", name: "Yam Porridge", price: 9138 },
          { id: "ukodo", name: "Ukodo", price: 17200 },
          { id: "plantain-porridge", name: "Plantain Porridge", price: 9138 },
          { id: "spicy-wings", name: "Spicy Wings", price: 12900 },
          { id: "buffalo-wings", name: "Buffalo Wings", price: 12900 },
          { id: "chicken-nugget", name: "Chicken Nugget", price: 12900 },
        ],
      },
      {
        id: "pepper-soups",
        name: "PEPPER SOUPS",
        items: [
          { id: "goat-meat-pepper-soup", name: "Goat Meat Pepper Soup", price: 16125, popular: true },
          { id: "catfish-pepper-soup", name: "Catfish Pepper Soup", price: 10213, popular: true },
          { id: "point-n-kill", name: "Point N Kill", price: 20425, popular: true },
          { id: "chicken-pepper-soup", name: "Chicken Pepper Soup", price: 13438 },
          { id: "cowleg-pepper-soup", name: "Cowleg Pepper Soup", price: 13975 },
          { id: "croaker-fish-full", name: "Croaker Fish Full", price: 19350 },
        ],
      },
      {
        id: "peppered-specials",
        name: "PEPPERED SPECIALS",
        items: [
          { id: "goat-meat-peppered", name: "Goat Meat Peppered", price: 12900, popular: true },
          { id: "half-croaker-peppered", name: "Half Croaker Peppered", price: 9675 },
          { id: "chicken-peppered", name: "Chicken Peppered", price: 12900 },
          { id: "turkey-peppered", name: "Turkey Peppered", price: 12900, popular: true },
          { id: "snail-peppered", name: "Snail Peppered", price: 18275, popular: true },
          { id: "assorted-peppered", name: "Assorted Peppered", price: 10750 },
          { id: "asun-dodo", name: "Asun Dodo", price: 16125, popular: true },
          { id: "gizzard-peppered", name: "Gizzard Peppered", price: 13975 },
          { id: "peppered-beef", name: "Peppered Beef", price: 12900 },
          { id: "barracuda", name: "Barracuda", price: 15050 },
          { id: "single-jumbo-prawn", name: "Single Jumbo Prawn", price: 10750 },
        ],
      },
      {
        id: "grills-steaks",
        name: "GRILLS & STEAKS",
        items: [
          { id: "lamb-chops", name: "Lamb Chops", price: 36013, popular: true },
          { id: "t-bone-steak", name: "T-Bone Steak", price: 36013, popular: true },
          { id: "tiger-prawns", name: "Tiger Prawns", price: 32250, popular: true },
        ],
      },
      {
        id: "take-out",
        name: "TAKE OUT",
        items: [
          { id: "take-out-pack", name: "Take Out Pack", price: 1613 },
          { id: "take-out-cup", name: "Take Out Cup", price: 1075 },
          { id: "2-5-litre-take-out", name: "2.5 Litre Take-Out", price: 5375 },
          { id: "5-litre-take-out", name: "5 Litre Take-Out", price: 9675 },
        ],
      },
      {
        id: "sauce",
        name: "SAUCE",
        items: [
          { id: "vegetable-sauce", name: "Vegetable Sauce", price: 12150 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "DRINKS",
    displayTitle: "DRINKS MENU",
    categories: [
      {
        id: "cocktail",
        name: "COCKTAIL",
        items: [
          { id: "long-island-iced-tea", name: "Long Island Iced Tea", price: 12900, popular: true },
          { id: "old-fashioned", name: "Old Fashioned", price: 12900 },
          { id: "negroni", name: "Negroni", price: 12900 },
          { id: "mojito", name: "Mojito", price: 12900, popular: true },
          { id: "margarita", name: "Margarita", price: 12900 },
          { id: "moscow-mule", name: "Moscow Mule", price: 12900 },
          { id: "strawberry-daiquiri", name: "Strawberry Daiquiri", price: 12900 },
          { id: "tequila-sunrise", name: "Tequila Sunrise", price: 12900 },
          { id: "porn-star-martini", name: "Porn Star Martini", price: 12900, popular: true },
          { id: "cosmopolitan", name: "Cosmopolitan", price: 12900 },
          { id: "whiskey-sour", name: "Whiskey Sour", price: 12900 },
        ],
      },
      {
        id: "signature",
        name: "SIGNATURE",
        items: [
          { id: "blue-bird", name: "Blue Bird", price: 13438 },
          { id: "magma", name: "Magma", price: 16125, popular: true },
          { id: "berry-blast", name: "Berry Blast", price: 13438 },
          { id: "healthy-summer", name: "Healthy Summer", price: 13438 },
          { id: "sweet-lady", name: "Sweet Lady", price: 13975 },
          { id: "zobo-sangria", name: "Zobo Sangria", price: 16125, popular: true },
        ],
      },
      {
        id: "mocktails",
        name: "MOCKTAILS",
        items: [
          { id: "chapman", name: "Chapman", price: 7525, popular: true },
          { id: "virgin-colada", name: "Virgin Colada", price: 8600 },
          { id: "lemonade", name: "Lemonade", price: 8063 },
          { id: "shirley-temple", name: "Shirley Temple", price: 8600 },
          { id: "virgin-daiquiri", name: "Virgin Daiquiri", price: 8600 },
        ],
      },
      {
        id: "juices",
        name: "JUICES",
        items: [
          { id: "fresh-juice", name: "Fresh Juice", price: 6450, popular: true },
          { id: "cranberry-juice", name: "Cranberry Juice", price: 6450 },
          { id: "orange-juice", name: "Orange Juice", price: 6450 },
          { id: "pineapple-juice", name: "Pineapple Juice", price: 6450 },
          { id: "apple-juice", name: "Apple Juice", price: 6450 },
          { id: "milk-shake", name: "Milk Shake", price: 6450 },
        ],
      },
      {
        id: "hot-beverages",
        name: "HOT BEVERAGES",
        items: [
          { id: "coffee", name: "Coffee", price: 3225 },
          { id: "americano", name: "Americano", price: 3225 },
          { id: "cafe-mocha", name: "Cafe Mocha", price: 4838 },
          { id: "tea", name: "Tea", price: 3225 },
          { id: "hot-chocolate", name: "Hot Chocolate", price: 4838 },
        ],
      },
      {
        id: "soft-drinks",
        name: "SOFT DRINKS",
        items: [
          { id: "water", name: "Water", price: 1613 },
          { id: "coke", name: "Coke", price: 1613 },
          { id: "fanta", name: "Fanta", price: 1613 },
          { id: "sprite", name: "Sprite", price: 1613 },
          { id: "malta-guinness", name: "Malta Guinness", price: 2688 },
          { id: "tonic-water", name: "Tonic Water", price: 1613 },
          { id: "mirinda", name: "Mirinda", price: 1613 },
          { id: "soda-water", name: "Soda Water", price: 1613 },
          { id: "bitter-lemon", name: "Bitter Lemon", price: 1613 },
          { id: "perrier-water", name: "Perrier Water", price: 4300 },
          { id: "red-bull", name: "Red Bull", price: 4300 },
        ],
      },
      {
        id: "beer",
        name: "BEER",
        items: [
          { id: "heineken", name: "Heineken", price: 3225 },
          { id: "guinness-stout", name: "Guinness Stout", price: 3225 },
          { id: "smirnoff-ice", name: "Smirnoff Ice", price: 3225 },
        ],
      },
      {
        id: "shots",
        name: "SHOTS",
        items: [
          { id: "serra-shots", name: "Serra Shots", price: 3763 },
          { id: "olmeca-shots", name: "Olmeca Shots", price: 5375 },
          { id: "vodka-shots", name: "Vodka Shots", price: 4300 },
          { id: "jose-cuervo-shot", name: "Jose Cuervo", price: 5375 },
          { id: "bombay-gin-shot", name: "Bombay Gin Shot", price: 5375 },
          { id: "whisky-shot", name: "Whisky Shot", price: 7525 },
        ],
      },
      {
        id: "red-wine",
        name: "RED WINE",
        items: [
          { id: "darling-cellars-red", name: "Darling Cellars", price: 43000 },
          { id: "sandstone-shiraz", name: "Sandstone Shiraz", price: 86000 },
          { id: "santa-rita-cabernet", name: "Santa Rita Cabernet", price: 48375 },
          { id: "thomas-barton-medoc", name: "Thomas Barton Medoc", price: 75250 },
          { id: "carlo-rossi", name: "Carlo Rossi", price: 38163 },
          { id: "george-duboeuf-cotes", name: "George Duboeuf Cotes", price: 59125 },
          { id: "domaine-saint-betron", name: "Domaine Saint Betron", price: 68875 },
        ],
      },
      {
        id: "white-wine",
        name: "WHITE WINE",
        items: [
          { id: "darling-cellars-white", name: "Darling Cellars", price: 43000 },
          { id: "haussmann-baron-eugene", name: "Haussmann Baron Eugene", price: 69875 },
          { id: "santa-rita-chardonnay", name: "Santa Rita Chardonnay", price: 48375 },
          { id: "nederburg-sauvignon", name: "Nederburg Sauvignon", price: 53750 },
          { id: "noble-hill-sauvignon", name: "Noble Hill Sauvignon", price: 43000 },
          { id: "scanavino-moscato", name: "Scanavino Moscato d'Asti", price: 86000 },
          { id: "pies", name: "Pies", price: 43000 },
        ],
      },
      {
        id: "rose-wine",
        name: "ROSÉ WINE",
        items: [
          { id: "gerald-bertrand-cote-des-rose", name: "Gerald Bertrand Cote des Rose", price: 86000 },
        ],
      },
      {
        id: "rum",
        name: "RUM",
        items: [
          { id: "bacardi-white", name: "Bacardi White", price: 60200 },
          { id: "captain-morgan", name: "Captain Morgan", price: 60200 },
        ],
      },
      {
        id: "gin",
        name: "GIN",
        items: [
          { id: "bombay-sapphire", name: "Bombay Sapphire", price: 75250 },
        ],
      },
      {
        id: "whiskey",
        name: "WHISKEY",
        items: [
          { id: "glenfiddich-18", name: "Glenfiddich 18", price: 295625, popular: true },
          { id: "glenfiddich-12", name: "Glenfiddich 12", price: 198875 },
          { id: "jameson-black-barrel", name: "Jameson Black Barrel", price: 107500, popular: true },
          { id: "johnnie-walker-black-label", name: "Johnnie Walker Black Label", price: 107500 },
          { id: "jack-daniels", name: "Jack Daniels", price: 77938 },
          { id: "jameson", name: "Jameson", price: 77938 },
        ],
      },
      {
        id: "vodka",
        name: "VODKA",
        items: [
          { id: "ciroc", name: "Ciroc", price: 134375, popular: true },
          { id: "absolut", name: "Absolut", price: 53750 },
        ],
      },
      {
        id: "liquor",
        name: "LIQUOR",
        items: [
          { id: "baileys", name: "Baileys", price: 96750 },
          { id: "martini-rosso", name: "Martini Rosso", price: 53750 },
          { id: "campari", name: "Campari", price: 69875 },
        ],
      },
      {
        id: "tequila",
        name: "TEQUILA",
        items: [
          { id: "olmeca-white", name: "Olmeca White", price: 86000 },
          { id: "olmeca-gold", name: "Olmeca Gold", price: 96750 },
          { id: "casamigo-reposado", name: "Casamigo Reposado", price: 376250, popular: true },
        ],
      },
      {
        id: "brandy",
        name: "BRANDY",
        items: [
          { id: "hennessy-vsop", name: "Hennessy VSOP", price: 247250, popular: true },
          { id: "hennessy-vs", name: "Hennessy VS", price: 182750 },
          { id: "martell-blue-swift", name: "Martell Blue Swift", price: 193500 },
        ],
      },
    ],
  },
];
