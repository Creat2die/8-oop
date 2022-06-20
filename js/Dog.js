class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
        this.bone = 0;
    }

    voice() {
        return ` ${this.name}: Au au!`;
    }

    changeName(newName){
        const oldName = this.name;
        this.name = newName;
        return `${oldName} -> ${newName}`;


    }

    getBone(){
        this.bone +=1; 
        return `${this.name}: ${this.bone} bone/-s`
    }
}

module.exports = Dog;