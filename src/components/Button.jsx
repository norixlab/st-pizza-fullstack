import ArrowRight from '../components/icons/ArrowRight';

const Button = ({ title }) => {
    return (
        <button className="flex items-center gap-4 text-white capitalize bg-primary pl-6 pr-2 py-2 rounded-full hover:translate-x-1 transition-all duration-300">
            {title}
            <ArrowRight />
        </button>
    );
};

export default Button;
