let inputs = document.querySelectorAll("input");
console.log(inputs);

let name = inputs[0];
let email = inputs[1];
let pass = inputs[2];
let rate = inputs[3];
let submit = inputs[7];


function selectedRadio()
{
    let selradio =  document.querySelector("input.radio:checked");
    console.log(selradio.value);
}
function chan(e)
{
    setTimeout(()=>{
        e.target.value += " ";
        console.log(e.target.value);
    },100);
}

let radio = document.querySelectorAll("input.radio");

radio.forEach(element => {
    element.addEventListener("change",()=>
    {
        selectedRadio();
    })
});

inputs.forEach(element=>{
    const events = ["change", "contextmenu"];
    events.forEach(eventName => {
      element.addEventListener(eventName, (e) => {
        chan(e);
      });
    });
})