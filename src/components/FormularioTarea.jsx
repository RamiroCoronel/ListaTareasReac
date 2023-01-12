import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, FormGroup, ListGroup } from 'react-bootstrap';
import ListaTarea from './ListaTarea';

const FormularioTarea = () => {
  //buscar las tareas del local storage si es que existe
  const tareasLocalstorage = JSON.parse(localStorage.getItem(`listaTareas`)) || [];
  const [tarea, setTarea] =  useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLocalstorage);

//ciclo de vida de un componente
useEffect(()=>{
  //console.log(`prueba de ciclo de vida`);
  //guardar el arreglo de las tareas en local storage
  localStorage.setItem(`listaTareas`, JSON.stringify(arregloTareas));
},[arregloTareas])


  const handleSubmit = (e)=>{
    e.preventDefault();
//no se puede utilizar el push en 1 state
setArregloTareas([...arregloTareas, tarea]);
//limpiar el input
setTarea(``);
};
const borrarTarea =  (nombre)=>{
  let arregloModificado = arregloTareas.filter((item)=>item !== nombre);
//actualizar el state
setArregloTareas(arregloModificado);
}
    
      return (
      <>
     <Form className='my-5' onSubmit={handleSubmit}>
        <FormGroup className='mb-3 d-flex' controlId='formTarea'>
          <FormControl type='text' placeholder='Ingresa una tarea' onChange={(e)=> setTarea(e.target.value  ) } value={tarea}></FormControl>
          <Button className='primary' type='submit'>Enviar</Button>
        </FormGroup>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea} ></ListaTarea>
      </>
   
    );
};

export default FormularioTarea;