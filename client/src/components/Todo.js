import {useEffect, useState} from "react";
import {getTodos, createTodo, deleteTodo} from '../functions/index.js';

function Todo() {
    
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [todos, setTodos] = useState();

    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleOnChangeContent = (e) => {
        setContent(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTodos();
            console.log(result);
            setTodos(result);
        }
        fetchData();

    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTodos();
            console.log(result);
            setTodos(result);
        }
        fetchData();

    }, [todos]);

    const removeTodo = async (id) => {
        await deleteTodo(id);
    };

    const onSubmitHandler = async(e) => {
        await createTodo({title, content});
    };


    return (
        <div>
            <div className="row">
                <form className="col s12" onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input 
                                onChange={handleOnChangeTitle} 
                                id="icon_prefix" 
                                type="text" 
                                className="validate"
                            />
                            <label htmlFor="icon_prefix">Título</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">content</i>
                            <input 
                                id="icon_telephone" 
                                type="tel" 
                                className="validate"
                                onChange={handleOnChangeContent} 
                            />
                            <label htmlFor="icon_telephone">content</label>
                        </div>

                        <div className="row right-align">
                            <button className="waves-effect waves-light btn">
                                Publicar <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="container">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Tareas por hacer</h4></li>

                    {todos && 
                        todos.map((todo) => (
                        <li 
                            className="collection-item" 
                            key={todo._id} 
                        >
                            <div>
                                {todo?.title}
                                <a 
                                    href="#!"
                                    className="secondary-content"
                                    onClick={() => removeTodo(todo._id)} 
                                >
                                    <i className="material-icons">delete</i>
                                </a>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    );
}

export default Todo;
