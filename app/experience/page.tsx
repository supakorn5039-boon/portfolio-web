import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-accent">Experience</span>
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <Briefcase className="text-accent" /> Work Experience
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-accent">Software Developer, Frontend</h4>
              <p className="text-muted-foreground">FireExit Cooporation • Oct 2024 – Present</p>
              <p className="mt-2">
                Developed and maintained responsive front-end interfaces for e-commerce, booking, and IoT-based
                platforms using React and Next.js. Optimized UI/UX for mobile and desktop devices, collaborated across
                teams, and delivered high-performing solutions in an Agile environment.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-accent">Software Engineer, Backend</h4>
              <p className="text-muted-foreground">Trinity Roots CO., LTD • Sep 2024 – Oct 2024</p>
              <p className="mt-2">
                Developed ERP web applications using Python and the Odoo framework. Customized modules for sales,
                inventory, invoicing, and HR. Integrated REST APIs and delivered scalable backend solutions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-accent">Software Engineer, Frontend</h4>
              <p className="text-muted-foreground">Ocare Health Hub Co. Ltd • Jan 2024 – Sep 2024</p>
              <p className="mt-2">
                Built web applications improving healthcare workflows. Integrated secure RESTful APIs, enhanced
                responsiveness, and collaborated with stakeholders to meet business needs using React and Next.js.
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <GraduationCap className="text-accent" /> Education
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-accent">
                Bachelor of Engineering in Information Systems and Network Engineering
              </h4>
              <p className="text-muted-foreground">Chiang Mai University • 2019 - 2023</p>
              <p className="mt-2">
                Studied network architecture, software development, system integration, and participated in technical
                projects and research activities under the international program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
