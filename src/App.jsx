import FormularioTarea from "./components/FormularioTarea"
import ListaTarea from "./components/ListaTarea"
//importar la hoja de estilo
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

function App() {
 

  return (
    <>
    <Container className="my-5">
    <h1 className="display-4">Lista de tareas</h1>
   <hr />
   <FormularioTarea></FormularioTarea>
   <ListaTarea></ListaTarea>
    </Container>
   
    </>
   
  )
}

export default App
