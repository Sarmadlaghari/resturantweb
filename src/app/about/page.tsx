import Image from 'next/image'
import Link from 'next/link'
export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-8 font-display">About Epicurean Delight</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <Image
            src="/restaurant-interior.jpg"
            alt="Epicurean Delight Interior"
            width={1000}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-6 text-lg">
          <p>
            Welcome to Epicurean Delight, where culinary artistry meets warm hospitality. 
            Established in 2010, our restaurant has been at the forefront of innovative 
            dining experiences in the heart of the city.
          </p>
          <p>
            At Epicurean Delight, we believe in the power of food to bring people together 
            and create lasting memories. Our team of passionate chefs, led by renowned 
            culinary expert Chef Noah Edwards, crafts each dish with precision, 
            creativity, and the finest locally-sourced ingredients.
          </p>
          <p>
            Our menu is a celebration of global flavors, seamlessly blending traditional 
            techniques with modern culinary innovations. From our signature appetizers 
            to our decadent desserts, every item on our menu tells a story and offers 
            a unique sensory experience.
          </p>
          <p>
            We are committed to sustainability and supporting our local community. 
            Our ingredients are sourced from local farmers and producers whenever possible, 
            ensuring the freshest flavors while reducing our environmental impact.
          </p>
          <p>
            Whether you&#39;re joining us for an intimate dinner, a family celebration, 
            or a corporate event, we strive to make every visit to Epicurean Delight 
            an unforgettable experience. We invite you to embark on a culinary journey 
            with us and discover the art of fine dining.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6 font-display">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Liam Parker', role: 'Executive Chef', image: '/omar-khalid.jpg' },
              { name: 'Ava Carter', role: 'Sous Chef', image: '/sofia-marquez.jpg' },
              { name: 'Ethan Moore', role: 'Pastry Chef', image: '/victor-romano.jpg' },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
