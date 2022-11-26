import React from "react";
import {
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { FieldError, Path } from "react-hook-form";
import { ControllerRenderProps } from "react-hook-form/dist/types/controller";
import { UseFormStateReturn } from "react-hook-form/dist/types";

interface OwnProps<TFieldValues, TName extends Path<TFieldValues>> {
    field: ControllerRenderProps<TFieldValues, TName>;
    formState: UseFormStateReturn<TFieldValues>;
    fieldError?: FieldError;
}

type Props<TFieldValues, TName extends Path<TFieldValues>> = OwnProps<
    TFieldValues,
    TName
> &
    MuiTextFieldProps;

const TextField = function <TFieldValues, TName extends Path<TFieldValues>>({
    field,
    fieldError,
    helperText,
    formState: { isSubmitSuccessful, isSubmitting },
    ...rest
}: Props<TFieldValues, TName>) {
    return (
        <MuiTextField
            {...field}
            fullWidth
            margin="normal"
            color={fieldError ? "error" : "info"}
            error={!!fieldError}
            helperText={fieldError?.message ?? helperText}
            disabled={isSubmitSuccessful || isSubmitting}
            {...rest}
        />
    );
};

export { TextField };
