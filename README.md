Fullstack App: GraphQL + React + MongoDB

Una aplicación web fullstack que integra React en el frontend, un servidor Node.js/Express con GraphQL (Apollo Server) en el backend, y MongoDB como base de datos de almacenamiento persistente.

<img width="1588" height="871" alt="mensajesListados" src="https://github.com/user-attachments/assets/1b865df0-bf28-472b-826e-f8feacba509b" />
<img width="1588" height="871" alt="mensajeForm" src="https://github.com/user-attachments/assets/67cf8e50-975c-495f-94fe-3d2770c7b060" />

Clona el repositorio:

git clone https://github.com/DevVivas/graphql-react-mongodb.git
cd graphql-react-mongodb


Configura las variables de entorno en el Servidor (/server):
Crea un archivo .env dentro de la carpeta server/ con el siguiente contenido:

PORT=4000
MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/<nombre_db>?retryWrites=true&w=majority

La interfaz web estará disponible en: http://localhost:5173 (o http://localhost:3000).

Ejemplos de Queries y Mutations (GraphQL)

Puedes probar estas operaciones directamente desde Apollo Sandbox (http://localhost:4000/graphql):

Obtener registros (Query):

query GetItems {
  getItems {
    id
    title
    description
    createdAt
  }
}


Crear un registro (Mutation):

mutation CreateItem($input: ItemInput!) {
  createItem(input: $input) {
    id
    title
    description
  }
}
