async function fetchData(){
    const type = true;
    const location = 'new york';
    const description = 'python';
    //const inputValue = document.getElementById("search-bar-input");
    
   // const data = await fetch(`https://jobs.github.com/positions.json?full_time=${type}&description=${description}&location=${location}`, {mode: 'no-cors'});

    const data = await fetch(`https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json`);
    //const json = await data.json();
    console.log(data);

    //document.getElementById("name").innerText = json.name;
    
}