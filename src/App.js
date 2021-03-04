import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import {
  pg1,
  pg2,
  pg3,
  pg4,
  pg5,
  pg6,
  sg1,
  sg2,
  sg3,
  sg4,
  sg5,
  sg6,
  sf1,
  sf2,
  sf3,
  sf4,
  sf5,
  sf6,
  pf1,
  pf2,
  pf3,
  pf4,
  pf5,
  pf6,
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
} from "./playersList";

function App() {
  const [allPlayersList, setAllPlayersList] = useState([
    pg1,
    pg2,
    pg3,
    pg4,
    pg5,
    pg6,
    sg1,
    sg2,
    sg3,
    sg4,
    sg5,
    sg6,
    sf1,
    sf2,
    sf3,
    sf4,
    sf5,
    sf6,
    pf1,
    pf2,
    pf3,
    pf4,
    pf5,
    pf6,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
  ]);
  const [myTeam, setMyTeam] = useState([]);
  const [teamPage, setTeamPage] = useState(false);

  function addToMyTeam(player) {
    //selects which player to remove from allplayers array and removes from array
    let playerAdded = player.name;

    setAllPlayersList(
      allPlayersList.filter((player) => {
        return player.name !== playerAdded;
      })
    );

    //puts selected player on myteam
    myTeam.push(player);
    setMyTeam(myTeam);
    console.log(myTeam);
  }

  function shwMyTeam() {
    return (
      <div>
        {myTeam.map((player) => {
          return (
            <div className="player-cell-box" key={player.id}>
              <img className="cell-avatar" src="/imgs/avatar.jpg"></img>

              <div style={{ height: "fit-content" }}>
                <span className="cell-nameplate">
                  {player.name}{" "}
                  <span style={{ fontWeight: "lighter", fontSize: ".75em" }}>
                    [{player.age}]
                  </span>
                </span>
                <p className="height/weight">
                  {player.height}/{player.weight}lbs
                </p>
                <span
                  className="position"
                  style={{
                    marginLeft: "10%",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {player.position}
                </span>
              </div>
              <div className="player-cell-grid">
                <div className="cell-stat">
                  <span className="cell-stat-title">Overall:</span>
                  <br />
                  {player.overall}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Scoring:</span>
                  <br />
                  {player.score}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Ast:</span>
                  <br />
                  {player.pass}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Reb:</span>
                  <br />
                  {player.rebound}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Defense:</span>
                  <br />
                  {player.defense}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Stl:</span>
                  <br />
                  {player.steal}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Blk:</span>
                  <br />
                  {player.block}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Handle:</span>
                  <br />
                  {player.dribble}
                </div>
                <div
                  style={{
                    fontSize: ".85em",
                  }}
                >
                  {player.badges.length > 0
                    ? player.badges.map((badge, id) => {
                        return (
                          <div
                            key={id}
                            style={{
                              transform: "translate(5%, -5%)",
                            }}
                          >
                            <span>{badge}</span>
                          </div>
                        );
                      })
                    : null}
                </div>

                <div
                  style={{
                    fontSize: "0.85em",
                    transform: "translate(50%, 0%)",
                  }}
                >
                  Currently {player.emotion}
                </div>
              </div>

              <Button
                style={{ width: "50px" }}
                variant="outlined"
                onClick={() => {
                  let playerRemoved = player.name;
                  allPlayersList.push(player);

                  setMyTeam(
                    myTeam.filter((player) => {
                      return player.name !== playerRemoved;
                    })
                  );
                }}
              >
                <span style={{ fontSize: "3em", fontWeight: "bold" }}>-</span>
              </Button>
            </div>
          );
        })}
      </div>
    );
  }

  function shwAllPlayers() {
    console.log(allPlayersList);
    return (
      <div>
        {allPlayersList.map((player) => {
          return (
            <div className="player-cell-box" key={player.id}>
              <img className="cell-avatar" src="/imgs/avatar.jpg"></img>

              <div style={{ height: "fit-content" }}>
                <span className="cell-nameplate">
                  {player.name}{" "}
                  <span style={{ fontWeight: "lighter", fontSize: ".75em" }}>
                    [{player.age}]
                  </span>
                </span>
                <p className="height/weight">
                  {player.height}/{player.weight}lbs
                </p>
                <span
                  className="position"
                  style={{
                    marginLeft: "10%",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  {player.position}
                </span>
              </div>
              <div className="player-cell-grid">
                <div className="cell-stat">
                  <span className="cell-stat-title">Overall:</span>
                  <br />
                  {player.overall}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Scoring:</span>
                  <br />
                  {player.score}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Ast:</span>
                  <br />
                  {player.pass}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Reb:</span>
                  <br />
                  {player.rebound}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Defense:</span>
                  <br />
                  {player.defense}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Stl:</span>
                  <br />
                  {player.steal}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Blk:</span>
                  <br />
                  {player.block}
                </div>
                <div className="cell-stat">
                  <span className="cell-stat-title">Handle:</span>
                  <br />
                  {player.dribble}
                </div>
                <div
                  style={{
                    fontSize: ".85em",
                  }}
                >
                  {player.badges.length > 0
                    ? player.badges.map((badge, id) => {
                        return (
                          <div
                            key={id}
                            style={{
                              transform: "translate(5%, -5%)",
                            }}
                          >
                            <span>{badge}</span>
                          </div>
                        );
                      })
                    : null}
                </div>

                <div
                  style={{
                    fontSize: "0.85em",
                    transform: "translate(50%, 0%)",
                  }}
                >
                  Currently {player.emotion}
                </div>
              </div>

              <Button
                style={{ width: "50px" }}
                variant="outlined"
                onClick={() => {
                  let playerIndex = player.id;
                  console.log(playerIndex);

                  addToMyTeam(player);
                }}
              >
                add
              </Button>
            </div>
          );
        })}
      </div>
    );
  }

  function shwPlayGame() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "2%",
          right: "5%",

          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          background: "#282c34",
          color: "white",
        }}
        className="play-game-btn"
      >
        Play Game
      </div>
    );
  }

  if (teamPage) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="btn-box">
            <Button style={{ color: "white" }}>My Team</Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                setTeamPage(!teamPage);
              }}
            >
              Free Agents
            </Button>
          </div>
        </header>
        <span style={{ fontSize: ".5em" }}>(My Team)</span>
        <div className="wrapper" key="1">
          {myTeam.length > 0 ? shwMyTeam() : null}
        </div>
        {shwPlayGame()}
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="btn-box">
          <Button
            onClick={() => {
              setTeamPage(!teamPage);
            }}
            style={{ color: "white" }}
          >
            My Team
          </Button>
          <Button style={{ color: "white" }}>Free Agents</Button>
        </div>
      </header>
      <span style={{ fontSize: ".5em" }}>(Free Agents)</span>
      <div className="wrapper" key="2">
        {shwAllPlayers()}
      </div>
      {shwPlayGame()}
    </div>
  );
}

export default App;
