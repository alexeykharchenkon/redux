import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import * as todosActions from '@store/actionCreators/todosActions';
import { Todo } from '@common/types/types';
import { AddTodo } from '@components/AddTodo';
import { TodoList } from '@components/TodoList';
import { useStyles } from '@styles/material';
import Typography from '@material-ui/core/Typography';
import '@styles/main.css';
import { useEffect } from 'react';

const mapStateToProps = (state: any) => ({
    todos: state.todosState.todos
})
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(todosActions, dispatch)
})

interface AppProps {
    todos: Todo[];
    actions: any;
}

const App = ({todos, actions} : AppProps) => {
  const classes = useStyles();
  const { addTodo, toggleTodo, deleteTodo, loadTodos, deleteAllTodos } = actions;

  useEffect(() => { loadTodos(todos.length, 5) }, [loadTodos]);

  return (
    <div className="main">
      <Card className={classes.todoList}>
        <Typography variant="h4">
          Todo List
        </Typography>
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
        />
      </Card>
      <Card className={classes.addTodo}>
          <AddTodo 
            addTodo={addTodo} 
            loadTodos={loadTodos}
            deleteAllTodos={deleteAllTodos}
            todosCount={todos.length}
          />
      </Card>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)