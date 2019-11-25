import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/team.css"
import CardSelector from "../components/CardSelector"

import naomi from "../images/profilePics/naomi.jpg"
import matt from "../images/profilePics/matt.jpg"

const OurTeam = () => {
  const [curator, setCurator] = useState(true);
  const [comms, setComms] = useState(false);
  const [design, setDesign] = useState(false);
  const [finance, setFinance] = useState(false);
  const [market, setMarket] = useState(false );
  const [program, setProgram] = useState(false);
  const [strat, setStrat] = useState(false);
  const [tech, setTech] = useState(false);

  const toggleComms = () => {
    setComms(true); 
    setCurator(false); setDesign(false); setFinance(false); setMarket(false); setProgram(false); setStrat(false); setTech(false);
  };

  const toggleDesign = () => {
    setComms(false); 
    setCurator(false); setDesign(true); setFinance(false); setMarket(false); setProgram(false); setStrat(false); setTech(false);
  };

  const toggleFinance = () => {
    setComms(false); 
    setCurator(false); setDesign(false); setFinance(true); setMarket(false); setProgram(false); setStrat(false); setTech(false);
  };

  const toggleMarket = () => {
    setComms(false); 
    setCurator(false); setDesign(false); setFinance(false); setMarket(true); setProgram(false); setStrat(false); setTech(false);
  };

  const toggleProgram = () => {
    setComms(false); 
    setCurator(false); setDesign(false); setFinance(false); setMarket(false); setProgram(true); setStrat(false); setTech(false);
  };

  const toggleStrat = () => {
    setComms(false); 
    setCurator(false); setDesign(false); setFinance(false); setMarket(false); setProgram(false); setStrat(true); setTech(false);
  };

  const toggleTech = () => {
    setComms(false); 
    setCurator(false); setDesign(false); setFinance(false); setMarket(false); setProgram(false); setStrat(false); setTech(true);
  };

  const toggleCurator = () => {
    setComms(false); 
    setCurator(true); setDesign(false); setFinance(false); setMarket(false); setProgram(false); setStrat(false); setTech(false);
  };

  return (
    <Layout>
      <SEO title="Our Team" />
      <div class="team-content">
        <p class="team-header">Meet the Team</p>
        <p class="team-subheader">Wonderful individuals dedicated to the TED motto, "ideas worth spreading"</p>

        <div class="side-by-side">
          <div class="teams">
            <div class="card-wrapper" onClick={toggleCurator}>
              <CardSelector 
                title="Curators"
                text="[Enter description]"
                selected={curator === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleComms}>
              <CardSelector 
                title="Communications"
                text="Work with speakers to refine and improve their talks."
                selected={comms === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleDesign}>
              <CardSelector 
                title="Design"
                text="Design theme graphics, the event stage, and promotional posters/flyers."
                selected={design === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleFinance}>
              <CardSelector 
                title="Finance"
                text="Manage expenses and revenue, seek funding for events, and organize fundraisers."
                selected={finance === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleMarket}>
              <CardSelector 
                title="Marketing"
                text="Responsible for our social media presence and on-campus marketing."
                selected={market === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleProgram}>
              <CardSelector 
                title="Programming"
                text="Plan events and logistics, with a focus on community engagement."
                selected={program === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleStrat}>
              <CardSelector 
                title="Strategic Initiatives"
                text="[Enter description]"
                selected={strat === true}
              />
            </div>
            <div class="card-wrapper" onClick={toggleTech}>
              <CardSelector 
                title="Technology"
                text="Responsible for promotional video production, event photography, and AV support."
                selected={tech === true}
              />
            </div>
          </div>
          <div class="members">
            {curator &&
                <div class="member-wrapper">
                  <div class="card-wrapper">
                    <div class="card alt"> 
                      <img src={naomi} alt="Naomi" class="profile"></img>
                      <p class="member-name">Naomi Gail Rafi</p>
                    </div>
                    <div class="card alt"> 
                      <img src={matt} alt="Matt" class="profile"></img>
                      <p class="member-name">Matthew Lombardo</p>
                    </div>
                  </div>
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OurTeam
