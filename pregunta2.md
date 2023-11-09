# Pregunta 2
A partir del proyecto actual, generar las siguientes rutas:

- Un servicio POST en la ruta `/api/validar` que reciba un json array que tenga la siguient estructura:
```json
[
    {
        "nombre": "edgar",
        "apellido": "huaranga",
        "edad": 21,
        "nota": 10
    },
    {
        "nombre": "jesus",
        "apellido": "antonio",
        "edad": 28,
        "nota": 16
    },
    {
        "nombre": "pedro",
        "apellido": "X",
        "edad": 28,
        "nota": 3
    },
    {
        "nombre": "joaquin",
        "apellido": "U",
        "edad": 28,
        "nota": 15
    },
    {
        "nombre": "samuel",
        "apellido": "Y",
        "edad": 28,
        "nota": 19
    },
    {
        "nombre": "jesus",
        "apellido": "Z",
        "edad": 28,
        "nota": 8
    },


]

```

La respuesta del request debe tener la siguiente estructura:
```json

{
    "result": "ok",
    "promedio_notas": 12.4,
    "promedio_edad": 25,
}
```