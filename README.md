# Mocha Test Problem

## Test Replication
1. Clone this repository
2. Run `npm install`
3. Run `npm test`

**Expected Result:** I would assume CDS would spin up a local server and run the tests against it. However, this is the output I receive
```commandline
; npm test

> cds-bug-5@1.0.0 test
> mocha



  0 passing (0ms)
```

# Solution
Do not use async and describe together. Changing the code to the following will work
```javascript
const cds = require('@sap/cds/lib')
const path = require('path')
//const fs = require('fs')

const {expect,GET} = cds.test(path.join(__dirname, '/..')).verbose()

describe('Destination Service', function () {

    let status
    before(async function () {
          status  = (await GET `/catalog/Books`).status
    })
    
    it ('should return a list of destinations', async function () {
        
        expect (status) .to.be.equal (200)
    })

})
```
