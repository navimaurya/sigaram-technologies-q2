import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import instance from './axios';
import axios from 'axios';
import { Card, Container, Form, Nav, Navbar, CardGroup } from 'react-bootstrap';

function App() {
  const [country, setContry] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    // const instance = axios.create({
    //   baseURL: 'https://newsapi.org/v2/top-headlines',
    // });
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=b290557bb7084fa7b084c4f23a6e2c0a`).then((d) => {
      setData(d.data.articles)
      console.log(d.data.articles)
    })

  }, [country])

  return (
    <div className="App">
      <section>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Form.Select onChange={(e) => setContry(e.target.value)}>
                  <option value=''>Select country</option>
                  <option value='br'>Brazil</option>
                  <option value='us'>U.S.A</option>
                  <option value='cn'>China</option>
                </Form.Select>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section>
        {/* <CardGroup > */}
        <div className="card-container" style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          {data.map((d, i) => (
            <Card key={i + 1} style={{ width: '23%', marginTop: "10px" }} >
              <Card.Img variant="top" src={d.urlToImage} />
              <Card.Body>
                <p>{d.source.name}</p>
                <Card.Title>{d.title}</Card.Title>
                <Card.Text style={{ overflow: 'hidden' }}>{d.content}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        {/* </CardGroup> */}
      </section>
    </div>
  );
}

export default App;
