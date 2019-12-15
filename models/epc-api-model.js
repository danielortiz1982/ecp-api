const mongoose = require('mongoose')
const validator = require('validator')

const EpcApiModel = mongoose.model('EpcApiModel', {
    language: String,
    themes: [
        {
            id: Number,
            pairs: [
                {
                    book: {
                        config: {
                            pathToReader: String,
                            epub: String,
                            plugins: []
                        },
                        configOverride: {
                            readAloud: {
                                enabled: Boolean,
                                autoPageTurn: Boolean,
                                oneClickAutoPlay: Boolean,
                                autoRTM: Boolean
                            }
                        },
                        id: Number,
                        thumbnail: String,
                        title: String
                    },
                    id: Number,
                    story: {
                        id: Number,
                        poster: String,
                        readAlong: String,
                        thumbnail: String,
                        title: String,
                        video: String
                    }
                }
            ],
            style: String,
            backgroundImage: String,
            subheaderColor: String,
            title: String
        }
    ]
})

module.exports = EpcApiModel