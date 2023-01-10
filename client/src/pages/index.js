import React from 'react';
import TournamentTable from '../components/TournamentTable';

const TOURNAMENTS = [
  {name: "Valorant", img: "https://cdn.pocket-lint.com/r/s/970x/assets/images/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg"},
  {name: "Bad Rats", img: "https://cdn.akamai.steamstatic.com/steam/apps/34900/header.jpg?t=1624719679"},
];

export default function Home() {
  return (
    <div
      style={{
        margin: '5vh'
      }}
    >
      <h1>Willkommen auf Competico, der einzig wahren E-Sports-Turnier-Website</h1>

      <TournamentTable
        tournaments={TOURNAMENTS} />
    </div>
  );
};