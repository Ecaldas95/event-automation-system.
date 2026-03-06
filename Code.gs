/**
 * Función principal que sirve la página web
 */
function doGet(e) {
  var name = e.parameter.name || "Invitado";
  var cantMax = e.parameter.cant || 1; 
  
  var tmp = HtmlService.createTemplateFromFile('index');
  tmp.name = name;
  tmp.cantidad = parseInt(cantMax); 
  
  return tmp.evaluate()
    .setTitle("Invitación de Casamiento")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * Función que procesa la respuesta y la guarda en la hoja de cálculo
 */
function processResponse(name, answer, cantConfirmada) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var datos = sheet.getDataRange().getValues();
  var fechaActual = new Date();
  
  // Busca el nombre en la columna A y actualiza la fila correspondiente
  for (var i = 1; i < datos.length; i++) {
    if (datos[i][0] == name) {
      // Columna D (4): Cantidad | Columna E (5): Respuesta | Columna F (6): Fecha
      sheet.getRange(i + 1, 4).setValue(cantConfirmada);
      sheet.getRange(i + 1, 5).setValue(answer);
      sheet.getRange(i + 1, 6).setValue(fechaActual);
      return "OK";
    }
  }
}
