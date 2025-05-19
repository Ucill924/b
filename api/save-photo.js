export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { image } = req.body;

    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, 'base64');

    const TELEGRAM_BOT_TOKEN = "7995321594:AAHy0AGLm7yV1pY-lvV6XAUpi0JbBr1eadM";
    const TELEGRAM_CHAT_ID = "1945173961";
    
    const tgUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;

    const formData = new FormData();
    formData.append("chat_id", TELEGRAM_CHAT_ID);
    formData.append("photo", new Blob([buffer], { type: "image/png" }), "photo.png");

    await fetch(tgUrl, {
      method: "POST",
      body: formData
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
