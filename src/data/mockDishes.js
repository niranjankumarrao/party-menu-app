export const dishes = [
  {
    id: 1,
    name: "Kadhai Paneer",
    description: "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "CURRY",
    ingredients: [
        { "name": "Paneer", "quantity": "200g" },
        { "name": "Onion", "quantity": "2 large" },
        { "name": "Capsicum", "quantity": "1 large" },
        { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    id: 2,
    name: "Butter Chicken",
    description: "Chicken cooked in a spiced tomato, butter and cream sauce.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    dishType: "CURRY",
    category: {
      id: 2,
      name: "Mughlai",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Grilled paneer cubes marinated with yogurt and spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/veg_starter.png",
    mealType: "STARTER",
    type: "VEG",
    dishType: "TANDOOR",
    category: {
      id: 3,
      name: "Veg Starter",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/veg_starter.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 4,
    name: "Crispy Chicken",
    description: "Golden fried chicken with house spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
    mealType: "STARTER",
    type: "NON_VEG",
    dishType: "FRIED",
    category: {
      id: 4,
      name: "Non-Veg Starter",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 5,
    name: "French Fries",
    description: "Crispy salted potato sticks.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
    mealType: "SIDES",
    type: "VEG",
    dishType: "SNACK",
    category: {
      id: 5,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 6,
    name: "Mixed Salad",
    description: "Fresh garden vegetables with dressing.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/healthy.png",
    mealType: "SIDES",
    type: "VEG",
    dishType: "SALAD",
    category: {
      id: 6,
      name: "Healthy",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/healthy.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 7,
    name: "Gulab Jamun",
    description: "Soft milk dumplings in sugar syrup.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
    mealType: "DESSERT",
    type: "VEG",
    dishType: "SWEET",
    category: {
      id: 7,
      name: "Dessert",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 8,
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie squares.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/bakery.png",
    mealType: "DESSERT",
    type: "VEG",
    dishType: "BAKED",
    category: {
      id: 8,
      name: "Bakery",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/bakery.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 9,
    name: "Masala Dosa",
    description: "Crispy dosa stuffed with spiced potato filling.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "BREAKFAST",
    category: {
      id: 9,
      name: "South Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 10,
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and sauces.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "NOODLES",
    category: {
      id: 10,
      name: "Chinese",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 11,
    name: "Pizza Margherita",
    description: "Classic Italian pizza with tomato, mozzarella and basil.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/italian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "BAKED",
    category: {
      id: 11,
      name: "Italian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/italian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 12,
    name: "Chole Bhature",
    description: "Spicy chickpeas served with fried bhature.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "CURRY",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 13,
    name: "Fish Curry",
    description: "Tangy coastal style fish curry with spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/seafood.png",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    dishType: "CURRY",
    category: {
      id: 12,
      name: "Seafood",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/seafood.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 14,
    name: "Idli Sambar",
    description: "Steamed rice cakes served with lentil sambar.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
    mealType: "BREAKFAST",
    type: "VEG",
    dishType: "LIGHT MEAL",
    category: {
      id: 9,
      name: "South Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/south_indian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 15,
    name: "Chicken Biryani",
    description: "Fragrant rice cooked with chicken and spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    dishType: "RICE",
    category: {
      id: 2,
      name: "Mughlai",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
      isRecommendedForMealSuggestion: true
    }
  },
    {
    id: 16,
    name: "Veg Pulao",
    description: "Fragrant rice cooked with vegetables and mild spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "RICE",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 17,
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with vegetables.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
    mealType: "STARTER",
    type: "VEG",
    dishType: "FRIED",
    category: {
      id: 10,
      name: "Chinese",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 18,
    name: "Pav Bhaji",
    description: "Spiced mashed vegetables served with buttered pav.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/street_food.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "CURRY",
    category: {
      id: 13,
      name: "Street Food",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/street_food.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 19,
    name: "Tandoori Chicken",
    description: "Chicken marinated with yogurt and spices, roasted in tandoor.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
    mealType: "STARTER",
    type: "NON_VEG",
    dishType: "TANDOOR",
    category: {
      id: 4,
      name: "Non-Veg Starter",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 20,
    name: "Veg Manchurian",
    description: "Crispy vegetable balls in spicy Indo-Chinese sauce.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "CURRY",
    category: {
      id: 10,
      name: "Chinese",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/chinese.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 21,
    name: "Paneer Butter Masala",
    description: "Paneer cubes in creamy tomato-based gravy.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "CURRY",
    category: {
      id: 1,
      name: "North Indian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/north_indian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 22,
    name: "Egg Curry",
    description: "Boiled eggs simmered in onion-tomato curry.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    dishType: "CURRY",
    category: {
      id: 2,
      name: "Mughlai",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 23,
    name: "Rasgulla",
    description: "Soft spongy cheese balls soaked in sugar syrup.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
    mealType: "DESSERT",
    type: "VEG",
    dishType: "SWEET",
    category: {
      id: 7,
      name: "Dessert",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 24,
    name: "Veg Sandwich",
    description: "Toasted bread filled with vegetables and chutney.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/healthy.png",
    mealType: "SNACK",
    type: "VEG",
    dishType: "LIGHT MEAL",
    category: {
      id: 6,
      name: "Healthy",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/healthy.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 25,
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb curry from Kashmiri cuisine.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
    mealType: "MAIN COURSE",
    type: "NON_VEG",
    dishType: "CURRY",
    category: {
      id: 2,
      name: "Mughlai",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/mughlai.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 26,
    name: "Dhokla",
    description: "Steamed Gujarati snack made from fermented batter.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/street_food.png",
    mealType: "SNACK",
    type: "VEG",
    dishType: "LIGHT MEAL",
    category: {
      id: 13,
      name: "Street Food",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/street_food.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 27,
    name: "Veg Burger",
    description: "Grilled vegetable patty served in soft bun with sauces.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
    mealType: "SNACK",
    type: "VEG",
    dishType: "FAST FOOD",
    category: {
      id: 5,
      name: "Continental",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/continental.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 28,
    name: "Ice Cream Sundae",
    description: "Ice cream topped with chocolate sauce and nuts.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
    mealType: "DESSERT",
    type: "VEG",
    dishType: "COLD",
    category: {
      id: 7,
      name: "Dessert",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/dessert.png",
      isRecommendedForMealSuggestion: false
    }
  },
  {
    id: 29,
    name: "Pasta Alfredo",
    description: "Creamy pasta cooked with cheese and garlic.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/italian.png",
    mealType: "MAIN COURSE",
    type: "VEG",
    dishType: "PASTA",
    category: {
      id: 11,
      name: "Italian",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/italian.png",
      isRecommendedForMealSuggestion: true
    }
  },
  {
    id: 30,
    name: "Chicken Kebab",
    description: "Juicy chicken skewers grilled with spices.",
    image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
    mealType: "STARTER",
    type: "NON_VEG",
    dishType: "TANDOOR",
    category: {
      id: 4,
      name: "Non-Veg Starter",
      image: "https://storage.googleapis.com/chefkartimages/customer_app_assets/star_chef/non_veg_starter.png",
      isRecommendedForMealSuggestion: true
    }
  }
];

