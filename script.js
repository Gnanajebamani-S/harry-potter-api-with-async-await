//created a heading tag

let header = document.createElement("h1");
header.setAttribute("class", "heading text-center");
header.innerText = "HARRY POTTER CAST";

// document.body.append(header); //appende the header to the body

//function to create div tag

function create_div(tagname, attrname2, attrvalue2) {
  let divtag = document.createElement(tagname);
  divtag.setAttribute(attrname2, attrvalue2);
  return divtag;
}

//created a div tag using the create_div function

var container = create_div("div", "class", "container");
var row = create_div("div", "class", "row");
//async ,await function to fetch data from the API

async function get_data() {
  try {
    let data = await fetch("https://hp-api.onrender.com/api/characters");
    let data1 = await data.json();
    // let memes = res1.data.memes; //created a variabel and stored  the data fetched in it
    console.log(data1);
    for (var i = 0; i < data1.length; i++) {
      var col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
    <div class="card text-center">
    <div class="card-header">
    ${data1[i].name}
    </div>
    <div class="card-body">
      <img src="${data1[i].image}" class="img-fluid" alt="...">
      <div>
       <table class="table table-bordered">
        <tbody>
         <tr>
          <td id="td">Actor</td>
          <td id="td">${data1[i].actor}</td>
         </tr>
         <tr>
          <td id="td">Ancestry</td>
          <td id="td">${data1[i].ancestry}</td>
         </tr>
         <tr>
          <td id="td">Data of Birth</td>
          <td id="td">${data1[i].dateOfBirth}</td>
         </tr>
         <tr>
          <td id="td">Eye Colour</td>
          <td id="td">${data1[i].eyeColour}</td>
         </tr>
         <tr>
          <td id="td">Gender</td>
          <td id="td">${data1[i].gender}</td>
         </tr>
         <tr>
          <td id="td">Hair Colour</td>
          <td id="td">${data1[i].hairColour}</td>
         </tr>
         <tr>
          <td id="td">House</td>
          <td id="td">${data1[i].house}</td>
         </tr>
        </tbody>
       </table>
      </div>
    </div>
    </div>`;
      // col.append(card); //appende the card to the col
      row.append(col); //appende the col to the row
      container.append(row); //appended the row to the container
      document.body.append(header, container); //appended the container to the body
    }
  } catch (
    error //error handling using catch block
  ) {
    let span = document.createElement("span");
    span.className = "span";
    span.innerHTML = "Oops!! Data Not Found";
  }
}
get_data(); //function call

/* <p class="card-text">Capital: ${data1[i].capital}</p>
<p class="card-text">Region: ${data1[i].region}</p>
<p class="card-text">Country code: ${data1[i].cioc}</p> */

/* <tr>
<td>Mark</td>
<td>Otto</td>
</tr>
<tr>
<td>Mark</td>
<td>Otto</td>
</tr>
<tr>
<td>Mark</td>
<td>Otto</td>
</tr>
<tr>
<td>Mark</td>
<td>Otto</td>
</tr>
<tr>
<td>Mark</td>
<td>Otto</td>
</tr> */
