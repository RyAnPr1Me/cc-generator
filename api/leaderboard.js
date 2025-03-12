let leaderboard = [
  { name: "User1", count: 25 },
  { name: "User2", count: 18 },
  { name: "User3", count: 12 }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(leaderboard);
  }

  if (req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "User name is required" });
    }

    const userIndex = leaderboard.findIndex((user) => user.name === name);

    if (userIndex !== -1) {
      leaderboard[userIndex].count += 1;
    } else {
      leaderboard.push({ name, count: 1 });
    }

    leaderboard.sort((a, b) => b.count - a.count);
    return res.status(200).json({ message: "Leaderboard updated", leaderboard });
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
