//Select input value element
//Select container elements (name, website, location)
const inputValue = document.querySelector("#input-search");
const consoleName = document.querySelector('.console_name');
const consoleType = document.querySelector('.console_type');
const consoleDate = document.querySelector('.console_date');

//Fetch bakery data using the async and await method
//fetchBakeries function accepts a parameter
const fetchBakeries = async(game) => {
  const api_call = await fetch(`https://nintendo-api-project.herokuapp.com/nintendo/${game}`);
  const data = await api_call.json();
  return { data }
};

//showData function uses the fetchBakeries function to fetch data
//the argument used in fetchBakeries is the inputValue variable
//inputValue variable is the input field element retrieved by querySelector
//inputValue.value is the current value in the input field
//use a promise .then method to get a response back
//write html inside the containers by using the ES6 string literal method
const showData = () => {
  fetchBakeries(inputValue.value).then((res) => {
    console.log(res);
    consoleName.innerHTML = `Console Name: <span class="console_name">${res.data.id}</span>`;
    consoleType.innerHTML = `Console Type: <span class="console_type">${res.data.type}</span>`;
    consoleDate.innerHTML = `Initial Release Date: <span class="console_date">${res.data.released}</span>`;
  })
}

//Select search bakeries button
//Add a click event to the button and use the showData function 
const searchBakeriesBtn = document.getElementById("getBakeries")
searchBakeriesBtn.addEventListener("click",  () => {
  showData();
});
