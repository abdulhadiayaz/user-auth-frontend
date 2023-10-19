import { Modal } from "react-bootstrap";

const CustomModal = (props) => {
  return (
    <Modal
      {...props}
      size={props.size}
      aria-labelledby="contained-modal-title-vcenter"
      centered={props.iscentered && props.iscentered}
      className={props.className}
      backdropClassName={props.backdropClassName && props.backdropClassName}
    >
      <Modal.Header
        closeButton={
          props.closebutton && (props.closebutton === "false" ? false : true)
        }
      >
        <Modal.Title id="contained-modal-title-vcenter" className="toem-bold">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${props.bodyclassname && props.bodyclassname}`}>
        {props.body}
      </Modal.Body>
      {props.footer && <Modal.Footer>{props.footer}</Modal.Footer>}
    </Modal>
  );
};

export default CustomModal;
