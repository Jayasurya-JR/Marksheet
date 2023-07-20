const myJSON = `{
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

let tableData = JSON.parse(myJSON).result;

function createTable(data) {
  const tableBody = document.getElementById('tableBody');
  tableBody.innerHTML = '';

  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const mathCell = document.createElement('td');
    const englishCell = document.createElement('td');
    const chemistryCell = document.createElement('td');
    const physicsCell = document.createElement('td');

    nameCell.textContent = data[i].name;
    mathCell.textContent = data[i].marks.math;
    englishCell.textContent = data[i].marks.english;
    chemistryCell.textContent = data[i].marks.chemistry;
    physicsCell.textContent = data[i].marks.physics;

    row.appendChild(nameCell);
    row.appendChild(mathCell);
    row.appendChild(englishCell);
    row.appendChild(chemistryCell);
    row.appendChild(physicsCell);

    tableBody.appendChild(row);
  }
}

function createAscendingTable() {
  const sortedData = tableData.sort((a, b) => a.name.localeCompare(b.name));
  createTable(sortedData);
}

function createDescendingTable() {
  const sortedData = tableData.sort((a, b) => b.name.localeCompare(a.name));
  createTable(sortedData);
}

function searchTable() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const filteredData = tableData.filter(item => item.name.toLowerCase().includes(input));
  createTable(filteredData);
}

createTable(tableData);

