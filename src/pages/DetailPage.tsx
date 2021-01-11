
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import QuestionType from "../model/QuestionType";
import QuestionButton from "../components/QuestionButton";

type DetailPageProps = {
    question: QuestionType;
    onQuit: ()=> void;
}

export default function DetailPage(props: DetailPageProps) {
   return (
        <div className="modal">
            <div className="detail-modal-header">
                <Button icon={<CloseOutlined/>} onClick={props.onQuit}/>
                <h3> En savoir plus ...</h3>
                <div></div>
            </div> 
            <div className="detail-modal-body">
                <QuestionButton question={props.question}/>
                <h1>Hypothèses</h1>
                <h2>{props.question.hypothesis}</h2>        
                <h1>Alternative</h1>        
                <h2>{props.question.alternatives}</h2>        
            </div>
        </div> 
    );
}