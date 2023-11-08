# ejercicios backend
A partir del proyecto actual, generar las siguientes rutas:

- Un servicio **GET** en la ruta `/api/estudiante/r1` que reciba un cuerpo que tenga la siguient estructura:
```json
{
    "nombre": "edgar",
    "apellido": "huaranga",
    "codigo": "20101272K",
}
```

La respuesta del request debe tener la siguiente estructura:
```json
{
    "result": "ok",
    "message": "El cuerpo de mensaje está correcto"
}
```

---


- Un servicio **GET** en la ruta `/xyz/pokemon/` que reciba un cuerpo que tenga la siguient estructura:
```json
{
    "equipo": "Universitario"
}
```

La respuesta del request debe tener la siguiente estructura:
```json
{
    "result": "ok",
    "message": "El equipo campeón del 2023 es ....equipo....."
}
```