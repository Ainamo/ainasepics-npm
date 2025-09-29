# ainasepics
<div align="left">
  <p>
    <a href="#"><img src="https://badgen.net/npm/v/ainasepics"/></a>
    <a href="#"><img src="https://badgen.net/npm/dt/ainasepics"/></a>
  </p>
      <a href="#"><img src="https://nodei.co/npm/ainasepics.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

[![](https://dcbadge.vercel.app/api/server/WGxcN6zDzq)](https://discord.gg/WGxcN6zDzq)

# Installation
```
npm i ainasepics
```

# Get started
* ## Properties
    | Methods                                           | Return type                                |
    |---------------------------------------------------|--------------------------------------------|
    | .get('name-here')                                 | Promise<{ url: string }>                   |
    | .getMultiple({ name: 'name-here', limit: 5 })     | Promise<{ results: [{ url: string }, ...] }> |

* ## Available names
- These names are used for the .get method. Example: await ainasepics.get('name-here');

* **Gifs:**

| baka  | bite     | blush   | bored    | bully  |
|-------|----------|---------|----------|--------|
| chase | cheer    | cringe  | cry      | cuddle |
| dance | facepalm | glomp   | handhold | happy  |
| hi    | highfive | hug     | kiss     | laugh  |
| lick  | love     | nervous | nom      | nope   |
| panic | pat      | poke    | pout     | punch  |
| run   | sad      | shrug   | slap     |        |

* **Images:**

| cat  | dog | fox |
|------|-----|-----|
| wolf |     |     |

# Usage example:
```js
const ainasepics = require("ainasepics")
ainasepics.get('pat')
.then(imageData => console.log(imageData.url)) // random pat gif url is logged.
.catch(err => console.error(err));
// imageData is this object:
/* {
      url: string
   }
*/

ainasepics.getMultiple({ name: 'cat', limit: 5 }) // Limit cannot be over 5
.then(search => console.log(search.results))
.catch(err => console.error(err));

/* search.results is an array of results:
[
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' },
  { url: 'link_here' }
]
*/
```

# Disclaimer
- The package name is not because of a person, animal or any character; It is a name I "invented" based on my username.