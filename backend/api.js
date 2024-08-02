const express = require('express');
const router = express.Router();

const user = {
  user_id: 'parshva_jain',
  email: 'pp2397@srm.edu.in',
  roll_number: 'RA2111003010725',
};


router.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

router.post('/bfhl', (req, res) => {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({ is_success: false, message: 'Invalid input format' });
  }

  const numbers = [];
  const alphabets = [];
  let highestAlphabet = '';

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
      if (highestAlphabet < item) {
        highestAlphabet = item;
      }
    }
  });

  res.json({
    is_success: true,
    user_id: user.user_id,
    email: user.email,
    roll_number: user.roll_number,
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : []
  });
});

module.exports = router;