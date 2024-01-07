const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center pt-6">
            <p className="text-gray-500 font-semibold uppercase">{subtitle}</p>
            <h2 className=" text-primary text-4xl italic font-bold">{title}</h2>
        </div>
    );
};

export default SectionTitle