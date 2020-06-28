const {EcMetaPostApi}         = require('../../../db/ec-post-data')

const metaDataFiles = [
    'EC_AUDIO_RES.json',
    'EC_DAYS_SKILLS.json',
    'EC_HOMEPAGE_TIPS.json',
    'EC_LESSONDAYS.json',
    'EC_MODULES.json',
    'EC_RES_CATEGORIES.json',
    'EC_RES_HIERARCHY.json',
    'EC_RESOURCES.json',
    'EC_SCHOL_SKILLS.json',
    'EC_STATE_SKILLS.json',
    'EC_STUDENT_RELS.json',
    'EC_STUDENT.json',
    'EC_THEMES.json',
    'EC_WEEK_MOD_XML.json',
    'EC_WEEK_WAG_FILES.json',
    'EC_WEEKS.json'
]

const metaDataImport = async (meta) => {
    try{
        let meteCollection  = meta.toLowerCase()
        let collectionName  = meteCollection.split('.')
        let ecCollection    = collectionName[0]
        let metaDataJSON    = require(`../../data/json-data/${meta}`)
        await EcMetaPostApi(ecCollection, metaDataJSON)
        console.log(`Import: ${ecCollection}`)
    }catch(e){
        console.log(e)
    }
}

metaDataFiles.forEach( el => metaDataImport(el))