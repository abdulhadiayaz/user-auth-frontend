import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { SIDENAV_ITEMS } from "./MainLayout.constants";
import { logoutOemUser } from "../../screens/Login/Login.actions";
import dummyAdminImg from "../../assets/images/dummy-user.png";
import { Container, Row, Col, NavDropdown, Accordion } from "react-bootstrap";
import { isEmpty, isNull } from "lodash";
import SuccessAlert from "../../components/SuccessAlert";
import { setOemSuccess } from "./MainLayout.actions";
import { io } from "socket.io-client";
import config from "../../config";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NOTIFICATION_ACTIVITY_TYPES } from "../../constants";
import MainLayoutNotifications from "./MainLayout.Notifications";
import {
  getAllNotifications,
  getNotificationsCount,
  readNotification,
} from "../../services/api";

const socket = io(config.baseUrl, {
  transports: ["websocket"],
  reconnection: true,
  rejectUnauthorized: false,
});

const MainLayout = ({ children }) => {
  const location = useLocation();
  const state = useSelector((state) => state);
  const { name, role, companyLogo, userId, companyName } = state.oemAuth;
  const dispatch = useDispatch();
  const history = useHistory();
  const [notificationCount, setNotificationCount] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isLoadingNotification, setIsLoadingNotification] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const { message } = state.oemSuccess;

  const onHandleLogout = () => {
    dispatch(logoutOemUser());
    history.push(`/login`);
  };

  useEffect(() => {
    socket.once("subCompanyUsers", ({ subCompanyUsers, subCompanyId }) => {
      if (subCompanyUsers.includes(userId)) {
        socket.on(`orderPlaced_${subCompanyId}`, (response) => {
          setNotificationCount((prev) => {
            return prev + 1;
          });
        });
        socket.on(`proofOfPayment_${subCompanyId}`, (response) => {
          setNotificationCount((prev) => {
            return prev + 1;
          });
        });
        socket.on(`dealerRequest_${subCompanyId}`, (response) => {
          setNotificationCount((prev) => {
            return prev + 1;
          });
        });
      }
    });
  }, [socket]);

  const getNotificationCount = async () => {
    try {
      const res = await getNotificationsCount(userId);
      const { data } = res.data;
      setNotificationCount(data);
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  const onHandleNotification = async (type) => {
    setIsLoadingNotification(true);
    try {
      const res = await getAllNotifications(userId, type);
      const { data } = res.data;
      setNotifications(data);
      setShowNotification(true);
    } catch (err) {
      console.log(err.response?.data.message);
    }
    setIsLoadingNotification(false);
  };

  const viewNotification = async (
    notificationId,
    subCompanyId,
    sourceId,
    activityType
  ) => {
    try {
      await readNotification(userId, subCompanyId, notificationId);
      setShowNotification(false);
      setNotificationCount((prev) => {
        return prev && prev - 1;
      });
      if (
        [
          NOTIFICATION_ACTIVITY_TYPES.orderPlaced,
          NOTIFICATION_ACTIVITY_TYPES.proofOfPayment,
        ].includes(activityType)
      ) {
        history.replace(`/users/orders/${sourceId}/details`);
        history.go(0);
      } else if (activityType === NOTIFICATION_ACTIVITY_TYPES.dealerRequest) {
        history.replace(`/users/dealerRequests/${sourceId}`);
        history.go(0);
      }
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  useEffect(() => {
    getNotificationCount();
  }, []);

  return (
    <Container className="toem-main-container">
      <SuccessAlert
        message={message}
        setSuccessMessage={() => dispatch(setOemSuccess({ message: null }))}
      />
      <Row>
        <Col className="d-flex toem-main-layout">
          <div className="d-flex flex-column toem-main-layout-left toem-bg-dark">
            <div className="d-flex flex-column align-items-center">
              <div className="toem-left-sidebar-logo-div">
                <img
                  src={
                    isNull(companyLogo) || isEmpty(companyLogo)
                      ? dummyAdminImg
                      : companyLogo
                  }
                  alt="Logo"
                />
              </div>
              <h6 className="toem-left-sidebar-role">{role}</h6>
              <h4 className="toem-left-sidebar-name">
                <NavDropdown title={name} menuVariant="light" align="end">
                  <NavDropdown.Item onClick={onHandleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </h4>
            </div>
            <ul className="nav nav-pills flex-column sidebar-nav-ul">
              {SIDENAV_ITEMS.map((item, i) => {
                let isMenuActive = false;
                if (item.params) {
                  for (let param of item.params) {
                    if (!location.pathname.search(param)) {
                      isMenuActive = true;
                      break;
                    }
                  }
                }
                return item.subMenus?.length > 0 ? (
                  <Accordion
                    bsPrefix="toem-accordian"
                    defaultActiveKey={isMenuActive && i}
                    key={i}
                  >
                    <Accordion.Item eventKey={i}>
                      <Accordion.Header
                        bsPrefix="toem-accordian-item"
                        className={`${
                          isMenuActive && "toem-custom-accordion-active"
                        }`}
                      >
                        <div className="toem-nav-icon-div">
                          {!isMenuActive ? item.iconInActive : item.iconActive}
                        </div>
                        {item.name}
                      </Accordion.Header>
                      <Accordion.Body bsPrefix="toem-accordian-body">
                        <ul className="p-0 mt-3">
                          {item.subMenus.map((subMenu, index) => {
                            return (
                              <li key={index}>
                                <NavLink
                                  to={subMenu.to}
                                  className="d-flex justify-content-start align-items-center link-light sidebar-link toem-navlink"
                                  aria-current="page"
                                >
                                  <div className="toem-nav-icon-div justify-content-center">
                                    <div className="toem-icon-inner-div" />
                                  </div>
                                  <span>{subMenu.name}</span>
                                </NavLink>
                              </li>
                            );
                          })}
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                ) : (
                  <li
                    key={i}
                    className="nav-item toem-nav-items sidebar-nav-li"
                  >
                    <NavLink
                      to={item.to}
                      className="d-flex justify-content-start align-items-center nav-link link-light sidebar-link"
                      aria-current="page"
                    >
                      <div className="toem-nav-icon-div">
                        {location.pathname.search(item.to)
                          ? item.iconInActive
                          : item.iconActive}
                      </div>
                      {item.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="toem-main-layout-right">
            <Container fluid className="p-0">
              <Row className="toem-top-layout">
                <Col>
                  <h2 className="fw-bold">{companyName}</h2>
                </Col>
                <Col className="text-end">
                  <div className="notification-div">
                    <button
                      onClick={() => onHandleNotification(activeTab)}
                      className={`${
                        location.pathname.search("/users/notifications")
                          ? "icon-btn"
                          : "icon-btn active"
                      }`}
                    >
                      <NotificationsIcon className="dashboard-icon" />
                    </button>
                    <MainLayoutNotifications
                      isLoadingNotification={isLoadingNotification}
                      show={showNotification}
                      onHide={() => setShowNotification(false)}
                      notificationCount={notificationCount}
                      notifications={notifications}
                      activeTab={activeTab}
                      setActiveTab={(tab) => {
                        setActiveTab(tab);
                        onHandleNotification(tab);
                      }}
                      viewNotification={(
                        notificationId,
                        subCompanyId,
                        sourceId,
                        activityType
                      ) =>
                        viewNotification(
                          notificationId,
                          subCompanyId,
                          sourceId,
                          activityType
                        )
                      }
                    />
                    {notificationCount ? (
                      <span className="count-span">
                        {notificationCount > 9 ? "9+" : notificationCount}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>
                </Col>
              </Row>
            </Container>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
