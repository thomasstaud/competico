function Tournament({ tournament }) {
    return (
        <div>
            <img src={tournament.img} alt="Kein Bild verfügbar"/>
            <p colSpan="2">
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
            <div>{rows}</div>
        </>
    );
}