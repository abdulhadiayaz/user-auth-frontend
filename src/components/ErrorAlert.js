import { isEmpty, isNull } from "lodash";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ErrorAlert({ message, setErrorMessage }) {
  if (!isEmpty(message) || !isNull(message)) {
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error-toast",
      theme: "colored",
      onClose: () => setErrorMessage(null),
    });
    return <ToastContainer transition={Zoom} />;
  } else {
    return null;
  }
}

export default ErrorAlert;
