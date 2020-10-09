import React, { Component } from "react";
import SearchForm from "./ManagerUser/SearchForm";
import Header from "./ManagerUser/Header.jsx";
import DataTable from "./ManagerUser/DataTable";
import AddUser from "./ManagerUser/AddUser";
import Data from "./data.json"
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      dataUser: Data,
      textValue: ''
    }
  }

  showForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  btnSeacrh = (text) => {
    console.log("value: " + text);
    this.setState({
      textValue: text
    })
  }


  btnAdd = (name,tel,permission) => {
    var items ={};
    items.id = uuidv4();
    items.name = name;
    items.tel =tel;
    items.permission = permission;
    //console.log(items);
   var item = this.state.dataUser;
   item.push(items);
   this.setState({
     dataUser:item
   })
  }

  render() {
    var search = [];
    this.state.dataUser.forEach((item) => {
      if ((item.name.toLowerCase().indexOf(this.state.textValue) !== -1 ) || (item.permission.indexOf(this.state.textValue) !== -1 )) {
        search.push(item);
        return false;
      }else if ((item.name.toLowerCase().indexOf(this.state.textValue) !== -1 ) && (item.permission.indexOf(this.state.textValue) !== -1 )) {
        search.push(item);
      }
    })


    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <SearchForm 
              btnForm = {() => this.showForm()} 
              showBtn = {this.state.showForm} 
              btnSearchs = {(text) => this.btnSeacrh(text)} 
              />
              <DataTable Users={search} />
              <AddUser 
              showform = {this.state.showForm}
              btnForm = {() => this.showForm()} 
              Add = {(name,tel,permission)=>this.btnAdd(name,tel,permission)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
