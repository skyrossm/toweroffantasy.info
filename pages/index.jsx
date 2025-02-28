import { setPageTitle } from "../components/Layout";
import Link from 'next/link';
import { CHANGELOG } from '../data/en-US/changelog';
import Head from "next/head";
import Ads from "../components/Ads";
import { getBannerCharacters, getSortedBanners, getStandardAdditions, getNewestCharacter } from "./banners";

export default function Index() {

    const globalLatestBanner = getNewestCharacter("glob");
    const cnLatestBanner = getNewestCharacter("cn");

    return(
        <>
            <Head>
                <title>{setPageTitle('Home')}</title>
                <meta name="description" content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!" />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background" />
            <h1>Welcome to the Tower of Fantasy Index.</h1>
            
            <p>
                This site will mainly follow the <strong className="yellow">Global version</strong> of Tower of Fantasy.<br />
                Content that is exclusive to the Chinese version will be indicated with <abbr title="China Exclusive" />
            </p>

            <Ads unit="lb1" />

            <h3>Last update was on {CHANGELOG[0].date}. <Link href="/changelog"><a>See what's new</a></Link>.</h3>
            
            <blockquote className="banner-count">
                Global has had&nbsp;
                <strong>{getSortedBanners("glob").length}</strong> Banners,&nbsp;
                <strong>{getBannerCharacters("glob").length}</strong> Unique, with&nbsp;
                <strong>{getStandardAdditions("glob")}</strong> additions to the Standard Banner.<br/>
                The newest character is <Link href={`/simulacra/${globalLatestBanner.uri}`}><a>{globalLatestBanner.name}</a></Link>.
            </blockquote>

            <blockquote className="banner-count" style={{ borderColor: "#e72e37"}}>
                China has had&nbsp;
                <strong>{getSortedBanners("cn").length}</strong> Banners,&nbsp;
                <strong>{getBannerCharacters("cn").length}</strong> Unique, with&nbsp;
                <strong>{getStandardAdditions("cn")}</strong> additions to the Standard Banner.<br/>
                The newest character is <Link href={`/simulacra/${cnLatestBanner.uri}`}><a>{cnLatestBanner.name}</a></Link>.
            </blockquote>

            <p>
                For corrections, suggestions, and bug reports, use <strong className="turquoise">#guide-makers-hub</strong> on <a href="https://discord.gg/aidacafe" title="Join Aida Cafe!">Discord</a>, or contact <strong className="turquoise">Zakum#3080</strong> directly.
            </p>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />

            <hr />

            <div className="credits">
                <h4>Created by</h4>
                <span>Pyrosu, Zakum</span>

                <h4>Original contents by</h4>
                <span>Pyrosu, BakuBaku, Sera Naoki</span>

                <h4>Special Thanks</h4>
                <ul>
                    <li>Sova</li>
                    <li>Afrodiy</li>
                    <li>HungryBunny</li>
                    <li>Cytus</li>
                    <li>realEmperor</li>
                    <li>Stitch</li>
                    <li>Abyss</li>
                    <li>tiny</li>
                    <li>Gateoo</li>
                    <li>Sky</li>
                    <li>ChickenJoy</li>
                    <li>Riala</li>
                    <li>👑킹젖가슴드래곤👑</li>
                    <li>Fanatique</li>
                </ul>
                
                <p><i>Tower of Fantasy is a trademark of Hotta Studios and Perfect World Games.</i></p>
            </div>

            <Ads unit="mpu2" />
        </>
    )
}