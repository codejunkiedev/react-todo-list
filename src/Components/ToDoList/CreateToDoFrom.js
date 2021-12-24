import { Button, Box, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducers/coreSlice';

const CreateToDoFrom = ({ props, onSubmit }) => {
    const [form, setForm] = useState({});
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorText, setErrorText] = useState(false);
    console.log(form);
    const handleForm = (event) => {
        const { id, value } = event.target;
        setForm(prevState => ({ ...prevState, [id]: value, IsCompleted: false, IsDeleted: false, CreatedDate:Date.now() }));
    }
const dispatch = useDispatch()


    const clearInput = () => {
        const clear = { Title: '', Text: '', };
        setForm(prevState => ({ ...prevState, ...clear }));
    };



    const onSubmitForm = (e) => {
        console.log(form)
        if (form.Title && form.Title !== '' && form.Text && form.Text !== '') {
            dispatch(addTodo(form));
            clearInput()
            setErrorTitle(false);
            setErrorText(false);


        }
        if (typeof form.Title === 'undefined' || form.Title === '') {
            console.log("...", form.Title)
            setErrorTitle(true);
        }
        if (typeof form.Text === 'undefined' || form.Text === '') {
            setErrorText(true);
        }

    }
    return (
        <Box
            className='form-container'
            component="form"
            sx={{
                width: '60%',
                height: '60%',
                paddingTop: 20,

            }}
            noValidate
            autoComplete="off"
        >

            {
                Object.keys(props).map((item) => {
                    return <div style={{ marginTop: 10 }}>

                        <TextField
                            error={(item === 'Title' && errorTitle ? true : false) || (item === 'Text' && errorText ? true : false)}
                            id={item}
                            label={`Type ${item}`}
                            placeholder={item}
                            style={{ width: '100%' }}
                            value={form[item] || ''}
                            onChange={handleForm}
                        />
                    </div>
                })
            }

            <Button onClick={onSubmitForm} variant="outlined" style={{ marginTop: 15, marginBottom: 15 }}>Add</Button>
        </Box>
    )
}

export default CreateToDoFrom;