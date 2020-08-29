import { ContactFormValues } from "./ContactForm";

const sendContactMessage = async (
    values: ContactFormValues
): Promise<boolean> => {
    const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
    });

    return response.status === 200;
};

export { sendContactMessage };
