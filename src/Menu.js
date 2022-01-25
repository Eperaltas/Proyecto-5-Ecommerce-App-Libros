import React, { Fragment } from 'react';
import './Menu.css';
import Search from './Search';
import PanelAdd from './PanelAdd';

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state = {newItemPanel: false};

        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    add(){
     this.setState({newItemPanel: true});   
    }

    onCancel(){
        this.setState({newItemPanel: false});   
    }


    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">{this.props.title}</div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                        <button onClick={this.add} className="button btn-blue">Crear cuenta</button>
                        <button onClick={this} className="button btn-blue">Carrito</button>
                    </div>
                </div>
                {(this.state.newItemPanel)?
                 <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} /> //* Anote el .onadd dentro del this.props. *//
                 : 
                 ''
                 }
            </div>
        );
    }
}

/*     </div>
                {(this.state.newItemPanel)?
                 <PanelAdd onhide={this.onCancel} onadd={this.props.onadd} />
                 : 
                 ''
                 }
            </div>
            */

/*<button onClick={this.add} className="button btn-blue">Crear cuenta</button> */

/* <button onClick={this} className="button btn-blue">MXN</button> */

/*<img src='img/BanderaMX01.png' width='32' height='20' /> */

/*<img src='img/Carrito.png' width='22'/> */

export default Menu;