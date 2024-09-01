// CONF. MODULES \\
import express from 'express';

import router from './router';

// CONF. \\
const app = express();
const PORT = 3000;

// CONF. ROTAS \\
app.use(router);
app.use(express.json());

// START SERVIDOR \\
app.listen(PORT, () => {
  console.log(`🚀 http://localhost:${PORT}`);
});
