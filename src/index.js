const Fcrypt = require('./Fcrypt');
require('dotenv/config');

const main = () => {
	try {
		const [action, targetFile, secretKey] = process.argv.slice(2);

		if (action === 'enc') {
			Fcrypt.encrypt(targetFile, secretKey || process.env.SECRET_KEY);
			return console.log(`${targetFile} ENCRYPTED`);
		} else if (action === 'dec') {
			Fcrypt.decrypt(targetFile, secretKey || process.env.SECRET_KEY);
			return console.log(`${targetFile} DECRYPTED`);
		}

		console.log('Usage: npm start <enc|dec> <file> <secretKey:optional>');
	} catch (err) {
		console.log(`${err.name}: ${err.message}`);
	}
};

main();
