import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios'

function EditOrderRow(props){
const [inputs,setInputs] = useState({});

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}))
}
    
const EditOrderRowDiv = {        
    borderBottom:"1px solid #C5C5C5",
    backgroundColor:"rgba(0,0,0,.05)",
    textAlign:"left",
    width:"100%",
    height:"50px", 
    padding:"10px 0px 10px 0px"  
}
const EditOrderRowLDiv = {
    width:"160px",
    height:"90%",
    float:"left",
    padding:"0px 0px 0px 15px"
} 
const EditOrderRowMDiv = {
    width:"90px",
    height:"90%",
    float:"left",
    textAlign:"right",
    padding:"0px 0px 0px 0px"
} 
const EditOrderRowRDiv = {
    textAlign:"right",
    width:"55px",
    height:"90%",
    float:"right",
    padding:"0px 15px 0px 0px"
}
const EditOrderRowH = {            
    color:"#000000",
    fontWeight:"100",
    fonSize:"13pt"
}
const EditOrderRowInput1 = {
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
const EditOrderRowInput2 = {
    height:"20px",
    width:"25px",   
    fontWeight:"100",
    fontSize:"10pt",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    borderRadius:"4px",
    textAlign:"center",
    padding:"2px"
}
const SubmitButton = {
    width:"45px",
    height:"20px",
    backgroundColor:"rgba(255,165,0,1)",
    borderRadius:"4px",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    color:"#FFFFFF",
    textAlign:"center",
    fontWeight:"200",
    padding:"0px",
    fontSize:"12px"
}
const DeleteButton = {
    width:"45px",
    height:"20px",
    backgroundColor:"#FF1A00",
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
    <>        
        <div style={EditOrderRowDiv}>
        <div style={EditOrderRowLDiv}>
            <b style={EditOrderRowH}>{props.item.item}</b>
        <br />
            <label style={EditOrderRowH}>
            <input
                type="text"
                name="modifications"
                value={inputs.modifications || props.item.modifications || "Add Modification"}
                style={EditOrderRowInput1}
                onChange={handleChange}
            />
            </label>
        </div>
        <div style={EditOrderRowMDiv}>
            <label style={EditOrderRowH}>Guest:
            <input
                type="text"
                name="guest"
                value={inputs.guest || props.item.guest || ""}
                style={EditOrderRowInput2}
                onChange={handleChange}
            />
            </label>
        <br />
            <label style={EditOrderRowH}>Qty:
            <input
                type="text"
                name="qty"
                value={inputs.qty || props.item.qty || ""}
                style={EditOrderRowInput2}
                onChange={handleChange}
            />
            </label>
        </div>
        <div style={EditOrderRowRDiv}>
            <button style={SubmitButton}>Update</button>
        <br />
            <button style={DeleteButton}>Delete</button>
        </div>
    </div>
    </>
    )  

}

function EditOrder(props){
    const [inputs,setInputs] = useState({});
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const handleSelect = (event) => {
        setSelectedValue(event.target.value);
        };

    const handleSubmit = (event) => {
        //event.preventDefaults();
        alert(inputs + selectedValue);
    }

    const EditOrderDiv = {
    border:"1px solid #C5C5C5",
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',        
    boxShadow: '0px 2px  rgba(0,0,0,.25)',
    width:"350px",
    height:"450px",
    margin:"20px",
    textAlign:"center",
    float:"left"
}
const EditOrderHeadingDiv = {        
    borderBottom:"1px solid #C5C5C5",
    width:"100%",
    height:"50px"
}
const EditOrderHeadingH = {        
    color:"#555555",
    width:"70%",
    height:"25px",
    textAlign:"center",
    fontWeight:"200",
    fontSize:"14pt",
    margin:"15px auto",
    padding:"0"
}
const EditOrderSubHeadingDiv = {        
    borderBottom:"1px solid #C5C5C5",
    width:"100%",
    height:"50px",
    padding:"15px 0px 0px 0px" 
}
const EditOrderSubHeadingH = {            
    color:"#000000",
    paddingLeft:"10px",
}
const EditOrderSubHeadingInput1 = {    
    height:"20px",
    width:"55px",   
    fontWeight:"100",
    fontSize:"10pt",
    border:"1px solid #C5C5C5",
    boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
    borderRadius:"4px",
    textAlign:"center",
    padding:"2px"
}
const EditOrderBottomRowDiv = {        
    borderBottom:"1px solid #C5C5C5",
    backgroundColor:"rgba(0,0,0,.05)",
    textAlign:"left",
    width:"95%",
    height:"50px", 
    padding:"5px 0px 0px 5%"  
}
    return(
        <div style={EditOrderDiv}>
            <div style={EditOrderHeadingDiv}>
                <div style={EditOrderHeadingH}><b>New Order</b></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div style={EditOrderSubHeadingDiv}>
                    <label style={EditOrderSubHeadingH}>Table:
                    <input 
                        type="text" 
                        name="table" 
                        value={inputs.table || props.curr.table || ""} 
                        style={EditOrderSubHeadingInput1}
                        onChange={handleChange}
                    />
                    </label>
                    <label style={EditOrderSubHeadingH}>Guests:
                    <input 
                        type="number" 
                        name="guests" 
                        value={inputs.guests || props.curr.guests || ""} 
                        style={EditOrderSubHeadingInput1}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                {props.curr.items.map((item) => (
                    <>
                    <EditOrderRow key={item.id} item={item} />
                    </>
                ))}
                <div style={EditOrderBottomRowDiv}>
                <label>
                    Choose an Item:
                    <select value={selectedValue} onChange={handleSelect}>
                        <option value="">Select a Menu Item</option>
                        {props.menu.map((product) => (
                        <option key={product.id} value={product.title}>{product.title}</option>
                        ))}
                    </select>
                </label>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

function OrderLocationElement(props){
    const LocationDiv= {
        border:"1px solid #C5C5C5",
        backgroundColor: '#FFFFFF',
        width:"350px",
        height:"135px",
        borderRadius:"8px",
        margin:"20px",
        boxShadow: '0px 2px  rgba(0,0,0,.25)',
        textAlign:"center",      
    }
    const LocationHeadingDiv = {
        borderBottom:"1px solid #C5C5C5",
        width:"350px",
        height:"50px"
    }
    const LocationHeadingH = {
        color:"#555555",
        width:"150x",
        height:"25px",
        textAlign:"left",
        fontWeight:"200",
        fontSize:"14pt",
        margin:"10px",
        float:"left",
        padding:"0"
    }
    const SubmitButton = {
        width:"75px",
        height:"25px",
        backgroundColor:"rgba(255,165,0,1)",
        borderRadius:"4px",
        border:"1px solid #C5C5C5",
        boxShadow:"1px 1px 1px 1px rgba(0,0,0,.25)",
        color:"#FFFFFF",
        textAlign:"center",
        fontWeight:"200",
        fontSize:"12px",
        float:"right",
        margin:"10px"
    }
    const LocationInfoDiv = {
        width:"350px",
        height:"80px"
    }
    const LocationInfoCol = {
        width:"30%",
        height:"70px",
        fontWeight:"100",
        fontSize:"11pt",
        float:"left",
        margin:"5px"
    }
    return (
        <div style={LocationDiv}>
            <div style={LocationHeadingDiv}>
                <div style={LocationHeadingH}><b>{props.location.name}</b></div>
                <button style={SubmitButton}>New Order</button>            
            </div>
            <div style={LocationInfoDiv}>
                <div style={LocationInfoCol}>
                    <b>Total Tables: {props.location.tables}</b>
                    <br />
                    <br />
                    <b>Available: {props.location.avail}</b>
                </div>
                <div style={LocationInfoCol}>
                    <b>Dining: {props.location.dining}</b>
                    <br />
                    <br />
                    <b>Waiting: {props.location.waiting}</b>
                </div>
                <div style={LocationInfoCol}>
                    <b>Guests: {props.location.guests}</b>
                    <br />
                    <br />
                    <b>Staff: {props.location.staff}</b>
                </div>
            </div>
        </div>
    )
}

function OrderListRow(props){    
    const [isHovering, setIsHovering] = useState(false);
    const OrderListRowDiv = {
        borderBottom:"1px solid #C5C5C5",
        backgroundColor: isHovering ? 'rgba(0,0,0,.05)' : 'rgba(0,0,0,0)',
        width:"100%",
        height:"50px",
        textAlign:"left" 
    }
    const ListRowB1 = {        
        color:"#000000",
        fontWeight:"100",
        fontSize:"13pt",
        paddingLeft:"10px",
    }
    const ListRowB1v2 = {        
        color:"#000000",
        fontWeight:"100",
        fontSize:"13pt",
        paddingRight:"10px",
        float:"right"
    }
    const ListRowB2 = {        
        color:"#000000",
        fontWeight:"100",
        fontSize:"11pt",
        paddingLeft:"10px"
    }
    console.log(props.order);
    console.log(props.location);
    return (
        <div style={OrderListRowDiv} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <b style={ListRowB1}>Table {props.order.table}</b><b style={ListRowB1v2}>Guests: {props.order.guests}</b>
            <br />
            <b style={ListRowB2}>{props.location.name}</b>
        </div>
    )
}

function Order(){
    const [currOrd,setCurrOrd] = useState([])
    const [items,setItems] = useState([])
    const [openOrds,setOpenOrds] = useState([])
    const [locs,setLocs] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            axios
                .get("/api/orders/") // Replace with your API URL
                .then((response) => {setOpenOrds(response.data)})
                .catch ((error) => {
                    console.error("Error fetching data:", error);
                })
            
            axios
                .get("/api/locations/")
                .then((response) => {setLocs(response.data)})
                .catch ((eror) => {
                    console.error("Error fetching data:", eror)
                })

            axios
                .get("/api/items/")
                .then((response) => {setItems(response.data)})
                .catch ((eror) => {
                    console.error("Error fetching data:", eror)
                })
        };        
        fetchData();
    }, []);

    const openOrders = [
        {id:"0",location:"Main Diner",table:"Table 5",guests:"5",alert:"Waiting for Food!",items:['Cowboy Burger','Sprite','Chef Salad'],modifications:['NO LETTUCE','none','none'],guest:['1','1','2']},
        {id:"1",location:"Outdoor Patio",table:"Table 3",guests:"2",alert:"",items:['Cowboy Burger','Sprite','Chef Salad'],modifications:['NO LETTUCE','none','none'],guest:['1','1','2']},
        {id:"2",location:"Main Diner",table:"Table 3",guests:"3",alert:"",items:['Cowboy Burger','Sprite','Chef Salad'],modifications:['NO LETTUCE','none','none'],guest:['1','1','2']},
        {id:"3",location:"Bar",table:"Bartop 1",guests:"2",alert:"",items:['Cowboy Burger','Sprite','Chef Salad'],modifications:['NO LETTUCE','none','none'],guest:['1','1','2']},
    ]
    
    const currOrder = {id:"3",location:"Bar",table:"Bartop 1",guests:"2",alert:"",items:[
        {id:"0", item: 'Cowboy Burger', modifications:'NO LETTUCE', guest:'2'},
        {id:"1", item: 'Sprite', modifications:'',guest:'1'},
        {id:"2", item: 'Chef Salad',modifications:'',guest:'2'}
        ]
    }
    
    const locations = [
        {id:"0",location:"Main Diner",tables:10,avail:8,dining:1,waiting:1,guests:8,staff:4},
        {id:"1",location:"Outdoor Patio",tables:5,avail:4,dining:1,waiting:0,guests:3,staff:2},
        {id:"2",location:"Bartop",tables:5,avail:4,dining:1,waiting:0,guests:2,staff:2},
    ]

    const menu = [
        {id:"0",title:"Classic Burger"},
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
    const OrdersDiv = {
        border:"1px solid #C5C5C5",
        backgroundColor: '#FFFFFF',
        width:"200px",
        height:"450px",
        borderRadius:"8px",
        margin:"20px",
        boxShadow: '0px 2px  rgba(0,0,0,.25)',
        textAlign:"center",
        float:"left"        
    }
    const OrdersH = {
        color:"#555555",
        width:"100%",
        height:"25px",
        textAlign:"center",
        fontWeight:"200",
        fontSize:"14pt",
        margin:"10px auto 10px auto",
        padding:"0"
    }
    const OrdersListDiv = {
        border:"1px solid #C5C5C5",
        backgroundColor: 'rgba(0,0,0,.05)',
        width:"200px",
        height:"375px",
        margin:"0px",
        textAlign:"center",
        float:"left"
    }
    const LocationsHouseDiv = {
        width:"400px",
        height:"400px",
        backgroundColor:"rgba(0,0,0,0)",
        float:"left"
    }
    
    return (    
        <div style={HouseDiv}>
            <div style={OrdersDiv}>
                <div style={OrdersH}>
                    <b>Open Orders</b>
                </div>
                <div style={OrdersListDiv}>
                {openOrds.map((order) => (
                    <>
                        <OrderListRow key={order.id} onClick={setCurrOrd(order)} order={order} location={locs[order.location - 1]}/>
                    </>
                ))}
                </div>
            </div>
            <>
            <EditOrder curr={currOrd} menu={menu}/>
            </>
            <div style={LocationsHouseDiv}>
                {locs.map((location) => (
                    <>
                        <OrderLocationElement key={location.id} location={location} orders={openOrds} />
                    </>
                ))}
            </div>
        </div>
    )
}

export default Order;