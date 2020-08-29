import { Field, Form, Formik, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import { RecaptchaField } from "./RecaptchaField";
import { useAppDispatch } from "../../store";
import {
    addNotification,
    BaseNotification,
} from "../notification/notificationSlice";
import { sendContactMessage } from "./contactApi";
import { Box, Button } from "@material-ui/core";

export interface ContactFormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
    recaptcha: string;
}

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .max(60, "Please enter no more than 60 characters")
        .required("Please enter your name"),
    email: Yup.string()
        .max(60)
        .email("Please enter a valid email address")
        .required("Please enter no more than 60 characters"),
    phone: Yup.string().max(30, "Please enter no more than 30 characters"),
    message: Yup.string()
        .max(5000, "Please enter no more than 5000 characters")
        .required("Please enter a message"),
    recaptcha: Yup.string().required("Please tick the captcha!"),
});

const ContactForm = () => {
    const dispatch = useAppDispatch();

    const handleSubmit = async (
        values: ContactFormValues,
        { setSubmitting, resetForm }
    ): Promise<void> => {
        const submissionSuccessful = await sendContactMessage(values);

        let notification: BaseNotification;
        if (submissionSuccessful) {
            resetForm();
            notification = {
                severity: "success",
                content: "Message sent successfully.",
            };
        } else {
            notification = {
                severity: "error",
                content:
                    "Failed to send message, please try again or send email!",
            };
        }

        dispatch(addNotification(notification));
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
                recaptcha: "",
            }}
            validationSchema={ContactFormSchema}
            onSubmit={handleSubmit}
        >
            {(props: FormikProps<ContactFormValues>): JSX.Element => (
                <ContactFormContents {...props} />
            )}
        </Formik>
    );
};

const ContactFormContents = ({
    errors,
    isSubmitting,
    dirty,
    isValid,
}: FormikProps<ContactFormValues>) => (
    <Form>
        <Field
            component={TextField}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
        />
        <Field
            component={TextField}
            name="email"
            label="E-Mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
        />
        <Field
            component={TextField}
            name="phone"
            label="Phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            helperText={
                errors.phone ? errors.phone : "Please include the country code"
            }
        />
        <Field
            component={TextField}
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            multiline
            rows={10}
        />
        <Box marginTop={2} marginBottom={1}>
            <Field component={RecaptchaField} name="recaptcha" />
        </Box>
        <Box marginTop={2}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting || !dirty || !isValid}
            >
                Submit
            </Button>
        </Box>
    </Form>
);

export { ContactForm };
