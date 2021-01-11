
import QuestionType from "../model/QuestionType"

type CategoryButtonProps = {
    category: string;
    question: QuestionType;
    onClick: any;
    key: number;
}

export default function CategoryButton (props: CategoryButtonProps) {
    return (
        <button className="categoryButton" type='button' onClick={props.onClick}>
            <div className="categoryButtonCategory">
                {props.category}
            </div>
            <div className="categoryButtonQuestionSentence">
                {props.question.sentence}
            </div> 
            <div className="categoryButtonQuestionQuantity">
                {props.question.quantity} steaks
            </div>   
        </button>
    )
}