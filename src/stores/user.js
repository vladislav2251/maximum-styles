import { isLogged } from "$lib/context/store.js";
// import Cookies from "js-cookie";
// import axiosInstance from "$lib/context/api.js";
// // export const cart = cartStore;
// export const checkLogged = async () => {
// 	const token = Cookies.get("auth_token");
// 	if (token) {
// 		try {
// 			const response = await axiosInstance.post("/accounts/token/check/", { token });
// 			if (response.data.status) {
// 				isLogged.set(true)
// 			} else {
// 				Cookies.remove("auth_token");
// 				isLogged.set(false)
// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// }
