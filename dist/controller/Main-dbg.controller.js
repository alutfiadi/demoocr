"use strict";

sap.ui.define(["sap/m/MessageBox", "./BaseController", "com/al/ocr/thirdparty/tesseract.js"], function (MessageBox, __BaseController, __tesseractjs) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const createWorker = __tesseractjs["createWorker"];
  /**
   * @namespace com.al.ocr.controller
   */
  const Main = BaseController.extend("com.al.ocr.controller.Main", {
    onInit: function _onInit() {},
    sayHello: function _sayHello() {
      void this.loadWeatherData().then(result => {
        MessageBox.show(result);
      });
    },
    loadWeatherData: async function _loadWeatherData() {
      const worker = await createWorker('eng');
      const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
      console.log(ret.data.text);
      await worker.terminate();
      return ret.data.text;
    }
  });
  return Main;
});
