/*

The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (new operator).

*/
import * as fs from "fs";

export interface ILogger {
    log(message: string): void;
}

export class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(`[Console] ${message}`);
    }
}


export class FileLogger implements ILogger {
    private readonly filePath: string;
    
    constructor(filePath: string) {
        this.filePath = filePath;
    }
    
    log(message: string): void {
        fs.appendFileSync(this.filePath, `[File] ${message}\n`);
    }
}

export enum LoggerType {
    Console,
    File
}

export class LoggerFactory {
    // we can pass type and use switch case as below or can use different method to create diffrent object
    static createLogger(type: LoggerType, options?: any): ILogger {
        switch (type) {
            case LoggerType.Console:
                return new ConsoleLogger();
            case LoggerType.File:
                if (options && options.filePath) {
                    return new FileLogger(options.filePath);
                } else {
                    throw new Error("File path is missing for FileLogger.");
                }
            default:
                throw new Error("Invalid logger type.");
        }
    }
}

const consoleLogger = LoggerFactory.createLogger(LoggerType.Console);
consoleLogger.log("This is a console log.");

const fileLogger = LoggerFactory.createLogger(LoggerType.File, { filePath: "logs.txt" });
fileLogger.log("This is a file log.");