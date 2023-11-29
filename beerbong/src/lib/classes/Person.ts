import type { IPerson } from '$lib/interfaces/drinker/IPerson'

export class Person implements IPerson {
    beerCounter = 0;
    shotCounter = 0;

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
        this.height = height; 
        this.gender = gender;
     }
    
    // Calculate BMI
    get bmi() {
        return this.weight / (this.height * this.height);
    }

    // Calculate BAC
    get bac() {
        if(this.gender === 'girl'){
            return 
        }
        else {
            return
        }
    }
    

}
