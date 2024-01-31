class Avenger {

    readonly name: string
    
    // # privada
    private powerScore: number

    // public, por defecto, protected -> class que heredan
    
    wonBattles: number = 0

    constructor( name: string, powerScore: number) {
        
        this.name = name, this.powerScore = powerScore
    
    }

    get fullName() {
    
        return `${this.name} de poder ${this.powerScore}`

    }

    set power(newPower: number) {
        
        if(newPower < 100) {
            
            this.powerScore = newPower

        } else {
            
            throw new Error("Error bro")
        
        }
    
    }

}

const avengers = new Avenger("Spidey", 80)

avengers.power = 90

//avengers.name = "Hulk"