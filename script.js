//your JS code here. If required.
const promises = [];

for (let i = 0; i < 3; i++) {
  promises.push(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i + 1);
    }, Math.floor(Math.random() * 3) + 1);
  }));
}

Promise.all(promises).then((results) => {
  const table = document.querySelector('#output');

  // Remove the loading text
  const loadingRow = table.querySelector('.loading');
  loadingRow.remove();

  // Populate the table with the results
  results.forEach((result, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>Promise ${index + 1}</td>
      <td>${result}</td>
    `;
    table.appendChild(row);
  });

  // Calculate the total time taken
  const totalTime = results.reduce((acc, result) => acc + result, 0);

  // Add a row for the total time
  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime}</td>
  `;
  table.appendChild(totalRow);
});