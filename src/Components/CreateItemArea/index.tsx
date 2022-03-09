import { useState } from "react";
import * as C from "./styles";

import { categorys } from "../../data/Categorys";

import { 
    ValidationTitle, 
    ValidationCategory, 
    ValidationDate, 
    ValidationValue,
} from "../../Helpers/validations";

import { isValidation } from "../../types/OnAddItems";
import { ITems } from "../../types/Item";

type Props = {
    OnAddItens: ( prop: isValidation, Item: ITems ) => void
};

export const CreateItem = ({ OnAddItens }: Props) => {
    const [ category, setCategory ] = useState<string>('');
    const [ date, setDate ] = useState<string>('');
    const [ title, setTitle ] = useState<string>('');
    const [ value, setValue ] = useState<string>('');
    
    const categorysKeys: Array<string> = Object.keys(categorys); 

    const HandleAddNewItem = () => {
        let isTitle = ValidationTitle(title);
        let isCategory = ValidationCategory(category);
        let isDate = ValidationDate(date);
        let isValue = ValidationValue(parseFloat(value));

        const NewItem = {
            category,
            date: new Date(date),
            title,
            value: parseFloat(value)
        };

        if ( 
            isTitle.error 
            || isCategory.error 
            || isDate.error 
            || isValue.error
        ) {
            let ErrorMsg: string = "";

            switch (true) {
                case isTitle.error :
                    ErrorMsg =  isTitle.msg;
                    break;
                
                case isCategory.error :
                    ErrorMsg =  isCategory.msg;
                    break;
                
                case isDate.error :
                    ErrorMsg =  isDate.msg;
                    break;

                case isValue.error :
                    ErrorMsg =  isValue.msg;
                    break;

                default:
                    break;
            }

            OnAddItens({ error: true, msg: ErrorMsg }, NewItem);
        } else {
            setCategory("");
            setDate("");
            setTitle("");
            setValue('');

            OnAddItens({ error: false, msg: "New Item Added" }, NewItem );
        };
    };

    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Date of Event</C.InputTitle>
                <C.Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Category</C.InputTitle>
                <C.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value={""} >Select Category</option>
                    {
                        categorysKeys.map((Key, index) => (
                            <option key={index} value={Key} >
                                { categorys[Key].title }
                            </option>
                        ))
                    } 
                </C.Select>    
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Title</C.InputTitle>
                <C.Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />    
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Price</C.InputTitle>
                <C.Input type="number" value={ value } placeholder={"R$ 00,00"} onChange={(e) => setValue(e.target.value)} />    
            </C.InputLabel>

            <C.ContainerButton>
                <C.Button onClick={HandleAddNewItem}>
                    Adicionar
                </C.Button>
            </C.ContainerButton>
        </C.Container>
    )
};