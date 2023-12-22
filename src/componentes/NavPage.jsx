import Button from "react-bootstrap/Button";

export function NavPage({ movePrevPage, moveNextPage }) {
  return (
    <div className="d-flex justify-content-between">
      <Button
        onClick={movePrevPage}
      >
        Previous Page
      </Button>
      <Button
        onClick={moveNextPage}
      >
        Next Page
      </Button>
    </div>
  );
}
