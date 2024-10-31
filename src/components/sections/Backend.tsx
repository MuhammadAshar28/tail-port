import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";



export default function Backend() {
  return (
    <Wrapper>
      <section className="flex-1 my-5 px-4 sm:px-6 md:px-10">
        <div className="bg-black text-white py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 animate-pulse">Backend skills</h2>
            <p className="text-center mb-12 text-lg">
              Being a professional in TypeScript as, learning in progress
            </p>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Box 1 */}
              <div className="bg-gradient-to-b from-purple-800 to-indigo-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Simple Calculator</h3>
                <Link href="https://github.com/MuhammadAshar28/as_har-simple-calculator" target="_blank">
                  <button className="bg-gray-900 text-white py-2 mt-4 px-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    More About Calculator
                  </button>
                </Link>
              </div>

              {/* Box 2 */}
              <div className="bg-gradient-to-b from-teal-600 to-blue-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Number Guessing Game</h3>
                <Link href="https://github.com/MuhammadAshar28/num_ber-guessing-game" target="_blank">
                  <button className="bg-gray-900 text-white py-2 mt-4 px-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    More About Game
                  </button>
                </Link>
              </div>

              {/* Box 3 */}
              <div className="bg-gradient-to-b from-pink-600 to-purple-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Standalone ATM</h3>
                <Link href="https://github.com/MuhammadAshar28/stand_alone_atm" target="_blank">
                  <button className="bg-gray-900 text-white py-2 mt-4 px-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                    More About ATM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
          </section>
            <div
      className= "my-16 border-t border-gray-700  py-0">
      </div>

    </Wrapper>
  );
}
