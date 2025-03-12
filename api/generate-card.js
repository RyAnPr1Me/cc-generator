export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const cardTypes = {
    VISA: '4',
    MASTERCARD: '51',
    AMEX: '34',
    DISCOVER: '6011',
  };

  const { type = 'VISA' } = req.query;
  const prefix = cardTypes[type] || '4';
  const cardNumber = prefix + Math.random().toString().slice(2, 14);
  const expiry = `${String(Math.floor(1 + Math.random() * 12)).padStart(2, '0')}/${
    new Date().getFullYear() + Math.floor(Math.random() * 5)
  }`;
  const cvv = Math.floor(100 + Math.random() * 900).toString();

  res.status(200).json({ cardNumber, expiry, cvv, type });
}
