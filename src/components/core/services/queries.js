import { useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../config/api";
import QueryString from "qs";

const useGetUserData = () => {
  // const queryClient = useQueryClient();

  const queryFn = () => api.get("user/profile");
  const queryKey = ["user-data"];
  return useQuery({ queryFn, queryKey });
};
const useGetTours = (query) => {
  console.log(query);
  const url = "tour?" + QueryString.stringify(query);
  const queryFn =  () => api.get(url);
  const queryKey = ["tour", query];
  return (
    useQuery({ queryFn, queryKey, enabled: false })
  );
};
export { useGetUserData, useGetTours };
