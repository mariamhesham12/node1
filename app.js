const person={
    fname:"ahmed",
    lname:"hossam",
    age:20,
    city:"alex"
}

const fs=require("fs")

const personJson=JSON.stringify(person)
fs.writeFileSync("person.json" , personJson)

console.log(fs.readFileSync("person.json").toString())

const personObj=JSON.parse(personJson)

personObj.fname="adel"
personObj.lname="ahmed"
personObj.age=40
personObj.city="cairo"

const JsonPersonObj=JSON.stringify(personObj)

fs.writeFileSync("person.json",JsonPersonObj)