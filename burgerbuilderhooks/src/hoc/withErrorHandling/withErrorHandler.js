import React, { useState, useEffect } from 'react';

import Auxilary from '../Axuliary';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);
        
        const reqInterceptor = axios.interceptors.request.use(req=>{
            setError(null);
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, error=>{
            setError(error);
        });
        

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            };
        }, [reqInterceptor, resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }
        
        return (
            <Auxilary>
                <Modal 
                    show={error}
                    clicked={errorConfirmedHandler}
                >
                    {this.state.error ? this.state.error : null}
                </Modal>
                <WrappedComponent {...props} />
            </Auxilary>
        )
        
    }
}

export default withErrorHandler;