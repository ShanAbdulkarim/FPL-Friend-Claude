import React from 'react';

const team1 = {
  goalkeepers: ["Kelleher", "Roefs"],
  defenders: ["Guéhi", "Virgil", "Tarkowski", "Truffert", "Matheus N."],
  midfielders: ["B.Fernandes", "Semenyo", "Gibbs-White", "Rice", "Rogers"],
  forwards: ["Haaland", "Thiago", "João Pedro"]
};

const team2 = {
  goalkeepers: ["Donnarumma", "Pickford"],
  defenders: ["Lacroix", "Andersen", "Collins", "Van Hecke", "Alderete"],
  midfielders: ["Enzo", "Mbeumo", "Saka", "Cherki", "Wirtz"],
  forwards: ["Watkins", "Calvert-Lewin", "Gyökeres"]
};

const TeamTable = ({ teamName, teamData, rationale }) => {
  return (
    <div className="team-section">
      <h2>{teamName}</h2>
      <p className="rationale">{rationale}</p>
      <table>
        <thead>
          <tr>
            <th>Goalkeepers</th>
            <th>Defenders</th>
            <th>Midfielders</th>
            <th>Forwards</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul className="player-list">
                {teamData.goalkeepers.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="player-list">
                {teamData.defenders.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="player-list">
                {teamData.midfielders.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </td>
            <td>
              <ul className="player-list">
                {teamData.forwards.map((player, idx) => (
                  <li key={idx}>{player}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const rationale1 = "Team 1 was constructed using a greedy selection based on a hierarchical ranking system. The primary metric used was total points to ensure a foundation of proven high-performers, with recent form serving as the tiebreaker to identify players with upward momentum.";
  const rationale2 = "Team 2 was developed using an iterative, position-specific approach. Selection criteria were tailored to the role: clean sheets for goalkeepers, defensive contribution for defenders, ICT index for midfielders, and goal-scoring records for attackers, with total points used as the final tiebreaker.";

  return (
    <div className="app-container">
      <img src = 'claude-pl.png'></img>
      <h1>FPL Team Displays</h1>
      <h3>Website/teams completely produced by Claude</h3>
      <TeamTable teamName="Team 1" teamData={team1} rationale={rationale1} />
      <TeamTable teamName="Team 2" teamData={team2} rationale={rationale2} />
    </div>
  );
}

export default App;
