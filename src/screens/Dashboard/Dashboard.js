import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import DashboardCard from "../../components/DashboardCard";
import ErrorAlert from "../../components/ErrorAlert";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { getDashboardStatsReq } from "../../services/api";
import { DASHBOARD_CARDS_DATA } from "./Dashboard.constants";
import { io } from "socket.io-client";
import config from "../../config";
const socket = io(config.baseUrl, {
  transports: ["websocket"],
  reconnection: true,
  rejectUnauthorized: false,
});
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statistics, setStatistics] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  // store
  const state = useSelector((state) => state);
  const { userId, companyName } = state.oemAuth;

  const getDashboardStats = async () => {
    setIsLoading(true);
    try {
      const res = await getDashboardStatsReq(userId);
      const { data } = res.data;
      data.version = `${process.env.REACT_APP_WEB_VERSION}`;
      setStatistics(data);
    } catch (err) {
      setErrorMessage(err.response?.data.message);
    }
    setIsLoading(false);
  };

  const clickHandler = (path) => {
    history.push(`/users/${path}`);
  };
  // const handleOnClick = () =>{
  //   console.log("called")
  //   const data = "You are here"
  //   socket.emit("orderPlaced", data);
  // }
  // const [response, setResponse] = useState("");
  // useEffect(() => {
  //   const data = "You are here"
  //   socket.emit("test", data);
  //   socket.on("here",data =>{
  //     console.log(data);
  //   })
  // }, []);
  useEffect(() => {
    getDashboardStats();
  }, []);
  return (
    <>
      <ErrorAlert message={errorMessage} setErrorMessage={setErrorMessage} />
      <MainLayout>
        <Breadcrumb
          breadcrumbs={{
            currentStep: companyName,
          }}
        />
        {/* <p>
          It's <time dateTime={response}>{response}</time>
        </p>
        <button onClick={handleOnClick}>Click me</button> */}
        <Container fluid className="p-0">
          <Row className="dashboard-wrapper">
            {DASHBOARD_CARDS_DATA.map((card, i) => (
              <Col lg={4} className="dashboard-cards-wrapper" key={i}>
                <DashboardCard
                  isLoading={isLoading}
                  data={statistics}
                  dataKey={card.dataKey}
                  iconClass={card.iconClass}
                  textClass={card.textClass}
                  redirectUrl={card.redirectUrl}
                  text={card.text}
                  clickHandler={clickHandler}
                  icon={card.icon}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </MainLayout>
    </>
  );
};

export default Dashboard;
