export default function Social() {
  return (
    <div className="flex flex-col h-fit w-fit justify-center items-end">
      <p className="text-sm max-sm:text-xs text-gray-500">Get in Touch!</p>
      <a
        href="https://github.com/luan-cardoso"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-extrabold hover:text-purple-400 duration-300"
      >
        GITHUB
      </a>
      <a
        href="https://wa.me/5585988811690"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-extrabold hover:text-green-400 duration-300"
      >
        WHATSAPP
      </a>
      <a
        href="https://www.linkedin.com/in/luanc-santos/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl font-extrabold hover:text-blue-400 duration-300"
      >
        LINKEDIN
      </a>
    </div>
  );
}
