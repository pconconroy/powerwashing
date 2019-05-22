import React, {Component} from 'react'
import {Card, Image, Button} from 'semantic-ui-react'
// import Lightbox from 'react-lightbox-component'
// import Lightbox from 'lightbox-react'
// import '../../node_modules/lightbox-react/style.css'
const images = {
  images1: ['/assets/pw1.jpg', '/assets/pw2.jpg', '/assets/pw3.jpg'],
  images3: [
    '/assets/images3pw1.jpg',
    '/assets/images3pw2.jpg',
    '/assets/images3pw3.jpg'
  ],
  images4: ['/assets/images4pw1.jpg'],
  images5: [
    '/assets/images5pw1.jpg',
    '/assets/images5pw2.jpg',
    '/assets/images5pw3.jpg'
  ],
  images6: ['/assets/images6pw1.jpg', '/assets/images6pw2.jpg'],
  images7: ['/assets/images7pw1.jpg', '/assets/images7pw2.jpg']
}
const horizontalImages = ['/assets/pw1.jpg']
class MobileGallery extends Component {
  constructor(props) {
    super(props)
    this.images = ['/assets/pw1.jpg', '/assets/pw2.jpg']
    this.state = {
      photoIndex: 0,
      isOpen: false,
      showViewer: false,
      imageArrayViewer: [],
      orientationStyle: 'image-in-viewer-mobile'
    }
  }

  nextImage = async () => {
    let nextImage
    if (this.state.photoIndex === this.state.imageArrayViewer.length - 1) {
      nextImage = 0
    } else {
      nextImage = this.state.photoIndex + 1
    }
    await this.setState({photoIndex: nextImage})
    this.evaluateOrientation()
  }
  previousImage = async () => {
    let prevImage
    if (this.state.photoIndex === 0) {
      prevImage = this.state.imageArrayViewer.length - 1
    } else {
      prevImage = this.state.photoIndex - 1
    }
    await this.setState({photoIndex: prevImage})
    console.log('index', this.state.photoIndex)
    this.evaluateOrientation()
  }
  toggleViewer = async evt => {
    if (this.state.showViewer === false) {
      await this.changeImageArrayForViewer(evt)
      this.evaluateOrientation()
    }

    if (this.state.showViewer === false) {
      this.setState({showViewer: true})
    } else {
      this.setState({showViewer: false})
    }
  }
  changeImageArrayForViewer = evt => {
    console.log('hererererer', images[evt.target.name])
    this.setState({
      imageArrayViewer: images[evt.target.name]
    })
    console.log('we here baby!!1', evt.target.name)
  }
  evaluateOrientation = () => {
    for (let i = 0; i < horizontalImages.length; i++) {
      if (
        this.state.imageArrayViewer[this.state.photoIndex] ===
        horizontalImages[i]
      ) {
        console.log(
          'helloo boiii',
          this.state.imageArrayViewer[this.state.photoIndex]
        )
        this.setState({orientationStyle: 'horizontal-image-in-viewer-mobile'})
      } else this.setState({orientationStyle: 'image-in-viewer-mobile'})
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
        <div id="gallery-row-mobile">
          <Card class="gal-card-mobile">
            <Card.Content>
              <Card.Header>Wildwood, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  id="meta-pic"
                  size="tiny"
                  src={window.location.origin + '/assets/images7pw1.jpg'}
                />
                <Image
                  id="rotate"
                  size="tiny"
                  src={window.location.origin + '/assets/images7pw2.jpg'}
                />
              </Card.Meta>
              <Card.Description>Gutters and Patio</Card.Description>
            </Card.Content>
            <Button id="high-button" name="images7" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Edgebrook, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images6pw1.jpg'}
                />
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images6pw2.jpg'}
                />
              </Card.Meta>
              <Card.Description>Garage Floor and Patio</Card.Description>
            </Card.Content>
            <Button id="high-button" name="images6" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Wildwood, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images5pw1.jpg'}
                />
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images5pw3.jpg'}
                />
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images5pw2.jpg'}
                />
              </Card.Meta>
              <Card.Description>
                Various walks, two patios, exterior wall, exterior windowsill,
                and landscaping wall
              </Card.Description>
            </Card.Content>
            <Button id="high-button" name="images5" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Lincolnwood, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images4pw1.jpg'}
                />
              </Card.Meta>
              <Card.Description>
                Patio, various walks, exterior basement steps, driveway, and two
                landscaping walls.
              </Card.Description>
            </Card.Content>
            <Button id="high-button" name="images4" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Edgebrook, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images3pw1.jpg'}
                />
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images3pw2.jpg'}
                />
                <Image
                  size="tiny"
                  src={window.location.origin + '/assets/images3pw3.jpg'}
                />
              </Card.Meta>
              <Card.Description>Patio, Walk, Soffit, gutters</Card.Description>
            </Card.Content>
            <Button id="high-button" name="images3" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>Sauganash, Chicago, IL</Card.Header>
              <Card.Meta textAlign="center">
                <Image
                  id="no-rotate"
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
            <Button id="high-button" name="images1" onClick={this.toggleViewer}>
              View Images
            </Button>
          </Card>

          <div />
        </div>
        {this.state.showViewer ? (
          <div id="viewer-row">
            <div id="trans-back" />
            <div id="image-viewer-mobile">
              <input
                type="image"
                src={window.location.origin + '/assets/arrowsleft.png'}
                id="back-button-mobile"
                onClick={this.previousImage}
              />
              <input
                src={window.location.origin + '/assets/arrowsright.png'}
                type="image"
                id="forward-button-mobile"
                onClick={this.nextImage}
              />
              <input
                src="https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png"
                type="image"
                id="exit-button-mobile"
                onClick={this.toggleViewer}
              />

              <img
                src={this.state.imageArrayViewer[this.state.photoIndex]}
                id={this.state.orientationStyle}
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

export default MobileGallery
