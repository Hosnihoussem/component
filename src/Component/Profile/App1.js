import Address from "./Address";
import FullName from "./FullName";
import ProfilePhoto from "./ProfilePhoto";
import { CardGroup, Card } from "react-bootstrap";

function App1() {
  return (
    <div className="App" style={{ width: "150px", margin: "70px" }}>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Text>
              <ProfilePhoto />
            </Card.Text>
            <Card.Title>
              <FullName />
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <Address />
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App1;