// asyncBreeds.js
const fs = require('fs');
console.log("1: Before the first call");

//then this function is run breed is passed in to await further instructions Callbacks basically are helper functions that may or may not run
//if our code needs to do something in a certain way the function passed in as our callback complements this. e.g. in this case we printout our cat breed.
const breedDetailsFromFile = function(breed, callback) {
  console.log('3. breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("4. In readFile's Callback: it has the data - provided there was no errors.");
    // If there are no errors in retieving the data then we are calling printOutCatBreed with Return Value: File Contents
    if (!error) callback(data); //do something here with a function;
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};


//this is our callback function where our actual return is from
const printOutCatBreed = breed => {
  console.log("5. The helper function that was standing around all the time callback has finally been invoked!");
  console.log('6. Return Value: ', breed); // => prints out details correctly
};

const printOutCatSummary = breed => {
  console.log("5. Alternatively on a different initial call we can end up here on a different path!");
  console.log("6.", breed.substr(0, 100) + "...");
};

//firstly we are just calling breedDetailsFromFile("Filename", callbackfunction)
//this function calls stuff but is unable to return anything it's actually being returned via the callback function
console.log("2: Before the breedDetailFromFile Call");
breedDetailsFromFile('Bombay', printOutCatBreed);

breedDetailsFromFile('Balinese', printOutCatSummary);
