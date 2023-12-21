







function Card({title, imgURL, isVisited, children}) {


    return (

        <div className="rounded-md bg-zinc-950">

            <img className="rounded-md aspect-video" src={imgURL} alt="" />

            <div className="flex flex-col p-4">

                <h2 className="text-2xl text-white font-bold">{title}</h2>
                <p className="text-gray-500 ">{children}</p>

                { isVisited ? <span>✔ Visitato</span> : <span>❌ Non Visitato</span> }
                

            </div>

        </div>
    );
};

export default Card;