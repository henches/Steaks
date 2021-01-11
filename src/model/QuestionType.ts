
import CategoryType from "./Category"


type QuestionType = {
    category: CategoryType;
    sentence: string;
    quantity: number;
    hypothesis: string;
    alternatives: string;
}


export default QuestionType;


export const defaultQuestion = {
        category: CategoryType.Transport,
        sentence: "",
        quantity: 0,
        hypothesis: "",
        alternatives: ""
}