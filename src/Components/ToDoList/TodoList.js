import { Grid, Button, Typography, Box } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TodoItem from './TodoItem';
import CreateToDoFrom from './CreateToDoFrom'
import {  setToDoList } from '../../redux/reducers/coreSlice';

const TodoList = () => {
    const [createNewTask, setCreateNewTask] = useState(false);
    const { ToDo, ToDoList } = useSelector(state => state.core);

console.log("from redux", ToDoList);

    const dispatch = useDispatch();

    const onItemChecked = (event, item) => {
        // TODO
    }

    const onSubmitNewTask = (newTodo) => {
        dispatch(setToDoList(newTodo));
    }



    return (
        <Grid container style={{ padding: 25 }}>
            <Grid xs={4} style={{ paddingTop: 25, textAlign: 'left' }}>
                <Box>
                    <Typography>Hello Chandrika :)</Typography>
                    <Typography>Here is your to do list</Typography>
                    {!createNewTask ?
                        <Button
                            onClick={() => setCreateNewTask(true)}
                            variant="contained"
                            style={{ backgroundColor: "#1976d2", color: 'white', marginTop: 10, marginBottom: 10 }}
                        >Create new task</Button> : null
                    }
                    {createNewTask ? <CreateToDoFrom props={{ ...ToDo }} onSubmit={onSubmitNewTask} /> : null}
                    {createNewTask ? <Button onClick={() => setCreateNewTask(false)}
                        variant="text"
                        style={{ marginTop: 10, marginBottom: 10 }}>Cancel</Button> : null}
                </Box>
            </Grid>
            <Grid xs={8} style={{ margin: '0 auto', paddingTop: 25 }}>
                <Typography style={{ textAlign: 'left', marginTop: 15, marginBottom: 5 }}>To Do List</Typography>
                {
                    ToDoList.filter((td) => { return (td.IsDeleted === false || td.IsDeleted === "false") && td.IsCompleted === false })
                        .sort((a, b) => { return b.CreatedDate - a.CreatedDate })
                        .map((item, idx) => {
                        return <TodoItem props={item} onItemChecked={(e) => onItemChecked(e, item)} />
                    })
                }
                <Typography style={{ textAlign: 'left', marginTop: 15, marginBottom: 5 }}>Archive List</Typography>
                {
                    ToDoList.filter((td) => { return td.IsCompleted === true })
                        .sort((a, b) => { return b.CreatedDate - a.CreatedDate })
                        .map((item, idx) => {
                        return <TodoItem props={item} onItemChecked={(e) => onItemChecked(e, item)} />
                    })
                }
            </Grid>
        </Grid>
    )
}

export default TodoList;