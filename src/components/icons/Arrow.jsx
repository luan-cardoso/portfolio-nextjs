export default function Arrow() {
  return (
    <svg
      data-testid="geist-icon"
      height="14"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
        fill="url(#gradient-arrow)"
      ></path>
      <defs>
        <linearGradient id="gradient-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  );
}
