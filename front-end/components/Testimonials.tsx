import TestimonialCard from '../components/ui/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section className="py-28 px-4 bg-[url('/img/pictures/ContainerShip.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto max-w-7xl m-auto ">
        <div className="w-3/5 mb-24">
          <h2 className="text-5xl font-black text-primary mb-5 ">
            What users are saying about the Suppliflex Software
          </h2>
          <hr className="border-t-2 border-gray-300 my-4 w-1/5 " />
          <p className="text-base text-softWhite mt-2">
            Hear first-hand from businesses on how <span className="font-bold">Suppliflex</span>{' '}
            streamlined supply chain operations with major cost and time savings while providing
            complete visibility
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          <TestimonialCard
            quote={
              <>
                “We have reduced supply chain costs by 30% since implementing{' '}
                <span className="font-bold">Suppliflex</span> while gaining better control and
                efficiency.”
              </>
            }
            author="Sam Wright"
            role="Supply Chain Manager"
            image={'/img/pictures/SamWright.jpg'}
          />
          <TestimonialCard
            quote={
              <>
                “<span className="font-bold">Suppliflex</span> optimized our small business
                workflows and provided data insights that were previously unavailable, saving us
                crucial time.”
              </>
            }
            author="Jay Patel"
            role="Business Owner"
            image={'/img/pictures/JayPatel.png'}
          />
          <TestimonialCard
            quote={
              <>
                “By modernizing supply chain processes with{' '}
                <span className="font-bold">Suppliflex</span>, we improved order accuracy by 40% and
                have higher rating when meeting customer expectations.”
              </>
            }
            author="Alex Morgan"
            role="Operations Director"
            image={'/img/pictures/AlexMorgan.jpg'}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
