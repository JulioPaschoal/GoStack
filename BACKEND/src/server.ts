// CONF. MODULES \\
import express from 'express';

// CONF. \\
const app = express();
const PORT = 3000;

// CONF. ROTAS \\
app.get('/', (req, res) => res.json({ message: 'Hello World!' }));

// START SERVIDOR \\
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});
