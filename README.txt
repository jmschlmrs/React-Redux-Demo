-------- Running the App --------
npm install
node index.js (nodemon index.js to watch for changes)
open http://localhost:3000 in browser


-------- Making JS Changes --------
webpack to have webpack watch for changes and rebundle.


-------- Making SCSS Changes --------
cd into /public/content
npm run compile-scss (or npm run watch:compile-scss to watch for changes)


-------- Running Tests --------
files with unit tests have .tests.js suffix
cd into directory with tests file
babel-node filename.tests