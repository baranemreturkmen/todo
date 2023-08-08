import styles from '../style/style.module.css'
import shorid from 'shortid'

const Form = ({todo, setTodo, todoList, setTodoList}) => {
    const handleChange = (event) => {
        setTodo(event.target.value);
        //console.log(todo);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id:shorid.generate()}])
        console.log(todoList)
        setTodo("")
    }
    return(
        <div className={styles.todoform}>
            <form onSubmit={handleSubmit}>
                <input placeholder='Add Todo Item' 
                    className={styles.todoinput}
                    value={todo}
                    onChange={handleChange}></input>
                <button type='submit' className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}
export default Form;