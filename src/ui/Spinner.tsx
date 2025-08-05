import type { JSX } from "react";

function Spinner({ color = "#d1d5dc" }): JSX.Element {
  return (
    <div
      className="mx-auto my-20 h-16 w-16 animate-[spin_1.5s_linear_infinite] rounded-full"
      style={{
        aspectRatio: "1",
        background: `
          radial-gradient(farthest-side, ${color} 94%, #0000) top/10px 10px no-repeat,
          conic-gradient(#0000 30%, ${color})
        `,
        WebkitMask:
          "radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)",
        mask: "radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)",
      }}
    ></div>
  );
}

export default Spinner;
