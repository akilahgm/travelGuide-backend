import mongoose from 'mongoose';

const {Schema} = mongoose;
const userSchema = new Schema({
	email:{
		type: String,
		required: true,
	},
	firstName:{
		type:String,
	},
	lastName:{
		type:String,
	},
	password:{
		type:String,
	},
	type:{
		type:String,
	}
});

export default mongoose.model('User', userSchema);