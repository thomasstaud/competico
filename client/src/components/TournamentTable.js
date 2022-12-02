function Tournament({ tournament }) {
return (
    <tr>
    <th colSpan="2">
        {tournament}
    </th>
    </tr>
);
}

export default function TournamentTable({ tournaments }) {
const rows = [];

tournaments.forEach((tournament) => {
    rows.push(
    <Tournament
        tournament={tournament.tournament} />
    );
});

return (
    <table>
    <thead>
        <tr>
        <th>Turniere</th>
        </tr>
    </thead>
    <tbody>{rows}</tbody>
    </table>
);
}