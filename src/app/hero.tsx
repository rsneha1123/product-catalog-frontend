import Image from 'next/image';
import Container from "./container";

const HomeHero = () => {
  const stickers = [
    {
      title: 'The Unicorn',
      description: 'They exist!',
      price: 'Rs.11',
      image: '/images/logo/puppy.png', // Replace with your actual image path
    },
    {
      title: 'The Fashionista',
      description: "You know he's got his own personal stylist.",
      price: 'Rs.9',
      image: '/images/logo/puppy2.png', // Replace with your actual image path
    },
    {
      title: 'The Drooler',
      description: 'Look at that crazy and cute face!',
      price: 'Rs.12',
      image: '/images/logo/puppy3.png', 
    },
  ];

  return (
    <section className="text-center py-16">
      <Container>
        <h1 className="text-5xl font-bold text-purple-700 mb-4">Get Doggy Stickers!</h1>
        <p className="text-gray-600 text-xl mb-8">
          Times are tough. Liven up your home with some cute Doggy Stickers. 🐶
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stickers.map((sticker, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={sticker.image}
                  alt={sticker.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mt-4">{sticker.title}</h3>
              <p className="text-gray-500 mt-2">{sticker.description}</p>
              <div className="mt-4">
                <span className="bg-purple-100 text-purple-700 py-2 px-4 rounded-md text-lg">
                  {sticker.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
