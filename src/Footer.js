const Footer = () => {
    return (
      <div className="py-2 text-center">
        <footer
          className="text-white sticky top-[100vh] pt-11 pb-5 mt-14"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <p>
            The Universe is by your {" "}
            <a
              className="font-bold text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
             Side
            </a>
          </p>
        </footer>
      </div>
    );
  };
  
  export default Footer;