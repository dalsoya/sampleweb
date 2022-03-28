import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://sampleweb:1234@cluster0.avbzy.mongodb.net/test'
);

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (error: any) => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleOpen);
