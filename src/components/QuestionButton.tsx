
import QuestionType from "../model/QuestionType";
import {Button} from "antd";

type QuestionButtonProps = {
    question: QuestionType;
    onClick?: any;
    key?: number;
}



export default function QuestionButton(props: QuestionButtonProps) {
    return(
        <Button className="question" onClick={props.onClick}>
            <h1 className="sentence"> 
                {props.question.sentence}
            </h1>
            <h1 className="quantity"> 
                {props.question.quantity} steaks
            </h1>
        </Button>
    )
}