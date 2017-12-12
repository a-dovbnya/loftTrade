import React from 'react';
import { shallow } from 'enzyme';

import { Login } from '../Login/Login';
//import { Followers } from '../Followers/Followers';
//import { fetchUserRequest } from "../../actions/users";
//import Loader from 'react-svg-spinner';

describe('Компонент Login ', () => {
    describe('Содержит метод ', () => {
        
        const match = { params: { symbol: 'btc' } };
        const wrapper = shallow(<Login match={match} fetchUserRequest={jest.fn()} />);
    
        it('changeHandler', () => {
            expect(wrapper.instance().changeHandler).toBeDefined();       
        });
    
        it('changeAuthAction', () => {
            expect(wrapper.instance().changeAuthAction).toBeDefined();       
        });

        it('btnClickHandler', () => {
            expect(wrapper.instance().btnClickHandler).toBeDefined();       
        });

    });

    describe('В основной верстке должен быть', () => {
        const match = { params: { symbol: 'btc' } };
        const wrapper = shallow(<Login match={match} fetchUserRequest={jest.fn()} />);

        it('Форма регистрации', () => {
            expect(wrapper.find('.auth__form')).toHaveLength(1);
        });

        it('Поле ввода email', () => {
            expect(wrapper.find('.auth__area_email')).toHaveLength(1);
        });

        it('Поле ввода пароля', () => {
            expect(wrapper.find('.auth__area_password')).toHaveLength(1);
        });

        it('Кнопка отправки', () => {
            expect(wrapper.find('.auth__btn')).toHaveLength(1);
        });

        it('Кнопка отправки', () => {
            expect(wrapper.find('.auth__btn')).toHaveLength(1);
        });

        it('Кнопка переключения метода авторизации', () => {
            expect(wrapper.find('.change-auth-method')).toHaveLength(1);
        });
    });
});