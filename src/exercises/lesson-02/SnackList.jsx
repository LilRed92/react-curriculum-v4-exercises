export default function SnackList() {
  let snacks = [
    { rank: 4, name: 'snack cakes' },
    { rank: 3, name: 'peanuts' },
    { rank: 2, name: 'beef jerky' },
    { rank: 1, name: 'fruit & yogurt' },
  ];

  const ascendSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ul>
        {ascendSnacks.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ul>
    </div>
  );
}
