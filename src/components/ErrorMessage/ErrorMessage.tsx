import { ErrorMessageProps } from "./ErrorMessage.types";
import s from "./ErrorMessage.module.css";
import { toast } from "react-hot-toast";

export default function ErrorMessage({
  message = "Something went wrong...",
  showToast = false,
}: ErrorMessageProps): JSX.Element {
  if (showToast) {
    toast.error(message, {
      duration: 3000,
      position: "top-right",
    });
  }

  return <div className={s.messageBox}>{message}</div>;
}
