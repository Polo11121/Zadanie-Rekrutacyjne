import { Button, Spinner } from "flowbite-react";

type RequestInfoProps = {
  isLoading: boolean;
  errorMessage?: string;
  isEmpty: boolean;
  onRefetch?: () => void;
};

export const RequestInfo = ({
  isLoading,
  errorMessage,
  isEmpty,
  onRefetch,
}: RequestInfoProps) => {
  if (errorMessage) {
    return (
      <div className="flex flex-col gap-y-2 items-center">
        <span className="text-lg text-red-500">{errorMessage}</span>
        <Button onClick={onRefetch} color="failure">
          Try again
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (isEmpty) {
    return <span className="text-lg">No data available.</span>;
  }
};
