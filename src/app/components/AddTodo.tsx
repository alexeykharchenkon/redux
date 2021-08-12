import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface AddTodoProps {
    addTodo: any;
    loadTodos: any;
    todosCount: number;
    deleteAllTodos: any;
}

export const AddTodo = ({addTodo, loadTodos, todosCount, deleteAllTodos} : AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const addTodoClick = () => {
    addTodo({id: uuidv4(), text});
    setText("");
  }

  return (
    <div className="addTodoMain">
       <Typography variant="h5">
          Todo Actions
        </Typography>
      <div className="form">
        <TextField 
            value={text}
            name="text" 
            label="Enter Todo" 
            onChange={e => setText(e.target.value)}
        />
        <Button 
            onClick={addTodoClick}
            variant="contained" color="primary"
            style={{marginLeft: '10px'}}
        >
            Add
        </Button>
      </div>
      <div>
          <Button 
              onClick={() => loadTodos(todosCount, 5)}
              variant="contained" color="primary"
          >
              Load More
          </Button>
          <Button 
              onClick={() => deleteAllTodos()}
              variant="contained" color="secondary"
              style={{marginLeft: '10px'}}
          >
              Clear
          </Button>
        </div>
    </div>
  );
}