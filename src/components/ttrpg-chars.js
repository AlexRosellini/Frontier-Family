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
                        <div className="cards-card__img">
                            <img src="./imgs/Celia.png" alt="Celia" />
                        </div>
                    </div>
                    <div className="cards-card__bottom">
                        <p></p>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default TtrpgChars;