import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8">
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect width="128" height="128" rx="28" fill="#6D5EF8" />
          <rect
            x="36"
            y="36"
            width="56"
            height="56"
            rx="14"
            stroke="white"
            strokeWidth="6"
          />
          <path
            d="M48 64H80"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M64 48L64 80"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="text-xl font-bold">KanbanBoard</div>
    </Link>
  );
}
