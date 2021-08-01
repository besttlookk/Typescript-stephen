import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// "{interface in TS is used to define the structure of an object"
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios(url)
  .then((response) => {
    // console.log(response.data)
    // it would va e been nice something would tell what properties are there ib the incommig data..like
    /*
    Response.data has properites:
    id
    title
    completed
    */
    // const todo = response.data  //witout TS
    const todo = response.data as Todo

    // after adding TS ..it shoes error
    // const ID = todo.ID
    // const title = todo.Title
    // const finished = todo.finished

    //
    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    // eventhough response.data has no property called "ID" or "Title" it still ran the code without sorry error...that is why Typescript is made
    // console.log(`
    //   The Todo with ID: ${ID}
    //   HAs a title of : ${title}
    //   Is it fininsed? ${finished}
    // `)

    // after TS
    // console.log(`
    //   The Todo with ID: ${id}
    //   HAs a title of : ${title}
    //   Is it fininsed? ${completed}
    // `)

    // after adding helper funtion
    // we mixed up the order of the argument: still no error before execution
    logTodo(id, title, completed)
  })

  .catch((error) => console.log(error))

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    HAs a title of : ${title}
    Is it fininsed? ${completed}
  `)
}
