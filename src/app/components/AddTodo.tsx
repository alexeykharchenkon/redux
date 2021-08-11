import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface AddTodoProps {
    addTodo: any;
}

export const AddTodo = ({addTodo} : AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const addTodoClick = () => {
    addTodo({id: uuidv4(), text});
    setText("");
  }

  return (
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
            Add Todo
        </Button>
      </div>
  );
}