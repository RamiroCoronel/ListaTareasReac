import React from 'react';
import { Button, Form, FormControl, FormGroup, ListGroup } from 'react-bootstrap';

const FormularioTarea = () => {
    return (
      <Form className='my-5'>
        <FormGroup className='mb-3 d-flex' controlId='formTarea'>
          <FormControl type='text' placeholder='Ingresa una tarea'></FormControl>
          <Button className='primary' type='submit'>Enviar</Button>
        </FormGroup>
      </Form>
    );
};

export default FormularioTarea;