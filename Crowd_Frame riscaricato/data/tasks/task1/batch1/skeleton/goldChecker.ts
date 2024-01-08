export class GoldChecker {

	static performGoldCheck(goldConfiguration : Array<Object>, taskType =
	null) {

		let goldChecks = new Array<boolean>()

		/* If there are no gold elements there is nothing to be checked */
		if(goldConfiguration.length<=0) {
			goldChecks.push(true)
			return goldChecks
		}

		for (let goldElement of goldConfiguration) {

			/* Element attributes */
			let document = goldElement["document"]
			/* Worker's answers for each gold dimensions */
			let answers = goldElement["answers"]
			/* Worker's notes*/
			let notes = goldElement["notes"]

			let goldCheck = true

			/* CONTROL IMPLEMENTATION STARTS HERE */
			/* Write your code; the check for the current element holds if
			goldCheck remains set to true */



			/* CONTROL IMPLEMENTATION ENDS HERE */
			/* Push goldCheck inside goldChecks array for the current gold
			element */
			goldChecks.push(goldCheck)

		}

		return goldChecks

	}

}
