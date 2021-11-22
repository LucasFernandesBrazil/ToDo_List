import React from 'react';

function AddTask(props) {

    return (
        <form>
            <input type="text" onChange={(e) => console.log(e.target.value)}/>
            <button>Adicionar tarefa</button>
        </form>
    )
}

export default AddTask;
