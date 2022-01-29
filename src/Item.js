import React from 'react';
import './Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            price: '',
            image: '',
            rating: 1,
            quantity: []
        }

        this.onremove = this.onremove.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            price: this.props.price,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            quantity: Array(parseInt(this.props.rating)).fill(1)
        });
    }

    onremove(e){
        console.log(this.props.id);
        this.props.onremove(this.props.id);
    }

    onChangeRating(e){
        const rating = parseInt(e.target.value)
        this.setState({
            rating: parseInt(e.target.value),
            quantity: Array(parseInt(e.target.value)).fill(1)
        });

        this.props.onupdaterating({id: this.state.id, title: this.state.title, price: this.state.title, image: this.state.image, rating: rating});
    }

    render(){
        return(
            <div className="item">
                <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
                <div className="title">{this.state.title}</div>
                <div className="price">{this.state.price}</div>
                <div className="rating">
                    <p>
                    {this.state.quantity.map(x =>
                    <img src='' width='' />
                    )}
                    </p>
                    Cantidad
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onremove}>Agregar al carrito</button>
                </div>
            </div>
        );
    }

}

export default Item;