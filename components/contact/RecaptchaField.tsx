import { FieldProps } from "formik";
import React, { useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Skeleton from "@mui/material/Skeleton";
import FormHelperText from "@mui/material/FormHelperText";

const RecaptchaSkeleton: React.FC = () => (
    <Skeleton
        variant="rectangular"
        sx={{ height: "74px", width: "100%", maxWidth: "300px" }}
    />
);

const RecaptchaField = ({
    form: { setFieldValue, setFieldError, setFieldTouched, touched, errors },
    field: { name },
}: FieldProps) => {
    const isLightTheme = useSelector(
        (state: RootState) => state.theme.type === "light"
    );

    const onChange = useCallback(
        (value: string | null) => {
            setFieldTouched(name);
            setFieldValue(name, value ?? "");
        },
        [setFieldValue, setFieldTouched, name]
    );

    const onExpired = useCallback(() => {
        setFieldError(name, "Captcha expired, please tick again");
        setFieldValue(name, "");
    }, [setFieldError, setFieldValue, name]);

    const onErrored = useCallback(
        () => setFieldError(name, "Captcha errored, please try again"),
        [setFieldError, name]
    );

    return (
        <>
            <ReCAPTCHA
                sitekey="6LctLokUAAAAANg8kc9_bNTcFr8882wp6NhOmhO3"
                onChange={onChange}
                onErrored={onErrored}
                onExpired={onExpired}
                theme={isLightTheme ? "light" : "dark"}
            />
            {touched[name] && errors[name] && (
                <FormHelperText error>
                    {errors[name].toLocaleString()}
                </FormHelperText>
            )}
        </>
    );
};

export { RecaptchaField };
