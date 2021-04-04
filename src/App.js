import React, { Component } from "react";
import "./App.css";
import Form from "./component/Form";
import Meal from "./component/Meal";
import { v4 } from 'uuid'
import firebase from 'firebase'
import 'firebase/firestore'
class App extends Component {
  state = {
    meals: [],
    editDefaults: {
      text: '',
      calorie: ''
    }
  };

  addMeal = (e) => {
    e.preventDefault();
    let meal = {
      text: this.state.editDefaults.text,
      calorie: this.state.editDefaults.calorie,
    }

    firebase.firestore().collection('dasfasd').add(
      meal
    )
    this.setState({
      editDefaults: {
        text: '',
        calorie: ''
      }
    })
  };

  onDelete = id => {
    firebase.firestore().collection('dasfasd').doc(id).delete()
  };
  onEdit = id => {
    let meal = this.state.meals.filter(meal => meal.id === id)
    let text = meal[0].text;
    let calorie = meal[0].calorie
    let obj = { text, calorie }
    this.setState({ editDefaults: obj })
    this.onDelete(id)
  }
  handleChange = event => {
    let obj = {
      text: this.state.editDefaults.text,
      calorie: this.state.editDefaults.calorie
    }
    if (event.target.name === 'text') {
      obj.text = event.target.value;
    }
    if (event.target.name === 'calorie') {
      obj.calorie = event.target.value;
    }
    this.setState({
      editDefaults: obj
    });
  };
  componentDidMount() {
    firebase.firestore().collection('dasfasd').onSnapshot(
      docsHolder => {
        let data = [];
        docsHolder.docs.map((doc) => {
          let obj = doc.data();
          obj.id = doc.id;
          data.push(obj)
        })
        //docs is an array of docs:[doc1,doc2,doc3]
        //each doc contains a data function which give the data of that
        // particular doc, docs:
        // [{ ..., data: () => doc1.data },
        // { ..., data: () => doc2.data }, ...]
        this.setState({
          meals: data
        })
      }
    )

  }

  render() {
    let total = 0;
    this.state.meals.forEach(meal => {
      total += Number(meal.calorie)
    })
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>Calorie Counter</h2>
          <hr />
          <Form defaults={this.state.editDefaults} handleChange={this.handleChange} addMeal={this.addMeal} />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Meal</th>
                <th>Calories</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.meals.map(meal => (
                <Meal
                  key={meal.id}
                  meal={meal}
                  onDelete={() => this.onDelete(meal.id)}
                  onEdit={() => this.onEdit(meal.id)}
                />
              ))}
              <tr>
                <td>Total:</td>
                <td>
                  <span role="img">🍎</span>
                  {total}
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
