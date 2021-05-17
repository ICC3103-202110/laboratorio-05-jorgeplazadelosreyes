const inquirer = require('inquirer')
const figlet = require('figlet')
const chalk = require('chalk')
const {printTable} = require('console-table-printer')


function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip Calculator',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(i1,i2){
    const bill = i1
    const percent = i2
    const tip = (bill/100) * percent
    const total = bill + tip 
    return [
        {"Bill amount": bill},
        {"Tip (%)": percent},
        {"Tip": tip},
        {"Total": total}
    ]
}

function view(i1,i2){
    return {
        title: getTitle(),
        table: getTable(i1,i2)
    }
}

function input1(){
    const msg = "Bill amount?"
    return msg
}

function input2(){
    const msg = "Tip(%)"
    return msg
}

module.exports = {
    view,
    input1,
    input2
}
