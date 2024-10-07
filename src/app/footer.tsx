import Container from "./container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-white py-6 text-black"> {/* Changed bg-slate-950 to bg-white and text-slate-50 to text-black */}
      <Container classNames="flex justify-center items-center"> {/* Corrected 'items-centre' to 'items-center' */}
        <p className="text-xl">
          Copyright &copy; {new Date().getFullYear()} Product Catalog Frontend | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
