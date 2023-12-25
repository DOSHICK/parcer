let result = "";

function deleteFromString(symb) {
  let symbGet = {
    start: `<${symb}`,
    end: `</${symb}>`,
    length: `</${symb}>`.length,
  };

  function holaF(string) {
    if (string.indexOf(symbGet.start) === -1) {
      return string;
    } else {
      let replacer = string.substring(
        string.indexOf(symbGet.start),
        string.indexOf(symbGet.end) + symbGet.length
      );
      let hola = string.replace(replacer, "");
      return holaF(hola);
    }
  }
 return holaF(result)
}

function copyOutText() {
  var copyText = document.getElementById("htmlOut");

  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);

}

const reducerTag = document.getElementById('reducerTag')
const htmlIn = document.getElementById('htmlIn')
const htmlOut = document.getElementById('htmlOut')

const changeHtml = document.getElementById('changeHtml')
const copyOut = document.getElementById('copyOut')


changeHtml.onclick = () =>{
    result = htmlIn.value 
    htmlOut.value = deleteFromString(reducerTag.value)
}

copyOut.onclick = () =>{
  copyOutText()
}

