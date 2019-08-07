import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode :''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'Artyem',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '123456',
                    country: 'Russia'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios.post('/orders.json',
            order
        )
        .then(response => {
            this.setState({loading:false });
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({loading:false })
            console.log(error);
        });
    }

    render() {
        let form = (<form>
            <Input inputType="input" type="text" name="name" placeholder="Your name"/>
            <Input inputType="input" type="email" name="name" placeholder="Your email"/>
            <Input inputType="input" type="text" name="name" placeholder="Your Street"/>
            <Input inputType="input" type="text" name="name" placeholder="Your PostalCode"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>);
        if(this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;