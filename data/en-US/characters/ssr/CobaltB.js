const cobalt = {
    name: "Cobalt-B",
    uri: "cobalt-b",
    imgSrc: "cobalt-b.webp",
    rarity: "SSR",
    chinaOnly: false,
    banners: {
        cn: [
            {
                bannerNo: 2,
                start: "8 Jan 2022",
                end: "26 Jan 2022",
                duration: "18d",
                week: "4~7"
            },
            {
                bannerNo: 8,
                subtext: "Standard afterwards",
                start: "13 Apr 2022",
                end: "27 Apr 2022",
                duration: "14d",
                week: "18~20",
                standardAfterwards: true
            }
        ],
        glob: [
            {
                bannerNo: 4,
                start: "5 Oct 2022",
                end: "26 Oct 2022",
                duration: "21d",
                week: "9~12"
            }
        ]
    },
    weapon: {
        name: "Flaming Revolver",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "12.50"],
        charge: ["A", "10.00"],
        materials: ["flame", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description:
                    `Increase flame ATK by **15%** and flame resistance by **25%**. Activate by equipping **2** or more flame weapons. This set effect also works with weapons in the off-hand slot. This effect does not stack repeatedly.`
            }
        },
        advancement: {
            star1: "Each round of Barrage deals additional damage equal to **2%** of the target's current HP (cannot exceed **180%** of ATK).",

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 'Heavy Bombardment branch skill and Close Quarters dodge attack inflict *Ion Scorch* on targets that are already burned, dealing flame damage equal to **40%** of ATK every second for **10** seconds.',

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: "The damage from *Ion Scorch* increases to **60%** of ATK. Successful attacks with any weapon's dodge skill will refresh the duration of *Ion Scorch*.",

            star6: "*Barrage* inflicts burn for **15** seconds. Successful attacks with any weapon's dodge skills reduce cooldown of *Barrage* by **4** seconds. This effect has a **1.5**-second cooldown."
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `On the ground, use normal attack button to launch 5 attacks in a row.`,
                    breakdown: [
                        'Deal damage equal to **52.3%** of ATK + **3**.',
                        'Deal damage equal to **75.6%** of ATK + **4**.',
                        'Deal damage equal to **94.5%** of ATK + **5**.',
                        'Deal damage equal to **142.8%** of ATK + **8**.',
                        'Deal damage equal to **137.8%** of ATK + **7**.'
                    ]
                },
                {
                    name: "Charged Shot",
                    input: ["hold:Attack"],
                    description: `Tap and hold normal attack to charge a shot and release to fire rounds, dealing **95.4%** of ATK + **5** damage, plus an explosion 3 seconds later (or if the target dies), dealing **23.9%** of ATK as damage to nearby enemies. Each time the target is dealt damage before the explosion (up to **4** times), AOE is doubled and damage is increased.`,
                },
                {
                    name: "Jumping Blast",
                    input: ["Jump", "Attack"],
                    description:
                        `While airborne or after jumping once, use an aerial attack.  
                        Toss a bomb that deals damage equal to **90.8%** of ATK + **5** to enemies in a circle ahead, knocking them back a certain distance.  
                        Consumes **250** endurance.`,
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump", "Jump", "Attack"],
                    description:
                        `After double-jumping, use a jump attack in the air.  
                        Fire an Omnium beam downward. The beam then sweeps forward, dealing damage equal to **33.8%** of ATK + **2**.`,
                },
                {
                    name: "Heavy Bombardment",
                    input: ["Attack", "hold:Attack"],
                    description: `Hold attack button during a normal attack to unleash Suppressing Fire in front, dealing **102%** of ATK + **5** AOE damage to enemies.`,
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Close Quarters",
                    input: ["Dodge", "Attack"],
                    description: `Use a normal attack right after dodging to trigger Close Quarters. Deal damage equal to **156.1%** of ATK + **8** to targets in a frontal cone area.`,
                }
            ],
            skill: [
                {
                    name: "Barrage",
                    description:
                        `Constant fire in a frontal cone area to deal **666%** of ATK + **35** damage.  
                        Cooldown: **60** seconds.`,
                }
            ],
            discharge: [
                {
                    name: "Explosive Rain",
                    description: `When ***weapon charge*** is full or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder** and unleashes **3** grenades forward, dealing **570%** of ATK + **30** AOE damage and **launching** the target.`,
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Samir",
                pieces: 2,
                description: "High damage buffing set useful for main DPS weapons."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Increase damage against debuffed targets by **14%/16%/18%/20%**.`,

        set4: `Restore **1** dodge attempt every **3** dodges. Dodge skills inflict burn upon hit, dealing damage equal to **24%/30%/36%/42%** of ATK every 0.5 seconds for **4** seconds.`
    },

    awakening: {
        trait1200: `After Cobalt-B uses her discharge skill, restore a random amount of weapon charge between **50** to **120** points.`,

        trait4000: `After Cobalt-B uses her discharge skill, restore a random amount of weapon charge between **90** to **180** points.`,

        giftCategories: ['metalware', 'collectibles', 'limited-edition'],

        gifts: [
            [80, "kitchenware", "goldCoin"],
            [60, "seal", "tataCards", "foxFigure", "catFigure", "bearFigure", "tataFigure", "present", "psp", "linyeFigure", "pearl"],
            [30, "necklace", "toolbox", "strangeFragment"],
            [15, "dumbbells", "snackBox", "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '157 cm',
        birthplace: 'Crown',
        horoscope: 'Cancer',
        birthday: '26 Jun',
        voiceActors: {
            jp: "川澄綾子 (Ayako Kawasumi)",
            en: "Stephanie Kerbis",
            cn: "陈睿婕"
        }
    },

    cnData: {
        weapon: {
            shatter: ["B", "6.50"],
            charge: ["A", "10.00"],
            bonusEffect: {
                effect1: {
                    title: "",
                    description: ``
                }
            },
            advancement: {
                star1: "<abbr title='China Exclusive'></abbr> Each round of Barrage deals additional damage equal to **2%** of the target's current HP (cannot exceed **200%** of ATK).",

                star3: "<abbr title='China Exclusive'></abbr> Heavy Bombardment branch skill and Close Quarters dodge attack inflict *Ion Scorch* on targets that are already burned, dealing flame damage equal to **90%** of ATK every second for **10** seconds.",

                star5: "<abbr title='China Exclusive'></abbr> The damage from *Ion Scorch* increases to **140%** of ATK. Successful attacks with any weapon's dodge skill will refresh the duration of *Ion Scorch*.",

                star6: "<abbr title='China Exclusive'></abbr> *Barrage* inflicts burn for **15** seconds. Successful attacks with any weapon's dodge skills reduce cooldown of *Barrage* by **4** seconds. This effect has a **1.5**-second cooldown. Continuous damage from dodge skills can also trigger cooldown reduction."
            },
            abilities: {
                normal: [
                    {
                        name: "Normal Attack",
                        input: ["Attack x5"],
                        description: `On the ground, use normal attack button to launch 5 attacks in a row.`,
                        breakdown: [
                            'Deal damage equal to **54.9%** of ATK + **3**.',
                            'Deal damage equal to **79.2%** of ATK + **4**.',
                            'Deal damage equal to **99.2%** of ATK + **5**.',
                            'Deal damage equal to **149.7%** of ATK + **8**.',
                            'Deal damage equal to **144.7%** of ATK + **7**.'
                        ]
                    },
                    {
                        name: "Charged Shot",
                        input: ["hold:Attack"],
                        description: `Tap and hold normal attack to charge a shot and release to fire rounds, dealing **100.2%** of ATK + **5** damage, plus an explosion 3 seconds later (or if the target dies), dealing **25%** of ATK as damage to nearby enemies. Each time the target is dealt damage before the explosion (up to **4** times), AOE is doubled and damage is increased.`,
                    },
                    {
                        name: "Jumping Blast",
                        input: ["Jump", "Attack"],
                        description:
                            `While airborne or after jumping once, use an aerial attack.  
                            Toss a bomb that deals damage equal to **95.3%** of ATK + **5** to enemies in a circle ahead, knocking them back a certain distance.  
                            Consumes **250** endurance.`,
                    },
                    {
                        name: "Aerial Discharge",
                        input: ["Jump", "Jump", "Attack"],
                        description:
                            `After double-jumping, use a jump attack in the air.  
                            Fire an Omnium beam downward. The beam then sweeps forward, dealing damage equal to **35.5%** of ATK + **2**.`,
                    },
                    {
                        name: "Heavy Bombardment",
                        input: ["Attack", "hold:Attack"],
                        description: `Hold attack button during a normal attack to unleash Suppressing Fire in front, dealing **107.2%** of ATK + **6** AOE damage to enemies.`,
                    }
                ],
                dodge: [
                    {
                        name: "Dodge",
                        description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                    },
                    {
                        name: "Close Quarters",
                        input: ["Dodge", "Attack"],
                        description: `Use a normal attack right after dodging to trigger Close Quarters. Deal damage equal to **163.9%** of ATK + **9** to targets in a frontal cone area.`,
                    }
                ],
                skill: [
                    {
                        name: "Barrage",
                        description:
                            `Constant fire in a frontal cone area to deal **700%** of ATK + **37** damage.  
                            Cooldown: **60** seconds.`,
                    }
                ],
                discharge: [
                    {
                        name: "Explosive Rain",
                        description: `When ***weapon charge*** is full or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder** and unleashes **3** grenades forward, dealing **598.5%** of ATK + **32** AOE damage and **launching** the target.`,
                    }
                ]
            },
            recommendedMatrices: [
                {
                    name: "Ruby",
                    pieces: 4,
                    description: "Great set for boosting Flame ATK and damage, and providing a shield for added utility. Alternatively, the 2-piece set of Ruby matrices perform well too."
                },
                {
                    name: "Cobalt-B",
                    pieces: 2,
                    description: "Useful for constantly reapplying the Ionic Burn debuff on enemies."
                },
                {
                    name: "Samir",
                    pieces: 2,
                    description: "High damage buffing set useful for main DPS weapons."
                },
                {
                    name: "Crow",
                    pieces: 2,
                    description: "High damage matrix set when you have high crit rate."
                },
                {
                    name: "Sobek",
                    pieces: 3,
                    description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
                }
            ]
        },

        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> Restore **1** dodge attempt every **4** dodges. Dodge attacks add burn to the target, dealing **13%/17%/21%/25%** attack damage per second for **10** seconds.`,

            set4: `<abbr title='China Exclusive'></abbr> Increase damage against debuffed targets by **13%/17%/21%/25%**.`,
        }
    }
}

export default cobalt;