/*

- Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers.
  Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain

  use when we need to perform multiple checks sequentially. (IMP)

  for example : Authentication -> Authorization -> validation -> some more validation -> caching + .........


  Like many other behavioral design patterns, the Chain of Responsibility relies on transforming particular behaviors into stand-alone objects called handlers.

Approach 1:
  - In addition to processing a request, handlers pass the request further along the chain. 
  - The request travels along the chain until all handlers have had a chance to process it.
  - Here’s the best part: a handler can decide not to pass the request further down the chain and effectively stop any further processing

Approach 2:
  - there’s a slightly different approach in which, upon receiving a request, a handler decides whether it can process it
  - If it can, it doesn’t pass the request any further
  - So it’s either only one handler that processes the request or none at all


It’s crucial that all handler classes implement the same interface (IMP)

1. Design ATM
2. Design Vending Machine
3. Design Logger


Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests
 in various ways, but the exact types of requests and their sequences are unknown beforehand

*/

interface ILogProcessor {
  log(logLevel: number, message: string): void;
}

abstract class LogProcessor implements ILogProcessor {
  static INFO: number = 1;
  static DEBUG: number = 2;
  static ERROR: number = 3;
  nextLogProcessor?: ILogProcessor;

  constructor(nextLogProcessor?: ILogProcessor) {
    this.nextLogProcessor = nextLogProcessor;
  }

  log(logLevel: number, message: string): void {
    if (this.nextLogProcessor != null) {
      this.nextLogProcessor.log(logLevel, message);
    }
  }
}

class InfoLogProcessor extends LogProcessor {
  constructor(nextLogProcessor?: ILogProcessor) {
    super(nextLogProcessor);
  }
  log(logLevel: number, message: string): void {
    if (logLevel == LogProcessor.INFO) {
      console.log('LOGGIN INFO', message);
    } else {
      super.log(logLevel, message);
    }
  }
}

class ErrorLogProcessor extends LogProcessor {
    constructor(nextLogProcessor?: ILogProcessor) {
      super(nextLogProcessor);
    }
    log(logLevel: number, message: string): void {
      if (logLevel == LogProcessor.ERROR) {
        console.log('LOGGIN ERROR', message);
      } else {
        super.log(logLevel, message);
      }
    }
}

class DebugLogProcessor extends LogProcessor {
    constructor(nextLogProcessor?: ILogProcessor) {
      super(nextLogProcessor);
    }
    log(logLevel: number, message: string): void {
      if (logLevel == LogProcessor.DEBUG) {
        console.log('LOGGIN BEBUG', message);
      } else {
        super.log(logLevel, message);
      }
    }
}

const logObject = new InfoLogProcessor(new DebugLogProcessor(new ErrorLogProcessor(undefined)))

logObject.log(LogProcessor.DEBUG,"my debug message")
logObject.log(LogProcessor.ERROR,"my error message")
logObject.log(LogProcessor.INFO,"my info message")
