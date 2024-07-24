let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowsA, rowsB) =>
    rowsA.cells[0].innerHTML > rowsB.cells[0].innerHTML ? 1 : -1
  );
table.tBodies[0].append(...sortedRows);
