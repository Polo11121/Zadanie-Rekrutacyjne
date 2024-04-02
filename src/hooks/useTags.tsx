import { useGetStoreActions, useGetStoreState } from "@/store";
import { useGetTags } from "@/api/useGetTags";

export const useTags = () => {
  const { pageSize, page, sortField, sortOrder } = useGetStoreState();
  const { setPageSize, setPage, setSortField, changeSortOrder } =
    useGetStoreActions();

  const { data, isLoading, error, refetch } = useGetTags({
    pageSize,
    page,
    order: sortOrder,
    sort: sortField,
  });

  const formattedRows = data?.items
    ? data?.items.map((item) => [item.name, item.count])
    : [];

  const hasNext = data?.has_more || false;
  const hasPrev = page > 1;

  const changePageSizeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = Number(event.target.value);

    if (value < 1 || value > 100) {
      return;
    }

    setPageSize(value);
  };

  const sortHandler = (field: string) => setSortField(field.toLowerCase());

  const refetchHandler = () => refetch();

  const nextPageHandler = () => setPage(page + 1);
  const prevPageHandler = () => setPage(page - 1);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorMessage = (error as any)?.response?.data.error_message as
    | string
    | undefined;
  const isEmpty = !formattedRows.length && !isLoading && !errorMessage;

  return {
    isLoading,
    formattedRows,
    hasNext,
    hasPrev,
    changePageSizeHandler,
    refetchHandler,
    prevPageHandler,
    nextPageHandler,
    sortHandler,
    changeSortOrder,
    page,
    pageSize,
    sortField,
    sortOrder,
    errorMessage,
    isEmpty,
  };
};
