let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://panditdarshil5454:sVr3ha3RkYF8iGfw@darshil.0okpl.mongodb.net/?retryWrites=true&w=majority&appName=Darshil')
.then(()=>{
    console.log("DATABASE CONNECTED SUCCESSFULLY")
})
.catch((err)=>{
    console.log("DATABASE NOT CONNECTED SUCCESSFULLY",err)
})