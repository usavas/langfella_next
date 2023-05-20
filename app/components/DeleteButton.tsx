"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

type PropTypes = { deleteApi: string; callback?: Function };

const DeleteButton = (props: PropTypes) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button onClick={handleDelete}>
      <span className="text-sm bg-gray-400 hover:bg-gray-600 text-gray-200 rounded-md px-2.5 py-1.5 cursor-pointer">
        Del
      </span>
    </button>
  );

  function handleDelete(e: any) {
    try {
      fetch(props.deleteApi, { method: "DELETE" });
      props.callback?.();
    } catch (error) {
      console.error(error);
    }
    //NOTE have to use this for updating the UI.
    // the advantage of this is I don't have to use useState and useEffect to achieve the same result
    startTransition(() => {
      router.refresh();
    });
  }
};

export default DeleteButton;
