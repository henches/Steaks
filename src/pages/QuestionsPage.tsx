
import React, { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import GlobalContext from "../GlobalContext";
import Header from "../Header";
import CategoryType from "../model/Category";
import QuestionButton from "../components/QuestionButton";
import QuestionType from "../model/QuestionType";
import ContextType from "../model/ContextType";
import DetailPage from "./DetailPage";
import Modal from "react-modal";


type CategoryProps = {
    category : CategoryType;
}


export default function Questions(props: CategoryProps) {
    const history = useHistory();
    const myContext:ContextType = useContext(GlobalContext);
    const [isModalVisible, setIsModalVisible] =  useState<boolean>(false);
    const [indexOfQuestion, setIndexOfQuestion] = useState<number>(0);

    function onClick(i: number) {
        console.log("onClick i=", i);
        console.log("myContext.questionList[i]) = ", myContext.questionList[i]);

        setIndexOfQuestion(i);
        setIsModalVisible(true);
    }

    function onQuit() {
        setIsModalVisible(false);
    }


    return (
        <React.Fragment>
            <Header back onClick={() => {history.goBack()}}/>
            <div className="body">
                <h1 >{myContext.currentCategory}</h1>
                <div>
                    {
                        myContext.questionList
                            .filter(q => q.category === myContext.currentCategory)
                            .map ((question, i) => {
                                return <QuestionButton key={i} onClick={() => onClick(i)} question={question}/>
                            }          
                        )
                    }
                </div>
                <Modal isOpen={isModalVisible}>
                    <DetailPage question={myContext.questionList[indexOfQuestion]!} onQuit={onQuit}/>
                </Modal> 
            </div>
           <Footer/>
       </React.Fragment>
    )
} 