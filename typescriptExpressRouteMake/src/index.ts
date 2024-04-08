import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port = process.env.PORT || 3001;

app.get('/',(req: Request,res: Response)=>{
    res.send("Server is runing");
});

app.listen(port, ()=> console.log( `server is listing at ${port}`));