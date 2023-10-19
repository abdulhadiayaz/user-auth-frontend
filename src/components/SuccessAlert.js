import { isEmpty, isNull } from "lodash";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SuccessAlert({ message, setSuccessMessage }) {
  if (!isEmpty(message) || !isNull(message)) {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      toastId: "error-toast",
      theme: "colored",
      autoClose: 2000,
      hideProgressBar: true,
      onClose: () => setSuccessMessage(null),
    });
    return <ToastContainer transition={Slide} />;
  } else {
    return null;
  }
}

export default SuccessAlert;
