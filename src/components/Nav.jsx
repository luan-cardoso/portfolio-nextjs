import Badge from "./Badge.jsx";
import Email from "./icons/Email.jsx";
import TextType from "./TextType.jsx";

export default function Nav() {
  return (
    <section className="flex justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-wide">
        LUAN
        <span className="text-sm font-medium text-gradient tracking-wide">
          .DEV
        </span>
      </h1>
      <div className="max-sm:hidden">
        <Badge>
          <Email />
          <TextType
            className="max-lg:text-sm"
            text={["luan.cardoso0029@gmail.com"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </Badge>
      </div>
    </section>
  );
}
