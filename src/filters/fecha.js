export function fecha(fecha){
    var date = new Date(fecha);
    let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
    return formatted_date;
  }
