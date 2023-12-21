







function Card(props) {

     const title = props.title;
     const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores quod modi nulla numquam doloremque libero nam sapiente suscipit sit.";
     const imgURL = props.imgURL;

    return (

        <div className="rounded-md bg-zinc-950">

            <img className="rounded-md" src={imgURL} alt="" />

            <div className="flex flex-col p-4">

                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500 ">{description}</p>

            </div>

        </div>
    );
};

export default Card;