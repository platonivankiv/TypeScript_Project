import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './routes/products.js';
const app = express();
app.use(express.json());
app.use('/api/v1', router);
const PORT = process.env.PORT ?? 8000;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
//# sourceMappingURL=server.js.map