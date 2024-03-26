import { axios } from "@/axios";
import { Tag, SortOrder } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type Response = {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
};

type SortParams = {
  pageSize: number;
  page: number;
  order: SortOrder;
  sort: string;
};

export const useGetTags = (params: SortParams) => {
  const queryClient = useQueryClient();

  const getTags = async (params: SortParams): Promise<Response> => {
    const response = await axios.get("/tags", {
      params: {
        ...params,
        site: "stackoverflow",
      },
    });

    const { data } = response;

    return data;
  };

  const data = useQuery({
    queryKey: ["tags", ...Object.values(params)],
    queryFn: () => getTags(params),
  });

  if (data.data?.has_more && !data.isLoading) {
    const nextPage = params.page + 1;

    queryClient.prefetchQuery({
      queryKey: ["tags", params.pageSize, nextPage, params.order, params.sort],
      queryFn: () => getTags({ ...params, page: nextPage }),
    });
  }

  return data;
};
