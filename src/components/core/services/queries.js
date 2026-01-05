import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import api from "../config/api";
import QueryString from "qs";

const useGetUserData = () => {
  // const queryClient = useQueryClient();

  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey, retry: 2 });
};
const useGetTours = (query) => {
  // console.log("useGetTours:",query);
  const url = "tour?" + QueryString.stringify(query);
  const queryFn = () => api.get(url);
  const queryKey = ["tour", query];
  return useQuery({
    queryFn,
    queryKey,
    enabled: false,
    keepPreviousData: true,
  });
};
const useGetBasket = () => {
  const queryFn = () => api.get("basket");
  const queryKey = ["user-basket"];
  return useQuery({ queryFn, queryKey });
};
const useGetUserTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["user-tours"];
  return useQuery({ queryFn, queryKey });
};
const useGetUserTransactions = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["user-transactions"];
  return useQuery({ queryFn, queryKey });
};
const usePagination = (page) => {
  const queryFn = () => api.get(`user/tours?page=${page}`);
  const queryKey = ["user-pagination", page];
  return useQuery({
    queryFn,
    queryKey,
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
};
// const usePutUserData = () => {
//   const queryClient = useQueryClient();
//   // console.log("Query:",queryClient);

//   return useMutation({
//     mutationFn: (data) => api.put("user/profile", data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["user-data"] });
//     },

//   });
// };
// const queryFn = () => api.put("user/profile");
// const queryKey = ["put-user-data"];
// return useQuery({ queryFn, queryKey });
export {
  useGetUserData,
  useGetTours,
  useGetBasket,
  useGetUserTours,
  useGetUserTransactions,
  usePagination,
};
