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

var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+dt.getDate()).slice(-2)) +"."+ (("0"+(dt.getMonth()+1)).slice(-2)) +"."+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));