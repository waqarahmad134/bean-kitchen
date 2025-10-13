import consultImage from '@assets/generated_images/Kitchen_design_consultation_scene_f5902b63.png';

const steps = [
  {
    number: '01',
    title: 'Design consultation',
    description: 'Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.',
    image: consultImage,
  },
  {
    number: '02',
    title: 'Pick your style',
    description: 'Nullam vitae ex finibus, consectetur enim eget, blandit elit & amet dolor.',
    image: consultImage,
  },
  {
    number: '03',
    title: 'Kitchen installation',
    description: 'Nunc a egestas lacus. Lorem ipsum dolor sit amet larmus & gravida.',
    image: consultImage,
  },
  {
    number: '04',
    title: 'Kitchen clean-up',
    description: 'Nullam vitae ex finibus, consectetur enim eget, blandit elit & amet dolor.',
    image: consultImage,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-process-title">
            Our working process
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
            A business process or business method is a collection of related, structured activities or tasks by people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group text-center" data-testid={`step-${index}`}>
              <div className="relative mb-6 overflow-hidden rounded-md">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-step-${index}`}
                />
                <div className="absolute top-4 left-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-heading font-bold text-white" data-testid={`text-number-${index}`}>
                      {step.number}
                    </span>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-heading font-semibold mb-3" data-testid={`text-step-title-${index}`}>
                {step.number} / {step.title}
              </h4>
              <p className="text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
