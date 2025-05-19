export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image } = req.body;

    console.log("📷 Foto diterima:", image.substring(0, 100)); 
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
