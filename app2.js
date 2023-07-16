
const data10 = require ("./data10")
const yargs=require("yargs")

yargs.command({
    command : "add",
    describe: "to add an item",
    builder: {
        fname : {
            describe: "adding the first name ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "adding the last name ",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {

        data10.addPerson( x.id, x.fname , x.lname , x.city , x.age)
    }
 })

 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {

        data10.deleteData(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
   
    handler : ()=> {
        data10.readData ()
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })
 

yargs.parse() 
   
  



