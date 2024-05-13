import { toast } from "react-toastify";

const Toast = {
  success: (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000, // Adjust as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  },
  error: (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 1000, // Adjust as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  },
  warning: (message) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 1000, // Adjust as needed
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  },
};

export default Toast;