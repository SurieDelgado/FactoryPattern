import Animal from "./Animal";

export default class Perro implements Animal{

    hablar(): string{
        return "guau guau, bailame perra";
    }
}