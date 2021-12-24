import { Button, Box, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducers/coreSlice';

const CreateToDoFrom = ({ props, onSubmit }) => {
    const [form, setForm] = useState(null);

    const handleForm = (event) => {
        const { id, value } = event.target;
        console.log(id,value);
        
        setForm(prevState => ({ ...prevState, [id]: value, IsCompleted: false, IsDeleted: false, CreatedDate:Date.now() }));
    }
const dispatch = useDispatch()


    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(form);
        dispatch(addTodo(form));
        // onSubmit(form);

    }
    return (
        <Box
            className='form-container'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {
                Object.keys(props).map((item) => {
                    return <div style={{ marginTop: 10 }}>
                        <TextField
                            id={item}
                            label={`Type ${item}`}
                            placeholder={item}
                            style={{ width: '100%' }}
                            onChange={handleForm}
                        />
                    </div>
                })
            }
            <Button onClick={onSubmitForm} variant="outlined" style={{ marginTop: 20 }}>Add</Button>
        </Box>
    )
}

export default CreateToDoFrom;