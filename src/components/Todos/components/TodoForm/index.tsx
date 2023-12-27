import React from 'react';
import { AppButton, AppInput } from '../../../UI';

const TodoForm = () => {
    return (
        <form>
            <AppInput />
            <AppButton>
                Dobavit
            </AppButton>
        </form>
    );
};

export default TodoForm
;