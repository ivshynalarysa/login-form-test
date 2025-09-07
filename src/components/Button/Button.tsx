import  type { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="block mx-auto w-[300px] h-16 bg-neutral-800 text-white p-4 rounded-3xl font-semibold"
    >
      {children}
    </button>
  );
}