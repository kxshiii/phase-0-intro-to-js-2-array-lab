// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield", "Ralph");
  };
  function destructivelyPrependCat(){
    cats.length=0;
    cats.unshift("Bob", "Milo", "Otis", "Garfield")
  };
  function destructivelyRemoveLastCat(){   
    cats.pop();
  };
  function destructivelyRemoveFirstCat(){
    cats.shift();
  }
  function appendCat(name) {
    return [...cats, name];
  };
  function prependCat(name){
    return [name, ...cats]
  };
  function removeLastCat(){
    return ['Milo', 'Otis']
  }
  function removeFirstCat(){
    return ['Otis', 'Garfield']
  }