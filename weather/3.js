async function getWeather(city){

consoleBox.innerHTML = "";

logConsole("🟥 Sync Start");
logConsole("[ASYNC] Start fetching");

try{

const response = await fetch(
`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
);

const data = await response.json();

if(data.error){
throw new Error(data.error.message);
}

logConsole("Promise.then (Microtask)");

displayWeather(data);

saveHistory(city);

setTimeout(()=>{
logConsole("setTimeout (Macrotask)");
},0);

logConsole("[ASYNC] Data received");

}catch(error){

weatherResult.innerHTML = `<p style="color:red">${error.message}</p>`;

}

}