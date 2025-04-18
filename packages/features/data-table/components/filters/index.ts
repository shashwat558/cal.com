"use client";

import { ActiveFilters } from "./ActiveFilters";
import { AddFilterButton } from "./AddFilterButton";
import { ClearFiltersButton } from "./ClearFiltersButton";
import { ColumnVisibilityButton } from "./ColumnVisibilityButton";
import { DateRangeFilter } from "./DateRangeFilter";
import { FilterBar } from "./FilterBar";

// Update the export to include ActiveFilters
export const DataTableFilters = {
  ColumnVisibilityButton,
  AddFilterButton,
  ActiveFilters,
  ClearFiltersButton,
  FilterBar,
};

export { DateRangeFilter };
