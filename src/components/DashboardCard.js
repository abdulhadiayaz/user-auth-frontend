import { isEmpty } from "lodash";
import { ClipLoader } from "react-spinners";

const DashboardCard = ({
  isLoading,
  data,
  dataKey,
  iconClass,
  textClass,
  redirectUrl,
  text,
  clickHandler,
  icon,
}) => {
  return (
    <div className="dashboard-card" onClick={() => clickHandler(redirectUrl)}>
      <div className={"icon-wrapper " + iconClass}>{icon}</div>
      <div className={"text-wrapper " + textClass}>
        <h3>
          {!isLoading && !isEmpty(data) ? (
            data[dataKey]
          ) : (
            <div className="text-center">
              <ClipLoader />
            </div>
          )}
        </h3>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
