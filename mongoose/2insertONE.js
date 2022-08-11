const mongoose = require("mongoose");

// connection creation and creation a new db

mongoose
  .connect("mongodb://localhost:27017/technialcentre", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

//Schema

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Collection creation
const Playlist = new mongoose.model("Playlist", playListSchema);

const createDocument = async () =>{
  try{
    const workout = new Playlist({
    name: "ashish",
    ctype: "mobile",
    videos: 12,
    active: true,
   });

  
   const result = await workout.save();
   console.log(result);
 }   catch(err){
    console.log(err);
    }
}

createDocument();


