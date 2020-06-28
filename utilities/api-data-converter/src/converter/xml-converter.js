const fs                = require('fs')
const chalk             = require('chalk')
const apiDataConfig     = require('../../api-data-config.json')
const xmlToJson         = require('xml-js')

fs.readdir(apiDataConfig.xml.path, (err, xmlFiles) => {
    if(err)
        console.error(err)
    xmlFiles.forEach( xmlFile => {
        const jsonFileName = xmlFile.split('.')
        fs.readFile(`${apiDataConfig.xml.path}/${xmlFile}`, {encoding: 'utf-8'}, (err, data)=>{
            if(err)
                console.error(err)
            let xmlConvertjson      = xmlToJson.xml2json(data, {compact: false, spaces: 4})
            let xmlConvertjsonParse = JSON.parse(xmlConvertjson)
            const sanitizeProps = str => str.replace(/[^a-zA-Z0-9]/g, '' )
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

            if(xmlConvertjsonParse.elements[0].type === 'instruction')
              xmlConvertjsonParse.elements.shift()

            const jsonFileNameArr   = jsonFileName[0].split('_')
            const attrObject        = xmlConvertjsonParse.elements[0].attributes
            const hasAttrObject     = typeof attrObject != 'undefined'

            if(jsonFileNameArr[1] === 'Flipchart'){
              
              const themeNumber       = jsonFileNameArr[2].slice(0, 2)
              const weekNumber        = jsonFileNameArr[2].slice(2, 5)

              if(hasAttrObject && weekNumber === 'W1')
                attrObject.week = 'week_001'

              if(hasAttrObject && weekNumber === 'W2')
                attrObject.week = 'week_002'

              if(hasAttrObject && weekNumber === 'W3')
                attrObject.week = 'week_003'

              if(hasAttrObject && weekNumber === 'W4')
                attrObject.week = 'week_004'

              // end of weeks

              if(hasAttrObject && themeNumber === 'T1')
                attrObject.theme = 'theme_001'

              if(hasAttrObject && themeNumber === 'T2')
                attrObject.theme = 'theme_002'

              if(hasAttrObject && themeNumber === 'T3')
                attrObject.theme = 'theme_003'

              if(hasAttrObject && themeNumber === 'T4')
                attrObject.theme = 'theme_004'

              if(hasAttrObject && themeNumber === 'T5')
                attrObject.theme = 'theme_005'

              if(hasAttrObject && themeNumber === 'T6')
                attrObject.theme = 'theme_006'

              if(hasAttrObject && themeNumber === 'T7')
                attrObject.theme = 'theme_007'

              if(hasAttrObject && themeNumber === 'T8')
                attrObject.theme = 'theme_008'

              // end of themes

            } 
            // end of jsonFileNameArr[1] === 'Flipchart'

            if(hasAttrObject && jsonFileNameArr[3] === 'Math')
              attrObject.module = 'math'
            if(hasAttrObject && jsonFileNameArr[3] === 'Lang')
              attrObject.module = 'language'
            if(hasAttrObject && jsonFileNameArr[3] === 'Lit')
              attrObject.module = 'literature'

            // end of modules

            if(typeof jsonFileNameArr[4] != 'undefined'){
              const themeNumber       = jsonFileNameArr[4].slice(0, 2)
              const weekNumber        = jsonFileNameArr[4].slice(2, 5)

              if(hasAttrObject && weekNumber === 'W01')
                attrObject.week = 'week_001'

              if(hasAttrObject && weekNumber === 'W02')
                attrObject.week = 'week_002'

              if(hasAttrObject && weekNumber === 'W03')
                attrObject.week = 'week_003'

              if(hasAttrObject && weekNumber === 'W04')
                attrObject.week = 'week_004'

              // end of weeksß

              if(hasAttrObject && themeNumber === 'T1')
                attrObject.theme = 'theme_001'

              if(hasAttrObject && themeNumber === 'T2')
                attrObject.theme = 'theme_002'

              if(hasAttrObject && themeNumber === 'T3')
                attrObject.theme = 'theme_003'

              if(hasAttrObject && themeNumber === 'T4')
                attrObject.theme = 'theme_004'

              if(hasAttrObject && themeNumber === 'T5')
                attrObject.theme = 'theme_005'

              if(hasAttrObject && themeNumber === 'T6')
                attrObject.theme = 'theme_006'

              if(hasAttrObject && themeNumber === 'T7')
                attrObject.theme = 'theme_007'

              if(hasAttrObject && themeNumber === 'T8')
                attrObject.theme = 'theme_008'
            }
            // end of - typeof jsonFileNameArr[4] != 'undefined'

            let xmlConvertjsonOutput = JSON.stringify(ecpDataFormatter([xmlConvertjsonParse]))
            fs.writeFile(`${apiDataConfig.json.path}/${jsonFileName[0]}.json`, xmlConvertjsonOutput, err => (err ? console.error(`JSON Write ${err}`) : console.log(`${chalk.blue(jsonFileName[0])} ${chalk.yellow('file saved')}.`)))
        })
    })
})