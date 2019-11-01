class animal{
    constructor(name, typeOfPet){
        this.name = name;
        this.typeOfPet = typeOfPet;
        this.health = 100;
        this.hunger = 100;
        this.happy = true;
    }
    healthCheck(){
        if (this.health > 0){
            this.health --
        }
        else{
            this.dead = true;
        }
    }
    
    
}

let rosie = new animal('rosie', 'dog')
console.log(rosie.health)
rosie.healthCheck()
console.log(rosie.health)

while (!rosie.dead){
    console.log(rosie.health)
    rosie.healthCheck()
}
