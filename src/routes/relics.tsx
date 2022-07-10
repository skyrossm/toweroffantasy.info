import { ModalMenu, Modal } from "../components/Modal";
import { RELICS } from "../data/en-US/relics/relicList";
import { removeSpace, getItemByName } from "../utils/stringHelper";


function Relics() {
    const bgImg = "Alternate Destiny";
    return (
        <>
            <img className="bg-img" src={`/images/relics/${removeSpace(bgImg)}.png`} alt={bgImg} />
            <header>
                <h1>Relics</h1>
                <p>
                    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Relics</h2>
                <ModalMenu type="relics" listContent={RELICS.filter(relic => relic.rarity === "SSR")} />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Relics</h2>
                <ModalMenu type="relics" listContent={RELICS.filter(relic => relic.rarity === "SR")} />
            </section>

        </>
    );
}

export default Relics;