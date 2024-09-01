// CONF. MODULES \\
import { Router } from 'express';

// CONF \\
const router = Router();

// ROTAS \\
router.get('/', (req, res) => res.json({ message: 'Hello World!' }));

// EXPORT ROTAS \\
export default router;
