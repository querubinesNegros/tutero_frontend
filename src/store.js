import { createStore } from 'redux';

const reducer = (state,action) => {
    if(action.type === "ADD_TO_STORE"){
        return{
            ...state,
            id: action.id,
            name: action.name,
            email: action.email,
            lastname: action.lastname,
            cellphone: action.cellphone,
            career_id: action.career_id,
            userable_type: action.userable_type,
            userable_id: action.userable_id,
            aut: true
        }
    }
    return state;
};

export default createStore(reducer, {id: "sinnada",name: "sinnadas",email: "",lastname: "",cellphone: "",career_id:"",userable_type:"",userable_id:"",aut: false});