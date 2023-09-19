import { toast } from "react-toastify";

function CustomToast(message, type) {
    toast(message, {
        type: type,
        position: 'top-center',
        autoClose: 5000
    });
}
export default CustomToast;
