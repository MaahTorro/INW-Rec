import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Cabeca() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img className='logo' src="../src/assets/icon.jpeg" alt="" />
          <Navbar.Brand href="/">Inova Tech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/Produtos">Produtos</Nav.Link>
            <Nav.Link href="/NotaFiscal">Nota Fiscal</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Cabeca;