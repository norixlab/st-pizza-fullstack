import mongoose from 'mongoose';

export async function connect(){
	try {
		await mongoose.connect(process.env.DATABASE_URI);

		const connection = mongoose.connection;

		connection.on('connected', ()=>{
			console.log('DB CONNECTED')
		});
		connection.on('disconnected', () => {
            console.log('DB DISCONNECTED');
        });
		connection.on('error', (err) => {
			console.log('DB ERROR', err)
			
		})
	} catch (error) {
		console.log("DB ERROR")
		console.log(error)
	}
}