import { create } from "zustand";
import { SortOrder } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

type State = {
  pageSize: number;
  page: number;
  sortField: string;
  sortOrder: SortOrder;
};

type Actions = {
  setPageSize: (newPageSize: number) => void;
  setPage: (newPageSize: number) => void;
  setSortField: (newSortField: string) => void;
  changeSortOrder: () => void;
};

const useStore = create<State & Actions>()(
  persist(
    (set) => ({
      pageSize: 10,
      setPageSize: (newPageSize) => set({ pageSize: newPageSize, page: 1 }),
      page: 1,
      setPage: (newPage) => set({ page: newPage }),
      sortField: "name",
      setSortField: (newSortField) => set({ sortField: newSortField }),
      sortOrder: "asc",
      changeSortOrder: () =>
        set((state) => ({
          ...state,
          sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
        })),
    }),
    {
      name: "filter-fields",
      storage: createJSONStorage(() => sessionStorage),
      partialize: ({ page, pageSize, sortField, sortOrder }) => ({
        page,
        pageSize,
        sortField,
        sortOrder,
      }),
    }
  )
);

export const useGetStoreState = () =>
  useStore(({ page, pageSize, sortField, sortOrder }) => ({
    page,
    pageSize,
    sortField,
    sortOrder,
  }));

export const useGetStoreActions = () =>
  useStore(({ setPage, setPageSize, setSortField, changeSortOrder }) => ({
    setPage,
    setPageSize,
    setSortField,
    changeSortOrder,
  }));
