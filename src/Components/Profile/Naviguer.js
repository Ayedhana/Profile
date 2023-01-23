import Nav from "react-bootstrap/Nav";

function Naviguer() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Formation" >
          Formations
        </Nav.Link>
        
      </Nav.Item>
    </Nav>
  );
}

export default Naviguer;
