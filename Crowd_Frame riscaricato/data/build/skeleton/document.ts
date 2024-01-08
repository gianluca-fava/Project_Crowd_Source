export class Document {

		index: number;
		params: { };
		id: string;
		fact_check_ground_truth_label: string;
		fact_check_ground_truth_value: number;
		fact_check_source: string;
		speaker_name: string;
		speaker_party: string;
		statement_date: string;
		statement_description: string;
		statement_text: string;

		constructor (
			index: number,
			data: JSON,
			params: JSON
		) {

			this.index = index
			this.params = { }
			this.params["task_type"] = params["task_type"] || "Main"
			this.params["allow_back"] = params["allow_back"]
			this.params["check_gold"] = params["check_gold"]
			this.params["reset_jump"] = params["reset_jump"]
			this.id = data["id"]
			this.fact_check_ground_truth_label = data["fact_check_ground_truth_label"]
			this.fact_check_ground_truth_value = data["fact_check_ground_truth_value"]
			this.fact_check_source = data["fact_check_source"]
			this.speaker_name = data["speaker_name"]
			this.speaker_party = data["speaker_party"]
			this.statement_date = data["statement_date"]
			this.statement_description = data["statement_description"]
			this.statement_text = data["statement_text"]

		}

}
