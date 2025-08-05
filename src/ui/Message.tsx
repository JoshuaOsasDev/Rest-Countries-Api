import type { JSX } from "react";

function Message({ message }: { message: string }): JSX.Element {
  return (
    <p className="col-span-full m-auto my-3 flex items-center justify-center text-lg font-bold">
      {message}
    </p>
  );
}

export default Message;
