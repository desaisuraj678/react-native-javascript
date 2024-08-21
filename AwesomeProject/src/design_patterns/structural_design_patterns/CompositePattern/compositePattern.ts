/*
 - The Composite design pattern is a structural pattern that lets you compose objects into tree structures to represent part-whole hierarchies.
 -  It allows clients to treat individual objects and compositions of objects uniformly (imp)
 - leaf object and composite object implements same interface where as composite object has add method to add object of that interface
 - consists of three parts :
       1. Component interface  (The Component interface describes operations that are common to both simple and complex elements of the tree)
       2. Leaf class
       3. Composite class

 - Use the pattern when you want the client code to treat both simple and complex elements uniformly. 

 when ?
  - when there is tree like structure or object inside object

  example - 1. delivery box
            2. file and directoy system


 how ?
   - 
*/

interface IFileSystem {
  ls(): void;
}

class FileClass implements IFileSystem {
  private fileName: string;
  constructor(name: string) {
    this.fileName = name;
  }
  ls(): void {
    console.log('file name is ', this.fileName);
  }
}

class Directory implements IFileSystem {
  private directoryName: string;
  private fileSystemList : Array<IFileSystem>
  constructor(name: string) {
    this.directoryName = name;
    this.fileSystemList = new Array()
  }
  
  ls(): void {
    console.log('directory name is ', this.directoryName);
    for (let item of this.fileSystemList) {
      item.ls()
    }
  }

  add(fsObject:IFileSystem) : void {
      this.fileSystemList.push(fsObject)
  }
}

const movie =  new Directory("MovieDirectory");
const border = new FileClass("Border");
const comedyMovie = new Directory("Comedy Moview")
const dhamal = new FileClass("dhamal");
comedyMovie.add(dhamal)

movie.add(border)
movie.add(comedyMovie)

console.log(movie.ls())
