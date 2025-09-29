const ainasepics = require('./index');
ainasepics.get('bite').then((result) => console.log(result))
ainasepics.getMultiple({ name: 'kiss', limit: 5 })
.then(a => { console.log(a.results) }).catch(err => console.error(err))