import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Footy (){
    return(
        <div className='sasy'>
            <h1 className='sasy'>CONTATO</h1>
                <Form className='sesao4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="txt" placeholder="Nome" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Sua mensagem:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    <Button variant="primary" type="submit">
        Enviar
      </Button>
        </div>
    )
}

export default Footy