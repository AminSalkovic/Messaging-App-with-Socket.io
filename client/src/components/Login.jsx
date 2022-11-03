import React,{useRef} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import{v4 as uuvidV4} from 'uuid'

const Login = ({onIdSubmit}) => {
 
    const idRef=useRef()

    function handleSubmit(e){
        e.preventDeafault()
        onIdSubmit(idRef.current.value)
    }
    function createNewId(){
        onIdSubmit(uuvidV4())
    }
  return (
    <Container className='align-items-center d-flex' style={{height:"100vh"}}>
        <Form className='w-100' onSubmit={handleSubmit}>
           <Form.Group>
              <Form.Label> Enter your id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
           </Form.Group>
           <Button type='submit' className='m-2'>Login</Button>
           <Button variant='secondary' onClick={createNewId}>Create a new Id</Button>
        </Form>
    </Container>
  )
}

export default Login