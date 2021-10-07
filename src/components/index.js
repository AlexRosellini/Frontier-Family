const Index = () => {
    return(
        <section>
        <article className="rover">
            <div className="rover-left">
                <div className="rover-left__picture">
                    <img src="./imgs/rover.jpg" alt="Rover Art"/>
                </div>
                <div className="rover-left__subtitle">
                    <p>Potential concept art for the Rover</p>
                </div>
            </div>
            <div className="rover-right">
                <div className="rover-right__bloc">
                    <h2>Some History...</h2>
                    <p>The <span>"Rover" </span>is a concept from the TTRPG New Dawn, it is the utility vehicle used by the Silver Dawn to cross the vast
                    expanses of purgatory. As it left important memories for all of us, the utility it had for our characters will now be symbolized
                    by this website, meant to provide us with various features.
                    </p>
                </div>
                <div className="rover-right__bloc">
                    <h2>Features</h2>
                    <p>Now, to present quickly the features of this website, it is built using React, a JS framework that I need to Learn
                        for my formation. Its design is as a result meant to primarily serve as a platform where I can train myself; However it will also
                        posess several features that will streamline our various TTRPG, and assist us even in scheduling and etc; 
                    </p>
                    <p>Sadly, several of these features will be at launch, unavailable. The reasoning behind this is my current lack of skill
                        in term of Javascript and React. I am unable to provide a good production build, and regardless it would take considerable
                        work (and money) to setup both a server for the backend and the frontend. I am currently looking to find an alternative that would 
                        allow us to have the website functional. Below this article, you will nonetheless find the list of features planned, available and currently unavailable.
                    </p>
                </div>
            </div>
        </article>
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
        </section>
    );
}

export default Index ;