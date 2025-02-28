export const armorStatRanges = {
    name: "Armor RNG Stat Ranges",
    uri: "armor-rng-stat-ranges",
    date: "4 November 2022",
    description: "The minimum and maximum stat increases you can get when advancing armor in Tower of Fantasy.",
    type: "referential",
    author: ["Afrodiy#9769", "Sova#0618"],
    text:
        <>
            <section>
                <blockquote>
                    The values below only apply to the Global version.
                </blockquote>
                <p>The following armor pieces can have <span className="turquoise">percentage stats:</span></p>
                <ol>
                    <li>Combat Engine (Ele ATK, Ele DMG, HP, Ele Resist)</li>
                    <li>Microreactor (Ele ATK, HP, Ele Resist)</li>
                    <li>Tactics Eyepiece (Ele ATK, Crit, HP, Ele Resist)</li>
                    <li>Exoskeleton (Ele ATK, Ele DMG, HP, Ele Resist)</li>
                </ol>
                <p>Percentage stats use fixed values. Values are currently not included for Rare and lower pieces.</p>
            </section>

            <section>
                <h2 style={{color: "var(--color-tier-s)"}}>Legendary</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Initial Value</th>
                            <th>Min Upgrade</th>
                            <th>Max Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ATK</td>
                            <td>52</td>
                            <td>+93</td>
                            <td>+234</td>
                        </tr>
                        <tr>
                            <td>Elemental ATK</td>
                            <td>69</td>
                            <td>+125</td>
                            <td>+312</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>258</td>
                            <td>+468</td>
                            <td>+1169</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>4125</td>
                            <td>+7480</td>
                            <td>+18700</td>
                        </tr>
                        <tr>
                            <td>All Resist</td>
                            <td>64</td>
                            <td>+117</td>
                            <td>+292</td>
                        </tr>
                        <tr>
                            <td>Elemental Resist</td>
                            <td>215</td>
                            <td>+390</td>
                            <td>+974</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental ATK (%)</td>
                            <td>1.26%</td>
                            <td>+1.44%</td>
                            <td>+1.44%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental DMG (%)</td>
                            <td>0.65%</td>
                            <td>+0.72%</td>
                            <td>+0.72%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Crit (%)</td>
                            <td>1.05%</td>
                            <td>+1.19%</td>
                            <td>+1.19%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>HP (%)</td>
                            <td>0.94%</td>
                            <td>+1.08%</td>
                            <td>+1.08%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental Resist (%)</td>
                            <td>7.87%</td>
                            <td>+9%</td>
                            <td>+9%</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 style={{color: "var(--color-tier-a)"}}>Epic</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Initial Value</th>
                            <th>Min Upgrade</th>
                            <th>Max Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ATK</td>
                            <td>29</td>
                            <td>+40</td>
                            <td>+100</td>
                        </tr>
                        <tr>
                            <td>Elemental ATK</td>
                            <td>39</td>
                            <td>+53</td>
                            <td>+133</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>146</td>
                            <td>+199</td>
                            <td>+498</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>2343</td>
                            <td>+3186</td>
                            <td>+7966</td>
                        </tr>
                        <tr>
                            <td>All Resist</td>
                            <td>37</td>
                            <td>+50</td>
                            <td>+124</td>
                        </tr>
                        <tr>
                            <td>Elemental Resist</td>
                            <td>122</td>
                            <td>+166</td>
                            <td>+415</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental ATK (%)</td>
                            <td>0.54%</td>
                            <td>+0.61%</td>
                            <td>+0.61%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental DMG (%)</td>
                            <td>0.28%</td>
                            <td>+0.31%</td>
                            <td>+0.31%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Crit (%)</td>
                            <td>0.45%</td>
                            <td>+0.5%</td>
                            <td>+0.5%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>HP (%)</td>
                            <td>0.4%</td>
                            <td>+0.46%</td>
                            <td>+0.46%</td>
                        </tr>
                        <tr className="turquoise">
                            <td>Elemental Resist (%)</td>
                            <td>3.35%</td>
                            <td>+3.83%</td>
                            <td>+3.83%</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 style={{color: "var(--color-tier-b)"}}>Rare</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Initial Value</th>
                            <th>Min Upgrade</th>
                            <th>Max Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ATK</td>
                            <td>15</td>
                            <td>+13</td>
                            <td>+33</td>
                        </tr>
                        <tr>
                            <td>Elemental ATK</td>
                            <td>20</td>
                            <td>+18</td>
                            <td>+44</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>73</td>
                            <td>+66</td>
                            <td>+166</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>1171</td>
                            <td>+1062</td>
                            <td>+2655</td>
                        </tr>
                        <tr>
                            <td>All Resist</td>
                            <td>18</td>
                            <td>+17</td>
                            <td>+41</td>
                        </tr>
                        <tr>
                            <td>Elemental Resist</td>
                            <td>122</td>
                            <td>+166</td>
                            <td>+415</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 style={{color: "var(--color-tier-c)"}}>Common</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Initial Value</th>
                            <th>Min Upgrade</th>
                            <th>Max Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ATK</td>
                            <td>7</td>
                            <td>+3</td>
                            <td>+10</td>
                        </tr>
                        <tr>
                            <td>Elemental ATK</td>
                            <td>10</td>
                            <td>+4</td>
                            <td>+13</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>37</td>
                            <td>+17</td>
                            <td>+50</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>568</td>
                            <td>+266</td>
                            <td>+797</td>
                        </tr>
                        <tr>
                            <td>All Resist</td>
                            <td>9</td>
                            <td>+4</td>
                            <td>+12</td>
                        </tr>
                        <tr>
                            <td>Elemental Resist</td>
                            <td>31</td>
                            <td>+14</td>
                            <td>+41</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Pure</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Stat</th>
                            <th>Initial Value</th>
                            <th>Min Upgrade</th>
                            <th>Max Upgrade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ATK</td>
                            <td>4</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Elemental ATK</td>
                            <td>5</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Crit</td>
                            <td>18</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>293</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>All Resist</td>
                            <td>5</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Elemental Resist</td>
                            <td>15</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <p>
                    <a href="https://docs.google.com/spreadsheets/d/1lRhBgB7M7xqqBGdMCvmW2Bwnu1OAvasIN6ukLTgOoCo/edit#gid=883187120">Original Source</a>
                </p>
            </section>
        </>
}