import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import { createWorker } from 'tesseract.js';

/**
 * @namespace com.al.ocr.controller
 */
export default class Main extends BaseController {

	onInit(): void {
		
	}
	public sayHello(): void {
		void this.loadWeatherData().then((result) => {
			MessageBox.show(result);
		});
	}
	async loadWeatherData() {
		const worker = await createWorker('eng');
		const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
		console.log(ret.data.text);
		await worker.terminate();
		return ret.data.text;
	}
	
}
