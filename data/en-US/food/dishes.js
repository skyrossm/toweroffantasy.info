import i from "./ingredients";

const recipes = [
    {
        name: 'Fried Mushrooms',
        imgSrc: "friedmushrooms.webp",
        
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Crispy Grilled Fish',
        imgSrc: "crispygrilledfish.webp",
        
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.silverbass, amount: 1 }
        ]
    },
    {
        name: 'Wholegrain Bread',
        imgSrc: "wholegrainbread.webp",
        
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 }
        ]
    },
    {
        name: 'Sizzling Meat',
        imgSrc: "sizzlingmeat.webp",
        
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.gamemeat, amount: 2 }
        ]
    },
    {
        name: 'Lettuce Salad',
        imgSrc: "lettucesalad.webp",
        
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.lettuce, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Fried Egg',
        imgSrc: "friedegg.webp",
        
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.poultryegg, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Charcoal Grilled Sand Onion',
        imgSrc: "grilledsandonion.webp",
        
        rarity: 1,
        stars: 1,
        effect: 'Recovers **10** satiety',
        ingredients: [
            { item: i.sandonion, amount: 2 }
        ]
    },
    {
        name: 'Cactus Special',
        imgSrc: "cactusspecial.webp",
        
        rarity: 1,
        stars: 1,
        effect: 
            `Recovers **5** satiety  
            Recovers **10% + 1,500** HP`,
        ingredients: [
            { item: i.ballcactus, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Seaweed and Egg Soup',
        imgSrc: "seaweedandeggsoup.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.laver, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Breakfast Cereal',
        imgSrc: "breakfastcereal.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.milk, amount: 1 }
        ]
    },
    {
        name: 'Crispy Chicken Burger',
        imgSrc: "crispychickenburger.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.homigrain, amount: 1 },
            { item: i.poultrymeat, amount: 1 },
            { item: i.lettuce, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Egg Fried Rice',
        imgSrc: "eggfriedrice.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.rice, amount: 2 },
            { item: i.poultryegg, amount: 1 }
        ]
    },
    {
        name: 'Golden Egg and Tomato',
        imgSrc: "goldeneggandtomato.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.thornmato, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Mushroom Soup',
        imgSrc: "mushroomsoup.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Steamed Conch',
        imgSrc: "steamedconch.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.conch, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Meat and Potato Stew',
        imgSrc: "meatandpotatostew.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Fries',
        imgSrc: "fries.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.potato, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ]
    },
    {
        name: 'Vegetable Salad',
        imgSrc: "vegetablesalad.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fallenfruit, amount: 1 },
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Fried Chicken',
        imgSrc: "friedchicken.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.poultrymeat, amount: 2 },
            { item: i.homigrain, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Honeyed Fruit Juice',
        imgSrc: "honeyedfruitjuice.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** endurance  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fallenfruit, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Iced Orchid Surprise',
        imgSrc: "icedorchidsurprise.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **300** endurance  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.ghostmushroom, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.carbonatedwater, amount: 1 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Stir-Fried Broccoli',
        imgSrc: "stir-friedbroccoli.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.broccoli, amount: 2 }
        ]
    },
    {
        name: 'Meat Bun',
        imgSrc: "meatbun.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.homigrain, amount: 2 },
            { item: i.gamemeat, amount: 1 }
        ]
    },
    {
        name: 'Sliced Fish with Mushroom',
        imgSrc: "slicedfishwithmushroom.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.mushroom, amount: 2 },
            { item: i.silverbass, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Dandelion Mushroom Soup',
        imgSrc: "dandelionmushroomsoup.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.dandelionseed, amount: 1 },
            { item: i.mushroom, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Surf and Turf',
        imgSrc: "surfandturf.webp",
        
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **8** satiety  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.darbyssturgeon, amount: 1 },
            { item: i.poultryegg, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Red Wheat Bread',
        imgSrc: "redwheatbread.webp",
        
        rarity: 2,
        stars: 2,
        effect: 'Recovers **16** satiety',
        ingredients: [
            { item: i.brownrice, amount: 2 }
        ]
    },
    {
        name: 'Firecap Mushroom Soup',
        imgSrc: "firecapmushroomsoup.webp",
        
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **400** endurance  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.firecap, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Black Moss Soup',
        imgSrc: "blackmosssoup.webp",
        
        rarity: 2,
        stars: 2,
        effect: 
            `Recovers **8** satiety  
            Recovers **13% + 10,000** HP`,
        ingredients: [
            { item: i.blackmoss, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Beet Soup',
        imgSrc: "beetrootsoup.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.beetroot, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Deep-fried Tofu',
        imgSrc: "deep-friedtofu.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.soybeans, amount: 2 }
        ]
    },
    {
        name: 'Salted Corn',
        imgSrc: "saltedcorn.webp",
        
        rarity: 2,
        stars: 1,
        effect: 'Recovers **14** satiety',
        ingredients: [
            { item: i.corn, amount: 2 }
        ]
    },
    {
        name: 'Grilled Lizard Tail',
        imgSrc: "grilledlizardtail.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.fleshytail, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Creamy Corn Soup',
        imgSrc: "creamycornsoup.webp",
        
        rarity: 2,
        stars: 1,
        effect: 
            `Recovers **7** satiety  
            Recovers **12% + 3,300** HP`,
        ingredients: [
            { item: i.corn, amount: 2 },
            { item: i.milk, amount: 1 },
            { item: i.mushroom, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Seafood Soup',
        imgSrc: "seafoodsoup.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Frost Attack +1%  
            Frost Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.conch, amount: 3 },
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ],
        icons: [
            "iceATK"
        ]
    },
    {
        name: 'Spicy Burger',
        imgSrc: "spicyburger.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Physical Attack +1%  
            Physical Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.homigrain, amount: 3 },
            { item: i.rearhock, amount: 2 },
            { item: i.lettuce, amount: 1 }
        ],
        icons: [
            "physATK"
        ]
    },
    {
        name: 'Steamed Crab',
        imgSrc: "steamedcrab.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.portunid, amount: 2 },
            { item: i.lettuce, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Iced Strawberry Soda',
        imgSrc: "icedstrawberrysoda.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ],
        icons: [
            "fireDEF"
        ]
    },
    {
        name: 'Thundercloud Blueberry Soda',
        imgSrc: "thundercloudblueberrysoda.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ],
        icons: [
            "voltDEF"
        ]
    },
    {
        name: 'Simple Power Salad',
        imgSrc: "simplepowersalad.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Physical Resistance +10%  
            Physical Resistance +170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.broccoli, amount: 1 },
            { item: i.thornmato, amount: 1 },
            { item: i.lettuce, amount: 1 },
            { item: i.poultryegg, amount: 1 },
            { item: i.saladdressing, amount: 1 }
        ],
        icons: [
            "physDEF"
        ]
    },
    {
        name: 'Steamed Egg with Sea Urchin',
        imgSrc: "steamedeggwithseaurchin.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.seaurchin, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Jam on Toast',
        imgSrc: "jamontoast.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.smallblueberryjar, amount: 1 },
            { item: i.strawberry, amount: 1 },
            { item: i.homigrain, amount: 3 }
        ],
        icons: [
            "voltATK"
        ]
    },
    {
        name: 'Tomato and Fried Egg Pasta',
        imgSrc: "tomatoandfriedeggpasta.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.thornmato, amount: 4 },
            { item: i.homigrain, amount: 3 },
            { item: i.poultryegg, amount: 1 }
        ],
        icons: [
            "fireATK"
        ]
    },
    {
        name: 'Fruit Cake',
        imgSrc: "fruitcake.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.strawberry, amount: 2 },
            { item: i.homigrain, amount: 1 },
            { item: i.fallenfruit, amount: 1 },
            { item: i.poultryegg, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Boiled Scallops',
        imgSrc: "boiledscallops.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.lettuce, amount: 3 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Roast Rump',
        imgSrc: "roastrump.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** endurance  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.rearhock, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Fiddlehead Pie',
        imgSrc: "fiddleheadpie.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Chocolate Bread',
        imgSrc: "chocolatebread.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.brownrice, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Balloon Fruit Salad',
        imgSrc: "balloonfruitsalad.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.balloonfruit, amount: 2 },
            { item: i.thornmato, amount: 2 },
            { item: i.saladdressing, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Fiddlehead Soup',
        imgSrc: "fiddleheadsoup.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Spicy Eel',
        imgSrc: "spicyeel.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Resistance +10%  
            Volt Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.electriceel, amount: 1 }
        ],
        icons: [
            "voltDEF"
        ]
    },
    {
        name: 'Eel and Mushroom Soup',
        imgSrc: "eelandmushroomsoup.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Volt Attack +1%  
            Volt Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.electriceel, amount: 1 },
            { item: i.firecap, amount: 2 }
        ],
        icons: [
            "voltATK"
        ]
    },
    {
        name: 'Sea Crab Soup',
        imgSrc: "seacrabsoup.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.hermitcrab, amount: 2 },
            { item: i.mushroom, amount: 4 }
        ],
        icons: [
            "fireDEF"
        ]
    },
    {
        name: 'Sweet Pomegranate Juice',
        imgSrc: "sweetpomegranatejuice.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** endurance  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.phosphogranate, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.carbonatedwater, amount: 1 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Cocoa Milk',
        imgSrc: "cocoamilk.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Frost Resistance +10%  
            Frost Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.honey, amount: 2 },
            { item: i.milk, amount: 1 }
        ],
        icons: [
            "iceDEF"
        ]
    },
    {
        name: 'Firedragon Fruit Tea',
        imgSrc: "firedragonfruittea.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.firedragonfruit, amount: 2 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "fireATK"
        ]
    },
    {
        name: 'Barnacle Stew',
        imgSrc: "barnaclestew.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Physical Resistance +10%  
            Physical Resistance +290**  
            Duration **900** sec`,
        ingredients: [
            { item: i.barnacle, amount: 2 },
            { item: i.lettuce, amount: 4 }
        ],
        icons: [
            "physDEF"
        ]
    },
    {
        name: 'Barnacle Seafood Pizza',
        imgSrc: "barnacleseafoodpizza.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.barnacle, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.onion, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Snow Azalea Tea',
        imgSrc: "snowazaleatea.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Frost Attack +1%  
            Frost Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.snowazalea, amount: 1 },
            { item: i.milk, amount: 1 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "iceATK"
        ]
    },
    {
        name: 'Pine Cocoa',
        imgSrc: "pinecocoa.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.pinecone, amount: 1 },
            { item: i.cocoabeans, amount: 1 },
            { item: i.milk, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Caviar Sushi',
        imgSrc: "caviarsushi.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.rice, amount: 2 },
            { item: i.laver, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Caviar Potato Balls',
        imgSrc: "caviarpotatoballs.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            **Physical Attack +1%  
            Physical Attack +80**  
            Duration **900** sec`,
        ingredients: [
            { item: i.caviar, amount: 1 },
            { item: i.potato, amount: 2 }
        ],
        icons: [
            "physATK"
        ]
    },
    {
        name: 'Stir-fried Peppers',
        imgSrc: "stir-friedpeppers.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Frost Resistance +10%  
            Frost Resistance 170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.pepper, amount: 2 },
            { item: i.onion, amount: 2 }
        ],
        icons: [
            "iceDEF"
        ]
    },
    {
        name: 'Melon Salad',
        imgSrc: "melonsalad.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Resistance +10%  
            Flame Resistance 170**  
            Duration **900** sec`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.saladdressing, amount: 2 }
        ],
        icons: [
            "fireDEF"
        ]
    },
    {
        name: 'Pumpkin Porridge',
        imgSrc: "pumpkinporridge.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.rice, amount: 3 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Grilled Ribs',
        imgSrc: "grilledribs.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.ribs, amount: 1 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Chocolate Soymilk',
        imgSrc: "chocolatesoymilk.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** endurance  
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.cocoabeans, amount: 2 },
            { item: i.soybeans, amount: 1 },
            { item: i.honey, amount: 1 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Beetroot Fern',
        imgSrc: "beetrootfern.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.fiddlehead, amount: 2 },
            { item: i.beetroot, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Honeydew Melon Bread',
        imgSrc: "honeydewmelonbread.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Frost Attack +1%  
            Frost Attack 45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.desertmelon, amount: 2 },
            { item: i.honey, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ],
        icons: [
            "iceATK"
        ]
    },
    {
        name: 'Mixed Grain Porridge',
        imgSrc: "mixedgrainporridge.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **500** endurance 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.rice, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Corn and Seafood Pie',
        imgSrc: "cornandseafoodpie.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.scallop, amount: 2 },
            { item: i.corn, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Steamed Pumpkin',
        imgSrc: "steamedpumpkin.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety 
            Recovers **15% + 20,000** HP`,
        ingredients: [
            { item: i.pumpkin, amount: 2 },
            { item: i.homigrain, amount: 3 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Spicy Fried Rice',
        imgSrc: "spicyfriedrice.webp",
        
        rarity: 3,
        stars: 1,
        effect: 
            `Recovers **10** satiety  
            **Flame Attack +1%  
            Flame Attack 45**  
            Duration **900** sec`,
        ingredients: [
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 },
            { item: i.poultryegg, amount: 1 },
            { item: i.rice, amount: 2 }
        ],
        icons: [
            "fireATK"
        ]
    },
    {
        name: 'Grilled Oysters',
        imgSrc: "grilledoysters.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.oyster, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Cold Fish Mint',
        imgSrc: "coldfishmint.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **10** satiety  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fishmint, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Oyster Tofu Soup',
        imgSrc: "oystertofusoup.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** endurance  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.oyster, amount: 2 },
            { item: i.soybeans, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Scramble Egg with Fish Mint',
        imgSrc: "scrambleeggwithfishmint.webp",
        
        rarity: 3,
        stars: 2,
        effect: 
            `Recovers **600** endurance  
            Recovers **16% + 34,000** HP`,
        ingredients: [
            { item: i.fishmint, amount: 2 },
            { item: i.poultryegg, amount: 3 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Nut Tea',
        imgSrc: "nuttea.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.hazelnut, amount: 1 },
            { item: i.pinecone, amount: 2 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: "Purple Yam Pie",
        imgSrc: "purpleyampie.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Attack +2%  
            Volt Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.purpleyam, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ],
        icons: [
            "voltATK"
        ]
    },
    {
        name: 'Snow Lotus Soup',
        imgSrc: "snowlotussoup.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** endurance  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.snowlotus, amount: 1 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Truffle Fried Rice',
        imgSrc: "trufflefriedrice.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Attack +2%  
            Physical Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.blacktruffle, amount: 1 },
            { item: i.onion, amount: 1 },
            { item: i.rice, amount: 2 }
        ],
        icons: [
            "physATK"
        ]
    },
    {
        name: 'Caterpillar Fungus Noodles',
        imgSrc: "caterpillarfungusnoodles.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.caterpillarfungus, amount: 1 },
            { item: i.brownrice, amount: 3 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Grilled Steak',
        imgSrc: "grilledsteak.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Resistance +15%  
            Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 }
        ],
        icons: [
            "voltDEF"
        ]
    },
    {
        name: 'Steak with Sauce',
        imgSrc: "steakwithsauce.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%  
            Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.firecap, amount: 3 }
        ],
        icons: [
            "fireATK"
        ]
    },
    {
        name: 'Braised Meat',
        imgSrc: "braisedmeat.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Frost Resistance +15%  
            Frost Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 }
        ],
        icons: [
            "iceDEF"
        ]
    },
    {
        name: 'Juicy Meat Sandwich',
        imgSrc: "juicyblt.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%  
            Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.brownrice, amount: 2 },
            { item: i.poultryegg, amount: 2 }
        ],
        icons: [
            "fireDEF"
        ]
    },
    {
        name: 'Salmon Sashimi',
        imgSrc: "salmonsashimi.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Frost Attack +2%  
            Frost Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.lakebass, amount: 1 }
        ],
        icons: [
            "iceATK"
        ]
    },
    {
        name: 'Snail Baked Rice',
        imgSrc: "snailbakedrice.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Resistance +15%  
            Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.carrionsnail, amount: 1 },
            { item: i.rice, amount: 2 }
        ],
        icons: [
            "physDEF"
        ]
    },
    {
        name: 'Aloe Yogurt',
        imgSrc: "aloeverayogurt.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.aloevera, amount: 1 },
            { item: i.honey, amount: 1 },
            { item: i.milk, amount: 2 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Rose Tea',
        imgSrc: "rosetea.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** endurance  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.honey, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Radish Soup',
        imgSrc: "radishsoup.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** endurance  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.radish, amount: 1 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
    {
        name: 'Rose Bread',
        imgSrc: "rosebread.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Volt Resistance +15%**  
            **Volt Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.rosepetals, amount: 1 },
            { item: i.brownrice, amount: 2 }
        ],
        icons: [
            "voltDEF"
        ]
    },
    {
        name: 'Chicken Soup',
        imgSrc: "chickennoodlesoup.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Attack +2%**  
            **Physical Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.poultrymeat, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ],
        icons: [
            "physATK"
        ]
    },
    {
        name: 'Spicy BBQ Noodles',
        imgSrc: "spicyporknoodles.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Attack +2%**  
            **Flame Attack +150**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.fattycut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.homigrain, amount: 2 }
        ],
        icons: [
            "fireATK"
        ]
    },
    {
        name: 'Grilled Combo Plate',
        imgSrc: "barbecueplatter.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Flame Resistance +15%**  
            **Flame Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.primecut, amount: 1 },
            { item: i.pepper, amount: 1 },
            { item: i.fleshytail, amount: 1 }
        ],
        icons: [
            "fireDEF"
        ]
    },
    {
        name: 'Radish and Pork Chop Soup',
        imgSrc: "radishribsoup.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            **Physical Resistance +15%**  
            **Physical Resistance +675**  
            Duration **1200** sec`,
        ingredients: [
            { item: i.radish, amount: 1 },
            { item: i.ribs, amount: 1 }
        ],
        icons: [
            "physDEF"
        ]
    },
    {
        name: 'Crispy Lard Gourd',
        imgSrc: "crispylardgourd.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **20** satiety  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.lardgourd, amount: 1 }
        ],
        icons: [
            "health"
        ]
    },
    {
        name: 'Spicy Lard Gourd Strip',
        imgSrc: "spicylardgourdsticks.webp",
        
        rarity: 4,
        stars: 2,
        effect: 
            `Recovers **800** endurance  
            Recovers **20% + 60,000** HP`,
        ingredients: [
            { item: i.lardgourd, amount: 1 },
            { item: i.pepper, amount: 2 }
        ],
        icons: [
            "health",
            "endurance"
        ]
    },
]

export default recipes;