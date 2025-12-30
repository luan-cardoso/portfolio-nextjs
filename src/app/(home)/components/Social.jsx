import Badge from "../../../../shared/components/Badge";
import GitHub from "../../../../shared/icons/GitHub";
import WhatsApp from "../../../../shared/icons/WhatsApp";

export default function Social() {
  return (
    <div className="absolute flex gap-2 items-center bottom-10 left-10 max-sm:bottom-20">
      <a href="https://github.com/luan-cardoso" target="_blank">
        <Badge bg="#353535">
          <GitHub />
          GitHub
        </Badge>
      </a>
      <a href="https://wa.me/5585988811690" target="_blank">
        <Badge bg="#65dd8d">
          <WhatsApp />
          WhatsApp
        </Badge>
      </a>
      <p className="text-sm max-sm:text-xs">Get in Touch!</p>
    </div>
  );
}
