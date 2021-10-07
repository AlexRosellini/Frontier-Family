import { Link } from "react-router-dom"

const TtrpgMainPage = () => {
    return ( 
        <section className="ttrpg-main">
            <div className="textArea">
                <h2>Welcome to the TTRPG page!</h2>
                <p>This page is still in construction, however you should be able to find some basic features/backgrounds. I will notify you
                    of updates on the discord! To start with, please click on one of the categories.
                </p>
            </div>
            <article className="cards">
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>New Dawn</h3>
                        <div className="cards-card__img">
                            <img src="./imgs/Shayo.png" alt="Shayo" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>New Dawn is our Flagship TTRPG; This category will eventually include Npc backgrounds, maps and more importantly 
                        <span> Reports</span> will now be published within this category. Currently this category is <span className="alert">
                        unavailable.</span></p>
                    </div>
                </div>
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Jade Regent</h3>
                        <div className="cards-card__img">
                            <img src="./imgs/Jade-Regent.png" alt="JadeRegent" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>Jade Regent is our ongoing TTRPG; ultimately this category will include Npc details, the ability to add/take notes,
                        character sheets, and etc. Currently this category is <span className="alert">
                        unavailable.</span></p>
                    </div>
                </div>
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Emp's Characters</h3>
                        <div className="cards-card__img cards-card__celia">
                            <img src="./imgs/Celia.png" alt="Celia"/>
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>Here you will find my various backgrounds as well as character sheets. This category is currently
                        partially available.</p>
                    </div>
                </div>
                <div className="cards-card cards-card__smaller">
                    <div className="cards-card__top">
                        <h3>Dice Roller</h3>
                        <div className="cards-card__img">
                            <img src="./imgs/diceRoller.jpg" alt="DiceRoller" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>This category will allow you to simulate a dice roll, all the while registering the result on a server.
                            As a result, it should serve as a good alternative to discord bots in case of bugs, or be able to save your
                            results for a sheet for instance! Currently this category is <span className="alert">unavailable.</span></p>
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default TtrpgMainPage;