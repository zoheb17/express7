import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT
app.use(express.json())

// app.post("/students/:person",(req,res)=>{
//     try {
//         let myStudent=req.params.person;
//         console.log(myStudent);
//         res.status(200).json({msg:`i am ${myStudent} API`})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({msg:error})
        
//     }
// })

// app.post("/school/:rollnumber",(req,res)=>{
// try {
//     let myStudent=req.params.rollnumber
//     res.status(200).json({msg:`i am rollnumber ${myStudent}`})
// } catch (error) {
//     console.log(error);
//     res.status(500).json({msg:error})
    
// }
// })






// 3rd .query

app.post("/user",(req,res)=>{
    try {
        let data = req.query;
    console.log(data);
    res.status(200).json(data)
    } catch (error) {
        console.log(error);
    res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
    console.log(`server start http://localhost:${port}`);
})




