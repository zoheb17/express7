import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT
app.use(express.json())




// app.get

app.get('/',(req,res)=>{
   try {
     res.status(200).json({msg:"hello"})

   } catch (error) {
    console.log(error);
    res.status(500).json({msg:error})
    
   }
})

app.post("/home",(req,res)=>{
    try {
        let data=req.body
        res.status(200).json({msg:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})



// method :put
// existing update 
// route: /update

app.put("/update",(req,res)=>{
    try {
        let updatingData=req.body
        console.log(updatingData);
        res.status(200).json({msg:"updating data"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


// method :delete
// deleting data 
// route:/delete


app.delete("/",(req,res)=>{
try {
        let userdata=req.body;
    let userEmail=userdata.email;

    console.log(userEmail);
    res.status(200).json({msg:"user account deleted"})
} catch (error) {
    res.status(500).json({msg:error})
    
}
})

app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`);
})