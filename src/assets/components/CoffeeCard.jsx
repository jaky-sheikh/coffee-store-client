

const CoffeeCard = ({ coffee }) => {

    const { name, quantity, category, details, photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={photo} className="w-[300px] h-[300px]"
                    alt="Coffee" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;