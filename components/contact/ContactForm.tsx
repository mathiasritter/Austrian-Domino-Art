import React, { FormEvent, useCallback } from "react";
import { RecaptchaField } from "./RecaptchaField";
import { z } from "zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "./TextField";

const contactFormSchema = z.object({
    name: z
        .string()
        .min(1, "Please enter your name")
        .max(50, "Please enter no more than 50 characters"),
    email: z
        .string()
        .min(1, "Please enter your email address")
        .max(60, "Please enter no more than 60 characters")
        .email("Please enter a valid email address"),
    phone: z
        .string()
        .max(30, "Please enter no more than 30 characters")
        .optional(),
    message: z
        .string()
        .min(1, "Please enter a message")
        .max(5000, "Please enter no more than 5000 characters"),
    recaptcha: z.string().min(1, "Please tick the captcha"),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>; // string

const ContactForm = () => {
    const { mutateAsync } = useMutation<
        void,
        { message: string },
        ContactFormSchema
    >({
        mutationFn: (values) => axios.post("/api/contact", values),
    });

    const {
        handleSubmit,
        formState: { isSubmitting, isDirty, isValid, isSubmitSuccessful },
        control,
        setError,
    } = useForm<ContactFormSchema>({
        resolver: zodResolver(contactFormSchema),
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
            recaptcha: "",
        },
    });

    const setRecaptchaError = useCallback(
        (error: string) =>
            setError("recaptcha", { type: "custom", message: error }),
        [setError]
    );

    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            await handleSubmit((data) => mutateAsync(data))(event);
            enqueueSnackbar("Message sent successfully.", {
                variant: "success",
            });
        } catch (error) {
            console.error(error);
            enqueueSnackbar(
                "Failed to send message, please try again or send email!",
                { variant: "error", persist: true }
            );
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Controller
                render={({ field, fieldState: { error }, formState }) => (
                    <TextField
                        label="Name"
                        field={field}
                        fieldError={error}
                        formState={formState}
                        required
                    />
                )}
                name="name"
                control={control}
            />
            <Controller
                render={({ field, fieldState: { error }, formState }) => (
                    <TextField
                        label="Email Address"
                        field={field}
                        fieldError={error}
                        formState={formState}
                        type="email"
                        required
                    />
                )}
                name="email"
                control={control}
            />
            <Controller
                render={({ field, fieldState: { error }, formState }) => (
                    <TextField
                        label="Phone Number"
                        field={field}
                        fieldError={error}
                        formState={formState}
                        type="tel"
                        helperText="Please include the country code"
                    />
                )}
                name="phone"
                control={control}
            />
            <Controller
                render={({ field, fieldState: { error }, formState }) => (
                    <TextField
                        label="Message"
                        field={field}
                        fieldError={error}
                        formState={formState}
                        required
                        multiline
                        rows={10}
                    />
                )}
                name="message"
                control={control}
            />
            <Box marginTop={2} marginBottom={1}>
                <Controller
                    render={({
                        field: { onChange },
                        fieldState: { error },
                    }) => (
                        <RecaptchaField
                            onChange={onChange}
                            setError={setRecaptchaError}
                            error={error?.message}
                        />
                    )}
                    name="recaptcha"
                    control={control}
                />
            </Box>
            <Box marginTop={2}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={
                        isSubmitting ||
                        !isDirty ||
                        !isValid ||
                        isSubmitSuccessful
                    }
                >
                    {isSubmitting
                        ? "Submitting..."
                        : isSubmitSuccessful
                        ? "Submitted"
                        : "Submit"}
                </Button>
            </Box>
        </form>
    );
};

export { ContactForm };
export type { ContactFormSchema };
