import Arrow from "../../../../shared/icons/Arrow";
import SplitText from "../../../../shared/components/SplitText";

export default function Services() {
  return (
    <div className="flex flex-col gap-3 text-(--black)">
      <div>
        <SplitText
          className="font-bold text-xl"
          text="O que posso criar?"
          duration={0.8}
        />
        <p >Desenvolvendo soluções.</p>
      </div>
      <div className="flex flex-col text-lg">
        <span className="flex gap-2 items-center">
          <Arrow />
          Páginas Pessoais e Portfólios.
        </span>
        <span className="flex gap-2 items-center">
          <Arrow />
          Sites Empresariais e E-commerces.
        </span>
        <span className="flex gap-2 items-center">
          <Arrow />
          Aplicações em Tempo Real.
        </span>
        <span className="flex gap-2 items-center">
          <Arrow />
          APIs e Microsserviços.
        </span>
        <span className="flex gap-2 items-center">
          <Arrow />
          Apps Android e iOS [Em Breve].
        </span>
      </div>
    </div>
  );
}
