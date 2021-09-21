import Animal from "./Animal";
import Factory from "./Factory";
import Perro from "./Perro";

export default class PerroFactory extends Factory{
    public crearAnimal = ():Animal => new Perro();
}
