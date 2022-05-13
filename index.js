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

const View = (() => {

    const dom = {
        inputForm: '#inputForm',
        inputField: '#inputField',
        pending: '#pending_container',
        completed: '#completed_container',
        deleteTask: '.deleteTask'
    }

    const pend = {
        
    }

    const comp = {
    }

    const render = (el, tmp) => {
        el.innerHTML = tmp
    }

    const createPend = (arr) => {
        let tmp = ''
        
        arr.forEach(pending => {

            if (pending.isCompleted === false) {
            tmp += `
            <ul>
                
                <li>${pending.content}</li>
                <button>Edit</button>
                <button class='deleteTask' id=${pending.id}>Delete</button>
                <button>Move to Complete</button>

            </ul>
            `}

        })

        return tmp;
    }

    const createComp = (arr) => {
        let tmp = ''

        arr.forEach(completed => {

            if (completed.isCompleted === true) {
            
                tmp += `
                <ul>
                    
                    <li>${completed.content}</li>
                    <button>Move to Pending</button>
                    <button>Edit</button>
                    <button class="deleteTask" id=${completed.id}>Delete</button>
    
                </ul>
                `}
    
            })

            return tmp;
        }
    
        return { render, createPend, createComp, dom }
    
    })()



const Model = ((api, view) => {


    const { getList, deleteList, addList } = api

    class List {
        constructor( title, completed) {
            this.title = title
            this.completed = false
        }

    }

    return { getList, deleteList, List, addList}

})(Api)