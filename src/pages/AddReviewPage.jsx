import { Button, Form } from 'react-bootstrap';

function AddReviewPage() {
  return (
    <div className="container-fluid py-5">
      <h2 className="text-center">Оставить отзыв</h2>
      <Form style={{ width: 500 }}>
        <Form.Group>
          <Form.Label>Напишите своё мнение о нас</Form.Label>
          <Form.Control as="textarea" type="text" rows={5} />
        </Form.Group>
        <Button disabled>Отправить</Button>
      </Form>
    </div>
  );
}

export default AddReviewPage;