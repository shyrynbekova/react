import { useGetTodosByIdQuery, useGetTodosQuery } from "../api/todos";


function TodosPage() {
    const { data, isLoading, error, isError} = useGetTodosQuery
    const {data: todos, isLoading: areTodosLoading } = useGetTodosByIdQuery
      
    if(isLoading && areTodosLoading) {
        return (
            <p>идеть загрузка...</p>
        )
    }
    if(isError) {
        return(
            <p>Произошла ошибка: {error}</p>
        )
    }



    return ( 
        <div>
            {
                data.map(todo => {
                    return (
                        <p key={todo.id}>{todo.title}</p>
                    )
                })
            }
            {

                <div>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>

                }


        </div>

     );
        }

export default TodosPage;