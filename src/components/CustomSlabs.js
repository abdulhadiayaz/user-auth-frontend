import moment from "moment";
import { Col, Row } from "react-bootstrap";
import { DATE_FORMAT, DISCOUNT_TYPE_OBJ } from "../constants";
import { structurePrice } from "../utils";

const CustomSlabs = ({ index, from, to, discount, slabType, isDate }) => {
  return (
    <Row className={`p-2 ${!index && "pt-0"} justify-content-center`}>
      <Col
        className="bg-yellow rounded-start text-center p-1"
        xl={4}
        lg={4}
        md={4}
        sm={4}
      >
        {isDate ? moment.unix(from).format(DATE_FORMAT) : from}
      </Col>
      <Col className="bg-yellow text-center p-1" xl={4} lg={4} md={4} sm={4}>
        {isDate ? moment.unix(to).format(DATE_FORMAT) : to ? to : "∞"}
      </Col>
      <Col
        className="toem-semi-bold bg-yellow rounded-end text-center p-1"
        xl={3}
        lg={3}
        md={3}
        sm={3}
      >
        {slabType === DISCOUNT_TYPE_OBJ.absolute
          ? structurePrice(discount)
          : discount}
        {slabType === DISCOUNT_TYPE_OBJ.percentage && "%"}
      </Col>
    </Row>
  );
};

export default CustomSlabs;
