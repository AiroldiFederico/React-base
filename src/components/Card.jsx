







function Card() {

    const title = "Desert";
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores quod modi nulla numquam doloremque libero nam sapiente suscipit sit.";
    const imgURL = "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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