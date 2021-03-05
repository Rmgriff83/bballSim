import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import { getRndInteger } from "./getRndInteger";
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
import { teams } from "./teams";

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

  const [freeAgentPage, setFreeAgentPage] = useState(true);
  const [myTeam, setMyTeam] = useState([]);
  let myTeamName = "My Team";
  const [myTeamScore, setMyTeamScore] = useState(0);
  //temp
  let pickedTeam = teams[2];
  let [pickedTeamScore, setPickedTeamScore] = useState(0);
  //temp
  const [teamPage, setTeamPage] = useState(false);
  const [gamePage, setGamePage] = useState(false);
  const [shwStats, setShwStats] = useState(false);
  const [statsBoxOn, setStatsBoxOn] = useState(false);

  const [needRender, setNeedRender] = useState(false);

  //teams
  let teamNames = ["Tigers"];

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
    // console.log(myTeam);
  }

  function shwMyTeam() {
    return (
      <div>
        {myTeam.map((player) => {
          return (
            <div className="player-cell-box" key={player.id}>
              <img
                className="cell-avatar"
                src="/imgs/avatar.jpg"
                alt="player avatar"
              ></img>

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
    // console.log(allPlayersList);
    return (
      <div>
        {allPlayersList.map((player) => {
          return (
            <div className="player-cell-box" key={player.id}>
              <img
                className="cell-avatar"
                src="/imgs/avatar.jpg"
                alt="player avatar"
              ></img>

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
                  // console.log(playerIndex);

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
        onClick={() => {
          setGamePage(true);
        }}
      >
        Play Game
      </div>
    );
  }

  function playNxtGame() {
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
        onClick={() => {
          gameStart();
          setShwStats(true);
        }}
      >
        Play!
      </div>
    );
  }
  const [myTeamGameArchive, setMyteamGameArchive] = useState([]);
  const [otherTeamGameArchive, setOtherTeamGameArchive] = useState([]);

  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [season, setSeason] = useState(2021);
  const [myTeamSeasonWins, setMyTeamSeasonWins] = useState(0);
  const [myTeamSeasonLosses, setMyTeamSeasonLosses] = useState(0);

  // const [pickedTeamSeasonWins, setPickedTeamSeasonWins] = useState(0);
  // const [pickedTeamSeasonLosses, setPickedTeamSeasonLosses] = useState(0);

  function gameStart() {
    let myTeamStats = {
      score: 0,
      assists: 0,
      rebounds: 0,
      steals: 0,
      blocks: 0,
      turnovers: 0,
    };

    let myTeamBadges = [];

    let pickedTeamStats = {
      score: 0,
      assists: 0,
      rebounds: 0,
      steals: 0,
      blocks: 0,
      turnovers: 0,
    };

    let pickedTeamBadges = [];

    // console.log([myTeam, pickedTeam]);

    // function updateWrapper() {
    //   wrapper.innerHTML = "";
    //   wrapper2.innerHTML = "";
    //   homeTeam.map((player) => {
    //     wrapper.innerHTML += `<div>
    //           <p>${player.name}(${player.age}) - Overall: ${player.overall} Energy: ${player.durability} <span>${player.badges}</span></p>

    //         </div>`;
    //   });
    //   awayTeam.map((player) => {
    //     wrapper2.innerHTML += `
    //           <p>${player.name}(${player.age}) - Overall: ${player.overall} Energy: ${player.durability} <span>${player.badges}</span></p>

    //         </div>`;
    //   });
    //   homeTeamRecord.innerHTML = `${homeTeamSeasonWins}-${homeTeamSeasonLosses}`;
    //   awayTeamRecord.innerHTML = `${awayTeamSeasonWins}-${awayTeamSeasonLosses}`;
    // }

    // updateWrapper();

    let myStats = document.getElementById("my-stats");
    let pickedStats = document.getElementById("picked-stats");

    myStats.innerHTML = "";
    pickedStats.innerHTML = "";

    setGamesPlayed(gamesPlayed + 1);
    // console.log(gamesPlayed);

    myTeamStats.score = 0;
    myTeamStats.assists = 0;
    myTeamStats.rebounds = 0;
    myTeamStats.steals = 0;
    myTeamStats.blocks = 0;
    myTeamStats.turnovers = 0;
    myTeamBadges = [];

    pickedTeamStats.score = 0;
    pickedTeamStats.assists = 0;
    pickedTeamStats.rebounds = 0;
    pickedTeamStats.steals = 0;
    pickedTeamStats.blocks = 0;
    pickedTeamStats.turnovers = 0;
    pickedTeamBadges = [];

    myTeam.map((player) => {
      let pts = player.playGame().points;
      let ast = player.playGame().assists;
      let reb = player.playGame().rebounds;
      let stl = player.playGame().steals;
      let blk = player.playGame().blocks;
      let to = player.playGame().turnovers;

      let volumeScorerBadges__my = 0;
      let playmakerBadges__my = 0;
      let quicksterBadges__my = 0;
      let interiorForceBadges__my = 0;
      let ballhawkBadges__my = 0;
      let rimProtectorBadges__my = 0;
      let lockdownDefenderBadges__my = 0;

      // console.log(pts);

      if (player.badges.length != 0) {
        myTeamBadges.push(player.badges);
      }

      let i = 0;
      let j = 0;
      for (i = 0; i < myTeamBadges.length; i++) {
        for (j = 0; j < myTeamBadges[i].length; j++) {
          switch (myTeamBadges[i][j]) {
            case "Volume Scorer":
              volumeScorerBadges__my++;
              break;
            case "Playmaker":
              playmakerBadges__my++;
              break;
            case "Quickster":
              quicksterBadges__my++;
              break;
            case "Interior Force":
              interiorForceBadges__my++;
              break;
            case "Ballhawk":
              ballhawkBadges__my++;
              break;
            case "Rim Protector":
              rimProtectorBadges__my++;
              break;
            case "Lockdown Defender":
              lockdownDefenderBadges__my++;
              break;
          }
        }
      }

      //badge weights start
      if (rimProtectorBadges__my != 0 && interiorForceBadges__my != 0) {
        pts += 4;
        console.log("big man pwr up");
        console.log(player.name + "scored 4 extra pts" + pts);
      }
      if (playmakerBadges__my != 0 && volumeScorerBadges__my != 0) {
        pts += 2;
      }
      if (ballhawkBadges__my != 0 && quicksterBadges__my != 0) {
        pts += 2;
      }
      if (lockdownDefenderBadges__my === 1) {
        pts += 3;
      }
      if (lockdownDefenderBadges__my === 2) {
        pts += 4;
      }
      if (lockdownDefenderBadges__my === 3) {
        pts += 5;
      }
      //badge weights end

      //stats weights start
      if (blk >= 8) {
        pts += 3;
      }
      if (stl >= 6) {
        pts += 3;
      }
      if (to >= 7) {
        pts -= 3;
      }
      if (ast >= 10) {
        pts += 3;
      }
      if (reb >= 11) {
        pts += 3;
      }
      //stats weights end

      //vitals weights start

      //weight
      if (player.position === "pg" && player.weight <= 140) {
        pts -= 1;
      } else if (player.position === "pg" && player.weight > 170) {
        pts += 1;
      } else if (player.position === "sg" && player.weight < 150) {
        pts -= 2;
      } else if (player.position === "sg" && player.weight > 180) {
        pts += 2;
      } else if (player.position === "sf" && player.weight < 160) {
        pts -= 2;
      } else if (player.position === "sf" && player.weight > 200) {
        pts += 2;
      } else if (player.position === "pf" && player.weight < 170) {
        pts -= 2;
      } else if (player.position === "pf" && player.weight > 220) {
        pts += 2;
      } else if (player.position === "c" && player.weight < 180) {
        pts -= 2;
      } else if (player.position === "c" && player.weight > 240) {
        pts += 2;
      }

      //height
      if (player.position === "pg" && player.height === "5'1\"") {
        pts -= 2;
      } else if (player.position === "pg" && player.height === "6'8\"") {
        pts += 2;
      } else if (player.position === "sg" && player.height === "5'6\"") {
        pts -= 2;
      } else if (player.position === "sg" && player.height === "6'10\"") {
        pts += 2;
      } else if (player.position === "sf" && player.height === "6'3\"") {
        pts -= 2;
      } else if (player.position === "sf" && player.height === "6'10\"") {
        pts += 2;
      } else if (player.position === "pf" && player.height === "6'7\"") {
        pts -= 2;
      } else if (player.position === "pf" && player.height === "6'11\"") {
        pts += 2;
      } else if (player.position === "c" && player.height === "6'7\"") {
        pts -= 2;
      } else if (player.position === "c" && player.height === "6'11\"") {
        pts += 2;
      }

      //vitals weights end

      //fix to disable negative scores
      if (pts < 0) {
        pts = 0;
      }
      if (ast < 0) {
        ast = 0;
      }
      if (reb < 0) {
        reb = 0;
      }
      if (stl < 0) {
        stl = 0;
      }
      if (stl < 0) {
        stl = 0;
      }

      myStats.innerHTML += `
      <div>
          <div class="player-stat-tab">
              <img src="/imgs/avatar.jpg" class="tab-avatar"><p class="stat-tab-name">${player.name}</p>
              <p>Pts: ${pts} | Ast: ${ast} | Reb: ${reb} | Stl: ${stl} | Blk: ${blk} | T.O.'s: ${to} | </p>
          </div>

      </div>`;

      myTeamGameArchive.push({
        Season: season,
        Game: gamesPlayed,
        Name: player.name,
        Points: pts,
        Assists: ast,
        Rebounds: reb,
        Steals: stl,
        Blocks: blk,
        Turnovers: to,
      });
      setMyteamGameArchive(myTeamGameArchive);

      player.moreTired();

      myTeamStats.score += pts;
      myTeamStats.assists += ast;
      myTeamStats.rebounds += reb;
      myTeamStats.steals += stl;
      myTeamStats.blocks += blk;
      myTeamStats.turnovers += to;

      // console.log(myTeamStats);
      // console.log(myTeamGameArchive);
    });

    let pickedTeamFilter = pickedTeam.filter((player) => {
      return player !== pickedTeam[0];
    });

    pickedTeamFilter.map((player) => {
      let pts = player.playGame().points;
      let ast = player.playGame().assists;
      let reb = player.playGame().rebounds;
      let stl = player.playGame().steals;
      let blk = player.playGame().blocks;
      let to = player.playGame().turnovers;

      let volumeScorerBadges__picked = 0;
      let playmakerBadges__picked = 0;
      let quicksterBadges__picked = 0;
      let interiorForceBadges__picked = 0;
      let ballhawkBadges__picked = 0;
      let rimProtectorBadges__picked = 0;
      let lockdownDefenderBadges__picked = 0;

      if (player.badges.length != 0) {
        pickedTeamBadges.push(player.badges);
      }

      let i = 0;
      let j = 0;

      for (i = 0; i < pickedTeamBadges.length; i++) {
        for (j = 0; j < pickedTeamBadges[i].length; j++) {
          switch (pickedTeamBadges[i][j]) {
            case "Volume Scorer":
              volumeScorerBadges__picked++;
              break;
            case "Playmaker":
              playmakerBadges__picked++;
              break;
            case "Quickster":
              quicksterBadges__picked++;
              break;
            case "Interior Force":
              interiorForceBadges__picked++;
              break;
            case "Ballhawk":
              ballhawkBadges__picked++;
              break;
            case "Rim Protector":
              rimProtectorBadges__picked++;
              break;
            case "Lockdown Defender":
              lockdownDefenderBadges__picked++;
              break;
          }
        }
      }

      //badge weights start
      if (rimProtectorBadges__picked != 0 && interiorForceBadges__picked != 0) {
        pts += 4;
      }
      if (playmakerBadges__picked != 0 && volumeScorerBadges__picked != 0) {
        pts += 2;
      }
      if (ballhawkBadges__picked != 0 && quicksterBadges__picked != 0) {
        pts += 2;
      }
      if (lockdownDefenderBadges__picked === 1) {
        pts += 3;
      }
      if (lockdownDefenderBadges__picked === 2) {
        pts += 4;
      }
      if (lockdownDefenderBadges__picked === 3) {
        pts += 5;
      }
      //badge weights end

      //stats weights start
      if (blk >= 8) {
        pts += 3;
      }
      if (stl >= 6) {
        pts += 3;
      }
      if (to >= 7) {
        pts -= 3;
      }
      if (ast >= 10) {
        pts += 3;
      }
      if (reb >= 11) {
        pts += 3;
      }
      //stats weights end

      //vitals weights start

      //weight
      if (player.position === "pg" && player.weight <= 140) {
        pts -= 1;
      } else if (player.position === "pg" && player.weight > 170) {
        pts += 1;
      } else if (player.position === "sg" && player.weight < 150) {
        pts -= 2;
      } else if (player.position === "sg" && player.weight > 180) {
        pts += 2;
      } else if (player.position === "sf" && player.weight < 160) {
        pts -= 2;
      } else if (player.position === "sf" && player.weight > 200) {
        pts += 2;
      } else if (player.position === "pf" && player.weight < 170) {
        pts -= 2;
      } else if (player.position === "pf" && player.weight > 220) {
        pts += 2;
      } else if (player.position === "c" && player.weight < 180) {
        pts -= 2;
      } else if (player.position === "c" && player.weight > 240) {
        pts += 2;
      }

      //height
      if (player.position === "pg" && player.height === "5'1\"") {
        pts -= 2;
      } else if (player.position === "pg" && player.height === "6'8\"") {
        pts += 2;
      } else if (player.position === "sg" && player.height === "5'6\"") {
        pts -= 2;
      } else if (player.position === "sg" && player.height === "6'10\"") {
        pts += 2;
      } else if (player.position === "sf" && player.height === "6'3\"") {
        pts -= 2;
      } else if (player.position === "sf" && player.height === "6'10\"") {
        pts += 2;
      } else if (player.position === "pf" && player.height === "6'7\"") {
        pts -= 2;
      } else if (player.position === "pf" && player.height === "6'11\"") {
        pts += 2;
      } else if (player.position === "c" && player.height === "6'7\"") {
        pts -= 2;
      } else if (player.position === "c" && player.height === "6'11\"") {
        pts += 2;
      }
      //this.height
      //vitals weights end

      //fix to disable negative scores
      if (pts < 0) {
        pts = 0;
      }
      if (ast < 0) {
        ast = 0;
      }
      if (reb < 0) {
        reb = 0;
      }
      if (stl < 0) {
        stl = 0;
      }
      if (stl < 0) {
        stl = 0;
      }

      pickedStats.innerHTML += `
      <div>
          <div class="player-stat-tab">
          <img src="/imgs/avatar.jpg" class="tab-avatar"><p class="stat-tab-name">${player.name}<p>
              <p>Pts: ${pts} | Ast: ${ast} | Reb: ${reb} | Stl: ${stl} | Blk: ${blk} | T.O.'s: ${to} | </p>
          </div>

      </div>`;

      otherTeamGameArchive.push({
        Team: pickedTeam[0].name,
        Season: season,
        Game: gamesPlayed,
        Name: player.name,
        Points: pts,
        Assists: ast,
        Rebounds: reb,
        Steals: stl,
        Blocks: blk,
        Turnovers: to,
      });

      setOtherTeamGameArchive(otherTeamGameArchive);
      // console.log(awayTeamGameArchive);
      player.moreTired();

      pickedTeamStats.score += pts;
      pickedTeamStats.assists += ast;
      pickedTeamStats.rebounds += reb;
      pickedTeamStats.steals += stl;
      pickedTeamStats.blocks += blk;
      pickedTeamStats.turnovers += to;
      // console.log(awayTeamStats);

      // console.log(pickedTeamStats);
      // console.log(otherTeamGameArchive);

      // let awayScoreBox = document.getElementById("away-score-box");
      // awayScoreBox.innerHTML = `Away: ${awayTeamStats.score}`;
    });

    setMyTeamScore(myTeamStats.score);
    setPickedTeamScore(pickedTeamStats.score);

    if (myTeamStats.score > pickedTeamStats.score) {
      // console.log("home team wins");
      setMyTeamSeasonWins(myTeamSeasonWins + 1);

      myTeamGameArchive.push({
        My_Team_Record: myTeamSeasonWins + "-" + myTeamSeasonLosses,
      });
      // awayTeamGameArchive.push({
      //   Away_Team_Record: awayTeamSeasonWins + "-" + awayTeamSeasonLosses,
      // });
    } else if (pickedTeamStats.score > myTeamStats.score) {
      // console.log("away team wins");
      // awayTeamSeasonWins++;
      setMyTeamSeasonLosses(myTeamSeasonLosses + 1);
      myTeamGameArchive.push({
        My_Team_Record: myTeamSeasonWins + "-" + myTeamSeasonLosses,
      });
      // awayTeamGameArchive.push({
      //   Away_Team_Record: awayTeamSeasonWins + "-" + awayTeamSeasonLosses,
      // });
    } else {
      console.log("tie");
    }
    setMyteamGameArchive(myTeamGameArchive);

    //this fires after 24 games played
    if (gamesPlayed > 24) {
      setGamesPlayed(0);
      setMyTeamSeasonWins(0);
      setMyTeamSeasonLosses(0);
      // awayTeamSeasonWins = 0;
      // awayTeamSeasonLosses = 0;
      setSeason(season + 1);

      myTeam.forEach((player) => {
        player.age++;
      });

      teams.forEach((player) => {
        player.age++;
      });
    }
  }

  function pickOtherTeam() {
    // console.log(pickedTeam);

    let otherTeamOverall = () => {
      let playersOverall = 0;
      let i = 0;
      pickedTeam.forEach((player) => {
        playersOverall += player.overall;
      });
      return Math.floor(playersOverall / (pickedTeam.length - 1));
    };

    return (
      <div className="matchup-tab">
        <span className="matchup-tab-name">{pickedTeam[0].name}</span>
        <br />
        Overall: {pickedTeam.length > 0 ? otherTeamOverall() : null}
        <br />
        <p className="matchup-tab-score">{pickedTeamScore}</p>
      </div>
    );
  }

  function shwMatchup() {
    let teamOverall = () => {
      let playersOverall = 0;
      let i = 0;
      myTeam.forEach((player) => {
        playersOverall += player.overall;
      });
      return Math.floor(playersOverall / myTeam.length);
    };
    return (
      <div>
        <div className="matchup-tab">
          <span className="matchup-tab-name">{myTeamName}</span>
          <br /> ({myTeamSeasonWins} - {myTeamSeasonLosses})
          <br />
          Overall: {myTeam.length > 0 ? teamOverall() : null}
          <br />
          <p className="matchup-tab-score">{myTeamScore}</p>
        </div>

        <p>VS.</p>

        {pickOtherTeam()}
      </div>
    );
  }

  // function shwMyTeamGameStats() {
  //   return (
  //     <div>
  //       <div>
  //         {myTeam.map((player, id) => {
  //           let currentPlayer = player;
  //           // console.log(currentPlayer);

  //           return (
  //             <div key={id}>
  //               <div
  //                 style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
  //               >
  //                 <p>{currentPlayer.name}</p>
  //                 <p id=""></p>
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  function shwGameStats() {
    return (
      <Button
        variant="outlined"
        onClick={() => {
          setStatsBoxOn(!statsBoxOn);
        }}
      >
        View Stats
      </Button>
    );
  }

  if (gamePage) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="btn-box">
            <Button
              onClick={() => {
                setGamePage(false);
                setGamePage(false);
                setTeamPage(true);
              }}
              style={{ color: "white" }}
            >
              My Team
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                setGamePage(false);
                setTeamPage(false);
                setFreeAgentPage(true);
              }}
            >
              Free Agents
            </Button>
          </div>
        </header>

        <p className="page-title"></p>
        <div className="wrapper" key="3">
          {shwMatchup()}
          <br />
          <div>
            <p className="season">[{season}]</p>
          </div>

          <br />
          {shwStats ? shwGameStats() : null}
          <div id="stats-box" className={statsBoxOn ? "shw" : "hide"}>
            <p className="stats-name">
              {myTeamName}: {myTeamScore}
            </p>

            <div id="my-stats"></div>
            <br />
            <p className="stats-name">Away: {pickedTeamScore}</p>

            <div id="picked-stats"></div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div></div>
        {playNxtGame()}
      </div>
    );
  } else if (teamPage) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="btn-box">
            <Button style={{ color: "white", borderBottom: "2px solid white" }}>
              My Team
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => {
                setTeamPage(false);
                setFreeAgentPage(true);
              }}
            >
              Free Agents
            </Button>
          </div>
        </header>
        <input id="my-team-name" placeholder={myTeamName}></input>
        <button
          onClick={() => {
            let teamNameBox = document.getElementById("my-team-name");
            myTeamName = teamNameBox.value;
            console.log(myTeamName);
            setNeedRender(!needRender);
          }}
          className="change-name-btn"
        >
          change name
        </button>
        <p className="page-title">{myTeamName}</p>

        <div className="wrapper" key="1">
          {myTeam.length > 0 ? shwMyTeam() : null}
        </div>
        {shwPlayGame()}
      </div>
    );
  } else if (freeAgentPage) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="btn-box">
            <Button
              onClick={() => {
                setFreeAgentPage(false);
                setTeamPage(true);
              }}
              style={{ color: "white" }}
            >
              My Team
            </Button>
            <Button style={{ color: "white", borderBottom: "2px solid white" }}>
              Free Agents
            </Button>
          </div>
        </header>

        <p className="page-title">(Free Agents)</p>
        <div className="wrapper" key="2">
          {shwAllPlayers()}
        </div>
        {shwPlayGame()}
      </div>
    );
  }
}

export default App;
