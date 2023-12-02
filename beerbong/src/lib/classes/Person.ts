import type { IPerson } from '$lib/interfaces/drinker/IPerson'

export class Person implements IPerson {
    public beerCounter = 0;
    public shotCounter = 0;
    private AlcoholGram = 12;

    constructor(
        public name: string,
        public age: number,
        public weight: number,
        public height: number,
        public gender: string
    ) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
     }

    /**
     * A function that calculate the BAC (Blood Alcohol Content) of a person
     * It does not take time into account
     * @returns BAC
     */
    get bac() {
        const alcoGram = (this.beerCounter * this.AlcoholGram) + (this.shotCounter * this.AlcoholGram);
        if(this.gender === 'girl'){
            return alcoGram / (this.weight * 0.6);
        }
        else {
            return alcoGram / (this.weight * 0.7);
        }
    }
    

}
