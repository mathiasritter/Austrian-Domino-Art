import { FieldProps } from "formik";
import React, { useCallback } from "react";
import { createStyles, FormHelperText, withStyles } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";
import LazyLoad from "react-lazyload";
import { Theme } from "../../theme/theme";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { PropsWithStyles } from "../../theme/styleTypes";

const recaptchaSkeletonStyles = (theme: Theme) =>
    createStyles({
        root: {
            height: "74px",
            width: "100%",
            maxWidth: "300px",
        },
    });

const RecaptchaSkeleton = withStyles(
    recaptchaSkeletonStyles
)(({ classes }: PropsWithStyles) => (
    <Skeleton variant="rect" className={classes.root} />
));

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
        <LazyLoad once={true} placeholder={<RecaptchaSkeleton />}>
            <ReCAPTCHA
                sitekey="6LctLokUAAAAANg8kc9_bNTcFr8882wp6NhOmhO3"
                onChange={onChange}
                onErrored={onErrored}
                onExpired={onExpired}
                theme={isLightTheme ? "light" : "dark"}
            />
            {touched[name] && errors[name] && (
                <FormHelperText error>{errors[name]}</FormHelperText>
            )}
        </LazyLoad>
    );
};

export { RecaptchaField };
