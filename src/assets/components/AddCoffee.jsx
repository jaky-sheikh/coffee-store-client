import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, category, details, photo }
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })

    }

    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-3xl font-extrabold">Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex gap-4">
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="text" name="name" className="input w-full" placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Available quantity</legend>
                        <input type="text" name="quantity" className="input w-full" placeholder="Available quantity" />
                    </fieldset>
                </div>
                <div className="md:flex gap-4">
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Category</legend>
                        <input type="text" name="category" className="input w-full" placeholder="Category" />
                    </fieldset>
                    <fieldset className="fieldset md:w-1/2">
                        <legend className="fieldset-legend">Details</legend>
                        <input type="text" name="details" className="input w-full" placeholder="Details" />
                    </fieldset>
                </div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Photo-url</legend>
                    <input type="text" name="photo" className="input w-full" placeholder="Photo-url" />
                </fieldset>

                <input type="submit" value="Add Coffee" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default AddCoffee;