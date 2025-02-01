import FeatureCard from '../components/ui/FeatureCard';

const KeyFeaturesSection = () => {
  return (
    <section className="py-32 px-4 bg-black max-w-7xl m-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 justify-between mb-16 ">
          <h2 className="text-5xl font-semibold text-primary ">
            Key Features of <br /> SuppliFlex
          </h2>
          <p className="text-base border-l-4 border-pink self-center py-4 px-5 text-softWhite">
            Suppliflex provides SMBs with innovative supply chain management tools to reduce costs
            and drive efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={'/img/icons/DeliveryIcon.svg'}
            title="Shipment Tracking"
            description="Real-time tracking on shipments from order to delivery, with status notifications and ETA."
            isHighlighted
          />
          <FeatureCard
            icon={'/img/icons/BarChartIcon.svg'}
            title="Inventory Management"
            description="Cloud-based inventory tracking across multiple warehouses to optimize stock levels and prevent shortages."
          />
          <FeatureCard
            icon={'/img/icons/MonitorIcon.svg'}
            title="Automated Billing"
            description="Generate and send invoices, record payments automatically based on shipment deliveries for faster order-to-cash."
          />
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
