import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import {
  NOTIFICATION_ACTIVITY_TYPES_COLOR_CLASSES,
  NOTIFICATION_TABS,
} from "../../constants";
import CustomModal from "../../components/CustomModal";
import { ClipLoader } from "react-spinners";
import { find } from "lodash";
import { useHistory } from "react-router";

const MainLayoutNotifications = ({
  isLoadingNotification,
  show,
  onHide,
  notifications,
  activeTab,
  setActiveTab,
  viewNotification,
}) => {
  const history = useHistory();
  return (
    <CustomModal
      show={show}
      onHide={onHide}
      size="md"
      className="toem-notification-modal"
      title="Notifications"
      closebutton={`${true}`}
      iscentered={`${false}`}
      backdropClassName="toem-notification-modal-backdrop"
      bodyclassname="p-0"
      body={
        <>
          <div className="icon-btn-dropdown-menu">
            <Tabs
              activeKey={activeTab}
              onSelect={(tab) => setActiveTab(tab)}
              className="toem-notifications-tab"
            >
              {NOTIFICATION_TABS.map((tabData, index) => {
                return (
                  <Tab
                    eventKey={tabData.tabKey}
                    title={tabData.tabTitle}
                    key={index}
                  >
                    <div>
                      <div className="text-end">
                        <button
                          className="show-all-btn"
                          onClick={() => history.push("/users/notifications")}
                        >
                          Show all
                        </button>
                      </div>
                      <div>
                        {isLoadingNotification ? (
                          <div className="text-center">
                            <ClipLoader />
                          </div>
                        ) : notifications.length > 0 ? (
                          notifications.map(
                            (
                              {
                                id,
                                fk_sub_company_id,
                                source_id,
                                activity_type,
                                text,
                                sub_text,
                                is_read,
                              },
                              index
                            ) => {
                              return (
                                <div
                                  key={index}
                                  className="single-notification"
                                  onClick={() =>
                                    viewNotification(
                                      id,
                                      fk_sub_company_id,
                                      source_id,
                                      activity_type
                                    )
                                  }
                                >
                                  <div className="div-left">
                                    <span
                                      className={`top-head ${
                                        find(
                                          NOTIFICATION_ACTIVITY_TYPES_COLOR_CLASSES,
                                          {
                                            name: activity_type,
                                          }
                                        ).colorClass
                                      }`}
                                    >
                                      {activity_type}
                                    </span>
                                    <h2
                                      className="body-text"
                                      dangerouslySetInnerHTML={{
                                        __html: text,
                                      }}
                                    />
                                    <span className="sub-text">{sub_text}</span>
                                  </div>
                                  {!is_read && (
                                    <div className="div-right">
                                      <div />
                                    </div>
                                  )}
                                </div>
                              );
                            }
                          )
                        ) : (
                          <div className="toem-no-notification">
                            No New Notification
                          </div>
                        )}
                      </div>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </>
      }
    />
  );
};

export default MainLayoutNotifications;
