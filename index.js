const Api = (() => {

    const addList = (newList) =>
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(newList),
        headers: {
            "Content-Type": "application/json",
        },
      
      
    }).then((res) => res.json());

    const getList = () => 
    fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        // .then((json) => console.log(json))

    const deleteList = (id) =>
        fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
    })

    return {
        getList, deleteList, addList,
    }

})()

Api.getList()