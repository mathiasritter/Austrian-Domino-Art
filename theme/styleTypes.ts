/* eslint @typescript-eslint/ban-types: 0 */
import { WithStyles } from "@material-ui/core";
import { PropsWithChildren } from "react";
import { ClassKeyInferable, CSSProperties } from "@material-ui/styles";

export type PropsWithStylesAndChildren<
    PropsType = {},
    StylesType extends ClassKeyInferable<never, never> = { root: CSSProperties }
> = PropsType & PropsWithChildren<WithStyles<StylesType>>;

export type PropsWithStyles<
    PropsType = {},
    StylesType extends ClassKeyInferable<never, never> = { root: CSSProperties }
> = PropsType & WithStyles<StylesType>;
