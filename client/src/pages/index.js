import React from 'react';
import TournamentTable from '../components/TournamentTable/TournamentTable';

const TOURNAMENTS = [
  {name: "Valorant", img: "https://cdn.pocket-lint.com/r/s/970x/assets/images/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg"},
  {name: "Bad Rats", img: "https://cdn.akamai.steamstatic.com/steam/apps/34900/header.jpg?t=1624719679"},
  {name: "Fortnite", img: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/03/12/6cfe02af-5700-4808-bd91-40ab0636902b/fornite-landung"},
  {name: "Roblox", img: "https://staticg.sportskeeda.com/editor/2022/02/9cd7d-16437569416713-1920.jpg"},
  {name: "Garfield Kart", img: "https://store-images.s-microsoft.com/image/apps.31021.13910948960752738.f71938cc-f22c-4314-b316-4ac3bfe3ce3c.feff87fd-ee64-49b6-98b8-a3002e2f2d32?q=90&w=480&h=270"}
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