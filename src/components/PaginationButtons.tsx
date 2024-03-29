import { Button, Tooltip } from "flowbite-react";

type PaginationButtonsProps = {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  onNextClick?: () => void;
  onPrevClick?: () => void;
};

export const PaginationButtons = ({
  page,
  hasNext,
  hasPrev,
  onNextClick,
  onPrevClick,
}: PaginationButtonsProps) => (
  <Button.Group>
    <Button disabled={!hasPrev} onClick={onPrevClick} color="light">
      <Tooltip
        className="capitalize whitespace-nowrap	mt-3"
        placement="bottom"
        content="Previous Page"
      >
        Prev
      </Tooltip>
    </Button>
    <Button className="pointer-events-none" color="light">
      {page}
    </Button>
    <Button
      className="border-r"
      disabled={!hasNext}
      onClick={onNextClick}
      color="light"
    >
      <Tooltip
        className="capitalize whitespace-nowrap	mt-3"
        placement="bottom"
        content="Next Page"
      >
        Next
      </Tooltip>
    </Button>
  </Button.Group>
);
