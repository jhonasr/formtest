//form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyjQF8gPZVPK5EjhJ6sEfPbwe3IGDRqb5B7FGVaBzB1XnHAh1c/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
})

//open tab
function openWin() {
  window.open('../formtest/thanks.html')
}
/*
window.setInterval(ut, 1000);
function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}
*/

function test() {
  x = Date()
  document.getElementById("datepicker").value = x;
};
test();