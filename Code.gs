{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <!DOCTYPE html>\
<html>\
  <head>\
    <base target="_top">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <style>\
      body \{ font-family: 'Arial', sans-serif; text-align: center; padding: 20px; color: #333; background-color: #f4f4f4; margin: 0; \}\
      .card \{ border: 1px solid #ccc; margin: 10px; padding: 30px 15px; border-radius: 8px; background: white; max-width: 500px; margin: auto; \}\
      h2 \{ font-size: 32px; color: #2c3e50; \}\
      .guest-name \{ font-size: 28px; font-weight: bold; display: block; margin: 15px 0; color: #2980b9; \}\
      .section-title \{ font-size: 20px; margin-top: 25px; font-weight: bold; text-transform: uppercase; \}\
      .details \{ font-size: 18px; margin: 5px 0; \}\
      .map-btn \{ display: inline-block; padding: 10px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 5px; margin-top: 10px; \}\
      hr \{ border: 0; border-top: 1px solid #eee; margin: 30px 0; \}\
      .regalo-section \{ margin-top: 30px; padding: 15px; border: 1px dashed #7f8c8d; border-radius: 10px; background: #ecf0f1; \}\
      .cbu-box \{ font-size: 14px; color: #2c3e50; word-break: break-all; \}\
      .pregunta \{ font-size: 24px; margin: 25px 0; font-weight: bold; \}\
      .main-btn \{ font-weight: bold; padding: 15px; margin: 10px auto; border-radius: 5px; border: none; width: 100%; cursor: pointer; display: block; \}\
      .yes \{ background: #27ae60; color: white; font-size: 20px; \}\
      .no \{ background: #e74c3c; color: white; font-size: 18px; \}\
      .confirmacion-status \{ background: #2c3e50; color: white; padding: 20px; border-radius: 10px; font-size: 22px; \}\
    </style>\
  </head>\
  <body>\
    <div class="card">\
      <h2>\'a1Hola!</h2>\
      <span class="guest-name"><?= name ?></span>\
      \
      <div class="section-title">\uc0\u55357 \u56525  Ubicaci\'f3n Evento</div>\
      <div class="details">Direcci\'f3n Ejemplo 123, CABA</div>\
      <a href="#" target="_blank" class="map-btn">VER MAPA</a>\
      \
      <hr>\
\
      <div class="regalo-section">\
        <p>Informaci\'f3n para presentes:</p>\
        <div class="cbu-box">\
          Alias: <b id="aliasText">ALIAS.EJEMPLO.DATA</b><br>\
          CBU: <b id="cbuText">0000000000000000000000</b>\
        </div>\
      </div>\
\
      <div id="action-area">\
        <p class="pregunta">\'bfConfirmas tu asistencia?</p>\
        <div style="margin-bottom: 20px;">\
          <label>\'bfCu\'e1ntos asistentes?</label><br>\
          <select id="cantSel" style="font-size:18px; padding:5px;">\
            <? for(var i=1; i <= cantidad; i++) \{ ?>\
              <option value="<?= i ?>"><?= i ?></option>\
            <? \} ?>\
          </select>\
        </div>\
        <button class="main-btn yes" onclick="handleResponse('Si')">S\'cd, CONFIRMO</button>\
        <button class="main-btn no" onclick="handleResponse('No')">No podr\'e9 asistir</button>\
      </div>\
    </div>\
\
    <script>\
      function handleResponse(val) \{\
        var c = (val === 'Si') ? document.getElementById('cantSel').value : 0;\
        var area = document.getElementById('action-area');\
        \
        if (val === 'Si') \{\
            area.innerHTML = '<div class="confirmacion-status">\'a1Confirmado para ' + c + ' personas!</div>';\
        \} else \{\
            area.innerHTML = '<div class="confirmacion-status">Gracias por avisar.</div>';\
        \}\
\
        // Executes the server-side function to save data\
        google.script.run.saveAnswer("<?= name ?>", val, c);\
      \}\
    </script>\
  </body>\
</html>}
