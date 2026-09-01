type Color = "red" | "yellow" | "green"

const getTrafficAction = (light:Color):string => {
    if(light === "red") {
        return "Stop"
    } else
    if(light === "yellow") {
        return "Slow Down"
    } else if (light === "green")
    {
        return "Go"
    } else {
        return "Invalid"
    }
}

console.log(getTrafficAction("red"))
console.log(getTrafficAction("yellow"))
console.log(getTrafficAction("green"))
console.log(getTrafficAction("greena"))