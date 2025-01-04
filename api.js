import express from 'express'
import router from './routers/index.router.js'


const api = express();

api.use(express.json());
api.use('/api', router);

const PORT = process.env.PORT || 4001;
api.listen(PORT, ()=>{
    console.log(`Service listening on http://localhost:${PORT}`);
})