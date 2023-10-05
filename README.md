# ainasepics
<div align="left">
  <p>
    <a href="#"><img src="https://badgen.net/npm/v/ainasepics"/></a>
    <a href="#"><img src="https://badgen.net/npm/dt/ainasepics"/></a>
  </p>
      <a href="#"><img src="https://nodei.co/npm/ainasepics.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

# Installation
```
npm i ainasepics
```

# Get started
* ## Properties
    | Every function with needed parameters or options  | Returns                                    |
    |---------------------------------------------------|--------------------------------------------|
    | .get('name-here')                                 | Promise<{ url: String }>                   |
    | .getMultiple({ name: 'name-here', limit: 5 })     | Promise<{ results: Array<{ url: String }> }> |

* ## Available names
- These names are used for the .get method. Example: await ainasepics.get('name-here');

* **FOR GIFS:**

| baka  | bite     | blush   | bored    | bully  |
|-------|----------|---------|----------|--------|
| chase | cheer    | cringe  | cry      | cuddle |
| dance | facepalm | glomp   | handhold | happy  |
| hi    | highfive | hug     | kiss     | laugh  |
| lick  | love     | nervous | nom      | nope   |
| panic | pat      | poke    | pout     | punch  |
| run   | sad      | shrug   | slap     |        |

* **FOR IMAGES:**

| cat  | dog | fox |
|------|-----|-----|
| wolf |     |     |

# Usage example:
```js
const ainasepics = require("ainasepics")
ainasepics.get('pat')
.then(imageData => console.log(imageData.url)) // Logs an URL like https://i.ibb.co/V2xFxBn/pat-zt5v6.gif
.catch(err => console.error(err));
// imageData is this object:
/* {
      url: String
   }
*/

ainasepics.getMultiple({ name: 'cat', limit: 5 }) // Max limit is 5
.then(search => console.log(search.results))
.catch(err => console.error(err));

/* search.results is something like this:
[
  { url: 'https://i.ibb.co/42n36gJ/cat-Sm1-FS-min.jpg' },
  { url: 'https://i.ibb.co/Fw8BMfL/cat-aa-LCc-min.jpg' },
  { url: 'https://i.ibb.co/xs64xXF/cat-l-Y4r5-min.jpg' },
  { url: 'https://i.ibb.co/ZcLbpJ1/cat-b-ERIp-min.jpg' },
  { url: 'https://i.ibb.co/xs64xXF/cat-l-Y4r5-min.jpg' }
]
*/
```

# Disclaimer
- The package name is not because of a person, animal or any character; It is a name I invented based on my username.