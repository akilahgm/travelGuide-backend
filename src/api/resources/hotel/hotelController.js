
import hotel from './hotel.model';
import hotelService from './hotel.service';
import jwt from '../../helper/jwt';

const ip='http://172.20.10.11:3999'

export default{
	async getKey(req,res){
		try{
			//const Team = await team.findOne({teamName:req.body.teamName});
		//const token =jwt.issue({id:Team._id},'1d');
		//return res.json({token});
		return res.json({success:true});
		}catch(err){
			console.error(err);
			return res.status(500).send(err);
		}	
		
	},
	async signUp(req,res) {
		try{
			const Hotel = await hotel.findOne({email:req.body.email});
			//need to add all details. Not complete
			if (!User){
				const hotelObj = new user({
					email:req.body.email,
					password:req.body.password,
					type:req.body.type,
					firstName:req.body.firstName,
					lastName:req.body.lastName,
				})
				const Hotel = await hotel.create(hotelObj);
				return res.json({success:true});
			}
			else{
				return res.json({success:false});
			}
			

		}catch(err){
			console.error(err);
			return res.status(500).send(err);
		}	
	},
	async login(req,res) {
		try{
			const Hotel = await hotel.findOne({email:req.body.email});
			if (Hotel.password === req.body.password){
				return res.json({success:true});
			}else{
				return res.json({success:false});
			}
		}catch(err){
			console.error(err);
			return res.status(500).send(err);
		}	
	},
	async bookHotel(req,res) {
		try{
			const location = req.body.location;
			const startDate = req.body.startDate;
			const endDate = req.body.endDate;
			const singleBedCount = req.body.singleBedCount;
			const doubleBedCount = req.body.doubleBedCount;
			db.inventory.find( {
				$and : [
					{ $or : [ { price : 0.99 }, { price : 1.99 } ] },
					{ $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
				]
			} )
		}catch(err){
			console.error(err);
			return res.status(500).send(err);
		}	
	}
}

