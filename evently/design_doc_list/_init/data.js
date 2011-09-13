function(data) {
  var rows = data.rows.map(function(row){ return {name: row.key.slice(8)};});
  return {rows: rows};
};
