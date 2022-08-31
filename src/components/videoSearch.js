import '../css/videoSearch.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col,Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/lazy';

export default function VideoSearch(props){
    return(
        <div id='video-search-body'>
            <div id='video-search-form'>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Input Code
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Input your code"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button variant="success" type="button" className="mb-2">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div id='video-play'>
                <ReactPlayer url={props.url} controls={true} />
            </div>
            <div id='video-bottom'/>
        </div>
    )
}