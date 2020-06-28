const express                        = require('express')
const EcWagMenuRouter                = new express.Router()
const {EcGetData}                    = require('../../../utilities/db/ec-get-data')
const EcVocabularyCardCollection     = 'vocabularycardsmodel'
const EcActivityCardsCollection      = 'ecactivitycards'

EcWagMenuRouter.get('/ecp-api/v3/teacher/wag-menu/:lang/:module/:week/:theme/:day', async (req, res)=>{

    const ecMenuItems = {
        'TG': 'Teacher Guide',
        'LGC': 'Large Group Cards',
        'VC': 'Vocabulary Cards',
        'ACC': 'Activity Cards',
        'ALC': 'Alphabet Cards',
        'NC': 'Number Cards',
        'SC': 'Strategy Cards',
        'BCBI': 'Big Chart of Big Ideas'
    }
    
    const ecDynamicMenu = [
        'Teacher Guide',
        'Large Group Cards',
        'Strategy Cards'
    ]

    let module = req.params.module == "literacy" ? "literature" : req.params.module

    let query = {
        'elements': {
            $elemMatch: {
                'attributes.lang': req.params.lang,
                'attributes.module': module,
                'attributes.week': req.params.week,
                'attributes.theme': req.params.theme,
                'elements': {
                    $elemMatch: {
                        'attributes.day': req.params.day
                    }
                }
            }
        }
    }

    let vocabularyQuery     = await EcGetData(EcVocabularyCardCollection, query)
    let vocabCondtion       = vocabularyQuery.length
    let vocabMenuChecker    = ecDynamicMenu.includes(ecMenuItems.VC)

    if(vocabCondtion && vocabMenuChecker == false)
        ecDynamicMenu.push(ecMenuItems.VC)

    let activityQuery       = await EcGetData(EcActivityCardsCollection, query)
    let activityCondition   = activityQuery.length
    let activityMenuChecker     = ecDynamicMenu.includes(ecMenuItems.ACC)

    if(activityCondition && activityMenuChecker == false)
        ecDynamicMenu.push(ecMenuItems.ACC)



    res.send(ecDynamicMenu).end()
})

module.exports = EcWagMenuRouter
