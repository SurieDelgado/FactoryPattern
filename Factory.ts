import Animal from "./Animal";

export default abstract class Factory{
    public abstract crearAnimal(): Animal;
    public hablar = ():string => this.crearAnimal().hablar();
}