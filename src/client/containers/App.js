import React, { Component } from 'react'

import AlertMessage from './../components/AlertMessage'
import Modal from './../components/Modal'
import Spinner from './../components/Spinner'
import Square from './../components/Square'
import Input from './../components/Input'

import { getGnomes } from './../services/gnomes'

class App extends Component {

  state = {
    alert: {
      show: false,
      message: '',
      color: ''
    },
    gnome: {},
    gnomes: [],
    gnomesFiltered: [],
    open: false,
    spinner: true,
  }

  componentWillMount() {
    this.gnomes()
  }

  gnomes() {
    getGnomes().then(gnomes => {
      if(gnomes && Array.isArray(gnomes.Brastlewark)) {
        let alert = {message: 'Success data load', color: '#34e37e', show: true}
        this.setState({ alert, gnomes: gnomes.Brastlewark, gnomesFiltered: gnomes.Brastlewark, spinner: false})
      } else {
        let alert = {message: 'Error data load', color: '#ff0000', show: true}
        this.setState({ alert, spinner: false})
      }
    })
  }

  closeAlert = () => {
    let alert = {show: false}
    this.setState({alert})
  }

  closeModal = () => {
    this.setState({gnome: {}, open: false})
  }

  openModal = (data) => {
    this.setState({gnome: data, open: true})
  }

  filterGnomes = (value) => {
    let gnomes = this.state.gnomesFiltered
    gnomes = gnomes.filter(gnome => gnome.name.toLowerCase().includes(value.toLowerCase()))
    this.setState({
      gnomes
    })
  }

  render() {
    const {message, color, show} = this.state.alert
    const {age, friends, hair_color, height, weight, professions, name} = this.state.gnome
    return(
      <div>
        {this.state.spinner ? 
          <Spinner visible={this.state.spinner} /> :
          [<Input key={1} onHandleChange={this.filterGnomes}/>,
            <ul key={2} className='squares grid'>
              {this.state.gnomes.map((data, i) => 
                <Square 
                  data={data} 
                  name={data.name} 
                  image={data.thumbnail} 
                  key={i} 
                  openModal={this.openModal} 
                />)}
            </ul>,
            <Modal
              key={3}
              title={name} 
              open={this.state.open}
              closeModal={this.closeModal} >
              
              <div>
                <div key={1} >
                  <span>Age:</span>
                  {age}
                </div>
                <div key={2} >
                  <span>Friends:</span>
                  {Array.isArray(friends) && friends.length > 0 ? friends.map(d =>  `-${d} `) : 'Within friends'}
                </div>
                <div key={3} >
                  <span>Hair color:</span>
                  {hair_color === 'Pink'? 'Female' : 'Male'}
                </div>
                <div key={4} >
                  <span>Height:</span>
                  {height}
                </div>
                <div key={5} >
                  <span>Weight:</span>
                  {weight}
                </div>
                <div key={6} >
                  <span>Professions:</span>
                  {Array.isArray(professions) && friends.length > 0 ? professions.map(d =>  `${d} `) : 'Within professions'}
                </div>
              </div>

            </Modal>
            ,
            <AlertMessage 
              closeAlert={this.closeAlert} 
              message={message}
              messageColor={color}
              key={4}
              visible={show}
            />
          ]
        }
      </div>
    )
  }
}

export default App