/**
 *  - Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request(imp)
 * 
 *  - This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations
 *  
 *   when?
 * https://refactoring.guru/design-patterns/command
 *  - undo and redo operations (very imp)
 * 
 * 
 * The Command pattern suggests that GUI objects(client side objects) shouldn’t send these requests directly.
 *  Instead, you should extract all of the request details, such as the object being called,
 *  the name of the method and the list of arguments into a separate command class with a single method that triggers this request
 * 
 * 
 * 
 * You can use Command and Memento together when implementing “undo”.
 *  In this case, commands are responsible for performing various operations over a target object,
 *  while mementos save the state of that object just before a command gets executed
 * 
 * 
 * 
 */