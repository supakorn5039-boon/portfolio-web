'use client';
import { useCountUp } from '@/hooks/useCountUp';

export default function Stats() {
  const experience = useCountUp(2);
  const projects = useCountUp(10);
  const clients = useCountUp(5);
  const satisfaction = useCountUp(100);

  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <h3 className="text-3xl font-bold text-accent">{experience}+</h3>
        <p className="text-sm text-muted-foreground">Years Experience</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-accent">{projects}+</h3>
        <p className="text-sm text-muted-foreground">Projects Completed</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-accent">{clients}+</h3>
        <p className="text-sm text-muted-foreground">Clients</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-accent">{satisfaction}%</h3>
        <p className="text-sm text-muted-foreground">Satisfaction</p>
      </div>
    </div>
  );
}
