import Animal from "./Animal";
import Factory from "./Factory";
import Gato from "./Gato";

export default class GatoFactory extends Factory{
    public crearAnimal = ():Animal => new Gato();
}
