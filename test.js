const versioning = require('./index')
console.log(versioning("1.2.3"))
console.log(versioning.newer(versioning("1.3.4"), versioning("1.4.5")))
