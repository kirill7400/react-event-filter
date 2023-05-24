import React from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtered: [],
      selected: 'All'
    };

    this.filters = ["All", "Websites", "Flayers", "Business Cards"]
    this.selected = 'All'

    this.list = [{
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites"
    }, {
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers"
    }]
  }

  componentDidMount() {
    this.onSelectFilter(this.selected)
  }

  onSelectFilter = (filter) => {
    let filtered
    filter === 'All' ? filtered = this.list : filtered = this.list.filter(item => item.category === filter)
    this.setState({ filtered, selected: filter || this.selected })
  }

  render() {
    return (
      <>
        <Toolbar
          filters={ this.filters }
          selected={ this.state.selected }
          onSelectFilter={ (filter) => this.onSelectFilter(filter) }
        />
        <ProjectList
          projects={ this.state.filtered }
        />
      </>
    )
  }
}

export default Portfolio