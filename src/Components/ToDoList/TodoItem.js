import { Box, Checkbox, Typography } from "@material-ui/core";
import '../../App.css'
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../redux/reducers/coreSlice";



const TodoItem = ({ props, onItemChecked }) => {
    
    const dispatch = useDispatch();
const handleCompleteCheck = (event) => {
    
    dispatch(toggleTodo({
        ID: props.ID,
        IsCompleted: event.target.checked
    }));
}
    return (
        <Box className="todo-item-list">
            <Checkbox onChange={handleCompleteCheck} style={{ display: 'inline-block', color: '#fff' }} checked={props.IsCompleted} />
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography style={{ color: '#fff', fontSize: 14, textAlign: 'left', }}>{props.Title}</Typography>
                <Typography style={{ color: '#fff', fontSize: 12, textAlign: 'left', textDecorationLine: props.IsCompleted ? 'line-through' :null}}>{props.Text}</Typography>
            </Box>
        </Box>
    );
}

export default TodoItem;