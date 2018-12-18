# APP DE TAREAS
***facil de manejar***

esta app de notas se manipula desde consola y permite crear,editar,eliminar,visualizar tus notas

## PASOS

1.lo primero tener nodejs instalado el link puede estar [aqui](https://nodejs.org/es/download/)

2. lo segundo es en la cmd una vez instales nodejs en cmd accede a la ruta del proyecto e introducce introduce

`npm install`

3. una vez instalado puedes acceder a comandos ejecutando el archivo app.js

`node app create -d="nota prueba"`

## comandos
***create:*** 
permite crear notas
`node app create -d="descripcion" -c=no`

`-d="descripcion" ` permite añadir una descripcion
`-c=no` permite añadir un estado de si ya se completo la tarea o si todavia no (este parametro es opcional si quieres lo usas)

***view:***
permite visualizar notas

`node app view -p=453` por clave

`node app view -c=no` por estado

`node app view -a` visualiza todas las notas totales

por defecto es mejor `-a` ya que muestra todo pero sirve los demas tambien


`-a` permite visualizar todas las notas
`-p="code" ` permite buscar por codigo
`-c=no` permite buscar por estado de notas

***update:***
permite actualizar o editar notas

`node app update -p=145 -d="nueva descripcion` cuando deseas modificar la descripcion

`node app update -p=234 -c=yes` cuando quieres marcar una tarea como completada



***delete:***
permite eliminar notas

`node app delete -p=453` por clave eliminas

`node app delete -c=no` por estado eliminas

`node app delete -a` eliminar todos si quieres

por defecto es mejor `-p` ya que eliminaria solo una la especificada


***NOTA: puedes usarla y pues cada comando es util espero te sirva y el sistema genera un archivo json donde almacena todas las notas por tanto la carpeta archivos es mejor no tocarla**


