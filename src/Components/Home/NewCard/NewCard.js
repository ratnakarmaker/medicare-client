import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import './NewCard.css';
import { Card, Button } from 'react-bootstrap';
import img1 from '../../../images/Elekta.jpg';
import img2 from '../../../images/Harvest.jpg';
import img3 from '../../../images/1-min.jpg';
import img4 from '../../../images/talk.jpeg';

const NewCard = () => {

    return (
        <div className="bg-gray py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <Card className="">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Modern Equipments</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <p className="read">Read More <FontAwesomeIcon icon={faLongArrowAltRight}/></p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Card className="">
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Qualified Doctors</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <p className="read">Read More <FontAwesomeIcon icon={faLongArrowAltRight}/></p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Card className="">
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Healthcare for Kids</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <p className="read">Read More <FontAwesomeIcon icon={faLongArrowAltRight}/></p>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <Card className="">
                            <Card.Img variant="top" src={img4} />
                            <Card.Body>
                                <Card.Title>Healthcare for Kids</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                                <p className="read">Read More <FontAwesomeIcon className="arrow" icon={faLongArrowAltRight}/></p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewCard;