import config from "config";

function login()
{
var Authcode = config.get("MongoUri");

var DbURL = "mongodb+srv://"+userName+":"+PassCode+"@cluster0.5juru.mongodb.net/myFirstDatabase?retryWrites=true&w=major"
var userName = getElementById("Mogno_Username");
var PassCode = getElementById("Mongo_Password");
var script = "mongodb+srv://Gator2020:Mcraft321!@cluster0.5juru.mongodb.net/myFirstDatabase?retryWrites=true&w=major";
}
const connectDatabase = async() => 
{
    try
    {
        await mongoose.connect(script, {useUnifiedTopology:true});
        console.log('connection');
        var connected = "Connected to database";
        //append to textfield that the user has connected..
        this.document.getElementById("Connected_richtextbox")+=connected;
        this.document.getElementById("Connected_richtextbox") = "Connetion succesful";

    

    }
   

    catch(error)
    {
         console.error(error.message);
        process.exit(1);
        connected = "Error please check credentials";
        this.getElementById("Connected_richtextbox") = connected;
    }
};

    export default connectDatabase;
