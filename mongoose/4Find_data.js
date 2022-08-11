const mongoose = require("mongoose");

// connection creation and creation a new db

mongoose.connect("mongodb://localhost:27017/technialcentre", {
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

const createDocument = async () => {
  try {
    const Mobile = new Playlist({
      name: "ashish",
      ctype: "mobile",
      videos: 12,
      active: true,
    });

    const AC = new Playlist({
      name: "rohan",
      ctype: "AC",
      videos: 12,
      active: true,
    });

    const Bajaj = new Playlist({
      name: "ayush",
      ctype: "TV",
      videos: 12,
      active: true,
    });

    const Song = new Playlist({
      name: "Aman",
      ctype: "TV",
      videos: 12,
      active: true,
    });

    const result = await Playlist.insertMany([Mobile, AC, Bajaj, Song]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();


const getDocument = async () =>
{
    // const result = await Playlist.find()
    //  const result = await Playlist.find({ctype:"TV"});
    // const result = await Playlist.find({ ctype: "TV" }).select({name:1});
        // const result = await Playlist.find({ ctype: "TV" }).select({ name: 1 }).limit(1).count();
        //  const result = await Playlist.find({ctype:"TV"}).select({name:1}).countDocuments();
         const result = await Playlist.find({ active:true }).select({ name: 1 }).sort({name:-1});
    console.log(result);
}

getDocument();
