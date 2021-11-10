function shout(string) {
    return string.toUpperCase();
}

shout("hello");

function whisper(string){
    return string.toLowerCase(); 
}

 whisper("HELLO");

 function logShout(string) {
    console.log(string.toUpperCase());
 }

  logShout("hello");

  function logWhisper(string) {
    console.log(string.toLowerCase());
 }

  logWhisper("HELLO");

  function sayHiToGrandma(string) {
      switch(true) {
        case string===string.toLowerCase():
            return 'I can\'t hear you!';
            break;
        case string===string.toUpperCase():
            return 'YES INDEED!';
            break;
        case string==="I love you, Grandma.":
            return "I love you, too.";
            break;
      }
  }

console.log(sayHiToGrandma("hello"));
   