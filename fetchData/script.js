//fetch method will return promise
//Promise is either fufilled or rejected
//All the data in the api will be stored in data
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe3d63acb5msh49f482a8fb5d88ep13585cjsn2a666c1cd4d7",
    "X-RapidAPI-Host": "pizza-and-desserts.p.rapidapi.com",
  },
};

fetch("https://pizza-and-desserts.p.rapidapi.com/pizzas", options)
  .then((data) => {
    //console.log(data);
    //data is in json format , both the key n value is in double quotes
    //so we need to convert to object (javascript format?)
    return data.json();
  })
  .then((completedata) => {
    //completedata is the data that has been converted to object -> array of objects
    console.log(completedata);
    //access only the title
    console.log(completedata[2].title);
    //Display onto browser
    //this means that the div with the id = "root" will have the completedata[2].title displayed
    //document.getElementById("root").innerHTML = completedata[2].title;
    let data1 = "";
    //values stand for each of the object in the array (eg. the object with id=1 followed by id=2 and so on until all the data in the array has been run)
    completedata.map((values) => {
      //paste the whole card div frm indec.html
      //MUST put + sign infront of = if not we will only be showing the last object in the array
      data1 += `<div class="card">
        <img src=${values.img} alt="img" class="images">
        <p>
          <div class="title">${values.name}</div>
          <div class="description">${values.description}</div>
          <div class="price">$${values.price}</div>
        </p>
    </div>`;
    });

    //Render it on the browser using getElemetByID
    document.getElementById("cards").innerHTML = data1;
  })
  .catch((err) => {
    console.log(err);
  });
