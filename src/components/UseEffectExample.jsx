import { useState, useEffect } from "react";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `conteggio:  ${count}`;
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
    )
}

export default Example;