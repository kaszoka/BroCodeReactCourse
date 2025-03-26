import PropTypes from "prop-types";

function List(props){

   const itemList = props.items;

                   // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alfabetycznie
                  //  fruits.sort((a, b) => b.name.localeCompare(a.name)); // odwrotnie alfabetycznie
                 //   fruits.sort((a, b) => a.calories - b.calories); //numerynie kalorie
                //    fruits.sort((a, b) => b.calories - a.calories);

               // const lowcal = fruits.filter(fruit => fruit.calories < 40);
              //  const highcal = fruits.filter(fruit => fruit.calories >= 40);

                 // const listlowcal = lowcal.map(lowcal => <li key={lowcal.id}>{lowcal.name}:
                                      //   &nbsp;<b>{lowcal.calories}</b></li>);

                 //  const listhighcal = highcal.map(highcal => <li key={highcal.id}>{highcal.name}:
                                      //   &nbsp;<b>{highcal.calories}</b></li>);

    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}:
                                         &nbsp;<b>{item.calories}</b></li>);
    

    return(<>
    <div className="divo">
    <h3 className="list-category">{category}</h3>
    <ol className="listitems">{listItems}</ol>
    </div>
    </>);
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                             name: PropTypes.string,
                                             calories: PropTypes.number,               
    })), 
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List