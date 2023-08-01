const cds = require('@sap/cds/lib')
const path = require('path')
//const fs = require('fs')

const {expect,GET} = cds.test(path.join(__dirname, '/..')).verbose()

describe('Destination Service', async function () {

    const { status } = await GET `/catalog/Books`
    
    it ('should return a list of destinations', async function () {
        expect (status) .to.be.equal (200)
    })

})
