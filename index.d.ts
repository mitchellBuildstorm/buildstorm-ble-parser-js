export declare const BleDataAction: {
    parseNewLine: (str: string) => string;
    dataToBuffers: (data: any) => Promise<Array<any>>;
    buffertoData: (data: Array<any>) => any;
};
