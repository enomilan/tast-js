const Api = (() => {

    const addList = (newList) =>
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(newList),
        headers: {
            "Content-Type": "application/json",
        },
      
      
    }).then((res) => res.json());