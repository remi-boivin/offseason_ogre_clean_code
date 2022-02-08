# ogre (Ordre des Grandeurs Energetiques)
### _Web role game on Energy_
[![Build Status](https://app.travis-ci.com/remi-boivin/offseason_ogre_clean_code.svg?branch=master)](https://app.travis-ci.com/github/remi-boivin/offseason_ogre_clean_code)

Ogre is a web serious role game to raise awareness about energy quantity with the 2T goal in 2050. You can use it as a personnal simulator to decrease your carbon impact or use it with common data based on population's average and see how things works.

## Features

- 
- 

## Tech

OGRE uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework

## Installation

OGRE requires nodeJS +17.4.0.
git flow

## Development

Open your favorite Terminal and run these commands.

First Tab:

```sh
nodejs src/app.js
```

(optional) To test if it's work:

```sh
yarn test
```

## Contributing

Want to contribute ? Great!

We use git flow to managage branches.

__To start a feature:__

- git checkout develop
- git flow feature start issueNB_title_of_issue

__When your feature is done:__

- ```yarn test --coverage  --collectCoverageFrom="./app/**"```
- ```git add some_files```
- ```git commit``` and follow [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/)
- ````git flow feature publish issueNB_title_of_issue````
- Create a pull request

If you want more informations feel free to read [CONTRIBUTING.md](./CONTRIBUTING.md) file

*nb: To publish you feature you must have at least 90% test coverage on your feature*

## License

The project is under MIT licence. For more informations please read [LICENCE](./LICENSE) file