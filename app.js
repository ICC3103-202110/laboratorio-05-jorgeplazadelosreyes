const {printTable} = require('console-table-printer')
const {input1, input2,view} = require('./view')
var prompt = require('prompt-sync')({sigint: true});

function app(){
    const {title,table} = view("","")
    console.log(title) 
    printTable(table)
    while (true){
        const i1 = parseFloat(prompt(input1()));
        const i2 = parseFloat(prompt(input2()));
        const {title,table} = view(i1,i2)
        console.clear()
        console.log(title) 
        printTable(table)
    }
}

module.exports = {
    app
}

