import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Card } from 'react-bootstrap';

function App() {
  const [minCalories, setMinCalories] = useState(15);
  const [maxWeight, setMaxWeight] = useState(10);
  const [elementsText, setElementsText] = useState(`5,3\n3,5\n5,2\n1,8\n2,3`);
  const [result, setResult] = useState(null);

  const parseElements = () => {
    return elementsText
      .trim()
      .split('\n')
      .map((line, idx) => {
        const [w, c] = line.split(',').map(Number);
        return { id: `E${idx + 1}`, weight: w, calories: c };
      });
  };

  const resolver = () => {
    const elements = parseElements();
    let best = null;

    const powerSet = (arr) => {
      const result = [[]];
      for (const item of arr) {
        const copy = [...result];
        for (const subset of copy) { 
          result.push([...subset, item]);
        }
      }
      return result;
    };

    const allCombos = powerSet(elements);

    for (const combo of allCombos) {
      const totalWeight = combo.reduce((sum, el) => sum + el.weight, 0);
      const totalCalories = combo.reduce((sum, el) => sum + el.calories, 0);

      if (totalWeight <= maxWeight && totalCalories >= minCalories) {
        if (!best || totalWeight < best.totalWeight) {
          best = { combo, totalWeight, totalCalories };
        }
      }
    }

    setResult(best);
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <Container className='text-center'>
        <Row className='justify-content-center'>
          <Card className="shadow-lg p-4 mb-4 rounded">
            <h2 className="text-center mb-4 text-primary">🧭 Optimizador de Equipaje</h2>

            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><strong>Mínimo de calorías</strong></Form.Label>
                    <Form.Control
                      type="number"
                      value={minCalories}
                      onChange={(e) => setMinCalories(parseInt(e.target.value))}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label><strong>Peso máximo permitido</strong></Form.Label>
                    <Form.Control
                      type="number"
                      value={maxWeight}
                      onChange={(e) => setMaxWeight(parseInt(e.target.value))}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label><strong>Elementos (peso, calorías)</strong></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      value={elementsText}
                      onChange={(e) => setElementsText(e.target.value)}
                    />
                    <Form.Text className="text-muted">
                      Un elemento por línea. Formato: peso,calorías
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button variant="primary" onClick={resolver}>
                  🔍 Calcular combinación óptima
                </Button>
              </div>
            </Form>
          </Card>

          {result && (
            <Card className="shadow-sm p-4 mt-4 border-success">
              <h4 className="text-success mb-3">✅ Resultado Óptimo</h4>
              <Table striped bordered hover>
                <thead className="table-success">
                  <tr>
                    <th>Elemento</th>
                    <th>Peso</th>
                    <th>Calorías</th>
                  </tr>
                </thead>
                <tbody>
                  {result.combo.map((el) => (
                    <tr key={el.id}>
                      <td>{el.id}</td>
                      <td>{el.weight}</td>
                      <td>{el.calories}</td>
                    </tr>
                  ))}
                  <tr className="table-primary">
                    <td><strong>Total</strong></td>
                    <td><strong>{result.totalWeight}</strong></td>
                    <td><strong>{result.totalCalories}</strong></td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          )}

          {!result && (
            <div className="text-center mt-3 text-muted">
              No se ha encontrado una combinación válida.
            </div>
          )}
          </Row>
      </Container>
    </div>
  );
}

export default App;
