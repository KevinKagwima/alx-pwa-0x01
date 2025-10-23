import { ButtonProps } from "@/interfaces";

export default function Button({ title, action }: ButtonProps) {
  return (
    <button
      onClick={action}
      className="px-8 py-2 border-2 border-[#E2D609] rounded-full hover:bg-[#E2D609] hover:text-black transition-colors duration-300"
    >
      {title}
    </button>
  );
}
