import Badge from "./Badge.jsx";
import Email from "./icons/Email.jsx";
import TextType from "./TextType.jsx";

export default function Nav() {
  return (
    <section className="flex justify-between">
      <h1 className="text-3xl font-extrabold tracking-wider">
        portfolio
        <span className="text-sm font-bold text-[var(--skyBlue)]">.DEV</span>
      </h1>
      <Badge>
        <Email />
        <TextType
          text={["luan.cardoso0029@gmail.com"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </Badge>
    </section>
  );
}
