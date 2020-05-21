// module.exports = {
//     publicRuntimeConfig: {
//         APP_NAME: 'Behold',
//         APP_API_URL: 'http://localhost:5000/api/v1/'
//     }
// }

const withSass = require('@zeit/next-sass')
module.exports = withSass({
    publicRuntimeConfig: {
        APP_NAME: 'Behold',
        APP_API_URL: 'http://localhost:5000/api/v1/'
    }
})