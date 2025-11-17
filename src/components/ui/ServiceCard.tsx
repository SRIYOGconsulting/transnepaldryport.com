type ServiceCardProps = {
  title: string;
  description: string;
  logo?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, logo }) => {
  return (
    <div className="flex flex-col items-start rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      {logo && (
        <img
          src={logo}
          alt={title}
          className="h-12 w-12 object-contain mb-4"
          loading="lazy"
        />
      )}
      <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
