export default function SkillsPage() {
  return (
    <section className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-white">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Languages & Frameworks</h3>
            <ul className="list-disc list-inside space-y-2 text-white text-lg">
              <li>JavaScript / TypeScript</li>
              <li>React.js, Next.js, Zustand, Redux</li>
              <li>TailwindCSS, MUI, Zod, Yup</li>
              <li>Python, Go, Java (Basic)</li>
              <li>Node.js, Express.js, Gin, Fiber, Spring Boot</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Tools & Tech</h3>
            <ul className="list-disc list-inside space-y-2 text-white text-lg">
              <li>REST APIs, Microservices, MVC, OOP</li>
              <li>PostgreSQL, Prisma, MongoDB, Firebase</li>
              <li>GitHub Actions, Docker, Railway, Vercel</li>
              <li>Linux, Figma, Agile Methodology</li>
              <li>Machine Learning (scikit-learn, pandas, OpenCV)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Soft Skills</h3>
            <ul className="list-disc list-inside space-y-2 text-white text-lg">
              <li>Teamwork & Communication</li>
              <li>Problem Solving & Critical Thinking</li>
              <li>Time Management</li>
              <li>Self-learning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-accent">Languages</h3>
            <ul className="list-disc list-inside space-y-2 text-white text-lg">
              <li>Thai – Native</li>
              <li>English – Upper-Intermediate (B2)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
