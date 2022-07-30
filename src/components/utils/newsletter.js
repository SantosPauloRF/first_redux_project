import React, {useRef, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToNewsletter } from '../../store/utils/thunks';
import { showToast } from './tools';

const  Newsletter = () => {

    const textInput = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = textInput.current.value
        dispatch(addToNewsletter({email: value}))
        .unwrap()
        .then((response)=>{
            if(response.newsletter === "added"){
                showToast("SUCCESS", "Thank you for subscribing!!")
                textInput.current.value = "";
            }
            if(response.newsletter === "failed"){
                showToast("ERROR", "You are already on the list!!")
                textInput.current.value = "";
            }
        })

    }

    return (
        <>
            <div className='newsletter_container'>
                <h1>Join our newsletter</h1>
                <div className='form'>
                    <Form onSubmit={handleSubmit} className='mt-4'>
                        <Form.Group>
                            <Form.Control 
                                type='text'
                                placeholder='EXAMPLE: youremail@gmail.com'
                                name="email"
                                ref={textInput}
                            />
                        </Form.Group>
                        <Button className='mt-2' variant="primary" type='submit'>
                            Add me to the list
                        </Button>
                    </Form>

                </div>

            </div>
        </>
    )
}

export default Newsletter