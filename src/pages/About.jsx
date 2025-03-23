import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin } from '@mdi/js';
import selfie from "../assets/fun-imgs/pemi-selfie.png";

const About = () => {
  return (
    <main className="flex-auto overflow-y-auto">
      <div className="sm:px-8 my-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <img
                      alt="Profile"
                      loading="lazy"
                      width="800"
                      height="800"
                      className="aspect-square -rotate-4 rounded-2xl bg-base-200 object-cover dark:bg-base-300"
                      src={selfie}
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
                    I’m Axel Olsson. <br></br> Based in both Boulder and Vermont, building software tools to create business solutions.
                  </h1>
                  <div className="mt-6 space-y-7 text-base text-base-content/70">
                    <p>
                      I've been obsessed with tinkering with electronics my whole life.  As a child, I built robots and rockets chock full of arduinos to collect, analyze, and present data trends.
                    </p>
                    <p>
                      I grew up spending half my time living in an off grid cabin without electricity, cell service, or running water.  I have a deep love for the outdoors and spend most of my time outside of tinkering breathing in all that is wild.  I am an avid hiker, fly fisherman, backpacker, skier, and all around outdoorsman.  I am particularly interested in how technology can protect our natural resources.
                    </p>
                    <p>
                      Through High School, I was a leader at our Robotics team.  At the University of Vermont, I studied Philosophy, to explore pure logic as an analogue to the abstractions found in software langauges.  As a professional, I have taught myself various languages to differing levels of proficiency.  I am proficient in <strong> Python, Ruby / Rails, Javascript, and React</strong>.  I have work experiences with <strong>C++</strong> and <strong>C#</strong>.
                    </p>
                    <p>
                      Today, I work remotely at Precision Valley Communications, a telecommunications company based in Springfield, VT.  I build fullstack web applications, internal B2B scripts, train ML models on telecom data, and create tools to generate company deliverables.  I have self-employed experience building autonomous data collection devices for water quality for a private land preserve in the Berkshires.  This includes both the hardware devices requisite for remote data collection and a frontend interface for viewing data trends.
                    </p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li className="mt-4 flex">
                      <Icon path={mdiGithub} size={1}></Icon>
                      <a
                        className="group flex text-sm font-medium text-base-content transition hover:text-primary"
                        href="https://github.com/trustpizza"
                        target="_blank"
                      >
                        <span className="ml-4">Follow on GitHub</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <Icon path={mdiLinkedin} size={1}></Icon>
                      <a
                        className="group flex text-sm font-medium text-base-content transition hover:text-primary"
                        href="https://www.linkedin.com/in/axel-olsson-882a78227/"
                        target="_blank"
                      >
                        <span className="ml-4">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-base-200 pt-8 dark:border-base-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-base-content transition hover:text-primary"
                        href="mailto:maxelolsson@gmail.com"
                      >
                        <span className="ml-4">maxelolsson@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;