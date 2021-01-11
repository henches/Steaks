
import React from 'react';
import CategoryType from './model/Category';
import ContextType from './model/ContextType';
import { defaultQuestion } from './model/QuestionType';

const GlobalContext = React.createContext<ContextType>({currentCategory: CategoryType.Transport, questionList: [defaultQuestion]});
export default GlobalContext;

