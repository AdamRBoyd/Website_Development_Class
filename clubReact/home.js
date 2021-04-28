import React from 'react';
import BrokenHeartPendant from "./images/BrokenHeartPendant.jpg";
import CopperLabradoriteMainNew from "./images/CopperLabradoriteMainNew.jpg";
import SakuraEarrings from "./images/SakuraEarrings.jpg";
import CopperWorldHand from "./images/CopperWorldHand.jpg";

function Home() {
    return( <React.Fragment>
        <header>
        <h1>East Bay Jewelry Makers Club</h1>
        </header>
            <main>
                <div>
                    <h2>An East Bay Club</h2>
                    <p>Describe the location of the club</p>
                </div>
                <div>
                    <h2>Jewelry Making</h2>
                    <p>Describe what we are about.</p>
                </div>
                <div>
                    <figure className="center">
                        <img className="small" src={BrokenHeartPendant} alt="Broken Heart Pendant by Adam Boyd Designs"></img>
                        <img className="small" src={CopperLabradoriteMainNew} alt="Copper and Labradorite Pendant by Adam Boyd Designs"></img>
                        <img className="small" src={SakuraEarrings} alt="Sakura earrings in progress by Adam Boyd Designs"></img>
                        <img className="small" src={CopperWorldHand} alt="Copper World Pendant by Adam Boyd Designs"></img>
                    </figure>
                    <figcaption className="center"><a href="http://AdamBoydDesigns.etsy.com">Jewelry by Adam Boyd Designs</a></figcaption>
                </div>
            </main>
            <footer>
                &copy; 2021 Adam Boyd
            </footer>
        </React.Fragment> 
        );
}

export default Home;