import './TournamentTable.css';

function Tournament({ tournament }) {
    return (
        <div className="tournament-box">
            <img className="tournament-img" src={tournament.img} alt="Kein Bild verfügbar"/>
            <p className="tournament-text" colSpan="2">
                {tournament.name}
            </p>
        </div>
    );
}

export default function TournamentTable({ tournaments }) {
    const rows = [];

    tournaments.forEach((tournament) => {
        rows.push(
        <Tournament
            tournament={tournament} />
        );
    });

    return (
        <>
            <h1>Turniere</h1>
            <div className="tournament-container">{rows}</div>
        </>
    );
}