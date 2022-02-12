import mongoose from 'mongoose';
import config   from 'config';
import { error } from 'console';
//Retrieves connection string
const db = config.get('mongoURI');

//conencts to Mongo
const connectDatabase = async() => 
{
    try
    {
        await mongoose.connect(db, {useUnifiedTopology:true});
        console.log('connection');
    }
   

    catch(error)
    {
        console.log(error.message);
        process.exit(1);
    }
    export default connectDatabase;
}
