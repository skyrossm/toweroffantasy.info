import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import { getAvatarData, getAvatarIds } from "../../../lib/cosmetics";
import CNTag from "../../../components/CNTag";
import { Modal } from "../../../components/Modal";
import Ads from "../../../components/Ads";

export async function getStaticProps({ params }) {
    const item = await getAvatarData(params.id);
    return {
        props: {
            item,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAvatarIds();
    return {
        paths,
        fallback: false,
    };
}

export default function AvatarModal({ item }) {

    return (
        <>
            <Head>
                <title>{setPageTitle(item.name)}</title>
                <meta name="description" content={`Information about the avatar ${item.name} in Tower of Fantasy.`} />
            </Head>

            <Modal item={item}>
                <div className="modal-body items">
                    {item.chinaOnly && <CNTag name={item.name} />}

                    <Ads unit="lb1" />

                    <section className="w-75ch">
                        <h3 className="anchor">How to get {item.name}</h3>
                        {item.source}
                    </section>

                    <Ads unit="lb3" />
                    <Ads unit="mpu1" />

                </div>
            </Modal>
        </>
    )
}
