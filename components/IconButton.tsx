import Hoverable from "./Hoverable";
import React, {PropsWithChildren} from "react";

type IconButtonProps = PropsWithChildren & {
    link: string;
}

export function IconButton(props: IconButtonProps) {
    return (
        <Hoverable>
            <a href={props.link} target={"_blank"} rel={"noreferrer"}>
                <div
                    className={
                        "hover:scale-110 transition grid place-items-center bg-neutral-700 w-16 h-16 rounded-full"
                    }
                >
                    {props.children}
                </div>
            </a>
        </Hoverable>
    )
}
