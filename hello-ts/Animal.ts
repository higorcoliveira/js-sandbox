export class Animal {
    
    constructor(private specie: string, private numberOfPaws: number) {

    }

    getSpecie() {
        return this.specie;
    }

    getNumberOfPaws() {
        return this.numberOfPaws;
    }
}