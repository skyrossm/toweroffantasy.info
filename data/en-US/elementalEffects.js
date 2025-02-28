const elementalEffects = {
    flame: {
        title: "Flame",
        values: ["", "58.00%"], // SR and SSR
        description: function(rarity) {
            return(
                `Fully charged weapons will set the target on fire for **8** seconds with the next attack, causing ongoing damage of **${this.values[rarity]}** of ATK every second. Ignited targets receive **50%** efficacy from healing.`
            )
        },
    },
    ice: {
        title: "Ice Shell",
        values: ["111.00%", "151.00%"], // SR and SSR
        description: function(rarity) {
            return(
                `Fully charged weapons will **freeze** the target for **2** seconds and leave it frostbitten for **6** seconds. Breaking the ice shell causes additional damage equal to **${this.values[rarity]}** of ATK. While frostbitten, the target's weapon charge rate is reduced by **50%**.`
            )
        },
    },
    volt: {
        title: "Volt",
        values: ["106.00%", "144.00%"], // SR and SSR
        description: function(rarity) {
            return(
                `When the weapon is fully charged, the next attack will **paralyze** targets for **1** second and electrify them for **6** seconds, negating all buffs and dealing damage equal to **${this.values[rarity]}** of ATK. Targets can't receive any buffs for the next **6** seconds.`
            )
        },
    },
    physical: {
        title: "Grievous",
        values: ["100.00%", "137.00%"], // SR and SSR
        description: function(rarity) {
            return(
                `Fully charged weapons will inflict damage equal to **${this.values[rarity]}** of ATK with the next attack, and make the target grievous for **7** seconds, taking **20%** extra damage.`
            )
        },
    },
    altered: {
        title: "Altered",
        values: ["", "560.00%"], // SR and SSR
        description: function(rarity) {
            return(
                `When the weapon is fully charged, the next attack will mark the target, causing an explosion after **5** seconds. Additionally inflict **25%** of all damage received by the target while the mark exists, up to a total of **560%** of your ATK. Only 1 mark can be added on a target at a time.`
            )
        }
    }
}

export default elementalEffects;