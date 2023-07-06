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

//   let object1 = myObject.result[0]["name"];
//   document.getElementById("demo").innerHTML = object1;

// let student = "<ul> ";

// for (let i = 0; i < myObject.result.length; i++) {
//     student += '<li>' + myObject.result[i]["marks"]["physics"] + "</li>";
    
// }
// '</ul>'
// document.getElementById("demo").innerHTML = student;
// console.log(student);







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