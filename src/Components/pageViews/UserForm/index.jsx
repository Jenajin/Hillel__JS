import styled from "@emotion/styled";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';

export const UserForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            phoneNumber: ''
        },
        validateOnChange: false,
        onSubmit: values => {
            alert('Реєстрація успішна')
            formik.resetForm()
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Некоректна адреса електронної пошти')
                .required('Введіть адресу електронної пошти'),
            password: Yup.string()
                .required('Введіть пароль')
                .min(4, 'Мінімум 4 символи')
                .max(15, 'Максимум 15 символів'),
            phoneNumber: Yup.string()
                .required('Введіть номер телефону')
                .matches(/^[0-9]{12}$/, 'Некоректний номер телефону')
        })
    });

    return (
        <Container>
            <FormWrap onSubmit={formik.handleSubmit}>
                <Typography variant='h5'>Форма для реєстрації</Typography>

                <TextField
                    name='email'
                    label="Електронна пошта"
                    variant="standard"
                    error={formik.touched.email && !!formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />

                <TextField
                    label="Пароль"
                    name='password'
                    variant="standard"
                    type="password"
                    error={formik.touched.password && !!formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />

                <TextField
                    label="Номер телефону"
                    name='phoneNumber'
                    variant="standard"
                    error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                />

                <Button variant="contained" type={'submit'}>Submit</Button>
            </FormWrap>
        </Container>
    );
};


const Container = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
})


const FormWrap = styled('form')({
    width: '400px',
    height: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
});