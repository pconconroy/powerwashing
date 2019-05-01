import React, {Component} from 'react'
import {Card, Image} from 'semantic-ui-react'
// import Lightbox from 'react-lightbox-component'
// import Lightbox from 'lightbox-react'
// import '../../node_modules/lightbox-react/style.css'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.images = ['/assets/pw1.jpg', '/assets/pw2.jpg']
    this.state = {
      photoIndex: 0,
      isOpen: false,
      showViewer: false
    }
  }
  nextImage = () => {
    let nextImage
    if (this.state.photoIndex === 1) {
      nextImage = 0
    } else {
      nextImage = this.state.photoIndex + 1
    }
    this.setState({photoIndex: nextImage})
  }
  previousImage = () => {
    let prevImage
    if (this.state.photoIndex === 0) {
      prevImage = 3
    } else {
      prevImage = this.state.photoIndex - 1
    }
    this.setState({photoIndex: prevImage})
  }
  toggleViewer = () => {
    if (this.state.showViewer === false) {
      this.setState({showViewer: true})
    } else {
      this.setState({showViewer: false})
    }
  }

  render() {
    const {photoIndex, isOpen} = this.state
    return (
      <div>
        <div className="about">
          <h1>Project Gallery</h1>
        </div>
        <h1 id="recently-completed">Recently Completed Projects</h1>
        <div id="gallery-row">
          <button onClick={this.toggleViewer}>
            <Card>
              <Card.Content>
                <Card.Header>Sauganash, Chicago, IL</Card.Header>
                <Card.Meta textAlign="center">
                  <Image
                    size="tiny"
                    src={window.location.origin + '/assets/pw1.jpg'}
                  />
                  <Image
                    size="tiny"
                    src={window.location.origin + '/assets/pw2.jpg'}
                  />
                  <Image
                    size="tiny"
                    src={window.location.origin + '/assets/pw3.jpg'}
                  />
                </Card.Meta>
                <Card.Description>
                  Two story home and garage exterior walls, backyard patio,
                  driveway, front porch, front walk
                </Card.Description>
              </Card.Content>
            </Card>
          </button>
          <div />
        </div>
        {this.state.showViewer ? (
          <div id="viewer-row">
            <div id="image-viewer">
              <input
                type="image"
                src={window.location.origin + '/assets/arrowsleft.png'}
                id="back-button"
                onClick={this.previousImage}
              />
              <input
                src={window.location.origin + '/assets/arrowsright.png'}
                type="image"
                id="forward-button"
                onClick={this.nextImage}
              />
              <input
                src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png"
                type="image"
                id="exit-button"
                onClick={this.toggleViewer}
              />

              <img
                src={this.images[this.state.photoIndex]}
                id="image-in-viewer"
              />
              <br />
              <br />
              <br />

              {/* <p id="review-description">
              Yanni is an excellent powerwasher. I would recommend using his
              services again
            </p> */}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Gallery
