

function CardForm({propAddPlace}) {

    const handleClick = () => {
        const place =     {
            id: 4,
            title: "Ocean",
            description: "A large and densely populated urban area with a variety of structures and activities.",
            imgURL: "https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            isVisited: true
        };

        propAddPlace(place);
    }

    return(
        <div className="flex flex-col gap-3 w-80 mb-10">
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <button onClick={handleClick}>Aggiungi Card</button>
        </div>
    );
};

export default CardForm;