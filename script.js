const myJSON =`{
    "result": [
      {
        "name": "John",
        "marks": {
          "math": "78",
          "english": "90",
          "chemistry": "64",
          "physics": "89"
        }
      },
      {
        "name": "Mike",
        "marks": {
          "math": "67",
          "english": "86",
          "chemistry": "59",
          "physics": "70"
        }
      },
      {
        "name": "Julia",
        "marks": {
          "math": "82",
          "english": "75",
          "chemistry": "73",
          "physics": "84"
        }
      },
      {
        "name": "Tom",
        "marks": {
          "math": "76",
          "english": "64",
          "chemistry": "59",
          "physics": "72"
        }
      },
      {
        "name": "Barbara",
        "marks": {
          "math": "90",
          "english": "85",
          "chemistry": "88",
          "physics": "92"
        }
      }
    ]
  }`;
  
 const myObject = JSON.parse(myJSON);

let markTable = "<tbody>"

for (let i = 0; i < myObject.result.length; i++) {
  markTable +=`<tr>
                   <td>${myObject.result[i]["name"]}</td>
                   <td>${myObject.result[i]["marks"]["math"]}</td>
                   <td>${myObject.result[i]["marks"]["english"]}</td>
                   <td>${myObject.result[i]["marks"]["chemistry"]}</td>
                   <td>${myObject.result[i]["marks"]["physics"]}</td>
               </tr>`
}
"</tbody>"
document.getElementById("myTable").innerHTML = markTable;

function defaultOrder() {
  document.getElementById("myTable").innerHTML = markTable;
}

//function to display table in ascending order

function ascendingOrder(){

  const ascendArray = myObject.result.sort((a,b)=>{
    if(a.name < b.name) {
      return -1
    }
  });

let ascentTable = "<tbody>"

for (let i = 0; i < ascendArray.length; i++) {
  ascentTable +=`<tr>
                   <td>${ascendArray[i]["name"]}</td>
                   <td>${ascendArray[i]["marks"]["math"]}</td>
                   <td>${ascendArray[i]["marks"]["english"]}</td>
                   <td>${ascendArray[i]["marks"]["chemistry"]}</td>
                   <td>${ascendArray[i]["marks"]["physics"]}</td>
               </tr>`
}
"</tbody>"
document.getElementById("myTable").innerHTML = ascentTable;
}

//function to display table in descending order
function descendingOrder(){

  const descendArray = myObject.result.sort((a,b)=>{
    if(a.name > b.name) {
      return -1
    }
  });

let descentTable = "<tbody>"
for (let i = 0; i < myObject.result.length; i++) {
  descentTable +=`<tr>
                   <td>${descendArray[i]["name"]}</td>
                   <td>${descendArray[i]["marks"]["math"]}</td>
                   <td>${descendArray[i]["marks"]["english"]}</td>
                   <td>${descendArray[i]["marks"]["chemistry"]}</td>
                   <td>${descendArray[i]["marks"]["physics"]}</td>
               </tr>`
}
"</tbody>"
document.getElementById("myTable").innerHTML = descentTable;
}

