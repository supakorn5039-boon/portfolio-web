import Photo from '@/components/Photo/Photo';
import Social from '@/components/Social/Social';
import Stats from '@/components/Stats/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
  return (
    <section className="h-fit">
      <div className="max-w-6xl mx-auto h-full mt-16">
        <Stats />
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-muted-foreground">Software Engineer</span>

            <h1 className="h2 my-4">
              Hi, I&apos;m <br />
              <span className="text-accent">Supakorn Udomsintuwat</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90 leading-relaxed">
              I’m a passionate Software Engineer who specializes in building modern, efficient, and user-friendly web
              applications. With strong expertise in both front-end and back-end technologies, I transform complex
              problems into elegant digital solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button asChild variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <a href="/assets/CV.pdf" download="Supakorn_Udomsintuwat_CV.pdf">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent 
                    hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
