const Feature = () => {
    return ( 
        <article className="features">
            <table className="features__table">
                <thead className="features__thead">
                    <tr>
                        <th className="features__th" colspan="3">Website Features</th>
                    </tr>
                    <tr>
                        <th className="features__th" colspan="1">Name</th>
                        <th className="features__th" colspan="1">Availability</th>
                        <th className="features__th" colspan="1">Description</th>
                    </tr>
                </thead>
                <tbody className="features__tbody">
                    <tr>
                        <td className="features__td">TTRPG management</td>
                        <td className="features__td">Partial</td>
                        <td className="features__td">Full management system for all TTRPG (Sheets, Lore, notes etc)</td>
                    </tr>
                    <tr>
                        <td className="features__name">Watch</td>
                        <td className="features__availability">N/A</td>
                        <td className="features__desc">Easily get the time in all timezone, set timers.</td>
                    </tr>
                    <tr>
                        <td className="features__name">Schedule</td>
                        <td className="features__availability">N/A</td>
                        <td className="features__desc">Full schedule management/Cross schedule checks</td>
                    </tr>
                    <tr>
                        <td className="features__name">Gallery</td>
                        <td className="features__availability">N/A</td>
                        <td className="features__desc">Full gallery/Ability to post pictures</td>
                    </tr>
                    <tr>
                        <td className="features__name">Games</td>
                        <td className="features__availability">N/A</td>
                        <td className="features__desc">Ability to post game reviews/polls about what people want to play.</td>
                    </tr>
                    <tr>
                        <td className="features__name">Forum</td>
                        <td className="features__availability">N/A</td>
                        <td className="features__desc">Full Forum with logins/posting features</td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
}
 
export default Feature;