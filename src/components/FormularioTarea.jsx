import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, ListGroup } from 'react-bootstrap';
import ListaTarea from './ListaTarea';

const FormularioTarea = () => {
  const [tarea, setTarea] =  useState(``);
  const [arregloTareas, setArregloTareas] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
//no se puede utilizar el push en 1 state
setArregloTareas([...arregloTareas, tarea]);
//limpiar el input
setTarea(``);


  }

    return (
      <>
     <Form className='my-5' onSubmit={handleSubmit}>
        <FormGroup className='mb-3 d-flex' controlId='formTarea'>
          <FormControl type='text' placeholder='Ingresa una tarea' onChange={(e)=> setTarea(e.target.value  ) } value={tarea}></FormControl>
          <Button className='primary' type='submit'>Enviar</Button>
        </FormGroup>
      </Form>
      <ListaTarea></ListaTarea>
      </>
   
    );
};

export default FormularioTarea;