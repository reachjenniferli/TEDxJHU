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
  const [tech, setTech] = useState(false)

  const toggleComms = () => {
    setComms(true)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setTech(false)
  }

  const toggleDesign = () => {
    setComms(false)
    setCurator(false)
    setDesign(true)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setTech(false)
  }

  const toggleFinance = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(true)
    setMarket(false)
    setProgram(false)
    setTech(false)
  }

  const toggleMarket = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(true)
    setProgram(false)
    setTech(false)
  }

  const toggleProgram = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(true)
    setTech(false)
  }

  const toggleTech = () => {
    setComms(false)
    setCurator(false)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setTech(true)
  }

  const toggleCurator = () => {
    setComms(false)
    setCurator(true)
    setDesign(false)
    setFinance(false)
    setMarket(false)
    setProgram(false)
    setTech(false)
  }

  return (
    <Layout>
      <SEO title="Our Team" />
      <div className="team-content">
        <p className="team-header">Meet the Team</p>
        <p className="team-subheader">
          Wonderful individuals dedicated to the TED motto, "ideas worth
          spreading"
        </p>

        <div className="side-by-side">
          <div className="teams">
            <div className="small">
              <div className="card-wrapper" onClick={toggleCurator}>
                <CardSelector
                  title="Curators"
                  text="Oversee the team, manage operations, and ensure the event's success."
                  selected={curator === true}
                />
              </div>
              <div className="card-wrapper" onClick={toggleComms}>
                <CardSelector
                  title="Communications"
                  text="Work with speakers to refine and improve their talks."
                  selected={comms === true}
                />
              </div>
              <div className="card-wrapper" onClick={toggleDesign}>
                <CardSelector
                  title="Design"
                  text="Design theme graphics, the event stage, and promotional posters/flyers."
                  selected={design === true}
                />
              </div>
            </div>

            <div className="small">
              <div className="card-wrapper" onClick={toggleFinance}>
                <CardSelector
                  title="Finance"
                  text="Manage expenses and revenue, seek event funding, and organize fundraisers."
                  selected={finance === true}
                />
              </div>
              <div className="card-wrapper" onClick={toggleMarket}>
                <CardSelector
                  title="Marketing"
                  text="Responsible for our social media presence and on-campus marketing."
                  selected={market === true}
                />
              </div>
              <div className="card-wrapper" onClick={toggleProgram}>
                <CardSelector
                  title="Programming"
                  text="Plan events and logistics, with a focus on community engagement."
                  selected={program === true}
                />
              </div>
            </div>

            <div className="small">
              <div className="card-wrapper" onClick={toggleTech}>
                <CardSelector
                  title="Technology"
                  text="Responsible for video production, event photography, and AV support."
                  selected={tech === true}
                />
              </div>
            </div>
          </div>

          <div className="members">
            {curator && (
              <div className="member-wrapper">
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={naomi} alt="Naomi" className="profile"></img>
                    <p className="member-name">Naomi Gail Rafi</p>
                  </div>
                  <div className="card alt">
                    <img src={matt} alt="Matt" className="profile"></img>
                    <p className="member-name">Matthew Lombardo</p>
                  </div>
                </div>
              </div>
            )}

            {tech && (
              <div className="member-wrapper">
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={soowan} alt="Soowan" className="profile"></img>
                    <p className="member-name">Soowan Jeong</p>
                  </div>
                  <div className="card alt">
                    <img src={keidai} alt="Keidai" className="profile"></img>
                    <p className="member-name">Keidai Lee</p>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={ashley} alt="Ashley" className="profile"></img>
                    <p className="member-name">Ashley Choy</p>
                  </div>
                  <div className="card alt">
                    <img src={victoria} alt="victoria" className="profile"></img>
                    <p className="member-name">Victoria Qu</p>
                  </div>
                </div>
              </div>
            )}

            {program && (
              <div className="member-wrapper">
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={bea} alt="Beatrice" className="profile"></img>
                    <p className="member-name">Beatrice Gruskin</p>
                  </div>
                  <div className="card alt">
                    <img src={gurjot} alt="gurjot" className="profile"></img>
                    <p className="member-name">Gurjot Chand</p>
                  </div>
                </div>
              </div>
            )}

            {market && (
              <div className="member-wrapper">
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={trent} alt="Trent" className="profile"></img>
                    <p className="member-name">Trent Dilka</p>
                  </div>
                  <div className="card alt">
                    <img src={grace} alt="Grace" className="profile"></img>
                    <p className="member-name">Grace Kim</p>
                  </div>
                  <div className="card alt">
                    <img src={wesley} alt="Wesley" className="profile"></img>
                    <p className="member-name">Wesley Tsai</p>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={mohammed} alt="Mohammed" className="profile"></img>
                    <p className="member-name">Mohammed Mumtaz</p>
                  </div>
                  <div className="card alt">
                    <img src={aileen} alt="Aileen" className="profile"></img>
                    <p className="member-name">Aileen Zhou</p>
                  </div>
                  <div className="card alt">
                    <img src={christina} alt="Christina" className="profile"></img>
                    <p className="member-name">Christina Glaser</p>
                  </div>
                </div>
              </div>
            )}

            {design && (
              <div className="member-wrapper">
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={melody} alt="melody" className="profile"></img>
                    <p className="member-name">Melody Hsu</p>
                  </div>
                  <div className="card alt">
                    <img src={billy} alt="billy" className="profile"></img>
                    <p className="member-name">Billy Jia</p>
                  </div>
                </div>
                <div className="card-wrapper">
                  <div className="card alt">
                    <img src={irene} alt="irene" className="profile"></img>
                    <p className="member-name">Irene Halferty</p>
                  </div>
                  <div className="card alt">
                    <img src={cai} alt="cai" className="profile"></img>
                    <p className="member-name">Ashley Cai</p>
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
