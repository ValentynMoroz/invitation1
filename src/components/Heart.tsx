type HeartProps = {
  number: number | string;
  size?: number;
  color?: string;
};

export function HeartRounded({ number, size = 120, color = "#ff4d6d" }: HeartProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="heart-rounded">
      {/* більш округла форма */}
      <path
        d="M12 21C10 19.5 4 14 4 9C4 6 6.2 4 9 4C10.5 4 12 5 12 6.5C12 5 13.5 4 15 4C17.8 4 20 6 20 9C20 14 14 19.5 12 21Z"
        fill={color}
      />
      <text x="12" y="12" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="bold">
        {number}
      </text>
    </svg>
  );
}
