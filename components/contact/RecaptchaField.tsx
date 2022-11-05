import React, { useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import FormHelperText from "@mui/material/FormHelperText";
import { useTheme } from "@mui/system";
import { FormControl } from "@mui/material";

interface Props {
    onChange: (value: string) => void;
    setError: (error: string) => void;
    error?: string;
}

const RecaptchaField: React.FC<Props> = ({ setError, onChange, error }) => {
    const theme = useTheme();
    const themeMode = theme.palette.mode;

    const onRecaptchaChange = useCallback(
        (value: string | null) => {
            onChange(value ?? "");
        },
        [onChange]
    );

    const onExpired = useCallback(() => {
        setError("Captcha expired, please tick again");
    }, [setError]);

    const onErrored = useCallback(
        () => setError("Captcha errored, please try again"),
        [setError]
    );

    return (
        <FormControl>
            <ReCAPTCHA
                sitekey="6LctLokUAAAAANg8kc9_bNTcFr8882wp6NhOmhO3"
                onChange={onRecaptchaChange}
                onErrored={onErrored}
                onExpired={onExpired}
                theme={themeMode}
                key={themeMode}
            />
            {error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    );
};

export { RecaptchaField };
