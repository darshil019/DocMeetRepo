let mongoose=require('mongoose')

mongoose.connect('mongodb+srv://krishimscit21:ipvudqVTC21DU3M1@cluster0.cxg5w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(()=>{
    console.log("Database Connected Successfully")
})
.catch((err)=>{
    console.log("Database Not Connected",err)
})
