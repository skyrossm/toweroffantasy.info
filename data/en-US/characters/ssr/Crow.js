const crow = {
    name: "Crow",
    uri: "crow",
    imgSrc: "crow.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Thunderblades",
        element: "volt",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "6.00"],
        charge: ["A", "8.00"],
        materials: ["volt", "red", "blue"],
        advancement: {
            star1: `Attacking targets from behind increases crit rate of all dual blades attacks by **40%**. Backstabbing an electrified target increases crit rate by **100%** and crit damage by **30%**.`,
           
            star2: `Increase the current weapon's base ATK growth by **16%**.`,
           
            star3: `Increase damage by **30%** to targets with less than **60%** HP.`,
           
            star4: `Increase the current weapon's base HP growth by **32%**.`,
           
            star5: `Triggering a Back Attack grants a 100% crit chance for the next **4** seconds and increases crit damage by **50%**. Cooldown: **10** seconds.`,
            
            star6: `After using a skill, increase volt damage dealt to the target by **20%** for **20** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Twin Blades",
                    input: ["Attack x5"],
                    type: "normal",
                    description: `While on the ground, swing the blades to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **60.1%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **73%** of ATK + **4** and knock the target back a short distance.',
                        'Deal damage equal to **90.9%** of ATK + **5** and knock the target back a short distance.',
                        'Deal damage equal to **96.8%** of ATK + **5** and knock the target back a short distance.',
                        'Deal damage equal to **202.2%** of ATK + **11** and knock the target back a short distance.'
                    ]
                },
                {
                    name: "Sky Flurry",
                    input: ["Jump","Attack x4"],
                    type: "normal",
                    description: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **65.6%** of ATK + **3**.',
                        'Deal damage equal to **38.4%** of ATK + **2**.',
                        'Deal damage equal to **92%** of ATK + **5**.',
                        'Deal damage equal to **138%** of ATK + **7**.'
                    ]
                },
                {
                    name: "Rapid Lunge",
                    input: ["Attack x3","hold:Attack"],
                    description: `After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them **into the air**, dealing total damage equal to **116.8%** of ATK + **6**.`,
                },
                {
                    name: "Spiral Drive",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to **42%** of ATK + **2** each hit.`,
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
                }
            ],
            dodge: [
                {
                    name: "Flying Blades",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target **5** times, each dealing damage equal to **26.4%** of ATK + **1**. Grant immunity to control effects while phasing.`,
                },
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the red area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                }
            ],
            skill: [
                {
                    name: "Returning Blades",
                    description: `Fires 6 returning blades, each dealing damage equal to **52.8%** of ATK + **3**. Gains **hyperbody** for up to **8** seconds, and the effect is removed when the blades return. **45**-second cooldown.`,
                }
            ],
            discharge: [
                {
                    name: "Orbiting Blades",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and blink to the target location upon switching to this weapon and attack, dealing damage equal to **86.9%** of ATK + **5** and electrocuting the target (after **5** seconds, deals volt damage equal to **15%** of damage dealt, up to **350%** of the Wanderer's ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to **65.2%** of ATK + **3** to those that touch them.`,
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/HYGcXjYwSJc?start=6",
        recommendedMatrix: {
            set2: ["samir", "claudia", "crow"],
            set3: ["sobek"]
        },
        recommendedMatrices: [
            {
                name: "Samir",
                pieces: 2,
                description: "Thunderblades are capable of keeping up the damage buff when used correctly."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "At high crit rate, Crow's 2 set is the second best choice for damage."
            },
            {
                name: "Shiro",
                pieces: 2,
                description: "Not ideal, but can be used for the damage increase until you get one of the more recommended sets."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Increase crit damage to targets with less than **60%** HP by **24%/30%/36%/42%**.`,

        set4: `Crits deal additional damage over time equal to **18%/22%/26%/30%** of ATK every second for **5** seconds. Does not stack.`
    },

    awakening: {
        trait1200: `When Crow is not in a team, increase damage dealt by **6%** and reduce damage received by **4%**.`,

        trait4000: `When Crow is not in a team, increase damage dealt by **10%** and reduce damage received by **6%** When Crow enters combat, increase damage dealt by **12%** for **12** seconds.`,

        giftCategories: ['everyday-items', 'figurines', 'limited-edition'],

        gifts: [
            [80, "tataCards", "tataFigure"],
            [60, "goldCoin", "catFigure", "miaFigure", "peppaFigure", "bearFigure", "psp", "linyeFigure"],
            [30, "suit", "juicePouch", "perfume", "pumpkinFigure", "androidFigure"],
            [15, "flowers", "snackBox", "scarf"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '162 cm',
        birthplace: 'Astra',
        horoscope: 'Sagittarius',
        birthday: '17 Dec',
        voiceActors: {
            jp: "岡本信彦 (Nobuhiko Okamoto)",
            en: "Casey Mongillo",
            cn: "翟巍"
        }
    },

    cnData: {
        name: "Crow (Karasuma)",
        weapon: {
            recommendedMatrices: [
                {
                    name: "Samir",
                    pieces: 2,
                    description: "Thunderblades are capable of keeping up the damage buff when used correctly."
                },
                {
                    name: "Crow",
                    pieces: 2,
                    description: "At high crit rate, Crow's 2 set is the second best choice for damage."
                },
                {
                    name: "Claudia",
                    pieces: 2,
                    description: "The most optimal DPS with Thunderblades is the Jetpack + Aerial attack spamming, thus making  Claudia's 2 set more effective than Crow's until very high crit rate."
                },
                {
                    name: "Sobek",
                    pieces: 3,
                    description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
                }
            ],
            abilities: {
                normal: [
                    {
                        name: "Twin Blades",
                        input: ["Attack x5"],
                        type: "normal",
                        description: `While on the ground, swing the blades to attack 5 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **47.2%** of ATK + **2** and knock the target back a short distance.',
                            'Deal damage equal to **57.4%** of ATK + **3** and knock the target back a short distance.',
                            'Deal damage equal to **71.4%** of ATK + **4** and knock the target back a short distance.',
                            'Deal damage equal to **76.2%** of ATK + **4** and knock the target back a short distance.',
                            'Deal damage equal to **158.7%** of ATK + **8** and knock the target back a short distance.'
                        ]
                    },
                    {
                        name: "Sky Flurry",
                        input: ["Jump","Attack x4"],
                        type: "normal",
                        description: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **51.5%** of ATK + **3**.',
                            'Deal damage equal to **30.2** of ATK + **2**.',
                            'Deal damage equal to **72.2%** of ATK + **4**.',
                            'Deal damage equal to **108.5%** of ATK + **6**.'
                        ]
                    },
                    {
                        name: "Rapid Lunge",
                        input: ["Attack x3","hold:Attack"],
                        description: `After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Strike the target and knock them **into the air**, dealing total damage equal to **91.8%** of ATK + **5**.`,
                    },
                    {
                        name: "Spiral Drive",
                        input: ["Jump","hold:Attack"],
                        description: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Spiral Drive. While falling, deal damage equal to **72.1%** of ATK + **4** each hit.`,
                    },
                    {
                        name: "Sneak Attack",
                        input: ["Crouch","Attack"],
                        description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
                    }
                ],
                dodge: [
                    {
                        name: "Flying Blades",
                        input: ["Arrow keys","Dodge","Attack"],
                        description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target **5** times, each dealing damage equal to **20.7%** of ATK + **1**. Grant immunity to control effects while phasing.`,
                    },
                    {
                        name: "Dodge",
                        description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the red area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                    }
                ],
                skill: [
                    {
                        name: "Returning Blades",
                        description: `Fires 6 returning blades, each dealing damage equal to **41.5%** of ATK + **2**. Gains **hyperbody** for up to **8** seconds, and the effect is removed when the blades return. **45**-second cooldown.`,
                    }
                ],
                discharge: [
                    {
                        name: "Orbiting Blades",
                        description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and blink to the target location upon switching to this weapon and attack, dealing damage equal to **68.3%** of ATK + **4** and electrocuting the target (after **5** seconds, deals volt damage equal to **15%** of damage dealt, up to **350%** of the Wanderer's ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to **51.2%** of ATK + **3** to those that touch them.`,
                    }
                ]
            },
        },
        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> Increase crit damage to targets with less than **60%** HP by **33%/42%/50%/58%**.`,

            set4: `<abbr title='China Exclusive'></abbr> Crits deal additional damage over time equal to **12%/15%/18%/21%** of ATK every second for **5** seconds. Does not stack.`
        }
    }
}

export default crow;
