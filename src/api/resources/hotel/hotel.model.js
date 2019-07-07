import mongoose from 'mongoose';

//need to change
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