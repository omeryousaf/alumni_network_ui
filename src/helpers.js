import { toast } from "react-toastify";

export const notifyUser = (message) => {
	toast.success(message, {
		position: toast.POSITION.TOP_CENTER
	});
};