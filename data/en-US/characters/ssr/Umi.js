const umi = {
    name: "Umi",
    uri: "umi",
    imgSrc: "umi.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 27,
                start: "1 Nov 2022",
                end: "20 Nov 2022",
                duration: "19d",
                week: "48~51"
            }
        ]
    },
    weapon: {
        name: "Mobius",
        element: "physical",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "14.00"],
        charge: ["A", "9.00"],
        materials: ["physical", "red", "black"],
        bonusEffect: {
            effect1: {
                title: "Physical Reaction",
                description: 
                    `Increase physical ATK by **20%** and physical resistance by **40%**. Activate by equipping **2** or more physical weapons. This set effect also works with weapons in the off-hand slot. Effect does not stack with Physical Resonance.`
            }
        },
        advancement: {
            star1: 
                `When entering Magic Show, gain Mind Puppet, which increases Mobius' physical damage buff to **60%**. During Magic Show, recover **2%** HP and **10** weapon charge every second.`,

            star2: "Increase the current weapon's base ATK growth by **16%**.",

            star3: 
                `End Magic Show early to apply continuous AoE damage that lasts for **13** seconds, reduce Mobius' skill cooldown, and temporarily gain **50%** increased physical damage. If Magic Show's remaining duration is **13** seconds or longer before being cancelled, gain **200** weapon charge.  
                &nbsp;  
                The longer the remaining duration of Magic Show before being cancelled, the stronger the buffs. 
                The AoE deals up to **400%** damage per hit (cancel when duration > 13 seconds). Skill cooldown can be reduced by a maximum of **13** seconds. The physical damage buff's duration can be extended up to **20** seconds (this effect does not apply to Mobius).`,

            star4: "Increase the current weapon's base ATK growth by **32%**.",

            star5: 
                `When switching to Mobius, gain **30** points of Preheat Value, cooldown for **17** seconds. When entering Magic State, deal **840%** of ATK as AoE damage to nearby enemies, reducing their physical resistance by **10%** for **20** seconds.`,

            star6: 
                `During Magic Show, Mobius gains an additional whip. Normal attacks and dodge attacks will have a follow up hit, dealing **130%** of ATK. The additional hit is not considered a normal attack.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, use Mobius to attack 5 times in a row. The shatter of this skill is increased by an additional **50%**.`,
                    breakdown: [
                        `Deal damage equal to **76.9%** of ATK + **4** to the target and knock them back.`,
                        `Deal damage equal to **84.4%** of ATK + **4** to the target and knock them back.`,
                        `Deal damage equal to **112.1%** of ATK + **6** to the target and knock them down.`,
                        `Deal damage equal to **105.5%** of ATK + **6** to the target and **suspend** them.`,
                        `Deal damage equal to **265.1%** of ATK + **14** to the target and **launch** them.`
                    ]
                },
                {
                    name: "Volition Combo",
                    input: ["Jump", "Attack x5"],
                    description: `While in the air, tap normal attack to perform up to 5 attacks in the air, consuming stamina.`,
                    breakdown: [
                        `Deal damage equal to **46%** of ATK + **2** to the target.`,
                        `Deal damage equal to **66.5%** of ATK + **4** to the target.`,
                        `Deal damage equal to **88.4%** of ATK + **5** to the target.`,
                        `Deal damage equal to **88.8%** of ATK + **5** to the target.`,
                        `Deal damage equal to **260.5%** of ATK + **14** to the target.`
                    ]
                },
                {
                    name: "Surprise Attack",
                    input: ["Attack", "hold:Attack"],
                    description: `When using basic attacks on the ground, press and hold the basic attack to trigger surprises aimed at the locked on target and pull in surrounding targets. On small targets deal **105%** of ATK + **6** damage, and on large targets deal **85.5%** of ATK + **5** damage. The shatter of this skill is increased by an additional **50%**.`
                },
                {
                    name: "Stage Change",
                    input: ["Jump", "hold:Attack"],
                    description: `While airborne press and hold the basic attack button to quickly drop and deal **121.5%** of ATK + **6** damage when landing..`
                },
                {
                    name: "Close-Up Magic",
                    input: ["hold:Attack"],
                    description: `While on the ground, press and hold the basic attack button to build power, and release to engage the locked on target and pull in surrounding targets. On small targets deal **105%** of ATK + **6**, and on large targets deal **85.5%** of ATK + **5**. The shatter of this skill is increased by an additional **50%**.`
                },
            ],
            dodge: [
                {
                    name: "Steal the Day",
                    input: ["Dodge", "Attack"],
                    description: 
                        `After dodging tap the basic attack button to trigger Steal the Day.  
                        Deal **187.2%** of ATK + **10** damage to targets. The shatter of this skill is increased by an additional **50%**.`
                },
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, cooldown 15 seconds, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                }
            ],
            skill: [
                {
                    name: "Magic Time",
                    description:
                        `Dealing damage with any weapon will build **Preheat Value** (cooldown **0.1** sec). Physical weapons can accumulate **3** points at a time, and other elemental weapons can accumulate **1.5** points at a time.  **Preheat Value** will be displayed on the **Magic Meter** and maxes out at **100* points. When entering battle, instantly gain **100** points of **Preheat Value**.  
                        &nbsp;  
                        When the **Magic Meter** reaches **100** points, using the skill will group enemies and deal **950%** of ATK + **50** damage to them, temporarily gain invincibility during the skill animation  and reduce the movement speed of affected targets (effects do not apply in Apex League or the Critical Abyss). Afterwards, gain the effect **Magic Show** for **18** seconds, continuously consuming **Preheat Value** and replacing the skill button with a Deck Cut. Cooldown **30** seconds.  
                        &nbsp;  
                        During the **Magic Show**, randomly gain either a **Spades** or **Hearts** card every **2** seconds. You can press the skill button to cut the deck and change which card you will receive. Based on the card, the corresponding **Card Magic** will automatically activate, cooldown **3.8** seconds.  
                        &nbsp;  
                        During the **Magic Show**, you are considered to have a shield and will not replenish **Magic Meter**. Mobius' physical damage is increased by **60%** and shatter by **20%**.  
                        &nbsp;  
                        Different combinations of playing cards can activate different **Card Magic**.  
                        Hearts + Spades grants *Mind Puppet*.  
                        Hearts + Hearts grants *Contradiction Erosion*.  
                        Spades + Spades grants *Card Swept*.  
                        Switching to other weapons or dying will remove the **Magic Show** state.  
                        When **Magic Show** ends, gain immunity to control effects for **20** seconds. If it ends naturally, deal an additional **1200%** of ATK to nearby targets.`
                },
                {
                    name: "Mind Puppet",
                    description:
                        `Conjure a group of bats from a top hat and guards and strengthen yourself. During **Magic Show**, Mobius' physical damage increases by **20%** and only **40%** of received damaged will be deducted from your health immediately. The remaining **60%** will be deducted after **Magic Show** ends over a **10** second period (will only apply when not using Fortitude Resonance).`
                },
                {
                    name: "Contradiction Erosion",
                    description:
                        `Immediately restores **15%** HP, and drops flowers of erosion on up to **7** targets within range, dealing **360%** of ATK damage to the target every seconsd for **3** seconds.`
                },
                {
                    name: "Card Swept",
                    description:
                        `Create a hurricane of cards at the target position dealing up to **12** hits to the target, totaling **1450%** of ATK.`
                },
            ],
            discharge: [
                {
                    name: "Fragrant Tea",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, switch to this weapon to **clear all debuffs from the user** and leave behind a fragrance that grants you temporary invincibility (does not apply in Apex League and Critical Abyss). When the fragrance settles, deal **316.2%** of ATK + **17** damage to targets, and after a brief delay deal **737.8%** of ATK + **39** damage and **suspend** targets."
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Umi",
                pieces: 4,
                description: "Extremely high damage set effects with permanent uptime."
            },
            {
                name: "Shiro",
                pieces: 4,
                description: "Great set effects for both shatter and consistent damage increase. Use 4 set for quick fights, otherwise pair with 2-set Samir or 2-set Crow."
            },
            {
                name: "Lyra",
                pieces: 4,
                description: "This set should ideally be used on Lyra's Vespers, but can be used on Umi's Mobius as well for some utility and okay damage."
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
        set2: `When dealing physical damage, final damage is increased by **8%/9%/10%/11%** and physical damage is increased by an additional **4%/4.5%/5%/5.5% for **3** seconds. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`,

        set4: `When equipped with **2** or more physical weapons, final damage is increased by **24%/26%/29%/32%**. This effect works in the background, and if multiple sets are used, the highest star set will take effect.`
    },

    awakening: {
        trait1200: `Every time Umi uses **Magic Time**, increase final damage by **12%** for **30** seconds (can not be stacked).`,

        trait4000: `Every time Umi uses **Magic Time**, increase final damage by **23%** for **30** seconds (can not be stacked).`,

        giftCategories: ['toys', 'vera'],

        gifts: [
            [60, "princeTataFigure", "linyeFigure"],
            [30, "strangeFragment", "bunnyDoll"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '162 cm',
        birthplace: 'Mirroria',
        horoscope: 'Libra',
        birthday: '20 October',
        voiceActors: {
            jp: "",
            en: "",
            cn: "刘雯"
        }
    }
}

export default umi;