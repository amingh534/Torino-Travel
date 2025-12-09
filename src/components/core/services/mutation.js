import api from "../config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};
const useCheckOtp = () => {
  // const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("auth/check-otp", data);

  // const onSuccess =() => {
  //   queryClient.invalidateQueries({ queryKey: ["user-data"] });
  // };
  // const onSuccess =() => {
  //   queryClient.cancelQueries({ queryKey: ["user-data"] })
  // };
  return useMutation({ mutationFn });
};
// const useGetTours = () => {
//   const mutationFn = (data) => api.get("tour", data);
//   return useMutation({ mutationFn });
// };

// const useDeleteProduct = () => {
//   const queryClient = useQueryClient();
//   const mutationFn = (data) => api.delete("products", data);
//   const onSuccess = async () => {
//     await queryClient.invalidateQueries({ queryKey: ["all-products"] });
//   };

//   return useMutation({ mutationFn, onSuccess });
// };

const useUpdateData = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.put("/user/profile", data);
  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };

  return useMutation({ mutationFn, onSuccess });
};


// const usePutUserData = () => {
//   const mutationFn = (data) => api.put("user/profile", data);
//   return {
//     mutationFn,
//   };
// };

export { useSendOtp, useCheckOtp, useUpdateData };
