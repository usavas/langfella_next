"use client";

type PropTypes = { deleteApi: string };

const WebPageListItemCompDeleteButton = (props: PropTypes) => {
  return (
    <div onClick={handleDelete}>
      <span className="text-sm bg-gray-400 hover:bg-gray-600 text-gray-200 rounded-md px-2.5 py-1.5 cursor-pointer">
        Del
      </span>
    </div>
  );

  function handleDelete(e: any) {
    try {
      fetch(props.deleteApi, { method: "DELETE" });
    } catch (error) {
      console.error(error);
    }
  }
};

export default WebPageListItemCompDeleteButton;
