const express= require("express") 
const app = express() 
const PORT = process.env.PORT || 8000 
app.get("/profile",(res,req)=>{ 
    req.send("profile get") 
}) 
app.post("/profile",(res,req)=>{ 
    req.send("profile post") 
}) 
app.put("/profile",(res,req)=>{ 
    req.send("profile put") 
}) 
app.listen(PORT, ()=>console.log("Server is running lol at " + PORT))