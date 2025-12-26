export default function Heart() {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        d="M1.39408 2.14408C3.21165 0.326509 6.13348 0.286219 8 2.02321C9.86652 0.286221 12.7884 0.326509 14.6059 2.14408C16.4647 4.00286 16.4647 7.01653 14.6059 8.87531L8 15.4812L1.39408 8.87531C-0.464691 7.01653 -0.464694 4.00286 1.39408 2.14408Z"
        fill="url(#gradient-heart)"
      ></path>
      <defs>
        <linearGradient id="gradient-heart" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5094d3" />
          <stop offset="100%" stopColor="#2f7bb9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
