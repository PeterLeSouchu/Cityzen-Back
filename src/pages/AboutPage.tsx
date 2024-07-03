import image from '../assets/cityview.jpg';
import imagewill from '../assets/will.webp';
import imageryad from '../assets/ryad.webp';
import imageemmanuel from '../assets/emmanuel.webp';
import imageziad from '../assets/ziad.webp';
import imagepeter from '../assets/peter.webp';
import imageabout from '../assets/about.jpeg';

function AboutPage() {
  return (
    <div className="bg-green py-10">
      <div className="container mx-auto px-4">
        <div className="bg-lightgrey p-6  shadow-lg  w-1024 h-332 flex flex-col md:flex-row">
          <div className="md:w-2/5 md:pr-4 ml-20">
            <h2 className="text-2xl font-montserrat mt-10 mb-4 text-black">
              À propos de nous
            </h2>
            <p className="font-montserrat text-black mb-4">
              Nous sommes une équipe de cinq développeurs diplômés de l'école
              O'clock, spécialisée en développement web. Passionnés et
              déterminés, nous avons créé CityZen pour simplifier la découverte
              des activités locales.
            </p>
            <p className="font-montserrat text-black">
              Ensemble, nous mettons nos compétences au service d'une plateforme
              intuitive et enrichissante pour les résidents et les visiteurs de
              chaque ville.
            </p>
          </div>
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4 justify-center items-center">
            <img
              src={imageabout}
              alt="cityview"
              className="rounded-lg shadow-lg w-3/4 ml-20 mt-8 mb-8"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row bg-white p-6  shadow-lg ">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4">
            <img
              src={image}
              alt="cityview"
              className="rounded-lg shadow-lg w-3/4 ml-20 mt-8 mb-8"
            />
          </div>
          <div className="md:w-2/5 md:pl-4 mt-12 mr-20">
            <h2 className="text-2xl font-montserrat mb-4  text-black">
              Qu'est-ce que CityZen?
            </h2>
            <p className="mb-4 font-montserrat  text-black">
              CityZen est une plateforme web et mobile qui centralise toutes les
              activités disponibles dans une ville, comme les restaurants, les
              parcs, et les salles de sport.
            </p>
            <p className="font-montserrat  text-black">
              En entrant le nom de votre ville, vous découvrez une liste
              d'activités avec des horaires, avis, photos et coordonnées,
              visibles aussi sur une carte interactive.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 ">
        <div className="bg-lightgrey p-6 shadow-lg">
          <h2 className="text-2xl font-montserrat mb-10 mt-10 text-center  text-black">
            Notre équipe
          </h2>
          <div className="flex justify-around mb-20">
            <div className="text-center font-montserrat text-black">
              <img
                src={imageryad}
                alt="Ryad"
                className="rounded-full w-24 h-24 mb-2 mx-auto"
              />
              <p>Ryad</p>
              <p>Scrum Master</p>
            </div>
            <div className="text-center font-montserrat text-black">
              <img
                src={imageemmanuel}
                alt="Emmanuel"
                className="rounded-full w-24 h-24 mb-2 mx-auto"
              />
              <p>Emmanuel</p>
              <p>Product Owner</p>
            </div>
            <div className="text-center font-montserrat text-black">
              <img
                src={imagepeter}
                alt="Peter"
                className="rounded-full w-24 h-24 mb-2 mx-auto"
              />
              <p>Peter</p>
              <p>Lead Dev Front</p>
            </div>
            <div className="text-center font-montserrat text-black">
              <img
                src={imagewill}
                alt="Wilson"
                className="rounded-full w-24 h-24 mb-2 mx-auto"
              />
              <p>Wilson</p>
              <p>Référent Technique</p>
            </div>
            <div className="text-center font-montserrat  text-black">
              <img
                src={imageziad}
                alt="Ziad"
                className="rounded-full w-24 h-24 mb-2 mx-auto"
              />
              <p>Ziad</p>
              <p>Git Master</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
