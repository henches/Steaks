
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

type HeaderProps = {
    back? : boolean;
    onClick: (() => void);
}

export default function Header(props: HeaderProps) {
    const leftIcon = props.back ? <CloseOutlined/> : <MenuOutlined />
    return (
        <div className="header">
            <Button type="primary" icon={leftIcon} onClick={props.onClick}/>
            Combien de steaks ?
            <div></div>
        </div>
    )
}
