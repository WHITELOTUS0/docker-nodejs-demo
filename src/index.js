const app = require("express")();

app.get("/", (req, res)=>
    res.json({message:"Dude Relax , Docker is easy"})
);

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`app listening on http://localhost:${port}`))