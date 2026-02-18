const Navbar = () => {
  // We removed the scroll logic. The navbar is now always transparent/glass.
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center bg-transparent">
      {/* HIDDEN LOGO: We hide this text initially because the 
         LoadingScreen's text lands exactly here. It creates an illusion.
      */}
      <a
        href="#"
        className="text-xl font-bold tracking-tighter opacity-0 animate-fade-in"
      >
        Suryanshu <span className="text-accent">Saini</span>
      </a>

      <ul className="hidden md:flex gap-8 text-sm font-medium text-txtSub bg-black/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
        {["About", "Work", "Laboratory", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-accent transition-colors relative"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
