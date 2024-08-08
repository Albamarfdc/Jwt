import express from 'express';
import cors from 'cors';
import { logger } from 'logger-express';
import { serverLog } from "./middlewares/serverLog.js"

import songsRouter from './config/routes/songs.routes.js';
import loginRoutes from './config/routes/login.routes.js';
import userRoutes from './config/routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use(serverLog)

app.use('/api/v1', userRoutes);
app.use('/api/v1', songsRouter); // Al inicio
app.use('/api/v1', loginRoutes);

app.listen(PORT, console.log(`🔥 Server on 🔥 http://localhost:${PORT}`));
