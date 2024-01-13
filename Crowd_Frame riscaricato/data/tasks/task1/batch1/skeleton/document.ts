export class Document {

		index: number;
		params: { };
		id: string;
		review_time: string;
		product_title: string;
		product_brand: string;
		review_text: string;

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
			this.review_time = data["review_time"]
			this.product_title = data["product_title"]
			this.product_brand = data["product_brand"]
			this.review_text = data["review_text"]

		}

}
