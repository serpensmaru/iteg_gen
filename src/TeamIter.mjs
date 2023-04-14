import Zombie from "./Zombie.mjs"

export default class Team {
    constructor() {
        this.team = []
        this.listType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    }
    add(newChar) {
        let typeChar = newChar.type
        if (this.listType.includes(typeChar)) {
            this.team.push(newChar)
            return this.team
        }
    }
    
    [Symbol.iterator]() {
        let current = -1
        let last = this.team.length
        console.log(current, last)
        return {
            next() {
                current++
                if (current > last) {
                    return {
                        done: false
                    }
                } else {
                    return {
                        value: this.team[current],
                        done: true
                    }
                }
            }
        }
    }

  }

// const x = new Zombie("vova", "Zombie")
// let y = new Team()
// y.add(x)
// y.add(x)
// y.add(x)

// console.log(y.team[0])

// for (let x of y) {
//     console.log(x)
// }

