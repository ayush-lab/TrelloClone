import React, {useState} from 'react';
import styles from "./CSS/Checklist.module.css";
import { useChecklist } from 'react-checklist';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';



// let data = [
//   { _id: 1, label: 'item 1' },
//   { _id: 2, label: 'item 2' },
// ]
 
export default function Checklist(props) {

  const [open,openHandler]=useState(false);
  const [ text,changeText] = useState('');
  let [ count,countHandler] = useState(2);
  const [data,checkHandler] =useState([]);
  

  let { handleCheck, isCheckedAll, checkedItems } = useChecklist(data, {
    key: '_id',
    keyType: 'number',
  });

  let addButton = null;
 

  function handleOpenForm() {
    openHandler(!open);
  }

  function handlerInput(event) {
    changeText(event.target.value);
  }


  function handlerDispatch(){
    countHandler(prevCount=>prevCount+1);
    let dummyData = [...data];
    dummyData.push({_id:count,label:text});
    checkHandler(dummyData);
    console.log(dummyData);
  }



  if(!open){

      addButton = (<button className={styles.addButton} onClick={handleOpenForm}>Add an item</button>);
  }
  else if(open){
      addButton = (<div className={styles.Textarea}>
                <TextareaAutosize autoFocus
                        style = {{resize:"none"}} 
                        className={styles.textSection}
                        onBlur= {handleOpenForm}
                        onChange={(event)=> {handlerInput(event)}}
                        />

                <div className={styles.ButtonArea}>
                    <Button 
                    variant="contained" 
                    className={styles.saveButton}
                    onMouseDown={handlerDispatch}
                    >Save
                    </Button>
                    <CloseIcon onClick={handleOpenForm}/>
                </div>

                </div>);
  }



  console.log(checkedItems);      
  console.log([...checkedItems]); 

  return (

    <div>
     <ul className={styles.checkList}>
 
      <li>
        <input
          type="checkbox"
          onChange={handleCheck}              // 1
          checked={isCheckedAll}              // 2
        />
        <label className={styles.Label}>Check All</label>
      </li>
 
      {data.map((v, i) => (
        <li key={i}>
          <input
            type="checkbox"
            data-key={v._id}                  // 3
            onChange={handleCheck}            // 4
            checked={checkedItems.has(v._id)} // 5
          />
          <label className={styles.Label}>{v.label}</label>
        </li>
      ))}
 
     </ul>
            {addButton}
    </div>
  );
};