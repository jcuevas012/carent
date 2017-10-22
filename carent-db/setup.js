const Db = require('./')
const config = require('../config')
const chalk = require('chalk')

const db = new Db(config.db)

async function setup() {
	try {
		await db.drop()
		const rs = await db.setup()
		console.log(chalk.green(`${rs}`))
		process.exit(0)
	} catch (e) {
		console.error(chalk.red(e.message))
		console.error(e.stack)
		process.exit(1)
	}
}

setup()
