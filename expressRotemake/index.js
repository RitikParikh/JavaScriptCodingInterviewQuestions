const app = require('express')();
const route = require('./route');
app.get('/healthCheck',(req,res)=>{
    console.log("Sever Is Ruuning...");
    res.end('Server is running');
});

app.use('/',route);

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>console.log(`Server is listen on ${PORT}`));


