// /api/validate-user.js
export default function handler(req, res) {
  const authorizedUsernames = ["lol3929030", "zawarudochai12"];

  if (req.method === 'POST') {
    const { username } = req.body;

    if (authorizedUsernames.includes(username)) {
      res.status(200).json({ authorized: true });
    } else {
      res.status(200).json({ authorized: false });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}