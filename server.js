const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/moveon/:endpoint', async (req, res) => {
  const { endpoint } = req.params;
  const { query } = req;
  
  try {
    const response = await axios.get(`https://your-moveon-domain.com/api/${endpoint}`, {
      params: query,
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response.status).json(error.response.data);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
