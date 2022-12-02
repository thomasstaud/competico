import React from 'react';
import TournamentTable from '../components/TournamentTable';

const TOURNAMENTS = [
  {tournament: "Valorant"},
  {tournament: "Bad Rats"},
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