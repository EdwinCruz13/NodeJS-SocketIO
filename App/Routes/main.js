//this file allow to read every route file existed in this folder
//in order to you create a route file and application use the route automatically 

const epxress = require('express')
const router = epxress.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

const removeRoutes = (fileName) => {
    return fileName.replace("Routes", "");
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file);
    const fileWithOutRoutes = removeRoutes(fileWithOutExt);

    
    const skip = ['main'].includes(fileWithOutExt);
    if (!skip) {
        router.use(`/${fileWithOutRoutes}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router