export declare const BleDataAction: {
    /**
     * Parse a string's new line character before converting to a buffer
     * @param {string} str - a string to parse
     * @returns {string} a string
     */
    parseNewLine: (str: string) => string;

    /**
    * Convert json data data to buffers.
    * @param {Object} data - a ble command payload in json format
    * @returns {ArrayBuffer} an array buffer
    */
    dataToBuffers: (data: any) => Promise<Array<any>>;

     /**
    * Convert buffers to a json data.
    * @param {ArrayBuffer} data - an array buffer recieved from the device
    * @returns {Object} a JSON object
    */
    buffertoData: (data: Array<any>) => any;
};
