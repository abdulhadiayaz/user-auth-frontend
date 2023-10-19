import { Col, Modal, Row } from "react-bootstrap";
import CustomButton from "./CustomButton";

const ConfirmationModal = (props) => {
  return (
    <Modal
      {...props}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={props.className}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="toem-bold">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Row className="text-center">{props.body}</Row>
          <Row className="toem-modal-row">
            <Col lg={{ span: 4, offset: 2 }} md={{ span: 4, offset: 2 }} sm={6}>
              <CustomButton
                className="toem-confirmation-modal-btn justify-content-center"
                onClick={props.confirmclick}
              >
                {props.confirmbuttontext}
              </CustomButton>
            </Col>

            <Col lg={4} md={4} sm={6}>
              <CustomButton
                className={`toem-confirmation-modal-btn justify-content-center ${
                  props.cancelbuttonclass ? props.cancelbuttonclass : "cancel"
                }`}
                onClick={props.cancelclick}
              >
                {props.cancelbuttontext}
              </CustomButton>
            </Col>
          </Row>
        </>
      </Modal.Body>
      <Modal.Footer>{props.footer}</Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
