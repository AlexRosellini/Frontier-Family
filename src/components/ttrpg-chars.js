const TtrpgChars = () => {
    return ( 
        <section className="ttrpg-Chars">
            <div className="textArea">
                <h2>Welcome Emp's characters!</h2>
                <p>Welcome to my personal page; here you will find my characters as well as their background; to begin click on a character.
                    Please note that all characters are not available currently.
                </p>
            </div>
            <article className="cards">
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Celia</h3>
                        <div className="cards-card__img cards-card__celia">
                            <img src="./imgs/Celia.png" alt="Celia" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>Célia is my second character born a few years after Astrea. A mage from Thedas, she was brought into the world of faerune
                        by the god of Mischief Loki. Harboring a dark past and pray to a cursed book posessed by her father the Demon of Terror,
                        Celia seeks to free herself from his influence and rid the world both of demon, and evil. To this end, she joined
                        a prestigious and powerful order known as the "Order of the Golden Dragon"</p>
                    </div>
                </div>
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Laureen</h3>
                        <div className="cards-card__img cards-card__celia">
                            <img src="./imgs/Laureen.png" alt="Laureen" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>Laureen of Celesta is an Aasimar who led a rebelion against the rule of Stavian III of Taldor;
                        Ultimately allying with multiple knight orders and adventurer, she managed to seize the Kingdom from the king, and has ruled 
                        it ever since. Laureen's goals are however, only beggining. Her gaze turned westward and gathering an alliance of Nation, she intend
                        to put an end to the church of Asmodeus.</p>
                    </div>
                </div>
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Raphael</h3>
                        <div className="cards-card__img">
                            <img src="./imgs/Raphael.png" alt="Raphael" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>The Archangel Raphael is one of the Seven Archangels ruling over Heaven. Ruling over the domain of healing but also
                        information and spies, Raphael is the head of the Arx legion of Angel and remains to this day one of Humanity's greatest defenders.
                        </p>
                    </div>
                </div>
                <div className="cards-card">
                    <div className="cards-card__top">
                        <h3>Rei</h3>
                        <div className="cards-card__img">
                            <img src="./imgs/Rei.png" alt="Rei" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p>A proud Samurai of Tian, Rei is the Scion of the Minamoto clan of Minkai. A defender of the Shogun and of his lord, Rei's life
                            was changed for good upon contact with a dying Aeon...
                        </p>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default TtrpgChars;