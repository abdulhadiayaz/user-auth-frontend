import { isEmpty } from "lodash";
import { Col, Row } from "react-bootstrap";

const CustomTabFilter = (props) => {
  return (
    <Row className="toem-filter-tab-section ms-1 mb-3">
      <Col
        className="toem-filter-tab-col"
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
      >
        <div className="tab-div">
          <button
            className={`toem-filter-tab-element toem-semi-bold ${
              isEmpty(props.filter) && "active"
            }`}
            onClick={props.showAllStatusTabHandler}
          >
            All
          </button>
        </div>
        {props.filterOptions.map((data, i) => (
          <div className="tab-div" key={i}>
            <label
              className={`toem-filter-tab-element toem-semi-bold ${
                props.filter.includes(data.value) && "active"
              }`}
            >
              {data.name}

              <input
                className="opacity-0"
                name="statusTabs"
                type="radio"
                defaultChecked={props.filter.includes(data.name)}
                value={data.name}
                onChange={(e) => props.onCheckStatusHandler(e)}
              />
            </label>
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default CustomTabFilter;
