import { ModalMenu } from "../../components/Modal";
import { MOUNTS } from "../../data/en-US/mounts/mountList";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import Ads from "../../components/Ads";

function Mounts() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Mounts')}</title>
                <meta name="description" content="How to obtain all the mounts in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-2.webp" alt="Background Image" />
            <header>
                <h1>Mounts</h1>
                <p>
                    All mounts move at the same speed. Multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels.
                </p>
            </header>

            <Ads unit="lb1" />
            
            <section>
                <h2>Mount List</h2>
                <ModalMenu list={MOUNTS} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
        </>
    );
}

export default Mounts;