import Container from "./container";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white py-6 text-black"> {/* Changed bg-primary to bg-white */}
      <Container classNames="flex justify-between items-center">
        {/* Left side: Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold">
            <Image
              src="/images/logo/doggysticker.png" // Path to your image
              alt="Product"
              width={300}
              height={300}
            />
          </Link>
        </div>

        {/* Right side: Cart */}
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold">
            <Image
              src="/images/logo/cart.png" // Path to your image
              alt="Cart"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
