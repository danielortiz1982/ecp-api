const fs                = require('fs')
const chalk             = require('chalk')
const apiDataConfig     = require('../../api-data-config.json')
const excelToJson       = require('convert-excel-to-json')

fs.readdir(apiDataConfig.excel.path, (err, excelFiles)=>{
    excelFiles.forEach( excelFile => {
        const jsonFileName      = excelFile.split('.')
        const sourceFile        = `${apiDataConfig.excel.path}/${excelFile}`
        const columnToKeyObj    = excelToJson({sourceFile})
        const columnToKey       = columnToKeyObj.Sheet1[0]
        const results           = excelToJson({sourceFile, columnToKey})
        const resultsArr        = results.Sheet1
        resultsArr.shift()
        const sanitizeProps = str => str.replace(/[^a-zA-Z0-9]/g, '')
            const isArray =  arr => Array.isArray(arr)
            const isObject = obj =>  obj === Object(obj) && !isArray(obj) && typeof obj !== 'function'
            const ecpDataFormatter = (obj) => {
              if (isObject(obj)) {
                const n = {}
                Object.keys(obj).forEach( key => n[sanitizeProps(key)] = ecpDataFormatter(obj[key]))
                return n
              } else if ( isArray( obj ) ) 
                return obj.map ( item => ecpDataFormatter(item) )
              return obj
            }
        let excelConvertjsonOutput = JSON.stringify(ecpDataFormatter(resultsArr))
        fs.writeFile(`${apiDataConfig.json.path}/${jsonFileName[0]}.json`, excelConvertjsonOutput, err => (err ? console.error(`JSON Write ${err}`) : console.log(`${chalk.blue(jsonFileName[0])} ${chalk.yellow('file saved')}.`)))
    })
})