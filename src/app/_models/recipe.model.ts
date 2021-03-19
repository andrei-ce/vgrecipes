export class Recipe {
  // public so it can be accessed if this object is instanciated somewhere else
  public name: string;
  public description: string;
  public imagePath: string;

  // so we can use the New key and pass arguments
  constructor(name: string, desc: string, imagePath:string) {
    this.name = name
    this.description = desc;
    this.imagePath = imagePath;
  }
  
}