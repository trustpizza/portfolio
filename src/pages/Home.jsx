import Carousel from "../components/Homepage/HomepageCarousel";
import WorkSection from '../components/Homepage/WorkExperiences';
import epicLogo from "../assets/work/epic-logo.svg";
import pvcLogo from "../assets/work/PVC-logo.png";
// Dir for images
import shuffledImages from "../components/Homepage/images";

const Home = () => {
  const workExperiences = [
    {
      iconPath: pvcLogo,
      companyName: 'Precision Valley Communications',
      positionTitle: 'Full Stack Software Engineer',
      startDate: '2023',
      endDate: 'Present',
    },
    {
      iconPath: epicLogo,
      companyName: 'Epic',
      positionTitle: 'Quality Engineer Manager',
      startDate: '2022',
      endDate: '2023',
    },
  ]
  return (
    <>
      <main className="flex-auto overflow-y-scroll">
        {/* About Me Section */}
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                    Part Time Hiker Trash
                    <br />
                    Full Time Software Engineer
                  </h1>
                  <p className="mt-6 text-base text-base-content/80">
                    I’m Axel, a fullstack software engineer based in Boulder, CO and Rochester, VT. I’m a Software Engineer at Precision Valley Communications, where we develop software to help Telecommunications companies with mapping, drafting and design work.  I own and maintain a suite of software built in Python, Ruby/Rails, React with Postgres and NoSQL databases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel Section */}
        <div className='flex items-center justify-center'>
          <Carousel images={shuffledImages}> </Carousel>
        </div>
        {/* Experiences Section */}
        <WorkSection workExperiences={workExperiences}> </WorkSection>
      </main>
    </>
  );
};

export default Home;