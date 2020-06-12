import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/team.css"
import CardSelector from "../components/CardSelector"

import naomi from "../images/profilePics/naomi.jpg"
import matt from "../images/profilePics/matt.jpg"
import soowan from "../images/profilePics/soowan.jpg"
import keidai from "../images/profilePics/keidai.jpg"
import ashley from "../images/profilePics/ashley.jpg"
import bea from "../images/profilePics/bea.jpg"
import gurjot from "../images/profilePics/gurjot.jpg"
import christina from "../images/profilePics/christina.jpg"
import trent from "../images/profilePics/trent.jpg"
import aileen from "../images/profilePics/aileen.jpg"
import mohammed from "../images/profilePics/moham.jpg"
import grace from "../images/profilePics/grace.jpg"
import wesley from "../images/profilePics/wesley.jpg"
import victoria from "../images/profilePics/victoria.jpg"
import pranav from "../images/profilePics/pranav.jpg"
import ian from "../images/profilePics/ian.jpg"
import justin from "../images/profilePics/justin.jpg"
import anne from "../images/profilePics/anne.jpg"
import irene from "../images/profilePics/irene.jpg"
import billy from "../images/profilePics/billy.jpg"
import melody from "../images/profilePics/melody.jpg"
import cai from "../images/profilePics/cai.jpg"

const OurTeam = () => {
  const [curator, setCurator] = useState(true)
  const [comms, setComms] = useState(false)
  const [design, setDesign] = useState(false)
  const [finance, setFinance] = useState(false)
  const [market, setMarket] = useState(false)
  const [program, setProgram] = useState(false)
  const [strat, setStrat] = useState(false)
  const [tech, setTech] = useState(false)

  const toggleComms = () => {
    setComms(true)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setStrat(false)
    setTech(false)
  }

  const toggleDesign = () => {
    setComms(false)
    setCurator(false)
    setDesign(true)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setStrat(false)
    setTech(false)
  }

  const toggleFinance = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(true)
    setMarket(false)
    setProgram(false)
    setStrat(false)
    setTech(false)
  }

  const toggleMarket = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(true)
    setProgram(false)
    setStrat(false)
    setTech(false)
  }

  const toggleProgram = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(true)
    setStrat(false)
    setTech(false)
  }

  const toggleStrat = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setStrat(true)
    setTech(false)
  }

  const toggleTech = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setStrat(false)
    setTech(true)
  }

  const toggleCurator = () => {
    setComms(false)
    setCurator(true)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setStrat(false)
    setTech(false)
  }

  return (
    <Layout>
      <SEO title="Our Team" />
      <div class="team-content">
        <p class="team-header">Meet the Team</p>
        <p class="team-subheader">
          Wonderful individuals dedicated to the TED motto, "ideas worth
          spreading"
        </p>

        <div class="side-by-side">
          <div class="teams">
            <div class="small">
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
            </div>

            <div class="small">
              <div class="card-wrapper" onClick={toggleFinance}>
                <CardSelector
                  title="Finance"
                  text="Manage expenses and revenue, seek event funding, and organize fundraisers."
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
            </div>

            <div class="small">
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
                  text="Responsible for video production, event photography, and AV support."
                  selected={tech === true}
                />
              </div>
            </div>
          </div>

          <div class="members">
            {curator && (
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
            )}

            {tech && (
              <div class="member-wrapper">
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={soowan} alt="Soowan" class="profile"></img>
                    <p class="member-name">Soowan Jeong</p>
                  </div>
                  <div class="card alt">
                    <img src={keidai} alt="Keidai" class="profile"></img>
                    <p class="member-name">Keidai Lee</p>
                  </div>
                </div>
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={ashley} alt="Ashley" class="profile"></img>
                    <p class="member-name">Ashley Choy</p>
                  </div>
                  <div class="card alt">
                    <img src={victoria} alt="victoria" class="profile"></img>
                    <p class="member-name">Victoria Qu</p>
                  </div>
                </div>
              </div>
            )}

            {program && (
              <div class="member-wrapper">
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={bea} alt="Beatrice" class="profile"></img>
                    <p class="member-name">Beatrice Gruskin</p>
                  </div>
                  <div class="card alt">
                    <img src={gurjot} alt="gurjot" class="profile"></img>
                    <p class="member-name">Gurjot Chand</p>
                  </div>
                </div>
              </div>
            )}

            {market && (
              <div class="member-wrapper">
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={trent} alt="Trent" class="profile"></img>
                    <p class="member-name">Trent Dilka</p>
                  </div>
                  <div class="card alt">
                    <img src={grace} alt="Grace" class="profile"></img>
                    <p class="member-name">Grace Kim</p>
                  </div>
                  <div class="card alt">
                    <img src={wesley} alt="Wesley" class="profile"></img>
                    <p class="member-name">Wesley Tsai</p>
                  </div>
                </div>
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={mohammed} alt="Mohammed" class="profile"></img>
                    <p class="member-name">Mohammed Mumtaz</p>
                  </div>
                  <div class="card alt">
                    <img src={aileen} alt="Aileen" class="profile"></img>
                    <p class="member-name">Aileen Zhou</p>
                  </div>
                  <div class="card alt">
                    <img src={christina} alt="Christina" class="profile"></img>
                    <p class="member-name">Christina Glaser</p>
                  </div>
                </div>
              </div>
            )}

            {strat && (
              <div class="member-wrapper">
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={pranav} alt="pranav" class="profile"></img>
                    <p class="member-name">Pranav Reddy</p>
                  </div>
                  <div class="card alt">
                    <img src={justin} alt="justin" class="profile"></img>
                    <p class="member-name">Justin Zhao</p>
                  </div>
                </div>
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={ian} alt="ian" class="profile"></img>
                    <p class="member-name">Ian Cataluna</p>
                  </div>
                  <div class="card alt">
                    <img src={anne} alt="anne" class="profile"></img>
                    <p class="member-name">Anne Islam</p>
                  </div>
                </div>
              </div>
            )}

            {design && (
              <div class="member-wrapper">
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={melody} alt="melody" class="profile"></img>
                    <p class="member-name">Melody Hsu</p>
                  </div>
                  <div class="card alt">
                    <img src={billy} alt="billy" class="profile"></img>
                    <p class="member-name">Billy Jia</p>
                  </div>
                </div>
                <div class="card-wrapper">
                  <div class="card alt">
                    <img src={irene} alt="irene" class="profile"></img>
                    <p class="member-name">Irene Halferty</p>
                  </div>
                  <div class="card alt">
                    <img src={cai} alt="cai" class="profile"></img>
                    <p class="member-name">Ashley Cai</p>
                  </div>
                </div>
              </div>
            )}

            {comms && <b>In development</b>}

            {finance && <b>In development</b>}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OurTeam
