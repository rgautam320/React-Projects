import ClearIcon from '@material-ui/icons/Clear';
const List = (props) => {
   return (
      <>
         <div className="myItem">
            <li>
               <button
                  className="plusBtn myIcon"
                  onClick={() => {
                     props.onSelect(props.id);
                  }}
               >
                  <ClearIcon style={{backgroundColor: 'transparent', fontSize: '45px', lineHeight: "50px", textAlign: "center", verticalAlign: "middle"}}/>
               </button>
               {props.text}
            </li>
         </div>
      </>
   );
};

export default List;
