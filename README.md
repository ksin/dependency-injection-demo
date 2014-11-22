# Dependency-injection-demo

This is a demo app to illustrate the utility of dependency injection in ember-cli. It queries Instagram's API for recent images related to a hashtag that the user inputs.

This app uses the ember-cli-dotenv addon to expose your environment variables.
To use the app with Instagram, create a .env file in the root of the repository and store your Instagram client id as INSTAGRAM_CLIENT_ID.
For more information, see: https://www.npmjs.org/package/ember-cli-dotenv

The demo is divided into two working commits. The first commit doesn't use dependency injection and can be viewed for example of pre-refactored code. The second commit injects a registered factory into the index controller where the queryInstagram action is called; this pattern allows for tests which are included in this commit.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

