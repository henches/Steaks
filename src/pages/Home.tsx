
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CategoryButton from '../components/CategoryButton';
import Footer from '../Footer';
import CategoryType from '../model/Category';
import GlobalContext from '../GlobalContext';
import {categories} from '../categories';
import {questionList} from '../cdsData'
import Header from '../Header';



export default function Home() {
    const history = useHistory();
    const context = useContext(GlobalContext);
    
    function onClick(category: CategoryType) {
        context.currentCategory = category;
        history.push("/questions");
    }

    return (
        <React.Fragment>
            <Header  onClick={() => {history.goBack()}}/>
            <div className="body">
                {
                    categories.map((category,i) => {
                        return(<CategoryButton key={i} onClick={() => onClick(category)} category={category} question={questionList[Math.floor(Math.random()*questionList.length)]}/>);
                    })
                }
            </div>
            <Footer/>
       </React.Fragment>
    )
} 