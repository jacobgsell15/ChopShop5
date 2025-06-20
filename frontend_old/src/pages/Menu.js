import {useState} from 'react';

function MenuListRow(props){    
    const [inputs,setInputs] = useState({});
    const [isAvail, setIsAvail] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    const handleAvailChange = (event) => {
      setIsAvail(event.target.checked);
    };

    const handleSelectedChange = (event) => {
        setIsSelected(event.target.checked);
    };

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values,[name]:value}))
    }
    const MenuListRowDiv = {
        borderBottom:"1px solid #C5C5C5",
        //backgroundColor: isHovering ? 'rgba(0,0,0,.05)' : 'rgba(0,0,0,0)',\
        width:"100%",
        height:"50px",
    }
    const MenuListRowH = {            
        color:"#000000",
        fontWeight:"300",
        fonSize:"13pt"
    }
    const MenuListRowInput1 = {
        height:"20px",
        width:"120px",   
        fontWeight:"100",
        fontSize:"10pt",
        border:"1px solid #C5C5C5",
        boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
        borderRadius:"4px",
        textAlign:"center",
        padding:"2px"
    }
    const MenuListRowInput2 = {
        height:"20px",
        width:"50px",   
        fontWeight:"100",
        fontSize:"10pt",
        border:"1px solid #C5C5C5",
        boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
        borderRadius:"4px",
        textAlign:"center",
        padding:"2px"
    }

    return(        
        <tr style={MenuListRowDiv}>
            <td><input
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleSelectedChange}
                />
            </td>
            <td style={MenuListRowH}>{props.item.title}</td>
            <td><input
                    type="text"
                    name="recipe"
                    style={MenuListRowInput1}
                    value={inputs.recipe || props.item.recipe || ""}
                    onChange={handleChange}
                />                    
            </td>
            <td><input
                    type="checkbox"
                    checked={isAvail}
                    onChange={handleAvailChange}
                />
            </td>
            <td><input
                    type="text"
                    name="cost"
                    style={MenuListRowInput2}
                    value={inputs.cost || props.item.cost || ""}
                    onChange={handleChange}
                />
            </td>
            <td><input
                    type="text"
                    name="price"
                    style={MenuListRowInput2}
                    value={inputs.price || props.item.price || ""}
                    onChange={handleChange}
                />
            </td>
        </tr>
    )
}

function Menu(){
const menu = [
    {id:"0",title:"Classic Burger",recipe:"",available:false,cost:8.19,price:12.99},
    {id:"1",title:"American Burger"},
    {id:"2",title:"Cowboy Burger"},
    {id:"3",title:"Cheese Pizza"},
    {id:"4",title:"Chef Salad"},
    {id:"5",title:"Wedge Salad"},
    {id:"6",title:"Cobb Salad"},
    {id:"7",title:"Cheese Pizza"},
    {id:"8",title:"Mea Lovers Pizza"},
    {id:"9",title:"Soft Drink"},
    {id:"10",title:"Water"},
    {id:"11",title:"Standard Renters Insurance"},
]
const HouseDiv = {
    backgroundImage:"linear-gradient( rgba(9,9,93,.7), rgba(9,9,93,.2), rgba(9,9,93,.7))",
    padding:"30px 5% 30px 5%",
    width:"100%",
    height:"600px",
    TextAlign:"center"
}
const MenuDiv = {
    border:"1px solid #C5C5C5",
    backgroundColor: '#FFFFFF',
    width:"600px",
    height:"450px",
    borderRadius:"8px",
    margin:"auto",
    boxShadow: '0px 2px  rgba(0,0,0,.25)',
    textAlign:"center",
    float:"left"        
}
const MenuHDiv = {
    borderBottom:"1px solid #C5C5C5",
    width:"100%",
    height:"50px",
    padding:"10px 0 0 0",
    textAlign:"left"
}
const MenuH = {
    color:"#555555",
    width:"100%",
    height:"25px",
    textAlign:"center",
    fontWeight:"200",
    fontSize:"14pt",
    margin:"10px auto 10px auto",
    padding:"0"
}
const MenuListHeader = {            
    color:"#000000",
    fontWeight:"400",
    fonSize:"14pt"
}
const MenuListDiv = {
    border:"1px solid #C5C5C5",
    backgroundColor: 'rgba(0,0,0,.05)',
    width:"100%",
    height:"390px",
    margin:"0px",
    textAlign:"center",
    overflowY: "scroll",
    scrollbarColor:" #C5C5C5 #F5F5F5",
    scrollbarWidth: "thin",
    borderRadius:"8px",
    float:"left"
}
const AddButton = {
    width:"75px",
    height:"20px",
    backgroundColor:"rgba(0,175,2,1)",
    borderRadius:"4px",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    color:"#FFFFFF",
    textAlign:"center",
    fontWeight:"200",
    padding:"0px",
    margin:"0px 20% 0px 10px",
    fontSize:"12px"
}
const UpdateButton = {
    width:"75px",
    height:"20px",
    backgroundColor:"rgba(255,165,0,1)",
    borderRadius:"4px",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    color:"#FFFFFF",
    textAlign:"center",
    fontWeight:"200",
    padding:"0px",
    margin:"0px 10px 0px 12%",
    fontSize:"12px"
}
const DeleteButton = {
    width:"75px",
    height:"20px",
    backgroundColor:"rgba(255,6,0,1)",
    borderRadius:"4px",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    color:"#FFFFFF",
    textAlign:"center",
    fontWeight:"200",
    padding:"0px",
    fontSize:"12px"
}
    return (
        <div style={HouseDiv}>
            <div style={MenuDiv}>
            <div style={MenuHDiv}>
                <button style={AddButton}>Add Item</button>
                <b style={MenuH}>Menu Maintenance</b>
                <button style={UpdateButton}>Update</button>
                <button style={DeleteButton}>Delete</button>
            </div>
            <div style={MenuListDiv}>
                <table>
                <th style={MenuListHeader} width="5%">Selected</th><th style={MenuListHeader} width="30%">Item</th><th style={MenuListHeader} width="50%">Recipe</th><th style={MenuListHeader} width="5%">Available</th><th style={MenuListHeader} width="5%">Cost</th><th style={MenuListHeader} width="5%">Price</th>
                {menu.map((item) => (
                    <MenuListRow key={item.id} item={item} />
                ))}
                </table>
            </div>
            </div>
        </div>
    )
}

export default Menu;