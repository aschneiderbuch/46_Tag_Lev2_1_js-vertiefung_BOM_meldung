console.log("test");


/* 

function
    beim start zahlen runter zählen




window.onload
setInterval()
clearInterval()
getElementsByClassName()/getElementById()
if, else if
*/

const sectionDiv =  document.querySelector(`.message`)


// erst nachdem Design und alles geladen ist ausführen
window.onload = functionAllesIstDa;


function functionAllesIstDa() {
    console.log("in functionAllesIstDa");

    // counter
    let counter = 10;
    
    // setInterval()
    const stopInterval = setInterval(() => {
        counter = counter - 1;

        // ins html
        // output holen
        const outputField = document.querySelector("#count");
        outputField.innerHTML = counter;

        if(counter == 0){
            // window.location.reload();   // würde Seite neu laden alles beginnt von vorne
            clearInterval(stopInterval);
            document.querySelector("div").classList.remove("message");  // Style und Kreis gehen weg

            document.querySelector("p" ).style.display = "none";    // langer Text geht weg

           sectionDiv.style.display = "none";    // alles weg
           // wenn const sectionDiv  --> global variable ist, dann gehts

        }

    },1000);

};