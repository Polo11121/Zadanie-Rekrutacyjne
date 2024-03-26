import { TextInput } from "flowbite-react";
import {
  PaginationButtons,
  RequestInfo,
  SortButtons,
  Table,
} from "@/components";
import { Tooltip } from "flowbite-react";
import { useSearch } from "@/hooks/useSearch";
import { HEADERS, SORT_FIELDS } from "@/lib/constants";

export const App = () => {
  const {
    changePageSizeHandler,
    changeSortOrder,
    formattedRows,
    hasNext,
    hasPrev,
    isLoading,
    nextPageHandler,
    prevPageHandler,
    sortHandler,
    page,
    pageSize,
    sortField,
    sortOrder,
    errorMessage,
    isEmpty,
    refetchHandler,
  } = useSearch();

  return (
    <div className="h-screen container py-12 flex flex-col mx-auto gap-y-5">
      <div className="flex items-center gap-x-2">
        <SortButtons
          onChangeSortOrder={changeSortOrder}
          sortOrder={sortOrder}
          sortFields={SORT_FIELDS}
          onSort={sortHandler}
          currentSortField={sortField}
        />
        <Tooltip content="Items per page">
          <TextInput
            type="number"
            className="w-[4rem]"
            value={pageSize}
            onChange={changePageSizeHandler}
          />
        </Tooltip>
      </div>
      <div className="flex flex-col flex-1 overflow-x-auto">
        <Table headers={HEADERS} rows={formattedRows} isStriped />
        <div className="flex flex-1 justify-center mt-10 capitalize">
          <RequestInfo
            onRefetch={refetchHandler}
            errorMessage={errorMessage}
            isEmpty={isEmpty}
            isLoading={isLoading}
          />
        </div>
      </div>
      <PaginationButtons
        page={page}
        hasNext={hasNext}
        hasPrev={hasPrev}
        onNextClick={nextPageHandler}
        onPrevClick={prevPageHandler}
      />
    </div>
  );
};
